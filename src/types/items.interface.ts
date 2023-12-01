import { Decimal } from '@prisma/client/runtime';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newItem {
  @IsString()
  @IsNotEmpty()
  item_name: string;
  item_unit?: string;
  item_description?: string;
  item_price?: Decimal;
}

export class editItem {
  @IsNumber()
  @IsNotEmpty()
  item_id: number;
  @IsString()
  @IsNotEmpty()
  item_name: string;
  item_unit?: string;
  item_description?: string;
  item_price?: Decimal;
}

export class deleteItem {
  @IsNumber()
  @IsNotEmpty()
  item_id: number;
}

export class itemParams{
  item_name?: string;
  item_unit?: string;
  item_description?: string;
}