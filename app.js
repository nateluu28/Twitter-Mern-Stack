const mongoose = require('mongoose');
const db = require('./config/keys');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req,res) => res.send('Hello world'));

app.listen(port, () => console.log(`Server is running on port ${port}`));

