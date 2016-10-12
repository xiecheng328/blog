var adminModel = require('../models/adminModel');
var messageModel = require('../models/messageModel');

exports.index = function(req, res, next) {
    var loginUser = req.session.user;
    if(loginUser){
        res.render('admin-index');
    }else{
        res.redirect('/admin/login');
    }
};

exports.login = function(req, res, next) {
    res.render('login');
};

exports.checkLogin = function(req, res, next) {
    var adminName = req.body.adminName;
    var adminPwd = req.body.adminPwd;

    adminModel.getByNameAndPwd(adminName, adminPwd, function(result){
       if(result.length > 0){
           req.session.user = result[0];
           res.send('success');

           //res.render('admin-index');
       }else{
           res.send('fail');
           //res.redirect('/admin/login');
       }
    });
};

exports.message = function(req, res, next) {
    messageModel.getAll(function(result){
        //res.send(result);
        res.render('admin-message', {messages: result});

    });
};













