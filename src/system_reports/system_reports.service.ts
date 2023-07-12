import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';

@Injectable()
export class SystemReportsService {
  constructor(private prisma: PrismaModuleService) {}

  async getCustomersSummary(Params: { customer_id: string }) {
    if (Params.customer_id !== '0' && Params.customer_id) {
      const customersInvoices = await this.prisma.customer_invoices.findMany({
        where: {
          customer_id: +Params.customer_id,
          customer_invoice_credit: {
            notIn: 0,
          },
        },
        include: {
          customers_data: {
            select: {
              customer_name: true,
            },
          },
        },
      });

      let responseArray: any = [];

      customersInvoices.map(async (invoice) => {
        let obj: any = {};

        obj.rowKey = responseArray.length + 1;
        obj.notes = invoice.invoice_note;
        obj.credit = invoice.customer_invoice_credit;
        obj.debit = 0;
        obj.total = invoice.customer_invoice_after_discount;
        obj.customer_name = invoice.customers_data.customer_name;
        obj.date = invoice.customer_invoice_date;
        //.toJSON().slice(0, 10);
        obj.record_type = 'I';
        obj.record_id = invoice.customer_invoice_id;
        obj.balance = 0;

        responseArray.push(obj);
      });

      const customersReceipt = await this.prisma.cash_receipt_voucher.findMany({
        where: {
          customer_id: {
            notIn: null,
            in: +Params.customer_id,
          },
        },
        include: {
          customers_data: {
            select: {
              customer_name: true,
            },
          },
        },
      });

      customersReceipt.map(async (receipt) => {
        let obj: any = {};

        obj.rowKey = responseArray.length + 1;
        obj.notes = receipt.notes;
        obj.debit = receipt.voucher_amount;
        obj.credit = 0;
        // obj.total = receipt.customer_invoice_after_discount;
        obj.customer_name = receipt.customers_data.customer_name;
        obj.date = receipt.voucher_date;
        obj.record_type = 'R';
        obj.record_id = receipt.receipt_voucher_id;
        obj.balance = 0;

        responseArray.push(obj);
      });

      responseArray.sort(function (a: string, b: string) {
        //@ts-ignore
        return b.date - a.date;
      });

      let balance = 0;
      responseArray.forEach((element) => {
        balance = element.credit - element.debit + balance;
        element.balance = balance;
        element.date = element.date.toJSON().slice(0, 10);
      });

      return {
        data: responseArray,
      };
    } else {
      return {
        data: [],
      };
    }
  }

  async getSuppliersSummary(Params: { supplier_id: string }) {
    if (Params.supplier_id !== '0' && Params.supplier_id) {
      const supplierInvoices = await this.prisma.supplier_invoices.findMany({
        where: {
          supplier_id: +Params.supplier_id,
          supplier_invoice_credit: {
            notIn: 0,
          },
        },
        include: {
          suppliers_data: {
            select: {
              supplier_name: true,
            },
          },
        },
      });

      let responseArray: any = [];

      supplierInvoices.map(async (invoice) => {
        let obj: any = {};

        obj.rowKey = responseArray.length + 1;
        obj.notes = invoice.invoice_note;
        obj.credit = invoice.supplier_invoice_credit;
        obj.debit = 0;
        obj.total = invoice.supplier_invoice_after_discount;
        obj.supplier_name = invoice.suppliers_data.supplier_name;
        obj.date = invoice.supplier_invoice_date;
        //.toJSON().slice(0, 10);
        obj.record_type = 'I';
        obj.record_id = invoice.supplier_invoice_id;
        obj.balance = 0;

        responseArray.push(obj);
      });

      const supplierReceipt = await this.prisma.cash_receipt_voucher.findMany({
        where: {
          supplier_id: {
            notIn: null,
            in: +Params.supplier_id,
          },
        },
        include: {
          suppliers_data: {
            select: {
              supplier_id: true,
            },
          },
        },
      });

      supplierReceipt.map(async (receipt) => {
        let obj: any = {};

        obj.rowKey = responseArray.length + 1;
        obj.notes = receipt.notes;
        obj.debit = receipt.voucher_amount;
        obj.credit = 0;
        // obj.total = receipt.customer_invoice_after_discount;
        obj.supplier_name = receipt.suppliers_data.supplier_id;
        obj.date = receipt.voucher_date;
        obj.record_type = 'R';
        obj.record_id = receipt.receipt_voucher_id;
        obj.balance = 0;

        responseArray.push(obj);
      });

      responseArray.sort(function (a: string, b: string) {
        //@ts-ignore
        return b.date - a.date;
      });

      let balance = 0;
      responseArray.forEach((element) => {
        balance = element.credit - element.debit + balance;
        element.balance = balance;
        element.date = element.date.toJSON().slice(0, 10);
      });

      return {
        data: responseArray,
      };
    } else {
      return {
        data: [],
      };
    }
  }
}
