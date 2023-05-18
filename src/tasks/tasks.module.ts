/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TasksService } from './tasksservice';
import { MessageGateway } from 'src/message/message.gateway';
import { MessagesService } from 'src/message/messages.service';
import Message from 'src/message/message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [],
  providers: [TasksService, MessageGateway, MessagesService],
})
export class TasksModule {}