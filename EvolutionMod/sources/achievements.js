(function(){
	Evolution.Achievements = {
		init: function() {
			var achievement = Evolution.Achievements.getAchievements();

			for (var i=0,len=achievement.length;i<len;i++) {
				/*UltimateLib.Achievements.add(UltimateLib.Achievements.create( achievement[i] )); - Broken */
				Achievements[ achievement[i].id ] = achievement[i];
			}

		},

		getAchievements: function(){
			return [
				{
					id: "6b6063a6-ea87-11e3-9e08-82687f4fc15c",
					title: "EvoMod - Develop 5 AAA Games",
					description: "Congratulations you have created five AAA titles so far. This takes a lot of work and dedication from you and your staff.",
					isAchieved: function (a) {
						// Dont waste time on this then
						if ($.inArray("AAA", GameManager.company.flags.bigProjectsResearchActiveShown) > -1){
							if (GameManager.company.gameLog.length > 5) {
								var count = 0;

								$.each(GameManager.company.gameLog,function(i,val){
									if( GameManager.company.gameLog[i].gameSize == "aaa"){
										count++;
									}
								});

								if (count >= 5) return true;
							}
						}
						return false;
					},
					tint: "#FF8000",
					value: 1,
					hidden: false,
					canEarnMultiple: false
				},{
					id: "6b606694-ea87-11e3-9e08-82687f4fc15c",
					title: "EvoMod - 1.5 Million Engine",
					description: "Invest over 1.5 Million in a new game engine.",
					isAchieved: function (a) {
						return a.engines.some(function (a) {
							return 1500000 < a.costs;
						});
					},
					tint: "#FF8000",
					value: 1,
					hidden: false,
					canEarnMultiple: false
				},{
					id: "e440c676-f253-4756-b2ce-770ad7b02ee0",
					title: "EvoMod - 2 Million Engine",
					description: "Invest over 2 Million in a new game engine.",
					isAchieved: function (a) {
						return a.engines.some(function (a) {
							return 2000000 < a.costs;
						});
					},
					tint: "#FF8000",
					value: 1,
					hidden: false,
					canEarnMultiple: false
				},{
					id: "6b6068a6-ea87-11e3-9e08-82687f4fc15c",
					title: "EvoMod - Staff Matters",
					description: "Your staff are key to your company's success, by providing the best for them you can ensure your staff will love to work for you.",
					isAchieved: function (a) {
						return Evolution.data.researchFlags.staff.benifits
							&& Evolution.data.researchFlags.staff.lunch
							&& Evolution.data.researchFlags.staff.retreat;
					},
					tint: "#FF8000",
					value: 1,
					hidden: false,
					canEarnMultiple: false
				},{
					id: "acd80ac7-bc42-4b19-b31c-d6255a081c6e",
					title: "EvoMod - Half a Billion",
					description: "You are on your way to amassing a fourtune, you can afford some AAA game flops and not worry about it. ",
					isAchieved: function (a) {
						return GameManager.company.cash > 500000000.0;
					},
					tint: "#FF8000",
					value: 1,
					hidden: false,
					canEarnMultiple: false
				},{
					id: "8c33e389-d602-4c5f-bdfd-930670c550ae",
					title: "EvoMod - One Billion",
					description: "Well, I guess we can now say your company can officially do whatever it wants.",
					isAchieved: function (a) {
						return GameManager.company.cash > 1000000000.0;
					},
					tint: "#FF8000",
					value: 1,
					hidden: false,
					canEarnMultiple: false
				}
			];
		}
	};

})();