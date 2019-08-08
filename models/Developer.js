var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 5;


var DeveloperSchema = new Schema({
    developername: { 
        type: String, 

        required: true
        // index: { unique: true } 
    },
    email: { 
        type: String, 
        unique: true,
        required: true
     },
     password: { 
         type: String, 
         required: true
      },
    aboutMe: {
        type: String,
        
    },
    veteran: {
        type: Boolean
    },
    felony: {
        type: Boolean
    },
    experience: {
        type: Number,
        
    },
    companyName: {
        type: String,
        
    },
    cssScore: {
        type: Number,
        
    },
    pythonScore: {
        type: Number,
        
    },
    reactScore: {
        type: Number,
        
    },
    javaScriptScore: {
        type: Number,
        
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

DeveloperSchema.methods.comparePassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = Developer = mongoose.model('developer', DeveloperSchema);