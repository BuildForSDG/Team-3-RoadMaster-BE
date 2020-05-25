import incidentModel from '../models/incidentReports.model';

// sos controller would only insert the location and userID to the database
const sosController = (req, res) => {
  incidentModel.createReport(req.body)
    .then(() => {
      res.status(201).send({ message: 'help is on the way' });
    });
};

export default sosController;
