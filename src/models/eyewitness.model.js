import mongoose from '../database/mongoose.db';

const { Schema } = mongoose;

const EyeWitnessModel = {};

const eyewitnessSchema = new Schema({
  location: String,
  description: String,
  reportCount: Number
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

export default EyeWitnessModel;
