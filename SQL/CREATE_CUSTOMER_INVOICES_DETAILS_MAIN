CREATE TABLE customer_invoices (
	customer_invoice_id  VARCHAR(255) PRIMARY KEY NOT NULL,
	customer_id INT REFERENCES customers(customer_id),
	invoice_note VARCHAR(244),
	date VARCHAR(255),
	total decimal NOT NULL,
	discount decimal NOT NULL,
	total_after_discount decimal NOT NULL,
	paid decimal NOT NULL,
	credit decimal NOT NULL
);

CREATE TABLE customer_invoices_items_details (
    row_key serial PRIMARY KEY ,
    customer_invoice_id varchar(255) REFERENCES customer_invoices(customer_invoice_id),
	print_id INT NOT NULL REFERENCES print_options(print_id),
    item_id int REFERENCES items(item_id),
    width int NOT NULL ,
    height int NOT NULL ,
    size int NOT NULL ,
    quantity int NOT NULL ,
    price int NOT NULL ,
    total int NOT NULL ,
    notes varchar(255)
);