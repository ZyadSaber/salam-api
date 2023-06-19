import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class customerSupplierListParams {
  @IsString()
  @IsNotEmpty()
  invoice_type: string;
}

export class customerSupplierMainTableParams extends customerSupplierListParams {
  invoice_no?: number;
}

export class customerSupplierDetailTableParams extends customerSupplierListParams {
  @IsNotEmpty()
  invoice_no: number;
}
