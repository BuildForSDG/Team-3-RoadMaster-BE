import mongoose from '../database/mongoose.db';

import UserSchema from './users.model';

const { Schema } = mongoose;

const EyeWitnessModel = {};

/*
reportCount still needs handling 
*/

const eyewitnessSchema = new Schema({
  location: String,
  userId: { id: { type: Schema.Types.ObjectId, ref: 'Users' } },
  description: String,
  pictures: [{ type: Buffer }],
  reportType: { type: String, possibleValues: ['sos', 'eyewitness'] },
  creationTime: { type: Date, default: Date.now() }
});

const Eyewitness = mongoose.model('Eyewitnessreports', eyewitnessSchema);

eyewitnessSchema.set('toJSON', { virtuals: true });

EyeWitnessModel.createEyewReport = (reportData) => {
  const report = new Eyewitness(reportData);
  return report.save();
};

EyeWitnessModel.list = (perPage, page) => new Promise((resolve, reject) => {
  Eyewitness.find().limit(perPage).skip(perPage * page).exec((err, reports) => {
    if (err) {
      reject(err);
    } else {
      resolve(reports);
    }
  });
});

EyeWitnessModel.findById = (id) =>  new Promise((resolve) => {
  UserSchema.findById(id).then((result) => {
    resolve(result);
  });
});

export default EyeWitnessModel;
