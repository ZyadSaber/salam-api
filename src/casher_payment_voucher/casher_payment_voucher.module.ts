import { Module } from '@nestjs/common';
import { CasherPaymentVoucherController } from './casher_payment_voucher.controller';
import { CasherPaymentVoucherService } from './casher_payment_voucher.service';
import { CustomersService } from '../customers/customers.service';
import { SuppliersService } from '../suppliers/suppliers.service';

@Module({
  controllers: [CasherPaymentVoucherController],
  providers: [CasherPaymentVoucherService, CustomersService, SuppliersService],
})
export class CasherPaymentVoucherModule {}
