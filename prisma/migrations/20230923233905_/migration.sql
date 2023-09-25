-- AlterTable
ALTER TABLE "page_parent" ADD COLUMN     "users_id" INTEGER;

-- AddForeignKey
ALTER TABLE "page_parent" ADD CONSTRAINT "page_parent_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
