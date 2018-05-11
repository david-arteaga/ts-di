import { Router, Request, Response, NextFunction } from 'express';
import { to } from '../util/await-to';
import { BaseRouter } from "./base/base-router";
import * as fromPost from '../api/post-service';
import { catch_async } from './base/util';
import { Injectable, Inject, getInstanceDI, getInstanceForSymbol } from '../di/di';
import { UserService } from '../api/user-service';
import { PostService } from '../api/post-service';
import * as Bookshelf from 'bookshelf';
import { BookshelfType } from '../models/bookshelf';
import { inject, injectable, Container } from 'inversify';
import { Users } from '../models/entities/users';
import { Post } from '../models/entities/post';
const debug = require('debug')('ts-express:ApiRouter')

@Injectable()
export class ApiRouter extends BaseRouter {

  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(PostService) private postService: PostService,
  ) {
    super()
    this.router.get('/user', catch_async(this.getUsers))
    this.router.get('/post', catch_async(this.getPosts))
  }

  getUsers = async (req: Request, res: Response) => {
    res.json(await this.userService.getAllUsers())
  }

  getPosts = async (req: Request, res: Response) => {
    res.json(await this.postService.getAllPosts())
  }

}
