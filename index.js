const express = require('express');
const authRoutes = require('./routes/auth');
const passportSetup = require('./services/passport');
const keys = require('./config/keys');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

mongoose.connection
  .once('open', () => console.log('MongoDB Connected'))
  .on('error', (err) => console.log('Error connecting to MongoDB', err));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Magic happens on 3000');
});