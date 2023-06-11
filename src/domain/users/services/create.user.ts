/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from '../entities/user.entity';

@Injectable()
export class CreateUser {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {}
    
    async execute(entity: UserEntity): Promise<UserEntity> {
        try{
            const exist = await this.repository.findOne({where: {email: entity.email, cellphone: entity.cellphone}})
            if(exist)
                throw new Error("Cadastro já existe!")
            const response = await this.repository.save(entity);
            return response;
        }catch(e){
            throw new Error("Não foi possivel criar o usuário");
        }
    }
  
}