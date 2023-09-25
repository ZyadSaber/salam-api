/*
  Warnings:

  - You are about to drop the column `user_id` on the `app_pages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "app_pages" DROP CONSTRAINT "app_pages_user_id_fkey";

-- AlterTable
ALTER TABLE "app_pages" DROP COLUMN "user_id";
