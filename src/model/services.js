const mongoose = require("mongoose")

const servicesSchema = mongoose.Schema({
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

const servicesModel = mongoose.model("services", servicesSchema)

module.exports = servicesModel