import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 四个页面组件
import Index from '../views/index/index.vue'
import Find from '../views/find/find.vue'
import Cart from '../views/cart/cart.vue'
import Mine from '../views/mine/mine.vue'
// import Index from '@/views/index/index.vue'
// import Find from '@/views/find/find.vue'
// import Cart from '@/views/cart/cart.vue'
// import Mine from '@/views/mine/mine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
