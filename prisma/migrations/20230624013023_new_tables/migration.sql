-- CreateTable
CREATE TABLE "cash_receipt_voucher" (
    "receipt_voucher_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "voucher_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voucher_amount" DECIMAL(65,30) NOT NULL,
    "customer_id" INTEGER,
    "supplier_id" INTEGER,
    "notes" TEXT,

    CONSTRAINT "cash_receipt_voucher_pkey" PRIMARY KEY ("receipt_voucher_id")
);

-- CreateTable
CREATE TABLE "cash_payment_voucher" (
    "payment_voucher_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "voucher_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "voucher_amount" DECIMAL(65,30) NOT NULL,
    "customer_id" INTEGER,
    "supplier_id" INTEGER,
    "notes" TEXT,

    CONSTRAINT "cash_payment_voucher_pkey" PRIMARY KEY ("payment_voucher_id")
);

-- AddForeignKey
ALTER TABLE "cash_receipt_voucher" ADD CONSTRAINT "cash_receipt_voucher_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers_data"("supplier_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cash_receipt_voucher" ADD CONSTRAINT "cash_receipt_voucher_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers_data"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cash_payment_voucher" ADD CONSTRAINT "cash_payment_voucher_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "suppliers_data"("supplier_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cash_payment_voucher" ADD CONSTRAINT "cash_payment_voucher_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers_data"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;
