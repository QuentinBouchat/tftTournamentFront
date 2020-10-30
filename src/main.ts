import Vue from 'vue';
import { Api, apiInstance } from './api/api';
import App from './App.vue';
import router from './router';

import '@/utils/filters';

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api;
  }
}


Vue.config.productionTip = false;
Vue.prototype.$api = apiInstance;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
