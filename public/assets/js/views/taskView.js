/*global Backbone, jQuery, _ */
var app = app || {};

(function($, _){
	'use strict';

	app.TaskView = Backbone.View.extend({
		//Tag name that we want to generate
		tagName: 'li',

		//task item template - cache it
		template: _.template($('#task-template').html()),

		//our event handlers


		//the intialize function to to establish a correspondence between model and view
		initialize: function() {
			this.listenTo(this.model,'change',this.render);
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
})(jQuery, _);

