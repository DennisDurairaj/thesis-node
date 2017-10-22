var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/loaderio-5b2dec67e518d3d7d815c0db86b65b60', function (req, res, next) {
  res.render('loaderio-5b2dec67e518d3d7d815c0db86b65b60')
})

module.exports = router;
