<template lang="html">
  <!-- 电话 -->
  <div id="tel" class="dial-phone">
    <el-button @click="open" class="phone"></el-button>
    <el-dialog :visible.sync="visible">
      <div class="tel6" >
        <!-- <p class="close" data-dismiss='modal'></p> -->
        <p class="font24">快速联系我们</p>
        <p class="font14 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打&nbsp;&nbsp;&nbsp;<span>186 1253 4550</span></p>
        <el-form action="" method="post">
          <el-input type="hidden" value="/Index/index/callus.html" id="jumpurl"></el-input>
          <el-input v-model="userInfo.name" type="text" id="name" name="name" placeholder="怎么称呼您" class="input" ></el-input>
          <el-input v-model="userInfo.tel"  type="text" id="tel" name="tel" placeholder="您的联系电话" class="input" ></el-input>
          <el-input v-model="userInfo.describe" type="text" id="describe" name="describe" placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input" ></el-input>
          <el-button type="primary" @click='submit_info()' class="submit">提交</el-button>
        </el-form>
      </div>
      <!-- <div class="container3">
        <div class="tel-sec modal fade" id='show1'>

        </div>
      </div> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      // 用户信息
      userInfo: {
        name: "",
        tel: "",
        describe: ""
      }
    };
  },
  methods: {
    open() {
      this.visible = true;
    },

    /**
     * 提交用户信息
     */
    submit_info() {
      var that = this;
      if (!that.userInfo.tel)
        return that.$message.warning("请填写您的电话号码");

      // 手机号验证
      var reg = /^1\d{10}$/;
      // 座机号
      var reg2 = /([0-9]{3,4}-)?[0-9]{7,8}/;
      if (!reg.test(that.userInfo.tel) && !reg2.test(that.userInfo.tel)) {
        return that.$message.warning("请正确您的填写电话号码");
      }

      var formData = {};
      formData.name = that.userInfo.name;
      formData.number = that.userInfo.tel;
      formData.description = that.userInfo.describe;

      that.$http
        .post(that.adminApi.api_url + "/cx/Index/index_fast", formData, {
          emulateJSON: true
        })
        .finally(res => {
          that.$message.success("提交成功,我们会尽快联系您");
          that.userInfo.name = "";
          that.userInfo.tel = "";
          that.userInfo.describe = "";
        });
    }
  }
};
</script>

<style>
@import "../../static/css/style.css";
@import "../../static/css/public.css";

.dial-phone .el-dialog__wrapper .el-dialog {
  width: 690px;
  border-radius: 10px;
}
.tel6 .el-input__inner {
  height: 50px;
}
</style>
