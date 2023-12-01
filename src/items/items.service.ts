import { ForbiddenException, Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { newItem, editItem, deleteItem } from '../types';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaModuleService) {}

  async getItemsMainTable(param?: any) {
    const { item_name, item_unit, item_description } = param;
    const items = await this.prisma.items_data.findMany({
      where: {
        item_name: {
          contains: item_name || undefined,
        },
        item_unit: {
          contains: item_unit || undefined,
        },
        item_description: {
          contains: item_description || undefined,
        },
      },
    });
    const computedItems = items.map((item) => {
      const obj = {
        ...item,
        created_at: format(item.created_at, 'yyyy-MM-dd hh:mm aa'),
        updated_at: format(item.updated_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q',
      };
      return obj;
    });
    return {
      data: computedItems,
    };
  }

  async getItemsList() {
    const items = await this.prisma.items_data.findMany();
    const computedItems = items.map((item) => {
      const obj = {
        label: item.item_name,
        value: item.item_id,
        item_price: item.item_price,
      };
      return obj;
    });
    return computedItems;
  }

  async newItem(dto: newItem) {
    try {
      const newItem = await this.prisma.items_data.create({
        data: {
          item_name: dto.item_name,
          item_unit: dto.item_unit,
          item_description: dto.item_description,
          item_price: dto.item_price,
        },
      });
      return {
        response: 'success',
        message: `Created Item ${newItem.item_name}`,
      };
    } catch (error) {
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
    }
  }

  async putItem(dto: editItem) {
    try {
      await this.prisma.items_data.update({
        where: {
          item_id: +dto.item_id,
        },
        data: {
          item_name: dto.item_name,
          item_unit: dto.item_unit,
          item_description: dto.item_description,
          item_price: dto.item_price,
        },
      });
      return { response: 'success' };
    } catch (error) {
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
    }
  }

  async deleteItem(dto: deleteItem) {
    try {
      await this.prisma.items_data.delete({
        where: {
          item_id: +dto.item_id,
        },
      });
      return { response: 'success' };
    } catch (error) {
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
    }
  }
}
