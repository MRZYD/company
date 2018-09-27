<template lang="html">
  <div class="pro-content">
    <!-- banner图 -->
    <div class="pro-banner">
      <img src="http://pd10b0don.bkt.clouddn.com/xcx_bj_02.png" alt="">
    </div>
    <!-- 列表 -->
    <div class="pro-sec clearfix">
      <!-- 列表标题 -->
      <div class="pro-sec-h2 clearfix">
        <span @click='switch_type(1)' :class="type == 1 ? 'hover' : ''">全部</span>
        <span @click='switch_type(2)' :class="type == 2 ? 'hover' : ''">微信小程序</span>
        <span @click='switch_type(3)' :class="type == 3 ? 'hover' : ''">网页端</span>
        <span @click='switch_type(4)' :class="type == 4 ? 'hover' : ''">H5网站</span>
      </div>

      <!-- 列表内容 全部 -->
      <ul v-if='type == 1' class="pro-sec-ul clearfix">
        <router-link to="/ProdectSecQM">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/quanai_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/quanai_logo.png" alt="">
              <span>全爱工匠小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecHSG">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_logo.png" alt="">
              <span>红山果网页端、H5网站</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecXDF">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/xindongf_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/xindongf_logo.png" alt="">
              <span>新东方留学小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecHD">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/tianyuan_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/tianyuan_logo.png" alt="">
              <span>海淀田园小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecYH">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/yihao_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/yihao_logo.png" alt="">
              <span>壹号便利店小程序</span>
            </div>
          </li>
        </router-link>
        <!-- <router-link to="/ProdectSecRB">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/riben_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/riben_logo.png" alt="">
              <span>日本恩田株式会社网页端</span>
            </div>
          </li> -->
        </router-link>
        <router-link to="/ProdectSecBL">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/bolong_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/bolong_logo.png" alt="">
              <span>博龙畜牲机械小程序端</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecTL">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/tielu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/tielu_logo.png" alt="">
              <span>铁路知识竞技小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecTSG">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Real_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/Real_logo.png" alt="">
              <span>RealNetworks企业图书馆</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecCDY">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/daoyou_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/daoyou_logo.png" alt="">
              <span>蹭导游服务平台小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecXFZ">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/diaocha_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/diaocha_logo.png" alt="">
              <span>消费者调查测评中心小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecBH">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/baihui_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/baihui_logo.png" alt="">
              <span>百汇微题库小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecPX">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/paixiu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/paixiu_logo.png" alt="">
              <span>拍秀旅行假期小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecHMN">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/henimei_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/henimei_logo.png" alt="">
              <span>和美尼音乐教育小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecML">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/meilian_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/meilian_logo.png" alt="">
              <span>美帘小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecJD">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/jindu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/jindu_logo.png" alt="">
              <span>禁毒时刻小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecNJ">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/nj_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/nj_logo.png" alt="">
              <span>NJ English 小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecAPM">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/apm_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/apm_logo.png" alt="">
              <span>APM Monaco商城小程序</span>
            </div>
          </li>
        </router-link>
        <!-- <router-link to="/ProdectSecTDD">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/tangdudu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/tangdudu_logo.png" alt="">
              <span>棠嘟嘟奢侈品短购平台小程序</span>
            </div>
          </li> -->
        </router-link>
        <router-link to="/ProdectSecRY">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/ruibo_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/ruibo_logo.png" alt="">
              <span>瑞博雅印小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecDA">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/daclass_pic.jpg" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/daclass_logo.png" alt="">
              <span>对啊课堂小程序</span>
            </div>
          </li>
        </router-link>
      </ul>

      <!-- 列表内容 小程序 -->
      <ul v-if='type == 2' class="pro-sec-ul clearfix">
        <router-link to="/ProdectSecQM">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/quanai_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/quanai_logo.png" alt="">
              <span>全爱工匠小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecXDF">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/xindongf_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/xindongf_logo.png" alt="">
              <span>新东方留学小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecHD">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/tianyuan_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/tianyuan_logo.png" alt="">
              <span>海淀田园小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecYH">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/yihao_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/yihao_logo.png" alt="">
              <span>壹号便利店小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecBL">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/bolong_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/bolong_logo.png" alt="">
              <span>博龙畜牲机械小程序端</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecTL">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/tielu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/tielu_logo.png" alt="">
              <span>铁路知识竞技小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecCDY">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/daoyou_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/daoyou_logo.png" alt="">
              <span>蹭导游服务平台小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecXFZ">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/diaocha_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/diaocha_logo.png" alt="">
              <span>消费者调查测评中心小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecBH">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/baihui_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/baihui_logo.png" alt="">
              <span>百汇微题库小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecPX">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/paixiu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/paixiu_logo.png" alt="">
              <span>拍秀旅行假期小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecHMN">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/henimei_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/henimei_logo.png" alt="">
              <span>和美尼音乐教育小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecML">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/meilian_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/meilian_logo.png" alt="">
              <span>美帘小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecJD">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/jindu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/jindu_logo.png" alt="">
              <span>禁毒时刻小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecNJ">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/nj_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/nj_logo.png" alt="">
              <span>NJ English 小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecAPM">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/apm_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/apm_logo.png" alt="">
              <span>APM Monaco商城小程序</span>
            </div>
          </li>
        </router-link>
        <!-- <router-link to="/ProdectSecTDD">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/tangdudu_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/tangdudu_logo.png" alt="">
              <span>棠嘟嘟奢侈品短购平台小程序</span>
            </div>
          </li> -->
        </router-link>
        <router-link to="/ProdectSecRY">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/ruibo_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/ruibo_logo.png" alt="">
              <span>瑞博雅印小程序</span>
            </div>
          </li>
        </router-link>
        <router-link to="/ProdectSecDA">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/daclass_pic.jpg" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/daclass_logo.png" alt="">
              <span>对啊课堂小程序</span>
            </div>
          </li>
        </router-link>
      </ul>

      <!-- 列表内容 网页端 -->
      <ul v-if='type == 3' class="pro-sec-ul clearfix">
        <router-link to="/ProdectSecHSG">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_logo.png" alt="">
              <span>红山果网页端、H5网站</span>
            </div>
          </li>
        </router-link>
        <!-- <router-link to="/ProdectSecRB">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/riben_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/riben_logo.png" alt="">
              <span>日本恩田株式会社网页端</span>
            </div>
          </li> -->
        </router-link>
        <router-link to="/ProdectSecTSG">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Real_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/Real_logo.png" alt="">
              <span>RealNetworks企业图书馆</span>
            </div>
          </li>
        </router-link>
      </ul>

      <!-- 列表内容 H5网站 -->
      <ul v-if='type == 4' class="pro-sec-ul clearfix">
        <router-link to="/ProdectSecHSG">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/hongshanguo_logo.png" alt="">
              <span>红山果网页端、H5网站</span>
            </div>
          </li>
        </router-link>
        <!-- <router-link to="/ProdectSecRB">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/riben_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/riben_logo.png" alt="">
              <span>日本恩田株式会社网页端</span>
            </div>
          </li> -->
        </router-link>
        <router-link to="/ProdectSecTSG">
          <li>
            <img src="http://pd10b0don.bkt.clouddn.com/Real_pic.png" alt="" class="secimg">
            <div class="pro-li-tit clearfix">
              <img src="http://pd10b0don.bkt.clouddn.com/Real_logo.png" alt="">
              <span>RealNetworks企业图书馆</span>
            </div>
          </li>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
import "../../static/css/style.css";
import "../../static/css/productlist.css";
export default {
  data() {
    return {
      type: 1
    };
  },
  methods: {
    /**
     * 切换选项
     */
    switch_type(type) {
      this.type = type;
    }
  }
};
</script>

<style lang="css" scoped>
</style>
