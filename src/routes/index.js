import { Router } from 'express';
import sosRoute from './sosRoute';
import eyeWitnessRoute from './EyeWitnessRoute';
import signupRoute from './signupRoute';
import signinRoute from './signinRoute';
import jwtCheck from '../utility/jwtCheck';

const router = Router();

router.use('/sos', jwtCheck, sosRoute);
router.use('/report', jwtCheck, eyeWitnessRoute);
router.use('/signup', signupRoute);
router.use('/signin', jwtCheck, signinRoute);

export default router;
