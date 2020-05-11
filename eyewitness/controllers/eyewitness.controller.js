const EyewitnessModel = require('../models/eyewitness.model');

exports.insert = (req, res) => {
  EyewitnessModel.createEyewReport(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id });
    });
};

exports.list = (req, res) => {
  const limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit, 10) : 10;
  let page = 0;
  if (req.query) {
    if (req.query.page) {
      req.query.page = parseInt(req.query.page, 10);
      page = Number.isInteger(req.query.page) ? req.query.page : 0;
    }
  }
  EyewitnessModel.list(limit, page)
    .then((result) => {
      res.status(200).send(result);
    });
};
