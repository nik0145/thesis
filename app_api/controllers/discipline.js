var mongoose = require('mongoose');
var disciplineSchema = mongoose.model('discipline');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};

module.exports.disciplineList = function(req,res){

	disciplineSchema.find()
	.exec(function(err,discipline){
		sendJsonResponse(res,200,discipline);
	});
};


module.exports.disciplineCreate = function(req,res) {
	disciplineSchema.create(req.body,function(err,discipline){
		if(err){
			sendJsonResponse(res,400,err);
		} else{
			sendJsonResponse(res,201,discipline);
		}
	});
}
module.exports.disciplineUpdate = function(req,res){
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "disciplineUpdate"});
}

module.exports.disciplineDeleteOne = function(req,res){
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "disciplineDeleteOne"});
}

