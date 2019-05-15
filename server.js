const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = config.mongoURI;

mongoose
    .connect(db,{
      useNewUrlParser: true,
      useCreateIndex: true})
    .then(()=>{console.log('mongoDB connected')})
    .catch(err=>{console.log(err)});

app.use('/api/project', require('./routes/api/project'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server now listening at port ${port}`);
});
