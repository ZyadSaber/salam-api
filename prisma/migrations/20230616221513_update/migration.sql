/*
  Warnings:

  - The primary key for the `customer_invoices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `customer_invoice_id` column on the `item_inventory` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `customer_invoice_id` on the `customer_invoices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `customer_invoice_id` on the `customer_invoices_items_details` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "customer_invoices_items_details" DROP CONSTRAINT "customer_invoices_items_details_customer_invoice_id_fkey";

-- DropForeignKey
ALTER TABLE "item_inventory" DROP CONSTRAINT "item_inventory_customer_invoice_id_fkey";

-- AlterTable
ALTER TABLE "customer_invoices" DROP CONSTRAINT "customer_invoices_pkey",
DROP COLUMN "customer_invoice_id",
ADD COLUMN     "customer_invoice_id" INTEGER NOT NULL,
ADD CONSTRAINT "customer_invoices_pkey" PRIMARY KEY ("customer_invoice_id");

-- AlterTable
ALTER TABLE "customer_invoices_items_details" DROP COLUMN "customer_invoice_id",
ADD COLUMN     "customer_invoice_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "item_inventory" DROP COLUMN "customer_invoice_id",
ADD COLUMN     "customer_invoice_id" INTEGER;

-- AddForeignKey
ALTER TABLE "item_inventory" ADD CONSTRAINT "item_inventory_customer_invoice_id_fkey" FOREIGN KEY ("customer_invoice_id") REFERENCES "customer_invoices"("customer_invoice_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_invoices_items_details" ADD CONSTRAINT "customer_invoices_items_details_customer_invoice_id_fkey" FOREIGN KEY ("customer_invoice_id") REFERENCES "customer_invoices"("customer_invoice_id") ON DELETE RESTRICT ON UPDATE CASCADE;
