import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/components/home'
import homeTwo from '@/components/homeTwo'
import message from '@/components/message'
import privacy from '@/components/privacy'
import ICPP from '@/components/ICPP'
import framework from '@/components/framework'
import safepolicy from '@/components/safepolicy'
import VideoMessage from '../components/videoMessage'
import Meeting from '../components/meeting'
import Smart from '../components/smart'
import About from '../components/about'
import Intelligent from '../components/intelligent'


Vue.use(Router)

export default new Router({
  //  mode: 'history',
  //  base:'/dist',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path:'/',
      redirect:'/homePage'
    },
    {
      path: '/homePage',
      name: 'hometwo',
      component: homeTwo
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    },
    {
      path: '/msg',
      name: 'message',
      component: message
    },
    {
      path: '/IPCC',
      name: 'ICPP',
      component: ICPP
    },
    {
      path: '/framework',
      name: 'framework',
      component: framework
    },
    {
      path: '/safepolicy',
      name: 'safepolicy',
      component: safepolicy
    },
    {
      path: '/videomessage',
      name: 'videomessage',
      component: VideoMessage
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: Meeting
    },
    {
      path: '/smart',
      name: 'smart',
      component: Smart
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/intelligent',
      name: 'intelligent',
      component: Intelligent
    }
  ]
})
//      通知加载完首页
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
} else {
  // window.location.href = "http://news.baidu.com/";
}
