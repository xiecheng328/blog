var db = require('./db');

exports.save = function(name, email, phone, content, callback){
    var sql = "insert into t_message(name, email, phone, content) values(?,?,?,?)";
    db.query(sql, [name, email, phone, content], callback);
};

exports.getAll = function(callback){
    db.query('select * from t_message', callback);
};