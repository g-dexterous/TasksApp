//get hold of the app in global context
var app = app || {};

//An Iffy to things to our app, we will pass jquery in it.
(function($){
	'use strict';

	//The stuff our application is going to have

	//Top most view (kinda super view) - the AppView
	app.AppView = Backbone.View.extend({
		//we want to use the area defined in html as the 'el' 
		el: '#tasks',

		//Event handlers for the app

		//initialize
		initialize: function (){
			//create a local reference to main
			this.$main = this.$("#main");

			this.listenTo(app.Tasks, 'all', this.render);

			app.Tasks.fetch();
		},

		render: function (){

		}

	});

})(jQuery)