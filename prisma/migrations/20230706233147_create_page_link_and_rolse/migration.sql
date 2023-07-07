/*
  Warnings:

  - You are about to drop the column `Page_Link` on the `app_pages` table. All the data in the column will be lost.
  - You are about to drop the column `user_role` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[page_link]` on the table `app_pages` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `page_link` to the `app_pages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_role_fkey";

-- DropIndex
DROP INDEX "app_pages_Page_Link_key";

-- AlterTable
ALTER TABLE "app_pages" DROP COLUMN "Page_Link",
ADD COLUMN     "page_link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_role",
ADD COLUMN     "user_role_id" INTEGER;

-- CreateTable
CREATE TABLE "user_role" (
    "user_role_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_role_name" TEXT NOT NULL,
    "user_access" VARCHAR(1) NOT NULL DEFAULT E'N',
    "page_id" INTEGER NOT NULL,

    CONSTRAINT "user_role_pkey" PRIMARY KEY ("user_role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_role_user_role_name_key" ON "user_role"("user_role_name");

-- CreateIndex
CREATE UNIQUE INDEX "app_pages_page_link_key" ON "app_pages"("page_link");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "user_role"("user_role_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role" ADD CONSTRAINT "user_role_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "app_pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;
