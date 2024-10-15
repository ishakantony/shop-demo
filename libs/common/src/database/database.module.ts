import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import * as Joi from 'joi';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          validationSchema: Joi.object({
            MYSQL_HOST: Joi.string().required(),
            MYSQL_PORT: Joi.number().required(),
            MYSQL_DATABASE: Joi.string().required(),
            MYSQL_USERNAME: Joi.string().required(),
            MYSQL_PASSWORD: Joi.string().required(),
            MYSQL_SYNCHRONIZE: Joi.boolean().required(),
          }),
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('MYSQL_HOST'),
        port: configService.get('MYSQL_PORT'),
        database: configService.get('MYSQL_DATABASE'),
        username: configService.get('MYSQL_USERNAME'),
        password: configService.get('MYSQL_PASSWORD'),
        synchronize: configService.get('MYSQL_SYNCHRONIZE'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(models);
  }
}
