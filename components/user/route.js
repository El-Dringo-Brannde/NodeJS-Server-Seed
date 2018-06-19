let UserController = require('./logic');
const UserSchema = require('./schema');

// all routes are prefixed with '/user'
const collectionName = 'users';

module.exports = () => {
   UserController = new UserController(collectionName);

   return {
      name: 'user',
      register: (server) => {
         server.route([
            {
               method: 'GET',
               path: '/',
               handler: UserController.getUser,
            },
            {
               method: 'POST',
               path: '/signup',
               handler: UserController.signUp,
               options: {
                  validate: {
                     payload: UserSchema.both,
                  },
               },
            },
            {
               method: 'POST',
               path: '/login',
               handler: UserController.login,
            },
         ]);
      },
   };
};

