var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = {
	id : String,
	firstname : String,
	lastname : String,
	username : { type: String, unique:true},
	dob : String,
	password : String
};

var UserSchema = new Schema(schema);

module.exports = mongoose.model("Users", UserSchema);