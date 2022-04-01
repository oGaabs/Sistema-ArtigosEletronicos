const productSchema = require('./models/product')
const functions = require('./utils/db_functions')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {}, (err) => {
    if (!err) return
    console.log(`Erro ao tentar conectar com o banco de dados \n${err.stack}`)
    process.exit(1)
})

module.exports = { productSchema, functions }