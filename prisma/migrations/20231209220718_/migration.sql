/*
  Warnings:

  - You are about to drop the column `employee_email` on the `employees_data` table. All the data in the column will be lost.
  - The `date_of_hiring` column on the `employees_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `employee_attendance_time` on the `employees_data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `employee_leaving_time` on the `employees_data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "employees_data" DROP COLUMN "employee_email",
DROP COLUMN "employee_attendance_time",
ADD COLUMN     "employee_attendance_time" TIMESTAMP(3) NOT NULL,
DROP COLUMN "employee_leaving_time",
ADD COLUMN     "employee_leaving_time" TIMESTAMP(3) NOT NULL,
DROP COLUMN "date_of_hiring",
ADD COLUMN     "date_of_hiring" TIMESTAMP(3);
