const Fs = require('fs')
const db = require('../database/db')

module.exports = function route(app) {
    const path = 'app/components'
    Fs.readdirSync(path).forEach(file => {
        try {
            const filePath = path + '/' + file
            if (file.endsWith('.js')) {
                const Listener = require('../../' + filePath)
                return Listener(app, db)
            }
            if (Fs.lstatSync(filePath).isDirectory())
                this.initListeners(filePath)
        }
        catch (err) {
            console.error(err)
        }
    })
}