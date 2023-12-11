import {  Injectable } from '@nestjs/common';
import { format, compareDesc, compareAsc } from 'date-fns';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';

@Injectable()
export class SystemReportsService {
  constructor(private prisma: PrismaModuleService) {}

  async getCustomersSummary({ customer_id }: { customer_id: string }) {
    try {
      const customersInvoices = await this.prisma.customer_invoices.findMany({
        where: {
          customer_id: +customer_id,
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

      const customersReceipt = await this.prisma.cash_receipt_voucher.findMany({
        where: {
          customer_id: {
            notIn: null,
            in: +customer_id,
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

      const customerPayment = await this.prisma.cash_payment_voucher.findMany({
        where: {
          customer_id: {
            notIn: null,
            in: +customer_id,
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

      const invoicesArray = customersInvoices.map((invoice) => {
        const {
          invoice_note,
          customer_invoice_credit,
          customer_invoice_after_discount,
          customers_data,
          customer_invoice_date,
          customer_invoice_id,
        } = invoice;
        const obj = {
          rowKey: 0,
          notes: invoice_note,
          credit: customer_invoice_credit,
          debit: 0,
          total: customer_invoice_after_discount,
          customer_name: customers_data.customer_name,
          date: format(customer_invoice_date, 'yyyy-MM-dd hh:mm aa'),
          record_type: 'فاتورة',
          record_id: customer_invoice_id,
          balance: 0,
        };
        return obj;
      });

      const customerReceipts = customersReceipt.map((receipt) => {
        const {
          notes,
          voucher_amount,
          voucher_date,
          customers_data,
          receipt_voucher_id,
        } = receipt;

        const obj = {
          notes: notes,
          debit: voucher_amount,
          credit: 0,
          rowKey: 0,
          customer_name: customers_data.customer_name,
          date: format(voucher_date, 'yyyy-MM-dd hh:mm aa'),
          record_type: 'استلام نقدي',
          record_id: receipt_voucher_id,
          balance: 0,
        };
        return obj;
      });

      const customerPayments = customerPayment.map((receipt) => {
        const obj = {
          rowKey: 0,
          notes: receipt.notes,
          credit: receipt.voucher_amount,
          debit: 0,
          customer_name: receipt.customers_data.customer_name,
          date: format(receipt.voucher_date, 'yyyy-MM-dd hh:mm aa'),
          record_type: 'سند صرف',
          record_id: receipt.payment_voucher_id,
          balance: 0,
        };
        return obj;
      });

      const responseArray = [
        ...invoicesArray,
        ...customerPayments,
        ...customerReceipts,
      ];

      responseArray.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return compareAsc(dateA, dateB);
      });

      let balance = 0;
      responseArray.forEach((element, index) => {
        element.rowKey = index + 1;
        balance = +element.credit - +element.debit + +balance;
        element.balance = balance;
      });

      return {
        data: responseArray,
      };
    } catch (error) {}
    return {
      data: [],
    };
  }

  async getSuppliersSummary(Params: { supplier_id: string }) {
    try {
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

      const invoicesArray = supplierInvoices.map((invoice) => {
        const obj = {
          rowKey: 0,
          notes: invoice.invoice_note,
          credit: invoice.supplier_invoice_credit,
          debit: 0,
          supplier_name: invoice.suppliers_data.supplier_name,
          date: format(invoice.supplier_invoice_date, 'yyyy-MM-dd hh:mm aa'),
          record_type: 'فاتورة',
          record_id: invoice.supplier_invoice_id,
          balance: 0,
        };
        return obj;
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
              supplier_name: true,
            },
          },
        },
      });

      const supplierReceipts = supplierReceipt.map((receipt) => {
        const obj = {
          rowKey: 0,
          notes: receipt.notes,
          credit: receipt.voucher_amount,
          debit: 0,
          supplier_name: receipt.suppliers_data.supplier_name,
          date: format(receipt.voucher_date, 'yyyy-MM-dd hh:mm aa'),
          record_type: 'سند قبض',
          record_id: receipt.receipt_voucher_id,
          balance: 0,
        };
        return obj;
      });

      const supplierPayment = await this.prisma.cash_payment_voucher.findMany({
        where: {
          supplier_id: {
            notIn: null,
            in: +Params.supplier_id,
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

      const supplierPayments = supplierPayment.map((receipt) => {
        const obj = {
          rowKey: 0,
          notes: receipt.notes,
          debit: receipt.voucher_amount,
          credit: 0,
          supplier_name: receipt.suppliers_data.supplier_name,
          date: format(receipt.voucher_date, 'yyyy-MM-dd hh:mm aa'),
          record_type: 'سند صرف',
          record_id: receipt.payment_voucher_id,
          balance: 0,
        };
        return obj;
      });

      const responseArray = [
        ...invoicesArray,
        ...supplierPayments,
        ...supplierReceipts,
      ];

      responseArray.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return compareAsc(dateA, dateB);
      });

      let balance = 0;
      responseArray.forEach((element, index) => {
        element.rowKey = index + 1;
        balance = +element.credit - +element.debit + +balance;
        element.balance = balance;
      });

      return {
        data: responseArray,
      };
    } catch (error) {
      return {
        data: [],
      };
    }
  }

  async getItemsSummary(Params: { item_id: string }) {
    try {
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

      const customerItems = customersDetailsInvoices.map((item) => {
        let obj: any = {
        invoice_id: item.customer_invoice_id,
       rowKey: 0,
       holder_name: item.customer_invoices.customers_data.customer_name,
       item_name: item.items_data.item_name,
       date: format(item.customer_invoices.customer_invoice_date, 'yyyy-MM-dd hh:mm aa'),
       balance: 0,
       item_in: 0,
       item_out:
          (+item.customer_invoice_item_size *
          +item.customer_invoice_item_quantity)
        }
        return obj
      });

      const supplierItems = suppliersDetailsInvoices.map((item) => {
        let obj: any = {
        invoice_id: item.supplier_invoice_id,
        rowKey: 0,
        holder_name: item.supplier_invoices.suppliers_data.supplier_name,
        item_name: item.items_data.item_name,
        date: format(item.supplier_invoices.supplier_invoice_date, 'yyyy-MM-dd hh:mm aa'),
        balance: 0,
        item_out: 0,
        item_in:
         ( +item.supplier_invoice_item_size *
          +item.supplier_invoice_item_quantity)
        }
        return obj
      });

      const responseArray = [
        ...customerItems,
        ...supplierItems,
      ];

      responseArray.sort(function compare(a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return compareAsc(dateA, dateB);
      });

      let balance = 0;
      responseArray.forEach((element, index) => {
        element.rowKey = index + 1;
        balance = +element.item_in - +element.item_out + +balance;
        element.balance = balance;
      });

      return { data: responseArray };
    }catch(error){
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
            ? item.customers_data?.customer_name
            : item.suppliers_data?.supplier_name;
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

  async getAccountsSummary(Params: {
    date_from: string;
    date_to: string;
    type: string;
  }) {
   try{
    if (Params.type === 'C') {
      const customersData = await this.prisma.customers_data.findMany({
        select: {
          customer_id: true,
          customer_name: true,
          customer_invoices: {
            where: {
              customer_invoice_credit: {
                not: 0,
              },
            },
            select: {
              customer_invoice_credit: true,
            },
          },
          cash_payment_voucher: {
            select: {
              voucher_amount: true,
            },
          },
          cash_receipt_voucher: {
            select: {
              voucher_amount: true,
            },
          },
        },
      });

      const responseArray = customersData.map((customer) => {
        const {
          customer_id,
          customer_name,
          customer_invoices,
          cash_payment_voucher,
          cash_receipt_voucher
        } = customer
        let obj: any = {
          rowKey: customer_id,
          record_name: customer_name,
          debit: 0,
          credit: 0,
          total: 0,
        };
        customer_invoices.map((item) => {
          obj.credit = +item.customer_invoice_credit + +obj.credit;
        });

        cash_payment_voucher.map((item) => {
          obj.credit =
            +item.voucher_amount + +obj.credit;
        });
        
        cash_receipt_voucher.map((item) => {
          obj.debit = +item.voucher_amount + +obj.debit;
        });
        
        obj.total = obj.credit - obj.debit;

        return obj
      });

      return { data: responseArray };
    } else if (Params.type === 'S') {
      const suppliersData = await this.prisma.suppliers_data.findMany({
        select: {
          supplier_id: true,
          supplier_name: true,
          supplier_invoices: {
            where: {
              supplier_invoice_credit: {
                not: 0,
              },
            },
            select: {
              supplier_invoice_credit: true,
            },
          },
          cash_payment_voucher: {
            select: {
              voucher_amount: true,
            },
          },
          cash_receipt_voucher: {
            select: {
              voucher_amount: true,
            },
          },
        },
      });

      const responseArray = suppliersData.map((supplier) => {
        const {
          supplier_id,
          supplier_name,
          supplier_invoices,
          cash_payment_voucher,
          cash_receipt_voucher
        } = supplier

        let obj = {
          rowKey: supplier_id,
          record_name: supplier_name,
          debit: 0,
          credit: 0,
          total: 0,
        };

        supplier_invoices.map((item) => {
          obj.credit = +item.supplier_invoice_credit + +obj.credit;
        });

        cash_payment_voucher.map((item) => {
          obj.debit =
            +item.voucher_amount + +obj.debit;
        });

        cash_receipt_voucher.map((item) => {
          obj.credit = +item.voucher_amount + +obj.credit;
        });

        obj.total = obj.credit - obj.debit;

        return obj
      });

      return { data: responseArray };
    } else if (Params.type === 'I') {
         const itemData = await this.prisma.items_data.findMany({
        select: {
          item_name: true,
          item_id: true,
          supplier_invoices_items_details: {
            select: {
              supplier_invoice_item_size: true,
              supplier_invoice_item_quantity: true,
            },
          },
          customer_invoices_items_details: {
            select: {
              customer_invoice_item_size: true,
              customer_invoice_item_quantity: true,
            },
          },
        },
      });

      const responseArray = itemData.map((item) => {
        const {item_id, item_name, customer_invoices_items_details, supplier_invoices_items_details} = item
        let obj: any = {
          rowKey: item_id,
          record_name: item_name,
          debit: 0,
          credit: 0,
          total: 0
        };

        supplier_invoices_items_details.map((item) => {
          obj.credit =
            +item.supplier_invoice_item_size *
              +item.supplier_invoice_item_quantity +
            +obj.credit;
        });

        customer_invoices_items_details.map((item) => {
          obj.debit =
            +item.customer_invoice_item_size *
              +item.customer_invoice_item_quantity +
            +obj.debit;
        });

        obj.total = +obj.credit + -+obj.debit;

        return obj
      });

      return { data: responseArray };
    } else if (Params.type === 'E') {
      const expensesData = await this.prisma.expense_types.findMany({
        select: {
          expense_type_id: true,
          expense_type_name: true,
          cash_payment_voucher: {
            select: {
              voucher_amount: true,
            },
          },
        },
      });

      const responseArray = expensesData.map((item) => {
        const {expense_type_id, expense_type_name} = item
        let obj: any = {
          rowKey: expense_type_id,
          record_name: expense_type_name,
          total: 0,
        };
        
        item.cash_payment_voucher.map((item) => {
          obj.total = item.voucher_amount + obj.total;
        });

        return obj
      });

      return { data: responseArray };
    }
   }catch(error){
    return {
      data: []
    }
   }
  }
}
