const router = require('express').Router();

const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/auth/login');
  }
  next();
}

router.get('/', isAuthenticated, (req, res) => {
  res.send('you are logged in, this is your profile - ' + req.user.username);
});

module.exports = router;