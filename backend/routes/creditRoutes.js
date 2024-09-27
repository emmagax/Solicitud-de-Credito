import { Router } from 'express';
const router = Router();
import { submitRequest, simulateRequests } from '../controllers/creditController';

router.post('/credit-request', submitRequest);
router.post('/simulate-requests', simulateRequests);

export default router;
