/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PatientEntity from '../entities/patient.entity';

@Injectable()
export class CreatePatient {

    constructor(
        @InjectRepository(PatientEntity)
        private repository: Repository<PatientEntity>,
    ) {}
    
    async execute(entity: PatientEntity): Promise<PatientEntity> {
        try{
            const exist = await this.repository.findOne({where: {cpf: entity.cpf}})
            if(exist)
                throw new Error("Cadastro já existe!")
            const response = await this.repository.save(entity);
            return response;
        }catch(e){
            throw new Error("Não foi possivel criar o paciente");
        }
    }
  
}