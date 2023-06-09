import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Discuss } from './Discuss';

@Index('email', ['email'], { unique: true })
@Entity('users', { schema: 'blog' })
export class Users {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'user_Id',
    comment: '用户ID',
  })
  public userId: number;

  @Column('varchar', {
    name: 'user_nickname',
    nullable: true,
    comment: '用户昵称',
    length: 128,
  })
  public userNickname: string | null;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    comment: '用户邮箱',
    length: 64,
  })
  public email: string | null;

  @Column('datetime', {
    name: 'create_time',
    nullable: true,
    comment: '注册时间',
  })
  public createTime: Date | null;

  @OneToMany(() => Discuss, (discuss) => discuss.userId2)
  public discusses: Discuss[];
}
