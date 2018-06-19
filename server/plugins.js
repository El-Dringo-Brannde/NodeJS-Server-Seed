module.exports = mongo => {
   return [
      {
         plugin: require('./../components/health/route')(),
         routes: {
            prefix: '/health'
         }
      },
      {
         plugin: require('./../components/user/route')(mongo),
         routes: {
            prefix: '/user'
         }
      }
   ]
};