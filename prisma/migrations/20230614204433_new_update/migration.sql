-- CreateTable
CREATE TABLE "supplier_invoices" (
    "supplier_invoice_id" INTEGER NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "supplier_invoice_date" TIMESTAMP(3) NOT NULL,
    "supplier_invoice_total" DECIMAL(65,30) NOT NULL,
    "supplier_invoice_discount" DECIMAL(65,30) NOT NULL,
    "supplier_invoice_after_discount" DECIMAL(65,30) NOT NULL,
    "supplier_invoice_paid" DECIMAL(65,30) NOT NULL,
    "supplier_invoice_credit" DECIMAL(65,30) NOT NULL,
    "invoice_note" TEXT,

    CONSTRAINT "supplier_invoices_pkey" PRIMARY KEY ("supplier_invoice_id")
);

-- CreateTable
CREATE TABLE "supplier_invoices_items_details" (
    "row_key" SERIAL NOT NULL,
    "supplier_invoice_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "supplier_invoice_item_width" INTEGER NOT NULL,
    "supplier_invoice_item_height" INTEGER NOT NULL,
    "supplier_invoice_item_size" INTEGER NOT NULL,
    "supplier_invoice_item_quantity" INTEGER NOT NULL,
    "supplier_invoice_item_price" INTEGER NOT NULL,
    "supplier_invoice_item_total" INTEGER NOT NULL,
    "supplier_invoice_item_notes" TEXT,

    CONSTRAINT "supplier_invoices_items_details_pkey" PRIMARY KEY ("row_key")
);

-- AddForeignKey
ALTER TABLE "supplier_invoices" ADD CONSTRAINT "supplier_invoices_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers_data"("supplier_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_invoices_items_details" ADD CONSTRAINT "supplier_invoices_items_details_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items_data"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "supplier_invoices_items_details" ADD CONSTRAINT "supplier_invoices_items_details_supplier_invoice_id_fkey" FOREIGN KEY ("supplier_invoice_id") REFERENCES "supplier_invoices"("supplier_invoice_id") ON DELETE RESTRICT ON UPDATE CASCADE;
