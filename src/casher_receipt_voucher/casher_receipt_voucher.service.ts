import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';
import {
  paramsType,
  newReceiptVoucher,
  editReceiptVoucher,
  deleteReceiptVoucher,
} from '../types';

@Injectable()
export class CasherReceiptVoucherService {
  constructor(
    private prisma: PrismaModuleService,
    private CustomersService: CustomersService,
    private SuppliersService: SuppliersService,
  ) {}

  async getMainTable(params: paramsType) {
    const calculatedDateFrom = new Date(params.date_from);
    calculatedDateFrom.setHours(0, 0, 0, 0);

    if (params.date_from && params.date_to) {
      const getRecords = await this.prisma.cash_receipt_voucher.findMany({
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
        if (voucher.customer_id) {
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
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
      });
      return { data: getRecords };
    } else if (params.date_from) {
      const getRecords = await this.prisma.cash_receipt_voucher.findMany({
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
        if (voucher.customer_id) {
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
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
      });
      return { data: getRecords };
    } else if (params.date_to) {
      const getRecords = await this.prisma.cash_receipt_voucher.findMany({
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
        if (voucher.customer_id) {
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
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
      });
    } else {
      const getRecords = await this.prisma.cash_receipt_voucher.findMany();
      const customersData = await this.CustomersService.getCustomersList();
      const supplierData = await this.SuppliersService.getSuppliersList();
      getRecords.map((voucher) => {
        let voucherName: string;
        if (voucher.customer_id) {
          voucherName = customersData.filter(
            (customer) => customer.value === voucher.customer_id,
          )[0]?.label;
        } else if (voucher.supplier_id) {
          voucherName = supplierData.filter(
            (supplier) => supplier.value === voucher.supplier_id,
          )[0]?.label;
        } else {
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
      });
      return { data: getRecords };
    }
  }

  async newReceiptVoucher(dto: newReceiptVoucher) {
    return { response: 'success' };
  }
}
