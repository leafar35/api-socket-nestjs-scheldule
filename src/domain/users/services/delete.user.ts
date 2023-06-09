/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import UserEntity from '../entities/user.entity';

@Injectable()
export class DeleteUser {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
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