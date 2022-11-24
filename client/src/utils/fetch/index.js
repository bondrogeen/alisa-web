const api = '/v1/api';

export default {
	get: (path, body) =>
		fetch(`${api}${path}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}).then((res) => res.json()),
	post: (path, body) =>
		fetch(`${api}${path}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}).then((res) => res.json()),
};
