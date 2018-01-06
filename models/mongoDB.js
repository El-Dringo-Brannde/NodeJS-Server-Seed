let crud = require('./crud');
var self;

// class for more complex mongoDB queries that rely on CRUD operations
module.exports = class mongoDB extends crud {
   constructor(mongo, collection) {
      super(mongo, collection)

      self = this;
   }

   async aggregate(aggregation) {
      return await self.db.aggregate(aggregation);
   }

   async create(inserting) {
      if (Array.isArray(inserting))
         return await self.createMany(inserting)
      else
         return await self.createOne(inserting)
   }

   async getById(id) {
      let searchObj = {
         _id: self.id(id)
      }
      return await self.read(searchObj)
   }

   async getAll() {
      return await self.read({});
   }

   async count(searchObj) {
      let retVal = await self.read(searchObj);
      return retVal.length
   }

   async removeById(id) {
      let searchObj = {
         _id: self.id(id)
      }
      return await self.delete(searchObj);
   }

   async update(searchObj, updateVal, multi = false) {
      if (multi)
         return await self.updateMany(searchObj, updateVal);
      else
         return await self.updateOne(searchObj, updateVal);
   }

   async remove(searchObj, multi = false) {
      if (multi)
         return await self.deleteMany(searchObj);
      else
         return await self.deleteOne(searchObj);
   }

}