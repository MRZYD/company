<template lang="html">
  <!-- 主要内容 -->
  <div class="content">

    <!--内容一-->
    <div class="con1">
      <img src="../../static/img/index/index.jpg" class="con1_bg" />
      <img src="../../static/img/index/app_index_banner.png" class="con1_bg_app" alt="">
      <div class="character">
        <p class="font40">让每一个产品都富有生命力</p>
        <p class="font18">我们专注于微信小程序高端定制开发服务</p>
        <div class="home_demand">
          <el-button @click="open" class="el_btn font16"  data-toggle='modal' data-target='#show4'>提交需求</el-button>
          <el-dialog :visible.sync="visible" class="container2 ">
            <!--第一层-->
            <div class="modal fade" id='show4'>
              <div class="modal-dialog">
                <p class="font24">定制开发微信小程序</p>
                <p class="font14 alert_referral">能根据企业的业务或您有好的想法都想通过小程序来实现</p>
                <div class="state">
                  <ul>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state1.png" class="alert2_photo" />
                      <p class="font14 black">应用领域</p>
                    </li>
                    <li>
                      <div class="alert2-circle"></div>
                    </li>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state2.png" class="alert2_photo" />
                      <p class="font14">选择功能模块</p>
                    </li>
                    <li>
                      <div class="alert2-circle"></div>
                    </li>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state3.png" class="alert2_photo" />
                      <p class="font14">提交需求</p>
                    </li>
                  </ul>
                </div>
                <div class="alert2_choice font16">
                  <p class="xu font12">无论走多远都希望您坚持自己的初衷，让更多的人能够使用到产品带来的愉悦，请在下面选择您要解决问题的行业痛点。</p>
                  <ul>
                    <li class="alert2_choice_ul_li hover"><span class="alert2_choice_state1"></span>餐饮行业</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state2"></span>旅游出行</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state3"></span>工具应用</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state4"></span>电商购物</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state5"></span>社交通讯</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state6"></span>教育行业</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state7"></span>信息资讯</li>
                    <li class="alert2_choice_ul_li hover"><span class="alert2_choice_state8"></span>投资理财</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state9"></span>健康医疗</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state10"></span>生活服务</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state11"></span>媒介中介</li>
                    <li class="alert2_choice_ul_li"><span class="alert2_choice_state12"></span>文化娱乐</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <input type="button" class="fff font16" data-toggle='modal' id="btn4" value="下一步" />
                </div>
              </div>
            </div>

            <!--第二层-->
            <!-- <div class="modal fade alert2" id='show5' data-backdrop="false">
              <div class="modal-dialog">
                <p class="font24">定制开发微信小程序</p>
                <p class="font14 alert_referral">能根据企业的业务或您有好的想法都想通过小程序来实现</p>
                <div class="state">
                  <ul class="clearfix">
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state1.png" class="alert2_photo" />
                      <p class="font14 black">应用领域</p>
                    </li>
                    <li>
                      <div class="alert2-circle-hl"></div>
                    </li>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state2-hl.png" class="alert2_photo" />
                      <p class="font14 black">选择功能模块</p>
                    </li>
                    <li>
                      <div class="alert2-circle"></div>
                    </li>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state3.png" class="alert2_photo" />
                      <p class="font14">提交需求</p>
                    </li>
                  </ul>
                </div>
                <div class="alert2_choice font16">
                  <p class="xu font12">请勾选才【餐饮行业】包含的功能模块，
                  </p>
                  <ul class="alert2_ul font16">
                    <li class="alert2_ul_li hover">扫码点餐</li>
                    <li class="alert2_ul_li">员工管理</li>
                    <li class="alert2_ul_li">卡券功能</li>
                    <li class="alert2_ul_li">分销商</li>
                    <li class="alert2_ul_li hover">分享朋友</li>
                    <li class="alert2_ul_li">门店管理</li>
                    <li class="alert2_ul_li">数据统计</li>
                    <li class="alert2_ul_li">限时特惠</li>
                    <li class="alert2_ul_li">热门推荐</li>
                    <li class="alert2_ul_li">微信支付</li>
                    <li class="alert2_ul_li">打印小票</li>
                    <li class="alert2_ul_li">排队叫号</li>
                    <li class="alert2_ul_li">扫码点餐</li>
                    <li class="alert2_ul_li">员工管理</li>
                    <li class="alert2_ul_li">卡券功能</li>
                    <li class="alert2_ul_li">分销商</li>
                    <li class="alert2_ul_li hover">分享朋友</li>
                    <li class="alert2_ul_li">门店管理</li>
                    <li class="alert2_ul_li">数据统计</li>
                    <li class="alert2_ul_li">限时特惠</li>
                    <li class="alert2_ul_li">热门推荐</li>
                    <li class="alert2_ul_li">微信支付</li>
                    <li class="alert2_ul_li">打印小票</li>
                    <li class="alert2_ul_li">排队叫号</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <input type="button" class="font16 up" value="上一步" id="up5" />
                  <input type="button" class="font16" data-toggle='modal' id="btn5" value="下一步" />
                </div>
              </div>
            </div> -->

            <!--第三层-->
            <!-- <div class="modal fade alert3 " id='show6' data-backdrop="false">
              <div class="modal-dialog">
                <p class="font24">定制开发微信小程序</p>
                <p class="font14 alert_referral">能根据企业的业务或您有好的想法都想通过小程序来实现</p>
                <div class="state">
                  <ul>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state1.png" class="alert2_photo" />
                      <p class="font14 black">应用领域</p>
                    </li>
                    <li>
                      <div class="alert2-circle-hl"></div>
                    </li>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state2-hl.png" class="alert2_photo" />
                      <p class="font14 black">选择功能模块</p>
                    </li>
                    <li>
                      <div class="alert2-circle-hl"></div>
                    </li>
                    <li>
                      <img src="../../static/img/index/index-alert2/alert2-state3-hl.png" class="alert2_photo" />
                      <p class="font14  black">提交需求</p>
                    </li>
                  </ul>
                </div>
                <div class="alert2_choice font16">
                  <p class="xu font12">您已经选择了小程序相关信息，请填写以下资料让我们快速与您联系!</p>
                  <div class="form">
                    <div class="font16">
                      <span>您的姓名：</span><input type="type" name="name" class="input" />
                    </div>
                    <div class="font16">
                      <span>联系电话：</span><input type="type" name="tel" class="input" />
                    </div>
                    <div class="font16">
                      <span>简单描述：</span><textarea placeholder="请简单描述一下想在附近小程序展示的内容" name="describe" class="textarea textarea2"></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <input type="button" class="font16 up" value="上一步" id="up6" />
                  <input type="submit" class="button_success2 font16" value="提交需求" />
                </div>
              </div>
            </div> -->
          </el-dialog>
        </div>
        <router-link to="/AppDemFri"><button class="home_demand_app" type="button" name="button">提交需求</button></router-link>
      </div>
    </div>

    <!--内容二-->
    <div class="con2 app_consec">
      <p class="font30">一个微信小程序是怎样诞生的</p>
      <p class="font16 title">每一款都有他各自的生命力，让每一个产品都有它们独特的性格</p>
      <el-row :gutter="30" class="birth">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <i class="bgimg1 left"></i>
            <div class="left con2_character">
              <p class="font16">需求对接</p>
              <p class="font12">根据项目的需求文档，把想法形成草稿式的交互原型</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <i class="bgimg2 left"></i>
            <div class="left con2_character">
              <p class="font16">原型设计</p>
              <p class="font12">通过多次沟通把您的想法形成专业的项目需求文档</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <i class="bgimg3 left"></i>
            <div class="left con2_character">
              <p class="font16">UI设计</p>
              <p class="font12">通过项目的原型设计图，进行UI颜色渲染和用户体验视觉设计</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="30" class="birth">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <i class="bgimg4 left"></i>
            <div class="left con2_character">
              <p class="font16">微信小程序开发</p>
              <p class="font12">根据项目需求搭建平台管理端，提供微信小程序使用API接口数据</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <i class="bgimg5 left"></i>
            <div class="left con2_character">
              <p class="font16">内部测试</p>
              <p class="font12">每一个项目完毕后都需要严格的测试，让每一个产品都更加健壮</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <i class="bgimg6 left"></i>
            <div class="left con2_character">
              <p class="font16">发布上线</p>
              <p class="font12">过微信审核后，就可以发布上线</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!--内容四-->
    <div class="con4 app_consec">
      <p class="font30">我们开发出哪些小程序</p>
      <p class="font16 title">小程序（北京）科技有限公司出品必属精品，我们对产品的热爱和执着</p>
      <div class="con4_content clearfix">
        <div class="fontf">
          <img src="../../static/img/index/one.png" class="font_family" />
        </div>
        <div class="container-img left">
          <div class="container_left ">
            <img src="" class="one"/>
          </div>
        </div>
        <div class="container_right left">
          <p class="font24">蹭导游服务平台：</p>
          <p class="font14">一个有故事的导游预约平台，游客可以通过蹭导游小程序进行预约私人导游和共享经济下的拼导游 （共享导游）</p>
          <div class="function_con">
            <p class="font16 function">功能模块</p>
            <table border="1" cellspacing="" cellpadding="" bordercolor="#e6e6e6">
              <tr>
                <td>
                  <p class="font16">拼导游</p>
                  <p class="font12">游服务属于员似拼团一样,让更多人可以花少量的享受导游的乐趣</p>
                </td>
                <td>
                  <p class="font16">包导游</p>
                  <p class="font12">包导游服务类似于私人订制,让有更多需求的人可以享受到高级导游专属的服务</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="font16">免费听：</p>
                  <p class="font12">一个古城都有它历史悠久的文化古的,让我们大家免费聆听它的传奇故事</p>
                </td>
                <td>
                  <p class="font16">分销商：</p>
                  <p class="font12">需要长期发的产品都需要有合作伙伴的加入,那么分销商通过下线方式的合作引流</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="technology_con">
            <p class="font16 technology">技术包含</p>
            <ul>
              <li>
                <img src="../../static/img/index/php.png" />
                <p class="font12">PHP</p>
              </li>
              <li>
                <img src="../../static/img/index/mysql.png" />
                <p class="font12">MYSQL</p>
              </li>
              <li>
                <img src="../../static/img/index/logo_11.png" />
                <p class="font12">微信小程序</p>
              </li>
              <li>
                <img src="../../static/img/index/ios.png" />
                <p class="font12">IOS</p>
              </li>
              <li>
                <img src="../../static/img/index/android.png" />
                <p class="font12">ANDROID</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con4_content clearfix">
        <div class="fontf">
          <img src="../../static/img/index/two.png" class="font_family" />
        </div>
        <div class="container-img left">
          <div class="container_left ">
            <img src="" />
          </div>
        </div>
        <div class="container_right left">
          <p class="font24">墨翰旅游小程序：</p>
          <p class="font14">墨翰旅游小程序，为您提供国内游、出境游和邮轮等旅游线路的预订服务</p>
          <div class="function_con">
            <p class="font16 function">功能模块</p>
            <table border="1" cellspacing="" cellpadding="" bordercolor="#e6e6e6">
              <tr>
                <td>
                  <p class="font16">自动定位：</p>
                  <p class="font12">根据当前用户自动定位获取位置</p>
                </td>
                <td>
                  <p class="font16">精品推荐：</p>
                  <p class="font12">推荐最热门的旅游路线服务</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="font16">专属客服：</p>
                  <p class="font12">通过及时的方式进行与客户之间沟通</p>
                </td>
                <td>
                  <p class="font16">多种玩法：</p>
                  <p class="font12">快速推荐当季热门城市，国内外游玩服务</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="technology_con">
            <p class="font16 technology">技术包含</p>
            <ul>
              <li>
                <img src="../../static/img/index/php.png" />
                <p class="font12">PHP</p>
              </li>
              <li>
                <img src="../../static/img/index/mysql.png" />
                <p class="font12">MYSQL</p>
              </li>
              <li>
                <img src="../../static/img/index/logo_11.png" />
                <p class="font12">微信小程序</p>
              </li>
              <li>
                <img src="../../static/img/index/sketch.png" />
                <p class="font12">Sketch</p>
              </li>
              <li>
                <img src="../../static/img/index/ps.png" />
                <p class="font12">PhotpShop</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con4_content clearfix">
        <div class="fontf">
          <img src="../../static/img/index/three.png" class="font_family" />
        </div>
        <div class="container-img left">
          <div class="container_left ">
            <img src="" />
          </div>
        </div>
        <div class="container_right left">
          <p class="font24">趣购小红车：</p>
          <p class="font14">领先的共享推车运营商，用趣购小红车轻松把超市推回家</p>
          <div class="function_con">
            <p class="font16 function">功能模块</p>
            <table border="1" cellspacing="" cellpadding="" bordercolor="#e6e6e6">
              <tr>
                <td>
                  <p class="font16">免费月卡： </p>
                  <p class="font12">新用户通过认证完毕后就可以享受免费使用策略</p>
                </td>
                <td>
                  <p class="font16">附件小红车：</p>
                  <p class="font12">通过地图定位快速找到附近的推车点</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="font16">扫码开锁：</p>
                  <p class="font12">扫码车牌二维码，开锁快捷又方便</p>
                </td>
                <td>
                  <p class="font16">活动内容： </p>
                  <p class="font12">通过线上参与活动即可领取优惠</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="technology_con">
            <p class="font16 technology">技术包含</p>
            <ul>
              <li>
                <img src="../../static/img/index/php.png" />
                <p class="font12">PHP</p>
              </li>
              <li>
                <img src="../../static/img/index/mysql.png" />
                <p class="font12">MYSQL</p>
              </li>
              <li>
                <img src="../../static/img/index/logo_11.png" />
                <p class="font12">微信小程序</p>
              </li>
              <li>
                <img src="../../static/img/index/sketch.png" />
                <p class="font12">Sketch</p>
              </li>
              <li>
                <img src="../../static/img/index/ps.png" />
                <p class="font12">PhotpShop</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!--内容五-->
    <div class="con5 app_consec">
      <p class="font30">售后保障</p>
      <p class="font16 title">再好的产品都需要长期售后保障，没有保障就像耍流氓</p>
      <ul>
        <li>
          <img src="../../static/img/apply_for3/con4_li1.png" />
          <p class="font16">一年免费维护</p>
        </li>
        <li>
          <img src="../../static/img/apply_for3/con4_li2.png" />
          <p class="font16">7×12服务</p>
        </li>
        <li>
          <img src="../../static/img/apply_for3/con4_li3.png" />
          <p class="font16">8小时内快速回应</p>
        </li>
        <li>
          <img src="../../static/img/apply_for3/con4_li4.png" />
          <p class="font16">免费技术咨询</p>
        </li>
        <li>
          <img src="../../static/img/apply_for3/con4_li5.png" />
          <p class="font16">系统免费教学</p>
        </li>
      </ul>
    </div>

    <!--内容六-->
    <div class="con6 app_consec">
      <p class="font30">合作企业</p>
      <p class="font16 title">帮助每一个企业走向成功，感觉到创造的价值</p>
      <ul class="con6_photo">
        <li>
          <div class="logo1"></div>
          <div class="logo2"></div>
          <div class="logo3"></div>
          <div class="logo4"></div>
          <div class="logo5"></div>
          <div class="logo6"></div>
        </li>
        <li>
          <div class="logo7"></div>
          <div class="logo8"></div>
          <div class="logo9"></div>
          <div class="logo10"></div>
          <div class="logo11"></div>
          <div class="logo12"></div>
          <div class="logo13"></div>
          <div class="logo14"></div>
        </li>
        <li>
          <div class="logo15"></div>
          <div class="logo16"></div>
          <div class="logo17"></div>
          <div class="logo18"></div>
          <div class="logo19"></div>
          <div class="logo20"></div>
          <div class="logo21"></div>
          <div class="logo22"></div>
          <div class="logo23"></div>
        </li>
      </ul>
    </div>

    <!-- 移动端 -->
    <div class="app_con1_home">
      <h2>我们开发出那些小程序</h2>
      <ul class="clearfix">
        <li>
          <img src="../../static/img/index/app_con1_home1.png" alt="">
          <h3>新东方前途出国</h3>
          <span>东方教育集团官方留学机构</span>
        </li>
        <li>
          <img src="../../static/img/index/app_con1_home2.png" alt="">
          <h3>APM MONACO商城</h3>
          <span>来自摩纳哥的珠宝</span>
        </li>
        <li>
          <img src="../../static/img/index/app_con1_home1.png" alt="">
          <h3>对啊课堂</h3>
          <span>东方教育集团官方留学机构</span>
        </li>
        <li>
          <img src="../../static/img/index/app_con1_home1.png" alt="">
          <h3>全爱工匠</h3>
          <span>手工DIY首饰</span>
        </li>
      </ul>
      <a href="#" class="more_case">查看更多案例></a>
    </div>

    <div class="app_con2_home">
      <h2 class="app_con2_home_h2">服务保障</h2>
      <h3 class="app_con2_home_h3">期良好的售后保障，让每个优秀的产品都能茁壮成长</h3>
      <div class="app_con2_home_banner">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img class="swiper-img" src="../../static/img/apply_for3/con4_li1.png" />
            <p class="font16">一年免费维护</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="../../static/img/apply_for3/con4_li2.png" />
            <p class="font16">7×12服务</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="../../static/img/apply_for3/con4_li3.png" />
            <p class="font16">8小时内快速回应</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="../../static/img/apply_for3/con4_li4.png" />
            <p class="font16">免费技术咨询</p>
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="../../static/img/apply_for3/con4_li5.png" />
            <p class="font16">系统免费教学</p>
          </swiper-slide>
          <div class="home-swiper-pagination "  slot="pagination"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
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

    <div class="app_home_footer">
      <ul class="clearfix">
        <li class="hover">
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
        <li>
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

  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import '../../static/css/swiper.min.css'
import '../../static/css/style.css'
import '../../static/css/index.css'
// import '../../static/js/swiper.min.js'
export default {
  name: 'carrousel',
  data () {
    return {
      visible: false,
      // swiper:"",
      swiperOption: {
        centeredSlides : true,
        loop: true,
        slidesPerView: 5,
        // autoplay: 2000,//可选选项，自动滑动
            //分页器
        pagination : '.home-swiper-pagination',
        paginationClickable :true,
        observer: true
        }
    }
  },
  components: {
      swiper,
      swiperSlide
  },
  methods: {
    open () {
      this.visible = true
    }
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
.home_demand .el-dialog__wrapper{
  width: 100%;
  height: 100%;
}
.home_demand .el-dialog__wrapper .el-dialog{
  width: 892px;
  border-radius: 10px;
}
.home_demand .el-dialog__wrapper .el-dialog .el-dialog__body{
  padding: 0;
}

</style>
