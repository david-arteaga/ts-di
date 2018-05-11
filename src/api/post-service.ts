import { BaseService } from "./base/base-service";
import { tob, to } from "../util/await-to";
import { Injectable } from '../di/di';
import { Post } from '../models/entities/post';

const debug = require('debug')('ts-express: PostService')

@Injectable()
export class PostService extends BaseService {
  getAllPosts = async (): Promise<any[]> => {
    const [error, result] = await tob(new this.model.Post().fetchAll())
    if (error) {
      throw new Error('Could not fetch all posts')
    }
    return result.toJSON()
  }
}
