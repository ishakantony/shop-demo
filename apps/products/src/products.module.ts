import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Product]),
    LoggerModule,
    PrometheusModule.register(),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
