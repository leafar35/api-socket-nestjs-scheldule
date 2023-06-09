/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import { ScheduleRestModel } from '../restmodel/schedule.restmodel';

@Injectable()
export class ScheduleConverter {

    mapToEntity(restmodel: ScheduleRestModel) : ShelduleEntity {
        return ShelduleEntity.create({
            id: restmodel.id,
            title: restmodel.title,
            category: restmodel.category,
            localization: restmodel.localization,
            schedule: restmodel.schedule,
            appear: restmodel.appear,
        })
    }

    mapToRestModel(entity: ShelduleEntity) : ScheduleRestModel {
        return new ScheduleRestModel(
            entity.id,
            entity.title,
            entity.category,
            entity.localization,
            entity.schedule,
            entity.appear,
            entity.user.id
        );
    }

    mapToListRestModel(entities: Array<ShelduleEntity>) : Array<ScheduleRestModel> {
        return entities.map(at => new ScheduleRestModel(
            at.id,
            at.title,
            at.category,
            at.localization,
            at.schedule,
            at.appear,
            at.user.id
        ));
    }

}