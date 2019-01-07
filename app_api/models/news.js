var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	title: {type:String, required:true},
	body:{type:String, required:true},
	tags:[String]
});

mongoose.model('news',newsSchema);