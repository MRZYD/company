<template>
  <div  style="background:fff;width:100%;height:100%;">
    <div v-show='step == 1' class="modal app_dem1">
      <div class="modal-dialog">
        <div class="state">
          <ul class="clearfix">
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state1.png" class="alert2_photo" />
              <p class="font14 black">应用领域</p>
            </li>
            <li>
              <div class="alert2-circle1"></div>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state2.png" class="alert2_photo" />
              <p class="font14">选择功能模块</p>
            </li>
            <li>
              <div class="alert2-circle2"></div>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state3.png" class="alert2_photo" />
              <p class="font14">提交需求</p>
            </li>
          </ul>
        </div>
        <div class="alert2_choice font16">
          <p class="xu font12">无论走多远都希望您坚持自己的初衷，让更多的人能够使用到产品带来的愉悦，请在下面选择您要解决问题的行业痛点。</p>
          <ul class="clearfix">
            <li class="alert2_choice_ul_li hover"><span class="alert2_choice_state1"></span>餐饮行业</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state2"></span>旅游出行</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state3"></span>工具应用</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state4"></span>电商购物</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state5"></span>社交通讯</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state6"></span>教育行业</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state7"></span>信息资讯</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state8"></span>投资理财</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state9"></span>健康医疗</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state10"></span>生活服务</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state11"></span>媒介中介</li>
            <li class="alert2_choice_ul_li">
              <span class="alert2_choice_state12"></span>文化娱乐</li>
          </ul>
        </div>
      </div>
      <el-form class="form-footer form-footer-fixed">
        <el-button @click="step = 2" class="dem_btn_next">下一步</el-button>
      </el-form>
    </div>

    <div v-show='step == 2' class="modal app_dem1">
      <div class="modal-dialog">
        <div class="state">
          <ul class="clearfix">
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state1.png" class="alert2_photo" />
              <p class="font14 black">应用领域</p>
            </li>
            <li>
              <div class="alert2-circle1-hl"></div>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state2-hl.png" class="alert2_photo" />
              <p class="font14 black">选择功能模块</p>
            </li>
            <li>
              <div class="alert2-circle2"></div>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state3.png" class="alert2_photo" />
              <p class="font14">提交需求</p>
            </li>
          </ul>
        </div>
        <div class="alert2_choice font16">
          <p class="xu font12">请勾选才【餐饮行业】包含的功能模块，
          </p>
          <ul class="alert2_ul font16">
            <li class="alert2_ul_li hover">扫码点餐</li>
            <li class="alert2_ul_li">员工管理</li>
            <li class="alert2_ul_li">卡券功能</li>
            <li class="alert2_ul_li">分销商</li>
            <li class="alert2_ul_li">分享朋友</li>
            <li class="alert2_ul_li">门店管理</li>
            <li class="alert2_ul_li">数据统计</li>
            <li class="alert2_ul_li">限时特惠</li>
            <li class="alert2_ul_li">热门推荐</li>
            <li class="alert2_ul_li">微信支付</li>
            <li class="alert2_ul_li">打印小票</li>
            <li class="alert2_ul_li">排队叫号</li>
            <li class="alert2_ul_li">扫码点餐</li>
            <li class="alert2_ul_li">员工管理</li>
            <li class="alert2_ul_li">卡券功能</li>
            <li class="alert2_ul_li">分销商</li>
            <li class="alert2_ul_li">分享朋友</li>
            <li class="alert2_ul_li">门店管理</li>
            <li class="alert2_ul_li">数据统计</li>
            <li class="alert2_ul_li">限时特惠</li>
            <li class="alert2_ul_li">热门推荐</li>
            <li class="alert2_ul_li">微信支付</li>
            <li class="alert2_ul_li">打印小票</li>
            <li class="alert2_ul_li">排队叫号</li>
          </ul>
        </div>
      </div>
      <el-form class="form-footer form-footer-fixed">
        <el-button class="dem2_btn_last" @click="step = 1">上一步</el-button>
        <span class="btn-line"></span>
        <el-button class="dem2_btn_next" @click="step = 3">下一步</el-button>
      </el-form>
    </div>

    <div v-show='step == 3' class="modal app_dem1">
      <div class="modal-dialog">
        <div class="state">
          <ul class="clearfix">
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state1.png" class="alert2_photo" />
              <p class="font14 black">应用领域</p>
            </li>
            <li>
              <div class="alert2-circle2-hl"></div>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state2-hl.png" class="alert2_photo" />
              <p class="font14 black">选择功能模块</p>
            </li>
            <li>
              <div class="alert2-circle2-hl"></div>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/alert2-state3-hl.png" class="alert2_photo" />
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
          <el-input type="textarea" rows="4" placeholder="请用一句话描述您的问题"></el-input>
        </div>
        <div class="form-footer-btn">
          <el-button class="dem2_btn_last" @click="step = 2">上一步</el-button>
          <span class="btn-line"></span>
          <el-button class="dem2_btn_next">提交需求</el-button>
        </div>
      </el-form>
    </div>

  </div>
</template>

<script src='../../static/js/AppDemFri.js'></script>

<style>
@import "../../static/css/style.css";
@import "../../static/css/appdem.css";
</style>
