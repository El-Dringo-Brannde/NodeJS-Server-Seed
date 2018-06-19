const joi = require('joi');

module.exports = class baseSchema {
   constructor() {
      this.joi = joi;
   }

   array(type) {
      return this.joi.array().items(type);
   }

   twoSchemas(firstSchema, altSchema) {
      return this.joi.alternatives().try(firstSchema, altSchema);
   }
};

