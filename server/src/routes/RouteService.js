import { Router } from 'express';
import { service } from '../controllers/index';

const router = Router();

router.post('/token', service.token);
router.post('/connection', service.connection);
router.post('/init', service.init);
router.get('/scan', service.scan);
router.get('/state', service.state);

export default router;
