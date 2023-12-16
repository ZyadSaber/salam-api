import { ForbiddenException, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newPagesParentName,
  updatedPagesParentName,
  deletePagesParentName,
} from '../types';

@Injectable()
export class PagesParentPageService {
  constructor(private prisma: PrismaModuleService) {}

  async getPagesParentMainTable(params: {page_parent_name?:string, hidden?: string }) {
    const {page_parent_name, hidden} = params
    const pagesParentData = await this.prisma.page_parent.findMany({
      where:{
        page_parent_name: {
          contains: page_parent_name || undefined
        },
        hidden: {
          contains: hidden || undefined
        }
      }
    });
    const computedArray = pagesParentData.map((record) => {
      const obj = {
        ...record,
        updated_at: format(record.updated_at, 'yyyy-MM-dd hh:mm aa'),
        created_at: format(record.created_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q',
      };
      return obj;
    });
    return {
      data: computedArray,
    };
  }

  async newPagesParent(dto: newPagesParentName) {
    try {
      const newPagesParent = await this.prisma.page_parent.create({
        data: {
          page_parent_name: dto.page_parent_name,
          hidden: dto.hidden,
        },
      });
      return {
        response: 'success',
        message: `Created Page Parent ${newPagesParent.page_parent_name} @ ${newPagesParent.created_at}`,
      };
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async editPagesParent(dto: updatedPagesParentName) {
    try {
      const updatedRecord = await this.prisma.page_parent.update({
        where: {
          page_parent_id: +dto.page_parent_id,
        },
        data: {
          page_parent_name: dto.page_parent_name,
          hidden: dto.hidden,
        },
      });
      return {
        response: 'success',
        message: `Updated Page Parent ${updatedRecord.page_parent_name} @ ${updatedRecord.updated_at}`,
      };
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async deletePagesParent(dto: deletePagesParentName) {
    try {
      await this.prisma.page_parent.delete({
        where: {
          page_parent_id: +dto.page_parent_id,
        },
      });
      return { response: 'success' };
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
