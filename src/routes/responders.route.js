import { Router } from 'express';

import respondersController from '../controllers/responders.controller';

const router = new Router();

router.post('/', respondersController.register);
router.get('/all', respondersController.fetchAll);

export default router;
