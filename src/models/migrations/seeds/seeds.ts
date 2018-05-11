import * as Knex from 'knex'

export function seed(knex: Knex, Promise: PromiseConstructor) {
  return knex
    .table('users')
      .insert({username: 'John'}, 'id')
      .then(id => {
        return knex.table('post')
          .insert({user_id: parseInt(id), name: 'My First Post'})
      })
}
