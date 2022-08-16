const mongoose = require("mongoose")

const ourTeamRUSchema = mongoose.Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
})

const ourTeamRUModel = mongoose.model("ourTeamRU", ourTeamRUSchema)

module.exports = ourTeamRUModel