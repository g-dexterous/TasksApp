var tasksDb;
exports.configure = function (tDb) {
	tasksDb = tDb;
	console.log("Configured DAO with tasksDb");
}

exports.findAll = function(req, res) {
    console.log("Need to find and return all the tasks here from "+tasksDb);
    tasksDb.collection('tasks', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};