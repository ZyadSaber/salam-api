-- AlterTable
CREATE SEQUENCE "customer_invoices_customer_invoice_id_seq";
ALTER TABLE "customer_invoices" ALTER COLUMN "customer_invoice_id" SET DEFAULT nextval('customer_invoices_customer_invoice_id_seq');
ALTER SEQUENCE "customer_invoices_customer_invoice_id_seq" OWNED BY "customer_invoices"."customer_invoice_id";
