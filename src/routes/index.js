import { Router } from 'express';
import sosRoute from './sosRoute';
import eyeWitnessRoute from './EyeWitnessRoute';
import signupRoute from './signupRoute';

const router = Router();

router.use('/sos', sosRoute);
router.use('/report', eyeWitnessRoute);
router.use('/signup', signupRoute);

export default router;
