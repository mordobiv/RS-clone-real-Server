#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

var Client = require('./models/client')

var mongoose = require('mongoose');
const dev_db_url = 'mongodb+srv://mordobiv:1@cluster0.jzxw9cl.mongodb.net/test';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function clientCreate(name, username, mail, password) {
  const clientDetail = {
    name,
    username,
    mail,
    password,
  };
  
  const client = new Client(clientDetail);
  client.save((err) => {
    if (err) {
      return next(err);
    }
    return;
  });
}

clientCreate('Dima', 'depp', 'aeds@m.ru', '123')
