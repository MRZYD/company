<template lang="html">
  <div class="content">
    <!-- 内容一 -->
    <div class="prd_sec_con1 app_consec">
      <div class="width clearfix">
        <div class="pro_phase">
          <span>第一期</span>
          <span class="hover">第二期</span>
        </div>
        <div class="phase_box">
          <!-- 第一期 -->
          <div class="phase_box1 prd_box">
            <!-- pc端 -->
            <div class="prd_box_pc hover">
              <div class="proban left">
                <el-carousel>
                  <el-carousel-item v-for="item in pcban" :key="item">
                    <h3>
                      <img :src="item.img1" alt="">
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="right">
                <p class="right_title font14">网页端</p>
                <p class="font36">库艾小程序</p>
                <p class="right_time font14">开发周期：30个工作日</p>
                <p class="right_describe font16">为创业者提供全面、优质的综合性创业资源，为创业项目及创业者的自身发展提供多方资源支持。</p>
              </div>
            </div>
            <!-- 小程序 -->
            <div class="prd_box_app">
              <div class="proban left">
                <el-carousel :interval="4000" type="card" >
                  <el-carousel-item v-for="item in appban" :key="item">
                    <h3>
                      <img :src="item.img1" alt="">
                      <span></span>
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="right">
                <p class="right_title font14">微信小程序</p>
                <p class="font36">库艾小程序</p>
                <p class="right_time font14">开发周期：30个工作日</p>
                <p class="right_describe font16">为创业者提供全面、优质的综合性创业资源，为创业项目及创业者的自身发展提供多方资源支持。</p>
              </div>
            </div>
          </div>
          <!-- 第二期 -->
          <div class="phase_box2 hover prd_box">
            <!-- PC端 -->
            <div class="prd_box_pc hover">
              <div class="proban left">
                <el-carousel>
                  <el-carousel-item v-for="item in pcban" :key="item">
                    <h3>
                      <img :src="item.img1" alt="">
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="right">
                <p class="right_title font14">网页端</p>
                <p class="font36">库艾小程序</p>
                <p class="right_time font14">开发周期：30个工作日</p>
                <p class="right_describe font16">为创业者提供全面、优质的综合性创业资源，为创业项目及创业者的自身发展提供多方资源支持。</p>
              </div>
            </div>
            <!-- 小程序 -->
            <div class="prd_box_app">
              <div class="proban left">
                <el-carousel :interval="4000" type="card" >
                  <el-carousel-item v-for="item in appban" :key="item">
                    <h3>
                      <img :src="item.img1" alt="">
                      <span></span>
                    </h3>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="right">
                <p class="right_title font14">微信小程序</p>
                <p class="font36">库艾小程序</p>
                <p class="right_time font14">开发周期：30个工作日</p>
                <p class="right_describe font16">为创业者提供全面、优质的综合性创业资源，为创业项目及创业者的自身发展提供多方资源支持。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pro_divise">
          <span class="">微信小程序</span>
          <span class="hover">网页端</span>
        </div>
      </div>
    </div>
    <!--内容二-->
    <div class="prd_sec_con2 app_consec">
      <p class="con2_title font30">功能模块</p>
      <p class="con2_character font16">根据客户需求开发相应的功能模块</p>
      <div class="con2_module">
        <ul>
          <li>
            <p class="font18">入驻服务：</p>
            <p class="font14">申请成为车库咖啡服务商</p>
          </li>
          <li>
            <p class="font18">企业资料</p>
            <p class="font14">申请入驻后免费查看所有企业联系信息</p>
          </li>
          <li>
            <p class="font18">找投资</p>
            <p class="font14">快速联系投资企业，咨询职业经济人</p>
          </li>
          <li>
            <p class="font18">提供服务</p>
            <p class="font14">提供优质服务让获得更多展示机会</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 移动端内容一 -->
    <div class="app_prd_con1">
      <!--移动端的pc、小程序 banner -->
      <div class="app_con1_ban">
        <!-- pc端 -->
        <div class="app_pc_ban hover">
          <div class="proban left">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="item in pcban" :key="item">
                <h3>
                  <img :src="item.img1" alt="">
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 小程序 -->
        <div class="app_xcx_ban ">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="item in appban" :key="item">
              <img :src="item.img1" alt="">
            </swiper-slide>
            <div class="appxcx_swiper-pagination "  slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <!-- 小程序版本  -->
      <div class="app_sec_box">
        <!-- 小程序第一版 -->
        <div class="app_box_fir">
          <h2>蹭导游服务平台V1.0</h2>
          <h4>开发周期：30个工作日</h4>
          <p>一个有故事的导游预约平台，游客可以通过蹭导游小程序进行，预约私人导游和共享经济下的拼导游（共享导游）</p>
          <div class="app_box_fir_span">
            <span>微信小程序</span>
            <span>旅游</span>
            <span>游玩</span>
          </div>
        </div>
        <!-- 小程序第二版 -->
        <div class="app_box_fir hover">
          <h2>蹭导游服务平台V2.0</h2>
          <h4>开发周期：30个工作日</h4>
          <p>一个有故事的导游预约平台，游客可以通过蹭导游小程序进行，预约私人导游和共享经济下的拼导游（共享导游）</p>
          <div class="app_box_fir_span">
            <span>微信小程序</span>
            <span>旅游</span>
            <span>游玩</span>
          </div>
        </div>
        <!-- 版本列表 -->
        <div class="app_box_li">
          <h2>第一期</h2>
          <h2 class="hover">第二期</h2>
        </div>
      </div>
    </div>
    <!-- pc 小程序切换 悬浮菜单 -->
    <div class="app_xp_menu">
      <h2>微信小程序</h2>
      <span></span>
      <h2>网页端</h2>
    </div>
    <!-- 移动端内容二 -->
    <div class="app_prd_con2">
      <h2 class="app_prd_con2_h2">功能模块</h2>
      <ul>
        <li>
          <h3><span></span>拼导游</h3>
          <p>拼导游服务属于类似拼团一样，让更多人可以花少量的钱享受导游的服务</p>
        </li>
        <li>
          <h3><span></span>拼导游</h3>
          <p>拼导游服务属于类似拼团一样，让更多人可以花少量的钱享受导游的服务</p>
        </li>
        <li>
          <h3><span></span>拼导游</h3>
          <p>拼导游服务属于类似拼团一样，让更多人可以花少量的钱享受导游的服务</p>
        </li>
        <li>
          <h3><span></span>拼导游</h3>
          <p>拼导游服务属于类似拼团一样，让更多人可以花少量的钱享受导游的服务</p>
        </li>
      </ul>
    </div>
    <!--内容三-->
    <div class="prd_sec_con3">
      <div class="width">
        <p class="con3_title font30">技术包含</p>
        <p class="con3_character font16">在开发中，我们用到这些技术</p>
        <div class="con3_photo">
          <ul class="clearfix">
            <li>
              <img src="../../static/img/cengdaoyou/php.png" />
              <p class="font12">PHP</p>
            </li>
            <li>
              <img src="../../static/img/cengdaoyou/mysql.png" />
              <p class="font12">MySQL</p>
            </li>
            <li>
              <img src="../../static/img/cengdaoyou/xiaocx.png" />
              <p class="font12">微信小程序</p>
            </li>
            <li>
              <img src="../../static/img/cengdaoyou/Sketch.png" />
              <p class="font12">Sketch</p>
            </li>
            <li>
              <img src="../../static/img/cengdaoyou/ps.png" />
              <p class="font12">PhotoShop</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--内容四-->
    <div class="prd_sec_con4">
      <p class="con4_title font30">服务项目</p>
      <p class="con4_character font16">我们为这个项目提供了那些服务</p>
      <ul>
        <li class="icon1">
          <p class="demand font18">需求对接</p>
          <p class="font14">通过多次沟通把您的想法形成专业的项目需求文档</p>
        </li>
        <li class="icon2">
          <p class="demand font18">原型设计</p>
          <p class="font14">根据项目的需求文档,把想法形成草稿式的交互原型</p>
        </li>
        <li class="icon3">
          <p class="demand font18">UI设计</p>
          <p class="font14">通过项日的原型设计图,进行UI颜色渲染和用户体验视觉设计</p>
        </li>
        <li class="icon4">
          <p class="demand font18">微信小程序开发</p>
          <p class="font14">通过多次沟通把您的想法形成专业的项目需求文档</p>
        </li>
        <li class="icon5">
          <p class="demand font18">内部测试</p>
          <p class="font14">每一个项目完毕后都需要经过严格的测试,让每一款产品都更加健壮</p>
        </li>
        <li class="icon6">
          <p class="demand font18">发布上线</p>
          <p class="font14">通过微信审核后,就可以发布上线了</p>
        </li>
      </ul>
    </div>
    <!--内容五-->
    <div class="prd_sec_con5 app_consec">
      <div class="width">
        <div class="con5_top">
          <div class="left line"></div>
          <div class="left font22">关于软件</div>
          <div class="left line"></div>
        </div>
        <div class="cengdaoyou clearfix">
          <div class="left">
            <div class="ceng_logo">
              <img src="../../static/img/index/logo5-2.png" class="left" />
              <div class="left qugou">
                <p class="font18">库艾</p>
                <p class="font14">孵化生态系统,帮助更多的梦想起航</p>
              </div>
            </div>
            <div class="ceng_character font14">
              山西动的萤火虫网络科技有限公司成立于2017年1月17日旗下“蹭导游”平台将旅行中的服 务、社交、向导等功能巧妙融合,为用户提供简约、便捷的旅行增值服务。
              <br /> “蹭导游”是一个开放、自由、充满乐趣与惊喜的旅行服务平台。
              <br /> 秉承 “蹭,是一种旅行乐趣”的创造理念,将产品的核心——导游服务进行创意升级,颠覆与创造 相结合，让旅行的过程充满想象力。
              <br /> 新浪微博——@蹭导游&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;微信公众号——导游
            </div>
          </div>
          <div class="left vertical"></div>
          <div class="right">
            <img src="../../static/img/cengdaoyou/3.png" />
            <p class="font14">扫描进入小程序</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 移动端内容五 -->
    <div class="app_prd_con5">
      <div class="width">
        <div class="con5_top">
          <div class="font22">关于软件</div>
        </div>
        <div class="cengdaoyou clearfix">
          <div class="software-right">
            <img src="../../static/img/cengdaoyou/3.png" />
            <p class="font14">扫描进入小程序</p>
          </div>
          <div class="software-left">
            <div class="ceng_logo">
              <img src="../../static/img/index/logo10-2.png" class="left" />
              <div class="left qugou">
                <p class="font18">库艾</p>
                <p class="font14">孵化生态系统,帮助更多的梦想起航</p>
              </div>
            </div>
            <div class="ceng_character font14">
              <p>山西流动的萤火虫网络科技有限公司成立于2017年1月17日,旗下“蹭导游”平台将旅行中的服务、社交、向导等功能巧妙融合,为用户提供简约、便捷的旅行增值服务。
“蹭导游”是一个开放、自由、充满乐趣与惊喜的旅行服务平台。</p>
              <p>秉承“蹭,是一种旅行乐趣”的创造理念，将产品的核心——导游服务进行创意升级,颠覆与创造相结合,让旅行的过程充满想象力。</p>
              <p>蹭导游不再拘泥于程式的选择与付费方式,使旅行从一开始便是充满乐趣的体验。</p>
              <p>回归知识服务者的角色,专业、博闻、生动、细致是蹭导游平台所有导游的标准配置。</p>
              <p>旅行本就是愉悦身心的一次体验,在蹭导游平台精打细算的不再是费用,而是如何把体验变的更好。</p>
              <p>蹭导游提倡的是结伴旅行,鼓励的是社交分享。未来蹭导游还将致力于个性定制和全面发展。使“蹭”的理念延伸至旅途中的各个角落,让“蹭客”们 freely gather在此。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import '../../static/css/style.css'
import '../../static/css/productsec.css'
export default {
  data () {
    return {
      pcban: [
        {img1: '../../static/img/cengdaoyou/pcdoc1.jpg'},
        {img1: '../../static/img/cengdaoyou/pcdoc2.jpg'},
        {img1: '../../static/img/cengdaoyou/pcdoc3.jpg'}
      ],
      appban: [
        {img1: '../../static/img/cengdaoyou/gm1.jpg'},
        {img1: '../../static/img/cengdaoyou/gm2.jpg'},
        {img1: '../../static/img/cengdaoyou/gm3.jpg'},
        {img1: '../../static/img/cengdaoyou/gm4.jpg'},
        {img1: '../../static/img/cengdaoyou/gm5.jpg'}
      ],
      swiperOption: {
        slidesPerView: 'auto', //宽度自定义
        spaceBetween: 10, //swiper右边距
        freeMode: true, //不贴合边缘
        observer: true,
        pagination: '.appxcx_swiper-pagination', //分页器
        paginationClickable:true
      }
    }
  },
  components: {
      swiper,
      swiperSlide
  },
  computed: {
    swiper () {
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

<style>
/*pc端 pc 轮播 */
.prd_sec_con1 .prd_box_pc .proban .el-carousel{
  width: 406px;
	height: 224px;
  position: absolute;
  top: 149px;
  left: 64px;
}
.prd_sec_con1 .prd_box_pc .proban .el-carousel .el-carousel__container{
  width: 406px;
	height: 224px;
  position: relative;
  overflow: hidden;
}
.prd_sec_con1 .prd_box_pc .proban .el-carousel .el-carousel__indicators{
  display: none;
}

/*pc端 app 轮播 */
.prd_sec_con1 .prd_box_app .proban .el-carousel .el-carousel__container{
  width: 360px;
  height: 401px;
  position: relative;
  left: -5px;
}
.prd_sec_con1 .prd_box_app .proban .el-carousel .el-carousel__container .el-carousel__item--card{
  width: 190px;
  height: 401px;
}
.prd_sec_con1 .prd_box_app .proban .el-carousel .el-carousel__container .el-carousel__indicators--outside{
  display: none;
}
.prd_sec_con1 .prd_box_app .proban .el-carousel .el-carousel__container .el-carousel__item h3 span{
    display: block;
}
.prd_sec_con1 .prd_box_app .proban .el-carousel .el-carousel__container .el-carousel__item.is-active h3 span{
    display: none;
}



</style>
