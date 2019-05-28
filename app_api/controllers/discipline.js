var mongoose = require('mongoose');
var disciplineSchema = mongoose.model('discipline');
var request = require('request');

var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};
var send = function(res,status,content){
	res.status(status);
	res.json(content);
};

var token = 'am91cm5hbDp3YWlOb2g3WQ==';


module.exports.disciplineList = function(req,res){
	var options = {
	  url: 'http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%94%D0%B8%D1%81%D1%86%D0%B8%D0%BF%D0%BB%D0%B8%D0%BD%D1%8B?'+
	  '$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description',
	  headers: {
	    'Authorization': 'Basic '+token
	  }
	};
	 
	function callback(error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	send(res,200,JSON.parse(body));
	  }else{
	  	console.log(error);
	  	sendJsonResponse(res,404,error);
	  }
	}
	 
	request(options, callback);
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
	
	if(!req.params.name){
		sendJsonResponse(res, 404, {message: "Not found"});
		return;
	}
	if(req.params.name){
		disciplineSchema.deleteOne({'discipline':req.params.name},function(err,result){
			if (err) {
				sendJsonResponse(res,400,err);
			    }
			    else {
			      sendJsonResponse(res,201,{message: "removed"});
			    }
		});
	}


	
}
