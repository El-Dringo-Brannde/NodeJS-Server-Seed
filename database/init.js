var config = require('./../config/constants');

module.exports = mongo => {
   return new Promise((res, rej) => {
      mongo.connect(config.mongoURL, (err, database) => {
         res(database.db(config.databaseName));
      });
   });
};