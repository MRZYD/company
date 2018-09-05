// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入vue核心
import Vue from 'vue'
// 引入App组件
import App from './App'
// 引入路由
import router from './router'
// 引入饿了么ui
import ElementUI from 'element-ui'
// 引入饿了么样式
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由管理器
import VueRouter from 'vue-router'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// 关闭产品提示，现在在开发环境
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局安装路由功能
Vue.use(VueRouter) // 全局安装UI功能
Vue.use(VueAwesomeSwiper) // 全局安装swiper
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App }

})
