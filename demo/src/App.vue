<template>
  <div id="app">
    <!-- 使用头部组件 -->
    <nav-header></nav-header>
    <!-- 路由的出口 -->
    <router-view></router-view>
    <!-- 使用电话组件 -->
    <nav-tel></nav-tel>
    <!-- 使用底部组件 -->
    <nav-footer></nav-footer>
    <!-- <app-footer></app-footer> -->
  </div>
</template>

<script>
// 导入头部
import NavHeader from './components/NavHeader'
// 导入底部
import NavFooter from './components/NavFooter'
// import AppFooter from './components/AppFooter'
// 引入拨打电话
import NavTel from './components/NavTel'

export default {
  components: {
    NavHeader,
    NavFooter,
    NavTel
    // AppFooter
  }
}
</script>
<style media="screen">
  #app{
    min-width: 1300px;
  }

  @media (max-width:640px){
    #app{
      min-width: 100%;
      height: 100%;
      background: #f7f8fa;
    }
  }
</style>
