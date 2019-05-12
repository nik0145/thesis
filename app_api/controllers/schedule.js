var mongoose = require('mongoose');
var scheduleSchema = mongoose.model('schedule');
var request = require('request');
const rp = require('request-promise');
var rs = require('sync-request');
var sendJsonResponse = function(res,status,content){
	res.status(status);
	res.json(content);
};
var send = function(res,status,content){
	res.status(status);
	res.json(content);
};
module.exports.scheduleList = function(req,res){
	var options = {
		url: 'http://10.8.0.6/cp/odata/standard.odata/Document_%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%D0%9D%D0%B0%D0%94%D0%B0%D1%82%D1%83?$format=json&$orderby=Number desc&$top=6',
		headers: {
			'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='
		},
		json: true
	};
	rp(options)
	.then(function (response) {
		schedule = response.value;
		for(var i in schedule){
			for(var j in schedule[i]['Расписание']){

	       		//добавляем название дисциплины
	       		refDiscipline = schedule[i]['Расписание'][j]['Дисциплина_Key'];
	       		var resDiscipline = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%94%D0%B8%D1%81%D1%86%D0%B8%D0%BF%D0%BB%D0%B8%D0%BD%D1%8B(guid '"+refDiscipline+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description", {
	       		  headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
	       		});

	       		schedule[i]['Расписание'][j]['Дисциплина_Name'] = JSON.parse(resDiscipline.getBody('utf8')).Description;
	       		//добавляем название Преподавателя
		  			refTeacher = schedule[i]['Расписание'][j]['Преподаватель_Key'];
		  			var resTeacher = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8(guid '"+refTeacher+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description", {
		  			  headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
		  			});
		  			schedule[i]['Расписание'][j]['Преподаватель_Name'] = JSON.parse(resTeacher.getBody('utf8')).Description;
		  		//добавляем название Аудитории
		  		refAuditorium = schedule[i]['Расписание'][j]['Аудитория_Key'];
		  		var resAuditorium = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%90%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8(guid '"+refAuditorium+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description", {
		  		  headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
		  		});
		  		schedule[i]['Расписание'][j]['Аудитория_Name'] = JSON.parse(resAuditorium.getBody('utf8')).Description;

		  		//добавляем название Группы
		  		refGroup = schedule[i]['Расписание'][j]['УчебнаяГруппа_Key'];
		  		var resGroup = rs('GET', "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%D0%93%D1%80%D1%83%D0%BF%D0%BF%D1%8B(guid '"+refGroup+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description", {
		  		  headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
		  		});
		  		schedule[i]['Расписание'][j]['УчебнаяГруппа_Name'] = JSON.parse(resGroup.getBody('utf8')).Description;
		  		console.log(JSON.parse(resGroup.getBody('utf8')).Description);
	       	}

	       }
	       	send(res,200,schedule);

	       
	   })
	.catch(function (err) {
		console.log('bed11');
		console.log(err);
		console.log('bed22');
	})
/*	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			schedule = JSON.parse(body);
			for (var i = 0; i < schedule.value.length; i++) {
	  		//console.log(schedule.value[i]['Расписание']);
	  		arrSchedule = schedule.value[i]['Расписание'];
	  		for (var j = 0; j < arrSchedule.length; j++) {
					schedule.value[i]['Расписание'][j]['Дисциплина_Name'] = '';
					schedule.value[i]['Расписание'][j]['Преподаватель_Name'] = '';
					schedule.value[i]['Расписание'][j]['Аудитория_Name'] = '';
					schedule.value[i]['Расписание'][j]['УчебнаяГруппа_Name'] = '';
	  			//добавляем название дисциплины
	  			refDiscipline = arrSchedule[j]['Дисциплина_Key'];
	  			console.log(arrSchedule[j]);
	  			request({
	  				url: "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%94%D0%B8%D1%81%D1%86%D0%B8%D0%BF%D0%BB%D0%B8%D0%BD%D1%8B(guid '"+refDiscipline+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description",
	  				headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
	  			}, function (error, response, body) {
	  				if(response.statusCode == 200){
	  					console.log(arrSchedule[j]);
	  					schedule.value[i]['Расписание'][j]['Дисциплина_Name'] =JSON.parse(body).Description;
	  					refTeacher = arrSchedule[j]['Преподаватель_Key'];
	  					request({
	  						url: "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A1%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8(guid '"+refTeacher+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description",
	  						headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
	  					}, function (error, response, body) {
	  						if(response.statusCode == 200){
	  							arrSchedule['Преподаватель_Name'] =JSON.parse(body).Description; 
	  							//добавляем название Аудитории
	  							refAuditorium = arrSchedule[j]['Аудитория_Key'];
	  							request({
	  								url: "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%90%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8(guid '"+refAuditorium+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description",
	  								headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
	  							}, function (error, response, body) {
	  								if(response.statusCode == 200){
	  									arrSchedule['Аудитория_Name'] =JSON.parse(body).Description;
	  									//добавляем название Группы
	  									refGroup = arrSchedule[j]['УчебнаяГруппа_Key'];
	  									request({
	  										url: "http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%D0%93%D1%80%D1%83%D0%BF%D0%BF%D1%8B(guid '"+refGroup+"')?$format=json&$filter=IsFolder eq false&$select=Ref_Key,Description",
	  										headers: {'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='}
	  									}, function (error, response, body) {
	  										if(response.statusCode == 200){arrSchedule['УчебнаяГруппа_Name'] =JSON.parse(body).Description;
	  											  			schedule.value[i]['Расписание'] = arrSchedule;
	  											  			console.log('1111111111111111111111111111111111111111111');	}
	  										else {console.log('error: '+ response.statusCode)}
	  									});
	  								}
	  								else {console.log('error: '+ response.statusCode)}
	  							});
	  						}
	  						else {console.log('error: '+ response.statusCode)}
	  					});

	  				}
	  				else {console.log('error: '+ response.statusCode)}
	  			});
	  			
	  			
	  		


	  		}
	  	}
	  	send(res,200,schedule);
	  }else{
	  	console.log(error);
	  	sendJsonResponse(res,404,error);
	  }
	}

	request(options, callback);
	*/

};
module.exports.subjectList = function(req,res){
	var options = {
		url: 'http://10.8.0.6/cp/odata/standard.odata/Catalog_%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%D0%93%D1%80%D1%83%D0%BF%D0%BF%D1%8B?$format=json&$select=Ref_Key,Description',
		headers: {
			'Authorization': 'Basic am91cm5hbDp3YWlOb2g3WQ=='
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

