import { Router } from 'express';
import signupRoute from './signupRoute';
import signinRoute from './signinRoute';
// import jwtCheck from '../utility/jwtCheck';
import eyeWitnessRoute from './EyeWitnessRoute';
import userRoute from './UserRoute';
import sosRoute from './sosRoute';
import responderRoute from './responders.route';

import incidentreportRoute from './incidentReportRoute';

const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', signinRoute);
router.use('/sos', sosRoute);
router.use('/report', eyeWitnessRoute);
router.use('/alluser', userRoute);
router.use('/incident', incidentreportRoute);
router.use('/responder', responderRoute);

export default router;
