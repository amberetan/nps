const mongoose = require("mongoose")
const Schema = mongoose.Schema


const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    listItems: [{
        type: String
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("List", listSchema)