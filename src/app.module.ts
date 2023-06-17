import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './aplication/users/users.module';
import ShelduleEntity from './domain/scheldule/entities/sheldule.entity';
import UserEntity from './domain/users/entities/user.entity';
import { ScheduleCustomModule } from './aplication/scheldule/scheldule.module';
import ChannelEntity from './domain/channels/entities/channel.entity';
import { ChannelModule } from './aplication/channels/channel.module';
import { TasksModule } from './aplication/tasks/tasks.module';
import { AuthenticatedModule } from './aplication/authenticated/authenticated.module';
import PatientEntity from './domain/patients/entities/patient.entity';
import { PatientModule } from './aplication/patients/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'scheldule_sus',
      entities: [ShelduleEntity, UserEntity, ChannelEntity, PatientEntity],
      synchronize: true,
    }),
    UserModule,
    ScheduleCustomModule,
    ChannelModule,
    TasksModule,
    AuthenticatedModule,
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
