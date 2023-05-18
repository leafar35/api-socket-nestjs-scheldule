/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Message from './message.entity';
import { ScheduleRestModel } from './schedule.restmodel';

export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messagesRepository: Repository<Message>,
  ) {}

  async getAllMessages() {
    const messages = this.messagesRepository.find();
    return messages;
  }

  async getMessageById(id: number) {
    const message = await this.messagesRepository.findOne({
      where: {
        id: id,
      },
    });
    if (message) {
      return message;
    }
    throw new NotFoundException('Could not find the message');
  }

  async createMessage(content: ScheduleRestModel) {
    const newMessage = await this.messagesRepository.create(content);
    await this.messagesRepository.save(newMessage);
    return newMessage;
  }
}
