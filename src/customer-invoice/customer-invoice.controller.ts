import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { CustomerInvoiceService } from './customer-invoice.service';
import {
  newCustomerInvoice,
  //   editSupplierInvoice,
  //   deleteSupplierInvoice,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/invoices/customer_invoice')
export class CustomerInvoiceController {
  constructor(private customerInvoice: CustomerInvoiceService) {}

  @Post('new_customer_invoice')
  postCustomers(@Body() dto: newCustomerInvoice) {
    return this.customerInvoice.new_customer_invoice(dto);
  }
}
