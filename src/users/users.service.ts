import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { usersSearchParams } from '../types';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaModuleService) {}

  async getUsersData(dto: usersSearchParams) {
    try {
      const users = await this.prisma.users.findMany({
        where: {
          // id: +dto.id,
        },
      });
      users.map((user) => {
        delete user.password_hash;
      });
      return { data: users };
    } catch (error) {
      throw error;
    }
  }
}
