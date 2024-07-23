import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { moduleA } from './module-a';
import { moduleB } from './module-b';

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB
    }
});