const mongoose = require('mongoose');

const postModel = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        default:"Dummy Description",
        required: true
    },
    date: Date.now
})

module.exports = mongoose.model('Posts',postModel)