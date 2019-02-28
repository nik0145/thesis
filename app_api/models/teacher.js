var mongoose = require('mongoose');

var teacherSchema = new mongoose.Schema({
	teacher:{type:String, required:true},
	types:{type:String, required:false,default: 'Преподавателя'},
	type:{type:String, required:false,default: 'item'},
	id:{type:Number, required:false},
});
mongoose.model('teacher',teacherSchema);