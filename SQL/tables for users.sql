-- CREATE TABLE users(
-- 	user_id  SERIAL PRIMARY KEY,
-- 	user_name VARCHAR(255),
-- 	user_password VARCHAR(255),
-- 	display_name VARCHAR(255),
-- 	user_created VARCHAR(255),
-- 	user_modified VARCHAR(255)
-- );

-- CREATE TABLE user_permission(
-- 	user_id INT REFERENCES users(user_id),
-- )

-- CREATE TABLE users_sessions(
-- 	session_id SERIAL PRIMARY KEY NOT NULL,
-- 	user_id INT REFERENCES users(user_id),
-- 	session_date varchar(255)
-- );

-- INSERT INTO user_permission (user_id, suppliers, customers, items, printOptions, supplierInvoices, customerInvoices, invoicesSearch, employeeAttendance, employeeLeaving, employeeSalary, employeeData, customersSummary, suppliersSummary, itemsSummary, dailyTotals, monthlyTotals, yearlyTotals, expensesTotals, users) VALUES (1, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true);

SELECT * FROM users_sessions


