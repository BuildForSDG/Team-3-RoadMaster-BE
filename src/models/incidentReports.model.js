/*** 
 * this model is not currently being used
 */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const IncidentReportModel = {}

const irSchema = new Schema({
  location: String,
  userId: { id: { type: Schema.Types.ObjectId, ref: 'Users' } },
  description: String,
  pictures: [{ type: Buffer} ],
  reportType: {type: String, possibleValues: ['sos', 'eyewitness'] }
});

const Ireport = mongoose.model('Incidentreports', irSchema);

irSchema.set('toJSON', { virtuals: true });

IncidentReportModel.createReport = (reportData) => {
  const report = new Ireport(reportData);
  return report.save();
};

export default IncidentReportModel;
