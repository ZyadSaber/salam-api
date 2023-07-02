import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newPaymentVoucher {
  @IsString()
  @IsNotEmpty()
  voucher_date: string;
  @IsNumber()
  @IsNotEmpty()
  voucher_amount: number;
  @IsString()
  @IsNotEmpty()
  voucher_type: string;
  voucher_id?: number;
  notes?: string;
}

export class editPaymentVoucher {
  @IsNumber()
  @IsNotEmpty()
  payment_voucher_id: number;
  @IsString()
  @IsNotEmpty()
  voucher_date: string;
  @IsNotEmpty()
  voucher_amount: number;
  @IsString()
  @IsNotEmpty()
  voucher_type: string;
  voucher_id?: number;
  notes?: string;
}

export class deletePaymentVoucher {
  @IsNumber()
  @IsNotEmpty()
  payment_voucher_id: number;
}

export class paramsPaymentType {
  date_from?: string;
  date_to?: string;
}
