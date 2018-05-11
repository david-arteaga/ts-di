import * as Knex from 'knex'

export const config: Knex.Config = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'ts',
    password : 'ts',
    database : 'ts'
  },
  debug: (process.env.DEBUG_KNEX || '').toLowerCase() === 'true',
}

export default config
