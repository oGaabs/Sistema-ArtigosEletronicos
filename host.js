const path = require('path')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'app/public')))

app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs')

const rotas = require('./app/routes/route')
rotas(app)

app.get('*', async (_req, res) => {
    res.redirect('/')
})

module.exports = app