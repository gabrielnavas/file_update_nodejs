const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev')) //for logs
app.use(require('./routes'))

app.listen(3000, () => console.log("RUNNING"))