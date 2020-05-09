const mongoose = require('../../common/database/mongoose.db').mongoose;
const Schema = mongoose.Schema;

const eyewitnessSchema = new Schema({
    location: String,
    decsription: String,
    reportCount: Number
    
 });

 
const Eyewitness = mongoose.model('Eyewitnessreports', eyewitnessSchema);

// Ensure virtual fields are serialised.
eyewitnessSchema.set('toJSON', {
    virtuals: true
});


exports.createEyewReport = (reportData) => {
    const report = new Eyewitness(reportData);
    return report.save();
};