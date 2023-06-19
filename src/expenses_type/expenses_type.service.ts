import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newExpensesType,
  editExpensesType,
  deleteExpensesType,
} from '../types';

@Injectable()
export class ExpensesTypeService {
  constructor(private prisma: PrismaModuleService) {}

  async getExpensesTypeData() {
    const expenseTypes = await this.prisma.expense_types.findMany();
    expenseTypes.map((printOption) => {
      //@ts-ignore
      printOption.query_status = 'q';
    });
    return {
      data: expenseTypes,
    };
  }

  async newExpensesType(dto: newExpensesType) {
    const existExpensesType = await this.prisma.expense_types.findMany({
      where: {
        expense_type_name: dto.expense_type_name,
      },
    });
    if (existExpensesType.length === 0) {
      try {
        const newPrintOption = await this.prisma.expense_types.create({
          data: {
            expense_type_name: dto.expense_type_name,
            expense_type_note: dto.expense_type_note,
          },
        });
        return {
          response: 'success',
          message: `Created Expense Type ${newPrintOption.expense_type_name}`,
        };
      } catch (error) {
        throw error;
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Expense Type is exist',
      });
    }
  }

  async editExpensesType(dto: editExpensesType) {
    const existPrintOption = await this.prisma.expense_types.findUnique({
      where: {
        expense_type_id: dto.expense_type_id,
      },
    });
    if (existPrintOption) {
      await this.prisma.expense_types.update({
        where: {
          expense_type_id: +dto.expense_type_id,
        },
        data: {
          expense_type_name: dto.expense_type_name,
          expense_type_note: dto.expense_type_note,
        },
      });
      return { response: 'success' };
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Expense Type is not exist',
      });
    }
  }

  async DeleteExpensesType(dto: deleteExpensesType) {
    const existPrintOption = await this.prisma.expense_types.findUnique({
      where: {
        expense_type_id: dto.expense_type_id,
      },
    });
    if (existPrintOption) {
      await this.prisma.expense_types.delete({
        where: {
          expense_type_id: +dto.expense_type_id,
        },
      });
      return { response: 'success' };
    } else {
    }
    throw new ForbiddenException({
      response: 'error',
      message: 'This Expense Type is not exist',
    });
  }
}
