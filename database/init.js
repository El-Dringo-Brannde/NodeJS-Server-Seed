var config = require('./../config/constants');

module.exports = async mongo => {
   let client = await mongo.connect(config.mongoURL);
   return client.db(config.databaseName);
};