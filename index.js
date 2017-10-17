const express = require('express');
const keys = require('./config/keys');

const authRoutes = require('./routes/auth');

const passportSetup = require('./services/passport');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

mongoose.connection
.once('open', () => console.log('MongoDB Connected'))
.on('error', (err) => console.log('Error connecting to MongoDB', err));

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Magic happens on 3000');
});