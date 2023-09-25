/*
  Warnings:

  - You are about to drop the column `users_id` on the `page_parent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "page_parent" DROP CONSTRAINT "page_parent_users_id_fkey";

-- AlterTable
ALTER TABLE "page_parent" DROP COLUMN "users_id";

-- CreateTable
CREATE TABLE "user_permissions" (
    "user_permissions_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "page_id" INTEGER NOT NULL,

    CONSTRAINT "user_permissions_pkey" PRIMARY KEY ("user_permissions_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_permissions_page_id_key" ON "user_permissions"("page_id");

-- AddForeignKey
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "app_pages"("page_id") ON DELETE RESTRICT ON UPDATE CASCADE;
