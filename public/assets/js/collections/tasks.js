/*global Backbone */
var app = app || {};

(function(){
	'use strict';

	//A collection is basically collection of models
	var TaskList = Backbone.Collection.extend({
		//the model for this particular collection is 'Task'
		model: app.Task

	});

	//create our collection of tasks
	app.TaskList = TaskList;

})()

