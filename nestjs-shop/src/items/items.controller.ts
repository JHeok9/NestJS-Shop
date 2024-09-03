import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { JwtAuthGuard } from 'src/users/jwt/jwt.guard';
import { CreateItemDto } from './dto/item.dto';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService){};

    // 상품 등록
    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createItem(@Req() req, @Body() createItemDto: CreateItemDto) {
        createItemDto.userid = req.user.userid;
        return this.itemsService.createItem(createItemDto);
    }

}
