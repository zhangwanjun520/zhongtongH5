// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Dropdown,Collapse } from 'element-ui';
import App from './App'
import router from './router'
import rem from './data/rem.js'
import animate from 'animate.css'
import 'vue2-animate/dist/vue2-animate.min.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Dropdown);
Vue.use(animate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
