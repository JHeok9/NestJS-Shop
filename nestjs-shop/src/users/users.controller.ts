import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entity/users.entity';
import { CreateUserDto, UserSingInDto } from './dto/user.dto';
import { CreateAddressDto } from './dto/address.dto';
import { Address } from './entity/address.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){};

    // 회원가입
    @Post('signup')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.usersService.signUp(createUserDto);
    }

    // 회원 정보
    @Get('userinfo')
    userInfo(@Param('userid') userid: string): Promise<Users> {
        return this.usersService.findOne(userid);
    }

    // 로그인
    @Post('signin')
    signIn(@Body() userSingInDto: UserSingInDto): Promise<{accessToken: string}> {
        return this.usersService.signIn(userSingInDto);
    }

    // 배송지생성
    @Post('address/create')
    createAddress(@Body() createAddressDto: CreateAddressDto): Promise<Address> {
        return this.usersService.createAddress(createAddressDto);
    }



}
