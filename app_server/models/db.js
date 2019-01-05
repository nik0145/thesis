var mongoose = require('mongoose');
var readLine = require('readline');



if(process.platform === "win32"){
	var rl = readLine.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.on("SIGINT",function(){
		process.emit("SIGINT");
	});
}

var dbURI = 'mongodb://localhost/users';
mongoose.connect(dbURI);
//для nodemon, но ты же его не используешь так что забей и он не дописан.
/*var gracefulShutdown = function(msg,callback){
	mongoose.connection.close(function(){
		console.log('mongoose disconnected through ' + msg);
		callback();
	});
};
*/
mongoose.connection.on('connected',function(){
	console.log('good');
});

var userSchema = mongoose.Schema({
	firstName:String,
	lastName:String
});

var User = mongoose.model('User',userSchema);

User.create({
	firstName:'keke',
	lastName:'kekek'
},function(err,doc){
	mongoose.disconnect();

	if(err) return console.log(err);
	console.log('save successfully1');
})

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

	mongoose.connection.on('disconnected',function(){
		console.log('disconnected');
	});
	mongoose.disconnect();
});
mongoose.connection.on('error',function(err){
	console.log(err);
});



