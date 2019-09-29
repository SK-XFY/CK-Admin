import Vue from 'vue'
//内部组件
import textMore from '~/components/textMore'//文字显示更多
import loading from '~/components/loading'//loading
import snackbar from '~/components/snackbar'//消息弹出框
import imgLoad from '~/components/imgLoad'//异常图片
import uploadFile from '~/components/uploadFile'//文件上传

Vue.component('textMore', textMore)
Vue.component('loading', loading)
Vue.component('imgLoad', imgLoad)
Vue.component('uploadFile', uploadFile)

//第三方组件
import preview from 'vue-photo-preview'//图片查看放大
import 'vue-photo-preview/dist/skin.css'

Vue.use(preview)
export default function({ app }, inject) {
  inject('snackbar', new Vue(snackbar).$mount())
}

