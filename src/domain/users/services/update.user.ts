/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from '../entities/user.entity';

@Injectable()
export class UpdateUser {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {}
    
    async execute(entity: UserEntity): Promise<UserEntity> {
        try{
            if(!entity.id)
                throw new Error('Nao foi possivel atualizar')
            const response = await this.repository.save(entity);
            return response;
        }catch(e){
            throw new Error(e.message);
        }
    }
  
}