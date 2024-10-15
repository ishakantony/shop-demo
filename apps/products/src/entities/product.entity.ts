import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  name: string;

  @Column()
  price: number;
}
