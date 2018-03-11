let joi = require('joi')
let baseSchema = require('./../../models/schemas');

class userSchema extends baseSchema {
   constructor() {
      super();
      this.person = joi.object().keys({
         username: joi.string().alphanum().min(3).max(30).required(),
      })

      // this.manyPerson = this.array(this.person)

      // this.both = this.twoSchemas(this.person, this.manyPerson)
   }
}

module.exports = new userSchema();