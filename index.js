require('dotenv').config()

const app = require('./host')
const porta = process.env.PORT || 3000

app.listen(porta, () => console.log('> Servidor NodeJS funcionando na porta ' + porta + '.'))