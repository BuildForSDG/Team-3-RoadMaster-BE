import { v2 as cloudinary } from 'cloudinary';
import EyewitnessModel from '../models/eyewitnessModel';

// Object to hold the controller logic for export. New methods can be added to this object and used
// in the routes files accordingly
const EyewitnessController = {};


EyewitnessController.report = (req, res) => {
  const filename = req.files.image.path;

  cloudinary.uploader.upload(filename, { tags: 'gotemps', resource_type: 'auto' })
    .then((file) => {
      req.body.picture = file.url;
      req.body.image_public_ic = file.public_id;
      req.body.creationTime = new Date();
      EyewitnessModel.createReport(req.body)
        .then((result) => {
          res.status(201).send({ id: result.id });
        });
    });
};

EyewitnessController.list = (req, res) => {
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

// EyeWitnessController.getById = (req, res) => {
//   EyeWitnessModel.findById(req.params.userId).then((result) => {
//     res.status(200).send(result);
//   });
// };

export default EyewitnessController;
