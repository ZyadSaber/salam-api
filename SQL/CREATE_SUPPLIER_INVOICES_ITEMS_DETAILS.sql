CREATE TABLE supplier_invoices_items_details (
    row_key serial PRIMARY KEY ,
    supplier_invoice_id varchar(255) REFERENCES supplier_invoices(supplier_invoice_id),
    item_id int REFERENCES items(item_id),
    width int NOT NULL ,
    height int NOT NULL ,
    size int NOT NULL ,
    quantity int NOT NULL ,
    price int NOT NULL ,
    total int NOT NULL ,
    notes varchar(255)
)