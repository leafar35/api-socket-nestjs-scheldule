/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUser } from 'src/domain/users/services/create.user';
import { UpdateUser } from 'src/domain/users/services/update.user';
import { DeleteUser } from 'src/domain/users/services/delete.user';
import { UserRestModel } from './restmodel/user.restmodel';
import { FindOneOrMany } from 'src/domain/users/services/findoneormany.user';
import { UserConverter } from './converters/user.converter';

@Controller('user')
export class UserController {

  constructor(
    private readonly creater: CreateUser,
    private readonly updater: UpdateUser,
    private readonly deleter: DeleteUser,
    private readonly find: FindOneOrMany,
    private readonly converter: UserConverter
  ) {}

  @Get()
  async users() {
    const response = await this.find.execute()
    return response;
  }

  @Get(':id')
  async oneUser(@Param('id') id: number) {
    const response = await this.find.execute(id)
    return response;
  }

  @Post()
  async create(@Body() content: UserRestModel) {
    const entity = this.converter.mapToEntity(content)
    const response = await this.creater.execute(entity)
    return response
  }

  @Put()
  async update(@Body() content: UserRestModel) {
    const entity = this.converter.mapToEntity(content)
    const response = await this.updater.execute(entity)
    return response
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    const response = await this.deleter.execute(id)
    return response
  }
}
