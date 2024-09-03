import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Items } from './entity/items.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/item.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items) private itemsRepository: Repository<Items>,
        private readonly usersService: UsersService,
    ) {}

    async createItem(createItemDto: CreateItemDto) {
        try {
            const user_info = await this.usersService.findOne(createItemDto.userid);
            if(user_info.user_level == "seller"){
                const result = await this.itemsRepository.save(createItemDto);
                if(result){
                    return "성공";
                }else{
                    return "실패";
                }
            }else{
                return "판매자가 아닙니다."
            }

            
        } catch (error) {
            throw new InternalServerErrorException('실패');
        }
    }

}
