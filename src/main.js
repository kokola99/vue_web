import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icon/iconfont.css";
import "./assets/chat/iconfont.css";

Vue.use(ElementUI);
//全局配置
axios.defaults.baseURL = "https://118.178.190.4/secondproject";
Vue.prototype.$http = axios;
Vue.config.productionTip = false; //防止在生产环境中产生过多的log输出

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  components: { App },
  template: "<App/>"
});
