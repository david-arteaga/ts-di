import { BaseService } from './base/base-service';
import { Users } from '../model/models/users';
import { Injectable } from '../di';

@Injectable()
export class UserService extends BaseService {
  async getAllUsers() {
    return (await new this.model.Users().fetchAll()).toJSON() as Users.Type[];
  }
}
