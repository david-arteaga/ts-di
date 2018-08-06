import { Users } from './users';
import { bookshelf } from '../bookshelf';

export class Post extends bookshelf.Model<Post> {
  get tableName() {
    return 'post';
  }
  get idAttribute() {
    return 'id';
  }

  user() {
    return this.belongsTo(Users);
  }
}

export namespace Post {
  export enum Related {
    user = 'user'
  }
  export type Type = PostTable;
}

type PostTable = {
  id: number;
  user_id: number;
  user?: Users.Type;
  name: string;
};
