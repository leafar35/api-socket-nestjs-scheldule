/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticateService } from 'src/domain/authenticated/services/authenticate.service';
import UserEntity from 'src/domain/users/entities/user.entity';
import { AuthenticateController } from './authenticate.controller';
import { UserModelConverter } from './converters/usermodel.converter';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthenticateController],
  providers: [
    UserModelConverter,
    AuthenticateService,
  ],
})
export class AuthenticatedModule {}
