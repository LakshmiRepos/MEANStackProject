var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = {
	id : String,
	name : String,
	price : Number,
	date : String,
	userId : String,
	isCheckedOut : Boolean
};

var transactionSchema = new Schema(schema);

module.exports = mongoose.model("Transactions", transactionSchema);