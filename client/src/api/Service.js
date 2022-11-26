const resource = 'service';

export default (axios) => ({
	state: (data) => axios.get(`/${resource}/state`, data),
	init: (data) => axios.post(`/${resource}/init`, data),
	token: (data) => axios.post(`/${resource}/token`, data),
	connection: (data) => axios.post(`/${resource}/connection`, data),
});
