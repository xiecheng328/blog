var express = require('express');
var router = express.Router();

var admin = require('../controllers/admin');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.redirect('/admin/login');
});

router.get('/login', admin.login);

router.post('/checkLogin', admin.checkLogin);

router.get('/index', admin.index);

router.get('/message', admin.message);

module.exports = router;
