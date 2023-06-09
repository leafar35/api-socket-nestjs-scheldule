/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from '../entities/user.entity';

@Injectable()
export class FindOneOrMany {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {}
    
    async execute(id?: number): Promise<UserEntity[] | UserEntity> {
        try{
            const criteria = (id) ? {where: { id: id}} : {}
            const response = await this.repository.find(criteria);
            return response;
        }catch(e){
            throw new Error("Não foi possivel criar o usuário");
        }
    }
  
}