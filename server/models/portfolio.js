const mongoose = require("mongoose")

const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const portfolioSchema = new mongoose.Schema({
    userId: setStringType(512),
    company: setStringType(256),
    title: setStringType(256),
    location: setStringType(128),
    position: setStringType(256),
    description: setStringType(2048),
    startDate: {type: Date, required: true},
    endDate: Date
})

module.exports = mongoose.model('Portfolio', portfolioSchema)