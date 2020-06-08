import { Router } from 'express';
import respondersController from '../controllers/responders.controller';

const router = new Router();

router.post('/', respondersController.register);
router.post('/signin', respondersController.signin);

export default router;
