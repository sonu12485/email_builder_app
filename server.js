const express = require('express');
const morgan = require('morgan');
const path = require('path');

const mongoose  = require('mongoose');

const app = express();
app.use(morgan('combined'));

const PORT = 8000;

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*',function(req,res){
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`);
});
