const EyewitnessModel = require('../models/eyewitness.model')

exports.insert = (req, res) => {
    const values = req.body
    console.log(values)
    
    EyewitnessModel.createEyewReport(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};