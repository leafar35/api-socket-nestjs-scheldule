/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ChannelEntity from 'src/domain/channels/entities/channel.entity';
import { ChennelGateway } from 'src/domain/channels/services/chennel.gateway';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule';
import { TasksService } from 'src/domain/tasks/tasks.service';
import UserEntity from 'src/domain/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChannelEntity, UserEntity, ShelduleEntity])],
  controllers: [],
  providers: [TasksService, ChennelGateway, FindOneOrManySchedule],
})
export class TasksModule {}