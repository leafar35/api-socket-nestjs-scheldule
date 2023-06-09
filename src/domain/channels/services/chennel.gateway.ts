/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Logger } from '@nestjs/common';
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

@WebSocketGateway({ cors: true })
export class ChennelGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private users = []
  private logger: Logger = new Logger('ChennelService');

  @WebSocketServer() wss: Server;

  afterInit() {
    this.logger.log('Initialized');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client Disconnected: ${client.id}`);
    const user = this.users.findIndex((object) => object.id === client.id)
    delete this.users[user]
  }

  handleConnection(client: Socket) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    this.logger.log(`Client Connected: ${client.id}`);
    client.on('username', function (data) {    
      that.users.push({
        id: client.id,
        email: data
      })
    })
  }

  @SubscribeMessage('sendMessage')
  async handleSendMessage(payload: ShelduleEntity): Promise<void> {
    this.wss.to(this.users[0].id).emit('receiveMessage', payload);
  }
}
