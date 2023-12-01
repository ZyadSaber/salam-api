/*
  Warnings:

  - You are about to drop the column `email` on the `suppliers_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "suppliers_data" DROP COLUMN "email",
ALTER COLUMN "phone" SET DEFAULT E'',
ALTER COLUMN "address" SET DEFAULT E'';
