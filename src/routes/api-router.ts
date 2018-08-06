import { Request, Response } from 'express';
import { BaseRouter } from './base/base-router';
import { catch_async } from './base/util';
import { Injectable, Inject } from '../di';
import { UserService } from '../api/user-service';
import { PostService } from '../api/post-service';

@Injectable()
export class ApiRouter extends BaseRouter {
  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(PostService) private postService: PostService
  ) {
    super();
    this.router.get('/user', catch_async(this.getUsers));
    this.router.get('/post', catch_async(this.getPosts));
  }

  getUsers = async (_: Request, res: Response) => {
    res.json(await this.userService.getAllUsers());
  };

  getPosts = async (_: Request, res: Response) => {
    res.json(await this.postService.getAllPosts());
  };
}
