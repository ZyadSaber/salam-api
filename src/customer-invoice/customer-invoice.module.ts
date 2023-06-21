import { Global, Module } from '@nestjs/common';
import { CustomerInvoiceController } from './customer-invoice.controller';
import { CustomerInvoiceService } from './customer-invoice.service';

@Module({
  controllers: [CustomerInvoiceController],
  providers: [CustomerInvoiceService],
})
export class CustomerInvoiceModule {}
