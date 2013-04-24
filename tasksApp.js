var express = require("express"),
	path = require("path"),
	http = require("http")

var app = express();

app.configure(function(){
	//configurations to be added here
	app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});


http.createServer(app).listen(3000, function(){
	console.log("Express server listening on port 3000");
})
