const mongoose = require("mongoose")
const Schema = mongoose.Schema


const favSchema = new Schema({
    title: [{
        type: String,
        required: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Favorites", favSchema)