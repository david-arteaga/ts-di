import * as Knex from 'knex'

export function up(knex: Knex, Promise: PromiseConstructor) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary()
      table.string('username').notNullable()
    })
    .createTable('post', table => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id')
      table.string("name").notNullable()
    })
}

export function down(knex: Knex, Promise: PromiseConstructor) {
  return knex.schema
    .dropTableIfExists('post')
    .dropTableIfExists('users')
}
