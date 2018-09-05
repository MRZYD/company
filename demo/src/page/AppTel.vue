<template lang="html">
  <div class="app_tel">
    <div class="app_con3_home">
      <h2 class="app_con3_home_h2">快速联系我们</h2>
      <p class="app_con3_home_p">填上您的联系方式，我们会在半小时内回复您</br>或者拨打 <span>186 1253 4550</span> </p>
      <el-form class="app_con3_form">
        <el-input v-model="input" placeholder="怎么称呼您"></el-input>
        <el-input v-model="input" placeholder="您的联系电话"></el-input>
        <textarea name="name" rows="8" cols="80" placeholder="请用一句话描述您的问题"></textarea>
        <el-button class="app_con3_form_btn">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .app_tel{
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
