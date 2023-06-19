-- AlterTable
CREATE SEQUENCE "supplier_invoices_supplier_invoice_id_seq";
ALTER TABLE "supplier_invoices" ALTER COLUMN "supplier_invoice_id" SET DEFAULT nextval('supplier_invoices_supplier_invoice_id_seq');
ALTER SEQUENCE "supplier_invoices_supplier_invoice_id_seq" OWNED BY "supplier_invoices"."supplier_invoice_id";
