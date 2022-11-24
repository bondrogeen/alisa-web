import { serviceStore } from '@/store/';
export default ({ next }) => (serviceStore().isToken ? next({ name: 'Home' }) : next());
