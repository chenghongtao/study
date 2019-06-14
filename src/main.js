import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios'
import VueAxios from 'vue-axios'

import gobal_ from './assets/gobal/gobal.vue'
import gobalMethod from './assets/gobal/gobalMetod.vue';
import methodandvar from './assets/gobal/methodAndVar.vue';

Vue.prototype.methodandvar=methodandvar;

Vue.use(VueAxios, axios);

Vue.use(gobalMethod);

Vue.config.productionTip = false;

Vue.prototype.GLOBAL = gobal_;


Vue.prototype.changeDate=function(data){
    return data+1;
}

import filters from './assets/filters/filters';

//循环注册

for(let key in filters){
   Vue.filter(key,filters[key]);
}


Vue.filter('numberFormat',function(num){
    return num*100;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
