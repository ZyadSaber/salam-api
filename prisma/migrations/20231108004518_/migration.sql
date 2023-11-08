-- AlterTable
ALTER TABLE "customer_invoices_items_details" ALTER COLUMN "customer_invoice_item_height" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "customer_invoice_item_price" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "customer_invoice_item_quantity" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "customer_invoice_item_size" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "customer_invoice_item_total" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "customer_invoice_item_width" SET DATA TYPE DECIMAL(65,30);

-- AlterTable
ALTER TABLE "supplier_invoices_items_details" ALTER COLUMN "supplier_invoice_item_width" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "supplier_invoice_item_height" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "supplier_invoice_item_size" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "supplier_invoice_item_quantity" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "supplier_invoice_item_price" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "supplier_invoice_item_total" SET DATA TYPE DECIMAL(65,30);
