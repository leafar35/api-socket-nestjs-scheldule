/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import PatientEntity from 'src/domain/patients/entities/patient.entity';
import ShelduleEntity from 'src/domain/scheldule/entities/sheldule.entity';
import {
  BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
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
    public email: string

    @Column()
    public cellphone: string

    @Column()
    public password: string

    @OneToOne(() => PatientEntity, (patient) => patient.user)
    @JoinColumn()
    public patient: PatientEntity;

    @OneToMany(() => ShelduleEntity, (sheldule) => sheldule.user)
    public schedules!: ShelduleEntity[];
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default UserEntity;