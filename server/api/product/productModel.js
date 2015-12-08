var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var schema = {
	id : Number,
	name : String,
	price : Number
};

var ProductSchema = new Schema(schema);

module.exports = mongoose.model("Products", ProductSchema);