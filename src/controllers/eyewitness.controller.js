import incidentReportsModel from '../models/incidentReports.model';

// Object to hold the controller logic for export. New methods can be added to this object and used
// in the routes files accordingly
const EyeWitnessController = {};


EyeWitnessController.insert = (req, res) => {
  incidentReportsModel.createReport(req.body)
    .then((result) => {
      res.status(201).send({ id: result.id });
    });
};

// EyeWitnessController.list = (req, res) => {
//   const limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit, 10) : 10;
//   let page = 0;
//   if (req.query) {
//     if (req.query.page) {
//       req.query.page = parseInt(req.query.page, 10);
//       page = Number.isInteger(req.query.page) ? req.query.page : 0;
//     }
//   }
//   EyeWitnessModel.list(limit, page)
//     .then((result) => {
//       res.status(200).send(result);
//     });
// };

// EyeWitnessController.getById = (req, res) => {
//   EyeWitnessModel.findById(req.params.userId).then((result) => {
//     res.status(200).send(result);
//   });
// };

export default EyeWitnessController;
