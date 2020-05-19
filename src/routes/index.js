import { Router } from 'express';

import sosRoute from './sosRoute';

import eyeWitnessRoute from './EyeWitnessRoute';

import userRoute from './UserRoute';

import incidentreportRoute from './incidentReportRoute';

const router = Router();

router.use('/sos', sosRoute);
router.use('/report', eyeWitnessRoute);
router.use('/alluser', userRoute);
router.use('/incident', incidentreportRoute);

export default router;
