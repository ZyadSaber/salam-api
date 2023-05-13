CREATE TABLE item_inventory(
  transaction_id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers(customer_id),
  supplier_id INT REFERENCES suppliers(supplier_id),
  item_id INT REFERENCES items(item_id) NOT NULL,
  in_inv DECIMAL NOT NULL,
	out_inv DECIMAL NOT NULL
)