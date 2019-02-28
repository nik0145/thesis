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
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "teacherDeleteOne"});
}

