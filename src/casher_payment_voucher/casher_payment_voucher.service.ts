import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';
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
    private CustomersService: CustomersService,
    private SuppliersService: SuppliersService,
  ) {}

  async getMainTable(params: paramsPaymentType) {
    const calculatedDateFrom = new Date(params.date_from);
    calculatedDateFrom.setHours(0, 0, 0, 0);

    if (params.date_from && params.date_to) {
      const getRecords = await this.prisma.cash_payment_voucher.findMany({
        where: {
          voucher_date: {
            gte: calculatedDateFrom,
            lte: new Date(params.date_to),
          },
        },
      });
      const customersData = await this.CustomersService.getCustomersList();
      const supplierData = await this.SuppliersService.getSuppliersList();
      getRecords.map((voucher) => {
        let voucherName: string;
        let voucherId: number;
        if (voucher.customer_id) {
          voucherId = voucher.customer_id;
          //@ts-ignore
          voucher.voucher_type = 'C';
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          //@ts-ignore
          voucher.voucher_type = 'S';
          voucherId = voucher.supplier_id;
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
          //@ts-ignore
          voucher.voucher_type = 'O';
          voucherName = 'other';
        }

        //@ts-ignore
        voucher.query_status = 'q';
        const date = new Date(voucher.voucher_date);
        //@ts-ignore
        voucher.voucher_date = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDay()}`;
        //@ts-ignore
        voucher.voucher_name = voucherName;
        //@ts-ignore
        voucher.voucher_id = voucherId;
        delete voucher.customer_id;
        delete voucher.supplier_id;
      });
      return { data: getRecords };
    } else if (params.date_from) {
      const getRecords = await this.prisma.cash_payment_voucher.findMany({
        where: {
          voucher_date: {
            gte: calculatedDateFrom,
          },
        },
      });
      const customersData = await this.CustomersService.getCustomersList();
      const supplierData = await this.SuppliersService.getSuppliersList();
      getRecords.map((voucher) => {
        let voucherName: string;
        let voucherId: number;
        if (voucher.customer_id) {
          //@ts-ignore
          voucher.voucher_type = 'C';
          voucherId = voucher.customer_id;
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          //@ts-ignore
          voucher.voucher_type = 'S';
          voucherId = voucher.supplier_id;
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
          //@ts-ignore
          voucher.voucher_type = 'O';
          voucherName = 'other';
        }

        //@ts-ignore
        voucher.query_status = 'q';
        const date = new Date(voucher.voucher_date);
        //@ts-ignore
        voucher.voucher_date = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDay()}`;
        //@ts-ignore
        voucher.voucher_name = voucherName;
        //@ts-ignore
        voucher.voucher_id = voucherId;
      });
      return { data: getRecords };
    } else if (params.date_to) {
      const getRecords = await this.prisma.cash_payment_voucher.findMany({
        where: {
          voucher_date: {
            lte: new Date(params.date_to),
          },
        },
      });
      const customersData = await this.CustomersService.getCustomersList();
      const supplierData = await this.SuppliersService.getSuppliersList();
      getRecords.map((voucher) => {
        let voucherName: string;
        let voucherId: number;
        if (voucher.customer_id) {
          //@ts-ignore
          voucher.voucher_type = 'C';
          voucherId = voucher.customer_id;
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          //@ts-ignore
          voucher.voucher_type = 'S';
          voucherId = voucher.supplier_id;
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
          //@ts-ignore
          voucher.voucher_type = 'O';
          voucherName = 'other';
        }

        //@ts-ignore
        voucher.query_status = 'q';
        const date = new Date(voucher.voucher_date);
        //@ts-ignore
        voucher.voucher_date = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDay()}`;
        //@ts-ignore
        voucher.voucher_name = voucherName;
        //@ts-ignore
        voucher.voucher_id = voucherId;
      });
    } else {
      const getRecords = await this.prisma.cash_payment_voucher.findMany();
      const customersData = await this.CustomersService.getCustomersList();
      const supplierData = await this.SuppliersService.getSuppliersList();
      getRecords.map((voucher) => {
        let voucherName: string;
        let voucherId: number;
        if (voucher.customer_id) {
          //@ts-ignore
          voucher.voucher_type = 'C';
          voucherId = voucher.customer_id;
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          //@ts-ignore
          voucher.voucher_type = 'S';
          voucherId = voucher.supplier_id;
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
          //@ts-ignore
          voucher.voucher_type = 'O';
          voucherName = 'other';
        }

        //@ts-ignore
        voucher.query_status = 'q';
        const date = new Date(voucher.voucher_date);
        //@ts-ignore
        voucher.voucher_date = `${date.getFullYear()}-${
          date.getMonth() + 1
        }-${date.getDay()}`;
        //@ts-ignore
        voucher.voucher_name = voucherName;
        //@ts-ignore
        voucher.voucher_id = voucherId;
      });
      return { data: getRecords };
    }
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
    } else if (dto.voucher_type) {
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
    } else {
      try {
        await this.prisma.cash_payment_voucher.create({
          data: {
            voucher_date: new Date(dto.voucher_date),
            voucher_amount: +dto.voucher_amount,
            notes: dto.notes,
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
