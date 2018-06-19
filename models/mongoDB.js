const crud = require('./crud');
const { MongoID } = require('mongodb');

// class for more complex mongoDB queries that rely on CRUD operations
module.exports = class mongoDB extends crud {
   constructor(collName) {
      super(collName);
      this.mongoID = MongoID;
   }
   async aggregate(aggregation) {
      return this.db.aggregate(aggregation);
   }

   async create(inserting) {
      if (Array.isArray(inserting)) { return this.createMany(inserting); }
      return this.createOne(inserting);
   }

   async readById(id) {
      const selector = {
         _id: this.mongoID(id),
      };
      return this.read(selector);
   }

   async readAll() {
      return this.read({});
   }

   async count(searchObj) {
      const retVal = this.read(searchObj);
      return retVal.length;
   }

   async removeById(id) {
      const searchObj = {
         _id: this.id(id),
      };
      return this.delete(searchObj);
   }

   async update(searchObj, updateVal, multi = false) {
      if (multi) { return this.updateMany(searchObj, updateVal); }
      return this.updateOne(searchObj, updateVal);
   }

   async remove(searchObj, multi = false) {
      if (multi) { return this.deleteMany(searchObj); }
      return this.deleteOne(searchObj);
   }
};
