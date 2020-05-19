import { Router } from 'express';
import signupRoute from './signupRoute';
import signinRoute from './signinRoute';
import jwtCheck from '../utility/jwtCheck';

const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', jwtCheck, signinRoute);

export default router;
