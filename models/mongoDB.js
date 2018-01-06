let crud = require('./crud');


// class for more complex mongoDB queries that rely on CRUD operations
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

   async getById(id) {
      let searchObj = {
         _id: this.id(id)
      }
      return await this.read(searchObj)
   }

   async getAll() {
      return await this.read({});
   }

   async count(searchObj) {
      let retVal = await this.read(searchObj);
      return retVal.length
   }

   async removeById(id) {
      let searchObj = {
         _id: this.id(id)
      }
      return await this.delete(searchObj);
   }

   async update(searchObj, updateVal, multi = false) {
      if (multi)
         return await this.updateMany(searchObj, updateVal);
      else
         return await this.updateOne(searchObj, updateVal);
   }

   async remove(searchObj, multi = false) {
      if (multi)
         return await this.deleteMany(searchObj);
      else
         return await this.deleteOne(searchObj);
   }

}