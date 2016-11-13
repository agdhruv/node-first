var mongoose = require('mongoose');
var teachSchema = mongoose.Schema({
	name : {type : String},
	age : {type : Number},
	gender : {type : String},
	subjects : {type : Array},
	status : {type : Boolean}
});
module.exports = mongoose.model('teacher',teachSchema);