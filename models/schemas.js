let joi = require('joi')

module.exports = class baseSchema {
   constructor() { }

   array(type) {
      return joi.array().items(type)
   }

   twoSchemas(firstSchema, altSchema) {
      return joi.alternatives().try(firstSchema, altSchema)
   }
}

