const mongoose = require("mongoose")
const Schema = mongoose.Schema


const tripSchema = new Schema({
    title: {
        type: String
    },
    location: [{
        type: String
    }],
    lodging: [{
        type: String
    }],
    date: {
        type: String
    },
    activities: [{
        type: String
    }],
    complete: {
        type: Boolean
    },
    good: {
        type: String
    },
    bad: {
        type: String
    },
    rememberNextTime: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Trip", tripSchema)