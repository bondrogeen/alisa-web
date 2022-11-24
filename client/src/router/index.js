import { createRouter, createWebHistory } from 'vue-router';
import auth from '@/middleware/auth';
import login from '@/middleware/login';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView.vue'),
		meta: {
			middleware: [auth],
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/LoginView.vue'),
		meta: {
			middleware: [login],
		},
	},
	{
		path: '/player/:id',
		name: 'Player',
		component: () => import('../views/PlayerView.vue'),
		meta: {
			middleware: [auth],
		},
	},
];

function nextFactory(context, middleware, index) {
	const subsequentMiddleware = middleware[index];
	if (!subsequentMiddleware) return context.next;
	return (...parameters) => {
		context.next(...parameters);
		const nextMiddleware = nextFactory(context, middleware, index + 1);
		subsequentMiddleware({ ...context, next: nextMiddleware });
	};
}

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.middleware) {
		const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
		const context = { from, next, router, to };
		const nextMiddleware = nextFactory(context, middleware, 1);
		return middleware[0]({ ...context, next: nextMiddleware });
	}
	return next();
});

export default router;
