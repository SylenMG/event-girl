var prePenis = {
	type: "penis",
	size: 3,
	maxSize: 5
}
var preVagina = {
	type: "vagina",
	size: 0,
	maxSize: 5
}
var penis = {
	type: "penis",
	size: 3,
	maxSize: 5,
	pinupRange: ["tiny","tiny","small","medium","large","huge"],
	sizeText: ["small", "small", "below average", "slightly above average", "well hung", "gigantic veiny"],
	nouns: ["cock", "dick", "penis", "manhood", "prick", "pecker", "schlong", "shaft"],
	nounsSissy: ["clitty", "willy", "useless clit"],
	groups: ["humanoid", "demonic", "equine", "canine"]
}
var vagina = {
	type: "vagina",
	size: 0,
	maxSize: 5,
	sizeText: ["virgin", "tight", "well-used", "loose", "gaping", "destroyed"],
	nouns: ["pussy", "vagina", "twat", "cunt", "fuckhole", "slit", "fanny", "tushy", "cherry", "snatch", "muff"]
}
var balls = {
	type: "balls",
	size: 2,
	maxSize: 5,
	sizeText: ["tiny", "small", "medium-sized", "large", "huge", "massive"]
}
var tits = {
	type: "tits",
	size: 2,
	maxSize: 5,
	pinupRange: ["tiny","tiny","small","medium","large","huge"],
	sizeText: ["flat and manly","tiny","small","medium","large","huge"],
	nouns: ["tatas", "tits", "boobs", "teats", "breasts", "melons"]
}
var ass = {
	type: "ass",
	size: 2,
	maxSize: 4,
	pinupRange: ["tiny","small","medium","large","huge"],
	sizeText: ["flat", "small and firm", "nice and round", "heart-shaped", "huge and juicy"],
	nouns: ["ass", "butt", "booty", "bottom", "behind", "rump", "derrière", "posterior", "rear", "bum", "anus"]
}
var asshole = {
	type: "asshole",
	size: 0,
	maxSize: 4,
	sizeText: ["virgin", "tight", "well-used", "gaping", "destroyed"],
	nouns: ["asshole", "pucker", "bootyhole", "arsehole"]
}
var mouth = {
	type: "mouth",
	size: 0,
	maxSize: 1,
	sizeText: ["virgin", ""],
	nouns: ["mouth", "tongue"]
}
var globalBodyText = {
	bodyText: ["body is feminine with slender shoulders and wide hips.", "body is masculine with broad shoulders and thin hips."],
	nailsText: ["","nails are painted in light girly pink.","nails are painted in deep black.","nails are painted in bright feminine red."],
	hairstyleText: ["hair is scruffy and ","hair is set up in a ponytail and ","hair is neck-length, neatly kempt and ","hair is braided in a long fashionable ponytail and ", "hair is neatly set in two ponytails and "],
	skinText: ["skin is soft and "],
	skincolorText: ["pale in color.","fair in color.","tanned in color.","dark in color."],
	beautyText: ["face is average in terms of attractiveness, with ","face is quite attractive, with ","face is beautiful, with ","face is absolutely divine without the slightest hint of any flaws, with "],
	eyecolorText: ["blue eyes and ","brown eyes and ","amber eyes and ","grey eyes and ","green eyes and "],
	makeupText: ["", "wearing a light minimalistic makeup.", "wearing sultry makeup with an attention-grabbing allure.", "wearing heavy, overdone makeup that grabs attention and sends a seductive message."],
	lipsText: ["thin lips.","above average lips.","thick luscious lips.","cock-sucking lips."],
	titsSizeText: ["chest is manly and flat.",setup.pickNoun(tits) + " are tiny and fill an A-cup.",setup.pickNoun(tits) + " are rather small and fill a B-cup.",setup.pickNoun(tits) + 
	" are average and fill a C-cup.",setup.pickNoun(tits) + " are above average and fill a DD-cup.",setup.pickNoun(tits) + 
	" are big and fill an E-cup."],
	penisSizeText: ["",setup.pickNoun(penis) + " is pathetic in size, with two small balls.",setup.pickNoun(penis) + " is below average, with two regular-sized balls.",setup.pickNoun(penis) + 
	" is just about average, with two regular-sized balls.",setup.pickNoun(penis) + " is above average, with two regular-sized balls.",setup.pickNoun(penis) + " is fairly hung, with two huge balls."],
	vaginaSizeText: ["have a virgin " + setup.pickNoun(vagina) + " between your legs.","have a tight " + setup.pickNoun(vagina) + " between your legs.","have a used " + setup.pickNoun(vagina) + 
	" between your legs.","have a loose " + setup.pickNoun(vagina) + " between your legs.","have a gaping " + setup.pickNoun(vagina) + " between your legs.","have a completely destroyed " + 
	setup.pickNoun(vagina) + " between your legs."],
	assSizeText: [setup.pickNoun(ass) + " is flat, with a ",setup.pickNoun(ass) + " is small, with a ",setup.pickNoun(ass) + " is average, with a ",setup.pickNoun(ass) + 
	" is round, with a ",setup.pickNoun(ass) + " is heart-shaped, with a "],
	assholeSizeText: ["virgin " + setup.pickNoun(asshole) + ".","tight " + setup.pickNoun(asshole) + ".","used " + setup.pickNoun(asshole) + 
	".","loose " + setup.pickNoun(asshole) + ".","gaping " + setup.pickNoun(asshole) + "."]	
}
var presetMaleBody = {
	torso: {
		bodyType: 1,
		nails: 0,
		nailStamped: false,
	},
	hair: {
		style: 0,
		color: "black",
		styleName: "voss",
	},
	skin: {
		type: 0,
		color: 1,
	},
	face: {
		beauty: 0,
		maxBeauty: 3,
		makeup: 0,
		isStamped: false,
		isSmeared: false,
		eyecolor: 0,
		mouth: {type: "mouth",size: 0},
		lips: 0,
	},
	tits: {
		size: 0,
	},
	genitals: {
		current: [{
			type: "penis",
			size: 3,
			maxSize: 5}],
	},
	ass: {
		size: 0,
		asshole: 0
	}
}

///////////////////
/*Body Modification Here*/
///////////////////
setup.heal = function (entity) {
	//let hVagina = vagina;
	let vaginaSize = setup.getBodypartSize(entity, vagina);
	let assholeSize = setup.getBodypartSize(entity, asshole);
	if (vaginaSize > 1) {
		setup.decBod(entity, "vagina", 1);
		setup.logNote("Vagina", "Your " + setup.pickNoun(vagina) + " has healed a little.");
	} 
	if (assholeSize > 1) {
		setup.decBod(entity, "asshole", 1);
		setup.logNote("Asshole", "Your " + setup.pickNoun(asshole) + " has healed a little.");
	}
}

setup.modify = function (entity, modType) {
	console.log("Modify Entity(" + entity.name + "): " + modType + "...");
	let penisFound = false;
	let vaginaFound = false;
	switch(modType) {
		case "addPenis":
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "penis") {
				penisFound = true;
				console.log("Entity(" + entity.name + "): Already has a penis.");
				break;
			}
		}
		if (penisFound == false) {
			entity.body.genitals.current.push(prePenis);
			setup.setScore(entity, "penis-size", 2);
			console.log("Entity(" + entity.name + "): Added a penis.");
		}
		break;
		case "removePenis":
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "penis") {
				penisFound = true;
				entity.body.genitals.current.splice(i, 1);
				setup.setScore(entity, "penis-size", 0);
				console.log("Entity(" + entity.name + "): Removed penis.");
				break;
			}
		}
		if (penisFound == false) {
			console.log("Entity(" + entity.name + "): Has no penis.");
		}
		break;
		case "addVagina":
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "vagina") {
				vaginaFound = true;
				console.log("Entity(" + entity.name + "): Already has a vagina.");
				break;
			}
		}
		if (vaginaFound == false) {
			entity.body.genitals.current.push(preVagina);
			setup.setScore(entity, "vagina-size", 0);
			console.log("Entity(" + entity.name + "): Added a vagina.");
		}
		break;
		case "removeVagina":
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "vagina") {
				vaginaFound = true;
				entity.body.genitals.current.splice(i, 1);
				console.log("Entity(" + entity.name + "): Removed vagina.");
				break;
			}
		}
		if (vaginaFound == false) {
			console.log("Entity(" + entity.name + "): Has no vagina.");
		}
		break;
		default:
		console.log("Error: Tried to modify entity, but failed.");
	}
	setup.updateBodyparts(entity);
}
//Update bodyparts to avoid sizes not supported.
setup.updateBodyparts = function (entity) {
	console.log("Updating Bodyparts(" + entity.name + "): " + 
	"Tits(max: " + tits.maxSize + "): " + entity.body.tits.size + ", " + 
	"Ass(max: " + ass.maxSize + "): " + entity.body.ass.size + ", " + 
	"Asshole(max: " + ass.maxSize + "): " + entity.body.ass.asshole + ", " + 
	"Mouth(max: " + mouth.maxSize + "): " + entity.body.face.mouth.size + ", " + 
	"Beauty(max: " + entity.body.face.maxBeauty + "): " + entity.body.face.beauty + "...");
	if (entity.body.tits.size > tits.maxSize) {
		entity.body.tits.size = tits.maxSize;
	} else if (entity.body.ass.size > ass.maxSize) {
		entity.body.ass.size = ass.maxSize;
	} else if (entity.body.ass.asshole > asshole.maxSize) {
		entity.body.ass.asshole = asshole.maxSize;
	} else if (entity.body.face.beauty > entity.body.face.maxBeauty) {
		entity.body.face.beauty = entity.body.face.maxBeauty;
	} else if (entity.body.face.mouth.size > mouth.maxSize) {
		entity.body.face.mouth.size = mouth.maxSize;
	}
	let penisFound = false;
	let vaginaFound = false;
	let penisRemove = false;
	for (var i = 0; i < entity.body.genitals.current.length; i++) {
		if (entity.body.genitals.current[i].size > entity.body.genitals.current[i].maxSize) {
			entity.body.genitals.current[i].size = entity.body.genitals.current[i].maxSize;
		} else if (entity.body.genitals.current[i].size <= 0) {
			entity.body.genitals.current[i].size = 0;
			if (entity.body.genitals.current[i].type == "penis") {
				console.log("Entity(" + entity.name + "): Has no penis, setting for removal.");
				removePenis = true;;
			}
		}
		if (entity.body.genitals.current[i].type == "penis") {
			console.log("Entity(" + entity.name + "): Has a penis of size " + entity.body.genitals.current[i].size + ".");
			penisFound = true;
			if (entity.modifiers.includes("hasPenis")) {
				//Nothing.
			} else {
				console.log("Entity(" + entity.name + "): Added flag 'hasPenis.'");
				entity.modifiers.push("hasPenis");
			}
		}
		if (entity.body.genitals.current[i].type == "vagina") {
			console.log("Entity(" + entity.name + "): Has a vagina of size " + entity.body.genitals.current[i].size + ".");
			vaginaFound = true;
			if (entity.modifiers.includes("hasVagina")) {
				//Nothing.
			} else {
				console.log("Entity(" + entity.name + "): Added flag 'hasVagina.'");
				entity.modifiers.push("hasVagina");
			}
		}
	}
	if (vaginaFound == false) {
		if (entity.modifiers.includes("hasVagina")) {
			console.log("Entity(" + entity.name + "): Vagina not found, removing flag.");
			for (var i = 0; i < entity.modifiers.length; i++) {
				if (entity.modifiers[i] == "hasVagina") {
					console.log("Entity(" + entity.name + "): Flag \'" + entity.modifiers[i] + "\' removed.");
					entity.modifiers.splice(i, 1);
				}
			}
		}
	}
	if (penisFound == false) {
		if (entity.modifiers.includes("hasPenis")) {
			console.log("Entity(" + entity.name + "): Penis not found, removing flag.");
			for (var i = 0; i < entity.modifiers.length; i++) {
				if (entity.modifiers[i] == "hasPenis") {
					console.log("Entity(" + entity.name + "): Flag \'" + entity.modifiers[i] + "\' removed.");
					entity.modifiers.splice(i, 1);
				}
			}
		}
	}
	if (penisFound == true && vaginaFound == true) {
		entity.sex = "futanari";
	} else if (penisFound == false && vaginaFound == true) {
		entity.sex = "female";
	} else if (penisFound == true && vaginaFound == false) {
		entity.sex = "male";
	} else if (penisFound == false && vaginaFound == false) {
		entity.sex = "barbiedoll";
	}
	console.log("Updated Bodyparts(" + entity.name + "): " + 
	"Tits(max: " + tits.maxSize + "): " + entity.body.tits.size + ", " + 
	"Ass(max: " + ass.maxSize + "): " + entity.body.ass.size + ", " + 
	"Asshole(max: " + asshole.maxSize + "): " + entity.body.ass.asshole + ", " + 
	"Mouth(max: " + mouth.maxSize + "): " + entity.body.face.mouth.size + ", " + 
	"Beauty(max: " + entity.body.face.maxBeauty + "): " + entity.body.face.beauty + ".");
	if (penisRemove == true) {
		console.log("Removing penis from " + entity.name + "...");
		setup.modify(entity, "removePenis");
	}
}
//Increase bodypart size
setup.incBod = function (entity, type, amount) {
	console.log("Increasing bodypart(" + type + ") for " + entity.name + " by " + amount + ".");
	if (type == "tits") {
		if (entity.body.tits.size < tits.maxSize) {
			entity.body.tits.size += amount;
			setup.incScore(entity, "tits-size", amount);
		} else {
			console.log("FAILED: Max size reached.");
		}
	} else if (type == "ass") {
		if (entity.body.ass.size < ass.maxSize) {
			entity.body.ass.size += amount;
			setup.incScore(entity, "ass-size", amount);
		} else {
			console.log("FAILED: Max size reached.");
		}
	} else if (type == "beauty") {
		if (entity.body.face.beauty < entity.body.face.maxBeauty) {
			entity.body.face.beauty += amount;
			setup.incScore(entity, "beauty", amount);
		} else {
			console.log("FAILED: Max size reached.");
		}
	} else if (type == "mouth") {
		if (entity.body.face.mouth.size < mouth.maxSize) {
			entity.body.face.mouth.size += amount;
			setup.incScore(entity, "mouth", amount);
		} else {
			console.log("FAILED: Max size reached.");
		}
	} else if (type == "asshole") {
		if (entity.body.ass.asshole < asshole.maxSize) {
			entity.body.ass.asshole += amount;
			setup.incScore(entity, "asshole-size", amount);
		} else {
			console.log("FAILED: Max size reached.");
		}
	} else if (type == "penis") {
		let penisFound = false;
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "penis") {
				penisFound = true;
				if (entity.body.genitals.current[i].size < entity.body.genitals.current[i].maxSize) {
					entity.body.genitals.current[i].size += amount;
					setup.setScore(entity, "penis-size", entity.body.genitals.current[i].size);
				} else {
					console.log("FAILED: Max size reached.");
				}
			}
		}
		if (penisFound == false) {
			setup.modify(entity, "addPenis");
		}
	} else if (type == "vagina") {
		let vaginaFound = false;
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "vagina") {
				vaginaFound = true;
				if (entity.body.genitals.current[i].size < entity.body.genitals.current[i].maxSize) {
					entity.body.genitals.current[i].size += amount;
					setup.setScore(entity, "vagina-size", entity.body.genitals.current[i].size);
				} else {
					console.log("FAILED: Max size reached.");
				}
			}
		}
		if (vaginaFound == false) {
			setup.modify(entity, "addVagina");
		}
	}
	setup.updateBodyparts(entity);
}
//Decrease bodypart size
setup.decBod = function (entity, type, amount) {
	console.log("Decreasing bodypart(" + type + ") for " + entity.name + " by " + amount + ".");
	if (type == "tits") {
		if (entity.body.tits.size > 0) {
			entity.body.tits.size -= amount;
			setup.decScore(entity, "tits-size", amount);
		} else {
			console.log("FAILED: Minimum size reached.");
		}
	} else if (type == "ass") {
		if (entity.body.ass.size > 0) {
			entity.body.ass.size -= amount;
			setup.decScore(entity, "ass-size", amount);
		} else {
			console.log("FAILED: Minimum size reached.");
		}
	} else if (type == "beauty") {
		if (entity.body.face.beauty > 0) {
			entity.body.face.beauty -= amount;
			setup.decScore(entity, "beauty", amount);
		} else {
			console.log("FAILED: Minimum size reached.");
		}
	} else if (type == "beauty") {
		if (entity.body.face.mouth.size > 0) {
			entity.body.face.mouth.size -= amount;
			setup.decScore(entity, "mouth", amount);
		} else {
			console.log("FAILED: Minimum size reached.");
		}
	} else if (type == "asshole") {
		if (entity.body.ass.asshole > 0) {
			entity.body.ass.asshole -= amount;
			setup.decScore(entity, "asshole-size", amount);
		} else {
			console.log("FAILED: Minimum size reached.");
		}
	} else if (type == "penis") {
		let penisFound = false;
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "penis") {
				penisFound = true;
				if (entity.body.genitals.current[i].size > 0) {
					entity.body.genitals.current[i].size -= amount;
					setup.setScore(entity, "penis-size", entity.body.genitals.current[i].size);
				} else {
					console.log("FAILED: Max size reached.");
				}
			}
		}
		if (penisFound == false) {
			setup.modify(entity, "addPenis");
		}
	} else if (type == "vagina") {
		let vaginaFound = false;
		for (var i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "vagina") {
				vaginaFound = true;
				if (entity.body.genitals.current[i].size > 0) {
					entity.body.genitals.current[i].size -= amount;
					setup.setScore(entity, "vagina-size", entity.body.genitals.current[i].size);
				} else {
					console.log("FAILED: Max size reached.");
				}
			}
		}
		if (vaginaFound == false) {
			setup.modify(entity, "addVagina");
		}
	}
	setup.updateBodyparts(entity);
}
setup.character = function (entity) {
	let returnName = "You are " + entity.name + ".";
	let returnUnits = entity.units;
	let returnDebt = entity.debt;
	let returnRating = entity.eRating;
	let returnCharacter = returnName + "<br><br>Units: " + returnUnits + "<br>Debt: " + returnDebt + "<br>E-Rating: " + returnRating;
	return returnCharacter;
}
setup.genderbend = function (entity, sex) {
	switch(sex) {
		case "male":
		entity.sex = "male";
		entity.gender = "male";
		entity.body.torso.bodyType = 1;
		setup.modify(entity, "addPenis");
		setup.modify(entity, "removeVagina");
		break;
		case "female":
		entity.sex = "female";
		entity.gender = "female";
		entity.body.torso.bodyType = 0;
		entity.body.hair.style = 2;
		setup.modify(entity, "removePenis");
		setup.modify(entity, "addVagina");
		break;
		case "futanari":
		entity.sex = "female";
		entity.gender = "female";
		entity.body.torso.bodyType = 0;
		setup.modify(entity, "addPenis");
		setup.modify(entity, "addVagina");
		break;
		case "barbiedoll":
		entity.sex = "female";
		entity.gender = "female";
		entity.body.torso.bodyType = 0;
		setup.modify(entity, "removePenis");
		setup.modify(entity, "removeVagina");
		break;
		default:
		console.log("Error: Tried to genderbend, but failed.");
	}
}

setup.debugPinup = function (player) {
	let playerSex = "Sex: " + player.sex + "<br><br>";
	let playerBodyMod = "Body -  (<<link 'Male'>><<= setup.genderbend($player, 'male')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Female'>><<= setup.genderbend($player, 'female')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Futanari'>><<= setup.genderbend($player, 'futanari')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Barbiedoll'>><<= setup.genderbend($player, 'barbiedoll')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + ")<br><br>";
	let playerTitsMod = "Tits(" + tits.sizeText[player.body.tits.size] + ") - (<<link 'Increase'>><<= setup.incBod($player, 'tits', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Decrease'>><<= setup.decBod($player, 'tits', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>)<br>";
	let playerAssMod = "Ass(" + ass.sizeText[player.body.ass.size] + ") - (<<link 'Increase'>><<= setup.incBod($player, 'ass', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Decrease'>><<= setup.decBod($player, 'ass', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>)<br>";
	let playerPenisMod = "Penis (<<if $player.modifiers.includes('hasPenis')>>True<<else>>False<</if>>) - (<<link 'Add'>><<= setup.modify($player, 'addPenis')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/<<link 'Remove'>><<= setup.modify($player, 'removePenis')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>)<br>";
	let playerPenisSizeMod = "Penis Size (<<= setup.examineGenital($player, 'penis')>>) - (<<link 'Increase'>><<= setup.incBod($player, 'penis', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Decrease'>><<= setup.decBod($player, 'penis', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>)<br>";
	let playerVaginaMod = "Vagina (<<if $player.modifiers.includes('hasVagina')>>True<<else>>False<</if>>) - (<<link 'Add'>><<= setup.modify($player, 'addVagina')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/<<link 'Remove'>><<= setup.modify($player, 'removeVagina')>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>)<br>";
	let playerVaginaSizeMod = "Vagina Size (<<= setup.examineGenital($player, 'vagina')>>) - (<<link 'Increase'>><<= setup.incBod($player, 'vagina', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>/" + 
	"<<link 'Decrease'>><<= setup.decBod($player, 'vagina', 1)>><<replace '#debugPinup'>><<= setup.debugPinup($player)>><</replace>><</link>>)<br>";
	let debugPinup = playerSex + playerBodyMod + playerTitsMod + playerAssMod + playerPenisMod + playerPenisSizeMod + playerVaginaMod + playerVaginaSizeMod;
	return "<span id='debugPinup'><<replace '#story-caption'>><<display 'StoryCaption'>><</replace>>" + debugPinup + "</span>";
}

setup.bodyNote = function (entity, part) {
	if (part == "vagina") {
		let size = setup.getBodypartSize(entity, vagina);
		setup.logNote("Health Update", "You now " + globalBodyText.vaginaSizeText[size]);
	} else if (part == "asshole") {
		let size = setup.getBodypartSize(entity, asshole);
		setup.logNote("Health Update", "You now have a " + globalBodyText.assholeSizeText[size]);
	}
}

//setup.getBodypartSize($player, "asshole");
setup.getBodypartSize = function (entity, bodypart) {
	let bodypartSize = -1;
	if (entity.modifiers.includes("essential")) {
		switch(bodypart.type) {
			case "mouth":
				bodypartSize = entity.body.face.mouth.size;
				break;
			case "penis":
				let penisFound = false;
				for (var i = 0; i < entity.body.genitals.current.length; i++) {
					if (entity.body.genitals.current[i].type == "penis") {
						penisFound = true;
						bodypartSize = entity.body.genitals.current[i].size;
					}
				}
				if (penisFound == false) {
					bodypartSize = 1;
					console.log("Notice(" + entity.name + "): Penis not found when trying to get size, returning 1.");
				}
				break;
			case "vagina":
				let vaginaFound = false;
				for (var i = 0; i < entity.body.genitals.current.length; i++) {
					if (entity.body.genitals.current[i].type == "vagina") {
						vaginaFound = true;
						bodypartSize = entity.body.genitals.current[i].size;
					}
				}
				if (vaginaFound == false) {
					bodypartSize = 1;
					console.log("Notice(" + entity.name + "): Vagina not found when trying to get size, returning 1.");
				}
				break;
			case "tits":
				bodypartSize = entity.body.tits.size;
				break;
			case "asshole":
				bodypartSize = entity.body.ass.asshole;
				break;
			default:
				bodypartSize = entity.body.ass.size;
				break;
		}
	} else {
		switch(bodypart.type) {
			case "mouth":
				bodypartSize = 1;
				break;
			case "penis":
				bodypartSize = entity.bodyRef.penis;
				break;
			case "vagina":
				bodypartSize = entity.bodyRef.vagina;
				break;
			case "tits":
				bodypartSize = entity.bodyRef.tits;
				break;
			case "asshole":
				bodypartSize = entity.bodyRef.asshole;
				break;
			default:
				bodypartSize = entity.bodyRef.ass;
				break;
		}
	}
	if (bodypartSize == -1) {
		bodypartSize = 0;
		console.log("Error: No bodypart found, returning 0.");
	}
	return bodypartSize;
}





