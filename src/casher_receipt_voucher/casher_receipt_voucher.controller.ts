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
import { CasherReceiptVoucherService } from './casher_receipt_voucher.service';
import {
  paramsType,
  newReceiptVoucher,
  editReceiptVoucher,
  deleteReceiptVoucher,
} from '../types';

@UseGuards(JwtGuard)
@Controller('api/income_and_expenses/casher_receipt_voucher')
export class CasherReceiptVoucherController {
  constructor(
    private CasherReceiptVoucherService: CasherReceiptVoucherService,
  ) {}
  @Get('main_table')
  getMainTable(@Query() params: paramsType) {
    return this.CasherReceiptVoucherService.getMainTable(params);
  }

  @Post('main_table_dml')
  newRecord(@Body() dto: newReceiptVoucher) {
    return this.CasherReceiptVoucherService.newReceiptVoucher(dto);
  }

  @Put('main_table_dml')
  editRecord(@Body() dto: editReceiptVoucher) {
    return this.CasherReceiptVoucherService.editReceiptVoucher(dto);
  }

  @Delete('main_table_dml')
  deleteRecord(@Body() dto: deleteReceiptVoucher) {
    return this.CasherReceiptVoucherService.deleteReceiptVoucher(dto);
  }
}
