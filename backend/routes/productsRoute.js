// require express
const express = require('express')

// define express router
const router = express.Router()

const Product = require('../models/productModel')
const { 
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
 } = require('../controllers/productController.js')

// get all products
router.get('/', getProducts)
// get single product
router.get('/:id', getProduct)
// create a new product
router.post('/', createProduct)
// delete a product
router.delete('/:id', deleteProduct)
// update a product
router.patch('/:id', updateProduct)

module.exports = router