var mongoID = require('mongodb').ObjectId;
var self;

// base CRUD functionality to the DB, along with base component stuff
module.exports = class crud {
   constructor(mongo, collection) {
      this.id = mongoID;
      this.db = mongo.collection(collection);
      self = this;

      this.onInit();
   }

   onInit() { } // virtual func for anything after constructor

   async createOne(insertObj) {
      return await self.db.insertOne(insertObj);
   }

   async createMany(insertObjects) {
      return await self.db.insertMany(insertObjects);
   }

   async read(searchObj) {
      return await self.db.find(searchObj).toArray();
   }

   async updateOne(searchObj, updateVal) {
      return await self.db.updateOne(searchObj, { $set: updateVal });
   }

   async updateMany(searchObj, updateVal) {
      return await self.db.updateMany(searchObj, { $set: updateVal });
   }

   async deleteOne(searchObj) {
      return await self.db.deleteOne(searchObj);
   }

   async deleteMany(searchObj) {
      return await self.db.deleteMany(searchObj);
   }
}

