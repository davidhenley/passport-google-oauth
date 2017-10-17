const router = require('express').Router();

const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/auth/login');
  }
  next();
}

router.get('/', isAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

module.exports = router;