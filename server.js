require('dotenv').config()
const express = require("express");
const session = require('express-session')
const mongoose = require("mongoose");
const path = require('path')

const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('./client/config/passport.js')
const { google } = require("googleapis")

const db = require("./models")

// Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
// app.use(bodyParser.json());
// // DB Config
// // const db = require("./client/config/keys").mongoURI;
// const db = "mongodb://localhost/DevReadyDB";

// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log("MongoDB successfully connected"))
//   .catch(err => console.log(err));
// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DevReadyDB");

// app.use(
//   session({
//   secret: 'timmy',
//   })
// )

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
const googleConfig = {
  clientId:381331286231-qsjpgpc0h2o6baig0ppkcg6ej1oomq66.apps.googleusercontent.com,
  clientSecret:9Z4X07e1LQ9Jr9vJOALvKZjk,
  redirect:process.env.GOOGLE_REDIRECT_URI
}

const defaultScope = [
  'https://www.googleapis.com/auth/developerinfo.email'
]

function createConnection(){
  return new google.auth.OAuth2(
      googleConfig.clientId,
      googleConfig.clientSecret,
      googleConfig.redirect
  )
}
function getConnectionUrl(){
  return createConnection().generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: defaultScope
  })
}


app.use(express.urlencoded({extended:true}))
app.use(express.json())

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

app.use(session({secret: process.env.SESSION_SECRET || "the cat ate my keyboard", resave: true, saveUninitialized: true}))
app.use(passport.initialize());
app.use(passport.session());

// API ROUTES GO HERE
app.post('/api/login', passport.authenticate("local"),  (req, res) => {
  res.json(req.developer)
})
app.get('/api/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

app.get('/api/developer/me', function(req, res){
  if(req.developer){
      res.json({
          email: req.developer.email
      })
  } else {
      res.sendStatus(401)
  }
  
})

app.get('/api/google/url', (req, res) => {
  res.json({url: getConnectionUrl()})
})

function getGoogleAccountFromCode(code){
  console.log("CODE");
  console.log(code);
  return createConnection().getToken(code).then(data => {
      console.log("DATA");
      console.log(data.tokens)
      return Promise.resolve(data.tokens)
  })
}

app.post('/api/google/code', (req, res) => {
  const { code } = req.body;
  getGoogleAccountFromCode(code).then(tokens => {
      console.log(tokens)
      const developerconnection = createConnection()
      developerconnection.setCredentials(tokens)
      developerconnection.getTokenInfo(tokens.access_token).then(data => {
          console.log("TOKEN INFO");
          console.log(data);
          const {email, sub } = data;

          db.developer.findOne({ email }).then(dbDeveloper => {
              if(!dbDeveloper){
                  // create a new developer!
                  db.developer.create({
                      email,
                      authType: "google",
                      googleId: sub
                  }).then(finaldbDeveloper => {
                      req.login(finaldbDeveloper, () => {
                          res.json(true)
                      })
                  }).catch(err => {
                      console.log(err)
                      res.sendStatus(500)
                  })

              } else {
                  // Check the type and googleId
                  // if it matches, great! Login the developer!
                  // if not, something odd is up, reject it
                  console.log(dbDeveloper);
                  if(dbDeveloper.authType === "google" && dbDeveloper.googleId === sub + ""){
                      req.login(dbDeveloper, () => {
                          res.json(true)
                      });
                      
                  } else {
                      res.sendStatus(500)
                  }
              }
          })

      }).catch(() => {
          res.sendStatus(500)
      })
  })
})

app.get('/api/google/callback', function(req, res){
  const code = req.query.code
  getGoogleAccountFromCode(code).then(tokens => {
      const developerconnection = createConnection()
      developerconnection.setCredentials(tokens)
      developerconnection.getTokenInfo(tokens.access_token).then(data => {
          const {email, sub } = data;
          db.developer.findOne({ email }).then(dbDeveloper => {
              console.log(dbDeveloper);
              if(!dbDeveloper){
                  console.log("NEW DEVELOPER");
                  // create a new developer!
                  db.Developer.create({
                      email,
                      authType: "google",
                      googleId: sub
                  }).then(finaldbDeveloper => {
                      req.login(finaldbDeveloper, () => {
                          res.redirect(process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/");
                      })
                  }).catch(err => {
                      console.log(err)
                      res.sendStatus(500)
                  })

              } else {
                  if(dbDeveloper.authType === "google" && dbDeveloper.googleId === sub + ""){
                      req.login(dbDeveloper, () => {
                          res.redirect(process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/");
                      })
                  } else {
                      res.sendStatus(500)
                  }
              }
          }).catch(err => console.log(err))

      }).catch(err => {
          console.log(err)
          res.sendStatus(500)
      })
  })
})

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ReadyDevDB")

app.listen(PORT, () => console.log(`I am listening... (on port ${PORT})`))

process.on('SIGINT', () => {
  mongoose.connection.close().then( () => {
      console.log("Mongoose disconnected");
      process.exit(0);
  })
})





