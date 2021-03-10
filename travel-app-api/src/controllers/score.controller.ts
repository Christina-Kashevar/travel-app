import {
  Filter,
  repository,
} from '@loopback/repository';
import {authenticate} from '@loopback/authentication';
import {SecurityBindings, securityId, UserProfile} from '@loopback/security';
import {inject} from '@loopback/core';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Score} from '../models';
import {ScoreRepository} from '../repositories';

export class ScoreController {
  constructor(
    @repository(ScoreRepository)
    public scoreRepository : ScoreRepository,
  ) {}

  @authenticate('jwt')
  @post('/scores')
  @response(200, {
    description: 'Score model instance',
    content: {'application/json': {schema: getModelSchemaRef(Score)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Score, {
            title: 'NewScore',
            exclude: ['id'],
          }),
        },
      },
    })
    score: Omit<Score, 'id'>,
    @inject(SecurityBindings.USER)
    currentUserProfile: UserProfile,
  ): Promise<Score | null> {
    const currentScore = await this.scoreRepository.findOne({where: { userId: currentUserProfile[securityId]}});
    if(currentScore) {
      await this.scoreRepository.updateById(currentScore.id, {...currentScore, userId: currentUserProfile[securityId], value: score.value}); 
      return this.scoreRepository.findById(currentScore.id);
    } else {
      return this.scoreRepository.create({...score, userId: currentUserProfile[securityId]});
    }
  } 

  @get('/scores')
  @response(200, {
    description: 'Array of Score model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Score, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Score) filter?: Filter<Score>,
  ): Promise<Score[]> {
    return this.scoreRepository.find(filter);
  }
  
  @patch('/scores/{id}')
  @response(204, {
    description: 'Score PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Score, {partial: true}),
        },
      },
    })
    score: Score,
  ): Promise<void> {
    await this.scoreRepository.updateById(id, score);
  }

  @del('/scores/{id}')
  @response(204, {
    description: 'Score DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.scoreRepository.deleteById(id);
  }
}
