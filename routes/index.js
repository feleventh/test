var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Set-Cookie', 'city=shenzhen;domain=.xiangyouzou.xyz;SameSite=none;secure=true')
  res.render('index', { title: '测试cookie，使用setHead' });
});
router.all('/test', function(req, res, next) {
  res.cookie('name', 'zhangsan', {
    SameSite: "none",
    secure: true,
    domain: '.xiangyouzou.xyz'
  })
  res.render('test', { title: 'cookie测试,使用cookie方法' });
});
router.all('/test1', function(req, res, next) {
  res.cookie('weather', 'sunny', {
    domain: '.xiangyouzou.xyz'
  })
  res.render('test', { title: 'cookie测试,使用cookie方法' });
});

module.exports = router;
