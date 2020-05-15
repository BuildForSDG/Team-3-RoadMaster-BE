import { Router } from 'express';

import SosController from '../controllers/sos.controller';

const router = new Router();

router.post('/soss', SosController.insert);

router.get('/soss', SosController.list);

const sos = (req, res) => {
  res.json('sos');
};

export default router;
