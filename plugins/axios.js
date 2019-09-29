export default function ({$axios, req, route, redirect, store, error, app}, inject) {
  let timeout = 5000;//超时时间 post上传文件时取消超时时间
  inject('http', {
    /**
     * 自定义配置
     * loading：开启loading状态
     * scrollTop：请求完成后滚动至页面顶部（get）
     * **/
    'post'(url, data, config) {//提交
      if (config.loading) store.state.loading = true;
      if (!config.update) config.timeout = timeout;
      return $axios.$post(url, {
        data: data
      }, config);
    },
    'delete'(url, {
      data: data
    }, config) {//删除
      if (config.loading) store.state.loading = true;
      config.timeout = timeout;
      return $axios.$delete(url, {
        data: data
      }, config);
    },
    'put'(url, data, config) {//修改
      if (config.loading) store.state.loading = true;
      config.timeout = timeout;
      return $axios.$put(url, {
        data: data
      }, config);
    },
    'get'(url, data, config) {//获取
      if (config.loading) store.state.loading = true;
      if (config.scrollTop && process.client) {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        scrollTop = 0
      }
      config.timeout = timeout;
      return $axios.$get(url, {
        params: {
          data: data
        }
      }, config);
    },
  });
  // $axios.defaults.onDownloadProgress = function (progressEvent) {
  //
  // }
  // $axios.defaults.onUploadProgress = function (progressEvent) {
  //   if (progressEvent.lengthComputable) {
  //     let loaded = progressEvent.loaded,
  //       total = progressEvent.total;
  //     let precent = ((loaded / total) * 100).toFixed(2);
  //     console.log(precent)
  //     // store.commit('set_progress', precent)
  //   }
  // }
  // $axios.defaults.withCredentials = true;
  $axios.onRequest(config => {
    // if (config.method === 'post') config.url = config.url + '?' + new Date().getTime()
  });
  $axios.onResponse(response => {
    // setTimeout(function () {}, 6000);
    store.state.loading = false;
    switch (parseInt(response.data.code)) {
      case 1:
        //请求错误
        // if (process.client) app.$snackbar.start({
        //   text: response.data.msg,
        //   color: 'success',
        //   timeout: 3000,
        // });
        app.$snackbar.start({
          text: response.data.msg,
          color: 'success'
        });
        break;
      case 301:
        //登录身份失效
        // store.commit('set_loginRoute', route)
        break;
      default:

    }
    // app.$snackbar.start({
    //   text: '啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
    //   timeout: 3000,
    // });
    // if (response.config.snackbar && response.data.status === 1) {
    //   store.commit('set_snackbar', {
    //     title: response.data.msg,
    //     current: true
    //   })
    // }

  });

  $axios.onError(err => {
    store.state.loading = false
    // error({
    //   status: err.response.status,
    //   message: err.response.data.message,
    //   error: err.response
    // })
  })
}
