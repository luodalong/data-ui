import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import DataUi from '../packages/index'

Vue.use(Element)

// 注册组件库
Vue.use(DataUi)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
