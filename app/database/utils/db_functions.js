const mongoose = require('mongoose')

module.exports = {
    isValidId: function (id) {
        if (!id) return
        return mongoose.isValidObjectId(id)
    }
}