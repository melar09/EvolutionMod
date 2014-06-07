(function () {

	Evolution.Menus = {

		unlockPatchMenu: function(){
			var menuItems = [];
			var div = $("body");
			div = $("#PatchMenu");

			var original_PopupMenu = UI._showContextMenu;
			var new_initPopupMenu = function (type, menuItems, x, y) {
				var company = GameManager.company;
				var targetChar = company.currentLevel > 1 ? UI.getCharUnderCursor() : company.staff[0];

				if (targetChar) {
					if (targetChar.state != CharacterState.Researching 
						&& targetChar.state != CharacterState.Training 
						&& targetChar.state != CharacterState.Vacation ){
						menuItems.push({
							label: "Work on Game Patches",
							action: function () {
								Sound.click();
								GameManager.resume(true);
							}
						});
					}
				}
				original_PopupMenu(type, menuItems, x, y);
			};
			UI._showContextMenu = new_initPopupMenu;
		},

		contextMenu: function(){

			var old_showContextMenu = UI._showContextMenu;
			var new_showContextMenu = function (type, menuItems, x, y) {
				console.dir(menuItems);
				old_showContextMenu(type, menuItems, x, y);
			};
			UI._showContextMenu = new_showContextMenu;

		},

		init: function() {
			var html = '<div id="EVO-Icons">'
			 +'<div id="EVO-Icon" class="ico menu" onclick="Evolution.Menus.menuDialog.open()"></div>'
			 +'<div id="EVO-Icon-Staff" class="ico staff" onclick="Evolution.Menus.staffDialog.open()"></div>'
			 +'<div id="EVO-Icon-Games" class="ico games" onclick="Evolution.Menus.gameDialog.open()"></div>'
			 +'</div>';
			$('#mainMenuButton').after(html);

			Evolution.Menus.menuDialog.init();
			Evolution.Menus.staffDialog.init();
			Evolution.Menus.gameDialog.init();

		},

		menuDialog: {
			init: function(){
				$.get('mods/EvolutionMod/assets/templates/menu-container.html',function(tmpl){
					var complied = Handlebars.compile(tmpl);
					$('body').append( complied() );
				});
			},

			open: function(){
				Sound.click();
				GameManager.pause(!0);

				$('#EVO-Menu-Main').gdDialog({
					popout: true,
					close: true,
					modal: true,
					draggable: false,
					onClose: function () {
						GameManager.resume(!0);
					}
				});

				/* Enable Staff Vacations */
				if (Evolution.data.researchFlags.staff.retreat){

					$('.evobtn-staffVacation').removeClass("disabled").clickExclOnce(function(){
						Sound.click();
						
						Evolution.Staff.sendOnVacation();

	                    $("#EVO-Menu-Main").dialog("close");
	                    GameManager.resume(!0);
					});
				}
			}
		},

		staffDialog: {
			init: function(){

				/* Fetch and append our modal */
				$.get('mods/EvolutionMod/assets/templates/staff-container.html',function(tmpl){
					var complied = Handlebars.compile(tmpl);

					$('body').append( complied() );
					$('#EVO-Staff-Table').tablesorter();

				});
			},

			open: function(){
				Sound.click();
				GameManager.pause(!0);

				/* And show the Dialog */
				$('#EVO-Menu-Staff').gdDialog({
					popout: true,
					close: true,
					modal: true,
					draggable: false,
					onClose: function () {
						GameManager.resume(!0);
					}
				})

				$('#EVO-Menu-Staff').find('.okButton').clickExclOnce(function(){
					Sound.click();
					UI.closeAllDialogs();
				});

				Evolution.Menus.staffDialog.tableView();
				return;
			},

			singleViewStaff: {},
			singleView: function(index){
				if (!GameManager.company.staff[index]) {
					return false;
				}

				var staff 		= GameManager.company.staff[index];

				/* Some specialty & expert checks */
				var rank = '';
				if (staff.flags.designSpecialist) {
					rank = 'Design Specialist';
				}
				if (staff.flags.technologySpecialist) {
					rank = 'Tech Specialist';
				}

				if (rank!='' && staff.flags.expert) {
					rank += ' - ';
				}

				if (staff.flags.expert) {
					rank += staff.flags.expert;
				}

				/* Add to template object */
				Evolution.Menus.staffDialog.singleViewStaff = {
					index: index,
					name: staff.name,
					rank: rank,
					level: Math.floor(staff.experience ? LevelCalculator.getLevelFractional(staff.experience) : 5 * staff.qualityFactor),
					design: Math.floor(500 * staff.designFactor),
					tech: Math.floor(500 * staff.technologyFactor),
					speed: Math.floor(500 * staff.speedFactor),
					research: Math.floor(500 * staff.researchFactor),
					pay: UI.getShortNumberString(staff.salary),
					progressBar: Math.floor(LevelCalculator.getProgressToNextLevel(staff.experience))
				};

				/* Fetch template and add our data */
				$.get('mods/EvolutionMod/assets/templates/staff-panelview.html',function(tmpl){
					var complied = Handlebars.compile(tmpl);

					$('#EVO-Menu-Staff .singleView').html( complied(
						Evolution.Menus.staffDialog.singleViewStaff
						));

					/* Animate Please =D */
					$('#EVO-Menu-Staff .listView').fadeOut(200,function(){
						$('#EVO-Menu-Staff .singleView').fadeIn(200);
					});

					/* Backwards button */
					$('.evobtn-goback').clickExclOnce(function(){
						Sound.click();
						$('#EVO-Menu-Staff .singleView').fadeOut(200,function(){
							$('#EVO-Menu-Staff .listView').fadeIn(200);
						});
					});
				});
			},

			tableViewStaff: {
				total: 0,
				staff: []
			},
			tableView: function(){
				Evolution.Menus.staffDialog.tableViewStaff.total = GameManager.company.staff.length;
				Evolution.Menus.staffDialog.tableViewStaff.staff = [];

				/* Looopy do looop */
				for(var i=0,len=GameManager.company.staff.length;i<len;i++) {
					var staff 		= GameManager.company.staff[i];

					/* Some specialty & expert checks */
					var rank = '';
					if (staff.flags.designSpecialist) {
						rank = 'Design Specialist';
					}
					if (staff.flags.technologySpecialist) {
						rank = 'Tech Specialist';
					}

					if (rank!='' && staff.flags.expert) {
						rank += ' - ';
					}

					if (staff.flags.expert) {
						rank += staff.flags.expert;
					}

					/* Add to template object */
					Evolution.Menus.staffDialog.tableViewStaff.staff[i] = {
						index: i,
						name: staff.name,
						rank: rank,
						level: Math.floor(staff.experience ? LevelCalculator.getLevelFractional(staff.experience) : 5 * staff.qualityFactor),
						design: Math.floor(500 * staff.designFactor),
						tech: Math.floor(500 * staff.technologyFactor),
						speed: Math.floor(500 * staff.speedFactor),
						research: Math.floor(500 * staff.researchFactor),
						pay: UI.getShortNumberString(staff.salary)
					};

				}

				/* Fetch template and add our data */
				$.get('mods/EvolutionMod/assets/templates/staff-table.html',function(tmpl){
					var complied = Handlebars.compile(tmpl);

					$('#EVO-Staff-Table tbody').html( complied(
						Evolution.Menus.staffDialog.tableViewStaff
						));
					$('#EVO-Staff-Table').trigger("update");

					$('#EVO-Staff-Table > tbody').bind('click',function(e){
						var index = $(e.target).parents('tr').data('index');
						Evolution.Menus.staffDialog.singleView(index);
						e.stopPropagation();
						e.preventDefault();
					});
				});

				return;
			}
		},

		gameDialog: {
			init: function(){

			},

			open: function(){
				UI.showGameHistory();
			}
		}
	};

})();