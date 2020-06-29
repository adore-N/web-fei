import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AdvertisingResources from './views/AdvertisingResources.vue'
import WechatMoments from './views/WechatMoments.vue'
import Advertising from './views/Advertising.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // 广告资源
    {
      path: '/advertisingResources',
      name: 'advertisingResources',
      component: AdvertisingResources
    },
    // 广告投放
    {
      path: '/advertising',
      name: 'advertisingResources',
      component: Advertising
    },
    // 朋友圈
    {
      path: '/wechatMoments',
      name: 'WechatMoments',
      component: WechatMoments
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
