import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // 헤더로부터 토큰 추출하는 함수
        secretOrKey: "key1234",
        ignoreExpiration: false,
      });
    }


    async validate(payload) {
      return payload;
    }

}