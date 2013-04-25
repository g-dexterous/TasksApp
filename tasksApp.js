var express = require("express"),
	path = require("path"),
	http = require("http"),
	dbConfig = require("./daos/dbConfig");
	tasksRoutes = require("./routes/tasksRoutes");
	tasksDAO = require("./daos/tasksDAO");

var app = express();

//connnect to the DB
var tasksDb = dbConfig.init();


app.configure(function(){
	app.set('port',process.env.PORT||3100);
	app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));

    tasksDAO.configure(tasksDb);
    //configure routes for requests
	tasksRoutes.configureRoutes(app, tasksDAO);
	
});


app.listen( app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
})





