import { Router } from 'express';
import sosRoute from './sosRoute';
import eyeWitnessRoute from './EyeWitnessRoute';
import userRoute from './UserRoute';

const router = Router();

router.use('/sos', sosRoute);
router.use('/report', eyeWitnessRoute);
router.use('/alluser' , userRoute);

export default router;
