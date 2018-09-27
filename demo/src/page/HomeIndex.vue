<template lang="html">
  <!-- 主要内容 -->
  <div class="content">

    <!--内容一-->
    <div class="con1">
      <img src="http://pd10b0don.bkt.clouddn.com/home_in_ban.jpg" class="con1_bg" />
      <img src="http://pd10b0don.bkt.clouddn.com/app_index_banner.png" class="con1_bg_app" alt="">
      <div class="character">
        <p class="font40">让每一个产品都富有生命力</p>
        <p class="font18">我们专注于微信小程序高端定制开发服务</p>
        <div class="home_demand">
          <el-button @click="open" class="el_btn font16"  data-toggle='modal' data-target='#show4'>提交需求</el-button>
          <el-dialog :visible.sync="visible" class="container2 ">

            <!--第一层-->
            <div v-show='step == 1' class="modal fade">
              <div class="modal-dialog">
                <p class="font24">定制开发微信小程序</p>
                <p class="font14 alert_referral">能根据企业的业务或您有好的想法都想通过小程序来实现</p>
                <div class="state">
                  <ul>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state1.png" class="alert2_photo" />
                      <p class="font14 black">应用领域</p>
                    </li>
                    <li>
                      <div class="alert2-circle"></div>
                    </li>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state2.png" class="alert2_photo" />
                      <p class="font14">选择功能模块</p>
                    </li>
                    <li>
                      <div class="alert2-circle"></div>
                    </li>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state3.png" class="alert2_photo" />
                      <p class="font14">提交需求</p>
                    </li>
                  </ul>
                </div>
                <div class="alert2_choice font16">
                  <p class="xu font12">无论走多远都希望您坚持自己的初衷，让更多的人能够使用到产品带来的愉悦，请在下面选择您要解决问题的行业重点。</p>
                  <ul>
                    <li :key='index' @click='select_type(index + 1)' v-for='(item, index) in typeData' :class="['alert2_choice_ul_li', type == index + 1 ? 'hover' : '']"><span :class="['alert2_choice_state' + (index + 1)]"></span>{{item}}</li>
                  </ul>
                </div>
                <div class="modal-footer">
                  <input type="button" class="fff font16" @click='next(1)' value="下一步" />
                </div>
              </div>
            </div>

            <!--第二层-->
            <div v-show='step == 2' class="modal fade alert2">
              <div class="modal-dialog">
                <p class="font24">定制开发微信小程序</p>
                <p class="font14 alert_referral">能根据企业的业务或您有好的想法都想通过小程序来实现</p>
                <div class="state">
                  <ul class="clearfix">
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state1.png" class="alert2_photo" />
                      <p class="font14 black">应用领域</p>
                    </li>
                    <li>
                      <div class="alert2-circle-hl"></div>
                    </li>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state2-hl.png" class="alert2_photo" />
                      <p class="font14 black">选择功能模块</p>
                    </li>
                    <li>
                      <div class="alert2-circle"></div>
                    </li>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state3.png" class="alert2_photo" />
                      <p class="font14">提交需求</p>
                    </li>
                  </ul>
                </div>
                <div class="alert2_choice font16">
                  <p class="xu font12">请勾选才【 {{typeData[type - 1]}} 】包含的功能模块，
                  </p>
                  <ul class="alert2_ul font16">

                    <li @click='select_item(i)' v-for='(item, i) in func_data' :class="['alert2_ul_li', item.is_select ? 'hover' : '']">{{item.text}}</li>

                  </ul>
                </div>
                <div class="modal-footer">
                  <input type="button" class="font16 up" @click='step = 1' value="上一步" id="up5" />
                  <input type="button" class="font16" @click='next(2)' data-toggle='modal' id="btn5" value="下一步" />
                </div>
              </div>
            </div>

            <!--第三层-->
            <div v-show='step == 3' class="modal fade alert3 ">
              <div class="modal-dialog">
                <p class="font24">定制开发微信小程序</p>
                <p class="font14 alert_referral">能根据企业的业务或您有好的想法都想通过小程序来实现</p>
                <div class="state">
                  <ul>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state1.png" class="alert2_photo" />
                      <p class="font14 black">应用领域</p>
                    </li>
                    <li>
                      <div class="alert2-circle-hl"></div>
                    </li>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state2-hl.png" class="alert2_photo" />
                      <p class="font14 black">选择功能模块</p>
                    </li>
                    <li>
                      <div class="alert2-circle-hl"></div>
                    </li>
                    <li>
                      <img src="http://pd10b0don.bkt.clouddn.com/alert2-state3-hl.png" class="alert2_photo" />
                      <p class="font14  black">提交需求</p>
                    </li>
                  </ul>
                </div>
                <div class="alert2_choice font16">
                  <p class="xu font12">您已经选择了小程序相关信息，请填写以下资料让我们快速与您联系!</p>
                  <div class="form">
                    <div class="font16">
                      <span>您的姓名：</span><input placeholder='请输入您的姓名' v-model='userInfo.name' type="type" class="input" />
                    </div>
                    <div class="font16">
                      <span>联系电话：</span><input placeholder='请输入您的联系电话' v-model='userInfo.tel' type="type" class="input" />
                    </div>
                    <div class="font16">
                      <span>简单描述：</span><textarea v-model='userInfo.describe' placeholder="请简单描述一下想在附近小程序展示的内容" name="describe" class="textarea textarea2"></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <input type="button" class="font16 up" @click='step = 2' value="上一步" id="up6" />
                  <input type="submit"  @click='submit_info(123)' class="button_success2 font16" value="提交需求" />
                </div>
              </div>
            </div>

          </el-dialog>
        </div>
        <router-link to="/AppDemFri">
          <button class="home_demand_app" type="button" name="button">提交需求</button>
        </router-link>
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
          <img src="http://pd10b0don.bkt.clouddn.com/one.png" class="font_family" />
        </div>
        <div class="container-img left">
          <div class="container_left ">
            <img src="http://pd10b0don.bkt.clouddn.com/XDF1-1.jpg" class="one"/>
          </div>
        </div>
        <div class="container_right left">
          <p class="font24">新东方留学小程序：</p>
          <p class="font14">新东方前途出国，提供留学信息查询、咨询、培训等服务；为顾问老师提供在线上传内容、课程及在线与咨询学院沟通的功能</p>
          <div class="function_con">
            <p class="font16 function">功能模块</p>
            <table border="1" cellspacing="" cellpadding="" bordercolor="#e6e6e6">
              <tr>
                <td>
                  <p class="font16">资讯查看：</p>
                  <p class="font12">重点资讯随时查看，不错过任何一个有利的机会</p>
                </td>
                <td>
                  <p class="font16">实时咨询：</p>
                  <p class="font12">实时在线咨询顾问老师，疑惑随时解答</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="font16">资讯发布：</p>
                  <p class="font12">顾问老师在线发布资讯，实时推送到小程序</p>
                </td>
                <td>
                  <p class="font16">身份切换：</p>
                  <p class="font12">可在学生、家长、从业者、发布者四个身份中任意切换，实现不同身份体验不同功能</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="technology_con">
            <p class="font16 technology">技术包含</p>
            <ul>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_php.png" />
                <p class="font12">PHP</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_mysql.png" />
                <p class="font12">MYSQL</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_logo.png" />
                <p class="font12">微信小程序</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_ios.png" />
                <p class="font12">IOS</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_android.png" />
                <p class="font12">ANDROID</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con4_content clearfix">
        <div class="fontf">
          <img src="http://pd10b0don.bkt.clouddn.com/two.png" class="font_family" />
        </div>
        <div class="container-img left">
          <div class="container_left ">
            <img src="http://pd10b0don.bkt.clouddn.com/APM_1.jpg" />
          </div>
        </div>
        <div class="container_right left">
          <p class="font24">APM Monaco商城小程序</p>
          <p class="font14">提供在线预览，在线选购，在线支付等商城基本功能，为后期迭代打下基础。</p>
          <div class="function_con">
            <p class="font16 function">功能模块</p>
            <table border="1" cellspacing="" cellpadding="" bordercolor="#e6e6e6">
              <tr>
                <td>
                  <p class="font16">商品分类：</p>
                  <p class="font12">商品按照不同分类展示，可后台自定义分类内容</p>
                </td>
                <td>
                  <p class="font16">商品下单：</p>
                  <p class="font12">在线下单购买，订单同步到系统后台</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="font16">物流查询：</p>
                  <p class="font12">调用第三方的物流查询接口，实时查询物流状态</p>
                </td>
                <td>
                  <p class="font16">订单管理：</p>
                  <p class="font12">查看历史订单，了解消费详情</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="technology_con">
            <p class="font16 technology">技术包含</p>
            <ul>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_php.png" />
                <p class="font12">PHP</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_mysql.png" />
                <p class="font12">MYSQL</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_logo.png" />
                <p class="font12">微信小程序</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_sketch.png" />
                <p class="font12">Sketch</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_ps.png" />
                <p class="font12">PhotpShop</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con4_content clearfix">
        <div class="fontf">
          <img src="http://pd10b0don.bkt.clouddn.com/three.png" class="font_family" />
        </div>
        <div class="container-img left">
          <div class="container_left ">
            <img src="http://pd10b0don.bkt.clouddn.com/DA_2.jpg" />
          </div>
        </div>
        <div class="container_right left">
          <p class="font24">对啊课堂小程序：</p>
          <p class="font14">在这里，重塑职业未来</p>
          <div class="function_con">
            <p class="font16 function">功能模块</p>
            <table border="1" cellspacing="" cellpadding="" bordercolor="#e6e6e6">
              <tr>
                <td>
                  <p class="font16">分类题库： </p>
                  <p class="font12">在这里，可以找到和你职业考试相关的题库内容</p>
                </td>
                <td>
                  <p class="font16">模拟考试：</p>
                  <p class="font12">完全模拟考场答题，在有限的时间里答题，并在交卷后给出考试成绩和答案解析</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p class="font16">错题库：</p>
                  <p class="font12">自动记录错题，每一道错题，都是成长的关键</p>
                </td>
                <td>
                  <p class="font16">视频课程： </p>
                  <p class="font12">在线的视频课程助你在职业考试道路上一臂之力</p>
                </td>
              </tr>
            </table>
          </div>
          <div class="technology_con">
            <p class="font16 technology">技术包含</p>
            <ul>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_php.png" />
                <p class="font12">PHP</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_mysql.png" />
                <p class="font12">MYSQL</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_logo.png" />
                <p class="font12">微信小程序</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_sketch.png" />
                <p class="font12">Sketch</p>
              </li>
              <li>
                <img src="http://pd10b0don.bkt.clouddn.com/index_ps.png" />
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
          <img src="http://pd10b0don.bkt.clouddn.com/app_con1_home1.png" alt="">
          <h3>新东方前途出国</h3>
          <span>东方教育集团官方留学机构</span>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/app_con1_home2.png" alt="">
          <h3>APM MONACO商城</h3>
          <span>来自摩纳哥的珠宝</span>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/app_con1_home3.png" alt="">
          <h3>对啊课堂</h3>
          <span>东方教育集团官方留学机构</span>
        </li>
        <li>
          <img src="http://pd10b0don.bkt.clouddn.com/app_con1_home4.png" alt="">
          <h3>全爱工匠</h3>
          <span>手工DIY首饰</span>
        </li>
      </ul>
      <router-link to="/AppCase" class="more_case">查看更多案例></router-link>
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
          <div class="home-swiper-pagination "  slot="pagination"></div>
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
        <el-input type='textarea' v-model="userInfo.describe" placeholder="请用一句话描述您的问题"></el-input type='textarea'>
        <el-button @click='submit_info()' class="app_con3_form_btn">提交</el-button>
      </el-form>
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

    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
    </router-link>

  </div>
</template>

<script src='../../static/js/HomeIndex.js'></script>

<style>
@import "../../static/css/style.css";
@import "../../static/css/index.css";

.home_demand .el-dialog__wrapper {
  width: 100%;
  height: 100%;
}
.home_demand .el-dialog__wrapper .el-dialog {
  width: 892px;
  border-radius: 10px;
}
.home_demand .el-dialog__wrapper .el-dialog .el-dialog__body {
  padding: 0;
}
</style>
