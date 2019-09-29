export const locale = {
  cn: {
    router: {
      'layer': '三层树形导航示例',
      'layer-layer2': '层级2.1',
      'layer-layer3': '层级2.2',
      'layer-layer2-layer3': '层级3',
      'components': '全局组件',
      'components-imgLoad': '图片异常',
      'components-loading': '局部loading',
      'components-uploadFile': '文件上传',
      'components-textMore': '文字超出更多',
      'function': '功能模块',
      'function-snackbar': '消息提示框',
      'function-http': 'http请求方法',
      'explain': '升级说明',
      'test': '测试数据编辑缓存'
    },
    layout: {
      locale: '语言',
      'login-time': '登录时间'
    }
  },
  en: {
    router: {
      'layer': 'ThreeDemo',
      'layer-layer2': 'Level 2.1',
      'layer-layer3': 'Level 2.2',
      'layer-layer2-layer3': 'Level 3',
      'components': 'components',
      'components-imgLoad': 'components-imgLoad',
      'components-loading': 'components-loading',
      'components-uploadFile': 'components-uploadFile',
      'components-textMore': 'components-textMore',
      'function': 'function',
      'function-snackbar': 'function-snackbar',
      'function-http': 'function-http',
      'explain': 'explain',
      'test': 'test'
    },
    layout: {
      locale: 'locale',
      'login-time': 'login-time'
    }
  }
}
export default function({ app }, inject) {
  inject('locale', locale[app.$cookies.get('locale') || 'cn'] || locale['cn'])
}
