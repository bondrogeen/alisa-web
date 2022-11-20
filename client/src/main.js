import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import components from '@/components/global';

import '@/assets/css/norm.css';
import '@/assets/css/main.scss';

const pinia = createPinia();


const app = createApp(App);
components(app);
app.use(pinia);
app.use(router);
app.mount('#app');


