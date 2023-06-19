/*
  Warnings:

  - Changed the type of `customer_invoice_date` on the `customer_invoices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "customer_invoices" DROP COLUMN "customer_invoice_date",
ADD COLUMN     "customer_invoice_date" TIMESTAMP(3) NOT NULL;
