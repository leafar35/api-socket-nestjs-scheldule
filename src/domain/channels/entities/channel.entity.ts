/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import UserEntity from 'src/domain/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  class ChannelEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public channel: string

    @OneToOne(() => UserEntity, (user) => user.user)
    @JoinColumn()
    public user: string
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default ChannelEntity;