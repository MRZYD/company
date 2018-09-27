<template lang="html">
  <!-- 内容 -->
  <div class="section_cs">
    <div class="sec_ban app_consec">
      <img src="http://pd10b0don.bkt.clouddn.com/solu_banner.jpg" alt="">
    </div>

    <!-- 行业解决方案 -->
    <!-- zhangyinde  2018-08-28 -->
    <div class="sec_solu container app_consec">
      <h2>行业解决方案</h2>
      <ul class="clearfix">
        <li><router-link class="" to="/SoluFirst"><img src="http://pd10b0don.bkt.clouddn.com/sec_solu1.jpg" alt=""></router-link></li>
        <li><router-link class="" to="/SoluSecond"><img src="http://pd10b0don.bkt.clouddn.com/sec_solu2.jpg" alt=""></router-link></li>
        <li><router-link class="" to="/SoluThird"><img src="http://pd10b0don.bkt.clouddn.com/sec_solu3.jpg" alt=""></router-link></li>
        <li><router-link class="" to="/SoluFourth"><img src="http://pd10b0don.bkt.clouddn.com/sec_solu4.jpg" alt=""></router-link></li>
      </ul>
    </div>

    <div class="app_sec_solu">
      <ul class="clearfix">
        <li><router-link class="" to="/SoluFirst"><img src="http://pd10b0don.bkt.clouddn.com/app_sec_solu1.png" alt=""></router-link></li>
        <li><router-link class="" to="/SoluSecond"><img src="http://pd10b0don.bkt.clouddn.com/app_sec_solu2.png" alt=""></router-link></li>
        <li><router-link class="" to="/SoluThird"><img src="http://pd10b0don.bkt.clouddn.com/app_sec_solu3.png" alt=""></router-link></li>
        <li><router-link class="" to="/SoluFourth"><img src="http://pd10b0don.bkt.clouddn.com/app_sec_solu4.png" alt=""></router-link></li>
      </ul>
    </div>
    <router-link to="/AppTel">
      <button type="button" name="button" class="app_button"><img src="http://pd10b0don.bkt.clouddn.com/telphone.png" alt=""> </button>
    </router-link>
  </div>
</template>

<script>
import '../../static/css/style.css'
import '../../static/css/clicksecond.css'

export default {
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
