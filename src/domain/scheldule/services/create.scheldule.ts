/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ShelduleEntity from '../entities/sheldule.entity';

@Injectable()
export class CreateSchedule {

    constructor(
        @InjectRepository(ShelduleEntity)
        private repository: Repository<ShelduleEntity>,
    ) {}
    
    async execute(entity: ShelduleEntity): Promise<ShelduleEntity> {
        try{
            const response = await this.repository.save(entity);
            return response;
        }catch(e){
            throw new Error("Não foi possivel criar o usuário");
        }
    }
  
}