import { Body, Controller, Delete, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entity/users.entity';
import { CreateUserDto, UpdateUserDto, UserSingInDto } from './dto/user.dto';
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

    // 로그인
    @Post('signin')
    signIn(@Body() userSingInDto: UserSingInDto): Promise<{accessToken: string}> {
        return this.usersService.signIn(userSingInDto);
    }    

    // 회원정보
    @UseGuards(JwtAuthGuard)
    @Get('userinfo')
    userInfo(@Req() req): Promise<Users> {
        const userid = req.user.userid;
        return this.usersService.findOne(userid);
    }

    // 회원정보수정
    @UseGuards(JwtAuthGuard)
    @Patch('modifyUser')
    async modifyUser(
        @Req() req,
        @Body() updateUserDto: UpdateUserDto
    ){
        updateUserDto.userid = req.user.userid;
        return this.usersService.modifyUser(updateUserDto);
    }

    // 회원등급변경
    @UseGuards(JwtAuthGuard)
    @Patch('modifylevel')
    async modifyLevel(
        @Req() req,
        @Body() updateUserDto: UpdateUserDto
    ){
        return this.usersService.modifyLevel(req.user.userid, updateUserDto);
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

    // 배송지목록
    @UseGuards(JwtAuthGuard)
    @Get('address/list')
    addressList(@Req() req): Promise<Address[]>{
        const userid = req.user.userid;
        return this.usersService.addressFindAll(userid);
    }

    // 배송지삭제
    @UseGuards(JwtAuthGuard)
    @Delete('address/delete')
    deleteAddress(@Body() seq: number) {
        return this.usersService.deleteAddress(seq);
    }

}
