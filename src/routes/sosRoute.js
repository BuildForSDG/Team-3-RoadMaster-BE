import { Router } from 'express';

import sosController from '../controllers/sosController';

const router = new Router();

router.post('/', sosController.insert);

export default router;
