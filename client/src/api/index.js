import axios from 'axios';
import Service from './Service';

const api = axios.create({ baseURL: '/api/v1' });

export default {
	service: Service(api),
};
