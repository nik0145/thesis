var mongoose = require('mongoose');
var scheduleSchema = mongoose.model('schedule');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};

module.exports.scheduleList = function(req,res){

	scheduleSchema.find()
	.exec(function(err,schedule){
		sendJsonResponse(res,200,schedule);
	});
};


module.exports.scheduleCreate = function(req,res) {
	scheduleSchema.create(req.body,function(err,schedule){
		if(err){
			sendJsonResponse(res,400,err);
		} else{
			sendJsonResponse(res,201,schedule);
		}
	});
}
module.exports.scheduleUpdate = function(req,res){
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "scheduleUpdate"});
}

module.exports.scheduleDeleteOne = function(req,res){
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "scheduleDeleteOne"});
}

