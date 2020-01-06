var mongoose = require('./db.js');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    id: { type: String }, 
    name: { type: String }, 
    disc: { type: String }, 
    type: { type: String },
    price: { type: String },
    imgsrc:{type:String}
});
module.exports = mongoose.model('product', UserSchema);
