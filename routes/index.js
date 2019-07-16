const brandApi = require('./brand');
const modelApi = require('./model');
const ownerApi = require('./owner');
const carApi = require('./car');

const setRoutes = app => {
      app.use('/models',modelApi);
      app.use('/brands',brandApi);
      app.use('/owners',ownerApi);
    app.use('/cars',carApi);
};

module.exports = {
    setRoutes
}