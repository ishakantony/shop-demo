import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ProductsRepository extends AbstractRepository<Product> {
  protected readonly logger = new Logger(ProductsRepository.name);

  constructor(
    @InjectRepository(Product)
    repository: Repository<Product>,
    entityManager: EntityManager,
  ) {
    super(repository, entityManager);
  }
}
