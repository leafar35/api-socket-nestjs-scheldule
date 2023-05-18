/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
class Message {
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}

export default Message;
