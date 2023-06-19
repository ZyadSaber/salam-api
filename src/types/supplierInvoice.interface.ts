import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  ArrayMinSize,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class supplierInvoiceItemsType {
  supplier_invoice_id: number;
  item_name?: string;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_id: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_width: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_height: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_size: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_quantity: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_price: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_item_total: number;
  supplier_invoice_item_notes?: string;
}

export class newSupplierInvoice {
  @IsNotEmpty()
  @IsNumber()
  supplier_id: number;
  @IsNotEmpty()
  @IsString()
  supplier_invoice_date: string;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_total: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_discount: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_after_discount: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_paid: number;
  @IsNotEmpty()
  @IsNumber()
  supplier_invoice_credit: number;
  invoice_note?: string;
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => supplierInvoiceItemsType)
  supplier_invoice_items: supplierInvoiceItemsType[];
}
