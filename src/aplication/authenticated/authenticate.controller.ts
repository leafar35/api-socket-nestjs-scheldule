/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticateService } from 'src/domain/authenticated/services/authenticate.service';
import { SignInRest } from './restmodels/signIn.restmodel';

@Controller('authenticate')
export class AuthenticateController {

    constructor(
        private readonly authenticate: AuthenticateService
    ){}
    
    @Post('/signIn')
    async signIn(@Body() sigin: SignInRest) {
        const data = await this.authenticate.execute(sigin.email, sigin.password);
        return data
    }  
  
}