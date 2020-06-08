import { Router } from 'express';
import sosController from '../controllers/sosController';

const router = new Router();

router.post('/', sosController);

export default router;
