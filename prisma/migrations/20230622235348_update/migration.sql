/*
  Warnings:

  - You are about to drop the `bookmark` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookmark" DROP CONSTRAINT "bookmark_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "user_role" INTEGER;

-- DropTable
DROP TABLE "bookmark";

-- CreateTable
CREATE TABLE "app_pages" (
    "page_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "page_name" TEXT NOT NULL,
    "Page_Link" TEXT NOT NULL,
    "page_disabled" VARCHAR(1) DEFAULT E'N',
    "run_in_modal" VARCHAR(1) DEFAULT E'N',
    "parent_name" TEXT DEFAULT E'',

    CONSTRAINT "app_pages_pkey" PRIMARY KEY ("page_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "app_pages_page_name_key" ON "app_pages"("page_name");

-- CreateIndex
CREATE UNIQUE INDEX "app_pages_Page_Link_key" ON "app_pages"("Page_Link");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_user_role_fkey" FOREIGN KEY ("user_role") REFERENCES "app_pages"("page_id") ON DELETE SET NULL ON UPDATE CASCADE;
