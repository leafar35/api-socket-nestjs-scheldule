/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import * as moment from 'moment'
import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { CreateSchedule } from 'src/domain/scheldule/services/create.scheldule';
import { UpdateSchedule } from 'src/domain/scheldule/services/update.scheldule';
import { DeleteScheldule } from 'src/domain/scheldule/services/delete.scheldule';
import { ScheduleConverter } from './converters/schedule.converter';
import { ScheduleRestModel } from './restmodel/schedule.restmodel';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule';
import { FindOneOrMany } from 'src/domain/users/services/findoneormany.user';

@Controller('schedule')
export class SchelduleController {

  constructor(
    private readonly creater: CreateSchedule,
    private readonly updater: UpdateSchedule,
    private readonly deleter: DeleteScheldule,
    private readonly find: FindOneOrManySchedule,
    private readonly converter: ScheduleConverter,
    private readonly findUser: FindOneOrMany
  ) {}

  @Get('agendas')
  @Render('agendas')
  async View(){
    const response = await this.find.execute()
    return { scheldule: response };
  }

  @Get()
  async scheldule() {
    const response = await this.find.execute()
    return response;
  }

  @Get(':id')
  async oneUser(@Param('id') id: number) {
    const response = await this.find.execute(id)
    return response;
  }

  @Post()
  async create(@Body() content: ScheduleRestModel) {
    content.appear = false
    content.schedule = moment(content.schedule,"DD/MM/YYYY HH:mm:ss").format('YYYY-MM-DD HH:mm:ss')
    const entity = this.converter.mapToEntity(content)
    entity.user = (await this.findUser.execute(content.userId))[0]
    const response = await this.creater.execute(entity)
    return response
  }

  @Put()
  async update(@Body() content: ScheduleRestModel) {
    content.schedule = moment(content.schedule,"DD/MM/YYYY HH:mm:ss").format('YYYY-MM-DD HH:mm:ss')
    const entity = this.converter.mapToEntity(content)
    entity.user = (await this.findUser.execute(content.userId))[0]
    const response = await this.updater.execute(entity)
    return response
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const response = await this.deleter.execute(id)
    return response
  }
}
