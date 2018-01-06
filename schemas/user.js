let joi = require('joi')
let baseSchema = require('./../models/schemas');

class userSchema extends baseSchema {
   constructor() {
      super();
      this.person = joi.object().min(3).max(4).keys({
         _id: joi.object(),
         name: joi.string().required(),
         email: joi.string().email().required(),
         password: joi.string().required()
      }).with('name', 'email', 'password');

      this.manyPerson = this.array(this.person)

      this.both = this.twoSchemas(this.person, this.manyPerson)
   }
}

module.exports = new userSchema();