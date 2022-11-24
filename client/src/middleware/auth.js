import { serviceStore } from '@/store/';

export default ({ next }) => (serviceStore().isToken ? next() : next({ name: 'Login' }));
