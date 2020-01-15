import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'typeface-work-sans';
import vuetify from './plugins/vuetify';
import './styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount('#app');
