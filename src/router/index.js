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
    },
    {
      path: "/highlight",
      name: "Highlight",
      component: () => import("@/components/Highlight")
    }
  ],
  mode: "history" // 去掉路由地址的"#""
});
