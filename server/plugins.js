// Grab all the routes we are using
const healthRoute = require('./../components/health/route')();
const userRoute = require('./../components/user/route')();

module.exports = () => [
   {
      plugin: healthRoute,
      routes: {
         prefix: '/health',
      },
   },
   {
      plugin: userRoute,
      routes: {
         prefix: '/users',
      },
   },
];
