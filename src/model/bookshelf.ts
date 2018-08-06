import * as Bookshelf from 'bookshelf';
import { getInstanceForSymbol, registerContantValueForSymbol } from '../di';
import * as Knex from 'knex';
import { KnexInstanceSymbol } from './connection/knex';

const knex = getInstanceForSymbol<Knex>(KnexInstanceSymbol);

export const bookshelf = Bookshelf(knex);
bookshelf.plugin('registry');
bookshelf.plugin('pagination');
bookshelf.plugin(require('bookshelf-cascade-delete'));

export const BookshelfType = Symbol('Bookshelf');
registerContantValueForSymbol(BookshelfType, bookshelf);
