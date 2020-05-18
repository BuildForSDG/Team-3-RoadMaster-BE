import UsersModel from '../models/users.model';

import crypto from 'crypto';

const UsersController = {};

UsersController.insert = (req, res) => {
  let salt = crypto.randomBytes(16).toString('base64');
  let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
  req.body.password = salt + "$" + hash;
  UsersModel.createUser(req.body).then((result) => {
    res.status(201).send({ id: result.id });
  });
};

UsersController.list = (req, res) => {
  const limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit, 10) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page, 10);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  UsersModel.list(limit, page).then((result) => {
    res.status(201).send(result);
  });
};

UsersController.getById = (req, res) => {
  UsersModel.findById(req.params.userId).then((result) => {
    res.status(200).send(result);
  });
};
export default UsersController;
