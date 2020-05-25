import { Router } from 'express';
import signupRoute from './signupRoute';
import signinRoute from './signinRoute';
import jwtCheck from '../utility/jwtCheck';
import eyeWitnessRoute from './EyeWitnessRoute';
import sosRoute from './sosRoute';
import responderRoute from './responders.route';

const router = Router();

router.use('/signup', signupRoute);
router.use('/signin', signinRoute);
router.use('/sos', sosRoute);
router.use('/report', jwtCheck, eyeWitnessRoute);
router.use('/responder', responderRoute);

export default router;
