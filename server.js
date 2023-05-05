const express = require('express');
const cusotmerRoustes = require('./src/customers/routes')
const suppliersRoutes = require('./src/suppliers/routes')
const itemsRoutes = require('./src/items/routes')
const employees = require('./src/employees/routes')
const printOption = require('./src/printOptions/routes')
const supplierInvoiceRouter = require("./src/supplier_invoice/routes")
const customerInvoiceRouter = require("./src/customer_invoice/routes")
const InvoiceSearch = require("./src/InvoiceSearch/routes")
const employeeAttendance = require("./src/employee_attendance/routes")
const employeeLeaving = require("./src/employee_leaving/routes")
const EmployeeSheet = require("./src/employeeSheet/routes");
const casherReceiptVoucher = require("./src/casher-receipt-voucher/routes")
const users = require("./src/Users/routes")
const labels = require("./src/language_labels/routes")
const Assets = require("./src/Assets/routes");
const Home = require("./src/dashboard-home/routes")
const cors = require('cors')
const app = express(express);
const port = 9090;
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'build')))

app.use('/api/v1/basicData', cusotmerRoustes)
app.use('/api/v1/basicData', suppliersRoutes)
app.use('/api/v1/basicData', itemsRoutes);
app.use('/api/v1/basicData', printOption);
app.use("/api/v1/invoices", supplierInvoiceRouter)
app.use("/api/v1/invoices", customerInvoiceRouter)
app.use("/api/v1/invoices", InvoiceSearch)
app.use('/api/v1/employeesData', employees)
app.use('/api/v1/employeesData', employeeAttendance)
app.use('/api/v1/employeesData', employeeLeaving)
app.use('/api/v1/employeesData', EmployeeSheet)
app.use('/api/v1/income_expense', casherReceiptVoucher)
app.use('/api/v1/home', Home)
app.use("/api/v1", users)
app.use("/api/v1", labels)
app.use("/api/v1", Assets)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
    // res.status(404).sendFile("./Views/404.html", {root: __dirname})
})
app.listen(port, () => console.log(`Server is up and Running on port ${port}`))
