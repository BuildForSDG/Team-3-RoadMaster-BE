import { Router } from 'express';
import signupController from '../controllers/signupController';

const router = new Router();

router.post('/', signupController);

export default router;
