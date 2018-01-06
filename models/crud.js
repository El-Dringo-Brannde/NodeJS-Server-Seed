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

   async create(insertObj) {
      return await self.db.insertMany(insertObj, { upsert: true });
   }

   async read(searchObj) {
      return await self.db.find(searchObj).toArray();
   }

   async update(searchObj, updateVal) {
      return await self.db.findOneAndUpdate(searchObj, { $set: updateVal });
   }

   async delete(searchObj) {
      return await self.db.findOneAndDelete(searchObj);
   }
}

