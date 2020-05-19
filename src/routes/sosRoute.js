import { Router } from 'express';

import sosController from '../controllers/sosController';

const router = new Router();

router.post('/', sosController.insert);

router.get('/:userId', sosController.getById);

router.get('/', sosController.list);

export default router;
