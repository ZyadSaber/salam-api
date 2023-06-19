import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class newItem {
  @IsString()
  @IsNotEmpty()
  item_name: string;
  @IsString()
  @IsNotEmpty()
  item_unit: string;
  item_description?: string;
}

export class editItem {
  @IsNumber()
  @IsNotEmpty()
  item_id: number;
  @IsString()
  @IsNotEmpty()
  item_name: string;
  @IsString()
  @IsNotEmpty()
  item_unit: string;
  item_description?: string;
}

export class deleteItem {
  @IsNumber()
  @IsNotEmpty()
  item_id: number;
}
