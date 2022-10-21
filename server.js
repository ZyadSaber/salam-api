const express = require('express');
const cusotmerRoustes = require('./src/customers/routes')
const suppliersRoutes = require('./src/suppliers/routes')
const itemsRoutes = require('./src/items/routes')
const cors = require('cors')
const app = express(express);
const port = 3001;

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.send("");
})

app.use('/api/v1/basicData', cusotmerRoustes)
app.use('/api/v1/basicData', suppliersRoutes)
app.use('/api/v1/basicData', itemsRoutes)
app.listen(port, ()=>console.log(`Server is up and Running on port ${port}`))