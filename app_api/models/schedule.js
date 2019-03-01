var mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema(
[{
		title:{type:String, required:true},
		content:{
			number:{type:Number, required:true},
			dateReg:{type:Date,required:false},
			dateSched:{type:Date,required:false},
			schedule:[
				{
					selected:{type:String,required:false,default:null},
					type:{type:String,required:false,default:'container'},
					group:{type:String,required:true},
					columns:[
					[
						{
							teacher:{type:String, required:false},
							type:{type:String, required:false},
							types:{type:String, required:true},
							id:{type:Number, required:false},
						}
					]
					]
				}
			]
		}
	}]
);
mongoose.model('schedule',scheduleSchema);
/*	[
		title:{type:String, required:true},
		content:{
			number:{type:Number, required:true},
			dateReg:{type:Date,required:false},
			dateSched:{type:Date,required:false},
			schedule:[
				{
					selected:{type:String,required:false,default:null},
					type:{type:String,required:false,default:'container'},
					group:{type:String,required:true},
					columns:[
						{
							teacher:{type:String, required:false},
							type:{type:String, required:false},
							types:{type:String, required:true},
							id:{type:number, required:false},
						}
					],required:true
				}
			],required:true
		}
	]*/