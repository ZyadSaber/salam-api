import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newPageName, editPageName, deletePageName } from '../types';

@Injectable()
export class PageNameService {
  constructor(private prisma: PrismaModuleService) {}

  async getPageNameMainTable() {
    const pageNames = await this.prisma.app_pages.findMany();
    pageNames.map((pageName) => {
      //@ts-ignore
      pageName.query_status = 'q';
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
            parent_name: dto.parent_name,
          },
        });
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
          parent_name: dto.parent_name,
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
}
