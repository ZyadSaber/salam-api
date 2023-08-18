-- AlterTable
ALTER TABLE "cash_payment_voucher" ADD COLUMN     "expense_type_id" INTEGER;

-- AddForeignKey
ALTER TABLE "cash_payment_voucher" ADD CONSTRAINT "cash_payment_voucher_expense_type_id_fkey" FOREIGN KEY ("expense_type_id") REFERENCES "expense_types"("expense_type_id") ON DELETE SET NULL ON UPDATE CASCADE;
