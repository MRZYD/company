<template lang="html">
  <div class="card_sec">
    <div class="card_ban app_consec">
      <img src="http://pd10b0don.bkt.clouddn.com/Card_banner.jpg" alt="">
    </div>

    <div class="app_card_ban">
      <img src="http://pd10b0don.bkt.clouddn.com/app_card_ban.png" alt="">
    </div>

    <div class="card_con1 container">
      <div class="card_con1_top clearfix">
        <div class="con1_box">
          <h2>什么是微信小程序礼品卡</h2>
          <p>礼品卡是由商户发行，用户通过微信小程序购买，可转赠给朋友使用的虚拟卡券。</p>
          <p>微信为礼品卡商户提供了一套完整的微信礼品卡的创建、销售以及使用流程，客户可以在微信卡券平台通过APP创建礼品卡、创建礼品卡货架、调用接口进行余额同步。开发者通过将创建的礼品货架配置在公众号或生成二维码贴在门店进行礼品卡的售卖。</p>
        </div>
        <img src="http://pd10b0don.bkt.clouddn.com/Card_02.jpg" alt="">
      </div>
      <div class="card_con1_top clearfix app_card_con1_top">
        <div class="con1_box">
          <h2>微信礼品卡有哪些优势</h2>
          <p>1. 卡包收纳、存储，用户再也不用担心弄丢礼品卡了;</p>
          <p>2. 原生社交转赠流程顺畅、安全，朋友之间赠送礼品卡变得更加容易了；</p>
          <p>3. 打开礼品卡礼包的惊喜感，让收到礼品的朋友享受双重喜悦；</p>
          <p>4. 商户使用微信提供的动态码能力，可以免开发就可以使用安全的二维码储值消费流程；</p>
          <p>5. 多渠道售卖，商户可以将礼品卡货架配置在公众号菜单、图文、二维码甚至广告渠道进行销售</p>
        </div>
        <img src="http://pd10b0don.bkt.clouddn.com/Card_13.jpg" alt="">
      </div>
      <div class="card_con1_bottom clearfix app_consec">
        <img src="http://pd10b0don.bkt.clouddn.com/Card_13.jpg" alt="">
        <div class="con1_box">
          <h2>微信礼品卡有哪些优势</h2>
          <p>1. 卡包收纳、存储，用户再也不用担心弄丢礼品卡了;</p>
          <p>2. 原生社交转赠流程顺畅、安全，朋友之间赠送礼品卡变得更加容易了；</p>
          <p>3. 打开礼品卡礼包的惊喜感，让收到礼品的朋友享受双重喜悦；</p>
          <p>4. 商户使用微信提供的动态码能力，可以免开发就可以使用安全的二维码储值消费流程；</p>
          <p>5. 多渠道售卖，商户可以将礼品卡货架配置在公众号菜单、图文、二维码甚至广告渠道进行销售</p>
        </div>
      </div>
    </div>
    <div class="card_con2 container">
      <div class="card_con2_sec">
        <h2>如何开通微信礼品卡</h2>
        <ul class="clearfix">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_11.png" alt="">
            <h3>认证公众号</h3>
            <span>拥有一个认证公众号并开通卡券功能</span>
          </li>
          <p></p>
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_22.png" alt="">
            <h3>专用小程序</h3>
            <span>拥有一个认证小程序（礼品卡专用）</span>
          </li>
          <p></p>
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_33.png" alt="">
            <h3>微信商户号</h3>
            <span>要使用公众号申请商户号</span>
          </li>
          <p></p>
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_44.png" alt="">
            <h3>门点信息</h3>
            <span>公众号后台添加门店信息</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card_con3 container">
      <div class="card_con3_sec">
        <h2>如何创建礼品卡</h2>
        <ul class="clearfix">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_111.png" alt="">
            <span>礼品卡系统后台开发</span>
          </li>
          <p></p>
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_222.png" alt="">
            <span>上传礼品卡具体信息</span>
          </li>
          <p></p>
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Card_333.png" alt="">
            <span>礼品卡创建成功</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="card_con4 container">
      <div class="card_con4_sec">
        <h2>礼品卡如何展示</h2>
        <ul class="clearfix app_consec">
          <li><img src="http://pd10b0don.bkt.clouddn.com/Card_1111.png" alt=""></li>
          <li><img src="http://pd10b0don.bkt.clouddn.com/Card_2222.png" alt=""></li>
          <li><img src="http://pd10b0don.bkt.clouddn.com/Card_3333.png" alt=""></li>
          <li><img src="http://pd10b0don.bkt.clouddn.com/Card_4444.png" alt=""></li>
        </ul>
        <div class="app_card_swiper">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <img src="http://pd10b0don.bkt.clouddn.com/Card_1111.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="http://pd10b0don.bkt.clouddn.com/Card_2222.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="http://pd10b0don.bkt.clouddn.com/Card_3333.png" alt="">
            </swiper-slide>
            <swiper-slide>
              <img src="http://pd10b0don.bkt.clouddn.com/Card_4444.png" alt="">
            </swiper-slide>
            <div class="ab_swiper-pagination "  slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="card_con5 container">
      <div class="card_con5_sec">
        <h2>礼品卡如何使用</h2>
        <ul class="clearfix">
          <li>
            <h3>线下使用</h3>
            <p>开发者制作的礼品卡以二维码或条形码作为扣款识别码，用户到店时，出示二维码、条形码，商户POS识别后请求微信询问身份并进行余额扣减动作。</p>
          </li>
          <li>
            <h3>线上使用</h3>
            <p>用户购买礼品卡后，在礼品卡面上调转至商户线上商城进行选择、购买，并在下单时默认选择“礼品卡”支付渠道。商户收到扣款请求后，可向微信请求变更余额。</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="app_con4_home">
      <h3 class="app_con4_h3">小程序（北京）科技有限公司</h3>
      <p class="app_con4_p">联系电话：010-58460550</p>
      <p class="app_con4_p">电子邮箱：hc.ji@xiaocx.work</p>
      <p class="app_con4_p">联系地址：北京市海淀区农大南路88号万霖大厦</p>
      <div class="app_con4_img">
        <div class="app_con4_image">
          <img src="http://pd10b0don.bkt.clouddn.com/home_gzh.png" alt="">
          <span>关注公众号</span>
        </div>
        <div class="app_con4_image">
          <img src="http://pd10b0don.bkt.clouddn.com/boss-erweima.png" alt="">
          <span>加我微信</span>
        </div>
      </div>
      <span class="app_con4_span">Copyright©2016-2017 小程序（北京）科技有限公司  |  京ICP备17004176</span>
    </div>

    <!-- 联系我们 -->
    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
    </router-link>
  </div>
</template>

<script>
import '../../static/css/style.css'
import '../../static/css/solufirst.css'
export default {
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto', //宽度自定义
        spaceBetween: 10, //swiper右边距
        freeMode: true, //不贴合边缘
        observer: true
        }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
      //可以使用swiper这个对象去使用swiper官网中的那些方法
      console.log('this is current swiper instance object', this.swiper);
       // this.swiper.slideTo(0, 0, false);
  }
}
</script>

<style lang="css" scoped>
</style>
