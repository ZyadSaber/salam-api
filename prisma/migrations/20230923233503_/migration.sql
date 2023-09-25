-- AlterTable
ALTER TABLE "app_pages" ADD COLUMN     "user_id" INTEGER;

-- AddForeignKey
ALTER TABLE "app_pages" ADD CONSTRAINT "app_pages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
