/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserRestModel } from 'src/aplication/users/restmodel/user.restmodel';
import UserEntity from 'src/domain/users/entities/user.entity';

@Injectable()
export class UserModelConverter {

    mapToEntity(model: UserEntity) : UserRestModel {
        return new UserRestModel(
            model.id,
            model.email,
            model.cellphone,
            model.password,
        );
    }

}