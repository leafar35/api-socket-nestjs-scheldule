/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ChannelEntity from 'src/domain/channels/entities/channel.entity';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule';
import { HttpServiceCustom } from 'src/domain/tasks/http.service.custom';
import { TasksService } from 'src/domain/tasks/tasks.service';
import UserEntity from 'src/domain/users/entities/user.entity';

@Module({
  imports: [HttpModule,TypeOrmModule.forFeature([ChannelEntity, UserEntity, ShelduleEntity])],
  controllers: [],
  providers: [TasksService, FindOneOrManySchedule, HttpModule, HttpServiceCustom],
})
export class TasksModule {}