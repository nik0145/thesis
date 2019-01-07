var mongoose = require('mongoose');
var newsSchema = mongoose.model('news');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};
module.exports.newsListOne = function(req,res){
	newsSchema.findById(req.params.id)
	   .exec(function(err,news){
		sendJsonResponse(res,200,news);
	   });
};
module.exports.newsList = function(req,res){
	newsSchema.find()
	   .exec(function(err,oneNews){
		sendJsonResponse(res,200,oneNews);
	   });
};


module.exports.newsCreate = function(req,res) {
	newsSchema.create(req.body,function(err,oneNews){
		if(err){
			sendJsonResponse(res,400,err);
		} else{
			sendJsonResponse(res,201,oneNews);
		}
	});
}
module.exports.newUpdate = function(req,res){
	if(!req.params.id){
		sendJsonResponse(res, 404, {message: "Not found"});
		return;
	}
	newsSchema.findById(req.params.id)
		.select('-title -body')
		.exec(function (err, oneNews) {
			if(!oneNews){
				sendJsonResponse(res, 404, {
					message: "News not found"
				});
				return;
			} else if(err){
				sendJsonResponse(res, 404, err);
				return;
			}

			if(req.body.title){
				oneNews.title = req.body.title;
			}

			if(req.body.body){
				oneNews.body = req.body.body;
			}

			oneNews.save(function (err, oneNews) {
				if(err){
					sendJsonResponse(res, 400, err);
				} else {
					sendJsonResponse(res, 200, oneNews);
				}
			});
		});
}

module.exports.newsDeleteOne = function(req,res){
	if(req.params.id){
		newsSchema.findByIdAndRemove(req.params.id).exec(function(err){
			if(err){
				sendJsonResponse(res,400,err);

			}else{
				sendJsonResponse(res,201,{message: "News removed"});
			}
		});
	}else{
		sendJsonResponse(res,400,{message: "no news"});
	}
}

