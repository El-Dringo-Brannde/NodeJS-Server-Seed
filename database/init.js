var url = require('./../config/url');

module.exports = async mongo => {
   return new Promise((res, rej) => {
      mongo.connect(url, (err, database) => {
         res(database.db('LunchBox'));
      });
   });
};