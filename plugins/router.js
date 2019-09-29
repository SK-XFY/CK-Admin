/**
 *
 * nuxt的路由菜单配置
 */

export default ({ app }, inject) => {
  let router = app.$locale.router
  let menus = {
    'layer': {
      icon: 'format_list_numbered_rtl',
      title: router['layer'],
      name: 'layer',
      path: '/layer'
    },
    'layer-layer2': {
      icon: 'looks_two',
      father: 'layer',
      title: router['layer-layer2'],
      name: 'layer-layer2',
      path: '/layer/layer2'
    },
    'layer-layer3': {
      icon: 'looks_two',
      father: 'layer',
      title: router['layer-layer3'],
      name: 'layer-layer3',
      path: '/layer/layer3'
    },
    'layer-layer2-layer3': {
      icon: 'looks_3',
      father: 'layer-layer2',
      title: router['layer-layer2-layer3'],
      name: 'layer-layer2-layer3',
      path: '/layer/layer2/layer3'
    },
    'components': {
      icon: 'usb',
      title: router['components'],
      name: 'components',
      path: '/components'
    },
    'components-imgLoad': {
      icon: 'broken_image',
      father: 'components',
      title: router['components-imgLoad'],
      name: 'components-imgLoad',
      path: '/components/imgLoad'
    },
    'components-loading': {
      icon: 'cloud',
      father: 'components',
      title: router['components-loading'],
      name: 'components-loading',
      path: '/components/loading'
    },
    'components-uploadFile': {
      icon: 'cloud',
      father: 'components',
      title: router['components-uploadFile'],
      name: 'components-uploadFile',
      path: '/components/uploadFile'
    },
    'components-textMore': {
      icon: 'cloud',
      father: 'components',
      title: router['components-textMore'],
      name: 'components-textMore',
      path: '/components/textMore'
    },
    'function': {
      icon: 'filter_none',
      title: router['function'],
      name: 'function',
      path: '/function'
    },
    'function-snackbar': {
      icon: 'cloud',
      father: 'function',
      title: router['function-snackbar'],
      name: 'function-snackbar',
      path: '/function/snackbar'
    },
    'function-http': {
      icon: 'cloud',
      father: 'function',
      title: router['function-http'],
      name: 'function-http',
      path: '/function/http'
    },
    'explain': {
      icon: 'bookmark_border',
      title:  router['explain'],
      name: 'explain',
      path: '/explain'
    },
    'test': {
      icon: 'cloud_queue',
      title:router['test'],
      name: 'test',
      path: '/test'
    }
  }
  inject('routers', menus)
};
