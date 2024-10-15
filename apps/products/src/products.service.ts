import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = new Product({
      ...createProductDto,
    });
    return this.productsRepository.create(newProduct);
  }

  async findAll() {
    return this.productsRepository.find({});
  }

  async findOne(id: number) {
    return this.productsRepository.findOne({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepository.findOneAndUpdate({ id }, updateProductDto);
  }

  async remove(id: number) {
    return this.productsRepository.findOneAndDelete({ id });
  }
}
