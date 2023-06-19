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
import { SupplierInvoiceService } from './supplier-invoice.service';
import {
  newSupplierInvoice,
//   editSupplierInvoice,
//   deleteSupplierInvoice,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/invoices/supplier_invoice')
export class SupplierInvoiceController {
  constructor(private supplierInvoice: SupplierInvoiceService) {}

  @Post('new_supplier_invoice')
  postCustomers(@Body() dto: newSupplierInvoice) {
    return this.supplierInvoice.new_supplier_invoice(dto);
  }
}
