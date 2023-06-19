import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newItem, editItem, deleteItem } from '../types';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaModuleService) {}

  async getItemsMainTable() {
    const items = await this.prisma.items_data.findMany();
    items.map((item) => {
      //@ts-ignore
      item.query_status = 'q';
    });
    return {
      data: items,
    };
  }

  async getItemsList() {
    const items = await this.prisma.items_data.findMany();
    const itemsList = [];
    items.map((item) => {
      const itemValue = {
        label: item.item_name,
        value: item.item_id,
      };
      itemsList.push(itemValue);
    });
    return itemsList;
  }

  async newItem(dto: newItem) {
    const existItem = await this.prisma.items_data.findMany({
      where: {
        item_name: dto.item_name,
      },
    });
    if (existItem.length === 0) {
      try {
        const newItem = await this.prisma.items_data.create({
          data: {
            item_name: dto.item_name,
            item_unit: dto.item_unit,
            item_description: dto.item_description,
          },
        });
        return {
          response: 'success',
          message: `Created Item ${newItem.item_name}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Item is exist',
      });
    }
  }

  async putItem(dto: editItem) {
    const existItem = await this.prisma.items_data.findUnique({
      where: {
        item_id: dto.item_id,
      },
    });
    if (existItem) {
      await this.prisma.items_data.update({
        where: {
          item_id: +dto.item_id,
        },
        data: {
          item_name: dto.item_name,
          item_unit: dto.item_unit,
          item_description: dto.item_description,
        },
      });
      return { response: 'success' };
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Item does not exist',
      });
    }
  }

  async deleteItem(dto: deleteItem) {
    const existItem = await this.prisma.items_data.findUnique({
      where: {
        item_id: dto.item_id,
      },
    });
    if (existItem) {
      await this.prisma.items_data.delete({
        where: {
          item_id: +dto.item_id,
        },
      });
      return { response: 'success' };
    } else {
    }
    throw new ForbiddenException({
      response: 'error',
      message: 'This Item does not exist',
    });
  }
}
