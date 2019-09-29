// export const oss = 'http://192.168.1.181:5050/oss'
export const edition = 'http://edit.yscro.com/wechat/'
export const api = {
  clinical_search: edition + 'clinical/search',//最近更新
  clinical_detail: edition + 'clinical/detail'//详情
}
export default ({ store }, inject) => {
  // inject('myInjectedFunction', (string) => console.log('That was easy!', string));
  // inject('api', (key) => {
  //   return api
  // })
  inject('api', api)
}
