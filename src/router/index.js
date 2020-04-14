import Vue from 'vue'
import Router from 'vue-router'
import Personal from '../components/Personal.vue'
import Personal0 from '../components/Personal0.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue' 
Vue.use(Router) 
export default new Router({
  routes: [
    {path: '/',redirect:'/personal0'},
    /*personal0是一开始的最初页面，页面里面右上角是登陆注册*/
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
    },
    {
      path: '/personal0',
      name: 'Personal0',
      component: Personal0
    }
  ],
  //mode: "history",
  //base: '//',
})

