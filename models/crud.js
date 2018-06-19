const mongoClient = require('mongodb').MongoClient;

const {
   mongoHostURL,
   mongoDataBaseName,
} = require('./../config/constants');

// base CRUD functionality to the DB, along with base component stuff
module.exports = class crud {
   constructor(collName) {
      this.mongo = null;
      this.database = this.onInit(collName);
   }

   async onInit(collName) {
      return this.connectToDB(collName);
   } // virtual func for anything after constructor

   async connectToDB(collName) {
      this.database = await mongoClient.connect(mongoHostURL);

      this.database = this.database.db(mongoDataBaseName); // copy db for mongo v3+
      this.mongo = this.database;
      this.mongo = this.mongo.collection(collName);
   }

   aggregate(aggregation) {
      return new Promise((res) => {
         this.mongo.aggregate(aggregation)
            .toArray((err, docs) => {
               if (!err) { res(docs); } else { res(err); }
            });
      });
   }

   async removeObjectFromArray(selecting, updating) {
      return this.mongo.updateMany(selecting, updating);
   }

   async delete(selector) {
      return this.mongo.deleteMany(selector);
   }

   async createOne(insertObj) {
      return this.mongo.insertOne(insertObj);
   }

   async addToSet(selector, arrayAndVal) {
      return this.mongo.updateMany(selector, { $addToSet: arrayAndVal }, { upsert: true });
   }

   async createMany(insertObjects) {
      return this.mongo.insertMany(insertObjects);
   }

   async read(searchObj) {
      return this.mongo.find(searchObj).toArray();
   }

   async readObjectInArray(selector, arrayQuery) {
      return this.mongo.find(selector, arrayQuery).toArray();
   }

   async updateOne(searchObj, updateVal) {
      return this.mongo.updateOne(searchObj, { $set: updateVal }, {
         upsert: true,
      });
   }

   async updateMany(searchObj, updateVal) {
      return this.mongo.updateMany(searchObj, { $set: updateVal }, {
         upsert: true,
      });
   }

   async deleteOne(searchObj) {
      return this.mongo.deleteOne(searchObj);
   }

   async deleteMany(searchObj) {
      return this.mongo.deleteMany(searchObj);
   }
};

