/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Injectable, Ip } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import ShelduleEntity from '../scheldule/entities/sheldule.entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpServiceCustom {
  
  constructor(
    private readonly axios: HttpService,
  ) {}

  async runChannel(scheldule: ShelduleEntity) {
    const result = await firstValueFrom(this.axios.get(`http://localhost:3000/notifica/${scheldule.id}`));
    return result
  }
}