<template lang="html">
  <div class="content">
    <!--内容一-->
    <div class="fifthcon1">
      <img src="http://pd10b0don.bkt.clouddn.com/apply_for4_bg.jpg" class="con1_bg" />
    </div>
    <!--内容二-->
    <div class="fifthcon2">
      <ul class="con2_nav font14">
        <li :class='type == 1 ? "con2_nav_add" : ""' @click='switch_tab(1)'>餐饮</li>
        <li :class='type == 2 ? "con2_nav_add" : ""' @click='switch_tab(2)'>旅游</li>
        <li :class='type == 3 ? "con2_nav_add" : ""' @click='switch_tab(3)'>工具</li>
        <li :class='type == 4 ? "con2_nav_add" : ""' @click='switch_tab(4)'>电商</li>
        <li :class='type == 5 ? "con2_nav_add" : ""' @click='switch_tab(5)'>教育</li>
        <li :class='type == 6 ? "con2_nav_add" : ""' @click='switch_tab(6)'>资讯</li>
        <li :class='type == 7 ? "con2_nav_add" : ""' @click='switch_tab(7)'>理财</li>
        <li :class='type == 8 ? "con2_nav_add" : ""' @click='switch_tab(8)'>健康</li>
        <li :class='type == 9 ? "con2_nav_add" : ""' @click='switch_tab(9)'>生活</li>
        <li :class='type == 10 ? "con2_nav_add" : ""' @click='switch_tab(10)'>娱乐</li>
        <li :class='type == 11 ? "con2_nav_add" : ""' @click='switch_tab(11)'>媒体</li>
      </ul>
      <div class="coniter">
        <!--餐饮-->
        <ul class="con2_photo clearfix">

          <li v-if='type == 1' class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 1 ? 0 : 3000'>
              <el-carousel-item loop='false' v-for="item in temp1" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(1)">查看小程序</p>
            <div class="cover" v-if="curr_num == 1">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx1.jpg" class="xiaocx" />
              <p class="font16">沈一点</p>
              <p class="font12">城市精品美食推荐</p>
            </div>
          </li>

          <li v-if='type == 1' class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 2 ? 0 : 3200'>
              <el-carousel-item v-for="item in temp2" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(2)">查看小程序</p>
            <div class="cover" v-if="curr_num == 2">
              <img src="http://pd10b0don.bkt.clouddn.com/shop_xiaocx.jpg" class="xiaocx" />
              <p class="font16">小熊猫商城</p>
              <p class="font12">与服务公众号巧妙结合快速实现线上营销变现。</p>
            </div>
          </li>

          <li class="bg" v-if='type == 3'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 3 ? 0 : 3100'>
              <el-carousel-item v-for="item in temp3" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(3)">查看小程序</p>
            <div class="cover" v-if="curr_num == 3">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx3.jpg" class="xiaocx" />
              <p class="font16">优记单词本</p>
              <p class="font12">一款界面小清醒，功能简单的四六级背单词工具，词库丰富，配有发音朗读功能，自定义生词功能，记录背词进度，只有有手机就能随时随地开启背词模式，甩开词本的舒服，考试不再愁</p>
            </div>
          </li>

          <li class="bg" v-if='type == 4'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 4 ? 0 : 2990'>
              <el-carousel-item v-for="item in temp4" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(4)">查看小程序</p>
            <div class="cover" v-if="curr_num == 4">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx4.jpg" class="xiaocx" />
              <p class="font16">贝壳Bekor</p>
              <p class="font12">贝壳Bekor 是集社交游戏+兑换商城 的新型电子商务产品，旨在让生活更有趣。</p>
            </div>
          </li>

          <li class="bg" v-if='type == 5'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 5 ? 0 : 3200'>
              <el-carousel-item v-for="item in temp5" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(5)">查看小程序</p>
            <div class="cover" v-if="curr_num == 5">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx5.jpg" class="xiaocx" />
              <p class="font16">拍识车</p>
              <p class="font12">一拍识车是一款街头扫描识车的C端产品。微信小程序“一拍识车”正式上线啦！遇到陌生车型不用慌，只需扫一扫，一秒即可轻松掌握车型信息，秒变朋友圈里的识车大神！不信就来试试看！</p>
            </div>
          </li>

          <li class="bg" v-if='type == 11'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 6 ? 0 : 2900'>
              <el-carousel-item v-for="item in temp6" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(6)">查看小程序</p>
            <div class="cover" v-if="curr_num == 6">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx11.jpg" class="xiaocx" />
              <p class="font16">全城好活动</p>
              <p class="font12">搜罗城市最会玩的人，带你去玩最IN的活动
双十一光棍节来袭，一周恋爱火热在线中</p>
            </div>
          </li>

          <li class="bg" v-if='type == 7'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 7 ? 0 : 3300'>
              <el-carousel-item v-for="item in temp7" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(7)">查看小程序</p>
            <div class="cover" v-if="curr_num == 7">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx7.jpg" class="xiaocx" />
              <p class="font16">投资理财</p>
              <p class="font12">全面的新手炒股入门投资与理财知识、理财产品介绍，助你早日发财。</p>
            </div>
          </li>

          <li class="bg" v-if='type == 8'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 8 ? 0 : 3000'>
              <el-carousel-item v-for="item in temp8" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(8)">查看小程序</p>
            <div class="cover" v-if="curr_num == 8">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx8.jpg" class="xiaocx" />
              <p class="font16">健身俱乐部</p>
              <p class="font12">一站式健身服务平台，为健身房提供线上平台。</p>
            </div>
          </li>

          <li class="bg" v-if='type == 2'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 9 ? 0 : 3200'>
              <el-carousel-item v-for="item in temp9" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(9)">查看小程序</p>
            <div class="cover" v-if="curr_num == 9">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx2.jpg" class="xiaocx" />
              <p class="font16">奇妙旅行</p>
              <p class="font12">一个相约去旅行的小程序，可以发起约伴，发布行程线路</p>
            </div>
          </li>

          <li class="bg" v-if='type == 4'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 10 ? 0 : 3000'>
              <el-carousel-item v-for="item in temp10" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(10)">查看小程序</p>
            <div class="cover" v-if="curr_num == 10">
              <img src="http://pd10b0don.bkt.clouddn.com/shop_xiaocx.jpg" class="xiaocx" />
              <p class="font16">小熊猫餐饮</p>
              <p class="font12">帮单门店的餐饮商家,完成手机扫码快速点餐,支付及打印小票的能力,为企业节省人员,通过大数据分析可以预估明天的物料数量节省开支。</p>
            </div>
          </li>

          <li class="bg" v-if='type == 6'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 11 ? 0 : 3300'>
              <el-carousel-item v-for="item in temp11" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(11)">查看小程序</p>
            <div class="cover" v-if="curr_num == 11">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx6.jpg" class="xiaocx" />
              <p class="font16">CEO日报</p>
              <p class="font12">商业版的今日头条，每天10分钟，帮你梳理一天的重要资讯！《财富》（中文版）出品</p>
            </div>
          </li>

          <li class="bg" v-if='type == 9'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 12 ? 0 : 2900'>
              <el-carousel-item v-for="item in temp12" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(12)">查看小程序</p>
            <div class="cover" v-if="curr_num == 12">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx9.jpg" class="xiaocx" />
              <p class="font16">灵感乍现</p>
              <p class="font12">记录位置，记录想法，记录生活</p>
            </div>
          </li>

          <li class="bg" v-if='type == 10'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 13 ? 0 : 3200'>
              <el-carousel-item v-for="item in temp13" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(13)">查看小程序</p>
            <div class="cover" v-if="curr_num == 13">
              <img src="http://pd10b0don.bkt.clouddn.com/xiaocx10.jpg" class="xiaocx" />
              <p class="font16">美剧侦探社</p>
              <p class="font12">搜你想看的～</p>
            </div>
          </li>

          <li class="bg" v-if='type == 2'>
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside" :interval='curr_num == 14 ? 0 : 3230'>
              <el-carousel-item v-for="item in temp14" :key="item">
                <img :src="item" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont(14)">查看小程序</p>
            <div class="cover" v-if="curr_num == 14">
              <img src="http://pd10b0don.bkt.clouddn.com/mohan.jpg" class="xiaocx" />
              <p class="font16">墨翰旅游</p>
              <p class="font12">墨翰旅游小程序，为您提供国内游、出境游和邮轮等旅游线路的预订服务</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--内容三-->
    <div class="fifthcon3">
      <p class="font30">快速联系我们</p>
      <p class="font16 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打<span>010-58460550</span></p>
      <el-form action="" method="post">
        <el-input type="text" v-model='userInfo.name' placeholder="怎么称呼您" class="input"></el-input>
        <el-input type="text" v-model='userInfo.tel' placeholder="您的联系电话" class="input"></el-input>
        <el-input type="text" v-model='userInfo.describe' placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input"></el-input>
        <el-button type="submit" @click='submit_info()' value="" class="submit">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import "../../static/css/style.css";
import "../../static/css/clickfifth.css";
export default {
  data() {
    return {
      // 用户信息
      userInfo: {
        name: "",
        tel: "",
        describe: ""
      },

      temp1: [
        "http://pd10b0don.bkt.clouddn.com/a1.jpg",
        "http://pd10b0don.bkt.clouddn.com/a2.jpg",
        "http://pd10b0don.bkt.clouddn.com/a3.jpg",
        "http://pd10b0don.bkt.clouddn.com/a4.jpg"
      ],
      temp2: [
        "http://pd10b0don.bkt.clouddn.com/m1.jpg",
        "http://pd10b0don.bkt.clouddn.com/m2.jpg",
        "http://pd10b0don.bkt.clouddn.com/m3.jpg",
        "http://pd10b0don.bkt.clouddn.com/m4.jpg"
      ],
      temp3: [
        "http://pd10b0don.bkt.clouddn.com/c1.jpg",
        "http://pd10b0don.bkt.clouddn.com/c2.jpg",
        "http://pd10b0don.bkt.clouddn.com/c3.jpg",
        "http://pd10b0don.bkt.clouddn.com/c4.jpg"
      ],
      temp4: [
        "http://pd10b0don.bkt.clouddn.com/d1.jpg",
        "http://pd10b0don.bkt.clouddn.com/d2.jpg",
        "http://pd10b0don.bkt.clouddn.com/d3.jpg",
        "http://pd10b0don.bkt.clouddn.com/d4.jpg"
      ],
      temp5: [
        "http://pd10b0don.bkt.clouddn.com/e1.jpg",
        "http://pd10b0don.bkt.clouddn.com/e2.jpg",
        "http://pd10b0don.bkt.clouddn.com/e3.jpg",
        "http://pd10b0don.bkt.clouddn.com/e4.jpg"
      ],
      temp6: [
        "http://pd10b0don.bkt.clouddn.com/k1.jpg",
        "http://pd10b0don.bkt.clouddn.com/k2.jpg",
        "http://pd10b0don.bkt.clouddn.com/k3.jpg",
        "http://pd10b0don.bkt.clouddn.com/k4.jpg"
      ],
      temp7: [
        "http://pd10b0don.bkt.clouddn.com/g1.jpg",
        "http://pd10b0don.bkt.clouddn.com/g2.jpg",
        "http://pd10b0don.bkt.clouddn.com/g3.jpg",
        "http://pd10b0don.bkt.clouddn.com/g4.jpg"
      ],
      temp8: [
        "http://pd10b0don.bkt.clouddn.com/h1.jpg",
        "http://pd10b0don.bkt.clouddn.com/h2.jpg",
        "http://pd10b0don.bkt.clouddn.com/h3.jpg",
        "http://pd10b0don.bkt.clouddn.com/h4.jpg"
      ],
      temp9: [
        "http://pd10b0don.bkt.clouddn.com/b1.jpg",
        "http://pd10b0don.bkt.clouddn.com/b2.jpg",
        "http://pd10b0don.bkt.clouddn.com/b3.jpg"
      ],
      temp10: [
        "http://pd10b0don.bkt.clouddn.com/l1.jpg",
        "http://pd10b0don.bkt.clouddn.com/l2.jpg",
        "http://pd10b0don.bkt.clouddn.com/l3.jpg"
      ],
      temp11: [
        "http://pd10b0don.bkt.clouddn.com/f1.jpg",
        "http://pd10b0don.bkt.clouddn.com/f2.jpg"
      ],
      temp12: [
        "http://pd10b0don.bkt.clouddn.com/i1.jpg",
        "http://pd10b0don.bkt.clouddn.com/i2.jpg",
        "http://pd10b0don.bkt.clouddn.com/i3.jpg"
      ],
      temp13: [
        "http://pd10b0don.bkt.clouddn.com/j1.jpg",
        "http://pd10b0don.bkt.clouddn.com/j2.jpg",
        "http://pd10b0don.bkt.clouddn.com/j3.jpg"
      ],
      temp14: [
        "http://pd10b0don.bkt.clouddn.com/w1.jpg",
        "http://pd10b0don.bkt.clouddn.com/w2.jpg",
        "http://pd10b0don.bkt.clouddn.com/w3.jpg"
      ],
      autoplay: false,
      curr_num: "",
      type: 1
    };
  },
  methods: {
    /**
     * 切换类型
     */
    switch_tab(type) {
      this.type = type;
    },

    showCont: function(num) {
      if (num == this.curr_num) {
        this.curr_num = "";
        return;
      }
      this.curr_num = num;
    },

    /**
     * 提交用户信息
     */
    submit_info() {
      var that = this;
      if (!that.userInfo.tel) {
        that.$message.warning("请填写您的电话号码");
        return;
      }

      // 手机号验证
      var reg = /^1\d{10}$/;
      // 座机号
      var reg2 = /([0-9]{3,4}-)?[0-9]{7,8}/;
      if (!reg.test(that.userInfo.tel) && !reg2.test(that.userInfo.tel)) {
        that.$message.warning("请正确填写您的电话号码");
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
          that.$message({
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
.slideShow {
  width: 215px;
  height: 443px;
  position: relative;
  overflow: hidden;
}

.slideShow .el-carousel__arrow {
  display: none;
}
.slideShow .el-carousel__container {
  width: 189px;
  height: 337.5px;
  position: absolute;
  top: 50px;
  left: 13px;
  cursor: pointer;
}
.slideShow .el-carousel__container img {
  display: block;
  width: 100%;
  height: 100%;
}

.con2_photo .bg .slideShow .el-carousel__indicators--outside {
  width: 189px;
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 13px;
  -webkit-transform: none;
  transform: none;
}
.con2_photo
  .bg
  .slideShow
  .el-carousel__indicators--outside
  .el-carousel__indicator
  .el-carousel__button {
  display: block;
  width: 6px;
  height: 6px;
  /* background-color: #e2e2e2; */
  border: none;
  border-radius: 100%;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.con2_photo .bg .slideShow .el-carousel__indicators--outside .is-active button {
  background-color: #c0c4cc;
  opacity: 1;
}
</style>
