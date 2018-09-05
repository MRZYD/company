<template lang="html">
  <div class="content">
    <!--内容一-->
    <div class="panda_con1 app_consec">
      <img src="../../static/img/food/food.jpg" class="con1_bg" />
    </div>

    <div class="app_panda_con1">
      <img src="../../static/img/app/app_padna_food.png" alt="">
    </div>

    <div class="panda_con2">
      <div class="left introduction">
        <p class="font30 name">小熊猫餐饮模板(单门店)</p>
        <p class="font14">帮单门店的餐饮商家,完成手机扫码快速点餐,支付及打印小票的能力,为企业节省人员,通过大数据分析可以预估明天的物料数量节省开支。</p>
      </div>
      <div class="right">
        <img src="../../static/img/food/food_xiaocx.jpg" class="erweima" />
        <p class="font14">扫描二维码体验</p>
      </div>
    </div>

    <div class="panda_con3">
      <p class="con3_title font30">适用商家</p>
      <p class="con3_character font16">一款小程序满足多种类型门店</p>
      <ul class="ul">
        <li>
          <img src="../../static/img/food/icon5.png" />
          <p class="font14">中西餐</p>
        </li>
        <li>
          <img src="../../static/img/food/icon3.png" />
          <p class="font14">快餐</p>
        </li>
        <li>
          <img src="../../static/img/food/icon2.png" />
          <p class="font14">咖啡店</p>
        </li>
        <li>
          <img src="../../static/img/food/icon4.png" />
          <p class="font14">甜品</p>
        </li>
        <li>
          <img src="../../static/img/food/icon1.png" />
          <p class="font14">茶馆</p>
        </li>
      </ul>
    </div>

    <div class="panda_con4">
      <p class="con4_title font30">功能模块</p>
      <p class="con4_character font16">多种功能满足你的需求</p>
      <div class="order">
        <img src="../../static/img/food/food1.jpg" class="food_photo left" />
        <div class="right character">
          <p class="font20 order_name">扫码自助点餐</p>
          <p class="font14">无需服务人员，顾客直接扫描桌码，轻松下单，省时省力！</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food2.jpg" class="food_photo right" />
        <div class="left character">
          <p class="font20 order_name">热销菜品推荐</p>
          <p class="font14">推荐菜品一目了然，让顾客点餐更快，更方便。</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food3.jpg" class="food_photo left" />
        <div class="right character">
          <p class="font20 order_name">菜单管理</p>
          <p class="font14">推荐，调价，菜品下架，工作人员只需一部手机轻松搞定。</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food4.jpg" class="food_photo right" />
        <div class="left character">
          <p class="font20 order_name">广告位</p>
          <p class="font14">企业推广广告区位，展现最主要的内容区</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food5.jpg" class="food_photo left" />
        <div class="right character">
          <p class="font20 order_name">我的订单</p>
          <p class="font14">每笔订单数据都是未来企业发展的核心</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food6.jpg" class="food_photo right" />
        <div class="left character">
          <p class="font20 order_name">菜品分类</p>
          <p class="font14">自定义菜品分类</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food8.jpg" class="food_photo left" />
        <div class="right character">
          <p class="font20 order_name">扫码支付</p>
          <p class="font14">扫码简单支付费用</p>
        </div>
      </div>
      <div class="order">
        <img src="../../static/img/food/food7.jpg" class="food_photo right" />
        <div class="left character">
          <p class="font20 order_name">打印小票</p>
          <p class="font14">支付即可打印前台和后厨小票，节省人员琐事工作量</p>
        </div>
      </div>
      <div class="order-img">
        <img src="../../static/img/app/order_img1.png" alt="">
        <img src="../../static/img/app/order_img2.png" alt="">
      </div>
    </div>

    <div class="panda_con5 app_consec">
      <div class="width">
        <p class="font30 log">升级日志</p>
        <p class="font20 blue">当前1.4版本<span class="right font14">2017-10-24</span></p>
        <p class="font14">-修复wx.downloadFile的downloadTask.onProgressUpdata缺少返回参数totalBytesWritten、的问题。</p>
        <p class="font14">-优化了UI界面，更加简洁清晰</p>
        <p class="font14 optimize">-优化程序，点餐更流畅，速度更快</p>
        <el-collapse v-model="activeNames" @change="handleChange" accordion>
          <el-collapse-item name="1">
            <template slot="title">
              1.3版本
              <span class="right font14 el-icon-arrow-span">2017-10-06</span>
            </template>
            <div>-修复wx.downloadFile的downloadTask.onProgressUpdata缺少返回参数totalBytesWritten、的问题。</div>
            <div>-优化了UI界面，更加简洁清晰</div>
            <div class="">-优化程序，点餐更流畅，速度更快</div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              1.2版本
              <span class="right font14 el-icon-arrow-span">2017-10-06</span>
            </template>
            <div>-修复wx.downloadFile的downloadTask.onProgressUpdata缺少返回参数totalBytesWritten、的问题。</div>
            <div>-优化了UI界面，更加简洁清晰</div>
            <div class="">-优化程序，点餐更流畅，速度更快</div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
              1.1版本
              <span class="right font14 el-icon-arrow-span">2017-10-06</span>
            </template>
            <div>-修复wx.downloadFile的downloadTask.onProgressUpdata缺少返回参数totalBytesWritten、的问题。</div>
            <div>-优化了UI界面，更加简洁清晰</div>
            <div class="">-优化程序，点餐更流畅，速度更快</div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
              1.0版本
              <span class="right font14 el-icon-arrow-span">2017-10-06</span>
            </template>
            <div>-修复wx.downloadFile的downloadTask.onProgressUpdata缺少返回参数totalBytesWritten、的问题。</div>
            <div>-优化了UI界面，更加简洁清晰</div>
            <div class="">-优化程序，点餐更流畅，速度更快</div>
          </el-collapse-item>
        </el-collapse>


        <p class="font30 upgrade">下次升级内容</p>
        <p class="font16 reserve">外卖点餐，在线预定</p>
        <!-- 弹层 -->
        <div class="fun_ask">
          <el-button @click="open" class="font16 btn-primary">提出您想要的功能&nbsp;→</el-button>
          <el-dialog :visible.sync="visible">
            <div class="modal-dialog">
    					<p class="font24">提出您期待的功能</p>
    					<p class="font14 alert_referral">我们会通过您提交的需求想法，升级到下一个功能版本</p>
    					<form action="" method="post">
    						<div class="font16">
    							您的姓名： <input type="type" name="name" class="input" />
    						</div>
    						<div class="font16">
    							联系电话： <input type="type" name="tel" class="input" />
    						</div>
    						<div class="font16">
    							期待功能： <textarea placeholder="您希望下次增加什么内容，或提出您宝贵的建议" name="describe" class="textarea textarea2"></textarea>
    						</div>
    						<div class="modal-footer">
    							<input type="button" class="cancel font16" @click="foodClose"  value="取消" />
    							<input type="button" class="submit font16" id="btn1" value="提交" />
    						</div>
    					</form>
    				</div>
          </el-dialog>
        </div>
      </div>
    </div>

    <div class="panda_con6 app_consec">
      <p class="font30">快速联系我们</p>
      <p class="font16 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打&nbsp;&nbsp;&nbsp;<text>186 1253 4550</text></p>
      <el-form action="" method="post">
        <el-input type="text" placeholder="怎么称呼您" class="input" ></el-input>
        <el-input type="text" placeholder="您的联系电话" class="input" ></el-input>
        <el-input type="text" placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input" ></el-input>
        <el-button type="submit" value="" class="submit" >提交</el-button>
      </el-form>
    </div>

    <div class="app_con3_home">
      <h2 class="app_con3_home_h2">快速联系我们</h2>
      <p class="app_con3_home_p">填上您的联系方式，我们会在半小时内回复您</br>或者拨打 <span>186 1253 4550</span> </p>
      <el-form class="app_con3_form">
        <el-input v-model="input" placeholder="怎么称呼您"></el-input>
        <el-input v-model="input" placeholder="您的联系电话"></el-input>
        <textarea name="name" rows="8" cols="80" placeholder="请用一句话描述您的问题"></textarea>
        <el-button class="app_con3_form_btn">提交</el-button>
      </el-form>
    </div>

    <div class="app_con4_home">
      <h3 class="app_con4_h3">小程序（北京）科技有限公司</h3>
      <p class="app_con4_p">联系电话：010-58460550</p>
      <p class="app_con4_p">电子邮箱：hc.js@xiaocx.work</p>
      <p class="app_con4_p">联系地址：北京市海淀区农大南路88号万霖大厦</p>
      <div class="app_con4_img">
        <div class="app_con4_image">
          <img src="../../static/img/ems-cnpl.png" alt="">
          <span>关注公众号</span>
        </div>
        <div class="app_con4_image">
          <img src="../../static/img/boss-erweima.png" alt="">
          <span>加我微信</span>
        </div>
      </div>
      <span class="app_con4_span">Copyright©2016-2017 小程序（北京）科技有限公司  |  京ICP备17004176</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      activeNames: ['1']
    }
  },
  methods: {
    open () {
      this.visible = true
    },
    handleChange (val) {
      console.log(val);
    },
    foodClose () {
      this.visible = !this.visible
    }
  }
}
</script>

<style>

</style>
