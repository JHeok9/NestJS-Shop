import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Items } from './entity/items.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Items]),
    UsersModule,
  ],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
