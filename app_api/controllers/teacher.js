var mongoose = require('mongoose');
var teacherSchema = mongoose.model('teacher');
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


module.exports.teacherList = function(req,res){
	var options = {
	  url: 'http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8?'
	  +'$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description',
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





/*module.exports.teacherList = function(req,res){

	teacherSchema.find()
	.exec(function(err,teacher){
		sendJsonResponse(res,200,teacher);
	});
};
*/

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

