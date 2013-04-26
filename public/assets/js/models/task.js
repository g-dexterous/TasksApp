//get hold of the app in global context
var app = app || {};

(function(){
	'use strict';

	//our task model
	app.Task = Backbone.Model.extend({
		defaults:{
			title:'',
			description:'',
			status:0
		},
		//function to set the status
		setStatus:function(newStatus){
			this.save({
				status: newStatus
			});
		}
	})

})();