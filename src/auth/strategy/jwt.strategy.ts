import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaModuleService } from '../..//prisma-module/prisma-module.service';

@Injectable()
export class JwrStrategy extends PassportStrategy(Strategy) {
  constructor(config: ConfigService, private prisma: PrismaModuleService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: payload.sub,
      },
    });
    delete user.password_hash;
    return user;
  }
}
