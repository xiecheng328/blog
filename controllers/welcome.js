var messageModel = require('../models/messageModel');


exports.sendMessage = function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var content = req.body.content;

    messageModel.save(name, email, phone, content, function(result){
        if(result.affectedRows > 0){
            res.send('success');
        }else{
            res.send('fail');
        }
    });
};