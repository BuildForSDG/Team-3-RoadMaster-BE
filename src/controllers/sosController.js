import sosModel from '../models/sos.model';

const sosController = {};

sosController.insert = (req, res) => {
  sosModel.createSos(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id });
    });
};

export default sosController;
