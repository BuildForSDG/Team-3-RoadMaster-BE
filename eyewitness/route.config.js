const EyewitnessController = require('./controllers/eyewitness.controller');

const config = require('../common/config/env.config');



exports.routesConfig = function (app) {

    app.post('/report', [
        EyewitnessController.insert
    ]);

    app.get('/reports', [
        EyewitnessController.list
        ]);

    // app.get('/report/:reportId', [
    //     EyewitnessController.getById
    // ]);

    // app.patch('/report/:reportId', [
    //     EyewitnessController.patchById
    // ]);

    // app.delete('/report/:reportId', [
    //     EyewitnessController.removeById
    // ]);
};