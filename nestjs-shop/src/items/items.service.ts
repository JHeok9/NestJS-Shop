import { Injectable } from '@nestjs/common';
import { Items } from './entity/items.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/item.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items) private itemsRepository: Repository<Items>,
    ) {}

    async createItem(createItemDto: CreateItemDto) {
        await this.itemsRepository.save(createItemDto);

    }

}
