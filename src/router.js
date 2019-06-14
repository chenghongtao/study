import Vue from "vue";
import Router from "vue-router";

//引入自定义组件
import a from './views/a.vue'
import b from './views/b.vue'
import user from './components/user.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/a',
      component:a
    },
    {
      path:'/b',
      component:b
    },
    {
      path:'/user/:id',
      component:user
    }
  ]
});
