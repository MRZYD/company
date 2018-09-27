import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/page/HomeIndex'
import ClickFirst from '@/page/ClickFirst'
import ClickSecond from '@/page/ClickSecond'
import ClickThird from '@/page/ClickThird'
import ClickFifth from '@/page/ClickFifth'
import ProdectList from '@/page/ProdectList'
import ProdectSec from '@/page/ProdectSec'
import PandaShop from '@/page/PandaShop'
import PandaFood from '@/page/PandaFood'
import AboutUs from '@/page/AboutUs'
import SoluFirst from '@/page/SoluFirst'
import SoluSecond from '@/page/SoluSecond'
import SoluThird from '@/page/SoluThird'
import SoluFourth from '@/page/SoluFourth'

import AppSolution from '@/page/AppSolution'
import AppMould from '@/page/AppMould'
import AppCase from '@/page/AppCase'
import AppMine from '@/page/AppMine'
import AppDemFri from '@/page/AppDemFri'
import AppTel from '@/page/AppTel'

import ProdectSecQM from '@/page/ProdectSecQM'
import ProdectSecHSG from '@/page/ProdectSecHSG'
import ProdectSecXDF from '@/page/ProdectSecXDF'
import ProdectSecHD from '@/page/ProdectSecHD'
import ProdectSecYH from '@/page/ProdectSecYH'
import ProdectSecRB from '@/page/ProdectSecRB'
import ProdectSecBL from '@/page/ProdectSecBL'
import ProdectSecTL from '@/page/ProdectSecTL'
import ProdectSecCDY from '@/page/ProdectSecCDY'
import ProdectSecTSG from '@/page/ProdectSecTSG'
import ProdectSecXFZ from '@/page/ProdectSecXFZ'
import ProdectSecBH from '@/page/ProdectSecBH'
import ProdectSecPX from '@/page/ProdectSecPX'
import ProdectSecHMN from '@/page/ProdectSecHMN'
import ProdectSecML from '@/page/ProdectSecML'
import ProdectSecJD from '@/page/ProdectSecJD'
import ProdectSecNJ from '@/page/ProdectSecNJ'
import ProdectSecAPM from '@/page/ProdectSecAPM'
import ProdectSecTDD from '@/page/ProdectSecTDD'
import ProdectSecRY from '@/page/ProdectSecRY'
import ProdectSecDA from '@/page/ProdectSecDA'
Vue.use(Router)

export default new Router({
  // 锚点定位
  scrollBehavior(to) {
    if (to.hash) {
      var a = document.getElementById("aaaaa").offsetHeight;
      var go1 = document.getElementById("go1").offsetHeight;
      var go2 = document.getElementById("go2").offsetHeight;
      var go3 = document.getElementById("go3").offsetHeight;

      if (to.hash == '#go1') {
        return {
          x: 0,
          y: a
        }
      }

      if (to.hash == '#go2') {
        return {
          x: 0,
          y: a + go1
        }
      }

      if (to.hash == '#go3') {
        return {
          x: 0,
          y: a + go1 + go2
        }
      }

      if (to.hash == '#go4') {
        return {
          x: 0,
          y: a + go1 + go2 + go3
        }
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    },
    {
      path: '/ClickFirst',
      name: 'ClickFirst',
      component: ClickFirst
    },
    {
      path: '/ClickSecond',
      name: 'ClickSecond',
      component: ClickSecond
    },
    {
      path: '/ClickThird',
      name: 'ClickThird',
      component: ClickThird
    },
    {
      path: '/ClickFifth',
      name: 'ClickFifth',
      component: ClickFifth
    },
    {
      path: '/ProdectList',
      name: 'ProdectList',
      component: ProdectList
    },
    {
      path: '/ProdectSec',
      name: 'ProdectSec',
      component: ProdectSec
    },
    {
      path: '/PandaShop',
      name: 'PandaShop',
      component: PandaShop
    },
    {
      path: '/PandaFood',
      name: 'PandaFood',
      component: PandaFood
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/SoluFirst',
      name: 'SoluFirst',
      component: SoluFirst
    },
    {
      path: '/SoluSecond',
      name: 'SoluSecond',
      component: SoluSecond
    },
    {
      path: '/SoluThird',
      name: 'SoluThird',
      component: SoluThird
    },
    {
      path: '/SoluFourth',
      name: 'SoluFourth',
      component: SoluFourth
    },
    {
      path: '/AppSolution',
      name: 'AppSolution',
      component: AppSolution
    },
    {
      path: '/AppMould',
      name: 'AppMould',
      component: AppMould
    },
    {
      path: '/AppCase',
      name: 'AppCase',
      component: AppCase
    },
    {
      path: '/AppMine',
      name: 'AppMine',
      component: AppMine
    },
    {
      path: '/AppDemFri',
      name: 'AppDemFri',
      component: AppDemFri
    },
    {
      path: '/AppTel',
      name: 'AppTel',
      component: AppTel
    },
    {
      path: '/ProdectSecQM',
      name: 'ProdectSecQM',
      component: ProdectSecQM
    },
    {
      path: '/ProdectSecHSG',
      name: 'ProdectSecHSG',
      component: ProdectSecHSG
    },
    {
      path: '/ProdectSecXDF',
      name: 'ProdectSecXDF',
      component: ProdectSecXDF
    },
    {
      path: '/ProdectSecHD',
      name: 'ProdectSecHD',
      component: ProdectSecHD
    },
    {
      path: '/ProdectSecYH',
      name: 'ProdectSecYH',
      component: ProdectSecYH
    },
    {
      path: '/ProdectSecRB',
      name: 'ProdectSecRB',
      component: ProdectSecRB
    },
    {
      path: '/ProdectSecBL',
      name: 'ProdectSecBL',
      component: ProdectSecBL
    },
    {
      path: '/ProdectSecTL',
      name: 'ProdectSecTL',
      component: ProdectSecTL
    },
    {
      path: '/ProdectSecCDY',
      name: 'ProdectSecCDY',
      component: ProdectSecCDY
    },
    {
      path: '/ProdectSecTSG',
      name: 'ProdectSecTSG',
      component: ProdectSecTSG
    },
    {
      path: '/ProdectSecXFZ',
      name: 'ProdectSecXFZ',
      component: ProdectSecXFZ
    },
    {
      path: '/ProdectSecBH',
      name: 'ProdectSecBH',
      component: ProdectSecBH
    },
    {
      path: '/ProdectSecPX',
      name: 'ProdectSecPX',
      component: ProdectSecPX
    },
    {
      path: '/ProdectSecHMN',
      name: 'ProdectSecHMN',
      component: ProdectSecHMN
    },
    {
      path: '/ProdectSecML',
      name: 'ProdectSecML',
      component: ProdectSecML
    },
    {
      path: '/ProdectSecJD',
      name: 'ProdectSecJD',
      component: ProdectSecJD
    },
    {
      path: '/ProdectSecNJ',
      name: 'ProdectSecNJ',
      component: ProdectSecNJ
    },
    {
      path: '/ProdectSecAPM',
      name: 'ProdectSecAPM',
      component: ProdectSecAPM
    },
    {
      path: '/ProdectSecTDD',
      name: 'ProdectSecTDD',
      component: ProdectSecTDD
    },
    {
      path: '/ProdectSecRY',
      name: 'ProdectSecRY',
      component: ProdectSecRY
    },
    {
      path: '/ProdectSecDA',
      name: 'ProdectSecDA',
      component: ProdectSecDA
    }
  ]
})
