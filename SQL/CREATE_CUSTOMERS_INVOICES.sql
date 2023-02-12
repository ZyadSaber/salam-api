CREATE TABLE supplier_invoices (
    supplier_invoice_id varchar(255) NOT NULL PRIMARY KEY ,
    supplier_id int REFERENCES suppliers(supplier_id),
    invoice_note varchar(255)
);
