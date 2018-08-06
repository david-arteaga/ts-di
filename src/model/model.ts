import { migrationsConfig } from '../config/migrations';
import { seedsConfig } from '../config/seeds';
import { Injectable } from '../di';
import { inject } from 'inversify';
import { BookshelfType } from './bookshelf';
import * as Bookshelf from 'bookshelf';
import { Users } from './models/users';
import { Post } from './models/post';
import { APP_NAME } from '../app-name';

const debug = require('debug')(APP_NAME + ':model');

@Injectable()
export class Model {
  constructor(@inject(BookshelfType) private bookshelf: Bookshelf) {
    console.log('Running Model constructor');
  }

  /**
   * Configure the entities in this model
   */
  Users = Users;
  Post = Post;

  /**
   * Run the knex migrations and seeds configured for this model
   * @return {Promise<void>} The promise
   */
  async init(): Promise<void> {
    if (process.env.INIT_DB === 'true') {
      debug('Initializing database...');

      // Delete current schema
      await this.bookshelf.knex.migrate.rollback(migrationsConfig);

      // Create schema
      await this.bookshelf.knex.migrate.latest(migrationsConfig);

      debug('Running seeds...');
      return await this.bookshelf.knex.seed.run(seedsConfig);
    } else {
      debug('INIT_DB is false so no db init will occur');
    }
  }
}
