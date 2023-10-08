import { Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  customerSupplierListParams,
  customerSupplierMainTableParams,
  customerSupplierDetailTableParams,
} from '../types';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';
import { ItemsService } from '../items/items.service';
import { PrintOptionsService } from '../print_options/print_options.service';

@Injectable()
export class InvoiceSearchService {
  constructor(
    private CustomersService: CustomersService,
    private SuppliersService: SuppliersService,
    private prisma: PrismaModuleService,
    private ItemsService: ItemsService,
    private PrintOptionsService: PrintOptionsService,
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
      });
      const customersData = await this.CustomersService.getCustomersList();
      invoices.map((invoice) => {
        const filter = customersData.filter(
          (customer) => customer.value === invoice.customer_id,
        );
        //@ts-ignore
        invoice.invoice_holder_name = filter[0].label;
        //@ts-ignore
        invoice.invoice_id = invoice.customer_invoice_id;
        const InvoiceDate = new Date(invoice.customer_invoice_date);
        //@ts-ignore
        invoice.invoice_date = `${InvoiceDate.getFullYear()}-${
          InvoiceDate.getMonth() + 1
        }-${InvoiceDate.getDate()}`;
        //@ts-ignore
        invoice.invoice_after_discount =
          invoice.customer_invoice_after_discount;
        delete invoice.customer_invoice_after_discount;
        delete invoice.customer_invoice_date;
        delete invoice.customer_invoice_id;
        delete invoice.customer_id;
        delete invoice.created_at;
        delete invoice.updated_at;
        delete invoice.customer_invoice_total;
        delete invoice.customer_invoice_discount;
        delete invoice.invoice_note;
        delete invoice.customer_invoice_paid;
        delete invoice.customer_invoice_credit;
        return invoice;
      });
      return { data: invoices };
    } else if (params.invoice_type === 'S') {
      const invoices = await this.prisma.supplier_invoices.findMany({
        take: +params.take | 10000000000,
        skip: +params.skip | 0,
        where: {
          supplier_invoice_id: +params.invoice_no || undefined,
          supplier_id: +params.holder_number || undefined,
        },
      });
      const supplierData = await this.SuppliersService.getSuppliersList();
      invoices.map((invoice) => {
        const filter = supplierData.filter(
          (supplier) => supplier.value === invoice.supplier_id,
        );
        //@ts-ignore
        invoice.invoice_holder_name = filter[0].label;
        //@ts-ignore
        invoice.invoice_id = invoice.supplier_invoice_id;
        const InvoiceDate = new Date(invoice.supplier_invoice_date);
        //@ts-ignore
        invoice.invoice_date = `${InvoiceDate.getFullYear()}-${
          InvoiceDate.getMonth() + 1
        }-${InvoiceDate.getDate()}`;
        //@ts-ignore
        invoice.invoice_after_discount =
          invoice.supplier_invoice_after_discount;
        delete invoice.supplier_invoice_after_discount;
        delete invoice.supplier_invoice_date;
        delete invoice.supplier_invoice_id;
        delete invoice.supplier_id;
        delete invoice.created_at;
        delete invoice.updated_at;
        delete invoice.supplier_invoice_total;
        delete invoice.supplier_invoice_discount;
        delete invoice.invoice_note;
        delete invoice.supplier_invoice_paid;
        delete invoice.supplier_invoice_credit;
        return invoice;
      });
      return { data: invoices };
    } else {
      return [];
    }
  }

  async customerSupplierDetail(params: customerSupplierDetailTableParams) {
    if (params.invoice_type === 'C') {
      const invoicesDetails =
        await this.prisma.customer_invoices_items_details.findMany({
          where: {
            customer_invoice_id: +params.invoice_no | 0,
          },
        });
      const itemsData = await this.ItemsService.getItemsList();
      const printOptionData =
        await this.PrintOptionsService.getPrintOptionsList();
      invoicesDetails.map((invoice) => {
        const filter = itemsData.filter(
          (item) => item.value === invoice.customer_invoice_print_option_id,
        );
        const filterPrintOption = printOptionData.filter(
          (printOption) =>
            printOption.value === invoice.customer_invoice_print_option_id,
        );
        //@ts-ignore
        invoice.invoice_item_name = `${filterPrintOption[0].label} / ${filter[0].label}`;
        //@ts-ignore
        // invoice.invoice_item_print_option = ;
        //@ts-ignore
        invoice.invoice_item_width = invoice.customer_invoice_item_width;
        delete invoice.customer_invoice_item_width;
        //@ts-ignore
        invoice.invoice_item_height = invoice.customer_invoice_item_height;
        delete invoice.customer_invoice_item_height;
        //@ts-ignore
        invoice.invoice_item_size = invoice.customer_invoice_item_size;
        delete invoice.customer_invoice_item_size;
        //@ts-ignore
        invoice.invoice_item_quantity = invoice.customer_invoice_item_quantity;
        delete invoice.customer_invoice_item_quantity;
        //@ts-ignore
        invoice.invoice_item_price = invoice.customer_invoice_item_price;
        delete invoice.customer_invoice_item_price;
        //@ts-ignore
        invoice.invoice_item_total = invoice.customer_invoice_item_total;
        delete invoice.customer_invoice_item_total;
        //@ts-ignore
        invoice.invoice_item_notes = invoice.customer_invoice_item_notes;
        delete invoice.customer_invoice_item_notes;
        delete invoice.customer_invoice_item_id;
        delete invoice.created_at;
        delete invoice.updated_at;
        delete invoice.customer_invoice_print_option_id;
        delete invoice.customer_invoice_id;
        return invoice;
      });
      return { data: invoicesDetails };
    } else if (params.invoice_type === 'S') {
      const invoices = await this.prisma.supplier_invoices.findMany({
        where: {
          supplier_invoice_id: +params.invoice_no || undefined,
        },
      });
      const supplierData = await this.SuppliersService.getSuppliersList();
      invoices.map((invoice) => {
        const filter = supplierData.filter(
          (supplier) => supplier.value === invoice.supplier_id,
        );
        //@ts-ignore
        invoice.invoice_holder_name = filter[0].label;
        //@ts-ignore
        invoice.invoice_id = invoice.supplier_invoice_id;
        //@ts-ignore
        invoice.invoice_date = invoice.supplier_invoice_date;
        //@ts-ignore
        invoice.invoice_after_discount =
          invoice.supplier_invoice_after_discount;
        delete invoice.supplier_invoice_after_discount;
        delete invoice.supplier_invoice_date;
        delete invoice.supplier_invoice_id;
        delete invoice.supplier_id;
        delete invoice.created_at;
        delete invoice.updated_at;
        delete invoice.supplier_invoice_total;
        delete invoice.supplier_invoice_discount;
        delete invoice.invoice_note;
        delete invoice.supplier_invoice_paid;
        delete invoice.supplier_invoice_credit;
        return invoice;
      });
      return { data: invoices };
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
