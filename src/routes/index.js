import { Router } from 'express';
import sosRoute from './sosRoute';
import eyeWitnessRoute from './EyeWitnessRoute';

const router = Router();

router.use('/sos', sosRoute);
router.use('/report', eyeWitnessRoute);

export default router;
