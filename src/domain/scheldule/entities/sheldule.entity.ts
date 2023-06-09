/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import UserEntity from 'src/domain/users/entities/user.entity';
import {
  BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  class ShelduleEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public title: string
  
    @Column()
    public category: string
  
    @Column()
    public localization: string
  
    @Column()
    public schedule: string;

    @Column()
    public appear: boolean

    @ManyToOne(() => UserEntity, (user) => user.schedules)
    @JoinColumn()
    public user: UserEntity;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default ShelduleEntity;