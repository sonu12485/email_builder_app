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

const { default_data, default_body } = require('./default_template_data');

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
    templates: []
  });

  User.findOne({ email })
    .then( (temp_user) => {

      if(temp_user)
      {
        console.log("user",temp_user);
        res.sendStatus(403);
      }
      else
      {
        user.save()
        .then( () => {
          
          User.findOne({ email })
            .then( added_user => {

              added_user.templates.push({
                name: 'Default',
                data: default_data,
                body: default_body,
                default: true
              });

              added_user.save()
                .then( () => {
                  res.sendStatus(200);
                });

            });

        })
        .catch( () => {
          res.sendStatus(500);
        });
      }

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
        jwt.sign({ email: user.email }, SECRET, { expiresIn: '1d' }, (err, token) => {
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

function getAuthToken(req, res, next)
{
  const authHeader = req.headers['authorization'];

  if(typeof authHeader !== 'undefined')
  {
    const token = authHeader.split(' ')[1];

    req.token = token;

    next();
  }
  else
  {
    res.sendStatus(403);
  }
}

app.post('/save', getAuthToken, (req,res) => {

  const templateObj = req.body;

  jwt.verify(req.token, SECRET, (err, authData) => {

    if(err)
    {
      res.sendStatus(403);
    }
    else
    {
      const email = authData.email;

      User.findOne({ email })
        .then( (user) => {

          user.templates.push(templateObj);

          user.save()
            .then( () => {
              res.sendStatus(200);
            })
            .catch( () => {
              res.sendStatus(500);
            });

        })
        .catch( () => {
          res.sendStatus(500);
        });
    }

  });

});

app.post('/templates', getAuthToken, (req,res) => {

  jwt.verify(req.token, SECRET, (err, authData) => {

    if(err)
    {
      res.sendStatus(403);
    }
    else
    {
      const email = authData.email;

      User.findOne({ email })
        .then( (user) => {

          res.json(user.templates);

        })
        .catch( () => {
          res.sendStatus(500);
        });
    }

  });

});

app.post('/delete', getAuthToken, (req,res) => {

  const name = req.body.name;

  jwt.verify(req.token, SECRET, (err, authData) => {

    if(err)
    {
      res.sendStatus(403);
    }
    else
    {
      const email = authData.email;

      User.findOne({ email })
        .then( (user) => {

          const new_templates = user.templates.filter( template => {
            return template.name !== name
          });

          user.templates = new_templates;

          user.save()
            .then( () => {

              User.findOne({ email })
                .then( (user) => {
        
                  res.json(user.templates);
        
                })
                .catch( () => {
                  res.sendStatus(500);
                });

            })
            .catch( () => {
              res.sendStatus(500);
            });

        })
        .catch( () => {
          res.sendStatus(500);
        });
    }

  });

});

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}!`);
});
