import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class customerInvoiceItemsType {
  customer_invoice_id: number;
  item_name?: string;
  print_name?: string;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_print_option_id: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_id: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_width: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_height: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_size: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_quantity: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_price: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_item_total: number;
  customer_invoice_item_notes?: string;
}

export class newCustomerInvoice {
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;
  @IsNotEmpty()
  @IsString()
  customer_invoice_date: string;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_total: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_design_fee: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_discount: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_after_discount: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_paid: number;
  @IsNotEmpty()
  @IsNumber()
  customer_invoice_credit: number;
  invoice_note?: string;
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => customerInvoiceItemsType)
  customer_invoice_items: customerInvoiceItemsType[];
}

export class deleteCustomerInvoice {
    @IsNotEmpty()
  invoice_id: number
}

export class newCustomerItemInvoice{
  @IsNotEmpty()
  invoice_id: number;
  @IsNotEmpty()
  invoice_print_option_id: number;
  @IsNotEmpty()
  invoice_item_id: number;
  @IsNotEmpty()
  width: number;
  @IsNotEmpty()
  height: number;
  @IsNotEmpty()
  size: number;
  @IsNotEmpty()
  quantity: number;
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  total: number;
  @IsNotEmpty()
  notes: string;
}
