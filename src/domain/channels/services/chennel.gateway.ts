/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import UserEntity from 'src/domain/users/entities/user.entity';
import ChannelEntity from 'src/domain/channels/entities/channel.entity'
import { Repository } from 'typeorm';

@WebSocketGateway({ cors: true })
export class ChennelGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger('ChennelService');

  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
    @InjectRepository(ChannelEntity)
    private linkchannel: Repository<ChannelEntity>
) {}
  
  @WebSocketServer() wss: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
    this.linkchannel.findOne({where:{channel: client.id}}).then(link => {
      if(link) link.remove()
    })
  }

  handleConnection(client: Socket) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    this.logger.log(`Client Connected: ${client.id}`);
    client.on('username', async(data: UserEntity) => {
      const user = await that.repository.findOne({where: {email: data.email, cellphone: data.cellphone}})
      if(!user)
        throw new Error('Não pode receber mensagens contate o suporte')
      if(!client.id)
        throw new Error('Não pode receber mensagens contate o suporte')
      const exist = await this.linkchannel.findOne({where:{userId: user.id}})
      if(exist){
        exist.channel = client.id
        exist.save()
      }else{
        const model = ChannelEntity.create({
          channel: client.id,
          userId: user.id
        })
        await this.linkchannel.save(model)
      }
    })
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(payload: ShelduleEntity): Promise<void> {
    const channel = await this.linkchannel.findOne({where:{userId: payload.user.id}})
    if(channel)
      this.wss.to(channel.channel).emit('receiveMessage', payload);
    this.logger.debug('Não foi possivel localizar o canal do paciente');
  }
}
