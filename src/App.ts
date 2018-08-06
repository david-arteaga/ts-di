import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { ApiRouter } from './routes/api-router';
import { Inject, Injectable } from './di';

@Injectable()
export class App {
  express: express.Application;

  constructor(@Inject(ApiRouter) private apiRouter: ApiRouter) {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.express.get('/', (_, res) => res.send('Build something cool :)'));
    this.express.use('/api', this.apiRouter.router);
  }
}
