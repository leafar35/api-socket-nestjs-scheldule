/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import UserEntity from 'src/domain/users/entities/user.entity';
import { UserRestModel } from '../restmodel/user.restmodel';

@Injectable()
export class UserConverter {

    mapToEntity(restmodel: UserRestModel) : UserEntity {
        return UserEntity.create({
            id: restmodel.id,
            name: restmodel.name,
            email: restmodel.email,
            password: restmodel.password,
            cellphone: restmodel.cellphone
        })
    }

    mapToRestModel(entity: UserEntity) : UserRestModel {
        return new UserRestModel(
            entity.id,
            entity.name,
            entity.email,
            entity.cellphone,
            entity.password
        );
    }

    mapToListRestModel(entities: Array<UserEntity>) : Array<UserRestModel> {
        return entities.map(at => new UserRestModel(
            at.id, 
            at.name, 
            at.email,
            at.cellphone,
            at.password
        ));
    }

}