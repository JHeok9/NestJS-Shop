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
    img1?: string;

    @IsOptional()
    @IsString()
    img2?: string;

    @IsOptional()
    @IsString()
    img3?: string;

    @IsOptional()
    @IsString()
    img4?: string;

    @IsOptional()
    @IsString()
    img5?: string;
}
