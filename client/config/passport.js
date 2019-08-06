// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const mongoose = require("mongoose");
// const Dev = mongoose.model("developers");
// const keys = require("../config/keys");
// const opts = {};
const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user')

// Local Strategy
passport.use(
    new LocalStrategy(
        {
            usernameField: "email"
        },
        function(email, password, done){
            Developer.findOne({
                email
            }).then(dbUser => {
                if(!dbDeveloper){
                    return done(null, false, { message: "Incorrect Email or Password"}) // we don't specify for security sake
                }
                // This is asynchronous to prevent timing based attacks
                return dbDeveloper.checkPassword(password).then(isCorrect => {
                    if(!isCorrect){
                        return done(null, false, { message: "Incorrect Email or Password"}) // we don't specify for security sake
                    } else {
                        // All good, proceed
                        return done(null, dbDeveloper)
                    }
                })
            }).catch(err => console.log(err))
        }
    )
)

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

module.exports = passport 







// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = keys.secretOrKey;

// module.exports = passport => {
//   passport.use(
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       Dev.findById(jwt_payload.id)
//         .then(user => {
//           if (user) {
//             return done(null, user);
//           }
//           return done(null, false);
//         })
//         .catch(err => console.log(err));
//     }),
//     new JwtStrategy(opts, (jwt_payload, done) => {
//       Recruiter.findById(jwt_payload.id)
//         .then(user => {
//           if (user) {
//             return done(null, user);
//           }
//           return done(null, false);
//         })
//         .catch(err => console.log(err));
//     }), );
//   }
