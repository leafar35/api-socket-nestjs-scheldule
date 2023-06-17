/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePatient } from 'src/domain/patients/services/create.patient';
import { UpdatePatient } from 'src/domain/patients/services/update.patient';
import { DeletePatient } from 'src/domain/patients/services/delete.patient';
import { FindOneOrMany } from 'src/domain/patients/services/findoneormany.patient';
import { PatientRestModel } from './restmodel/patient.restmodel';
import { PatientConverter } from './converters/patient.converter';

@Controller('patients')
export class PatientController {

  constructor(
    private readonly creater: CreatePatient,
    private readonly updater: UpdatePatient,
    private readonly deleter: DeletePatient,
    private readonly find: FindOneOrMany,
    private readonly converter: PatientConverter
  ) {}

  @Get()
  async patients() {
    const response = await this.find.execute()
    return response;
  }

  @Get(':id')
  async patient(@Param('id') id: number) {
    const response = await this.find.execute(id)
    return response;
  }

  @Post()
  async create(@Body() content: PatientRestModel) {
    const entity = this.converter.mapToEntity(content)
    const response = await this.creater.execute(entity)
    return response
  }

  @Put()
  async update(@Body() content: PatientRestModel) {
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