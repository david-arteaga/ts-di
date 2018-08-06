import * as Knex from 'knex';

/**
\c postgres
drop database if exists ts_express_starter;
create database ts_express_starter;
\c ts_express_starter;

 */

export function up(knex: Knex, _: PromiseConstructor) {
  return knex.schema
    .createTable('users', table => {
      table.increments('id').primary();
      table.string('username').notNullable();
    })
    .createTable('post', table => {
      table.increments('id').primary();
      table.integer('user_id').references('users.id');
      table.string('name').notNullable();
    });
}

export function down(knex: Knex, _: PromiseConstructor) {
  return knex.schema.dropTableIfExists('post').dropTableIfExists('users');
}
