<template lang="html">
  <!-- 电话 -->
  <div id="tel" class="dial-phone">
    <el-button @click="open" class="phone"></el-button>
    <el-dialog :visible.sync="visible">
      <div class="tel6" >
        <!-- <p class="close" data-dismiss='modal'></p> -->
        <p class="font24">快速联系我们</p>
        <p class="font14 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打&nbsp;&nbsp;&nbsp;<text>186 1253 4550</text></p>
        <el-form action="" method="post">
          <el-input type="hidden" value="/Index/index/callus.html" id="jumpurl"></el-input>
          <el-input type="text" id="name" name="name" placeholder="怎么称呼您" class="input" ></el-input>
          <el-input type="text" id="tel" name="tel" placeholder="您的联系电话" class="input" ></el-input>
          <el-input type="text" id="describe" name="describe" placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input" ></el-input>
          <el-button type="button" id="btn" class="submit" >提交</el-button>
        </el-form>
      </div>
      <!-- <div class="container3">
        <div class="tel-sec modal fade" id='show1'>

        </div>
      </div> -->
    </el-dialog>
    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="../../static/img/app/telphone.png" alt=""> </button>
    </router-link>
  </div>
</template>

<script>
import '../../static/css/style.css'
import '../../static/css/public.css'
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    open () {
      this.visible = true
    }
  }
}
</script>

<style>
.dial-phone .el-dialog__wrapper .el-dialog {
    width: 690px;
    border-radius: 10px;
}
.tel6 .el-input__inner {
  height: 50px;
}
</style>
