import {
  swiper,
  swiperSlide
} from "vue-awesome-swiper";
export default {
  name: "carrousel",
  data() {
    return {
      visible: false,
      // swiper:"",
      swiperOption: {
        centeredSlides: true,
        loop: true,
        slidesPerView: 5,
        // autoplay: 2000,//可选选项，自动滑动
        //分页器
        pagination: ".home-swiper-pagination",
        paginationClickable: true,
        observer: true
      },

      /**
       * ws 
       */
      type: 0, //类型
      step: 0, //步骤

      // 用户信息
      userInfo: {
        name: '',
        tel: '',
        describe: ''
      },

      // 应用领域数据
      typeData: [
        '餐饮行业',
        '旅游出行',
        '工具应用',
        '电商购物',
        '社交通讯',
        '教育行业',
        '信息资讯',
        '投资理财',
        '健康医疗',
        '生活服务',
        '媒介中介',
        '文化娱乐',
      ],

      // 功能模块数组
      func_data: []

    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    /**
     * 选择类型
     */
    select_type(type) {
      var that = this;
      that.type = type;
    },

    /**
     * 提交用户信息
     */
    submit_info(e) {
      var that = this;

      if (!that.userInfo.tel) {
        if (e) {
          that.$message.warning('请填写您的电话号码')
        } else {
          that.$notify({
            title: '提示',
            message: '请填写您的电话号码',
          });
        }
        return;
      }

      // 手机号验证
      var reg = /^1\d{10}$/;
      // 座机号
      var reg2 = /([0-9]{3,4}-)?[0-9]{7,8}/;
      if (!reg.test(that.userInfo.tel) && !reg2.test(that.userInfo.tel)) {
        if (e) {
          that.$message.warning('请正确填写您的电话号码')
        } else {
          that.$notify({
            title: '提示',
            message: '请正确填写您的电话号码',
          });
        }
        return;
      }

      if (e) {
        var query_data = {};
        query_data.appfield = that.typeData[that.type];

        var arr = [];
        // 遍历功能模块数组
        that.func_data.forEach((ele, i) => {
          if (ele.is_select) {
            arr.push(that.func_data[i].text)
          }
        })
        query_data.module = arr;
        query_data.name = that.userInfo.name;
        query_data.number = that.userInfo.tel;
        query_data.description = that.userInfo.describe;

        that.$http.post(that.adminApi.api_url + '/cx/Index/index_submission', query_data, {
          emulateJSON: true
        }).then(res => {
          var data = res.body;
          if (data) {
            that.$message.success('提交成功,我们会尽快联系您');

            that.userInfo.name = '';
            that.userInfo.tel = '';
            that.userInfo.describe = '';

            that.visible = false;
          }
        })
      } else {
        var formData = {};
        formData.name = that.userInfo.name;
        formData.number = that.userInfo.tel;
        formData.description = that.userInfo.describe;

        that.$http
          .post(that.adminApi.api_url + "/cx/Index/index_fast", formData, {
            emulateJSON: true
          }).finally(res => {

            that.userInfo.name = '';
            that.userInfo.tel = '';
            that.userInfo.describe = '';

            that.$notify({
              title: '提示',
              message: '提交成功,我们会尽快联系您',
              type: 'success'
            });
          });
      }
    },

    /**
     * 下一步
     */
    next(e) {
      var that = this;

      if (e == 1) {
        if (!that.type) return that.$message.warning('请您选择应用领域');

        that.$http.get(that.adminApi.api_url + '/cx/Index/index_class', {
          params: {
            pid: that.type
          }
        }, {
          emulateJSON: true
        }).then(res => {
          var data = res.body;
          if (data) {

            var arr = [];
            data.forEach(ele => {
              arr.push({
                is_select: false,
                text: ele
              })
            })

            that.func_data = arr;
          }
        }, res => {
          that.$message.error('请求错误');
        })

        // 显示第二步
        that.step = 2;
      } else {

        // 功能模块多选数
        var num = 0;
        that.func_data.forEach(ele => {
          if (ele.is_select) {
            num++;
          }
        })

        if (!num) return that.$message.warning('请选择您想咨询的功能模块');

        // 显示第三页
        that.step = 3;
      }
    },

    /**
     * 选择功能模块
     */
    select_item(e) {
      var that = this;

      that.func_data[e].is_select = !that.func_data[e].is_select
    },

    open() {
      this.visible = true;
      this.step = 1;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    //可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 0, false);
  }
};
