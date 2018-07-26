var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expense Tracker App' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Expense Tracker App' });
});


module.exports = router;
