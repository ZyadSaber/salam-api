import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { singUpType, singInType } from 'src/types';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaModuleService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: singUpType) {
    //generate the password hash
    const passwordHash = await argon.hash(dto.password);

    //save the new user to the database
    try {
      const saveUser = await this.prisma.users.create({
        data: {
          user_name: dto.user_name,
          password_hash: passwordHash,
          first_name: dto.first_name,
          last_name: dto.last_name,
        },
      });

      //return the new user
      return this.signToken(
        saveUser.id,
        saveUser.user_name,
        saveUser.first_name,
      );
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('user_name already in use');
        }
      }
      throw error;
    }
  }

  async signIn(dto: singInType) {
    const user = await this.prisma.users.findFirst({
      where: {
        user_name: dto.user_name,
      },
    });
    if (!user) {
      throw new ForbiddenException('Incorrect user_name or password');
    }
    const pwMatch = await argon.verify(user.password_hash, dto.password);

    if (!pwMatch) {
      throw new ForbiddenException('Incorrect user_name or password');
    }

    return this.signToken(user.id, user.user_name, user.first_name);
  }
  async signToken(
    userId: number,
    user_name: string,
    first_name: string,
  ): Promise<{
    authorization: string;
    response?: string;
    first_name?: string;
  }> {
    const payLoad = {
      sub: userId,
      user_name,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payLoad, {
      expiresIn: '30d',
      secret: secret,
    });

    return {
      response: 'success',
      authorization: token,
      first_name: first_name,
    };
  }
}
