var mongoose = require('./db.js');
//加载刚才写好的数据库的连接js
//node中的模块化知识点；
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    uAcc: { type: String }, //用户账号 
    uPass: { type: String }, //密码 
    uName: { type: String }, //年龄 
    uAddress: { type: String },
    uTel: { type: String } //手机号
});

module.exports = mongoose.model('User', UserSchema);
