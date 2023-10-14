import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  customerSupplierListParams,
  customerSupplierMainTableParams,
  customerSupplierDetailTableParams,
} from '../types';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';

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
    if (params.invoice_type === 'C') {
      const invoices = await this.prisma.customer_invoices.findMany({
        where: {
          customer_invoice_id: +params.invoice_no || undefined,
          customer_id: +params.holder_number || undefined,
        },
        select: {
          customers_data: {
            select: {
              customer_name: true,
            },
          },
          customer_invoice_id: true,
          customer_invoice_date: true,
          customer_invoice_after_discount: true,
        },
      });
      invoices.forEach((invoice) => {
        //@ts-ignore
        invoice.invoice_type = params.invoice_type;
        //@ts-ignore
        invoice.holder_name = invoice.customers_data.customer_name;
        //@ts-ignore
        invoice.invoice_id = invoice.customer_invoice_id;
        //@ts-ignore
        invoice.invoice_date = `${invoice.customer_invoice_date.getFullYear()}-${
          invoice.customer_invoice_date.getMonth() + 1
        }-${invoice.customer_invoice_date.getDate()}`;
        //@ts-ignore
        invoice.invoice_total = invoice.customer_invoice_after_discount;
        delete invoice.customer_invoice_after_discount;
        delete invoice.customers_data;
        delete invoice.customer_invoice_id;
        delete invoice.customer_invoice_date;
      });
      return { data: invoices };
    } else if (params.invoice_type === 'S') {
      const invoices = await this.prisma.supplier_invoices.findMany({
        where: {
          supplier_invoice_id: +params.invoice_no || undefined,
          supplier_id: +params.holder_number || undefined,
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
        },
      });
      invoices.forEach((invoice) => {
        //@ts-ignore
        invoice.invoice_type = params.invoice_type;
        //@ts-ignore
        invoice.holder_name = invoice.suppliers_data.supplier_name;
        //@ts-ignore
        invoice.invoice_id = invoice.supplier_invoice_id;
        //@ts-ignore
        invoice.invoice_date = `${invoice.supplier_invoice_date.getFullYear()}-${
          invoice.supplier_invoice_date.getMonth() + 1
        }-${invoice.supplier_invoice_date.getDate()}`;
        //@ts-ignore
        invoice.invoice_total = invoice.supplier_invoice_after_discount;
        delete invoice.supplier_invoice_after_discount;
        delete invoice.suppliers_data;
        delete invoice.supplier_invoice_id;
        delete invoice.supplier_invoice_date;
      });
      return { data: invoices };
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
