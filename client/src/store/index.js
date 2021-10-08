import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import logging from './modules/logging';
import socket from './modules/socket';
export default new Vuex.Store({
  modules: {
    logging,
    socket
  },
});
