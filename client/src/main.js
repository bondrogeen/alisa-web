import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import components from '@/components/global';
import directives from '@/utils/directives';

import '@/assets/css/norm.css';
import '@/assets/css/main.scss';

const pinia = createPinia();

const app = createApp(App);

directives.forEach((directive) => app.directive(directive.name, directive));
components(app);
app.use(pinia);
app.use(router);
app.mount('#app');
