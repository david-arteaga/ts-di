import { BaseService } from './base/base-service';
import { Injectable } from '../di';
import { Post } from '../model/models/post';

@Injectable()
export class PostService extends BaseService {
  async getAllPosts() {
    return (await new this.model.Post().fetchAll({
      withRelated: [Post.Related.user]
    })).toJSON() as Post.Type[];
  }
}
