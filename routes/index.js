var express = require('express');
var router = express.Router();

var welcome = require('../controllers/welcome');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendMessa ge', welcome.sendMessage);

module.exports = router;
 