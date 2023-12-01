import { Body, Controller, Delete, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { CustomerInvoiceService } from './customer-invoice.service';
import {
  newCustomerInvoice,
  deleteCustomerInvoice,
  newCustomerItemInvoice
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/invoices/customer_invoice')
export class CustomerInvoiceController {
  constructor(private customerInvoice: CustomerInvoiceService) {}

  @Post('new_customer_invoice')
  postCustomers(@Body() dto: newCustomerInvoice) {
    return this.customerInvoice.new_customer_invoice(dto);
  }

  @Delete('customer_invoice_dml')
  deleteCustomerInvoice(@Body() dto: deleteCustomerInvoice) {
    return this.customerInvoice.delete_main_invoice(dto);
  }

  @Post('customer_items_invoice_dml')
  postItemsCustomers(@Body() dto: newCustomerItemInvoice) {
    return this.customerInvoice.newCustomerItemsInvoice(dto);
  }
}
