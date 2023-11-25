import { Injectable } from '@nestjs/common';
import { add } from 'date-fns'
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  customerSupplierListParams,
  customerSupplierMainTableParams,
  customerSupplierDetailTableParams,
} from '../types';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';
import { customerMainInvoice } from './invoice_search.interface';

@Injectable()
export class InvoiceSearchService {
  constructor(
    private CustomersService: CustomersService,
    private SuppliersService: SuppliersService,
    private prisma: PrismaModuleService,
  ) {}

  async customerSupplierList(params: customerSupplierListParams) {
    if (params.invoice_type === 'C') {
      return this.CustomersService.getCustomersList();
    } else if (params.invoice_type === 'S') {
      return this.SuppliersService.getSuppliersList();
    } else if (params.invoice_type === 'O') {
      let expenseList: any = [];
      const expenseData = await this.prisma.expense_types.findMany({
        select: {
          expense_type_id: true,
          expense_type_name: true,
        },
      });
      expenseData.map((item) => {
        let obj: any = {};
        obj.value = item.expense_type_id;
        obj.label = item.expense_type_name;
        expenseList.push(obj);
      });
      return expenseList;
    } else {
      return [];
    }
  }

  async customerSupplierMain(params: customerSupplierMainTableParams) {
    const calculatedDateFrom = add(new Date(params.date_from), {
        hours: 0,
        minutes: 0,
        seconds: 0,
      })
      const calculatedDateTo = add(new Date(params.date_to), {
        hours: 23,
        minutes: 59,
        seconds: 59
      })
    if (params.invoice_type === 'C') {
      const invoices = await this.prisma.customer_invoices.findMany({
        where: {
          // customer_invoice_id:{
          //   in:  +params.invoice_no || undefined
          // },
          customer_id: +params.holder_number || undefined,
          customer_invoice_date: {
            gte: params.date_from ? calculatedDateFrom : undefined,
            lte: params.date_from ? calculatedDateTo : undefined,
          },
        },
        select: {
          customers_data: {
            select: {
              customer_name: true,
            },
          },
          customer_invoice_id: true,
          customer_invoice_date: true,
          customer_invoice_total: true,
          customer_invoice_discount: true,
          customer_invoice_after_discount: true,
          customer_invoice_credit: true,
          customer_invoice_paid: true
        },
      });

      const computedInvoices = invoices.map((record) => {
        const computedRecord: customerMainInvoice = {
          invoice_type: '',
          holder_name: '',
          invoice_id: 0,
          invoice_date: '',
          invoice_total_before_discount: undefined,
          invoice_discount: undefined,
          invoice_total_after_discount: undefined,
          invoice_credit: undefined,
          invoice_paid: undefined
        };
        computedRecord.invoice_type = params.invoice_type;
        computedRecord.holder_name = record.customers_data.customer_name;
        computedRecord.invoice_id = record.customer_invoice_id;
        computedRecord.invoice_date = `${record.customer_invoice_date.getFullYear()}-${
          record.customer_invoice_date.getMonth() + 1
        }-${record.customer_invoice_date.getDate()}`;
        computedRecord.invoice_total_before_discount =
          record.customer_invoice_total;
        computedRecord.invoice_discount = record.customer_invoice_discount;
        computedRecord.invoice_total_after_discount =
          record.customer_invoice_after_discount;
          computedRecord.invoice_credit = record.customer_invoice_credit
          computedRecord.invoice_paid = record.customer_invoice_paid
        return computedRecord;
      });

      return { data: computedInvoices };
    } else if (params.invoice_type === 'S') {
      const invoices = await this.prisma.supplier_invoices.findMany({
        where: {
          // supplier_invoice_id: +params.invoice_no || undefined,
          supplier_id: +params.holder_number || undefined,
          supplier_invoice_date: {
            gte: params.date_from ? calculatedDateFrom : undefined,
            lte: params.date_from ? calculatedDateTo : undefined,
          },
        },
        select: {
          suppliers_data: {
            select: {
              supplier_name: true,
            },
          },
          supplier_invoice_id: true,
          supplier_invoice_date: true,
          supplier_invoice_after_discount: true,
          supplier_invoice_total: true,
          supplier_invoice_discount: true,
          supplier_invoice_credit: true,
          supplier_invoice_paid: true,
        },
      });
      const computedInvoices = invoices.map((record) => {
        const computedRecord: customerMainInvoice = {
          invoice_type: '',
          holder_name: '',
          invoice_id: 0,
          invoice_date: '',
          invoice_total_before_discount: undefined,
          invoice_discount: undefined,
          invoice_total_after_discount: undefined,
          invoice_credit: undefined,
          invoice_paid: undefined
        };
        computedRecord.invoice_type = params.invoice_type;
        computedRecord.holder_name = record.suppliers_data.supplier_name;
        computedRecord.invoice_id = record.supplier_invoice_id;
        computedRecord.invoice_date = `${record.supplier_invoice_date.getFullYear()}-${
          record.supplier_invoice_date.getMonth() + 1
        }-${record.supplier_invoice_date.getDate()}`;
        computedRecord.invoice_total_before_discount =
          record.supplier_invoice_total;
        computedRecord.invoice_discount = record.supplier_invoice_discount;
        computedRecord.invoice_total_after_discount =
          record.supplier_invoice_after_discount;
          computedRecord.invoice_credit = record.supplier_invoice_credit
          computedRecord.invoice_paid = record.supplier_invoice_paid
        return computedRecord;
      });

      return { data: computedInvoices };
    } else {
      return [];
    }
  }

  async customerSupplierDetail(params: customerSupplierDetailTableParams) {
    if (params.invoice_type === 'C') {
      const data = await this.prisma.customer_invoices_items_details.findMany({
        where: {
          customer_invoice_id: +params.invoice_no,
        },
        select: {
          row_key: true,
          print_options: {
            select: {
              print_option_name: true,
            },
          },
          items_data: {
            select: {
              item_name: true,
            },
          },
          customer_invoice_item_width: true,
          customer_invoice_item_height: true,
          customer_invoice_item_size: true,
          customer_invoice_item_quantity: true,
          customer_invoice_item_price: true,
          customer_invoice_item_total: true,
          customer_invoice_item_notes: true,
          customer_invoice_item_id: true,
          customer_invoice_print_option_id: true,
        },
      });
      data.forEach((invoice) => {
        //@ts-ignore
        invoice.item = `${invoice.print_options.print_option_name} / ${invoice.items_data.item_name}`;
        delete invoice.items_data;
        delete invoice.print_options;
        //@ts-ignore
        invoice.width = invoice.customer_invoice_item_width;
        delete invoice.customer_invoice_item_width;
        //@ts-ignore
        invoice.height = invoice.customer_invoice_item_height;
        delete invoice.customer_invoice_item_height;
        //@ts-ignore
        invoice.size = invoice.customer_invoice_item_size;
        delete invoice.customer_invoice_item_size;
        //@ts-ignore
        invoice.quantity = invoice.customer_invoice_item_quantity;
        delete invoice.customer_invoice_item_quantity;
        //@ts-ignore
        invoice.price = invoice.customer_invoice_item_price;
        delete invoice.customer_invoice_item_price;
        //@ts-ignore
        invoice.total = invoice.customer_invoice_item_total;
        delete invoice.customer_invoice_item_total;
        //@ts-ignore
        invoice.notes = invoice.customer_invoice_item_notes;
        delete invoice.customer_invoice_item_notes;
        //@ts-ignore
        invoice.invoice_item_id = invoice.customer_invoice_item_id;
        delete invoice.customer_invoice_item_id;
        //@ts-ignore
        invoice.invoice_print_option_id =
          invoice.customer_invoice_print_option_id;
        delete invoice.customer_invoice_print_option_id;
        return invoice;
      });
      return { data: data };
    } else if (params.invoice_type === 'S') {
      const data = await this.prisma.supplier_invoices_items_details.findMany({
        where: {
          supplier_invoice_id: +params.invoice_no,
        },
        select: {
          row_key: true,
          items_data: {
            select: {
              item_name: true,
            },
          },
          supplier_invoice_item_width: true,
          supplier_invoice_item_height: true,
          supplier_invoice_item_size: true,
          supplier_invoice_item_quantity: true,
          supplier_invoice_item_price: true,
          supplier_invoice_item_total: true,
          supplier_invoice_item_notes: true,
        },
      });
      data.forEach((invoice) => {
        //@ts-ignore
        invoice.item = invoice.items_data.item_name;
        delete invoice.items_data;
        //@ts-ignore
        invoice.width = invoice.supplier_invoice_item_width;
        delete invoice.supplier_invoice_item_width;
        //@ts-ignore
        invoice.height = invoice.supplier_invoice_item_height;
        delete invoice.supplier_invoice_item_height;
        //@ts-ignore
        invoice.size = invoice.supplier_invoice_item_size;
        delete invoice.supplier_invoice_item_size;
        //@ts-ignore
        invoice.quantity = invoice.supplier_invoice_item_quantity;
        delete invoice.supplier_invoice_item_quantity;
        //@ts-ignore
        invoice.price = invoice.supplier_invoice_item_price;
        delete invoice.supplier_invoice_item_price;
        //@ts-ignore
        invoice.total = invoice.supplier_invoice_item_total;
        delete invoice.supplier_invoice_item_total;
        //@ts-ignore
        invoice.notes = invoice.supplier_invoice_item_notes;
        delete invoice.supplier_invoice_item_notes;
        return invoice;
      });
      return { data: data };
    } else {
      return [];
    }
  }

  async getCustomersInvoicesToday() {
    const dateOfToday = new Date();
    dateOfToday.setHours(0, 0, 0, 0);
    const invoices = await this.prisma.customer_invoices.findMany({
      where: {
        customer_invoice_date: {
          gte: dateOfToday,
        },
      },
    });
    const customerData = await this.CustomersService.getCustomersList();
    invoices.forEach((invoice) => {
      const filter = customerData.filter(
        (customer) => customer.value === invoice.customer_id,
      );
      //@ts-ignore
      invoice.invoice_holder_name = filter[0].label;
      delete invoice.created_at;
      delete invoice.updated_at;
      delete invoice.customer_invoice_date;
      return invoice;
    });
    return {
      data: invoices,
    };
  }

  async getSupplierInvoicesToday() {
    const dateOfToday = new Date();
    dateOfToday.setHours(0, 0, 0, 0);
    const invoices = await this.prisma.supplier_invoices.findMany({
      where: {
        supplier_invoice_date: {
          gte: dateOfToday,
        },
      },
    });
    const suppliersData = await this.SuppliersService.getSuppliersList();
    invoices.forEach((invoice) => {
      const filter = suppliersData.filter(
        (supplier) => supplier.value === invoice.supplier_id,
      );
      //@ts-ignore
      invoice.invoice_holder_name = filter[0].label;
      delete invoice.created_at;
      delete invoice.updated_at;
      delete invoice.supplier_invoice_date;
      return invoice;
    });
    return {
      data: invoices,
    };
  }
}
