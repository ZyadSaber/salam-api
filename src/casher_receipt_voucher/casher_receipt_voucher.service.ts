import { ForbiddenException, Injectable } from '@nestjs/common';
import { add, format } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  paramsType,
  newReceiptVoucher,
  editReceiptVoucher,
  deleteReceiptVoucher,
} from '../types';

@Injectable()
export class CasherReceiptVoucherService {
  constructor(private prisma: PrismaModuleService) {}

  async getMainTable(params: paramsType) {
    const { date_from, date_to } = params;
    const calculatedDateFrom = add(new Date(date_from), {
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    const calculatedDateTo = add(new Date(date_to), {
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
    const getRecords = await this.prisma.cash_receipt_voucher.findMany({
      where: {
        voucher_date: {
          gte: date_from ? calculatedDateFrom : undefined,
          lte: date_to ? calculatedDateTo : undefined,
        },
      },
      select: {
        voucher_date: true,
        customers_data: {
          select: {
            customer_name: true,
            customer_id: true,
          },
        },
        suppliers_data: {
          select: {
            supplier_name: true,
            supplier_id: true,
          },
        },
        expense_types: {
          select: {
            expense_type_name: true,
            expense_type_id: true,
          },
        },
        voucher_amount: true,
        updated_at: true,
        created_at: true,
        receipt_voucher_id: true,
        notes: true,
      },
    });

    const Records = getRecords.map((record) => {
      const {
        customers_data,
        voucher_date,
        created_at,
        updated_at,
        suppliers_data,
        expense_types,
        voucher_amount,
        notes,
      } = record;
      const obj = {
        voucher_date: format(voucher_date, 'yyyy-MM-dd'),
        voucher_type_name: '',
        voucher_id: 0,
        voucher_type: '',
        voucher_name: '',
        voucher_amount,
        notes,
        created_at: format(created_at, 'yyyy-MM-dd hh:mm aa'),
        updated_at: format(updated_at, 'yyyy-MM-dd hh:mm aa'),
        query_status: 'q',
      };
      if (customers_data) {
        const { customer_id, customer_name } = customers_data;
        obj.voucher_type_name = 'Customer';
        obj.voucher_id = customer_id;
        obj.voucher_type = 'C';
        obj.voucher_name = customer_name;
      } else if (suppliers_data) {
        const { supplier_id, supplier_name } = suppliers_data;
        obj.voucher_type_name = 'Supplier';
        obj.voucher_type = 'S';
        obj.voucher_id = supplier_id;
        obj.voucher_name = supplier_name;
      } else if (expense_types) {
        const { expense_type_name, expense_type_id } = expense_types;
        obj.voucher_name = expense_type_name;
        obj.voucher_type_name = 'Expense';
        obj.voucher_id = expense_type_id;
        obj.voucher_type = 'O';
      }
      return obj;
    });
    return { data: Records };
  }

  async newReceiptVoucher(dto: newReceiptVoucher) {
    if (dto.voucher_type === 'C') {
      try {
        await this.prisma.cash_receipt_voucher.create({
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            customer_id: dto.voucher_id,
            notes: dto.notes,
          },
        });
        return {
          response: 'success',
        };
      } catch (error) {
        throw error;
      }
    } else if (dto.voucher_type === 'S') {
      try {
        await this.prisma.cash_receipt_voucher.create({
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            supplier_id: dto.voucher_id,
            notes: dto.notes,
          },
        });
        return {
          response: 'success',
        };
      } catch (error) {
        throw error;
      }
    } else {
      try {
        await this.prisma.cash_receipt_voucher.create({
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            notes: dto.notes,
            expense_type_id: dto.voucher_id ? dto.voucher_id : null,
          },
        });
        return {
          response: 'success',
        };
      } catch (error) {
        throw error;
      }
    }
  }

  async editReceiptVoucher(dto: editReceiptVoucher) {
    const existVoucher = await this.prisma.cash_receipt_voucher.findUnique({
      where: {
        receipt_voucher_id: dto.receipt_voucher_id,
      },
    });
    if (existVoucher) {
      if (existVoucher.customer_id) {
        await this.prisma.cash_receipt_voucher.update({
          where: {
            receipt_voucher_id: +dto.receipt_voucher_id,
          },
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            customer_id: dto.voucher_id,
            notes: dto.notes,
          },
        });
        return { response: 'success' };
      } else if (existVoucher.supplier_id) {
        await this.prisma.cash_receipt_voucher.update({
          where: {
            receipt_voucher_id: +dto.receipt_voucher_id,
          },
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            supplier_id: dto.voucher_id,
            notes: dto.notes,
          },
        });
        return { response: 'success' };
      } else {
        await this.prisma.cash_receipt_voucher.update({
          where: {
            receipt_voucher_id: +dto.receipt_voucher_id,
          },
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            notes: dto.notes,
            expense_type_id: dto.voucher_id ? dto.voucher_id : null,
          },
        });
        return { response: 'success' };
      }
    } else {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Customer does not exist',
      });
    }
  }

  async deleteReceiptVoucher(dto: deleteReceiptVoucher) {
    const existVoucher = await this.prisma.cash_receipt_voucher.findUnique({
      where: {
        receipt_voucher_id: dto.receipt_voucher_id,
      },
    });
    if (existVoucher) {
      await this.prisma.cash_receipt_voucher.delete({
        where: {
          receipt_voucher_id: +dto.receipt_voucher_id,
        },
      });
      return { response: 'success' };
    } else {
    }
    throw new ForbiddenException({
      response: 'error',
      message: 'This Customer does not exist',
    });
  }
}
