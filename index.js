const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Magic happens on 3000');
});