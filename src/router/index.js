import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/dashboard',
    name: 'Dashboard',
    hidden: false
  },
  {
    path: '/dashboard',
    component: Layout,
    name: '首页',
    children: [
      {
        path: 'dashboard',
        name: '首页',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/user',
    name: '用户',
    redirct: '/user/info',
    component: Layout,
    hidden: false,
    meta: { title: '用户' },
    children: [
      {
        path: 'info',
        name: '个人信息',
        component: () => import('@/views/user/info'),
        meta: { title: '个人信息', icon: 'user' }
      }
    ]
  },
  {
    path: '/teach',
    name: '编辑记录',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'record/edit',
        name: '编辑记录',
        meta: { title: '编辑记录' },
        component: () => import('@/views/teach/record/edit')
      }
    ]
  },
  {
    path: '/teach',
    name: '记录详情',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'record/detail',
        name: '记录详情',
        meta: { title: '记录详情' },
        component: () => import('@/views/teach/record/detail')
      }
    ]
  },
  {
    path: '/workStatistics',
    name: 'workStatistics',
    component: Layout,
    children: [
      {
        path: 'statistics',
        name: 'statistics',
        meta: { title: '工作量统计', icon: 'chart' },
        component: () => import('@/views/workStatistics/index')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/teacher',
    component: Layout,
    name: '教师管理',
    meta: { title: '教师管理', icon: 'peoples', needPermis: ['/teacher/list'] },
    children: [
      {
        path: 'list',
        name: '教师列表',
        component: () => import('@/views/teacher/list'),
        meta: { title: '教师列表', icon: 'peoples', needPermis: ['/teacher/list'] }
      }
    ]
  },
  {
    path: '/teach',
    name: '教学管理',
    component: Layout,
    meta: { title: '教学管理', icon: 'example', needPermis: ['/teach'] },
    children: [
      {
        path: '/task',
        name: '教学任务',
        meta: { title: '教学任务', needPermis: ['/teach/task'] },
        component: () => import('@/views/teach/task/index'),
        children: [
          { path: 'create', component: () => import('@/views/teach/task/create'), name: 'taskCreate', meta: { title: '创建任务', needPermis: ['/teach/task/create'] }},
          { path: 'list', component: () => import('@/views/teach/task/list'), name: 'taskList', meta: { title: '任务列表', needPermis: ['/teach/task/list'] }}
        ]
      },
      {
        path: 'result',
        name: '教学成果',
        meta: { title: '教学成果', needPermis: ['/teach/result'] },
        component: () => import('@/views/teach/result/list')
      },
      {
        path: 'record',
        name: '教学记录',
        component: () => import('@/views/teach/record/list'),
        meta: { title: '教学记录', needPermis: ['/teach/record'] }
      }
    ]
  },
  {
    path: '/research',
    name: '科研管理',
    meta: { title: '科研管理', icon: 'excel', needPermis: ['/research'] },
    component: Layout,
    children: [
      {
        path: 'resource',
        name: '科研资讯',
        component: () => import('@/views/research/resource'),
        meta: { title: '科研资讯', needPermis: ['/research/resource'] }
      },
      {
        path: 'result',
        name: '科研成果',
        component: () => import('@/views/research/result'),
        meta: { title: '科研成果', needPermis: ['/research/result'] }
      },
      {
        path: 'keyword',
        name: '科研关键字',
        meta: { title: '科研关键字', needPermis: ['/research/keyword'] },
        component: () => import('@/views/research/keyword')
      }
    ]
  }
]

