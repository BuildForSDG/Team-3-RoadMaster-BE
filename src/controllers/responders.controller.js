import crypto from 'crypto';

import RespondersModel from '../models/responders.model';

const RespondersController = {};

RespondersController.insert = (req, res) => {

  if (req.body.password!==req.body.passwordcheck) {
    console.log('passwords dont match');
    res.send()
  } else {
    const saltp = crypto.randomBytes(16).toString('base64');
    const hashp = crypto.createHmac('sha512', saltp).update(req.body.password).digest('base64');
    req.body.password = `${saltp}$${hashp}`;
    const saltc = crypto.randomBytes(16).toString('base64');
    const hashc = crypto.createHmac('sha512', saltc).update(req.body.password).digest('base64');
    req.body.passwordcheck = `${saltc}$${hashc}`;
    RespondersModel.createResponder(req.body).then((result) => {
    res.status(201).send({ id: result.id });

    });
  }

};



export default RespondersController;