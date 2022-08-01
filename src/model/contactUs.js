const mongoose = require("mongoose")

const contactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        require:true
    },
    text: {
        type: String,
        require:true 
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
})

const contactUsodel = mongoose.model("contactUs", contactUsSchema)

module.exports = contactUsodel