ig.module( 
	'game.entities.system.scripter' 
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityScripter = ig.Entity.extend({

	event: null,
	preparedEvent: null,
	timer: null,

	init: function(x, y, settings) {
		this.parent(x, y, settings);
	},

	update: function() {
		if(this.event) this[this.event]();
		this.parent();
	},

	elevate: function(callback) {
		console.log('event call');
		if(!this.timer) {
			this.timer = new ig.Timer();
			this.timer.set(1.5);
		}

		if(this.timer.delta() < 0) {
			ig.game.player.speed.y = -5;
			ig.game.scrollSpeed.y = -5;
		}
		else {
			ig.game.player.speed.y = 0;
			ig.game.scrollSpeed.y = 0;
			this.event = null;
			this.timer = null;
		} 
	},

	lower: function(callback) {
		console.log('event call');
		if(!this.timer) {
			this.timer = new ig.Timer();
			this.timer.set(1.5);
		}

		if(this.timer.delta() < 0) {
			ig.game.player.speed.y = 5;
			ig.game.scrollSpeed.y = 5;
		}
		else {
			ig.game.player.speed.y = 0;
			ig.game.scrollSpeed.y = 0;
			this.event = null;
			this.timer = null;
		} 
	}

	
});

});