import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { tool } from '../utils/tool';
import { ArticleTagReferenced } from './ArticleTagReferenced';

@Index('tag_name', ['tagName'], { unique: true })
@Index('tag_alias_name', ['tagAliasName'], { unique: true })
@Entity('tag', { schema: 'blog' })
export class Tag {
  @PrimaryGeneratedColumn({ type: 'int', name: 'tag_id', comment: '标签ID' })
  public tagId: number;

  @Column('varchar', {
    name: 'tag_name',
    unique: true,
    comment: '标签名称',
    length: 64,
  })
  public tagName: string;

  @Column('varchar', {
    name: 'tag_alias_name',
    unique: true,
    comment: '标签别名',
    length: 64,
  })
  public tagAliasName: string;

  @Column('varchar', {
    name: 'description',
    nullable: true,
    comment: '标签描述',
    length: 128,
  })
  public description: string | null;

  @Column('datetime', {
    name: 'create_time',
    nullable: true,
    comment: '创建时间',
  })
  public createTime: Date | null;

  @OneToMany(() => ArticleTagReferenced, (articleTagReferenced) => articleTagReferenced.tag)
  public articleTagReferenceds: ArticleTagReferenced[];

  public toViewTag() {
    return {
      tagId: this.tagId,
      tagName: this.tagName,
      tagAliasName: this.tagAliasName,
      description: this.description,
      createTime: tool.formatDate(this.createTime),
    };
  }
}
