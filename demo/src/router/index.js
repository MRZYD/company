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
import AppDemSec from '@/page/AppDemSec'
import AppDemTrd from '@/page/AppDemTrd'
import AppTel from '@/page/AppTel'
Vue.use(Router)

export default new Router({
  routes: [
    {
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
      path: '/AppDemSec',
      name: 'AppDemSec',
      component: AppDemSec
    },
    {
      path: '/AppDemTrd',
      name: 'AppDemTrd',
      component: AppDemTrd
    },

    {
      path: '/AppTel',
      name: 'AppTel',
      component: AppTel
    }
  ]
})
