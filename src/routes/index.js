import { Router } from 'express';

import sosRoute from './sosRoute';

import reportRoute from './reportRoute';

import routesConfig from './route.config';

const EyewitnessController = require('../controllers/eyewitness.controller');

const router = Router();

router.post('/sos', sosRoute);
router.post('/eyewitnessReport', reportRoute);
router.post('/report', EyewitnessController.insert);
router.get('/reports', EyewitnessController.list);

export default router;
