import UsersModel from '../models/users.model';

const UsersController = {};

UsersController.insert = (req, res) => {
  UsersModel.createUser(req.body).then((result) => {
    res.status(201).send({ id: result.id })
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
    res.status(201).send(result)
  });
};
export default UsersController;