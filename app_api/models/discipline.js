var mongoose = require('mongoose');

var disciplineSchema = new mongoose.Schema({
	discipline:{type:String, required:true},
	types:{type:String, required:false,default: 'Предмет'},
	type:{type:String, required:false,default: 'item'},
	id:{type:Number, required:false},
});
mongoose.model('discipline',disciplineSchema);