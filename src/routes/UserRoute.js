import { Router } from 'express';

import UsersController from '../controllers/users.controller';

const router = new Router();

router.post('/user', UsersController.insert);
router.get('/users', UsersController.list);
router.get('/:userId', UsersController.getById);

export default router;
