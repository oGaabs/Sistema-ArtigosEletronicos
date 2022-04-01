module.exports = async function homeController(app, db) {
    app.get('/', async (_req, res) => {
        const listaProdutos = await exibeProdutos()
        res.render('home', { listaProdutos })
    })
    //array.slice(0, n);
    function exibeProdutos() {
        return db.productSchema.find({}).lean().exec()
    }
}
