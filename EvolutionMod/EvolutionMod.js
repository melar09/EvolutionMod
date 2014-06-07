var Evolution = {};
(function () {
	Evolution.version = '1.0.4';
	Evolution.scripts = [
		'mods/EvolutionMod/sources/general.js',
		'mods/EvolutionMod/sources/engine.js',
		'mods/EvolutionMod/sources/staff.js',
		'mods/EvolutionMod/sources/menus.js',
		'mods/EvolutionMod/sources/leaderboard.js',
		'mods/EvolutionMod/sources/marketing.js',
		'mods/EvolutionMod/sources/achievements.js',
		'mods/EvolutionMod/sources/contracts.js',
		'mods/EvolutionMod/3rdparty/compressed.js'
		];

	Evolution.onReady = function () {
		Evolution.init();
	};

	Evolution.onError = function () {
		console.log('Error loading files using GDT.loadJS');

		/* Attempt Manual Load up */
		for(var i=0,len=Evolution.scripts.length; i < len; i++) {
			$.getScript(Evolution.scripts[i])
				.done(function(){console.log('EVOMod - Script Loaded in Failover');})
				.fail(function(){throw "Unable to load script";});
		}
	};

	GDT.loadJs(Evolution.scripts, Evolution.onReady, Evolution.onError);
})();