import sosModel from '../models/sos.model';

import eyewitnessModel from '../models/eyewitness.model';

//import ireportModel from '../models/incidentReports.model';

const IncidentreportController = {};

IncidentreportController.insert = (req, res) => {
  //console.log(req.body);
  if (req.body.reportType == "sos") {
    sosModel.createSos(req.body)
      .then((result) => {
        res.status(201).send({ id: result.id});
      });
  } else {
    eyewitnessModel.createEyewReport(req.body)
      .then((result) => {
        res.status(201).send({ id: result.id});
      });
  }
};

export default IncidentreportController;