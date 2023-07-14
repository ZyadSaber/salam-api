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

  async getItemsSummary(Params: { item_id: string }) {
    if (Params.item_id && Params.item_id !== '') {
      let ItemsSummaryData: any = [];

      const customersDetailsInvoices =
        await this.prisma.customer_invoices_items_details.findMany({
          where: {
            customer_invoice_item_id: +Params.item_id,
          },
          include: {
            items_data: {
              select: {
                item_name: true,
              },
            },
            customer_invoices: {
              include: {
                customers_data: {
                  select: {
                    customer_name: true,
                  },
                },
              },
            },
          },
        });

      const suppliersDetailsInvoices =
        await this.prisma.supplier_invoices_items_details.findMany({
          where: {
            supplier_invoice_item_id: +Params.item_id,
          },
          include: {
            items_data: {
              select: {
                item_name: true,
              },
            },
            supplier_invoices: {
              include: {
                suppliers_data: {
                  select: {
                    supplier_name: true,
                  },
                },
              },
            },
          },
        });

      customersDetailsInvoices.map((item) => {
        let obj: any = {};
        obj.invoice_id = item.customer_invoice_id;
        obj.rowKey = ItemsSummaryData.length + 1;
        obj.holder_name = item.customer_invoices.customers_data.customer_name;
        obj.item_name = item.items_data.item_name;
        obj.date = item.customer_invoices.customer_invoice_date;
        obj.balance = 0;
        obj.item_in = 0;
        obj.item_out =
          item.customer_invoice_item_size * item.customer_invoice_item_quantity;
        ItemsSummaryData.push(obj);
      });

      suppliersDetailsInvoices.map((item) => {
        let obj: any = {};
        obj.invoice_id = item.supplier_invoice_id;
        obj.rowKey = ItemsSummaryData.length + 1;
        obj.holder_name = item.supplier_invoices.suppliers_data.supplier_name;
        obj.item_name = item.items_data.item_name;
        obj.date = item.supplier_invoices.supplier_invoice_date;
        obj.balance = 0;
        obj.item_out = 0;
        obj.item_in =
          item.supplier_invoice_item_size * item.supplier_invoice_item_quantity;
        ItemsSummaryData.push(obj);
      });

      ItemsSummaryData.sort(function (a: string, b: string) {
        //@ts-ignore
        return b.date - a.date;
      });

      let balance = 0;
      ItemsSummaryData.forEach((element) => {
        balance = element.item_in - element.item_out + balance;
        element.balance = balance;
        element.date = element.date.toJSON().slice(0, 10);
      });

      return { data: ItemsSummaryData };
    } else {
      return { data: [] };
    }
  }

  async getDailySummary(Params: { date_from: string; date_to: string }) {
    if (
      Params.date_from &&
      Params.date_to &&
      Params.date_from !== '' &&
      Params.date_to !== ''
    ) {
      let dailyResponse: any = [];
      const customersInvoices = await this.prisma.customer_invoices.findMany({
        where: {
          customer_invoice_date: {
            gte: new Date(Params.date_from),
            lte: new Date(Params.date_to),
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

      customersInvoices.map((item) => {
        let obj: any = {};
        obj.rowKey = dailyResponse.length + 1;
        obj.holder_name = item.customers_data.customer_name;
        obj.type = 'invoice/فاتورة';
        obj.record_id = item.customer_invoice_id;
        obj.credit = 0;
        obj.total = 0;
        obj.debit = +item.customer_invoice_paid;
        obj.date = item.customer_invoice_date;
        dailyResponse.push(obj);
      });

      const supplierInvoices = await this.prisma.supplier_invoices.findMany({
        where: {
          supplier_invoice_date: {
            gte: new Date(Params.date_from),
            lte: new Date(Params.date_to),
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

      supplierInvoices.map((item) => {
        let obj: any = {};
        obj.rowKey = dailyResponse.length + 1;
        obj.holder_name = item.suppliers_data.supplier_name;
        obj.type = 'invoice/فاتورة';
        obj.record_id = item.supplier_invoice_id;
        obj.debit = 0;
        obj.total = 0;
        obj.credit = +item.supplier_invoice_paid;
        obj.date = item.supplier_invoice_date;
        dailyResponse.push(obj);
      });

      const paymentVoucher = await this.prisma.cash_payment_voucher.findMany({
        where: {
          voucher_date: {
            gte: new Date(Params.date_from),
            lte: new Date(Params.date_to),
          },
        },
        include: {
          suppliers_data: {
            select: {
              supplier_name: true,
            },
          },
          customers_data: {
            select: {
              customer_name: true,
            },
          },
        },
      });

      paymentVoucher.map((item) => {
        let obj: any = {};
        obj.rowKey = dailyResponse.length + 1;
        obj.holder_name =
          item.suppliers_data === null
            ? item.customers_data.customer_name
            : item.suppliers_data.supplier_name;
        obj.type = 'voucher / سند';
        obj.record_id = item.payment_voucher_id;
        obj.debit = item.suppliers_data === null ? +item.voucher_amount : 0;
        obj.credit = item.customers_data === null ? +item.voucher_amount : 0;
        obj.total = 0;
        obj.date = item.voucher_date;
        dailyResponse.push(obj);
      });

      const receiptVoucher = await this.prisma.cash_receipt_voucher.findMany({
        where: {
          voucher_date: {
            gte: new Date(Params.date_from),
            lte: new Date(Params.date_to),
          },
        },
        include: {
          suppliers_data: {
            select: {
              supplier_name: true,
            },
          },
          customers_data: {
            select: {
              customer_name: true,
            },
          },
        },
      });

      receiptVoucher.map((item) => {
        let obj: any = {};
        obj.rowKey = dailyResponse.length + 1;
        obj.holder_name =
          item.suppliers_data === null
            ? item.customers_data.customer_name
            : item.customers_data === null
            ? item.suppliers_data.supplier_name
            : '';
        obj.type = 'voucher / سند';
        obj.record_id = item.receipt_voucher_id;
        obj.credit = item.suppliers_data === null ? +item.voucher_amount : 0;
        obj.debit = item.customers_data === null ? +item.voucher_amount : 0;
        obj.total = 0;
        obj.date = item.voucher_date;
        dailyResponse.push(obj);
      });

      dailyResponse.sort(function (a: string, b: string) {
        //@ts-ignore
        return b.date - a.date;
      });

      let total = 0;
      dailyResponse.forEach((element) => {
        total = element.debit - element.credit + total;
        element.total = total;
        element.date = element.date.toJSON().slice(0, 10);
      });

      return {
        data: dailyResponse,
      };
    } else {
      return { data: [] };
    }
  }
}