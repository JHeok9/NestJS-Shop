import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional, IsDateString, IsEnum } from 'class-validator';

export class UserSingInDto {
    @IsString()
    @IsNotEmpty()
    userid: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)  // 비밀번호는 최소 8자리
    password: string;
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    userid: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)  // 비밀번호는 최소 8자리
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    nickname: string;

    @IsString()
    @IsNotEmpty()
    birth: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsEmail()  // 이메일 형식 검증
    email: string;

    @IsString()
    @IsNotEmpty()
    terms_agreement: string;

    @IsString()
    @IsNotEmpty()
    privacy_agreement: string;

    @IsOptional()  // 프로필 이미지는 선택 사항
    @IsString()
    profile_img?: string;

    @IsOptional()  // sns 필드는 선택 사항
    @IsString()
    sns?: string;
}
