import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Address } from './entity/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Address]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: "key1234",
      signOptions:{
        expiresIn: 3600,
      }
    })
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule {}
