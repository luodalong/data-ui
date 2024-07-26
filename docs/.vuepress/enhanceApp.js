import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import DataUi from '../../packages/index'

const requireComponents = require.context('./components', false, /\.vue$/)

export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    Vue.use(DataUi)

    // 遍历引入组件
    requireComponents.keys().forEach(fileName => {
      const config = requireComponents(fileName) // 当前组件
      const componentName = config.default.name // 获取组件名，即vue文件中的name
      Vue.component(componentName, config.default) // 注册组件
    })
  }
}
