import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import("@/views/index")
    },
    {
      path: "/sidebar",
      name: "Sidebar",
      component: () => import("@/components/Sidebar")
    }
  ],
  mode: "history" // 去掉路由地址的"#""
});
