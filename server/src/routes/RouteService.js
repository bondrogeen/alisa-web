import { Router } from 'express';
import { service } from '../controllers/index';

const router = Router();

router.post('/token', service.token);
router.post('/conection', service.conection);
router.get('/scan', service.scan);
router.get('/init', service.init);

export default router;
