(function(){ 
	Evolution.Marketing = {

		init : function() {
			Evolution.Marketing.addResearch();
		},

		addResearch : function() {
			/* Initial Marketing Research */
			UltimateLib.Research.addSpecialResearch({
				id: '16dce0ea-03f7-4aec-a536-938bb46c3641',
				name: 'New Marketing Options'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.initial.rp,
				duration: Evolution.config.marketing.initial.duration,
				cost: Evolution.config.marketing.initial.price,
				canResearch: function (company){
					return true;
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.initial = true;
					GameManager.company.notifications.push(new Notification({
						header: 'Product Marketing'.localize(),
						text: 'Well Done, We can now research many ways to promote our company and games.'
					}));
				}
			});

			/* Website Marketing Research */
			UltimateLib.Research.addSpecialResearch({
				id: '00d7ebb8-5b8e-46d0-8bb6-6066f0932541',
				name: 'Website Development'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.website.rp,
				duration: Evolution.config.marketing.website.duration,
				cost: Evolution.config.marketing.website.price,
				canResearch: function (company){
					return Evolution.data.researchFlags.marketing.initial;
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.website = true;
					var newFans = Math.round(GameManager.company.fans * Evolution.config.marketing.website.fanAdjust);
					var n = new Notification({
						header: 'Company Website'.localize(),
						text: 'Well Done, with a website up now surely that will attract some fans for us, great job.'
					});
					n.adjustFans(newFans);
					GameManager.company.notifications.push(n);
				}
			});

			/* Newsletter Marketing Research */
			UltimateLib.Research.addSpecialResearch({
				id: '25535e48-5322-4f5d-b6bd-62c2a549d6cf',
				name: 'Newsletter Subscription'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.newsletter.rp,
				duration: Evolution.config.marketing.newsletter.duration,
				cost: Evolution.config.marketing.newsletter.price,
				canResearch: function (company){
					return Evolution.data.researchFlags.marketing.initial;
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.newsletter = true;
					var newFans = Math.round(GameManager.company.fans * Evolution.config.marketing.newsletter.fanAdjust);
					var n = new Notification({
						header: 'Newsletter Subscription'.localize(),
						text: 'Well Done, with an email newsletter setup now surely that will attract some fans for us, great job.'
					});
					n.adjustFans(newFans);
					GameManager.company.notifications.push(n);
				}
			});

			/* Social Media Marketing Research */
			UltimateLib.Research.addSpecialResearch({
				id: 'b6e2eb9a-7442-4079-b70e-1df2f75c851b',
				name: 'Social Media Development'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.socialMedia.rp,
				duration: Evolution.config.marketing.socialMedia.duration,
				cost: Evolution.config.marketing.socialMedia.price,
				canResearch: function (company){
					return Evolution.data.researchFlags.marketing.initial;
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.socialMedia = true;
					var newFans = Math.round(GameManager.company.fans * Evolution.config.marketing.socialMedia.fanAdjust);
					var n = new Notification({
						header: 'Social Media'.localize(),
						text: 'Well Done, with snappy social profiles on all the major sites linked up with our website this is bound to bring us more fans.'
					});
					n.adjustFans(newFans);
					GameManager.company.notifications.push(n);
				}
			});

			/* Marketing Firm Marketing Research */
			UltimateLib.Research.addSpecialResearch({
				id: 'a5f340d3-e19e-4765-bf9f-a256263eed55',
				name: 'Outside Marketing Firm'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.marketingFirm.rp,
				duration: Evolution.config.marketing.marketingFirm.duration,
				cost: Evolution.config.marketing.marketingFirm.price,
				canResearch: function (company){
					return Evolution.data.researchFlags.marketing.initial
						&& Evolution.data.researchFlags.marketing.website
						&& Evolution.data.researchFlags.marketing.socialMedia 
						&& Evolution.data.researchFlags.marketing.newsletter  
						&& company.gameLog.length > 15;
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.marketingFirm = true;
					GameManager.company.notifications.push(new Notification({
						header: 'Hire Marketing Firm'.localize(),
						text: 'Well with the ability to hire outside help this is good news. We can once again concentrate on building great games and let them do the leg work.'
					}));
				}
			});

			/* Game Websites Research */
			UltimateLib.Research.addSpecialResearch({
				id: '00e9c966-1f87-41e0-8f00-1ea025fe7320',
				name: 'Individual Game Websites'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.gameWebsites.rp,
				duration: Evolution.config.marketing.gameWebsites.duration,
				cost: Evolution.config.marketing.gameWebsites.price,
				canResearch: function (company){
					return Evolution.data.researchFlags.marketing.website && company.gameLog.length > 10;
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.gameWebsites = true;
					var newFans = Math.round(GameManager.company.fans * Evolution.config.marketing.gameWebsites.fanAdjust);
					
					var n = new Notification({
						header: 'Individual Game Websites'.localize(),
						text: 'Well Done, with individual websites for our games this will surely help build our online presence up, now if we could only find more usage for these websites...'
					});

					if (GameManager.company.isGameProgressBetween(0.2, 0.9)) n.adjustHype(newFans);
					n.adjustFans(newFans);
					GameManager.company.notifications.push(n);
				}
			});

			/* Bug & Error Reporting Research */
			UltimateLib.Research.addSpecialResearch({
				id: '30c22000-f0de-45af-be93-cbb4e7ad8954',
				name: 'Bug & Error Reporting'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.bugWebsite.rp,
				duration: Evolution.config.marketing.bugWebsite.duration,
				cost: Evolution.config.marketing.bugWebsite.price,
				canResearch: function (company){
					return (
						Evolution.data.researchFlags.marketing.website && 
						Evolution.data.researchFlags.marketing.gameWebsites && 
						company.gameLog.length > 10);
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.bugWebsite = true;
					GameManager.company.notifications.push(new Notification({
						header: 'Bug & Error Reporting'.localize(),
						text: 'Well Done, We can now collect bugs and errors on our website from customers. This will surely help our Company gather fans if we could only combine it with something else...'
					}));
				}
			});

			/* Patch Website Research */
			UltimateLib.Research.addSpecialResearch({
				id: 'bb7ab9aa-beae-45e3-8f9d-321158e8eec8',
				name: 'Website for Game Patches'.localize(),
				category: 'Marketing',
				categoryDisplayName: 'Product Marketing'.localize(),
				pointsCost: Evolution.config.marketing.patchWebsite.rp,
				duration: Evolution.config.marketing.patchWebsite.duration,
				cost: Evolution.config.marketing.patchWebsite.price,
				canResearch: function (company){
					return (
						Evolution.data.researchFlags.marketing.website && 
						Evolution.data.researchFlags.marketing.gameWebsites && 
						company.gameLog.length > 10);
				},
				complete: function (){
					Evolution.data.researchFlags.marketing.patchWebsite = true;
					GameManager.company.notifications.push(new Notification({
						header: 'Patches & Updates'.localize(),
						text: 'Well Done, with the ability to patch our games after release this should greatly help improve our relationship with our faithful fans.'
					}));
				}
			});

		},

		addNewsletter : function(){

			Missions.MarketingMissions.push({
				cost: 500,
				description: "Well our fans subscribed to our email so lets give them a shout and help out our game hype.",
				experience: 0,
				id: "3fc18204-e9a9-11e3-b91f-82687f4fc15c",
				level: 1,
				marketingFactor: 0.1,
				missionType: "marketing",
				name: "Send E-Mail Newsletter",
				percentage: undefined,
				shortName: "Newsletter"
			});

		},

		addMarketingFirm : function(){

			Missions.MarketingMissions.push({
				cost: 250000,
				description: "It often gets busy with game development, why bother working so hard and let an outside firm perform all the marketing for you. It is what they do for a profession.",
				experience: 0,
				id: "3fc17bb0-e9a9-11e3-b91f-82687f4fc15c",
				level: 1,
				marketingFactor: 2.5,
				missionType: "marketing",
				name: "Hire Marketing Firm",
				percentage: undefined,
				shortName: "Hire Firm"
			});

		},

		addSocialMedia : function(){

			Missions.MarketingMissions.push({
				cost: 2500,
				description: "We have this great game why not release some videos on VidTube for potential fans to view and fall in love with your upcoming game. ",
				experience: 0,
				id: "3fc175fc-e9a9-11e3-b91f-82687f4fc15c",
				level: 1,
				marketingFactor: 0.25,
				missionType: "marketing",
				name: "Release Trailers on VidTube",
				percentage: undefined,
				shortName: "VidTube Trailers"
			});

			Missions.MarketingMissions.push({
				cost: 5000,
				description: "We have fans, we have a great game so lets spread the word on our Social Media accounts and get the hype out.",
				experience: 0,
				id: "3fc17fca-e9a9-11e3-b91f-82687f4fc15c",
				level: 1,
				marketingFactor: 0.28,
				missionType: "marketing",
				name: "Social Media Presence",
				percentage: undefined,
				shortName: "Social Media"
			});
		},

		addGameWebsites : function(){
			Missions.MarketingMissions.push({
				cost: 75000,
				description: "Lets get a website for this game running and push all kinds of information to it and presale this game and merchandise with it.",
				experience: 0,
				id: "3fc19d0c-e9a9-11e3-b91f-82687f4fc15c",
				level: 1,
				marketingFactor: 0.7,
				missionType: "marketing",
				name: "Game Website Package",
				percentage: undefined,
				shortName: "Game Website"
			});
		},

		unlocks : function() {
			/* Unlock Patch Menu */
			if (Evolution.data.researchFlags.marketing.patchWebsite && Evolution.data.researchFlags.marketing.bugWebsite && !Evolution.config.unlocks.patchMenu){
				Evolution.Menus.unlockPatchMenu();
				Evolution.config.unlocks.patchMenu = true;
			}

			if (Evolution.data.researchFlags.marketing.gameWebsites && !Evolution.config.unlocks.gameWebsites) {
				Evolution.Marketing.addGameWebsites();
				Evolution.config.unlocks.gameWebsites = true;
			}

			if (Evolution.data.researchFlags.marketing.socialMedia && !Evolution.config.unlocks.socialMedia) {
				Evolution.Marketing.addSocialMedia();
				Evolution.config.unlocks.socialMedia = true;
			}

			if (Evolution.data.researchFlags.marketing.marketingFirm && !Evolution.config.unlocks.marketingFirm) {
				Evolution.Marketing.addMarketingFirm();
				Evolution.config.unlocks.marketingFirm = true;
			}

			if (Evolution.data.researchFlags.marketing.newsletter && !Evolution.config.unlocks.newsletter) {
				Evolution.Marketing.addNewsletter();
				Evolution.config.unlocks.newsletter = true;
			}

			// Lets sort out the mess we just made... I hate being unordered
			Missions.MarketingMissions.sort(function(a,b){
				return a.cost - b.cost;
			});

			return;
		}
	};
})();