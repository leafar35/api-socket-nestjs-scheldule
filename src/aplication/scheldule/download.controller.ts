/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Render } from '@nestjs/common';

@Controller('download')
export class DownloadController {

  @Get()
  @Render('download')
  async View(){
    return { };
  }
}