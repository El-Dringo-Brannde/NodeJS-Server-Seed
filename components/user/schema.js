const joi = require('joi');
const BaseSchema = require('./../../models/schemas');

class UserSchema extends BaseSchema {
   constructor() {
      super();
      this.person = joi.object().keys({
         username: joi.string().alphanum().min(3).max(30)
            .required(),
      });
   }
}

module.exports = new UserSchema();
