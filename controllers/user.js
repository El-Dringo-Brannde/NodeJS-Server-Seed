const crud = require('./../models/crud');
var self = null;

module.exports = class user extends crud {
   constructor(mongo, collName) {
      super(mongo, collName);
      self = this; // important to escape scope when linking route to controller
   }

   async login(payload) {
      payload.email = payload.email.toLowerCase();
      payload.password = payload.password.toLowerCase();
      let retVal = await this.read(payload);
      return retVal;
   }

   async getUser(req) {
      return await self.read(req.query)
   }

   async signUp(payload) {
      payload.email = payload.email.toLowerCase();
      payload.password = payload.password.toLowerCase();
      let retVal = await this.create(payload);
      return retVal;
   }
}