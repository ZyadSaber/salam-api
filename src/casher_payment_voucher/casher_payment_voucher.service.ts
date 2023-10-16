import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newPaymentVoucher,
  editPaymentVoucher,
  deletePaymentVoucher,
  paramsPaymentType,
} from '../types';

@Injectable()
export class CasherPaymentVoucherService {
  constructor(
    private prisma: PrismaModuleService,
  ) {}

  async getMainTable(params: paramsPaymentType) {
    const calculatedDateFrom = new Date(params.date_from);
    calculatedDateFrom.setHours(0, 0, 0, 0);

    const getRecords = await this.prisma.cash_payment_voucher.findMany({
      where: {
        voucher_date: {
          gte: params.date_from ? calculatedDateFrom : undefined,
          lte: params.date_from ? new Date(params.date_to) : undefined,
        },
      },
      select: {
        voucher_date: true,
        customers_data: {
          select: {
            customer_name: true,
            customer_id: true
          },
        },
        suppliers_data: {
          select: {
            supplier_name: true,
            supplier_id: true
          },
        },
        expense_types: {
          select: {
            expense_type_name: true,
            expense_type_id: true
          },
        },
        voucher_amount: true,
        updated_at: true,
        created_at: true,
        payment_voucher_id: true,
        notes: true,
      },
    });
    getRecords.forEach((record) => {
      //@ts-ignore
      record.voucher_date = `${record.voucher_date.getFullYear()}-${
        record.voucher_date.getMonth() + 1
      }-${record.voucher_date.getDate()}`;
      if (record.customers_data) {
        //@ts-ignore
        record.voucher_type_name = 'Customer';
        //@ts-ignore
        record.voucher_id = record.customers_data.customer_id;
        //@ts-ignore
        record.voucher_type = 'C';
        //@ts-ignore
        record.voucher_name = record.customers_data.customer_name;
        delete record.customers_data;
        delete record.suppliers_data;
        delete record.expense_types;
      } else if (record.suppliers_data) {
        //@ts-ignore
        record.voucher_type_name = 'Supplier';
        //@ts-ignore
        record.voucher_type = 'S';
        //@ts-ignore
        record.voucher_id = record.suppliers_data.supplier_id;
        //@ts-ignore
        record.voucher_name = record.suppliers_data.supplier_name;
        delete record.customers_data;
        delete record.suppliers_data;
        delete record.expense_types;
      } else if (record.expense_types) {
        //@ts-ignore
        record.voucher_name = record.expense_types.expense_type_name;
        //@ts-ignore
        record.voucher_type_name = 'Expense';
        //@ts-ignore
        record.voucher_id = record.expense_types.expense_type_id;
        //@ts-ignore
        record.voucher_type = 'O';
        delete record.customers_data;
        delete record.suppliers_data;
        delete record.expense_types;
        //@ts-ignore
        record.query_status = 'q';
      }
    });
    return { data: getRecords };
  }

  async newPaymentVoucher(dto: newPaymentVoucher) {
    if (dto.voucher_type === 'C') {
      try {
        await this.prisma.cash_payment_voucher.create({
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
        await this.prisma.cash_payment_voucher.create({
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
    } else if (dto.voucher_type === 'O') {
      try {
        await this.prisma.cash_payment_voucher.create({
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            notes: dto.notes,
            expense_type_id: dto.voucher_id,
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

  async editPaymentVoucher(dto: editPaymentVoucher) {
    const existVoucher = await this.prisma.cash_payment_voucher.findUnique({
      where: {
        payment_voucher_id: dto.payment_voucher_id,
      },
    });
    if (existVoucher) {
      if (existVoucher.customer_id) {
        await this.prisma.cash_payment_voucher.update({
          where: {
            payment_voucher_id: +dto.payment_voucher_id,
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
        await this.prisma.cash_payment_voucher.update({
          where: {
            payment_voucher_id: +dto.payment_voucher_id,
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
        await this.prisma.cash_payment_voucher.update({
          where: {
            payment_voucher_id: +dto.payment_voucher_id,
          },
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            notes: dto.notes,
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

  async deletePaymentVoucher(dto: deletePaymentVoucher) {
    const existVoucher = await this.prisma.cash_payment_voucher.findUnique({
      where: {
        payment_voucher_id: dto.payment_voucher_id,
      },
    });
    if (existVoucher) {
      await this.prisma.cash_payment_voucher.delete({
        where: {
          payment_voucher_id: +dto.payment_voucher_id,
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
