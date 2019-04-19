import Vue from 'vue'
import App from './App.vue'
// 引入路由对象
import router from './router.js'
// 引入状态管理对象
import store from './store.js'

// weui样式
import 'weui'
import 'swiper/dist/css/swiper.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

// eslint
new Vue({
  el: "#app",
  // 挂载路由实例
  router,
  // 配置状态管理
  store,
  // 渲染App组件
  render: h => h(App),
})
// .$mount('#app')
