const hapi = require('hapi');
const events = require('./utilities/events');
const commandLineArgs = require('command-line-args')


class server {
   constructor() {
      this.ready = null;
      this.plugins = null;
      let CLA = this.pullCLA();
      this.initialize(CLA);
   }

   pullCLA() {
      const options = [{
         name: 'port',
         alias: 'p',
         type: Number
      }]
      let CLA = {}
      try {
         CLA = commandLineArgs(options)
      } catch (err) { console.log(err) }
      CLA.port = process.env.NODE_ENV === 'production' ? process.env.PORT : CLA.port
      return CLA
   }

   async initialize(CLA) {
      this.plugins = require('./server/plugins')();

      this.server = new hapi.Server({
         port: CLA.port,
         routes: {
            cors: {
               origin: ['*'],
               additionalHeaders: ['Access-Control-Allow-Origin', 'origin', 'accept-encoding']
            }
         }
      });
      await this.server.register(this.plugins);
      this.start();
   }

   async start() {
      await this.server.start()
      console.log('Server running at: ' + this.server.info.uri);
      events.emit('ready', this.server)
   }
}

module.exports = server