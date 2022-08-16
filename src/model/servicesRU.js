const mongoose = require("mongoose")

const servicesRUSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
})

const servicesRUModel = mongoose.model("servicesRU", servicesRUSchema)

module.exports = servicesRUModel