var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('city', 'guangzhou', {
    SameSite: "none",
    Secure: true
  })
  res.render('index', { title: '测试cookie' });
});
router.all('/test', function(req, res, next) {
  console.log(req.cookies)
  res.render('test', { title: '测试' });
});

module.exports = router;
