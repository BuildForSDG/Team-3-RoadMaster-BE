const EyewitnessController = require('./controllers/eyewitness.controller');

exports.routesConfig = (app) => {
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
