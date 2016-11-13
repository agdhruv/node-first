var mongoose = require('mongoose');
var stuSchema = mongoose.Schema({
	name : {type : String},
	age : {type : String},
	gender : {type : String},
	address : {type : String},
	status : {type : Boolean}
});
module.exports = mongoose.model('student',stuSchema);