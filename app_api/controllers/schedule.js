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

	if(!req.params.title){
		sendJsonResponse(res, 404, {message: "Not found"});
		return;
	}
	console.log(req.body);
	scheduleSchema.update({'title':req.params.title},{
		'$set':{'content':req.body}
	},function(err,item) {
		console.log(err);
		console.log(item);
		if(err){
			sendJsonResponse(res, 404, {message: err})
		}else{
			sendJsonResponse(res, 200, item)
		}
	});

}

module.exports.scheduleDeleteOne = function(req,res){
	/*.remove().exec()*/
	   scheduleSchema.remove({}, function(err) {
                sendJsonResponse(res, 410 , {"message": "removed"});
            
        }
    );
	//думаю не пригодится
	sendJsonResponse(res, 200, {message: "scheduleDeleteOne"});
}

