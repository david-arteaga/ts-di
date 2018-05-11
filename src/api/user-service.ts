import { BaseService } from "./base/base-service";
import { to, tob } from "../util/await-to";
import { Users } from "../models/entities/users";
import * as Bookshelf from 'bookshelf'
import { Injectable } from "../di/di";

const debug = require('debug')('ts-express:UserService')

@Injectable()
export class UserService extends BaseService {
  async getAllUsers(): Promise<any[]> {
    const [error, result] = await tob(new this.model.Users().fetchAll())
    if (error) {
      throw new Error('Could not fetch all users')
    }
    debug('users are', result.toJSON())
    return result.toJSON()
  }
}
