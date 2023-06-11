/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import { CreateSchedule } from 'src/domain/scheldule/services/create.scheldule';
import { DeleteScheldule } from 'src/domain/scheldule/services/delete.scheldule';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule';
import { UpdateSchedule } from 'src/domain/scheldule/services/update.scheldule';
import UserEntity from 'src/domain/users/entities/user.entity';
import { FindOneOrMany } from 'src/domain/users/services/findoneormany.user';
import { ScheduleConverter } from './converters/schedule.converter';
import { DownloadController } from './download.controller';
import { SchelduleController } from './scheldule.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShelduleEntity, UserEntity])],
  controllers: [SchelduleController, DownloadController],
  providers: [CreateSchedule, DeleteScheldule, UpdateSchedule, FindOneOrManySchedule, ScheduleConverter, FindOneOrMany],
})
export class ScheduleCustomModule {}