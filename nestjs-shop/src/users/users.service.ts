import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Users } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UserSingInDto } from './dto/user.dto';
import { plainToInstance } from 'class-transformer';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    // 유저 정보 가져오기
    findOne(userid: string): Promise<Users> {
        const user = this.usersRepository.findOne({
            select: ['seq', 'userid', 'name', 'nickname', 'birth', 'gender', 'phone', 'email', 'user_level'],
            where: {userid: userid}
        });

        if(!user) {
            throw new NotFoundException(`user id ${userid} not found`);
        }
        return user;
    }

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
    async signIn(userSingInDto: UserSingInDto): Promise<string>{
        const {userid, password} = userSingInDto;
        const user = this.usersRepository.findOneBy({ userid });

        if(user && (await bcrypt.compare(password, (await user).password))){
            return "로그인성공";
        } else {
            throw new UnauthorizedException('logIn failed')
        }
    }


}
