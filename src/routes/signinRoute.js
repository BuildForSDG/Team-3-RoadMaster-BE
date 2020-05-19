import { Router } from 'express';
import signinController from '../controllers/signinController';

const router = new Router();

router.post('/', signinController);

export default router;
