import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newReceiptVoucher {
  @IsString()
  @IsNotEmpty()
  voucher_date: string;
  @IsNumber()
  @IsNotEmpty()
  voucher_amount: number;
  @IsString()
  @IsNotEmpty()
  voucher_type: string;
  customer_id?: number;
  supplier_id?: number;
  notes?: string;
}

export class editReceiptVoucher {
  @IsNumber()
  @IsNotEmpty()
  receipt_voucher_id: number;
  @IsString()
  @IsNotEmpty()
  voucher_date: string;
  @IsNumber()
  @IsNotEmpty()
  voucher_amount: number;
  @IsString()
  @IsNotEmpty()
  voucher_type: string;
  customer_id?: number;
  supplier_id?: number;
  notes?: string;
}

export class deleteReceiptVoucher {
  @IsNumber()
  @IsNotEmpty()
  receipt_voucher_id: number;
}

export class paramsType {
  date_from?: string;
  date_to?: string;
}
