// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "element-ui/lib/theme-chalk/index.css";
import ElementUI from '../node_modules/element-ui';
import 'font-awesome/css/font-awesome.css';
import Mock from "mockjs";
import Axios from "axios";

import common from "../static/js/common";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Mock);
// Vue.use(Axios);
Vue.prototype.$http = Axios;
Vue.prototype.common = common;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
