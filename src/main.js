/* eslint-disable no-new */
import Vue from 'vue';
import VueSemantic from 'semantic-ui-vue';

import App from './App.vue';

Vue.use(VueSemantic);

new Vue({
  el: '#app',
  render: h => h(App),
});
