const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    category: { name: String, text: String },
    name: String, type: String, model: String,
    description: String, price: Number, image: String
},
    { collection: 'products' }
)

module.exports = model('ProductSchema', productSchema)