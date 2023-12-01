import { ForbiddenException, Injectable } from '@nestjs/common';
import {format} from "date-fns"
import { PrismaModuleService } from '../prisma-module/prisma-module.service'
import {
  newExpensesType,
  editExpensesType,
  deleteExpensesType,
  expensesTypeSearchParams
} from '../types';

@Injectable()
export class ExpensesTypeService {
  constructor(private prisma: PrismaModuleService) {}

  async getExpensesTypeData(param?: expensesTypeSearchParams) {
    const {expense_type_name, expense_type_note} = param
    const expenseTypes = await this.prisma.expense_types.findMany({
      where:{
        expense_type_name: {
          contains: expense_type_name || undefined
        },
        expense_type_note: {
          contains: expense_type_note || undefined
        }
      }
    });
    const computedExpenseTypes = expenseTypes.map((printOption) => {
      const obj = {
        ...printOption,
        created_at: format(printOption.created_at, 'yyyy-MM-dd hh:mm aa'),
        updated_at: format(printOption.updated_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q'
      }
      format(printOption.created_at, 'yyyy-MM-dd hh:mm:ss aa')
      return obj
    });
    return {
      data: computedExpenseTypes,
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
