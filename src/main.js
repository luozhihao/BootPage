/**
  * 
  * @authors luozh
  * @date    2016-07-21 15:08:35
  * @description 主入口模块
  */

import Vue from 'vue'
import Vue_Router from 'vue-router'
import Vue_Resource from 'vue-resource'

import routerMap from './routers.js'
import App from './App.vue'

Vue.use(Vue_Router)
Vue.use(Vue_Resource)

// 请求编码转换
Vue.http.options.emulateJSON = true

var router = new Vue_Router({
    hashbang: true,
    history: false,
    saveScrollPosition: false,
    transitionOnLoad: true,
    linkActiveClass: 'active'
})

// 全局的前置钩子函数，在路由切换开始时调用
router.beforeEach(function(){
    window.scrollTo(0,0)
})

// 独立出来的路由
routerMap(router)

router.start(App, '#app')