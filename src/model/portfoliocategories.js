const mongoose = require("mongoose")

const portfoliocategoriesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    portfolios:[{ type: mongoose.Schema.Types.ObjectId, ref: "portfolio" }]
})

const portfoliocategoriesModel = mongoose.model("portfoliocategories", portfoliocategoriesSchema)

module.exports = portfoliocategoriesModel