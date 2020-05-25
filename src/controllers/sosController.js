import sosModel from '../models/incidentReports.model';

// sos controller would only insert the location and userID to the database
const sosController = (req, res) => {
  sosModel.createSos(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id, message: 'help is on the way' });
    });
};

export default sosController;
