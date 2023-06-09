/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import ChannelEntity from 'src/domain/channels/entities/channel.entity';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import {
  BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public name: string
  
    @Column()
    public email: string

    @Column()
    public cellphone: string

    @OneToMany(() => ShelduleEntity, (sheldule) => sheldule.user)
    public schedules!: ShelduleEntity[];

    @OneToOne(() => ChannelEntity, (channel) => channel.user)
    public user!: ChannelEntity;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default UserEntity;