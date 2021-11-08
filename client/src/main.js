import Vue from "vue";
import VueSocketIO from 'vue-socket.io'
import { io } from 'socket.io-client'
import store from "./store";
import router from "./router";
import App from "./App.vue";

import '@/assets/css/norm.css'
import '@/assets/css/main.scss'

console.log(window.location.href)

Vue.use(new VueSocketIO({
  debug: false,
  connection: io(window.location.href),
  vuex: {
    store,
    actionPrefix: "socket_",
    // mutationPrefix: "socket."
  }
})
);


import pkg from '../package.json'
Vue.prototype.$config = {
  isDev: process.env.NODE_ENV === 'development',
  version: pkg.version
}

Vue.config.productionTip = false;

// import global components
import components from '@/components/global'
components.forEach(component => Vue.component(component.name, component))
// import global directives
import directives from './utils/directives'
directives.forEach(directive => Vue.directive(directive.name, directive))

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
