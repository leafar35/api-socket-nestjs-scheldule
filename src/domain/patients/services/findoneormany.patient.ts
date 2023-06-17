/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PatientEntity from '../entities/patient.entity';

@Injectable()
export class FindOneOrMany {

    constructor(
        @InjectRepository(PatientEntity)
        private repository: Repository<PatientEntity>,
    ) {}
    
    async execute(id?: number): Promise<PatientEntity[] | PatientEntity> {
        try{
            const criteria = (id) ? {where: { id: id}} : {}
            const response = await this.repository.find(criteria);
            return response;
        }catch(e){
            throw new Error("Não foi possivel criar o usuário");
        }
    }
  
}