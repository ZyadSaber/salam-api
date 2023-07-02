import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { CasherPaymentVoucherService } from './casher_payment_voucher.service';
import {
  newPaymentVoucher,
  editPaymentVoucher,
  deletePaymentVoucher,
  paramsPaymentType,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/income_and_expenses/casher_payment_voucher')
export class CasherPaymentVoucherController {
  constructor(
    private CasherPaymentVoucherService: CasherPaymentVoucherService,
  ) {}

  @Get('main_table')
  getMainTable(@Query() params: paramsPaymentType) {
    return this.CasherPaymentVoucherService.getMainTable(params);
  }

  @Post('main_table_dml')
  newRecord(@Body() dto: newPaymentVoucher) {
    return this.CasherPaymentVoucherService.newPaymentVoucher(dto);
  }

  @Put('main_table_dml')
  editRecord(@Body() dto: editPaymentVoucher) {
    return this.CasherPaymentVoucherService.editPaymentVoucher(dto);
  }

  @Delete('main_table_dml')
  deleteRecord(@Body() dto: deletePaymentVoucher) {
    return this.CasherPaymentVoucherService.deletePaymentVoucher(dto);
  }
}
