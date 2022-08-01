const mongoose = require("mongoose")

const partnersSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const partnersModel = mongoose.model("partners", partnersSchema)

module.exports = partnersModel