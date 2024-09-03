import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto, UserSingInDto } from './dto/user.dto';
import { plainToInstance } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAddressDto } from './dto/address.dto';
import { Address } from './entity/address.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>,
        @InjectRepository(Address) private addressRepository: Repository<Address>,
        private readonly jwtService: JwtService,
    ) {}

    // 회원가입
    async signUp(createUserDto: CreateUserDto): Promise<void>{
        
        // 비밀번호 해시
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        createUserDto.password = hashedPassword;

        const user = plainToInstance(Users, createUserDto);
        await this.usersRepository.save(user);
    }

    // 로그인 
    async signIn(userSingInDto: UserSingInDto): Promise<{accessToken: string}>{
        const {userid, password} = userSingInDto;
        const user = this.usersRepository.findOneBy({ userid });

        if(user && (await bcrypt.compare(password, (await user).password))){
            const payload = {userid};
            const accessToken = await this.jwtService.sign(payload);

            return {accessToken};
        } else {
            throw new UnauthorizedException('logIn failed')
        }
    }

    // 회원정보
    async findOne(userid: string): Promise<Users> {
        return this.usersRepository.findOne({
            select: ['seq', 'userid', 'name', 'nickname', 'birth', 'gender', 'phone', 'email', 'user_level'],
            where: {userid: userid}
        });
    }

    // 회원정보수정
    async modifyUser(updateUserDto: UpdateUserDto){
        const { userid, ...updateData } = updateUserDto;

        const result = await this.usersRepository.update(
            {userid: userid},
            updateData
        )

        if(result.affected > 0){
            return "성공";
        }else{
            return "실패";
        }
        
    }

    // 배송지생성
    async createAddress(createAddressDto: CreateAddressDto): Promise<Address> {
        return this.addressRepository.save(createAddressDto);
    }

    // 배송지목록
    async addressFindAll(userid: string): Promise<Address[]>{
        return this.addressRepository.find({where: {userid: userid}});
    }

    // 배송지삭제
    async deleteAddress(seq: number){
        const result = await this.addressRepository.delete(seq);
        return result.affected > 0;
    }



}
