import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    userid : string;

    @IsNumber()
    @IsNotEmpty()
    category_seq: number;

    @IsString()
    @IsNotEmpty()
    main_category: string;

    @IsString()
    @IsNotEmpty()
    mid_category: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsOptional()
    @IsNumber()
    sale_price?: number;

    @IsNumber()
    @IsNotEmpty()
    cnt: number;
    
    @IsOptional()
    @IsString()
    img1?: number;

    @IsOptional()
    @IsString()
    img2?: number;

    @IsOptional()
    @IsString()
    img3?: number;

    @IsOptional()
    @IsString()
    img4?: number;

    @IsOptional()
    @IsString()
    img5?: number;
}
