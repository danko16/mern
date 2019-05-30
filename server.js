const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const {
  PORT = 5000,
  MONGO_URI = "mongodb://localhost:27017/database",
  HOST = "127.0.0.1"
} = process.env;

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(MONGO_URI,{
      useNewUrlParser: true,
      useCreateIndex: true})
    .then(()=>{console.log('mongoDB connected')})
    .catch(err=>{console.log(err)});

app.use('/api/project', require('./routes/api/project'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, HOST, () => {
  console.log(`server now listening at port ${PORT}`);
});
