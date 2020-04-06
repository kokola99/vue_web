import Vue from 'vue'
import Router from 'vue-router'
import Personal from '../components/Personal.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue' 
Vue.use(Router) 
export default new Router({
  routes: [
    {path: '/',redirect:'/login'},
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  //mode: "history",
  //base: '//',
})

