import sosModel from '../models/sos.model';

const sosController = {};

// sos controller would only insert the location and userID to the database
sosController.insert = (req, res) => {
  sosModel.createSos(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id });
    });
};

sosController.getById = (req, res) => {
  console.log(req.body)
  sosModel.findById(req.params.userId).then((result) => {
    res.status(200).send(result);
  });
};

sosController.list = (req, res) => {
  const limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit, 10) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page, 10);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  sosModel.list(limit, page)
    .then((result) => {
      res.status(200).send(result);
    });
};

export default sosController;
