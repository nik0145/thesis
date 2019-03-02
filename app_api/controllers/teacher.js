var mongoose = require('mongoose');
var teacherSchema = mongoose.model('teacher');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};

module.exports.teacherList = function(req,res){

	teacherSchema.find()
	.exec(function(err,teacher){
		sendJsonResponse(res,200,teacher);
	});
};


module.exports.teacherCreate = function(req,res) {
	teacherSchema.create(req.body,function(err,teacher){
		if(err){
			sendJsonResponse(res,400,err);
		} else{
			sendJsonResponse(res,201,teacher);
		}
	});
}
module.exports.teacherUpdate = function(req,res){
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "teacherUpdate"});
}

module.exports.teacherDeleteOne = function(req,res){
	
	if(!req.params.name){
		sendJsonResponse(res, 404, {message: "Not found"});
		return;
	}
	if(req.params.name){
		teacherSchema.deleteOne({'teacher':req.params.name},function(err,result){
			if (err) {
				sendJsonResponse(res,400,err);
			    }
			    else {
			      sendJsonResponse(res,201,{message: "removed"});
			    }
		});
	}


	
}

