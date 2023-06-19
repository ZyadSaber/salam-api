import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newSupplier {
  @IsString()
  @IsNotEmpty()
  supplier_name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export class editSupplier {
  @IsNumber()
  @IsNotEmpty()
  supplier_id: number;
  @IsString()
  @IsNotEmpty()
  supplier_name: string;
  email: string;
  phone: string;
  address: string;
}

export class deleteSupplier {
  @IsNumber()
  @IsNotEmpty()
  supplier_id: number;
}
