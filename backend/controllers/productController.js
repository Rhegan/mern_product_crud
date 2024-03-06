// require models
const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    res.status(200).json({products})
}

// get single product
const getProduct = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Product not found"})
    }
    const product = await Product.findById({_id: id})

    res.status(200).json({product})
}

// create a new product
const createProduct = async (req, res) => {
    // console.log(Product.schema.tree)
    // console.log(req.body)
    const { image, barcode, name, price, source, details, scraper } = req.body

    try {
        await Product.create( { 
            image, 
            barcode, 
            name, 
            price, 
            source: source.map(({ name, url, stock, image }) => ({ name, url, stock, image })), 
            details: details.map(({ description, category, dimensions, weight }) =>({ description, category, dimensions, weight })),
            scraper: scraper.map(({ url, image_tag, price_tag }) => ({ url, image_tag, price_tag }))
        })
        res.status(200).json({"message":"Product added successfully"})
    } catch (error){
        // Send an error response
        res.status(400).json( { error: error.message } )
    }
}

// delete a product
const deleteProduct = async (req, res) => {
    res.json({"message":"Delete a product"})
}

// update a product
const updateProduct = async (req, res) => {
    res.json({"message":"Update a product"})
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
}