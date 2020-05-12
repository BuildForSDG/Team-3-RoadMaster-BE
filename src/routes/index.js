import { Router } from 'express';
import sosRoute from './sosRoute';
import reportRoute from './reportRoute';

const router = Router();

router.post('/sos', sosRoute);
router.post('/report', reportRoute);

export default router;
