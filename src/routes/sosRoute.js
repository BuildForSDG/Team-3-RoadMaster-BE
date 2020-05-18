import { Router } from 'express';

import sosController from '../controllers/sosController';

const router = new Router();

router.post('/', sosController.insert);

router.get('/:userId', sosController.getById);

export default router;
