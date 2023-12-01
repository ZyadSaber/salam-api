-- AlterTable
ALTER TABLE "items_data" ADD COLUMN     "item_price" DECIMAL(65,30) DEFAULT 0,
ALTER COLUMN "item_unit" DROP NOT NULL,
ALTER COLUMN "item_unit" SET DEFAULT E'unit',
ALTER COLUMN "item_description" SET DEFAULT E'';
