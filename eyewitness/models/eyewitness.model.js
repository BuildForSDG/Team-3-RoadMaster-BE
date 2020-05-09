const mongoose = require('../../common/database/mongoose.db').mongoose;
const Schema = mongoose.Schema;

const eyewitnessSchema = new Schema({
    location: String,
    description: String,
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


exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Eyewitness.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};
