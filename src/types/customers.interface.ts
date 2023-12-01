import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newCustomer {
  @IsString()
  @IsNotEmpty()
  customer_name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export class editCustomer {
  @IsNumber()
  @IsNotEmpty()
  customer_id: number;
  @IsString()
  @IsNotEmpty()
  customer_name: string;
  email: string;
  phone: string;
  address: string;
}

export class deleteCustomer {
  @IsNumber()
  @IsNotEmpty()
  customer_id: number;
}

export class customerParam{
  customer_name?: string;
  phone?: string;
  address?: string;
}