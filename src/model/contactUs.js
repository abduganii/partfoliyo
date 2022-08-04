const mongoose = require("mongoose")

const contactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true 
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
})

const contactUsodel = mongoose.model("contactUs", contactUsSchema)

module.exports = contactUsodel