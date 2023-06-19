/*
  Warnings:

  - You are about to drop the column `credit` on the `customer_invoices` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `customer_invoices` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `customer_invoices` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `customer_invoices` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `customer_invoices` table. All the data in the column will be lost.
  - You are about to drop the column `total_after_discount` on the `customer_invoices` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `item_id` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `print_option_id` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `customer_invoices_items_details` table. All the data in the column will be lost.
  - Added the required column `customer_invoice_after_discount` to the `customer_invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_credit` to the `customer_invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_date` to the `customer_invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_discount` to the `customer_invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_paid` to the `customer_invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_total` to the `customer_invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_height` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_id` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_price` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_quantity` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_size` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_total` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_item_width` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_invoice_print_option_id` to the `customer_invoices_items_details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "customer_invoices_items_details" DROP CONSTRAINT "customer_invoices_items_details_item_id_fkey";

-- DropForeignKey
ALTER TABLE "customer_invoices_items_details" DROP CONSTRAINT "customer_invoices_items_details_print_option_id_fkey";

-- AlterTable
ALTER TABLE "customer_invoices" DROP COLUMN "credit",
DROP COLUMN "date",
DROP COLUMN "discount",
DROP COLUMN "paid",
DROP COLUMN "total",
DROP COLUMN "total_after_discount",
ADD COLUMN     "customer_invoice_after_discount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "customer_invoice_credit" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "customer_invoice_date" TEXT NOT NULL,
ADD COLUMN     "customer_invoice_discount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "customer_invoice_paid" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "customer_invoice_total" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "customer_invoices_items_details" DROP COLUMN "height",
DROP COLUMN "item_id",
DROP COLUMN "notes",
DROP COLUMN "price",
DROP COLUMN "print_option_id",
DROP COLUMN "quantity",
DROP COLUMN "size",
DROP COLUMN "total",
DROP COLUMN "width",
ADD COLUMN     "customer_invoice_item_height" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_item_id" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_item_notes" TEXT,
ADD COLUMN     "customer_invoice_item_price" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_item_quantity" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_item_size" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_item_total" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_item_width" INTEGER NOT NULL,
ADD COLUMN     "customer_invoice_print_option_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "customer_invoices_items_details" ADD CONSTRAINT "customer_invoices_items_details_customer_invoice_item_id_fkey" FOREIGN KEY ("customer_invoice_item_id") REFERENCES "items_data"("item_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_invoices_items_details" ADD CONSTRAINT "customer_invoices_items_details_customer_invoice_print_opt_fkey" FOREIGN KEY ("customer_invoice_print_option_id") REFERENCES "print_options"("print_option_id") ON DELETE RESTRICT ON UPDATE CASCADE;
