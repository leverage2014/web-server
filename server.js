var express = require('express');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},

	logger: function(req, res, next){
		console.log(req.method + ' ' + req.originalUrl);
		next();
	}
};

// app.get('/', function(req, res){
// 	res.send('Hello, express');
// });

var PORT = 3000; 

//app.use(middleware.requireAuthentication);   // middleware on the top

// app.get('/about', function(req, res){
// 	res.send('about us');
// });

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res){
	res.send('about us');
});


app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started on port ' + PORT +' !');
});


// add this line for test git


