/*
  Warnings:

  - The `employee_phone` column on the `employees_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `employee_mobile` column on the `employees_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "employees_data" DROP COLUMN "employee_phone",
ADD COLUMN     "employee_phone" INTEGER,
DROP COLUMN "employee_mobile",
ADD COLUMN     "employee_mobile" INTEGER;
