//require mongoose
const mongoose = require('mongoose')

//define schema variable
const schema = mongoose.Schema

// create schame
const productSchema = new schema({
    image: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    source: {
        type: [{
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            stock: {
                type: Number,
                required: true,
                default: 0
            },
            image: {
                type: String
            }
        }]
    },
    details: {
        type: [{
            description: {
                type: String
            },
            category: {
                type: String
            },
            dimensions: {
                type: String
            },
            weight: {
                type: Number
            }
        }]
    } ,
    scraper: {
        type: [{
            url: {
                type: String
            },
            image_tag: {
                type: String
            },
            price_tag: {
                type: String
            }
        }]
    }       
}, {timestamps: true})

module.exports = mongoose.model("Product", productSchema)