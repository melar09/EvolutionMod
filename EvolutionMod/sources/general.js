(function(){

	Evolution.config = {
		marketing: {
			initial: {
				price: 100000,
				duration: 10000,
				rp: 100
			},
			website: {
				price: 50000,
				duration: 10000,
				rp: 50,
				fanAdjust: 0.20
			},
			newsletter: {
				price: 35000,
				duration: 10000,
				rp: 25,
				fanAdjust: 0.15
			},
			socialMedia: {
				price: 15000,
				duration: 10000,
				rp: 25,
				fanAdjust: 0.05
			},
			gameWebsites: {
				price: 25000,
				duration: 10000,
				rp: 50,
				fanAdjust: 0.07
			},
			bugWebsite: {
				price: 30000,
				duration: 10000,
				rp: 75
			},
			patchWebsite: {
				price: 35000,
				duration: 10000,
				rp: 75
			},
			marketingFirm: {
				price: 10000,
				duration: 15000,
				rp: 100
			}
		},
		staff: {
			vacation: {
				price: 10000,
				duration: 10000,
				rp: 25
			},
			lunch: {
				price: 5000,
				duration: 8000,
				rp: 25
			},
			benifits: {
				price: 75000,
				duration: 12000,
				rp: 30
			}
		},
		engineParts: {
			aspectRatio: {
				price: 140000,
				duration: 15000,
				rp: 100
			}
		},
		unlocks: {
			newsletter: false,
			gameWebsites: false,
			socialMedia: false,
			marketingFirm: false,
			patchMenu: false,
			vacationMenu: false
		}
	};

	Evolution.data = {
		researchFlags: {
			marketing: {
				initial: false,
				website: false,
				newsletter: false,
				socialMedia: false,
				gameWebsites: false,
				bugWebsite: false,
				patchWebsite: false,
				marketingFirm: false
			},
			staff: {
				retreat: false,
				lunch: false,
				benifits: false
			},
			engineParts: {
				aspectRatio: false
			}
		}
	};

	Evolution.settings = {};

	Evolution.onGameSave = function(e){
		Evolution.DataStore.data.json = JSON.stringify( Evolution.data );
		Evolution.DataStore.settings.json = JSON.stringify( Evolution.settings );
	};

	Evolution.onGameLoad = function(e){
		Evolution.DataStore = GDT.getDataStore("EvolutionMod");
		var data = {}, settings = {};

		/* Check for existing Data */
		if (Evolution.DataStore.data.json != undefined){
			data = JSON.parse( Evolution.DataStore.data.json );
		}

		/* Check for existing Settings */
		if (Evolution.DataStore.settings.json != undefined){
			settings = JSON.parse( Evolution.DataStore.settings.json );
		}

		/* Extend our Defaults */
		jQuery.extend( Evolution.data, data );
		jQuery.extend( Evolution.settings, settings );

		/* Add Menus & Check for unlocks */
		Evolution.Menus.init();
		Evolution.unlocks();
	};

	Evolution.gameEvents = {
		weekProceeded: function (e){

		},
		trainingFinished: function (e){

		},
		researchCompleted: function (e){
			Evolution.unlocks();
		},
		engineStarted: function (e){

		},
		engineFinished: function (e){

		},
		afterGameReview: function (e){

		},
		beforeConventions: function(e){

		},
		afterConventions: function(e){
			Evolution.conventionFans(e);
		}
	};


	/*
     * Custom Hooks for non events
     * ======================================================================
	 */
	Evolution.hooks = {
		Conventions: {
			originalMethod: "",
			init: function(){
				Evolution.hooks.Conventions.originalMethod = General.runConference;
				General.runConference = Evolution.hooks.Conventions.hijacked;
			},
			hijacked: function(company) {
				Evolution.gameEvents.beforeConventions(company);
				Evolution.hooks.Conventions.originalMethod(company);
				Evolution.gameEvents.afterConventions(company);
			}
		}

	};


	/*
	 * Our Super Function that starts the ball rolling...
	 * ======================================================================
	 */
	Evolution.init = function(){
		
		// Fancy Logging of course..
		console.log("================================================");
		console.log("Evolution Mod Loading...");
		console.log("Created by: Melar09 | version: " + Evolution.version);
		console.log("================================================");

		/* Add Stylesheets */
		$('head').append('<link type="text/css" rel="stylesheet" href="mods/EvolutionMod/assets/styles.css">');

		/* Tie into game Events */
		GDT.on(GDT.eventKeys.saves.loading, 				Evolution.onGameLoad);
		GDT.on(GDT.eventKeys.saves.saving, 					Evolution.onGameSave);
		GDT.on(GDT.eventKeys.gameplay.weekProceeded, 		Evolution.gameEvents.weekProceeded);
		GDT.on(GDT.eventKeys.gameplay.trainingFinished, 	Evolution.gameEvents.trainingFinished);
		GDT.on(GDT.eventKeys.gameplay.researchCompleted, 	Evolution.gameEvents.researchCompleted);
		GDT.on(GDT.eventKeys.gameplay.engineStarted, 		Evolution.gameEvents.engineStarted);
		GDT.on(GDT.eventKeys.gameplay.engineFinished, 		Evolution.gameEvents.engineFinished);
		GDT.on(GDT.eventKeys.gameplay.afterGameReview, 		Evolution.gameEvents.afterGameReview);

		/* Sink Hooks */
		Evolution.hooks.Conventions.init();

		/* Load up modules */
		Evolution.EngineParts.init();
		Evolution.Staff.init();
		Evolution.Marketing.init();
		Evolution.Achievements.init();
		Evolution.Contracts.init();

	};


	Evolution.conventionFans = function(company){
		var lastGame = company.gameLog[ company.gameLog.length-1 ];
		var multiplier = (Math.round(( lastGame.score-5) * 100 ) / 100 );
		var b = company.fans, c = company.getCurrentDate().year, g = Math.floor(49876 + 47500 * c), k = Math.floor(0.005 * g), c = k, b = (b / 5E5).clamp(0, 1), d = Math.floor(g * b * 0.7), n = Math.floor(g * company.conferenceStandFactor * 0.3), c = c + d + n, c = Math.floor(c.clamp(0, g));
		
		if (multiplier>0){
			//add fans
			var newFans = Math.floor(c*multiplier);
			company.fansChange = newFans;
		}else{
			// subtract fans
			var change = ( Math.abs(multiplier)*0.1 ); // get positive decimal place
			var newFans = Math.floor(c*change);
			company.fansChange = -newFans;

			// Notification push
			var n = new Notification({
				header: 'Oh No!, this is not good',
				text: 'Apparently since our last game only scored a '+Math.round(lastGame.score)+' we lost '+UI.getShortNumberString(newFans)+' fans. We should be more careful with when we release games.'
			});
			GameManager.company.notifications.push(n);
		}
	};


	Evolution.unlocks = function(){
		
		Evolution.Marketing.unlocks();

		return;
	};

})();