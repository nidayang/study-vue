import Vue from 'vue'
import App from './App.vue'
import {hunhe,hunhe2} from './mixin'

Vue.config.productionTip = false
//重复的东西抽取出来，做复用
Vue.mixin(hunhe);
Vue.mixin(hunhe2);

new Vue({
  render: h => h(App),
}).$mount('#app')
