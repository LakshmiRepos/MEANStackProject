var User = require('./productModel');

module.exports.get = function(req,res){
	User.find(function(err,docs){
		if(err){
			return res.json({status:500,data:err});
		}
		return res.json({status:200,data:docs});
	})
}