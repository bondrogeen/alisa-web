import { socketStore } from '@/store/';

export default function auth({ next, router }) {
	const store = socketStore();

	console.log(router);
	console.log(store.isToken);
	// if (!store.isToken) {
	// 	return router.push('/login');
	// }
	return next();
}
