/*global Backbone */
var app = app || {};

(function(){
	'use strict';

	var TasksRouter = Backbone.Router.extend({
		routes:{

		}
	})

	app.TasksRouter = new TasksRouter();
	Backbone.history.start();
})();