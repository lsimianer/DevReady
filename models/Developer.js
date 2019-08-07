var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeveloperSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    aboutMe: {
        type: String,
        required: false
    },
    veteran: {
        type: Boolean
    },
    felony: {
        type: Boolean
    },
    experience: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Developer = mongoose.model('developer', DeveloperSchema);