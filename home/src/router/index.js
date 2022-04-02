import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AppView from '../views/AppView.vue'
import TroubleLoggingIn from '../views/TroubleLoggingIn.vue'
import SettingsView from '../views/SettingsView.vue'
import NewUsernameView from '../views/NewUsernameView'
import NewEmailView from '../views/NewEmailView'
import NewPasswordView from '../views/NewPasswordView'
import WaterView from '../views/WaterView.vue'
import ElectricView from '../views/ElectricView.vue'
import NotificationView from '../views/NotificationView.vue'
import ProfileView from '../views/ProfileView.vue'
import ContactUs from '../views/ContactUs.vue'
import WaterGraph from '../views/WaterGraph.vue'
import ElectricGraph from '../views/ElectricGraph.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/app',
    name: 'app',
    component: AppView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/troubleLoggingIn',
    name: 'troubleLoggingIn',
    component: TroubleLoggingIn
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/newUsername',
    name: 'newUsername',
    component: NewUsernameView
  },
  {
    path: '/newEmail',
    name: 'newEmail',
    component: NewEmailView
  },
  {
    path: '/newPassword',
    name: 'newPassword',
    component: NewPasswordView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/water',
    name: 'water',
    component: WaterView
  },
  {
    path: '/electric',
    name: 'electric',
    component: ElectricView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
  {
    path: '/watergraph',
    name: 'watergraph',
    component: WaterGraph
  },
  {
    path: '/electricgraph',
    name: 'electricgraph',
    component: ElectricGraph
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
