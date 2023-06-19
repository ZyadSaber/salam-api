import { Module } from '@nestjs/common';
import { InvoiceSearchController } from './invoice_search.controller';
import { InvoiceSearchService } from './invoice_search.service';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';
import { ItemsService } from '../items/items.service';
import { PrintOptionsService } from '../print_options/print_options.service';

@Module({
  controllers: [InvoiceSearchController],
  providers: [
    InvoiceSearchService,
    CustomersService,
    SuppliersService,
    ItemsService,
    PrintOptionsService,
  ],
})
export class InvoiceSearchModule {}
