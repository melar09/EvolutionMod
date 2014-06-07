(function(){
	Evolution.Contracts = {

		init: function(){

			var contracts = Evolution.Contracts.getContracts();

			for (var i=0,len=contracts.length;i<len;i++) {
				UltimateLib.Contracts.add( contracts[i] );
			}

		},

		getContracts: function(){
			return [
				{
					title: "Game Compliance Testing",
					ulid: "",
					description: "Another firm could use help performing compliance testing for a game they just finished developing.",
					isRandom: true,
					randomChance: 8,
					canTrigger: function (company) {
						return (company.currentLevel == 1);
					},
					complete: function(company){
						//complete function
					},
					repeatable: true,
					requiredD: 10,
					requiredT: 54,
					payment: 2500,
					penalty: -1000,
					weeksToFinish: 4,
					rF: 1,
					size: "small"
				},{
					title: "Localization Testing",
					ulid: "",
					description: "Help local company perform some Localization testing of a recently completed game.",
					isRandom: true,
					randomChance: 8,
					canTrigger: function (company) {
						return (company.currentLevel == 1);
					},
					complete: function(company){
						//complete function
					},
					repeatable: true,
					requiredD: 25,
					requiredT: 84,
					payment: 5000,
					penalty: -2500,
					weeksToFinish: 6,
					rF: 1,
					size: "small"
				},

				{
					title: "Game Compliance Testing",
					ulid: "",
					description: "Another firm could use help performing compliance testing for a game they just finished developing.",
					isRandom: true,
					randomChance: 8,
					canTrigger: function (company) {
						return (company.currentLevel == 2);
					},
					complete: function(company){
						//complete function
					},
					repeatable: true,
					requiredD: 25,
					requiredT: 120,
					payment: 25000,
					penalty: -15000,
					weeksToFinish: 6,
					rF: 1,
					size: "medium"
				},{
					title: "Localization Testing",
					ulid: "",
					description: "Help local company perform some Localization testing of a recently completed game.",
					isRandom: true,
					randomChance: 8,
					canTrigger: function (company) {
						return (company.currentLevel == 2);
					},
					complete: function(company){
						//complete function
					},
					repeatable: true,
					requiredD: 80,
					requiredT: 170,
					payment: 50000,
					penalty: -25000,
					weeksToFinish: 8,
					rF: 1,
					size: "medium"
				},

				{
					title: "Game Compliance Testing",
					ulid: "",
					description: "Another firm could use help performing compliance testing for a game they just finished developing.",
					isRandom: true,
					randomChance: 6,
					canTrigger: function (company) {
						return (company.currentLevel == 3);
					},
					complete: function(company){
						//complete function
					},
					repeatable: true,
					requiredD: 50,
					requiredT: 175,
					payment: 250000,
					penalty: -150000,
					weeksToFinish: 8,
					rF: 1,
					size: "large"
				},{
					title: "Localization Testing",
					ulid: "",
					description: "Help local company perform some Localization testing of a recently completed game.",
					isRandom: true,
					randomChance: 6,
					canTrigger: function (company) {
						return (company.currentLevel == 3);
					},
					complete: function(company){
						//complete function
					},
					repeatable: true,
					requiredD: 90,
					requiredT: 180,
					payment: 500000,
					penalty: -350000,
					weeksToFinish: 8,
					rF: 1,
					size: "large"
				}];
		}
	};
})();