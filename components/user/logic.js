const mongoDB = require('./../../models/mongoDB');
var self = null;

module.exports = class user extends mongoDB {
   constructor(mongo, collName) {
      super(mongo, collName);
      self = this; // important to escape scope when linking route to controller
   }

   async login(req) {
      let payload = req.payload;
      payload.email = payload.email.toLowerCase();
      payload.password = payload.password.toLowerCase();
      let retVal = await self.read(payload);
      return retVal;
   }

   async getUser(req) {
      return await self.read(req.query)
   }


   async signUp(req) {
      let payload = req.payload
      payload.email = payload.email.toLowerCase().trim();
      payload.password = payload.password.toLowerCase().trim();
      return await self.create(payload);
   }
}