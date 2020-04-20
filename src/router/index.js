import Vue from "vue";
import Router from "vue-router";
import Personal from "../components/Personal.vue";
import Personal0 from "../components/Personal0.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Join from "../components/Join.vue";
import found from "../components/found.vue";
import joined from "../components/joined.vue";
import newtask from "../components/newtask.vue";
import myproject from "../components/myproject.vue";
import Project from "../components/Project.vue";
import AllPage from "../components/AllPage.vue";
import ToAccept from "../components/ToAccept.vue";
Vue.use(Router);
export default new Router({
  routes: [
    { path: "/", redirect: "/personal0" },
    /*personal0是一开始的最初页面，页面里面右上角是登陆注册*/
    {
      path: "/personal",
      name: "Personal",
      component: Personal
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/personal0",
      name: "Personal0",
      component: Personal0
    },
    {
      path: "/myproject",
      name: "myproject",
      component: myproject
    },
    {
      path: "/join",
      name: "Join",
      component: Join
    },
    {
      path: "/newtask",
      name: "newtask",
      component: newtask
    },
    {
      path: "/joined",
      name: "joined",
      component: joined
    },
    {
      path: "/found",
      name: "found",
      component: found
    },
    {
      path:"/project",
      name:"Project",
      component: Project
    },
    {
      path:"/allpage",
      name:"AllPage",
      component: AllPage
    }, 
    {
      path:"/toaccept",
      name:"ToAccept",
      component: ToAccept
    },       
  ]
  //mode: "history",
  //base: '//',
});