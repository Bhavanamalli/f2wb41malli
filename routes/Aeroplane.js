var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Aeroplane', { title: 'Search Results Aeroplane' });
});

module.exports = router;