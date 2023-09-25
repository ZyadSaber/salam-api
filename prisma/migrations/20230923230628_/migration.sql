/*
  Warnings:

  - You are about to drop the column `hidde` on the `page_parent` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "page_parent" DROP COLUMN "hidde",
ADD COLUMN     "hidden" VARCHAR(1) NOT NULL DEFAULT E'N';
