import {
  Count,
  CountSchema,
  repository,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Country,
  Sight,
} from '../models';
import {CountryRepository, SightRepository} from '../repositories';

export class CountrySightController {
  constructor(
    @repository(CountryRepository) protected countryRepository: CountryRepository,
    @repository(SightRepository) protected sightRepository: SightRepository,
  ) { }

  @get('/countries/{id}/sights', {
    responses: {
      '200': {
        description: 'Array of Country has many Sight',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sight)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
  ): Promise<Sight[]> {
    return this.countryRepository.sights(id).find();
  }

  @post('/countries/{id}/sights', {
    responses: {
      '200': {
        description: 'Country model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sight)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Country.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sight, {
            title: 'NewSightInCountry',
            exclude: ['id'],
            optional: ['countryId']
          }),
        },
      },
    }) sight: Omit<Sight, 'id'>,
  ): Promise<Sight> {
    return this.countryRepository.sights(id).create(sight);
  }

  @patch('/countries/sights/{sightId}', {
    responses: {
      '200': {
        description: 'Country.Sight PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('sightId') sightId: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sight, {partial: true}),
        },
      },
    })
    sight: Partial<Sight>,
  ): Promise<void> {
    return this.sightRepository.updateById(sightId, sight);
  }

  @del('/countries/{id}/sights', {
    responses: {
      '200': {
        description: 'Country.Sight DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
  ): Promise<Count> {
    return this.countryRepository.sights(id).delete();
  }
}
