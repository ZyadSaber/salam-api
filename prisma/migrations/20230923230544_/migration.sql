/*
  Warnings:

  - You are about to drop the column `parent_name` on the `app_pages` table. All the data in the column will be lost.
  - You are about to drop the column `user_role_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `user_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_role" DROP CONSTRAINT "user_role_page_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_role_id_fkey";

-- AlterTable
ALTER TABLE "app_pages" DROP COLUMN "parent_name",
ADD COLUMN     "page_parent_id" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_role_id";

-- DropTable
DROP TABLE "user_role";

-- CreateTable
CREATE TABLE "page_parent" (
    "page_parent_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "page_parent_name" TEXT NOT NULL,
    "hidde" VARCHAR(1) NOT NULL DEFAULT E'N',

    CONSTRAINT "page_parent_pkey" PRIMARY KEY ("page_parent_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "page_parent_page_parent_name_key" ON "page_parent"("page_parent_name");

-- AddForeignKey
ALTER TABLE "app_pages" ADD CONSTRAINT "app_pages_page_parent_id_fkey" FOREIGN KEY ("page_parent_id") REFERENCES "page_parent"("page_parent_id") ON DELETE SET NULL ON UPDATE CASCADE;
