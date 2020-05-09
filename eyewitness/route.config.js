const EyewitnessController = require('../eyewitness/controller/eyewitness.controller')
const config = require('../common/config/env.config');



exports.routesConfig = function (app) {

    app.post('/report', [
        EyewitnessController.insert
    ]);

    app.get('/report', [
        EyewitnessController.list
        ]);

    app.get('/report/:reportId', [
        EyewitnessController.getById
    ]);

    app.patch('/report/:reportId', [
        EyewitnessController.patchById
    ]);

    app.delete('/report/:reportId', [
        EyewitnessController.removeById
    ]);
};