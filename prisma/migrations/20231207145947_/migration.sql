-- AlterTable
ALTER TABLE "cash_payment_voucher" ALTER COLUMN "notes" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "cash_receipt_voucher" ALTER COLUMN "notes" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "customer_invoices" ALTER COLUMN "invoice_note" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "customer_invoices_items_details" ALTER COLUMN "customer_invoice_item_notes" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "print_options" ALTER COLUMN "print_option_note" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "supplier_invoices" ALTER COLUMN "invoice_note" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "supplier_invoices_items_details" ALTER COLUMN "supplier_invoice_item_notes" SET DEFAULT E'';
