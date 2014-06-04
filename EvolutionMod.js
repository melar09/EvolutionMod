var Evolution = {};
(function () {
	Evolution.version = '1.0.0';
	
	var ready = function () {
		Evolution.init();
	};

	var error = function () {

	};

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/UltimateLib/UltimateLib.js',

	'mods/EvolutionMod/sources/general.js',
	'mods/EvolutionMod/sources/engine.js',
	'mods/EvolutionMod/sources/staff.js',
	'mods/EvolutionMod/sources/menus.js',
	'mods/EvolutionMod/sources/leaderboard.js',
	'mods/EvolutionMod/sources/marketing.js',
	'mods/EvolutionMod/sources/achievements.js',
	'mods/EvolutionMod/sources/contracts.js',

	'mods/EvolutionMod/3rdparty/jquery.tablesorter.js'
	], ready, error);
})();