import Vue from 'vue';
import App from './App.vue';

import 'common-lib'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
