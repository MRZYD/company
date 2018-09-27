<template>
  <!-- 菜单 -->
  <div class="nav fff font16">
    <div class="menu">
      <router-link to="/"><img src="http://pd10b0don.bkt.clouddn.com/logo.png" class="logo" /></router-link>

      <el-menu :default-active="activeIndex" active-text-color='#409EFF' text-color='#45454d' id="accordion" router class="el-menu-demo accordion right" mode="horizontal">
        <el-menu-item class="link" style="font-size: 16px;" index="/">首页</el-menu-item>
        <el-submenu index="2" class="link">
          <template style="height: 80px; line-height: 80px;" slot="title">微信小程序</template>

          <div class="submenu apply_for_click clearfix">
            <el-menu-item class="el_href href3" index="/ClickFirst">开发小程序</el-menu-item>
            <el-menu-item class="el_href href5" index="/ClickSecond">行业解决方案</el-menu-item>
            <el-menu-item class="el_href href1" index="/ClickThird">注册小程序</el-menu-item>
            <el-menu-item index='#' class="href6">微信卡券功能</el-menu-item>
            <el-menu-item class="el_href href4" index="/ClickFifth">小程序优选</el-menu-item>
            <el-menu-item index='#' class="href7">微信服务商</el-menu-item>
          </div>
        </el-submenu>

        <el-menu-item class="link" style="font-size: 16px;" index="/ProdectList">小程序出品</el-menu-item>

        <el-submenu index="4" class="link">
          <template style="height: 80px; line-height: 80px;" slot="title">小程序模板</template>
          <div class="submenu">
            <el-menu-item class="app_for el_href apply_for3_click1" index="/PandaShop">小熊猫商城</el-menu-item>
            <el-menu-item class="app_for el_href apply_for3_click2" index="/PandaFood">小熊猫餐饮</el-menu-item>
          </div>
        </el-submenu>

        <el-submenu index="5" class="link">
          <template style="height: 80px; line-height: 80px;" slot="title">关于我们</template>
          <div class="submenu">
            <el-menu-item class="app_for el_href apply_for4_click1" index="/AboutUs#go1">企业文化</el-menu-item>
            <el-menu-item class="app_for el_href apply_for4_click2" index="/AboutUs#go2">企业规划</el-menu-item>
            <el-menu-item class="app_for el_href apply_for4_click3" index="/AboutUs#go3">发展阶段</el-menu-item>
            <el-menu-item class="app_for el_href apply_for4_click4" index="/AboutUs#go4">关于团队</el-menu-item>
          </div>
        </el-submenu>
      </el-menu>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {}
};
</script>

<style lang="css">
@import "../../static/css/style.css";
@import "../../static/css/public.css";

.dis_flex {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
body .el-menu--horizontal .el-menu .apply_for_click .el-menu-item {
  /* flex: 0 0 50%; */
  width: 50%;
  margin: 0;
  float: left;
  margin-bottom: 10px;
}

body > .el-menu--horizontal {
  border: 0;
}

body > .el-menu--horizontal > .el-menu--popup {
  padding: 0;
  border-radius: 10px;
  min-width: 150px;
}

.menu .el-menu--horizontal {
  border: 0;
}

.menu .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 80px;
  line-height: 80px;
  font-size: 16px;
}

.menu .el-menu--horizontal .el-menu-item:hover {
  color: rgb(64, 158, 255) !important;
}

.menu .el-menu--horizontal > .is-opened .el-submenu__title {
  color: rgb(64, 158, 255) !important;
}

.menu .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none;
}
</style>
