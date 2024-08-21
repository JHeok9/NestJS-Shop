import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional, IsDateString, IsEnum } from 'class-validator';

export class CreateAddressDto {
    @IsString()
    @IsNotEmpty()
    addr_name: string;

    @IsString()
    @IsNotEmpty()
    addr_recipient: string;
    
    @IsString()
    @IsNotEmpty()
    addr_num: string;

    @IsString()
    @IsNotEmpty()
    addr_basic: string;

    @IsString()
    @IsNotEmpty()
    addr_detail: string;

    @IsString()
    @IsNotEmpty()
    addr_phone: string;
}
