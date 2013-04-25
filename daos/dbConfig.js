var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('taskdb', server, {safe: true});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'taskdb' database");
        db.collection('tasks', {safe:true}, function(err, collection) {
            //check the count for our collection, if zero then insert sample data
            collection.find().count(function (err, count){
            	console.log("count of tasks: "+ count);
            	if(count == 0){
            		populateDB();
            	}
            })
        });
    }
});


///////////
var populateDB = function() {
	console.log("Populating DB with sample data");
    var tasks = [
    {
        title: "Task no.1",
        description: "This is the description for task no. 1",
        status : 1 
    },
    {
        title: "Task no.2",
        description: "This is the description for task no. 2",
        status : 2 
    }];

    db.collection('tasks', function(err, collection) {
        collection.insert(tasks, {safe:true}, function(err, result) {});
    });
}