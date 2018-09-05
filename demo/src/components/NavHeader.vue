<template slot-scope="" lang="html">
  <!-- 菜单 -->
  <div class="nav fff font16">
    <div class="menu">
      <img src="../../static/img/logo.png" class="logo" />
      <el-menu :default-active="activeIndex" id="accordion" class="el-menu-demo accordion right" mode="horizontal" @select="handleSelect">
        <el-submenu index="1" class="link">
          <template slot="title"><router-link to="/">首页</router-link></template>
        </el-submenu>
        <el-submenu index="2" class="link">
          <template slot="title">微信小程序</template>
          <ul class="submenu apply_for_click clearfix">
            <li>
              <!-- <a href="apply_for_click1.html" class="href3">开发小程序</a> -->
              <router-link class="href3" to="/ClickFirst">开发小程序</router-link>
            </li>
            <li>
              <!-- <a class="href5">行业解决方案</a> -->
              <router-link class="href5" to="/ClickSecond">行业解决方案</router-link>
            </li>
            <li>
              <!-- <a href="apply_for_click3.html" class="href1">注册小程序</a> -->
              <router-link class="href1" to="/ClickThird">注册小程序</router-link>
            </li>
            <li>
              <a class="href6">微信卡券功能</a>
            </li>
            <li>
              <!-- <a href="apply_for_click5.html" class="href4">小程序优选</a> -->
              <router-link class="href4" to="/ClickFifth">小程序优选</router-link>
            </li>
            <li>
              <a class="href7">微信服务商</a>
            </li>
          </ul>
          <!-- <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item> -->
        </el-submenu>
        <el-submenu index="3" class="link">
          <template slot="title"><router-link to="/ProdectList">小程序出品</router-link></template>
        </el-submenu>
        <el-submenu index="4" class="link">
          <template slot="title">小程序模板</template>
          <ul class="submenu">
            <li>
              <!-- <a href="shopping.html" class="apply_for3_click1">小熊猫商城</a> -->
              <router-link class="apply_for3_click1" to="/PandaShop">小熊猫商城</router-link>
            </li>
            <li>
              <!-- <a href="food.html" class="apply_for3_click2">小熊猫餐饮</a> -->
              <router-link class="apply_for3_click2" to="/PandaFood">小熊猫餐饮</router-link>
            </li>
          </ul>
        </el-submenu>
        <el-submenu index="5" class="link">
          <template slot="title"><router-link to="">关于我们</router-link></template>
          <ul class="submenu">
            <li>
              <!-- <a href="about_us.html" class="apply_for4_click1">企业文化</a> -->
              <router-link class="apply_for4_click1" to="/AboutUs/#go1">企业文化</router-link>
            </li>
            <li>
              <!-- <a href="about_us.html" class="apply_for4_click2">企业规划</a> -->
              <router-link class="apply_for4_click2" to="/AboutUs/#go2">企业规划</router-link>
            </li>
            <li>
              <!-- <a href="about_us.html" class="apply_for4_click3">发展阶段</a> -->
              <router-link class="apply_for4_click3" to="/AboutUs/#go3">发展阶段</router-link>
            </li>
            <li>
              <!-- <a href="about_us.html" class="apply_for4_click4">关于团队</a> -->
              <router-link class="apply_for4_click4" to="/AboutUs/#go4">关于团队</router-link>
            </li>
          </ul>
        </el-submenu>
      </el-menu>
    </div>
  </div>

</template>

<script>
import '../../static/css/style.css'
import '../../static/css/public.css'
export default {
  data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="css">
.el-menu--horizontal {
  border-right: none;
  border-bottom: solid 0px #e6e6e6;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
  height: 80px;
  line-height: 80px;
  border-bottom: 2px solid transparent;
  font-size: 16px;
  color: #45454d;
}
.el-menu--horizontal>.el-submenu .el-submenu__title a{
  display: inline-block;
  color: #45454d;
  margin-top: -3px;
}
.el-menu--horizontal>.el-submenu .el-submenu__title a:hover{
  color: #1989fb;
}
.el-menu-demo.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
	display:none;
}
.el-menu--popup {
  padding: 0;
  border-radius: 10px;
  background-color: #fff;
}
.el-menu--horizontal>.el-submenu:focus .el-submenu__title, .el-menu--horizontal>.el-submenu:hover .el-submenu__title {
    color: #1989fb;
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 150px;
}
</style>
