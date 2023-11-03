import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaModuleService } from '../prisma-module/prisma-module.service';
import {
  newSupplierInvoice,
  //   editSupplierInvoice,
    deleteSupplierInvoice,
} from '../types';

@Injectable()
export class SupplierInvoiceService {
  constructor(private prisma: PrismaModuleService) {}

  async new_supplier_invoice(dto: newSupplierInvoice) {
    const existSupplier = await this.prisma.suppliers_data.findMany({
      where: {
        supplier_id: dto.supplier_id,
      },
    });
    if (existSupplier.length === 0) {
      throw new ForbiddenException({
        response: 'error',
        message: 'This Supplier does not exist',
      });
    } else {
      const newInvoice = await this.prisma.supplier_invoices.create({
        data: {
          supplier_id: +dto.supplier_id,
          supplier_invoice_date: new Date(dto.supplier_invoice_date),
          supplier_invoice_total: dto.supplier_invoice_total,
          supplier_invoice_discount: dto.supplier_invoice_discount,
          supplier_invoice_after_discount: dto.supplier_invoice_after_discount,
          supplier_invoice_paid: dto.supplier_invoice_paid,
          supplier_invoice_credit: dto.supplier_invoice_credit,
          invoice_note: dto.invoice_note,
        },
      });
      const computedItemsArray = dto.supplier_invoice_items.map((item) => {
        item.supplier_invoice_id = newInvoice.supplier_invoice_id;
        delete item.item_name;
        return item;
      });
      await this.prisma.supplier_invoices_items_details.createMany({
        data: computedItemsArray,
      });
    }
    return { response: 'success', message: 'created new invoice' };
  }

  async delete_main_invoice(dto:deleteSupplierInvoice){
    try{
     await this.prisma.supplier_invoices_items_details.deleteMany({
       where:{
         supplier_invoice_id: dto.invoice_id
       }
     })
     await this.prisma.supplier_invoices.delete({
       where:{
         supplier_invoice_id: dto.invoice_id
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
}
