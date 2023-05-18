/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import * as moment from 'moment'
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import Message from './message.entity';
import { MessagesService } from './messages.service';
import { ScheduleRestModel } from './schedule.restmodel';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService
  ) {}

  @Get()
  async getAllMessages(): Promise<Message[]> {
    const messages = await this.messagesService.getAllMessages();
    return messages;
  }

  @Get(':id')
  async getMessageById(@Param('id') id: string): Promise<Message> {
    const message = await this.messagesService.getMessageById(Number(id));
    return message;
  }

  @Post()
  async createMessage(@Body() content: ScheduleRestModel) {
    content.schedule = moment(content.schedule,"DD/MM/YYYY HH:mm:ss").format('YYYY-MM-DD HH:mm:ss')
    this.messagesService.createMessage(content)
    return content
  }
}
