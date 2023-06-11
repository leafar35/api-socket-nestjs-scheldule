/* eslint-disable prettier/prettier */
import { Md5 } from 'ts-md5';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from 'src/domain/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticateService {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {}
    
    async execute(email: string, password: string) {
        try{
            password = Md5.hashStr(password);
            const userentity = await this.repository.findOne({where:{email:email, password: password}})
            if(userentity)
                return userentity
            throw new Error('Não foi possivel fazer login')
        }catch(e){
            throw new Error('Não foi possivel fazer login')
        }
    }

  
}