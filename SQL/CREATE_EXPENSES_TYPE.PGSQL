CREATE TABLE expenses_type(
    expense_id serial PRIMARY KEY,
    expense_name varchar(255) not null,
    notes varchar(255)
)