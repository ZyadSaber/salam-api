/*
  Warnings:

  - You are about to drop the column `item_id` on the `supplier_invoices_items_details` table. All the data in the column will be lost.
  - Added the required column `supplier_invoice_item_id` to the `supplier_invoices_items_details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "supplier_invoices_items_details" DROP CONSTRAINT "supplier_invoices_items_details_item_id_fkey";

-- AlterTable
ALTER TABLE "supplier_invoices_items_details" DROP COLUMN "item_id",
ADD COLUMN     "supplier_invoice_item_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "supplier_invoices_items_details" ADD CONSTRAINT "supplier_invoices_items_details_supplier_invoice_item_id_fkey" FOREIGN KEY ("supplier_invoice_item_id") REFERENCES "items_data"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;
