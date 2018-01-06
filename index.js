const hapi = require('hapi');
var mongo = require('mongodb').MongoClient;
var initMongo = require('./database/init')(mongo); // init server


class server {
   constructor() {
      this.ready = null;
      this.plugins = null;
      this.server = new hapi.Server({
         port: 3009,
         routes: {
            cors: {
               origin: ['*'],
               additionalHeaders: ['Access-Control-Allow-Origin', 'origin', 'accept-encoding']
            }
         }
      });
      this.initialize();
   }

   async initialize() {
      this.ready = await initMongo;
      this.plugins = require('./server/plugins')(this.ready);
      await this.server.register(this.plugins);
      this.start();
   }

   async start() {
      await this.server.start()
      console.log('Server running at: ' + this.server.info.uri);
   }
}

module.exports = new server();