//Vendors
//v1.0
//By Sylen

setup.acquireItem = function (itemName, itemTable) {
	if (itemTable == "clothes") {
		SugarCube.State.variables.clothes.owned.pushUnique(itemName);
	} else if (itemTable == "items") {
		let player = SugarCube.State.variables.player;
		let itemId = null;
		let itemFound = false;
		let items = setup.loadItems(player);
		for (let n = 0; n < items.length; n++) {
			if (itemName == items[n].name) {
				itemId = items[n].id;
				break;
			}
		}
		for (let n = 0; n < player.inventory.length; n++) {
			if (player.inventory[n].id == itemId) {
				player.inventory[n].amount += 1;
				itemFound = true;
				break;
			}
		}
		if (itemFound == false) {
			player.inventory.push({id: itemId, amount: 1});
		}
	}
}

setup.vendor = function (type, category, vendorPassage) {
	let returnVendor = "";
	switch(type) {
		case "clothes": 
		let clothes = setup.loadClothes();
		for (var i = 0; i < clothes.length; i++) {
			if (clothes[i].modifiers.includes(category)) {
				if (SugarCube.State.variables.clothes.owned.includes(clothes[i].name)) {
					console.log(clothes[i].name + ": Owned.");
				} else {
					console.log(clothes[i].name + ": Displayed.");
					returnVendor = returnVendor + "<div class='default-container'><div class='default-portrait'><img src='" + clothes[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
					"</div><div class='default-text'>@@.boldtext;" + clothes[i].name + "@@<br>" + clothes[i].description + "<br>@@.boldtext;Price@@: u" + clothes[i].cost + "<br>" + 
					"<span class='lbb'><<button 'Purchase'>><<if $player.units >= " + clothes[i].cost + ">><<set $player.units -= " + clothes[i].cost + ">><<replace '#units-amount'>>$player.units<</replace>>" + 
					"<<= setup.acquireItem('" + clothes[i].name + "','clothes')>><<replace '.vendor-display'>><<= setup.vendor('" + type + "', '" + category + "')>><</replace>>" + 
					"<<= setup.logEPal('Purchase(" + clothes[i].name + ")', -" + clothes[i].cost + ", 0, 'Vendor')>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>>" + 
					"<</if>><</button>></span></div></div>";
				}
			}
		}
		break;
		default:
		let entity = SugarCube.State.variables.player;
		let items = setup.loadItems(entity);
		for (var i = 0; i < items.length; i++) {
			if (items[i].category.includes(category)) {
				returnVendor = returnVendor + "<div class='default-container'><div class='default-portrait'><img src='" + items[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'>@@.boldtext;" + items[i].name + "@@<br>" + items[i].description + "<br>@@.boldtext;Price@@: u" + items[i].cost + "<br>" + 
				"<span class='lbb'><<button 'Purchase'>><<if $player.units >= " + items[i].cost + ">><<set $player.units -= " + items[i].cost + ">><<replace '#units-amount'>>$player.units<</replace>>" + 
				"<<= setup.acquireItem('" + items[i].name + "','items')>>" + 
				"<<= setup.logNote('Purchase', 'You have purchased x1 " + items[i].name + ".')>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";
			}
		}
		break;
	}
	return "<span class='vendor-display'>" + returnVendor + "</span>";
}

setup.hairColors = function (hairType, vendorPassage) {
	let returnColors = "";
	let cosmetic = setup.loadCosmetics();
	for (let pHair = 0; pHair < cosmetic.length; pHair++) {
		if (cosmetic[pHair].name == hairType) {
			for (let iHair = 0; iHair < cosmetic[pHair].hairColors.length; iHair++) {
				let imageHairColor = "images/portraits/player/stylist-shop/" + cosmetic[pHair].appliedName + "/" + cosmetic[pHair].hairColors[iHair] + ".png";
				returnColors = returnColors + "<div class='haircolor-container'><div class='haircolor-portrait'><img src='" + imageHairColor + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'><span class='lbb'><<button 'Purchase'>><<if $player.units >= " + cosmetic[pHair].cost + ">><<set $player.units -= " + cosmetic[pHair].cost + ">>" + 
				"<<set $player.body.hair.color = '" + cosmetic[pHair].hairColors[iHair] + "'>><<set $player.body.hair.styleName = '" + cosmetic[pHair].appliedName + "'>>" + 
				"<<set $player.body.hair.style = " + cosmetic[pHair].applied + ">><<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>>" + 
				"<</if>><</button>></span></div></div>";
			}
		}
	}
	return returnColors;
}

setup.stylist = function (type, vendorPassage) {
	let returnStyle = "";
	let cosmetic = setup.loadCosmetics();
	console.log("Displaying(" + type + ")...");
	for (var i = 0; i < cosmetic.length; i++) {
		if (cosmetic[i].type == type) {
			console.log(cosmetic[i].name + ": Displayed.");
			if (type == "hairstyles") {
				returnStyle = returnStyle + "<div class='default-container'><div class='default-portrait'><img src='" + cosmetic[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'>@@.boldtext;" + cosmetic[i].name + "@@<br>" + cosmetic[i].description + "<br>@@.boldtext;Price@@: u" + cosmetic[i].cost + "<br>" + 
				"<span class='lbb'><<button 'Show Colors'>><<replace '#HairColors'>><<= setup.hairColors('" + cosmetic[i].name + "', '" + vendorPassage + "')>><</replace>><</button>></span></div></div>";
			} else if (type == "makeup") {
				returnStyle = returnStyle + "<div class='default-container'><div class='default-portrait'><img src='" + cosmetic[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'>@@.boldtext;" + cosmetic[i].name + "@@<br>" + cosmetic[i].description + "<br>@@.boldtext;Price@@: u" + cosmetic[i].cost + " - @@.boldtext;Stamp@@: u" + cosmetic[i].stampCost + "<br>" + 
				"<span class='lbb'><<button 'Purchase'>><<if $player.body.face.isStamped is false>><<if $player.units >= " + cosmetic[i].cost + ">><<set $player.units -= " + cosmetic[i].cost + ">><<set $player.body.face.makeup = " + cosmetic[i].applied + ">>" + 
				"<<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><<else>><<= setup.logNote('Alert', 'You have already received a stamp procedure, remove that first.')>>" + 
				"<</if>><</button>></span><span class='lbb'><<button 'Stamp Procedure'>><<if $player.body.face.isStamped is false>><<if $player.units >= " + cosmetic[i].stampCost + ">>" + 
				"<<set $player.units -= " + cosmetic[i].stampCost + ">><<set $player.body.face.makeup = " + cosmetic[i].applied + ">><<if '" + cosmetic[i].name + "' == 'No Makeup'>><<set $player.body.face.isStamped to false>>" + 
				"<<else>><<set $player.body.face.isStamped to true>><</if>><<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><<else>>" + 
				"<<if '" + cosmetic[i].name + "' == 'No Makeup'>><<if $player.units >= " + cosmetic[i].stampCost + ">><<set $player.units -= " + cosmetic[i].stampCost + ">><<set $player.body.face.isStamped to false>>" + 
				"<<set $player.body.face.makeup = " + cosmetic[i].applied + ">><<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><<else>>" + 
				"<<= setup.logNote('Alert', 'You have already received a stamp procedure, remove that first.')>><</if>><</if>><</button>></span></div></div>";
			} else if (type = "nails") {
				returnStyle = returnStyle + "<div class='default-container'><div class='default-portrait'><img src='" + cosmetic[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'>@@.boldtext;" + cosmetic[i].name + "@@<br>" + cosmetic[i].description + "<br>@@.boldtext;Price@@: u" + cosmetic[i].cost + " - @@.boldtext;Stamp@@: u" + cosmetic[i].stampCost + "<br>" + 
				"<span class='lbb'><<button 'Purchase'>><<if $player.body.torso.nailStamped is false>><<if $player.units >= " + cosmetic[i].cost + ">><<set $player.units -= " + cosmetic[i].cost + ">><<set $player.body.torso.nails = " + cosmetic[i].applied + ">>" + 
				"<<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><<else>><<= setup.logNote('Alert', 'You have already received a stamp procedure, remove that first.')>>" + 
				"<</if>><</button>></span><span class='lbb'><<button 'Stamp Procedure'>><<if $player.body.torso.nailStamped is false>><<if $player.units >= " + cosmetic[i].stampCost + ">>" + 
				"<<set $player.units -= " + cosmetic[i].stampCost + ">><<set $player.body.torso.nails = " + cosmetic[i].applied + ">><<if '" + cosmetic[i].name + "' == 'No Manicure & Pedicure'>><<set $player.body.torso.nailStamped to false>>" + 
				"<<else>><<set $player.body.torso.nailStamped to true>><</if>><<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><<else>>" + 
				"<<if '" + cosmetic[i].name + "' == 'No Manicure & Pedicure'>><<if $player.units >= " + cosmetic[i].stampCost + ">><<set $player.units -= " + cosmetic[i].stampCost + ">><<set $player.body.torso.nailStamped to false>>" + 
				"<<set $player.body.torso.nails = " + cosmetic[i].applied + ">><<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><<else>>" + 
				"<<= setup.logNote('Alert', 'You have already received a stamp procedure, remove that first.')>><</if>><</if>><</button>></span></div></div>";
			}
		}
	}
	if (type == "hairstyles") {
		return returnStyle + "<br><br>" + "<span id='HairColors'></span>";
	} else {
		return returnStyle;
	}
}

setup.tattoos = function (entity, vendorPassage) {
	let returnTattoos = "";
	let tattoos = setup.loadTattoos();
	for (var i = 0; i < tattoos.length; i++) {
		let check = setup.checkMod(entity, "tattoo-slot", tattoos[i]);
		if (check == true) {
			check = setup.checkMod(entity, "tattoo", tattoos[i]);
			if (check == true) {
				returnTattoos = returnTattoos + "<div class='default-container'><div class='default-text'>@@.boldtext;" + tattoos[i].name + "@@<br>" + tattoos[i].description + 
				"<br>@@.boldtext;Price@@: u" + tattoos[i].cost + " - @@.boldtext;Removal@@: u100<br>" + 
				"<span class='gbb'><<button 'Purchase'>><<= setup.logNote('Alert', 'You already have that tattoo.')>><</button>></span>" + 
				"<span class='lbb'><<button 'Remove'>><<if $player.units >= 100>>" + 
				"<<set $player.units -= " + tattoos[i].cost + ">><<= setup.removeMod($player, 'tattoo', '"  + tattoos[i].name +  "')>><<goto '" + vendorPassage + 
				"'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";
			} else {
				returnTattoos = returnTattoos + "<div class='default-container'><div class='default-text'>@@.boldtext;" + tattoos[i].name + "@@<br>" + tattoos[i].description + 
				"<br>@@.boldtext;Price@@: u" + tattoos[i].cost + " - @@.boldtext;Removal@@: u100<br>" + 
				"<span class='gbb'><<button 'Purchase'>><<= setup.logNote('Alert', 'You already have a tattoo in that place.')>><</button>></span><span class='gbb'><<button 'Remove'>>" + 
				"<<= setup.logNote('Alert', 'You do not have that tattoo.')>><</button>></span></div></div>";
			}
		} else {
			returnTattoos = returnTattoos + "<div class='default-container'><div class='default-text'>@@.boldtext;" + tattoos[i].name + "@@<br>" + tattoos[i].description + 
			"<br>@@.boldtext;Price@@: u" + tattoos[i].cost + " - @@.boldtext;Removal@@: u100<br>" + 
			"<span class='lbb'><<button 'Purchase'>><<if $player.units >= " + tattoos[i].cost + ">><<set $player.units -= " + tattoos[i].cost + 
			">><<= setup.getMod($player, 'tattoo', '"  + tattoos[i].name +  "')>>" + 
			"<<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span><span class='gbb'><<button 'Remove'>>" + 
			"<<= setup.logNote('Alert', 'You do not have that tattoo.')>><</button>></span></div></div>";
		}
	}
	return returnTattoos;
}

setup.piercings = function (entity, vendorPassage) {
	let returnPiercings = "";
	let piercings = setup.loadPiercings();
	console.log("Displaying(Piercings)...");
	for (var i = 0; i < piercings.length; i++) {
		console.log(piercings[i].name + ": Displayed.");
		let check = setup.checkMod(entity, "piercing-slot", piercings[i]);
		if (check == true) {
			check = setup.checkMod(entity, "piercing", piercings[i]);
			if (check == true) {
				returnPiercings = returnPiercings + "<div class='default-container'><div class='default-text'>@@.boldtext;" + piercings[i].name + "@@<br>" + 
				piercings[i].description + "<br>@@.boldtext;Price@@: u" + piercings[i].cost + " - @@.boldtext;Removal@@: u100<br>" + 
				"<span class='gbb'><<button 'Purchase'>><<= setup.logNote('Alert', 'You already have that piercing.')>><</button>>" + 
				"</span><span class='lbb'><<button 'Remove'>><<if $player.units >= 100>>" + 
				"<<set $player.units -= " + piercings[i].cost + ">><<= setup.removeMod($player, 'piercing', '"  + piercings[i].name +  "')>><<goto '" + vendorPassage + 
				"'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";
			} else {
				returnPiercings = returnPiercings + "<div class='default-container'><div class='default-text'>@@.boldtext;" + piercings[i].name + "@@<br>" + piercings[i].description + 
				"<br>@@.boldtext;Price@@: u" + piercings[i].cost + " - @@.boldtext;Removal@@: u100<br>" + 
				"<span class='gbb'><<button 'Purchase'>><<= setup.logNote('Alert', 'You already have a piercing in that place.')>><</button>></span>" + 
				"<span class='gbb'><<button 'Remove'>><<= setup.logNote('Alert', 'You do not have that piercing.')>><</button>></span></div></div>";
			}
		} else {
			returnPiercings = returnPiercings + "<div class='default-container'><div class='default-text'>@@.boldtext;" + piercings[i].name + "@@<br>" + piercings[i].description + "<br>@@.boldtext;Price@@: u" + 
			piercings[i].cost + " - @@.boldtext;Removal@@: u100<br>" + 
			"<span class='lbb'><<button 'Purchase'>><<if $player.units >= " + piercings[i].cost + ">><<set $player.units -= " + piercings[i].cost + ">><<= setup.getMod($player, 'piercing', '"  + piercings[i].name +  "')>>" + 
			"<<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span>" + 
			"<span class='gbb'><<button 'Remove'>><<= setup.logNote('Alert', 'You do not have that piercing.')>><</button>></span></div></div>";
		}
	}
	return returnPiercings;
}

setup.sculpting = function (entity, vendorPassage) {
	let returnSculpting = "";
	let sculpting = setup.loadSculpting();
	console.log("Displaying(Sculpting)...");
	for (var i = 0; i < sculpting.length; i++) {
		let pass = true;
		if (sculpting[i].typeSculpt == "penis") {
			pass = false;
			if (entity.modifiers.includes("hasPenis")) {
				pass = true;
			}
		} 
		if (pass == true) {
		console.log(sculpting[i].name + ": Displayed.");
			for (var n = 0; n < entity.scores.length; n++) {
				if (entity.scores[n].name == sculpting[i].typeAdd){
					if (entity.scores[n].score >= entity.scores[n].maxScore) {
						returnSculpting  = returnSculpting  + "<div class='default-container'><div class='default-text'>@@.boldtext;" + sculpting[i].name + "@@<br>" + sculpting[i].description + 
						"<br>@@.boldtext;Price@@: u" + sculpting[i].cost + "<br>" + 
						"<span class='gbb'><<button 'Increase'>>" + 
						"<<= setup.logNote('Alert', 'Maximum reached.')>><</button>></span>" + 
						"<span class='lbb'><<button 'Decrease'>><<if " + entity.units + " >= " + sculpting[i].cost + ">>" + 
						"<<set $player.units -= " + sculpting[i].cost + ">><<= setup.decBod($player, '" + sculpting[i].typeSculpt + "', 1)>><<goto '" + vendorPassage + "'>><<else>>" + 
						"<<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";
					} else if (entity.scores[n].score <= 0) {
						returnSculpting  = returnSculpting  + "<div class='default-container'><div class='default-text'>@@.boldtext;" + sculpting[i].name + "@@<br>" + sculpting[i].description + 
						"<br>@@.boldtext;Price@@: u" + sculpting[i].cost + "<br>" + 
						"<span class='lbb'><<button 'Increase'>><<if " + entity.units + " >= " + sculpting[i].cost + ">>" + 
						"<<set $player.units -= " + sculpting[i].cost + ">><<= setup.incBod($player, '" + sculpting[i].typeSculpt + "', 1)>><<goto '" + vendorPassage + "'>><<else>>" + 
						"<<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span>" + 
						"<span class='gbb'><<button 'Decrease'>>" + 
						"<<= setup.logNote('Alert', 'Minimum reached.')>><</button>></span></div></div>";
					} else {
						returnSculpting  = returnSculpting  + "<div class='default-container'><div class='default-text'>@@.boldtext;" + sculpting[i].name + "@@<br>" + sculpting[i].description + 
						"<br>@@.boldtext;Price@@: u" + sculpting[i].cost + "<br>" + 
						"<span class='lbb'><<button 'Increase'>><<if " + entity.units + " >= " + sculpting[i].cost + ">>" + 
						"<<set $player.units -= " + sculpting[i].cost + ">><<= setup.incBod($player, '" + sculpting[i].typeSculpt + "', 1)>><<goto '" + vendorPassage + "'>><<else>>" + 
						"<<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span>" + 
						"<span class='lbb'><<button 'Decrease'>><<if " + entity.units + " >= " + sculpting[i].cost + ">>" + 
						"<<set $player.units -= " + sculpting[i].cost + ">><<= setup.decBod($player, '" + sculpting[i].typeSculpt + "', 1)>><<goto '" + vendorPassage + "'>><<else>>" + 
						"<<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";
					}
				}
			}
		}
	}
	return returnSculpting;
}

setup.cybermods = function (entity, vendorPassage) {
	let returnCybermods = "";
	let cybermods = setup.loadCybermods();
	console.log("Displaying(Cybermods)...");
	for (var i = 0; i < cybermods.length; i++) {
		let check = setup.checkMod(entity, "cybermods", cybermods[i]);
		if (check == true) {
			returnCybermods = returnCybermods + "<div class='default-container'><div class='default-text'>@@.boldtext;" + cybermods[i].name + "@@" +
			"<br>@@.boldtext;Price@@: u" + cybermods[i].cost + 
			"<span class='lbb'><<button 'More Info'>><<set $misc.loadedDetails = '" + cybermods[i].details + "'>><<CyberDetails>><</button>></span><br>" +
			"<span class='gbb'><<button 'Purchase & Install'>><<= setup.logNote('Alert', 'You already have that upgrade.')>><</button>></span></div></div>";
		} else {
			returnCybermods = returnCybermods + "<div class='default-container'><div class='default-text'>@@.boldtext;" + cybermods[i].name + "@@" +
			"<br>@@.boldtext;Price@@: u" + cybermods[i].cost + 
			"<span class='lbb'><<button 'More Info'>><<set $misc.loadedDetails = '" + cybermods[i].details + "'>><<CyberDetails>><</button>></span><br>" +
			"<span class='lbb'><<button 'Purchase & Install'>><<if $player.units >= " + cybermods[i].cost + ">><<set $player.units -= " + cybermods[i].cost + ">>" + 
			"<<= setup.getMod($player, 'cybermod', '"  + cybermods[i].name +  "')>>" + 
			"<<goto '" + vendorPassage + "'>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";
		}
	}
	return returnCybermods;
}

setup.checkMod = function (entity, type, mod) {
	let check = false;
	//console.log("Checking(" + mod.name + ")...");
	if (type == "tattoo-slot") {
		for (let i = 0; i < entity.tattoos.length; i++) {
			if (mod.slot == entity.tattoos[i].slot) {
				check = true;
				break;
			}
		}
	} else if (type == "tattoo") {
		for (let i = 0; i < entity.tattoos.length; i++) {
			if (mod.name == entity.tattoos[i].name) {
				check = true;
				break;
			}
		}
	} else if (type == "piercing-slot") {
		for (let i = 0; i < entity.piercings.length; i++) {
			if (mod.name == entity.piercings[i].name) {
				check = true;
				break;
			}
		}
	} else if (type == "piercing") {
		for (let i = 0; i < entity.piercings.length; i++) {
			if (mod.name == entity.piercings[i].name) {
				check = true;
				break;
			}
		}
	} else if (type == "cybermods") {
		for (let i = 0; i < entity.cybermods.length; i++) {
			if (mod.name == entity.cybermods[i].name) {
				check = true;
				break;
			}
		}
	}
	//console.log(check);
	return check;
}

setup.getMod = function (entity, type, mod) {
	//console.log("Giving " + type + " to " + entity.name + "...");
	if (type == "tattoo") {
		let tattoos = setup.loadTattoos();
		for (let i = 0; i < tattoos.length; i++) {
			if (tattoos[i].name == mod) {
				entity.tattoos.push(tattoos[i]);
				setup.incScore(entity, tattoos[i].typeAdd, tattoos[i].valueAdd); 
				break;
			}
		}
	} else if (type == "piercing")  {
		let piercings = setup.loadPiercings();
		for (let i = 0; i < piercings.length; i++) {
			if (piercings[i].name == mod) {
				entity.piercings.push(piercings[i]);
				setup.incScore(entity, piercings[i].typeAdd, piercings[i].valueAdd); 
				break;
			}
		}
	} else if (type == "cybermod")  {
		let cybermods = setup.loadCybermods();
		for (let i = 0; i < cybermods.length; i++) {
			if (cybermods[i].name == mod) {
				if (cybermods[i].name == "Cyberdong 3000") {
					setup.modify(entity, "addPenis");
				}
				entity.cybermods.push(cybermods[i]);
				setup.incScore(entity, cybermods[i].typeAdd, cybermods[i].valueAdd); 
				break;
			}
		}
	}
}

setup.removeMod = function (entity, type, mod) {
	//console.log("Removing " + type + " from " + entity.name + "...");
	if (type == "tattoo") {
		for (let i = 0; i < entity.tattoos.length; i++) {
			if (entity.tattoos[i].name == mod) {
				setup.decScore(entity, tattoos[i].typeAdd, tattoos[i].valueAdd);
				entity.tattoos.splice(i, 1);
				break;
			}
		}
	} else if (type == "piercing")  {
		for (let i = 0; i < entity.piercings.length; i++) {
			if (entity.piercings[i].name == mod) {
				setup.decScore(entity, piercings[i].typeAdd, piercings[i].valueAdd);
				entity.piercings.splice(i, 1);
				break;
			}
		}
	} else if (type == "cybermod")  {
		for (var i = 0; i < entity.cybermods.length; i++) {
			if (entity.cybermods[i].name == mod) {
				setup.decScore(entity, cybermods[i].typeAdd, cybermods[i].valueAdd);
				entity.cybermods.splice(i, 1);
				break;
			}
		}
	}
}