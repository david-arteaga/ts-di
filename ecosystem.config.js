const APP_NAME = require('./package.json').name;
module.exports = {
  apps: [
    {
      name: APP_NAME,
      script: 'build/index.js',
      env: {
        DEBUG: APP_NAME + ':*',
        APP_NAME,

        DB_HOST: '127.0.0.1',
        DB_NAME: 'ts_express_starter',
        DB_USER: 'ts_express_starter',
        DB_PASS: 'ts_express_starter',

        DEBUG_KNEX: true,
        INIT_DB: false,

        watch: true
      },
      env_production: {
        NODE_ENV: 'production',
        DEBUG: APP_NAME + ':*',
        APP_NAME,

        DB_HOST: '127.0.0.1',
        DB_NAME: 'ts_express_starter',
        DB_USER: 'ts_express_starter',
        DB_PASS: 'ts_express_starter',

        DEBUG_KNEX: true,
        INIT_DB: false,

        watch: true
      }
    }
  ]
};
