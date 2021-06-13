const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const passport = require('passport');
require('./config/passport')(passport);

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");

mongoose
  .connect(db, { useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));
  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/tweets', tweets);

app.use(passport.initialize());

app.listen(port, () => console.log(`Server is running on port ${port}`));
