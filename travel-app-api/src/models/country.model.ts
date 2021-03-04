import {Entity, model, property, hasMany} from '@loopback/repository';
import {Sight} from './sight.model';

@model()
export class Country extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  linkToPhoto: string;

  @property({
    type: 'string',
    required: true,
  })
  linkToVideo: string;

  @hasMany(() => Sight)
  sights: Sight[];

  constructor(data?: Partial<Country>) {
    super(data);
  }
}

export interface CountryRelations {
  // describe navigational properties here
}

export type CountryWithRelations = Country & CountryRelations;
