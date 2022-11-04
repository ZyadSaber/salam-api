const express = require('express');
const cusotmerRoustes = require('./src/customers/routes')
const suppliersRoutes = require('./src/suppliers/routes')
const itemsRoutes = require('./src/items/routes')
const employees = require('./src/employees/routes')
const cors = require('cors')
const app = express(express);
const port = 9090;

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("");
})

app.use('/api/v1/basicData', cusotmerRoustes)
app.use('/api/v1/basicData', suppliersRoutes)
app.use('/api/v1/basicData', itemsRoutes)
app.use('/api/v1/employeesData', employees)
app.listen(port, ()=>console.log(`Server is up and Running on port ${port}`))