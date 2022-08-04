const mongoose = require("mongoose")

const ourTeamSchema = mongoose.Schema({
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

const ourTeamModel = mongoose.model("ourTeam", ourTeamSchema)

module.exports = ourTeamModel