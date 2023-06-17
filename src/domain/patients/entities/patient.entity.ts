/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import UserEntity from 'src/domain/users/entities/user.entity';
import {
  BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  class PatientEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column()
    public name: string

    @Column()
    public cpf: string
  
    @Column()
    public dateofbirth: string

    @Column()
    public zipcode: string

    @Column()
    public neighborhood: string

    @Column()
    public address: string

    @Column()
    public number: number

    @Column()
    public complement: string

    @OneToOne(() => UserEntity, (user) => user.patient, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      cascade: true
    })
    public user: UserEntity;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
  }
  
  export default PatientEntity;