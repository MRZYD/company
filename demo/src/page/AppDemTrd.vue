<template lang="html">
  <div class="modal app_dem1" id='show6' data-backdrop="false">
    <div class="modal-dialog">
      <div class="state">
        <ul class="clearfix">
          <li>
            <img src="../../static/img/index/index-alert2/alert2-state1.png" class="alert2_photo" />
            <p class="font14 black">应用领域</p>
          </li>
          <li>
            <div class="alert2-circle2-hl"></div>
          </li>
          <li>
            <img src="../../static/img/index/index-alert2/alert2-state2-hl.png" class="alert2_photo" />
            <p class="font14 black">选择功能模块</p>
          </li>
          <li>
            <div class="alert2-circle2-hl"></div>
          </li>
          <li>
            <img src="../../static/img/index/index-alert2/alert2-state3-hl.png" class="alert2_photo" />
            <p class="font14  black">提交需求</p>
          </li>
        </ul>
      </div>
      <div class="alert2_choice font16">
        <p class="xu font12">您已经选择了小程序相关信息，请填写以下资料让我们快速与您联系!</p>
      </div>
    </div>
    <el-form class="form-footer form-footer-dem3">
      <div class="form-footer-sec">
        <el-input placeholder="怎么称呼您" class="input"></el-input>
        <el-input placeholder='您的联系电话' class="input"></el-input>
        <textarea name="name" rows="8" cols="80" class="textarea" placeholder="请用一句话描述您的问题"></textarea>
      </div>
      <div class="form-footer-btn">
        <router-link to="/AppDemSec"><el-button class="dem2_btn_last">上一步</el-button></router-link>
        <span class="btn-line"></span>
        <router-link to="/"><el-button class="dem2_btn_next">提交需求</el-button></router-link>
      </div>
    </el-form>
  </div>
</template>

<script>
import "../../static/css/style.css"
import "../../static/css/appdem.css"
export default {
}
</script>

<style lang="css" scoped>
</style>
