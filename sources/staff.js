(function(){
	Evolution.Staff = {

		init: function(){
			Evolution.Staff.addResearch();
		},

		sendOnVacation : function(){
			/* loop Staff */
			var count = GameManager.company.staff.length;
			for(var i = 0; i < count; i++ ){
				GameManager.company.staff[i].goOnVacation();
			}
		},

		addResearch : function(){

			UltimateLib.Research.addSpecialResearch({
				id: 'fb822dc5-9980-4a8b-b96a-dc1e2f0ee1e9',
				name: 'Corporate Vacations'.localize(),
				category: 'Staff',
				categoryDisplayName: 'Staff Management'.localize(),
				pointsCost: Evolution.config.staff.vacation.rp,
				duration: Evolution.config.staff.vacation.duration,
				cost: Evolution.config.staff.vacation.price,
				canResearch: function (company){
					return (company.currentLevel > 1 && company.staff.length > 1);
				},
				complete: function (){
					Evolution.data.researchFlags.staff.retreat = true;
				}
			});

			UltimateLib.Research.addSpecialResearch({
				id: '09917fff-22c2-44b0-909d-c6af27af1438',
				name: "Corporate Lunch's".localize(),
				category: 'Staff',
				categoryDisplayName: 'Staff Management'.localize(),
				pointsCost: Evolution.config.staff.lunch.rp,
				duration: Evolution.config.staff.lunch.duration,
				cost: Evolution.config.staff.lunch.price,
				canResearch: function (company){
					return (company.currentLevel > 1 && company.staff.length > 1);
				},
				complete: function (){
					Evolution.data.researchFlags.staff.lunch = true;
				}
			});

			UltimateLib.Research.addSpecialResearch({
				id: '1a3ac499-d9a7-4052-8167-a410570429d9',
				name: 'Benifit Package'.localize(),
				category: 'Staff',
				categoryDisplayName: 'Staff Management'.localize(),
				pointsCost: Evolution.config.staff.benifits.rp,
				duration: Evolution.config.staff.benifits.duration,
				cost: Evolution.config.staff.benifits.price,
				canResearch: function (company){
					return (company.currentLevel > 1 && company.staff.length > 1);
				},
				complete: function (){
					Evolution.data.researchFlags.staff.benifits = true;
				}
			});
		}
		
	};
})();