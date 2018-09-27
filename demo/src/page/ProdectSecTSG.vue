<template lang="html">
  <div class="content">
    <!-- 内容一 -->
    <div class="prd_sec_con1 app_consec">
      <div class="clearfix">
        <!-- <div class="pro_phase">
          <span @click='switch_tab(1)' :class="tab == 1 ? 'hover' : ''">第一期</span>
          <span @click='switch_tab(2)' :class="tab == 2 ? 'hover' : ''">第二期</span>
        </div> -->
        <div class="phase_box">

          <!-- 第一期 -->
          <div :class="['phase_box1 prd_box', tab == 1 ? 'hover' : '']">
            <!-- pc端 -->
            <div :class="['prd_box_pc', type == 1 ? 'hover' : '']">
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
            <div :class="['prd_box_app', type == 2 ? 'hover' : '']">
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
                <p class="font36">书客童书-企业版</p>
                <p class="right_time font14">开发周期：30个工作日</p>
                <p class="right_describe font16">为体现企业文化价格，打造企业内部童书借阅平台，帮助员工中家庭的孩子有更好的知识积累，展现企业关怀</p>
              </div>
            </div>
          </div>
          <!-- 第二期 -->
          <div :class="['phase_box2 prd_box', tab == 2 ? 'hover' : '']">
            <!-- PC端 -->
            <div :class="['prd_box_pc', type == 1 ? 'hover' : '']">
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
            <div :class="['prd_box_app', type == 2 ? 'hover' : '']">
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
        <!-- <div class="pro_divise">
          <span @click='switch_type(1)' :class="type == 1 ? 'hover' : ''">网页端</span>
          <span @click='switch_type(2)' :class="type == 2 ? 'hover' : ''">微信小程序</span>
        </div> -->
      </div>
    </div>
    <!--内容二-->
    <div class="prd_sec_con2 app_consec">
      <p class="con2_title font30">功能模块</p>
      <p class="con2_character font16">根据客户需求开发相应的功能模块</p>
      <div class="con2_module">
        <ul>
          <li>
            <p class="font18">选书-心愿单</p>
            <p class="font14">用户可以随意选择自己喜欢的书籍，后续进行更换到平台内部</p>
          </li>
          <li>
            <p class="font18">在线借阅</p>
            <p class="font14">简单扫码就可以借阅，方便快捷</p>
          </li>
          <li>
            <p class="font18">一键还书</p>
            <p class="font14">点击还书就可以立即完成操作</p>
          </li>
          <li>
            <p class="font18">快速分享</p>
            <p class="font14">把家里面有价值的书籍分享给同事，让更多的同事孩子受益</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 移动端内容一 -->
    <div class="app_prd_con1">
      <!--移动端的pc、小程序 banner -->
      <div class="app_con1_box">
        <!-- 版本一 -->
        <div :class="['app_con1_ban',version == 1 ? 'hover' : '']">
          <!-- pc端 -->
          <div :class="['app_pc_ban', pcOrApp == 1 ? 'hover' : '']">
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
          <div :class="['app_xcx_ban', pcOrApp == 2 ? 'hover' : '']">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="item in appban" :key="item">
                <img :src="item.img1" alt="">
              </swiper-slide>
              <div class="appxcx_swiper-pagination "  slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <!-- 版本二 -->
        <div :class="['app_con1_ban',version == 2 ? 'hover' : '']">
          <!-- pc端 -->
          <div :class="['app_pc_ban', pcOrApp == 1 ? 'hover' : '']">
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
          <div :class="['app_xcx_ban', pcOrApp == 2 ? 'hover' : '']">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="item in appban1" :key="item">
                <img :src="item.img1" alt="">
              </swiper-slide>
              <div class="appxcx_swiper-pagination "  slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <!-- 小程序版本  -->
      <div class="app_sec_box">
        <!-- 小程序第一版 -->
        <div :class="['app_box_fir', version == 1 ? 'hover' : '']">
          <h2>书客童书-企业版</h2>
          <h4>开发周期：30个工作日</h4>
          <p>为体现企业文化价格，打造企业内部童书借阅平台，帮助员工中家庭的孩子有更好的知识积累，展现企业关怀</p>
          <div class="app_box_fir_span">
            <span>微信小程序</span>
            <span>旅游</span>
            <span>游玩</span>
          </div>
        </div>
        <!-- 小程序第二版 -->
        <div :class="['app_box_fir', version == 2 ? 'hover' : '']">
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
        <!-- <div class="app_box_li">
          <h2 @click='switch_version(1)' :class="version == 1 ? 'hover' : ''">第一期</h2>
          <h2 @click='switch_version(2)' :class="version == 2 ? 'hover' : ''">第二期</h2>
        </div> -->
      </div>
    </div>
    <!-- pc 小程序切换 悬浮菜单 -->
    <!-- <div class="app_xp_menu">
      <h2 @click='pc_app(2)'>微信小程序</h2>
      <span></span>
      <h2 @click='pc_app(1)'>网页端</h2>
    </div> -->
    <!-- 移动端内容二 -->
    <div class="app_prd_con2">
      <h2 class="app_prd_con2_h2">功能模块</h2>
      <ul>
        <li>
          <h3><span></span>选书-心愿单</h3>
          <p>用户可以随意选择自己喜欢的书籍，后续进行更换到平台内部</p>
        </li>
        <li>
          <h3><span></span>在线借阅</h3>
          <p>简单扫码就可以借阅，方便快捷</p>
        </li>
        <li>
          <h3><span></span>一键还书</h3>
          <p>点击还书就可以立即完成操作</p>
        </li>
        <li>
          <h3><span></span>快速分享</h3>
          <p>把家里面有价值的书籍分享给同事，让更多的同事孩子受益</p>
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
              <img src="http://pd10b0don.bkt.clouddn.com/php.png" />
              <p class="font12">PHP</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/mysql.png" />
              <p class="font12">MySQL</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/cdy_xiaocx.png" />
              <p class="font12">微信小程序</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/Sketch.png" />
              <p class="font12">Sketch</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/ps.png" />
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
              <img src="http://pd10b0don.bkt.clouddn.com/TSG_logo.png" class="left" />
              <div class="left qugou">
                <p class="font18">书客童书-企业版</p>
                <p class="font14">打造企业内部童书借阅平台</p>
              </div>
            </div>
            <div class="ceng_character font14">
              为体现企业文化价格，打造企业内部童书借阅平台，帮助员工中家庭的孩子有更好的知识积累，展现企业关怀。
            </div>
          </div>
          <div class="left vertical"></div>
          <div class="right">
            <img src="http://pd10b0don.bkt.clouddn.com/cdy3.png" />
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
            <img src="http://pd10b0don.bkt.clouddn.com/cdy3.png" />
            <p class="font14">扫描进入小程序</p>
          </div>
          <div class="software-left">
            <div class="ceng_logo">
              <img src="http://pd10b0don.bkt.clouddn.com/TSG_logo.png" class="left" />
              <div class="left qugou">
                <p class="font18">书客童书-企业版</p>
                <p class="font14">打造企业内部童书借阅平台</p>
              </div>
            </div>
            <div class="ceng_character font14">
              为体现企业文化价格，打造企业内部童书借阅平台，帮助员工中家庭的孩子有更好的知识积累，展现企业关怀。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
    </router-link>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "../../static/css/style.css";
import "../../static/css/productsec.css";
export default {
  data() {
    return {
      pcban: [
        { img1: "http://pd10b0don.bkt.clouddn.com/pcdoc1.jpg" },
        { img1: "http://pd10b0don.bkt.clouddn.com/pcdoc2.jpg" },
        { img1: "http://pd10b0don.bkt.clouddn.com/pcdoc3.jpg" }
      ],
      appban: [
        { img1: "http://pd10b0don.bkt.clouddn.com/shuke1.jpg" },
        { img1: "http://pd10b0don.bkt.clouddn.com/shuke2.jpg" },
        { img1: "http://pd10b0don.bkt.clouddn.com/shuke3.jpg" },
        { img1: "http://pd10b0don.bkt.clouddn.com/shuke4.jpg" },
        { img1: "http://pd10b0don.bkt.clouddn.com/shuke5.jpg" }
      ],
      swiperOption: {
        slidesPerView: "auto", //宽度自定义
        spaceBetween: 15, //swiper右边距
        freeMode: true, //不贴合边缘
        observer: true,
        pagination: ".appxcx_swiper-pagination", //分页器
        paginationClickable: true
      },

      tab: 1,
      type: 2,
      version: 1,
      pcOrApp: 2
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {},
  methods: {
    /**
     * 切换类型
     */
    switch_tab(tab) {
      this.tab = tab;
    },

    switch_type(type) {
      this.type = type;
    },

    switch_version(version) {
      this.version = version;
    },

    /**
     * pc or 小程序
     */
    pc_app(pcOrApp) {
      this.pcOrApp = pcOrApp;
    }
  }
};
</script>

<style>
/*pc端 pc 轮播 */
.prd_sec_con1 .prd_box_pc .proban .el-carousel {
  width: 406px;
  height: 224px;
  position: absolute;
  top: 149px;
  left: 64px;
}
.prd_sec_con1 .prd_box_pc .proban .el-carousel .el-carousel__container {
  width: 406px;
  height: 224px;
  position: relative;
  overflow: hidden;
}
.prd_sec_con1 .prd_box_pc .proban .el-carousel .el-carousel__indicators {
  display: none;
}

/*pc端 app 轮播 */
.prd_sec_con1 .prd_box_app .proban .el-carousel .el-carousel__container {
  width: 360px;
  height: 401px;
  position: relative;
  left: -5px;
}
.prd_sec_con1
  .prd_box_app
  .proban
  .el-carousel
  .el-carousel__container
  .el-carousel__item--card {
  width: 190px;
  height: 401px;
}
.prd_sec_con1
  .prd_box_app
  .proban
  .el-carousel
  .el-carousel__container
  .el-carousel__indicators--outside {
  display: none;
}
.prd_sec_con1
  .prd_box_app
  .proban
  .el-carousel
  .el-carousel__container
  .el-carousel__item
  h3
  span {
  display: block;
}
.prd_sec_con1
  .prd_box_app
  .proban
  .el-carousel
  .el-carousel__container
  .el-carousel__item.is-active
  h3
  span {
  display: none;
}
</style>
