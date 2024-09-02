import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entity/users.entity';
import { CreateUserDto, UserSingInDto } from './dto/user.dto';
import { CreateAddressDto } from './dto/address.dto';
import { Address } from './entity/address.entity';
import { JwtAuthGuard } from './jwt/jwt.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){};

    // 회원가입
    @Post('signup')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<void> {
        return this.usersService.signUp(createUserDto);
    }

    // 회원 정보
    @UseGuards(JwtAuthGuard)
    @Get('userinfo')
    userInfo(@Req() req): Promise<Users> {
        const userid = req.user.userid;
        return this.usersService.findOne(userid);
    }

    // 로그인
    @Post('signin')
    signIn(@Body() userSingInDto: UserSingInDto): Promise<{accessToken: string}> {
        return this.usersService.signIn(userSingInDto);
    }

    // 배송지생성
    @UseGuards(JwtAuthGuard)
    @Post('address/create')
    createAddress(
        @Req() req,
        @Body() createAddressDto: CreateAddressDto
    ): Promise<Address> {
        const userid = req.user.userid;
        createAddressDto.userid = userid;
        return this.usersService.createAddress(createAddressDto);
    }



}
