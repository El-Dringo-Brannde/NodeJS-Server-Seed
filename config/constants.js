const env = process.env.NODE_ENV || 'local';

const mongoHostConfig = {
   production: {
      host: 'mongodb://lighthouse.cdk.com:27017',
      user: '',
      password: '',
   },
   development: {
      host: 'mongodb://localhost:27017',
      user: '',
      password: '',
   },
   local: {
      host: 'mongodb://localhost:27017',
      user: '',
      password: '',
   },
   test: {
      host: 'mongodb://localhost:27017',
      user: '',
      password: '',
   },
};

const mongoConfig = {
   connection: {
      host: mongoHostConfig[env].host,
      user: mongoHostConfig[env].user,
      password: mongoHostConfig[env].password,
   },
   debug: (env === 'production' ? false : env !== 'development'),
};


const mongoDataBaseName = {
   production: 'lhV2',
   local: 'lhV2',
   development: 'lhV2',
   test: 'lhV2',
};

const mongoCollections = {
   users: 'users',
};

exports.mongoHostConfig = mongoHostConfig;
exports.mongoCollections = mongoCollections;
exports.configObj = mongoConfig;

// Connection stuff
exports.mongoHostURL = mongoHostConfig[env].host;
exports.mongoDataBaseName = mongoDataBaseName[env];

