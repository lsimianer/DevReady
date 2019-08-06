const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const DeveloperSchema = new Schema({
    email: {
        type: String,
        unique: true, 
        required: true
    },
    password:{    
        password: String, // might be unnecessary when we do Google integration
        authType: String,
        googleId: String,
    },
    name: {
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
    date: {
        type: Date,
        default: Date.now,
    }
})

DeveloperSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password)
}

DeveloperSchema.pre('save', function(next){
    if(this.authType !== "google"){
        return bcrypt.genSalt(10).then(salt => {
            return bcrypt.hash(this.password, salt)
        }).then(hash => {
            this.password = hash
            return Promise.resolve()
        })
    } else {
        return Promise.resolve()
    }
});

const Developer = mongoose.model("Developer", DeveloperSchema)

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
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = Developer = mongoose.model('developer', DeveloperSchema);