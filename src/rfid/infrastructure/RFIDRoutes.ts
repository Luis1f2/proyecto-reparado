import { Router } from 'express';
import { getLatestRFID } from './controllers/GetLatesRFIDController';
import { saveRFID } from './controllers/SaveRFIDController';

const router = Router();

router.post('/register', saveRFID);
router.get('/latest', getLatestRFID);

export default router;
