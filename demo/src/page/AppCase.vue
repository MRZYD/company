<template>
  <div class="app_case">
    <div class="app_case_ban">
      <img src="http://pd10b0don.bkt.clouddn.com/app_case_ban.png" alt="">
    </div>
    <div class="app-case-sec">
      <div class="app-case-list">

        <!-- 列表标题 -->
        <div class="app-case-h2 clearfix">
          <span @click='switch_tab(1)' :class="tab == 1 ? 'hover' : ''">全部</span>
          <span @click='switch_tab(2)' :class="tab == 2 ? 'hover' : ''">微信小程序</span>
          <span @click='switch_tab(3)' :class="tab == 3 ? 'hover' : ''">网页端</span>
          <span @click='switch_tab(4)' :class="tab == 4 ? 'hover' : ''">H5网站</span>
        </div>

        <div style="background: #f7f8fa;" v-show='is_fixed' :class="['app-case-list', is_fixed ? 'fixed' : '']">
          <div class="app-case-h2 clearfix">
            <span @click='switch_tab(1)' :class="tab == 1 ? 'hover' : ''">全部</span>
            <span @click='switch_tab(2)' :class="tab == 2 ? 'hover' : ''">微信小程序</span>
            <span @click='switch_tab(3)' :class="tab == 3 ? 'hover' : ''">网页端</span>
            <span @click='switch_tab(4)' :class="tab == 4 ? 'hover' : ''">H5网站</span>
          </div>
        </div>

        <!-- 全部 -->
        <ul v-if='tab == 1' class="app-case-ul clearfix">
          <li>
            <router-link to="/ProdectSecQM">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_QA.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/quanai_logo.png" alt="">
                <span>全爱工匠小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecHSG">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HSG.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_logo.png" alt="">
                <span>红山果网页端、H5网站</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecXDF">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_XDF.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/xindongf_logo.png" alt="">
                <span>新东方留学小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecHD">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HD.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/tianyuan_logo.png" alt="">
                <span>海淀田园小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecYH">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_YH.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/yihao_logo.png" alt="">
                <span>壹号便利店小程序</span>
              </div>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/ProdectSecRB">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_RB.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/riben_logo.png" alt="">
                <span>日本恩田株式会社网页端</span>
              </div>
            </router-link>
          </li> -->
          <li>
            <router-link to="/ProdectSecBL">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_BL.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/bolong_logo.png" alt="">
                <span>博龙畜牲机械小程序端</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecTL">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TL.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/tielu_logo.png" alt="">
                <span>铁路知识竞技小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecTSG">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TSG.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/Real_logo.png" alt="">
                <span>RealNetworks企业图书馆</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecCDY">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_CDY.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/daoyou_logo.png" alt="">
                <span>蹭导游服务平台小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecXFZ">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_XFZ.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/diaocha_logo.png" alt="">
                <span>消费者调查测评中心小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecBH">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_BH.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/baihui_logo.png" alt="">
                <span>百汇微题库小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecPX">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_PX.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/paixiu_logo.png" alt="">
                <span>拍秀旅行假期小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecHMN">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HMN.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/henimei_logo.png" alt="">
                <span>和美尼音乐教育小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecML">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_ML.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/meilian_logo.png" alt="">
                <span>美帘小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecJD">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_JD.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/jindu_logo.png" alt="">
                <span>禁毒时刻小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecNJ">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_NJ.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/nj_logo.png" alt="">
                <span>NJ English 小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecAPM">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_APM.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/apm_logo.png" alt="">
                <span>APM Monaco商城小程序</span>
              </div>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/ProdectSecTDD">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TDD.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/tangdudu_logo.png" alt="">
                <span>棠嘟嘟奢侈品短购平台小程序</span>
              </div>
            </router-link>
          </li> -->
          <li>
            <router-link to="/ProdectSecRY">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_BY.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/ruibo_logo.png" alt="">
                <span>瑞博雅印小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecDA">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_DA.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/daclass_logo.png" alt="">
                <span>对啊课堂小程序</span>
              </div>
            </router-link>
          </li>
        </ul>

        <!-- 微信小程序 -->
        <ul v-if='tab == 2' class="app-case-ul clearfix">
          <li>
            <router-link to="/ProdectSecQM">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_QA.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/quanai_logo.png" alt="">
                <span>全爱工匠小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecXDF">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_XDF.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/xindongf_logo.png" alt="">
                <span>新东方留学小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecHD">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HD.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/tianyuan_logo.png" alt="">
                <span>海淀田园小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecYH">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_YH.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/yihao_logo.png" alt="">
                <span>壹号便利店小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecBL">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_BL.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/bolong_logo.png" alt="">
                <span>博龙畜牲机械小程序端</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecTL">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TL.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/tielu_logo.png" alt="">
                <span>铁路知识竞技小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecCDY">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_CDY.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/daoyou_logo.png" alt="">
                <span>蹭导游服务平台小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecXFZ">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_XFZ.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/diaocha_logo.png" alt="">
                <span>消费者调查测评中心小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecBH">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_BH.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/baihui_logo.png" alt="">
                <span>百汇微题库小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecPX">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_PX.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/paixiu_logo.png" alt="">
                <span>拍秀旅行假期小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecHMN">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HMN.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/henimei_logo.png" alt="">
                <span>和美尼音乐教育小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecML">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_ML.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/meilian_logo.png" alt="">
                <span>美帘小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecJD">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_JD.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/jindu_logo.png" alt="">
                <span>禁毒时刻小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecNJ">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_NJ.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/nj_logo.png" alt="">
                <span>NJ English 小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecAPM">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_APM.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/apm_logo.png" alt="">
                <span>APM Monaco商城小程序</span>
              </div>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/ProdectSecTDD">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TDD.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/tangdudu_logo.png" alt="">
                <span>棠嘟嘟奢侈品短购平台小程序</span>
              </div>
            </router-link>
          </li> -->
          <li>
            <router-link to="/ProdectSecRY">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_BY.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/ruibo_logo.png" alt="">
                <span>瑞博雅印小程序</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/ProdectSecDA">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_DA.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/daclass_logo.png" alt="">
                <span>对啊课堂小程序</span>
              </div>
            </router-link>
          </li>
        </ul>

        <!-- 网页端 -->
        <ul v-if='tab == 3' class="app-case-ul clearfix">
          <li>
            <router-link to="/ProdectSecHSG">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HSG.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_logo.png" alt="">
                <span>红山果网页端、H5网站</span>
              </div>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/ProdectSecRB">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_RB.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/riben_logo.png" alt="">
                <span>日本恩田株式会社网页端</span>
              </div>
            </router-link>
          </li> -->
          <li>
            <router-link to="/ProdectSecTSG">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TSG.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/Real_logo.png" alt="">
                <span>RealNetworks企业图书馆</span>
              </div>
            </router-link>
          </li>
        </ul>

        <!-- H5网站 -->
        <ul v-if='tab == 4' class="app-case-ul clearfix">
          <li>
            <router-link to="/ProdectSecHSG">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_HSG.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_logo.png" alt="">
                <span>红山果网页端、H5网站</span>
              </div>
            </router-link>
          </li>
          <!-- <li>
            <router-link to="/ProdectSecRB">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_RB.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/riben_logo.png" alt="">
                <span>日本恩田株式会社网页端</span>
              </div>
            </router-link>
          </li> -->
          <li>
            <router-link to="/ProdectSecTSG">
              <img src="http://pd10b0don.bkt.clouddn.com/APP_TSG.jpg" alt="" class="secimg">
              <div class="app-case-li-tit clearfix">
                <img src="http://pd10b0don.bkt.clouddn.com/Real_logo.png" alt="">
                <span>RealNetworks企业图书馆</span>
              </div>
            </router-link>
          </li>
        </ul>

      </div>
    </div>
    <div class="app_con4_home app_con4_bot">
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
      <span class="app_con4_span">Copyright©2016-2017 小程序（北京）科技有限公司 | 京ICP备17004176</span>
    </div>
    <div class="app_home_footer">
      <ul class="clearfix">
        <li>
          <router-link to="/">
            <i></i>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/AppSolution">
            <i></i>
            <span>解决方案</span>
          </router-link>
        </li>
        <li class="hover">
          <router-link to="/AppCase">
            <i></i>
            <span>案例</span>
          </router-link>
        </li>
        <li>
          <router-link to="/AppMould">
            <i></i>
            <span>模板</span>
          </router-link>
        </li>
        <li>
          <router-link to="/AboutUs">
            <i></i>
            <span>我们</span>
          </router-link>
        </li>
      </ul>
    </div>
    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
    </router-link>
  </div>
</template>

<script>
import "../../static/css/style.css";
import "../../static/css/appcase.css";
export default {
  data() {
    return {
      tab: 1,

      is_fixed: false //是否固定在顶部
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    /**
     * 屏幕滚动
     */
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 283) {
        this.is_fixed = true;
      } else {
        this.is_fixed = false;
      }
    },

    /**
     * 切换类型
     */
    switch_tab(tab) {
      this.tab = tab;
    }
  }
};
</script>

<style lang="css" >
.app_case {
  width: 100%;
  background: #fff;
}

.app_case .app_case_ban img {
  width: 100%;
  display: block;
}

.app-case-sec {
  width: 100%;
}

/* 列表标题 */
.app-case-list {
  width: 100%;
  padding: 0;
}

.app-case-list .app-case-h2 {
  padding: 0 1.3125rem;
  height: 3.75rem;
  line-height: 3.55rem;
  border-bottom: 0.5px solid #d9d9d9;
}

.app-case-list .app-case-h2 span {
  /* width: 25%; */
  font-size: 0.875rem;
  color: #808080;
  letter-spacing: 0;
  float: left;
  text-align: center;
  padding: 0 0.6rem;
  margin-right: 1.2rem;
}

.app-case-list .app-case-h2 span:nth-last-child(1) {
  margin-right: 0;
}

.app-case-list .app-case-h2 span.hover {
  border-bottom: 3px solid #1989fb;
  color: #1989fb;
}

.app-case-ul {
  padding: 0 1.3125rem;
  margin-top: 1.56rem;
}

.app-case-ul li {
  width: 48%;
  float: left;
  margin-bottom: 1.3125rem;
}

.app-case-ul li:nth-child(2n) {
  float: right;
}

.app-case-ul li a {
  display: block;
}

.app-case-ul li .secimg {
  width: 100%;
  display: block;
}

.app-case-ul li a .app-case-li-tit {
  width: 100%;
  overflow: hidden;
}

.app-case-ul li .app-case-li-tit img {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  margin-top: 0.6rem;
  display: block;
  float: left;
}

.app-case-ul li .app-case-li-tit span {
  height: 1.25rem;
  line-height: 1.25rem;
  /* margin-top: 0.6rem; */
  font-size: 0.72rem;
  display: block;
  width: 80%;
  float: left;
  margin-left: 5%;
  margin-top: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.app-case-ul li a .app-case-li-tit span {
  color: #45454d;
}

.app-case-list .fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
