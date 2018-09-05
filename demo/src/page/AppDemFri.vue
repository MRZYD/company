<template lang="html">
  <div class="modal app_dem1">
    <div class="modal-dialog">
      <div class="state">
        <ul class="clearfix">
          <li>
            <img src="../../static/img/index/index-alert2/alert2-state1.png" class="alert2_photo" />
            <p class="font14 black">应用领域</p>
          </li>
          <li>
            <div class="alert2-circle1"></div>
          </li>
          <li>
            <img src="../../static/img/index/index-alert2/alert2-state2.png" class="alert2_photo" />
            <p class="font14">选择功能模块</p>
          </li>
          <li>
            <div class="alert2-circle2"></div>
          </li>
          <li>
            <img src="../../static/img/index/index-alert2/alert2-state3.png" class="alert2_photo" />
            <p class="font14">提交需求</p>
          </li>
        </ul>
      </div>
      <div class="alert2_choice font16">
        <p class="xu font12">无论走多远都希望您坚持自己的初衷，让更多的人能够使用到产品带来的愉悦，请在下面选择您要解决问题的行业痛点。</p>
        <ul class="clearfix">
          <li class="alert2_choice_ul_li hover"><span class="alert2_choice_state1"></span>餐饮行业</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state2"></span>旅游出行</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state3"></span>工具应用</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state4"></span>电商购物</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state5"></span>社交通讯</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state6"></span>教育行业</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state7"></span>信息资讯</li>
          <li class="alert2_choice_ul_li hover"><span class="alert2_choice_state8"></span>投资理财</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state9"></span>健康医疗</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state10"></span>生活服务</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state11"></span>媒介中介</li>
          <li class="alert2_choice_ul_li"><span class="alert2_choice_state12"></span>文化娱乐</li>
        </ul>
      </div>
    </div>
    <el-form class="form-footer form-footer-fixed">
      <router-link to="/AppDemSec"><el-button class="dem_btn_next">下一步</el-button></router-link>
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
