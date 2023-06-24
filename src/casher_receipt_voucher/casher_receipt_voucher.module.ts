import { Module } from '@nestjs/common';
import { CasherReceiptVoucherController } from './casher_receipt_voucher.controller';
import { CasherReceiptVoucherService } from './casher_receipt_voucher.service';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';

@Module({
  controllers: [CasherReceiptVoucherController],
  providers: [CasherReceiptVoucherService, CustomersService, SuppliersService],
})
export class CasherReceiptVoucherModule {}
