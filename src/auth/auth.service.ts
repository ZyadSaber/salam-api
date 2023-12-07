import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { singUpType, singInType, getPages } from 'src/types';
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
          // dto:
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
    display_name?: string;
    build_name?: string;
    role?: string;
    app_name?: string;
    user_name?: string;
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
      display_name: first_name,
      build_name: this.config.get('BUILD_NUMBER'),
      role: 'admin',
      app_name: this.config.get('APP_NAME'),
      user_name: user_name,
    };
  }

  async getUsers() {
    const users = await this.prisma.users.findMany();
    users.map((user) => {
      delete user.password_hash;
    });
    return { data: users };
  }

  async getUserPage(dto: { user_name: string }) {
    const data = await this.prisma.user_permissions.findMany({
      where: {
        AND: [
          {
            users: {
              user_name: dto.user_name,
            },
          },
          {
            app_pages: {
              page_disabled: 'N',
            },
          },
          { status: true },
        ],
      },
      select: {
        app_pages: {
          select: {
            page_id: true,
            page_name: true,
            page_link: true,
            page_disabled: true,
            page_icon: true,
            run_in_modal: true,
            page_parent: {
              select: {
                page_parent_id: true,
                page_parent_name: true,
                hidden: true,
              },
            },
          },
        },
      },
    });

    let pageParent = [];

    data.map((e) => {
      pageParent.push({
        page_parent_id: e.app_pages.page_parent.page_parent_id,
        page_parent_name: e.app_pages.page_parent.page_parent_name,
        app_pages: [],
      });
    });

    pageParent = pageParent.filter((obj, index) => {
      return (
        index ===
        pageParent.findIndex((o) => obj.page_parent_id === o.page_parent_id)
      );
    });

    pageParent.sort((a, b) => a.page_parent_id - b.page_parent_id);

    pageParent.map((e, index) => {
      data.map((p) => {
        if (p.app_pages.page_parent.page_parent_id === e.page_parent_id) {
          pageParent[index].app_pages.push({
            page_disabled: p.app_pages.page_disabled,
            page_name: p.app_pages.page_name,
            page_icon: p.app_pages.page_icon,
            page_link: `${p.app_pages.page_link}`,
            run_in_modal: p.app_pages.run_in_modal,
            page_id: p.app_pages.page_id,
          });
        }
      });
    });

    return pageParent;
  }

  async updatePagesPermissions(dto) {
    const computedPages = await dto.map((record) => {
      record.status = record.status === 'Y' ? true : false;
      delete record.page_name;
      delete record.page_link;
      return record;
    });
    const updatedData = await computedPages.map((record) => {
      console.log(record);
      this.prisma.user_permissions.update({
        where: {
          user_permissions_id: +record.user_permissions_id,
        },
        data: {
          status: record.status,
        },
      });
    });
    return { response: 'success' };
  }
}
