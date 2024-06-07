const mongoose = require('mongoose');

const uploadRescue = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    lat: {
        type: String,
        required: true
    },
    long:{
        type: String,
        required: true
    }
}
,
    {timestamp: true})

    module.exports = mongoose.model('uploadRescue', uploadRescue);