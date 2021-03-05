import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Country} from './country.model';

@model()
export class Sight extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

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
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  linkToPhoto: string;

  @belongsTo(() => Country)
  countryId: string;

  constructor(data?: Partial<Sight>) {
    super(data);
  }
}

export interface SightRelations {
  // describe navigational properties here
}

export type SightWithRelations = Sight & SightRelations;
