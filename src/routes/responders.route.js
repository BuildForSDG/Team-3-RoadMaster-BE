import { Router } from 'express';

import respondersController from '../controllers/responders.controller';

const router = new Router();

router.post('/', respondersController);

export default router;
