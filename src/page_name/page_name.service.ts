import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newPageName, editPageName, deletePageName } from '../types';

@Injectable()
export class PageNameService {
  constructor(private prisma: PrismaModuleService) {}

  async getPageNameMainTable() {
    const pageNames = await this.prisma.app_pages.findMany({
      orderBy: {
        page_id: 'asc',
      },
      include: {
        page_parent: {
          select: {
            page_parent_name: true,
          },
        },
      },
    });
    pageNames.map((pageName) => {
      //@ts-ignore
      pageName.query_status = 'q';
      //@ts-ignore
      pageName.page_parent_name = pageName.page_parent
        ? pageName.page_parent.page_parent_name
        : '';
      delete pageName.page_parent;
    });
    return {
      data: pageNames,
    };
  }

  async newPageName(dto: newPageName) {
    const existPageLinkName = await this.prisma.app_pages.findMany({
      where: {
        page_name: dto.page_name,
      },
    });
    const existPageLinkUrl = await this.prisma.app_pages.findMany({
      where: {
        page_link: dto.page_link,
      },
    });
    if (existPageLinkName.length === 0 && existPageLinkUrl.length === 0) {
      try {
        const newPageName = await this.prisma.app_pages.create({
          data: {
            page_name: dto.page_name,
            page_link: dto.page_link,
            page_disabled: dto.page_disabled,
            run_in_modal: dto.run_in_modal,
            page_parent_id: dto.page_parent_id,
          },
        });
        // await this.prisma.$queryRaw`
        //   do
        //   $$
        //   declare
        //   f record;
        //   begin
        //   for f in select id
        //     from users
        //   loop
        //   INSERT INTO user_permissions (
        // 	  user_id,
        //     page_id,
        //     status
        //   )VALUES(
        //     f.id,
        //     ${newPageName.page_id},
        //     false
        //   );
        // end loop;
        // end;
        // $$;
        // `;
        return {
          response: 'success',
          message: `Created Page Name ${newPageName.page_name}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Page Name is exist',
      });
    }
  }

  async editPageName(dto: editPageName) {
    const existPageName = await this.prisma.app_pages.findUnique({
      where: {
        page_id: dto.page_id,
      },
    });
    if (existPageName) {
      await this.prisma.app_pages.update({
        where: {
          page_id: +dto.page_id,
        },
        data: {
          page_name: dto.page_name,
          page_link: dto.page_link,
          page_disabled: dto.page_disabled,
          run_in_modal: dto.run_in_modal,
          page_parent_id: +dto.page_parent_id,
        },
      });
      return { response: 'success' };
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Page Name does not exist',
      });
    }
  }

  async deletePageName(dto: deletePageName) {
    await this.prisma.user_permissions.deleteMany({
      where: {
        page_id: +dto.page_id,
      },
    });
    const existCustomer = await this.prisma.app_pages.findUnique({
      where: {
        page_id: +dto.page_id,
      },
    });
    if (existCustomer) {
      await this.prisma.app_pages.delete({
        where: {
          page_id: +dto.page_id,
        },
      });
      return { response: 'success' };
    } else {
    }
    throw new ForbiddenException({
      response: 'error',
      message: 'This Page Name does not exist',
    });
  }

  async getLinkedPages(dto: { user_id: number }) {
    const data = await this.prisma.user_permissions.findMany({
      where: {
        user_id: +dto.user_id,
      },
      include: {
        app_pages: {
          select: {
            page_name: true,
            page_link: true,
          },
        },
      },
    });

    data.forEach((record) => {
      //@ts-ignore
      record.page_name = record.app_pages.page_name;
      //@ts-ignore
      record.page_link = record.app_pages.page_link;
      //@ts-ignore
      record.status = record.status ? 'Y' : 'N';
      delete record.app_pages;
    });

    return data;
  }
}
