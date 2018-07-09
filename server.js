const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

const PORT = 8000;
const SECRET = "secret_key_for_auth_tokens";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/email_builder');

mongoose.connection
  .once( 'open', () => console.log("mongoDB connected") )
  .on( 'error', (error) => console.warn("Error",error) );

const User = require('./mongodb_models/user');

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));

app.post('/register', (req,res) => {

  const { username, email, password } = req.body;

  const salt = crypto.randomBytes(128).toString('hex');

  const hashedPassword = crypto.pbkdf2Sync(password,salt,10000,512,'sha512').toString('hex');

  const user = new User({
    username,
    email,
    password: hashedPassword,
    salt,
  });

  user.save()
    .then( () => {
      res.sendStatus(200);
    })
    .catch( () => {
      res.sendStatus(500);
    });

});

app.post('/login', (req,res) => {

  const { email, password } = req.body;

  User.findOne({ email })
    .then( (user) => {
      
      const salt = user.salt;

      const hashedPassword = crypto.pbkdf2Sync(password,salt,10000,512,'sha512').toString('hex');

      if(hashedPassword === user.password)
      {
        jwt.sign({ user }, SECRET, { expiresIn: '1d' }, (err, token) => {
          res.json({
            token
          });
        });
      }
      else
      {
        res.sendStatus(403);
      }

    })
    .catch( () => {
      res.sendStatus(404);
    })

});

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});
