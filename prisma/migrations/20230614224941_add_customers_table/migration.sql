-- CreateTable
CREATE TABLE "item_inventory" (
    "transaction_id" SERIAL NOT NULL,
    "item_id" INTEGER NOT NULL,
    "in_inv" DECIMAL(65,30) NOT NULL,
    "out_inv" DECIMAL(65,30) NOT NULL,
    "customer_invoice_id" TEXT,
    "supplier_invoice_id" INTEGER,

    CONSTRAINT "item_inventory_pkey" PRIMARY KEY ("transaction_id")
);

-- CreateTable
CREATE TABLE "customer_invoices" (
    "customer_invoice_id" TEXT NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "date" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "total_after_discount" DECIMAL(65,30) NOT NULL,
    "paid" DECIMAL(65,30) NOT NULL,
    "credit" DECIMAL(65,30) NOT NULL,
    "invoice_note" TEXT,

    CONSTRAINT "customer_invoices_pkey" PRIMARY KEY ("customer_invoice_id")
);

-- CreateTable
CREATE TABLE "customer_invoices_items_details" (
    "row_key" SERIAL NOT NULL,
    "customer_invoice_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "print_option_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "notes" TEXT,

    CONSTRAINT "customer_invoices_items_details_pkey" PRIMARY KEY ("row_key")
);

-- AddForeignKey
ALTER TABLE "item_inventory" ADD CONSTRAINT "item_inventory_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items_data"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_inventory" ADD CONSTRAINT "item_inventory_supplier_invoice_id_fkey" FOREIGN KEY ("supplier_invoice_id") REFERENCES "supplier_invoices"("supplier_invoice_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_inventory" ADD CONSTRAINT "item_inventory_customer_invoice_id_fkey" FOREIGN KEY ("customer_invoice_id") REFERENCES "customer_invoices"("customer_invoice_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_invoices" ADD CONSTRAINT "customer_invoices_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers_data"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_invoices_items_details" ADD CONSTRAINT "customer_invoices_items_details_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items_data"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_invoices_items_details" ADD CONSTRAINT "customer_invoices_items_details_print_option_id_fkey" FOREIGN KEY ("print_option_id") REFERENCES "print_options"("print_option_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_invoices_items_details" ADD CONSTRAINT "customer_invoices_items_details_customer_invoice_id_fkey" FOREIGN KEY ("customer_invoice_id") REFERENCES "customer_invoices"("customer_invoice_id") ON DELETE RESTRICT ON UPDATE CASCADE;
