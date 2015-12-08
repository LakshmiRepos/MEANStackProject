var User = require('./userModel');

module.exports.save = function(req,res){
	User.create(req.body,function(err,user){
		if(err){
			return res.json({status:500,data:err});
		}
		return res.json({status:200,data:user});
	})
}

module.exports.login =function(req,res){
	User.findOne({'username':req.body.username},function(err,user){
		if(err){
			return res.json({status:500,data:err});
		} else if(!user){
			return res.json({status:500,data:"username mismatch"});
		}else{
			if(req.body.password === user.password){							
				return res.json({status:200,data:user});
			} else {
				return res.json({status:500,data:"Password mismatch"});
			}
		}	
	})
}
