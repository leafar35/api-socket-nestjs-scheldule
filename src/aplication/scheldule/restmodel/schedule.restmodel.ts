/* eslint-disable prettier/prettier */
export class ScheduleRestModel {

    constructor(
        public id: number,
        public title: string,
        public category: string,
        public localization: string,
        public schedule: string,
        public appear: boolean = false,
        public userId: number
    ){}
  
  }