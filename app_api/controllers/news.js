var mongoose = require('mongoose');
var newsSchema = mongoose.model('news');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
}
module.exports.newList = function(req,res){
	newsSchema.findById(req.params.id)
	   .exec(function(err,oneNew){
	   	sendJsonResponse(res,200,oneNew);
	   });
};
module.exports.newsList = function(req,res){
	newsSchema.findById(req.params.id)
	   .exec(function(err,oneNew){
	   	sendJsonResponse(res,200,oneNew);
	   });
};


module.exports.newsCreate = function(req,res) {
	sendJsonResponse(res,200,{"status": "success"});
}

