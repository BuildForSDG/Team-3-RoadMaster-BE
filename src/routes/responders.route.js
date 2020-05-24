import { Router } from 'express';

import RespondersController from '../controllers/responders.controller';

const router = new Router();

router.post('/', RespondersController.insert);


export default router;