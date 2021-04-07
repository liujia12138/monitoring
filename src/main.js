import Vue from "vue";
import App from "./App.vue";
import router from './router';
import ElementUI from 'element-ui';
import Axios from 'axios';
import i18n from '@/i18n';
import store from '@/store';
import './permission'
import '@/assets/icons';


import 'element-ui/lib/theme-chalk/index.css'
import './assets/scss/index.scss';
import mock from '@/mock'

// if(process.env.NODE_ENV === 'dev'){
mock();
// }

Vue.use(ElementUI, {
  size: 'default',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios
// Vue.use(ElementUI)
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");