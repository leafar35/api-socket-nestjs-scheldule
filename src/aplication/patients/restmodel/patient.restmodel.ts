/* eslint-disable prettier/prettier */
import { UserRestModel } from "src/aplication/users/restmodel/user.restmodel";

export class PatientRestModel {

    constructor(
        public id: number,
        public name: string,
        public cpf: string,
        public dateofbirth: string,
        public zipcode: string,
        public neighborhood: string,
        public address: string,
        public number: number,
        public complement: string,
        public user?: UserRestModel
    ){}
  
  }