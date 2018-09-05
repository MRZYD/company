<template lang="html">
  <div class="content">
    <!--内容一-->
    <div class="fifthcon1">
      <img src="../../static/img/apply_for4/apply_for4_bg.jpg" class="con1_bg" />
    </div>
    <!--内容二-->
    <div class="fifthcon2">
      <ul class="con2_nav font14">
        <li class="con2_nav_add">餐饮</li>
        <li>旅游</li>
        <li>工具</li>
        <li>电商</li>
        <li>教育</li>
        <li>资讯</li>
        <li>理财</li>
        <li>健康</li>
        <li>生活</li>
        <li>娱乐</li>
        <li>媒体</li>
      </ul>
      <div class="coniter">
        <!--餐饮-->
        <ul class="con2_photo clearfix">
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp1" :key="item">
                <img :src="item.img1" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/apply_for4/xiaocx1.jpg" class="xiaocx" />
              <p class="font16">沈一点</p>
              <p class="font12">城市精品美食推荐</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp2" :key="item">
                <img :src="item.img2" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/food/shop_xiaocx.jpg" class="xiaocx" />
              <p class="font16">小熊猫商城</p>
              <p class="font12">与服务公众号巧妙结合快速实现线上营销变现。</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp3" :key="item">
                <img :src="item.img3" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/apply_for4/xiaocx1.jpg" class="xiaocx" />
              <p class="font16">沈一点</p>
              <p class="font12">城市精品美食推荐</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp4" :key="item">
                <img :src="item.img4" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/food/shop_xiaocx.jpg" class="xiaocx" />
              <p class="font16">小熊猫商城</p>
              <p class="font12">与服务公众号巧妙结合快速实现线上营销变现。</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp5" :key="item">
                <img :src="item.img5" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/apply_for4/xiaocx1.jpg" class="xiaocx" />
              <p class="font16">沈一点</p>
              <p class="font12">城市精品美食推荐</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp6" :key="item">
                <img :src="item.img6" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/food/shop_xiaocx.jpg" class="xiaocx" />
              <p class="font16">小熊猫商城</p>
              <p class="font12">与服务公众号巧妙结合快速实现线上营销变现。</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp7" :key="item">
                <img :src="item.img7" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/apply_for4/xiaocx1.jpg" class="xiaocx" />
              <p class="font16">沈一点</p>
              <p class="font12">城市精品美食推荐</p>
            </div>
          </li>
          <li class="bg">
            <el-carousel class="slideShow slideShow1" trigger="click" indicator-position="outside">
              <el-carousel-item v-for="item in temp8" :key="item">
                <img :src="item.img8" alt="">
              </el-carousel-item>
            </el-carousel>
            <p class="examine" @click="showCont">查看小程序</p>
            <div class="cover" v-if="xiaocx">
              <img src="../../static/img/food/shop_xiaocx.jpg" class="xiaocx" />
              <p class="font16">小熊猫商城</p>
              <p class="font12">与服务公众号巧妙结合快速实现线上营销变现。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--内容三-->
    <div class="fifthcon3">
      <p class="font30">快速联系我们</p>
      <p class="font16 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打&nbsp;&nbsp;&nbsp;<text>010-58400550</text></p>
      <el-form action="" method="post">
        <el-input type="text" placeholder="怎么称呼您" class="input"></el-input>
        <el-input type="text" placeholder="您的联系电话" class="input"></el-input>
        <el-input type="text" placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input"></el-input>
        <el-button type="submit" value="" class="submit">提交</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import '../../static/css/style.css'
import '../../static/css/clickfifth.css'
export default {
  data () {
    return {
      temp1: [
        {img1: '../../static/img/apply_for4/a1.jpg'},
        {img1: '../../static/img/apply_for4/a2.jpg'},
        {img1: '../../static/img/apply_for4/a3.jpg'},
        {img1: '../../static/img/apply_for4/a4.jpg'}
      ],
      temp2: [
        {img2: '../../static/img/apply_for4/m1.jpg'},
        {img2: '../../static/img/apply_for4/m2.jpg'},
        {img2: '../../static/img/apply_for4/m3.jpg'},
        {img2: '../../static/img/apply_for4/m4.jpg'}
      ],
      temp3: [
        {img3: '../../static/img/apply_for4/c1.jpg'},
        {img3: '../../static/img/apply_for4/c2.jpg'},
        {img3: '../../static/img/apply_for4/c3.jpg'},
        {img3: '../../static/img/apply_for4/c4.jpg'}
      ],
      temp4: [
        {img4: '../../static/img/apply_for4/d1.jpg'},
        {img4: '../../static/img/apply_for4/d2.jpg'},
        {img4: '../../static/img/apply_for4/d3.jpg'},
        {img4: '../../static/img/apply_for4/d4.jpg'}
      ],
      temp5: [
        {img5: '../../static/img/apply_for4/e1.jpg'},
        {img5: '../../static/img/apply_for4/e2.jpg'},
        {img5: '../../static/img/apply_for4/e3.jpg'},
        {img5: '../../static/img/apply_for4/e4.jpg'}
      ],
      temp6: [
        {img6: '../../static/img/apply_for4/k1.jpg'},
        {img6: '../../static/img/apply_for4/k2.jpg'},
        {img6: '../../static/img/apply_for4/k3.jpg'},
        {img6: '../../static/img/apply_for4/k4.jpg'}
      ],
      temp7: [
        {img7: '../../static/img/apply_for4/g1.jpg'},
        {img7: '../../static/img/apply_for4/g2.jpg'},
        {img7: '../../static/img/apply_for4/g3.jpg'},
        {img7: '../../static/img/apply_for4/g4.jpg'}
      ],
      temp8: [
        {img8: '../../static/img/apply_for4/h1.jpg'},
        {img8: '../../static/img/apply_for4/h2.jpg'},
        {img8: '../../static/img/apply_for4/h3.jpg'},
        {img8: '../../static/img/apply_for4/h4.jpg'}
      ],
      xiaocx: false
    }
  },
  methods: {
    showCont: function () {
      this.xiaocx = !this.xiaocx
    }
  }
}
</script>

<style>
.slideShow {
  width: 215px;
  height: 443px;
  position: relative;
  overflow: hidden;
}

.slideShow .el-carousel__arrow{
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
.slideShow .el-carousel__container img{
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
.el-carousel__button {
    display: block;
    width: 6px;
    height: 6px;
    background-color: #E2E2E2;
    border: none;
    border-radius: 100%;
    outline: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
}
.el-carousel__indicators--outside button {
    background-color: #000;
}

</style>
