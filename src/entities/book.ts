import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity
} from "typeorm"

@Entity("book")
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  nombre: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  autor: string;

  @Column()
  editorial: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
