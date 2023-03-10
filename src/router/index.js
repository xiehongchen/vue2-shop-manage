import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName: "login_home_welome" */ 'components/login/Login')
const Home = () => import(/* webpackChunkName: "login_home_welome" */ 'components/home/Home')
const Welcome = () => import(/* webpackChunkName: "login_home_welome" */ 'components/home/welcome/Welcome')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ 'components/home/users/Users')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ 'components/home/power/rights/Rights')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ 'components/home/power/roles/Roles')

const Cate = () => import(/* webpackChunkName: "Cate_Params" */ 'components/home/goods/cate/Cate')
const Params = () => import(/* webpackChunkName: "Cate_Params" */ 'components/home/goods/params/Params')

const GoodsList = () => import(/* webpackChunkName: "GoodsList_Add" */ 'components/home/goods/list/List')
const Add = () => import(/* webpackChunkName: "GoodsList_Add" */ 'components/home/goods/list/children/Add')

const Order = () => import(/* webpackChunkName: "Order_Report" */ 'components/home/order/Order')
const Report = () => import(/* webpackChunkName: "Order_Report" */ 'components/home/report/Report')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      },
      {
        path: '/rights',
        component: Rights
      },
      {
        path: '/roles',
        component: Roles
      },
      {
        path: '/categories',
        component: Cate
      },
      {
        path: '/params',
        component: Params
      },
      {
        path: '/goods',
        component: GoodsList
      },
      {
        path: '/goods/add',
        component: Add
      },
      {
        path: '/orders',
        component: Order
      },
      {
        path: '/reports',
        component: Report
      }
    ]
  }
]
const router = new VueRouter({
  // ????????????
  mode: 'history',
  routes
})

// ????????????????????????
router.beforeEach((to, from, next) => {
  // to ????????????????????????
  // from ?????????????????????????????????
  // next ???????????????,????????????
  // next() ?????? next('/login') ????????????,next(false)???????????????
  if (to.path === '/login') return next()
  // ??????token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
