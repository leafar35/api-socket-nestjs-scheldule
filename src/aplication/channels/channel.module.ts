/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ChannelEntity from 'src/domain/channels/entities/channel.entity';
import { ChennelGateway } from 'src/domain/channels/services/chennel.gateway';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule';
import UserEntity from 'src/domain/users/entities/user.entity';
import { ChannelController } from './channel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShelduleEntity, UserEntity, ChannelEntity])],
  controllers: [ChannelController],
  providers: [ChennelGateway, FindOneOrManySchedule],
})
export class ChannelModule {}