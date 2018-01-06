module.exports = mongo => {
   return [{
      plugin: require('./../routes/health')(),
      routes: {
         prefix: '/health'
      }
   }, {
      plugin: require('./../routes/user')(mongo),
      routes: {
         prefix: '/user'
      }
   }]
};