var userController = require('./../controllers/user')


// all routes are prefixed with '/user'
module.exports = mongo => {
   userController = new userController(mongo, 'users')

   return {
      name: 'user',
      register: (server, options) => {

         server.route([
            {
               method: 'GET',
               path: '/',
               handler: userController.getUser
            },
            {
               method: 'POST',
               path: '/signup',
               handler: async req => {
                  return await userController.signup(req.payload)
               }
            },
            {
               method: 'POST',
               path: '/login',
               handler: async req => {
                  return await userController.login(req.payload);
               }
            }
         ])

      }
   }
}

