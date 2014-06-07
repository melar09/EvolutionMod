(function () {

	Evolution.EngineParts = {

		init: function(){

			UltimateLib.Research.addSpecialResearch({
				id: 'ee8b638f-d8de-445d-9d47-1cb582141b43',
				name: 'Video Aspect Ratios'.localize(),
				category: 'Aspect Ratio',
				categoryDisplayName: 'Aspect Ratio'.localize(),
				pointsCost: Evolution.config.engineParts.aspectRatio.rp,
				duration: Evolution.config.engineParts.aspectRatio.duration,
				cost: Evolution.config.engineParts.aspectRatio.price,
				canResearch: function (company){
					return LevelCalculator.getMissionLevel('Graphic') > 3;
				},
				complete: function (){
					Evolution.data.researchFlags.engineParts.aspectRatio = true;
				}
			});
			
			/* Multiple Displays */
			GDT.addResearchItem({
				id: "44b70234-9b7a-4d59-ba41-06b2a8fbd194",
				name: "Multiple Displays".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 2,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 4;
				}
			});

			/* 480p Aspect Ratio */
			GDT.addResearchItem({
				id: "b071e5ca-98bc-45d2-bdb7-99866e4a4a02",
				name: "480p Aspect Ratio".localize(),
				category: "Aspect Ratio",
				categoryDisplayName: "Aspect Ratio".localize(),
				v: 1,
				canResearch: function (company) {
					return Evolution.data.researchFlags.engineParts.aspectRatio
						&& LevelCalculator.getMissionLevel('Graphic') > 3;
				}
			});

			/* 720p Aspect Ratio */
			GDT.addResearchItem({
				id: "804b5739-4e65-4f8e-86de-e40a31baa852",
				name: "720p Aspect Ratio".localize(),
				category: "Aspect Ratio",
				categoryDisplayName: "Aspect Ratio".localize(),
				v: 1,
				canResearch: function (company) {
					return Evolution.data.researchFlags.engineParts.aspectRatio
						&& LevelCalculator.getMissionLevel('Graphic') > 3;
				}
			});

			/* 1080p Aspect Ratio */
			GDT.addResearchItem({
				id: "6fcf55c2-8705-4001-ab9c-84ad3a1c47b8",
				name: "1080p Aspect Ratio".localize(),
				category: "Aspect Ratio",
				categoryDisplayName: "Aspect Ratio".localize(),
				v: 2,
				canResearch: function (company) {
					return Evolution.data.researchFlags.engineParts.aspectRatio
						&& LevelCalculator.getMissionLevel('Graphic') > 3;
				}
			});

			/* 2K Aspect Ratio */
			GDT.addResearchItem({
				id: "01b88ee6-622b-48a3-8c69-653bbee366ad",
				name: "2K Aspect Ratio".localize(),
				category: "Aspect Ratio",
				categoryDisplayName: "Aspect Ratio".localize(),
				v: 2,
				canResearch: function (company) {
					return Evolution.data.researchFlags.engineParts.aspectRatio
						&& LevelCalculator.getMissionLevel('Graphic') > 3;
				}
			});

			/* 4K Aspect Ratio */
			GDT.addResearchItem({
				id: "6a099148-b3bc-4552-8bb3-882a7d0af749",
				name: "4K Aspect Ratio".localize(),
				category: "Aspect Ratio",
				categoryDisplayName: "Aspect Ratio".localize(),
				v: 2,
				canResearch: function (company) {
					return Evolution.data.researchFlags.engineParts.aspectRatio
						&& LevelCalculator.getMissionLevel('Graphic') > 3;
				}
			});

			/* Realtime Illumination */
			GDT.addResearchItem({
				id: "199efaa7-b015-4c07-8f74-3a3d207dbff3",
				name: "Realtime Illumination".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 2,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 4;
				}
			});

			/* Subsurface Scattering */
			GDT.addResearchItem({
				id: "5c91cf95-72ef-4087-a4af-9263109c2aa1",
				name: "Subsurface Scattering".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 4,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 4;
				}
			});

			/* Translucent Shadows Scattering */
			GDT.addResearchItem({
				id: "3e18117c-921f-473d-a406-4538f7d6db3e",
				name: "Translucent Shadows".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 4,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 4;
				}
			});

			/* Volumetric 3d Sky Scattering */
			GDT.addResearchItem({
				id: "c0f7f18b-353f-44f2-be6f-18b88903d1ed",
				name: "Volumetric 3D Sky".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 4,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 5;
				}
			});

			/* Advanced Collision detection */
			GDT.addResearchItem({
				id: "3c616dc6-6191-4091-82cf-ddb249c7a235",
				name: "Advanced Collision Detection".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 4,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 4;
				}
			});

			/* Particle System Physics */
			GDT.addResearchItem({
				id: "7a46bd4b-a46c-40ff-bae5-da055815cd4d",
				name: "Particle System Physics".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 6,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 4;
				}
			});

			/* 3rd Party Texture Support */
			GDT.addResearchItem({
				id: "0bfca2a7-0c09-49f9-950e-bfc1b6b5909f",
				name: "3rd Party Texture Support".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 4,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 5;
				}
			});

			/* Dynamic Pathfinding */
			GDT.addResearchItem({
				id: "9f719bbb-7792-4a8c-8320-8eb1aeda4d89",
				name: "Dynamic Pathfinding".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 6,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 5;
				}
			});

			/* Difficulty Settings */
			GDT.addResearchItem({
				id: "519ffc53-99aa-4539-bfcb-6505036ccc1f",
				name: "Dificulty Settings".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 2,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 3;
				}
			});

			/* Reusable Map Seed */
			GDT.addResearchItem({
				id: "634c69f8-93cf-45da-95a2-d413a1e06440",
				name: "Reusable Map Seed".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 2,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 3;
				}
			});

			/* Procedural Map Generation */
			GDT.addResearchItem({
				id: "3fc18a42-e9a9-11e3-b91f-82687f4fc15c",
				name: "Procedural Map Generation".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 4,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 4;
				}
			});

			/* Advanced Scene Culling */
			GDT.addResearchItem({
				id: "3fc18858-e9a9-11e3-b91f-82687f4fc15c",
				name: "Advanced Scene Culling".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 6,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 4;
				}
			});

			/* Reflection Mapped Textures */
			GDT.addResearchItem({
				id: "3fc183f8-e9a9-11e3-b91f-82687f4fc15c",
				name: "Reflection Mapped Textures".localize(),
				category: "Graphic",
				categoryDisplayName: "Graphic".localize(),
				v: 6,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Graphic') > 4;
				}
			});

			/* Physics Sub-Stepping */
			GDT.addResearchItem({
				id: "3fc18628-e9a9-11e3-b91f-82687f4fc15c",
				name: "Physics Sub-Stepping".localize(),
				category: "Engine",
				categoryDisplayName: "Engine".localize(),
				v: 8,
				canResearch: function (company) {
					return LevelCalculator.getMissionLevel('Engine') > 4;
				}
			});


		}

	};

})();