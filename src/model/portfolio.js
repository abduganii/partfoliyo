const mongoose = require("mongoose")

const portfolioSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    categorieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"portfoliocategories"
    },
    createdAt: {
        type: Date,
        default:Date.now
    }
})

const portfolioModel = mongoose.model("portfolio", portfolioSchema)

module.exports = portfolioModel