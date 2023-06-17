/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PatientEntity from '../entities/patient.entity';

@Injectable()
export class DeletePatient {

    constructor(
        @InjectRepository(PatientEntity)
        private repository: Repository<PatientEntity>,
    ) {}
    
    async execute(id: number): Promise<boolean> {
        try{
            if(!id)
                throw new Error('Nao foi possivel deletar')
            const response = await this.repository.delete(id)
            return (response.affected !== 0);
        }catch(e){
            throw new Error(e.message);
        }
    }
  
}