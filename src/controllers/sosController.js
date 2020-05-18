import sosModel from '../models/sos.model';

const sosController = {};

// sos controller would only insert the location and userID to the database
sosController.insert = (req, res) => {
  sosModel.createSos(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id });
    });
};

export default sosController;
