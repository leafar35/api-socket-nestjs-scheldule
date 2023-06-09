/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ShelduleEntity from '../entities/sheldule.entity';

@Injectable()
export class DeleteScheldule {

    constructor(
        @InjectRepository(ShelduleEntity)
        private repository: Repository<ShelduleEntity>,
    ) {}
    
    async execute(id: number): Promise<boolean> {
        try{
            const response = await this.repository.delete(id)
            return (response.affected !== 0);
        }catch(e){
            throw new Error("Não foi possivel criar o usuário");
        }
    }
  
}