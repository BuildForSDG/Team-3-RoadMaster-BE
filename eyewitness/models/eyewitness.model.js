const { mongoose } = require('../../common/database/mongoose.db');

const Schema = mongoose.Schema;

const eyewitnessSchema = new Schema({
  location: String,
  description: String,
  reportCount: Number
});

const Eyewitness = mongoose.model('Eyewitnessreports', eyewitnessSchema);

eyewitnessSchema.set('toJSON', { virtuals: true });

exports.createEyewReport = (reportData) => {
  const report = new Eyewitness(reportData);
  return report.save();
};

exports.list = (perPage, page) => new Promise((resolve, reject) => {
  Eyewitness.find().limit(perPage).skip(perPage * page).exec((err, reports) => {
    if (err) {
      reject(err);
    } else {
      resolve(reports);
    }
  });
});
