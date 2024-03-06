// require packages
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// import other files
const productRoutes = require('./routes/productsRoute')
const productMiddleware = require('./middleware/middleware')

// create express app
const app = express()

// middleware
app.use(productMiddleware)

// routes
app.use('/api/products', productRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for reqests
        app.listen(process.env.PORT, () => {
            console.log('Connected to the DataBase')
            console.log('listening on port ' + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })