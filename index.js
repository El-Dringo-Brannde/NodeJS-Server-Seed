const cluster = require('cluster')
const numCPU = require('os').cpus().length
let Server = require('./server')

if (process.env.NODE_ENV === 'production' && cluster.isMaster) {
   for (var i = 0; i < numCPU; i++) {
      cluster.fork()
   }
   cluster.on('online', (worker) => console.log('Worker ' + worker.process.pid + ' is online.'))
   cluster.on('exit', (worker, code, signal) => console.log('worker ' + worker.process.pid + ' died.'))
} else {
   new Server() // start
}