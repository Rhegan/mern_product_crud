// require express
const express = require('express')

// define express apps
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

module.exports = app