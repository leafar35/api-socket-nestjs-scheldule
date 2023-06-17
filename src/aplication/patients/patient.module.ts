/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PatientEntity from 'src/domain/patients/entities/patient.entity';
import { CreatePatient } from 'src/domain/patients/services/create.patient';
import { DeletePatient } from 'src/domain/patients/services/delete.patient';
import { FindOneOrMany } from 'src/domain/patients/services/findoneormany.patient';
import { UpdatePatient } from 'src/domain/patients/services/update.patient';
import { PatientConverter } from './converters/patient.converter';
import { PatientController } from './patient.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])],
  controllers: [PatientController],
  providers: [CreatePatient, DeletePatient, UpdatePatient, FindOneOrMany, PatientConverter],
})
export class PatientModule {}