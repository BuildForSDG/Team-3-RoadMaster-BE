import { Router } from 'express';

import IncidentReportController from '../controllers/incidentReportController';

const router = new Router();

router.post('/report', IncidentReportController.insert);

export default router;