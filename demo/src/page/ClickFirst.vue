<template lang="html">
  <div class="content">
    <!--内容一-->
    <div class="firstcon1 app_consec">
      <img src="http://pd10b0don.bkt.clouddn.com/apply_for3_bg.jpg" class="con1_bg" />
    </div>

    <div class="app_first_ban">
      <img src="http://pd10b0don.bkt.clouddn.com/app_first_ban.png" alt="">
    </div>
    <!--内容二--> 
    <div class="firstcon2 clearfix">
      <p class="font30">为什么要做定制开发？</p>
      <p class="font16 title">微信小程序存在于微信平台内，微信不允许调用外部的连接</p>
      <ul class="con2_click1">
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con2_li1.png" />
          <p class="font18">稳定且强大</p>
          <p class="font12">小程序基于微信平台，又有微信团队做微信小程序的API工具集成，小程序变得越来越强大</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con2_li2.png" />
          <p class="font18">高并发</p>
          <p class="font12">我们公司有将近七年的开发经验，团队成员都来自于各大公司的开发工程师和UI设计师，项目可以承受1000万PV访问</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con2_li3.png" />
          <p class="font18">快速迭代</p>
          <p class="font12">我们会与您沟通项目未来的发展计划，在项目前期计划未来更多的扩展性，同时也会加快项目快速迭代可以迅速的推向市场</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con2_li4.png" />
          <p class="font18">高扩展</p>
          <p class="font12">微信小程序并不是单一的产品线，他未来可以扩展微信公众号内的服务，甚至可以直接做APP应用，同时也可以打通WEB端，行程全网的闭环</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con2_li5.png" />
          <p class="font18">美观性</p>
          <p class="font12">UI设计师通过对行业和用户的体验进行专业的设计让您感受到产品的生命力</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con2_li6.png" />
          <p class="font18">技术支持</p>
          <p class="font12">免费一年的售后维护工作，让您无忧无虑，我们保障产品的安全和稳定性</p>
        </li>
      </ul>
    </div>
    <!--内容三-->
    <div class="firstcon3">
      <p class="font30">定制开发VS模板</p>
      <p class="font16 title">您可以根据自己的实际需求进行选择则您想要的方式</p>

      <div class="con3_con app_consec">
        <div class="left fff">
          <div class="con3_con_top">
            <img src="http://pd10b0don.bkt.clouddn.com/con3_left1.png" class="con3_left" />
            <p class="con3_left_character font18">定制开发</p>
          </div>
          <div class="con3_con_butom font12">
            <p><span>功能模块</span>按需求开发</p>
            <p><span>费用</span>按照人工估算成本</p>
            <p><span>开发周期</span>根据项目情况进行评估</p>
            <p><span>后期维护</span>免费一年维护</p>
            <p><span>快速迭代</span>按需求进行升级，快速方便</p>
            <p><span>UI效果</span>按需求设计，贴近公司文化</p>
          </div>
        </div>
        <img src="http://pd10b0don.bkt.clouddn.com/vs.png" class="left" />
        <div class="left fff">
          <div class="con3_con_top">
            <img src="http://pd10b0don.bkt.clouddn.com/con3_left2.png" class="con3_left" />
            <p class="con3_left_character font18">模板</p>
          </div>
          <div class="con3_con_butom font12">
            <p><span>功能模块</span>固定功能</p>
            <p><span>费用</span>成本低，按年收费</p>
            <p><span>开发周期</span>快</p>
            <p><span>后期维护</span>按年收费</p>
            <p><span>快速迭代</span>无法升级，无版权</p>
            <p><span>UI效果</span>无法修改</p>
          </div>
        </div>
      </div>

      <div class="app_con3_con">
        <div class="app_con3_top">
          <div @click='switch_tab(1)' :class="['con3_con_top', tab == 1 ? 'hover' : '']">
            <img src="http://pd10b0don.bkt.clouddn.com/con3_left1.png" class="con3_left" />
            <p class="con3_left_character font18">定制开发</p>
          </div>
          <div @click='switch_tab(2)' :class="['con3_con_top', tab == 2 ? 'hover' : '']">
            <img src="http://pd10b0don.bkt.clouddn.com/con3_left2.png" class="con3_left" />
            <p class="con3_left_character font18">模板</p>
          </div>
        </div>
        <div class="app_con3_bot">
          <div :class="['con3_con_bot', tab == 1 ? 'hover' : '']">
            <p><span>功能模块</span>按需求开发</p>
            <p><span>费用</span>按照人工估算成本</p>
            <p><span>开发周期</span>根据项目情况进行评估</p>
            <p><span>后期维护</span>免费一年维护</p>
            <p><span>快速迭代</span>按需求进行升级，快速方便</p>
            <p><span>UI效果</span>按需求设计，贴近公司文化</p>
          </div>
          <div :class="['con3_con_bot', tab == 2 ? 'hover' : '']">
            <p><span>功能模块</span>固定功能</p>
            <p><span>费用</span>成本低，按年收费</p>
            <p><span>开发周期</span>快</p>
            <p><span>后期维护</span>按年收费</p>
            <p><span>快速迭代</span>无法升级，无版权</p>
            <p><span>UI效果</span>无法修改</p>
          </div>
        </div>
      </div>

    </div>

    <!--内容四-->
    <div class="firstcon4 app_consec">
      <p class="font30">售后保障</p>
      <p class="font16 title">再好的产品都需要长期售后保障，没有保障就像耍流氓</p>
      <ul>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con4_li1.png" />
          <p class="font16">一年免费维护</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con4_li2.png" />
          <p class="font16">7×12服务</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con4_li3.png" />
          <p class="font16">8小时内快速回应</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con4_li4.png" />
          <p class="font16">免费技术咨询</p>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/con4_li5.png" />
          <p class="font16">系统免费教学</p>
        </li>
      </ul>
    </div>
    <!--内容五-->
    <div class="firstcon5 app_consec">
      <p class="font30">快速联系我们</p>
      <p class="font16 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打<span>010-58460550</span></p>
      <el-form action="" method="post">
        <el-input type="text" v-model='userInfo.name' placeholder="怎么称呼您" class="input" ></el-input>
        <el-input type="text" v-model='userInfo.tel' placeholder="您的联系电话" class="input" ></el-input>
        <el-input type="text" v-model='userInfo.describe' placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input" ></el-input>
        <el-button type="submit" @click='submit_info(1)' value="" class="submit" >提交</el-button>
      </el-form>
    </div>

    <div class="app_con2_home">
      <h2 class="app_con2_home_h2">服务保障</h2>
      <h3 class="app_con2_home_h3">期良好的售后保障，让每个优秀的产品都能茁壮成长</h3>
      <div class="app_con2_home_banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img class="swiper-img" src="http://pd10b0don.bkt.clouddn.com/con4_li1.png" />
            <p class="font16">一年免费维护</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="http://pd10b0don.bkt.clouddn.com/con4_li2.png" />
            <p class="font16">7×12服务</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="http://pd10b0don.bkt.clouddn.com/con4_li3.png" />
            <p class="font16">8小时内快速回应</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="http://pd10b0don.bkt.clouddn.com/con4_li4.png" />
            <p class="font16">免费技术咨询</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="http://pd10b0don.bkt.clouddn.com/con4_li5.png" />
            <p class="font16">系统免费教学</p>
          </swiper-slide>
          <div class="first-swiper-pagination "  slot="pagination"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
    </div>

    <div class="app_con3_home">
      <h2 class="app_con3_home_h2">快速联系我们</h2>
      <p class="app_con3_home_p">填上您的联系方式，我们会在半小时内回复您</br>或者拨打 <a href="tel:18612534550">186 1253 4550</a> </p>
      <el-form class="app_con3_form">
        <el-input v-model="userInfo.name" placeholder="怎么称呼您"></el-input>
        <el-input v-model="userInfo.tel" placeholder="您的联系电话"></el-input>
        <el-input rows="8" v-model='userInfo.describe' type='textarea' placeholder="请用一句话描述您的问题"></el-input>
        <el-button @click='submit_info(2)' class="app_con3_form_btn">提交</el-button>
      </el-form>
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
    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
    </router-link>

  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "../../static/css/style.css";
import "../../static/css/clickfirst.css";
import "../../static/css/index.css";
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        // autoplay: 2000,//可选选项，自动滑动
        //分页器
        pagination: ".first-swiper-pagination",
        paginationClickable: true,
        observer: true
      },

      // 用户信息
      userInfo: {
        name: "",
        tel: "",
        describe: ""
      },

      tab: 1 //类型
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
  methods: {
    /**
     * 切换类型
     */
    switch_tab(tab) {
      this.tab = tab;
    },

    /**
     * 提交用户信息
     */
    submit_info(e) {
      var that = this;

      if (!that.userInfo.tel) {
        if (e == 2) {
          that.$notify({
            title: "提示",
            message: "请填写您的电话号码"
          });
        } else {
          that.$message.warning("请填写您的电话号码");
        }
        return;
      }

      // 手机号验证
      var reg = /^1\d{10}$/;
      // 座机号
      var reg2 = /([0-9]{3,4}-)?[0-9]{7,8}/;
      if (!reg.test(that.userInfo.tel) && !reg2.test(that.userInfo.tel)) {
        if (e == 2) {
          that.$notify({
            title: "提示",
            message: "请正确填写您的电话号码"
          });
        } else {
          that.$message.warning("请正确填写您的电话号码");
        }
        return;
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
          if (e == 2) {
            that.$notify({
              title: "提示",
              message: "提交成功,我们会尽快联系您",
              type: "success"
            });
          } else {
            that.$message.success("提交成功,我们会尽快联系您");
          }

          that.userInfo.name = "";
          that.userInfo.tel = "";
          that.userInfo.describe = "";
        });
    }
  },
  mounted() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log('this is current swiper instance object', this.swiper);
    // this.swiper.slideTo(0, 0, false);
  }
};
</script>

<style lang="css" scoped>
</style>
