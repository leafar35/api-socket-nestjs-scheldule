/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import * as moment from 'moment';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ChennelGateway } from '../channels/services/chennel.gateway';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule'

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  
  constructor(
    private readonly schedule: FindOneOrManySchedule,
    private readonly channel: ChennelGateway
  ) {}

  @Cron('*/10 * * * * *')
  async handleCron() {
    const response = await this.schedule.execute();
    if(Array.isArray(response)){
      for(const message of response){
        if(moment().diff(message.schedule,'days') == 0){
          const difference = moment(moment(moment.now()).add(-3, 'hour').format('YYYY-MM-DD HH:mm:ss')).diff(message.schedule,'minutes', true).toString()
          const positive = Math.abs(parseInt(difference))
          if(positive > 10 && positive < 30){
            this.channel.handleSendMessage(message)
            this.logger.debug('Called when the current second is 10');
          }
        }
      }
    }
  }
}
