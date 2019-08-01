const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const dbRoute =
`mongodb+srv://lsimianer:simianer1@cluster0-7z1it.mongodb.net/test?retryWrites=true&w=majority`;
// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  // DB Config
  const db = require("./config/keys").mongoURI;
  // Connect to MongoDB
  mongoose
    .connect(
      dbRoute,
      { useNewUrlParser: true }
    )
    .then(() => console.log("that mongo thing... its working again"))
    .catch(err => console.log(err));

  const port = 3001;
  app.listen(port, () => console.log(`Server up and running on port ${port} !`));


