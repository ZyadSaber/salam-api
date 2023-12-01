/*
  Warnings:

  - You are about to drop the column `email` on the `customers_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customers_data" DROP COLUMN "email",
ALTER COLUMN "phone" SET DEFAULT E'',
ALTER COLUMN "address" SET DEFAULT E'';
