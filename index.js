const hapi = require('hapi');
var mongo = require('mongodb').MongoClient;
var initMongo = require('./database/init')(mongo); // init server
var events = require('./utilities/events');
var serverPort = require('./config/constants').defaultPort;


class server {
   constructor() {
      this.ready = null;
      this.plugins = null;
      this.server = new hapi.Server({
         port: serverPort,
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
      this.plugins = require('./components/health/route')(this.ready);
      await this.server.register(this.plugins);
      this.plugins = require('./components/user/route')(this.ready);
      await this.server.register(this.plugins);
      this.start();
   }

   async start() {
      await this.server.start()
      console.log('Server running at: ' + this.server.info.uri);
      events.emit('ready', this.server)
   }
}

module.exports = new server()