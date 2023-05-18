/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import * as moment from 'moment';
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { MessageGateway } from 'src/message/message.gateway';
import { MessagesService } from 'src/message/messages.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private readonly messagesRepository: MessagesService,
    private readonly messagesSocket: MessageGateway
  ) {}

  @Cron('*/10 * * * * *')
  async handleCron() {
    const response = await this.messagesRepository.getAllMessages()
    for(const message of response){
      if(moment().diff(message.schedule,'days') == 0){
        const difference = moment(moment(new Date())).diff(message.schedule,'minutes', true).toString()
        if(parseInt(difference) > 10 && parseInt(difference) < 30){
          this.messagesSocket.handleSendMessage(message)
          this.logger.debug('Called when the current second is 10');
        }
      }
    }
  }
}
