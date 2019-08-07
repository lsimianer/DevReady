var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 5;


var DeveloperSchema = new Schema({
    developername: { 
        type: String, 
        required: true, 
        index: { unique: true } 
    },
    password: { 
        type: String, 
        required: true
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

DeveloperSchema.pre('save', function(next) {
    var developer = this;

    // only hash the password if it has been modified (or is new)
    if (!developer.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(developer.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            developer.password = hash;
            next();
        });
    });
});

DeveloperSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
     
    });
};

module.exports = Developer = mongoose.model('developer', DeveloperSchema);