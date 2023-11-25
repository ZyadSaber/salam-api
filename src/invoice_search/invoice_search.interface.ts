import { Decimal } from '@prisma/client/runtime';

export interface customerMainInvoice {
    invoice_type: string,
    holder_name: string,
    invoice_id: number,
    invoice_date: string,
    invoice_total_before_discount: Decimal,
    invoice_discount: Decimal,
    invoice_total_after_discount: Decimal,
    invoice_paid: Decimal
    invoice_credit: Decimal
  }