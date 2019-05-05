
let DefineEnv = () => {
  
  /*
   *
   *  LANGUAGES DEFINITION
   *
   */
  global.CONFIG = {
    app_mongo_db : process.env.APP_MONGO_DB ? process.env.APP_MONGO_DB : 'database',
    app_mongo_user: process.env.APP_MONGO_USER ? process.env.APP_MONGO_USER : 'mongo_user',
    app_mongo_password: process.env.APP_MONGO_PASS ? process.env.APP_MONGO_PASS : 'mongo_password',
    linkedin_key: process.env.LINKEDIN_KEY ? process.env.LINKEDIN_KEY : 'linkedin_key',
    linkedin_secret: process.env.LINKEDIN_SECRET ? process.env.LINKEDIN_SECRET : 'linkedin_secret',
    server_port: process.env.SERVER_PORT ? process.env.SERVER_PORT : 80,
    server_ip: process.env.SERVER_IP ? process.env.SERVER_IP : '127.0.0.1',
    server_address: process.env.SERVER_ADDRESS ? process.env.SERVER_ADDRESS : 'your-domain.com',
    jwt_secret_key: process.env.JWT_SECRET_KEY ? process.env.JWT_SECRET_KEY : 'jwt_secret_key',
    jwt_expire: process.env.JWT_EXIRE ? process.env.JWT_EXIRE : 'jwt_expire',
    locales: process.env.LOCALES ? process.env.LOCALES.split(',') : ['en'],
    default_locale: process.env.DEFAULT_LOCALE ? process.env.DEFAULT_LOCALE : 'en'
  };
  
};

module.exports = DefineEnv;