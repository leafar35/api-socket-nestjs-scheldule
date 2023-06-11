/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  class ChannelEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public channel: string

    @Column()
    public userId: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default ChannelEntity;