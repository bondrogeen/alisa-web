// function getCookie (name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
// }

export default function auth({ next, router }) {
	console.log(router);
	// console.log(getCookie('connecting'));
	// if (getCookie('connecting') !== 'true') {
	//     return router.push('/login');
	// }
	return next();
}
