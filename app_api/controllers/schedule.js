var mongoose = require('mongoose');
var scheduleSchema = mongoose.model('schedule');
var request = require('request');
const rp = require('request-promise');
var rs = require('sync-request');
var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};

var token = 'am91cm5hbDp3YWlOb2g3WQ==';
var send = function(res,status,content){
	res.status(status);
	res.json(content);
};
module.exports.scheduleList = function(req,res){
	var options = {
		url: 'http://10.8.0.6/cp/odata/standard.odata/Document_%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%9D%D0%B0%D0%94%D0%B0%D1%82%D1%83?$format=json&$orderby=Number desc&$top=3&$select=%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5,%D0%94%D0%B5%D0%BD%D1%8C%D0%9D%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8',
		headers: {
			'Authorization': 'Basic '+token
		},
		json: true
	};
	rp(options)
	.then(function (response) {
		schedule = response.value;
		masDiscipline = [];
		masTeacher =    [];
		masAuditorium = [];
		masGroup =      [];
		for(var i in schedule){
			for(var j in schedule[i]['Расписание']){

	       		//добавляем название дисциплины
	       		refDiscipline = schedule[i]['Расписание'][j]['Дисциплина_Key'];
	       		masDiscipline.push(refDiscipline);
	       		//добавляем название Преподавателя
	       		refTeacher = schedule[i]['Расписание'][j]['Преподаватель_Key'];
	       		masTeacher.push(refTeacher);
		  		//добавляем название Аудитории
		  		refAuditorium = schedule[i]['Расписание'][j]['Аудитория_Key'];
		  		masAuditorium.push(refAuditorium);
		  		//добавляем название Группы
		  		refGroup = schedule[i]['Расписание'][j]['УчебнаяГруппа_Key'];
		  		masGroup.push(refGroup);
	  	}
		  }
		  var resDiscipline = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%94%D0%B8%D1%81%D1%86%D0%B8%D0%BF%D0%BB%D0%B8%D0%BD%D1%8B?$format=json&$select=Ref_Key,Description&$filter=Ref_Key eq guid'"+masDiscipline.join("' or Ref_Key  eq  guid'")+"'", {
		    headers: {'Authorization': 'Basic '+token}
		  });
		  var resTeacher = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8?$format=json&$select=Ref_Key,Description&$filter=Ref_Key eq guid'"+masTeacher.join("' or Ref_Key  eq  guid'")+"'", {
		    headers: {'Authorization': 'Basic '+token}
		  });
		  		  var resAuditorium = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%90%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8?$format=json&$select=Ref_Key,Description&$filter=Ref_Key eq guid'"+masAuditorium.join("' or Ref_Key  eq  guid'")+"'", {
		    headers: {'Authorization': 'Basic '+token}
		  });
		  		  var resGroup = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%D0%93%D1%80%D1%83%D0%BF%D0%BF%D1%8B?$format=json&$select=Ref_Key,Description&$filter=Ref_Key eq guid'"+masGroup.join("' or Ref_Key  eq  guid'")+"'", {
		    headers: {'Authorization': 'Basic '+token}
		  });

		  	for(var i in schedule){
		  		for(var j in schedule[i]['Расписание']){

	         		//добавляем название дисциплины
	         		
	         		for(obj in JSON.parse(resDiscipline.getBody('utf8')).value){
	         			if(JSON.parse(resDiscipline.getBody('utf8')).value[obj]["Ref_Key"] == schedule[i]['Расписание'][j]['Дисциплина_Key']){
	         				schedule[i]['Расписание'][j]['Дисциплина_Name'] = JSON.parse(resDiscipline.getBody('utf8')).value[obj]["Description"];
	         			}
	         		}
	         		for(obj in JSON.parse(resTeacher.getBody('utf8')).value){
	         			if(JSON.parse(resTeacher.getBody('utf8')).value[obj]["Ref_Key"] == schedule[i]['Расписание'][j]['Преподаватель_Key']){
	         				schedule[i]['Расписание'][j]['Преподаватель_Name'] = JSON.parse(resTeacher.getBody('utf8')).value[obj]["Description"];
	         			}
	         		}
	         		for(obj in JSON.parse(resAuditorium.getBody('utf8')).value){
	         			if(JSON.parse(resAuditorium.getBody('utf8')).value[obj]["Ref_Key"] == schedule[i]['Расписание'][j]['Аудитория_Key']){
	         				schedule[i]['Расписание'][j]['Аудитория_Name'] = JSON.parse(resAuditorium.getBody('utf8')).value[obj]["Description"];
	         			}
	         		}
	         		for(obj in JSON.parse(resGroup.getBody('utf8')).value){
	         			if(JSON.parse(resGroup.getBody('utf8')).value[obj]["Ref_Key"] == schedule[i]['Расписание'][j]['УчебнаяГруппа_Key']){
	         				schedule[i]['Расписание'][j]['УчебнаяГруппа_Name'] = JSON.parse(resGroup.getBody('utf8')).value[obj]["Description"];
	         			}
	         		}
		    	}
		  	  }
		  send(res,200,schedule);


		})
	.catch(function (err) {
		console.log(err);
	})


};
module.exports.subjectList = function(req,res){
	var options = {
		url: 'http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%D0%93%D1%80%D1%83%D0%BF%D0%BF%D1%8B?'+
		'$format=json&$select=Ref_Key,Description',
		headers: {
			'Authorization':  'Basic '+token
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

module.exports.scheduleCreate = function(req,res) {
	scheduleSchema.create(req.body,function(err,schedule){
		if(err){
			sendJsonResponse(res,400,err);
		} else{
			sendJsonResponse(res,201,schedule);
		}
	});
}

module.exports.classes = function(req,res) {
	var options = {
		url: 'http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%90%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8?'+
		'$format=json&$filter=IsFolder eq false&$orderby=Description desc&$select=Ref_Key,Description',
		headers: {
			'Authorization':  'Basic '+token
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

