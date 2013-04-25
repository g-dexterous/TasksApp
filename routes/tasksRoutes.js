exports.configureRoutes = function(app, tasksDAO){
	console.log("Configuring Routes, " + tasksDAO);

	app.get('/tasks',tasksDAO.findAll);
}