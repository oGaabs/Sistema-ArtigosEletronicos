module.exports = async function productController(app, db) {
    app.get('/product/:id', async (req, res) => {
        const id = req.params.id
        const product = await db.productSchema.findById(id).lean()
        res.render('product', { title: `${product.type} - ${product.name}`,
                                produto: product })
    })
}