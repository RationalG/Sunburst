ig.module( 
	'game.entities.system.map-handler'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityMapHandler = ig.Entity.extend({

	Level1: {
		entities: [],
		layer: [
			{
				name: "sky",
				tilesetName: "media/pictures/bluesky.png",
				distance: 1,
				repeat: true,
				tilesize: 16,
				foreground: false,
				data: [
					[0, 0, 0],
					[0, 0, 0],
					[0, 0, 0],
				]
			}
		]
	},

	init: function(x, y, settings) {
		ig.game.loadLevel(this.Level1);
		this.parent(x, y, settings);
	},

	update: function() {	
		this.parent();
	}
	
});

});