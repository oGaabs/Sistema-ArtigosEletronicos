module.exports = async function cartController(app, db) {
    app.get('/compra/:id', async (req, res) => {
        const id = req.params.id
        if (!db.functions.isValidId(id)) return

        const product = await db.productSchema.findOne({ _id: id }).lean()
        res.render('cart', { title: `${product.type} - ${product.name}`,
                             produto: product })
    })
}