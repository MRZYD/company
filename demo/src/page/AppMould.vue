<template lang="html">
  <div class="app_mould">
    <div class="app_mould_img">
      <router-link to="/PandaShop"><img src="../../static/img/app/app_mould_img1.png" alt=""></router-link>
      <router-link to="/PandaFood"><img src="../../static/img/app/app_mould_img2.png" alt=""></router-link>
      <router-link to="/PandaFood"><img src="../../static/img/app/app_mould_img3.png" alt=""></router-link>
    </div>
    <div class="app_home_footer">
      <ul class="clearfix">
        <li>
          <router-link to="/">
            <i></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
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
        <li class="hover">
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
export default {
}
</script>

<style lang="css" scoped>
.app_mould {
  width: 100%;
  height: 100%;
  background: #fff;
}

.app_mould .app_mould_img{
  padding: 0.625rem;
}

.app_mould .app_mould_img img{
  width: 100%;
  display: block;
  margin-bottom: 0.625rem;
}
</style>
