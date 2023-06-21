import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newCustomerInvoice,
  //   editCustomerInvoice,
  //   deleteCustomerInvoice,
} from '../types';

@Injectable()
export class CustomerInvoiceService {
  constructor(private prisma: PrismaModuleService) {}

  async new_customer_invoice(dto: newCustomerInvoice) {
    const existCustomer = await this.prisma.customers_data.findMany({
      where: {
        customer_id: 1,
      },
    });
    if (existCustomer.length === 0) {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Customer does not exist',
      });
    } else {
      const newInvoice = await this.prisma.customer_invoices.create({
        data: {
          customer_id: dto.customer_id,
          customer_invoice_date: new Date(dto.customer_invoice_date),
          customer_invoice_total: dto.customer_invoice_total,
          customer_invoice_discount: dto.customer_invoice_discount,
          customer_invoice_after_discount: dto.customer_invoice_after_discount,
          customer_invoice_paid: dto.customer_invoice_paid,
          customer_invoice_credit: dto.customer_invoice_credit,
          invoice_note: dto.invoice_note,
        },
      });
      const computedItemsArray = dto.customer_invoice_items.map((item) => {
        //@ts-ignore
        item.customer_invoice_id = newInvoice.customer_invoice_id;
        delete item.item_name;
        delete item.print_name;
        return item;
      });
      await this.prisma.customer_invoices_items_details.createMany({
        data: computedItemsArray,
      });
    }
    return { response: 'success', message: 'created new invoice' };
  }
}