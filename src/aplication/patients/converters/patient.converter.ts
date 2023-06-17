/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import PatientEntity from 'src/domain/patients/entities/patient.entity';
import UserEntity from 'src/domain/users/entities/user.entity';
import { Md5 } from 'ts-md5';
import { PatientRestModel } from '../restmodel/patient.restmodel';

@Injectable()
export class PatientConverter {

    mapToEntity(restmodel: PatientRestModel) : PatientEntity {
        return PatientEntity.create({
            id: restmodel.id,
            name: restmodel.name,
            cpf: restmodel.cpf,
            dateofbirth: restmodel.dateofbirth,
            zipcode: restmodel.zipcode,
            neighborhood: restmodel.neighborhood,
            address: restmodel.address,
            number: restmodel.number,
            complement: restmodel.complement,
            user: UserEntity.create({
                id: restmodel.user.id,
                email: restmodel.user.email,
                cellphone: restmodel.user.cellphone,
                password: Md5.hashStr(restmodel.user.password),
            }),
        })
    }

    mapToRestModel(entity: PatientEntity) : PatientRestModel {
        return new PatientRestModel(
            entity.id,
            entity.name,
            entity.cpf,
            entity.dateofbirth,
            entity.zipcode,
            entity.neighborhood,
            entity.address,
            entity.number,
            entity.complement,
            entity.user,
        );
    }

    mapToListRestModel(entities: Array<PatientEntity>) : Array<PatientRestModel> {
        return entities.map(at => new PatientRestModel(
            at.id,
            at.name,
            at.cpf,
            at.dateofbirth,
            at.zipcode,
            at.neighborhood,
            at.address,
            at.number,
            at.complement,
            at.user,
        ));
    }

}