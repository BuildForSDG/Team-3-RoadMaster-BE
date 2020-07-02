import { Router } from 'express';
import multipart from 'connect-multiparty';

import EyeWitnessController from '../controllers/eyewitness.controller';

const router = new Router();
const multipartMiddleware = multipart();

// Route to post eye witness reports
router.post('/eyewitness', multipartMiddleware, EyeWitnessController.report);
router.get('/eyewitness', multipartMiddleware, EyeWitnessController.report);

// Route to get eye witness reports
// consider making this get report a general route to list all reports
// including reports from victims and eyewitness
// router.get('/eyeWitness', EyeWitnessController.list);

export default router;
