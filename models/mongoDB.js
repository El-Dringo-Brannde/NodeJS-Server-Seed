var crud = require('./crud');

module.exports = class mongoDB extends crud {
   constructor(mongo, collection) {
      super(mongo, collection)
   }

   async aggregate(aggregation) {
      return await this.db.aggregate(aggregation);
   }

   async create(inserting) {
      if (Array.isArray(inserting))
         return await this.createMany(inserting)
      else
         return await this.createOne(inserting)
   }

}