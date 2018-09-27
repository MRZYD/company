<template lang="html">
  <div class="app_tel">
    <div class="app_con3_home">
      <h2 class="app_con3_home_h2">快速联系我们</h2>
      <p class="app_con3_home_p">填上您的联系方式，我们会在半小时内回复您</br>或者拨打 <span>186 1253 4550</span> </p>
      <el-form class="app_con3_form">
        <el-input v-model="userInfo.name" placeholder="怎么称呼您"></el-input>
        <el-input v-model="userInfo.tel" placeholder="您的联系电话"></el-input>
        <el-input v-model='userInfo.describe' type='textarea' placeholder="请用一句话描述您的问题"></el-input>
        <el-button @click='submit_info()' class="app_con3_form_btn">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户信息
      userInfo: {
        name: "",
        tel: "",
        describe: ""
      }
    };
  },
  methods: {
    /**
     * 提交用户信息
     */
    submit_info() {
      var that = this;
      if (!that.userInfo.tel) {
        that.$notify({
          title: "提示",
          message: "请填写您的电话号码"
        });
        return;
      }

      // 手机号验证
      var reg = /^1\d{10}$/;
      // 座机号
      var reg2 = /([0-9]{3,4}-)?[0-9]{7,8}/;
      if (!reg.test(that.userInfo.tel) && !reg2.test(that.userInfo.tel)) {
        that.$notify({
          title: "提示",
          message: "请正确填写您的电话号码"
        });
        return;
      }

      var formData = {};
      formData.name = that.userInfo.name;
      formData.tel = that.userInfo.tel;
      formData.describe = that.userInfo.describe;

      var formData = {};
      formData.name = that.userInfo.name;
      formData.number = that.userInfo.tel;
      formData.description = that.userInfo.describe;

      that.$http
        .post(that.adminApi.api_url + "/cx/Index/index_fast", formData, {
          emulateJSON: true
        })
        .finally(res => {
          that.$notify({
            title: "提示",
            message: "提交成功,我们会尽快联系您",
            type: "success"
          });

          that.userInfo.name = "";
          that.userInfo.tel = "";
          that.userInfo.describe = "";
        });
    }
  }
};
</script>

<style>
.app_tel {
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
