var db = require('./db');

exports.getByNameAndPwd = function(adminName, adminPwd, callback){
    var sql = 'select * from t_admin where admin_name=? and admin_pwd=?';
    db.query(sql, [adminName, adminPwd], callback);
};