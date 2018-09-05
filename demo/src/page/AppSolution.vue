<template lang="html">
  <div class="app_solu">
    <div class="app_solu_ban">
      <img src="../../static/img/app/app_solut_ban.png" alt="">
    </div>
    <div class="app_solu_sec">
      <ul class="clearfix">
        <li>
          <router-link to="/ClickThird">
            <img src="../../static/img/app/app_solu_img1.png" alt="">
            <span>注册小程序</span>
          </router-link>
        </li>
        <li>
          <router-link to="/ClickFirst">
            <img src="../../static/img/app/app_solu_img2.png" alt="">
            <span>开发小程序</span>
          </router-link>
        </li>
        <li>
          <router-link to="/ClickSecond">
            <img src="../../static/img/app/app_solu_img3.png" alt="">
            <span>行业解决方案</span>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <img src="../../static/img/app/app_solu_img4.png" alt="">
            <span>微信服务商</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="app_home_footer">
      <ul class="clearfix">
        <li>
          <router-link to="/">
            <i></i>
            <span>首页</span>
          </router-link>
        </li>
        <li class="hover">
          <router-link to="/AppSolution">
            <i></i>
            <span>解决方案</span>
          </router-link>
        </li>
        <li>
          <router-link to="/AppCase">
            <i></i>
            <span>案例</span>
          </router-link>
        </li>
        <li>
          <router-link to="/AppMould">
            <i></i>
            <span>模板</span>
          </router-link>
        </li>
        <li>
          <router-link to="/AboutUs">
            <i></i>
            <span>我们</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import '../../static/css/style.css'
import '../../static/css/appsolution.css'
export default {
}
</script>

<style lang="css" scoped>
</style>
