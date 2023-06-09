/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ShelduleEntity from '../entities/sheldule.entity';

@Injectable()
export class FindOneOrManySchedule {

    constructor(
        @InjectRepository(ShelduleEntity)
        private repository: Repository<ShelduleEntity>,
    ) {}
    
    async execute(id?: number): Promise<ShelduleEntity[] | ShelduleEntity> {
        try{
            const criteria = (id) ? {where: { id: id}} : {}
            const response = await this.repository.find(criteria);
            return response;
        }catch(e){
            throw new Error("Não foi possivel criar o usuário");
        }
    }
  
}