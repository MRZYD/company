<template>
  <div class="content">
    <!--内容一-->
    <div class="panda_con1 app_consec">
      <img src="http://pd10b0don.bkt.clouddn.com/food.jpg" class="con1_bg" />
    </div>

      <div class="app_panda_con1">
        <img src="http://pd10b0don.bkt.clouddn.com/app_padna_food.png" alt="">
    </div>

        <div class="panda_con2">
          <div class="left introduction">
            <p class="font30 name">小熊猫餐饮模板(单门店)</p>
            <p class="font14">帮单门店的餐饮商家,完成手机扫码快速点餐,支付及打印小票的能力,为企业节省人员,通过大数据分析可以预估明天的物料数量节省开支。</p>
          </div>
          <div class="right">
            <img src="http://pd10b0don.bkt.clouddn.com/food_xiaocx.jpg" class="erweima" />
            <p class="font14">扫描二维码体验</p>
          </div>
        </div>

        <div class="panda_con3">
          <p class="con3_title font30">适用商家</p>
          <p class="con3_character font16">一款小程序满足多种类型门店</p>
          <ul class="ul">
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/icon_5.png" />
              <p class="font14">中西餐</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/icon_3.png" />
              <p class="font14">快餐</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/icon_2.png" />
              <p class="font14">咖啡店</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/icon_4.png" />
              <p class="font14">甜品</p>
            </li>
            <li>
              <img src="http://pd10b0don.bkt.clouddn.com/icon_1.png" />
              <p class="font14">茶馆</p>
            </li>
          </ul>
        </div>

        <div class="panda_con4">
          <p class="con4_title font30">功能模块</p>
          <p class="con4_character font16">多种功能满足你的需求</p>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food1.jpg" class="food_photo left" />
            <div class="right character">
              <p class="font20 order_name">扫码自助点餐</p>
              <p class="font14">无需服务人员，顾客直接扫描桌码，轻松下单，省时省力！</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food2.jpg" class="food_photo right" />
            <div class="left character">
              <p class="font20 order_name">热销菜品推荐</p>
              <p class="font14">推荐菜品一目了然，让顾客点餐更快，更方便。</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food3.jpg" class="food_photo left" />
            <div class="right character">
              <p class="font20 order_name">菜单管理</p>
              <p class="font14">推荐，调价，菜品下架，工作人员只需一部手机轻松搞定。</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food4.jpg" class="food_photo right" />
            <div class="left character">
              <p class="font20 order_name">广告位</p>
              <p class="font14">企业推广广告区位，展现最主要的内容区</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food5.jpg" class="food_photo left" />
            <div class="right character">
              <p class="font20 order_name">我的订单</p>
              <p class="font14">每笔订单数据都是未来企业发展的核心</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food6.jpg" class="food_photo right" />
            <div class="left character">
              <p class="font20 order_name">菜品分类</p>
              <p class="font14">自定义菜品分类</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food8.jpg" class="food_photo left" />
            <div class="right character">
              <p class="font20 order_name">扫码支付</p>
              <p class="font14">扫码简单支付费用</p>
            </div>
          </div>
          <div class="order">
            <img src="http://pd10b0don.bkt.clouddn.com/food7.jpg" class="food_photo right" />
            <div class="left character">
              <p class="font20 order_name">打印小票</p>
              <p class="font14">支付即可打印前台和后厨小票，节省人员琐事工作量</p>
            </div>
          </div>
          <!-- <div class="order-img">
        <img src="http://pd10b0don.bkt.clouddn.com/order_img1.png" alt="">
        <img src="http://pd10b0don.bkt.clouddn.com/order_img2.png" alt="">
      </div> -->
        </div>

        <div class="panda_con5 app_consec">
          <div class="width">
            <p class="font30 log">升级日志</p>
            <p class="font20 blue">当前1.4版本
              <span class="right font14">2017-10-24</span>
            </p>
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
                          期待功能：
                          <textarea placeholder="您希望下次增加什么内容，或提出您宝贵的建议" name="describe" class="textarea textarea2"></textarea>
                        </div>
                        <div class="modal-footer">
                          <input type="button" class="cancel font16" @click="foodClose" value="取消" />
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
          <p class="font16 title">填上您的联系方式，我们会在半个小时内回复您，或者拨打
            <span>010-58460550</span>
          </p>
          <el-form action="" method="post">
            <el-input type="text" v-model="userInfo.name" placeholder="怎么称呼您" class="input"></el-input>
            <el-input type="text" v-model="userInfo.tel" placeholder="您的联系电话" class="input"></el-input>
            <el-input type="text" v-model='userInfo.describe' placeholder="请用一句话描述下您的问题，如：我不知道如何开通附近小程序" class="input"></el-input>
            <el-button type="submit" @click='submit_info(1)' value="" class="submit">提交</el-button>
          </el-form>
        </div>

        <div class="app_con3_home">
          <h2 class="app_con3_home_h2">快速联系我们</h2>
          <p class="app_con3_home_p">填上您的联系方式，我们会在半小时内回复您 <br> 或者拨打
            <a href="tel:18612534550">186 1253 4550</a>
          </p>
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
          <span class="app_con4_span">Copyright©2016-2017 小程序（北京）科技有限公司 | 京ICP备17004176</span>
        </div>

        <router-link to="/AppTel">
          <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
        </router-link>
      </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      activeNames: ["1"],

      // 用户信息
      userInfo: {
        name: "",
        tel: "",
        describe: ""
      }
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    handleChange(val) {
      console.log(val);
    },
    foodClose() {
      this.visible = !this.visible;
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
  }
};
</script>

<style>
</style>
