/* eslint class-methods-use-this:0 */

const mongoDB = require('./../../models/mongoDB');

let self = null;

module.exports = class user extends mongoDB {
   constructor(collName) {
      super(collName);
      self = this; // important to escape scope when linking route to controller
   }

   async login(req) {
      const {
         email,
      } = req.payload;
      const retVal = self.read({ email: email.toLowerCase() });
      return retVal;
   }

   async getUser(req) {
      return self.read(req.query);
   }

   async signUp(req) {
      return self.create(req.payload);
   }
};
