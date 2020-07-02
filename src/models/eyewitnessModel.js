/* this model is not currently being used */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const EyewitnessModel = {};

const ewSchema = new Schema({
  lat: Number,
  lon: Number,
  userId: { id: { type: Schema.Types.ObjectId, ref: 'Users' } },
  description: String,
  picture: String,
  image_public_id: String,
  reportType: { type: String, possibleValues: ['sos', 'eyewitness'] },
  creationTime: { type: Date, default: Date.now() }
});

const WitnessReport = mongoose.model('Incidentreports', ewSchema);

ewSchema.set('toJSON', { virtuals: true });

EyewitnessModel.createReport = (reportData) => {
  const report = new WitnessReport(reportData);
  return report.save();
};

EyewitnessModel.list = (perPage, page) => new Promise((resolve, reject) => {
  WitnessReport.find().limit(perPage).skip(perPage * page).exec((err, users) => {
    if (err) {
      reject(err);
    } else {
      resolve(users);
    }
  });
});

export default EyewitnessModel;
