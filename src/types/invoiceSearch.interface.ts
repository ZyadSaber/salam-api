import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class customerSupplierListParams {
  @IsString()
  @IsNotEmpty()
  invoice_type: string;
}

export class customerSupplierMainTableParams extends customerSupplierListParams {
  invoice_no?: number;
  take?: number;
  skip?: number;
  holder_number?: number;
  date_from?: string;
  date_to?: string;
}

export class customerSupplierDetailTableParams extends customerSupplierListParams {
  @IsNotEmpty()
  invoice_no: number;
}
