/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import {
  BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
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

    @Column()
    public password: string

    @OneToMany(() => ShelduleEntity, (sheldule) => sheldule.user)
    public schedules!: ShelduleEntity[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default UserEntity;