import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import LoginView from '../views/LoginView.vue'
import logoutView from '../views/logoutView.vue'
import ForgotPassword from '../components/ForgotPassword.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import singleProduct from '../views/singleProductView.vue'
import addProduct from '../components/addProduct.vue'
import userProfileView from '../views/userProfileView'
import deleteProduct from '../components/deleteProduct'
import deleteUser from '../components/deleteUser'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/Products',
    name: 'products',
    component:ProductsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: logoutView
  },
  {
    path: '/forgot',
    name: 'forgot',
    component:ForgotPassword
  },
  {
    path: '/Register',
    name: 'register',
    component:RegisterView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/Admin',
    name: 'admin',
    component:AdminView
  },
  {
    path: '/cart',
    name: 'cart',
    component:CartView
  },
  {
    path: '/singleProduct/:id',
    name: 'single',
    component:singleProduct
  },
  {
    path: '/userProf',
    name: 'userProf',
    component:userProfileView
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component:addProduct
  },
  {
    path: '/deleteProduct/:id',
    name: 'delete',
    component:deleteProduct
  },
  {
    path: '/deleteUser/:id',
    name: 'deleteUs',
    component:deleteUser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
