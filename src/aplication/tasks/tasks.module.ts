/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ChannelEntity from 'src/domain/channels/entities/channel.entity';
import { ChennelGateway } from 'src/domain/channels/services/chennel.gateway';
import { TasksService } from 'src/domain/tasks/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelEntity])],
  controllers: [],
  providers: [TasksService, ChennelGateway],
})
export class TasksModule {}