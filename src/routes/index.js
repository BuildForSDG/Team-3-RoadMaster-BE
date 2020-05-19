import { Router } from 'express';
import signupRoute from './signupRoute';
import signinRoute from './signinRoute';
import jwtCheck from '../utility/jwtCheck';
import eyeWitnessRoute from './EyeWitnessRoute';
import userRoute from './UserRoute';
import sosRoute from './sosRoute';

import incidentreportRoute from './incidentReportRoute';

const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', jwtCheck, signinRoute);
router.use('/sos', sosRoute);
router.use('/report', eyeWitnessRoute);
router.use('/alluser', userRoute);
router.use('/incident', incidentreportRoute);

export default router;
