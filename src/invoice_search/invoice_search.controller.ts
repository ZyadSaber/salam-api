import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { InvoiceSearchService } from './invoice_search.service';
import {
  customerSupplierListParams,
  customerSupplierMainTableParams,
  customerSupplierDetailTableParams,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/invoices/invoice_search')
export class InvoiceSearchController {
  constructor(private InvoiceSearchService: InvoiceSearchService) {}

  @Get('customer_supplier_list')
  getCustomerSupplierList(@Query() params: customerSupplierListParams) {
    return this.InvoiceSearchService.customerSupplierList(params);
  }

  @Get('customer_supplier_invoice_main_table')
  getCustomerSupplierInvoice(@Query() params: customerSupplierMainTableParams) {
    return this.InvoiceSearchService.customerSupplierMain(params);
  }

  @Get('customer_supplier_invoice_detail_table')
  getCustomerSupplierInvoiceDetail(
    @Query() params: customerSupplierDetailTableParams,
  ) {
    return this.InvoiceSearchService.customerSupplierDetail(params);
  }

  @Get('customer_invoices_for_today')
  getCustomerInvoicesToday() {
    return this.InvoiceSearchService.getCustomersInvoicesToday();
  }

  @Get('supplier_invoices_for_today')
  getSupplierInvoicesToday() {
    return this.InvoiceSearchService.getSupplierInvoicesToday();
  }
}
