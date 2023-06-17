/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PatientEntity from '../entities/patient.entity';

@Injectable()
export class UpdatePatient {

    constructor(
        @InjectRepository(PatientEntity)
        private repository: Repository<PatientEntity>,
    ) {}
    
    async execute(entity: PatientEntity): Promise<PatientEntity> {
        try{
            if(!entity.id)
                throw new Error('Nao foi possivel atualizar')
            const response = await this.repository.save(entity);
            return response;
        }catch(e){
            throw new Error("Não foi possivel atualizar o paciente");
        }
    }
  
}