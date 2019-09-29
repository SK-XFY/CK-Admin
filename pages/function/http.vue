<template>
  <v-layout>
    <v-row class="mb-4" no-gutters>
      <v-col :cols="3" class="pr-3">
        <v-card flat>
          <v-subheader class="title red--text">post</v-subheader>
          <v-card-text class="body-1">$http.post(url,data,config)</v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="3" class="pr-3">
        <v-card flat>
          <v-subheader class="title red--text">delete</v-subheader>
          <v-card-text class="body-1">$http.delete(url,data,config)</v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="3" class="pr-3">
        <v-card flat>
          <v-subheader class="title red--text">put</v-subheader>
          <v-card-text class="body-1">$http.post(url,put,config)</v-card-text>
        </v-card>
      </v-col>
      <v-col :cols="3" class="">
        <v-card flat>
          <v-subheader class="title red--text">get</v-subheader>
          <v-card-text class="body-1">$http.get(url,data,config)</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-card flat>
      <v-card-text class="body-1">
        <h3>config配置</h3>
        <div class="mt-3"><span class="red--text">loading</span>:Boolean 获取loading状态:$store.state.loading</div>
        <div class="mt-3"><span class="red--text">update</span>:Boolean 上传状态 post取消请求超时时间</div>
        <div class="mt-3"><span class="red--text">scrollTop</span>:Boolean 是否回到顶部 get加载数据页面回到顶部</div>
        <div class="mt-3">更多请求方法配置:<a class="primary--text" href="https://axios.nuxtjs.org/usage">https://axios.nuxtjs.org/usage</a></div>
        <h3 class="mt-3">config配置</h3>
        <div class="mt-3">为方便api接口统一管理请将请求地址在<span class="mx-1 primary--text">/plugins/api.js</span>调整;调用方法:<span class="mx-1 red--text">this.$api / app.$api</span></div>
        <div class="mt-3">项目业务不同请在<span class="mx-1 primary--text">/plugins/axios.js</span>拦截器中调整请求业务逻辑代码</div>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>

</style>

