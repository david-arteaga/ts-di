import { Model } from "../../models/model";
import { Inject, Injectable } from '../../di/di';
import { injectable } from 'inversify';

@injectable()
export abstract class BaseService {
  constructor(
    @Inject(Model) protected model: Model,
  ) {}
}
