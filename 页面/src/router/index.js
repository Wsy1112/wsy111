import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [

      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/index.vue')
      },
      {
        path: '/jm',
        name: 'Jm',
        component: () => import('../views/jm.vue')
      },
      {
        path: '/xx',
        name: 'Xx',
        component: () => import('../views/xx.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/jmda',
    name: 'jmda',
    component: () => import('../views/jmda.vue')
  },
  {
    path: '/qygl',
    name: 'Qygl',
    component: () => import('../views/qygl.vue')
  },
  {
    path: '/fwgl',
    name: 'Fwgl',
    component: () => import('../views/fwgl.vue')
  },
  {
    path: '/smqy',
    name: 'Smqy',
    component: () => import('../views/smqy.vue')
  },
  {
    path: '/dclqysq',
    name: 'Dclqysq',
    component: () => import('../views/dclqysq.vue')
  },
  {
    path: '/wqyjm',
    name: 'Wqyjm',
    component: () => import('../views/wqyjm.vue')
  },
  {
    path: '/biaoqian',
    name: 'Biaoqian',
    component: () => import('../views/biaoqian.vue')
  },
  {
    path: '/qfxx',
    name: 'Qfxx',
    component: () => import('../views/qfxx.vue')
  },
  {
    path: '/jmxq',
    name: 'Jmxq',
    component: () => import('../views/jmxq.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router