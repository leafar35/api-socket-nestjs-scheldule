/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Controller, Get, Param} from '@nestjs/common';
import { ChennelGateway } from 'src/domain/channels/services/chennel.gateway';
import { FindOneOrManySchedule } from 'src/domain/scheldule/services/findoneormany.scheldule';

@Controller('notifica')
export class ChannelController {

  constructor(
    private readonly find: FindOneOrManySchedule,
    private readonly channel: ChennelGateway
  ) {}

  @Get(':id')
  async notification(@Param('id') id: number) {
    const response = await this.find.execute(id);
    const schedule = Array.isArray(response) ? response[0] : response
    this.channel.handleSendMessage(schedule)
  }
}