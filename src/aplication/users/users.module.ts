/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from 'src/domain/users/entities/user.entity';
import { CreateUser } from 'src/domain/users/services/create.user';
import { DeleteUser } from 'src/domain/users/services/delete.user';
import { FindOneOrMany } from 'src/domain/users/services/findoneormany.user';
import { UpdateUser } from 'src/domain/users/services/update.user';
import { UserConverter } from './converters/user.converter';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [CreateUser,DeleteUser, UpdateUser, FindOneOrMany, UserConverter],
})
export class UserModule {}