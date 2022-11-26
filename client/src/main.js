import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { serviceStore } from '@/store/';

import App from './App.vue';
import router from './router';
import components from '@/components/global';
import directives from '@/utils/directives';

import '@/assets/css/norm.css';
import '@/assets/scss/main.scss';

const pinia = createPinia();
const app = createApp(App);

directives.forEach((directive) => app.directive(directive.name, directive));
components(app);

(async () => {
	app.use(pinia);
	const store = serviceStore();
	await store.onState();
	app.use(router);
	app.mount('#app');
})();
