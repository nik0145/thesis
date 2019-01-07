var mongoose = require('mongoose');
var readLine = require('readline');



if(process.platform === "win32"){
	var rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.on("SIGINT",function(){
		process.emit ("SIGINT");
	});
}

var dbURI = 'mongodb://localhost/users';
mongoose.connect(dbURI);
var gracefulShutdown = function(msg,callback){
	mongoose.connection.close(function(){
		console.log('mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart',function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});
process.on('SIGINT',function(){
	gracefulShutdown('app termitation',function(){
		process.exit(0);
	});
});

mongoose.connection.on('connected',function(){
	console.log('good');
});

var userSchema = mongoose.Schema({
	firstName:String,
	lastName:String
});

var User = mongoose.model('User',userSchema);

var exampleUser = new User ({
	_id: new mongoose.Types.ObjectId(),
	name:{
		firstName:'Nik',
		lastName:'Tyurin'
	}
});
exampleUser.save(function(err){
	if(err) throw err;
	console.log('successfully saved good boy))');
});
mongoose.connection.on('error',function(err){
	console.log(err);
});

mongoose.connection.on('disconnected',function(){
	console.log('disconnected');
});

