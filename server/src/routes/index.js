import { Router } from 'express';
import service from './RouteService';

const router = new Router();
router.use('/service', service);

export default router;
