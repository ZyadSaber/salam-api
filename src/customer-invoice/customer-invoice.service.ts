import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newCustomerInvoice,
  deleteCustomerInvoice,
  newCustomerItemInvoice,
  editCustomerItemInvoice
} from '../types';

@Injectable()
export class CustomerInvoiceService {
  constructor(private prisma: PrismaModuleService) {}

  async new_customer_invoice(dto: newCustomerInvoice) {
      const newInvoice = await this.prisma.customer_invoices.create({
        data: {
          customer_id: dto.customer_id,
          customer_invoice_date: new Date(dto.customer_invoice_date),
          customer_invoice_total: dto.customer_invoice_total,
          customer_invoice_design_fee: dto.customer_invoice_design_fee,
          customer_invoice_discount: dto.customer_invoice_discount,
          customer_invoice_after_discount: dto.customer_invoice_after_discount,
          customer_invoice_paid: dto.customer_invoice_paid,
          customer_invoice_credit: dto.customer_invoice_credit,
          invoice_note: dto.invoice_note,
        },
      });
      const computedItemsArray = dto.customer_invoice_items.map((item) => {
        const {
          customer_invoice_print_option_id,
        customer_invoice_item_id,
          customer_invoice_item_height,
          customer_invoice_item_width,
          customer_invoice_item_size,
          customer_invoice_item_price,
          customer_invoice_item_quantity,
          customer_invoice_item_total,
          customer_invoice_item_notes,
        } = item
        const invoiceItem = {
          customer_invoice_id: 0,
          customer_invoice_print_option_id,
          customer_invoice_item_id,
          customer_invoice_item_width,
          customer_invoice_item_height,
          customer_invoice_item_size,
          customer_invoice_item_price,
          customer_invoice_item_quantity,
          customer_invoice_item_total,
          customer_invoice_item_notes
        }
        item.customer_invoice_id = newInvoice.customer_invoice_id;
        invoiceItem.customer_invoice_id = newInvoice.customer_invoice_id;
        return invoiceItem
      });
      await this.prisma.customer_invoices_items_details.createMany({
        data: computedItemsArray,
      });
    return { response: 'success', message: 'created new invoice' };
  }

  async delete_main_invoice(dto:deleteCustomerInvoice){
   try{
    await this.prisma.customer_invoices_items_details.deleteMany({
      where:{
        customer_invoice_id: dto.invoice_id
      }
    })
    await this.prisma.customer_invoices.delete({
      where:{
        customer_invoice_id: dto.invoice_id
      }
    })
    return { response: 'success', message: 'This Invoice is deleted' };
   } catch(error){
    throw new ForbiddenException({
      response: 'error',
      message: error,
    });
   }
  }

  async newCustomerItemsInvoice(dto: newCustomerItemInvoice){
    try{
      await this.prisma.customer_invoices_items_details.create({
        data: {
          customer_invoice_id: dto.invoice_id,
          customer_invoice_print_option_id: dto.invoice_print_option_id,
          customer_invoice_item_id: dto.invoice_item_id,
          customer_invoice_item_width: dto.width,
          customer_invoice_item_height: dto.height,
          customer_invoice_item_size: dto.size,
          customer_invoice_item_price: dto.price,
          customer_invoice_item_quantity: dto.quantity,
          customer_invoice_item_total: dto.quantity,
          customer_invoice_item_notes: dto.notes
        }})
      return { response: 'success' };
     } catch(error){
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
     }
  }

  async editCustomerItemsInvoice(dto: editCustomerItemInvoice){
    try{
      await this.prisma.customer_invoices_items_details.update({
        where:{
          row_key: +dto.row_key
        },
        data: {
          customer_invoice_id: dto.invoice_id,
          customer_invoice_print_option_id: dto.invoice_print_option_id,
          customer_invoice_item_id: dto.invoice_item_id,
          customer_invoice_item_width: dto.width,
          customer_invoice_item_height: dto.height,
          customer_invoice_item_size: dto.size,
          customer_invoice_item_price: dto.price,
          customer_invoice_item_quantity: dto.quantity,
          customer_invoice_item_total: dto.quantity,
          customer_invoice_item_notes: dto.notes
        }})
      return { response: 'success' };
     } catch(error){
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
     }
  }

  async deleteCustomerItemsInvoice(dto: editCustomerItemInvoice){
    try{
      await this.prisma.customer_invoices_items_details.delete({
        where:{
          row_key: +dto.row_key
        }})
      return { response: 'success' };
     } catch(error){
      throw new ForbiddenException({
        response: 'error',
        message: error,
      });
     }
  }
}
