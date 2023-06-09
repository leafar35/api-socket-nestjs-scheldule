/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChennelGateway } from 'src/domain/channels/services/chennel.gateway';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShelduleEntity])],
  controllers: [],
  providers: [ChennelGateway],
})
export class ChannelModule {}