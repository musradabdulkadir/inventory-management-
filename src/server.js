const express = require("express")
const app = express()
const port = 4000
const productRoute = require('./routes/productRoute')
app.use(express.json())

app.use('/product',productRoute)

app.listen(port, () =>{
    console.log(`Server is running on localhost://${port}`)
})
