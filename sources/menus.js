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

		init: function() {
			var html = '<div id="EVO-Icons">'
			 +'<div id="EVO-Icon" class="ico menu" onclick="Evolution.Menus.openMenu()"></div>'
			 +'<div id="EVO-Icon-Staff" class="ico staff" onclick="Evolution.Menus.openStaff()"></div>'
			 +'<div id="EVO-Icon-Games" class="ico games" onclick="Evolution.Menus.openGames()"></div>'
			 +'</div>';
			$('#mainMenuButton').after(html);

			var mainMenu = '<div id="EVO-Menu-Main'
			 + 'Main Menu'
			 + '</div>';

			Evolution.Menus.menuDialog();
			Evolution.Menus.staffDialog();
		},

		/* Lvl Design Tech Speed Research */
		staffDialog: function() {
			var html = '<div id="EVO-Menu-Staff" class="windowBorder wideWindow EVO" style="overflow:auto;display:none;">'
			 + '<div class="windowTitle smallerWindowTitle">EvolutionMod - View Staff</div>'
			 + '<table id="EVO-Staff-Table"><thead><tr>'
			 + '<th>Name:</th><th>Level:</th><th>Design:</th><th>Tech:</th><th>Speed:</th><th>Research:</th><th>Pay:</th>'
			 + '</tr></thead><tbody>'
			 + '</tbody></table>'
			 + '<div class="EVO hint">You can sort this table by clicking headers at top</div>'
			 + '</div>';
			var body = $('body');
			body.append(html);

			// And now add sorting
			$('#EVO-Staff-Table').tablesorter();
		},

		menuDialog: function() {
			var html = '<div id="EVO-Menu-Main" class="windowBorder tallWindow" style="overflow:auto;display:none;">'
			 + '<div class="windowTitle smallerWindowTitle">EvolutionMod</div>'
			 + '<div class="centeredButtonWrapper">'

			 + '<div class="evobtn-staffVacation selectorButton orangeButton windowLargeOkButton mainMenuButton disabled">Staff Vacation</div>'

			 + '<div style="text-align:center;line-height:1.5em;">More Options Soon</div>'
			 + '</div></div>';

			var body = $('body');
			body.append(html);
		},

		gameDialog: function() {

		},


		unlockVacations: function() {

		},

		openGames : function() {
			UI.showGameHistory();
		},

		openStaff: function() {
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
			});

			/* Select and wipe container clean */
			var container = $('#EVO-Staff-Table > tbody');
			container.html('');

			/* Our template */
			var template = '<tr><td class="staffN"></td><td class="staffL"></td><td class="staffD">'
			 + '</td><td class="staffT"></td><td class="staffS"></td>'
			 + '<td class="staffR"></td><td class="staffP"></td></tr>';
			
			/* Walk through staff */
			for(var i=0,len=GameManager.company.staff.length;i<len;i++) {
				var staff 		= GameManager.company.staff[i];
				var temp 		= $(template).clone();

				temp.find('.staffL').text( Math.floor(staff.experience ? LevelCalculator.getLevelFractional(staff.experience) : 5 * staff.qualityFactor) );
				temp.find('.staffD').text( Math.floor(500 * staff.designFactor) );
				temp.find('.staffT').text( Math.floor(500 * staff.technologyFactor) );
				temp.find('.staffS').text( Math.floor(500 * staff.speedFactor) );
				temp.find('.staffR').text( Math.floor(500 * staff.researchFactor) );
				temp.find('.staffP').text( UI.getShortNumberString(staff.salary) );

				/* Are we a tech or design specialist */
				if (staff.flags.designSpecialist){
					temp.find('.staffN').html( staff.name + '<br /><span class="specialty">Design Specialist</span>');
				} else if (staff.flags.technologySpecialist){
					temp.find('.staffN').html( staff.name + '<br /><span class="specialty">Tech Specialist</span>' );
				} else{
					temp.find('.staffN').text( staff.name );
				}

				/* Attach to table */
				container.append( temp );
			}

			$('#EVO-Staff-Table').trigger("update");

		},

		openMenu: function() {
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


	};

})();