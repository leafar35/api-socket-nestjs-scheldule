/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
//import * as moment from 'moment';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ChennelGateway } from '../channels/services/chennel.gateway';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  
  constructor(
    //private readonly messagesRepository: MessagesService,
    private readonly channel: ChennelGateway
  ) {}

  @Cron('*/10 * * * * *')
  async handleCron() {
    console.log("executando")
    /*
    const response = await this.messagesRepository.getAllMessages()
    for(const message of response){
      if(moment().diff(message.schedule,'days') == 0){
        const difference = moment(moment(moment.now()).add(-3, 'hour').format('YYYY-MM-DD HH:mm:ss')).diff(message.schedule,'minutes', true).toString()
        const positive = Math.abs(parseInt(difference))
        console.log(positive)
        if(positive > 10 && positive < 30){
          this.messagesSocket.handleSendMessage(message)
          this.logger.debug('Called when the current second is 10');
        }
      }
    }
    */
  }
}
