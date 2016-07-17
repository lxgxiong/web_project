// The Post model
var mongoose = require('mongoose')
    ,Schema = mongoose.Schema
    ,ObjectId = Schema.ObjectId;

var postSchema = new Schema({
		date: {type: Date, default: Date.now},
        red: String,
        blue: String,
        redkda:String,
        bluekda:String,
        duration:String
});

module.exports = mongoose.model('Post', postSchema);