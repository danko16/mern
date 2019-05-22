const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;
const db = process.env.MONGO_URI;

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(db,{
      useNewUrlParser: true,
      useCreateIndex: true})
    .then(()=>{console.log('mongoDB connected')})
    .catch(err=>{console.log(err)});

app.use('/api/project', require('./routes/api/project'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server now listening at port ${port}`);
});
