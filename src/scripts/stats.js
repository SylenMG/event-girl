//DO THIS
setup.printScores = function (entity) {
	console.log("Player Scores:");
	for (var i = 0; i < entity.scores.length; i++) {
		console.log(entity.scores[i].name + ": " + entity.scores[i].score);
	}
}

setup.getScore = function (entity, scoreType) {
	console.log("Score(" + scoreType + "): " + entity.name);
	if (scoreType == "handjob") {
		
	} else {
		console.log("ERROR: Score does not exist.");
	}
}

setup.getSkill = function (entity, skillName) {
	let returnSkill = 0;
	let skillFound = false;
	for (var i = 0; i < entity.skills.length; i++) {
		if (entity.skills[i].name == skillName) {
			skillFound = true;
			returnSkill = entity.skills[i].level;
		}
	}
	if (skillFound == false) {
		return 0;
	} else {
		return returnSkill;
	}
}
setup.getPsyche = function (entity, psycheName) {
	let returnPsyche = 0;
	let psycheFound = false;
	for (var i = 0; i < entity.psyche.length; i++) {
		if (entity.psyche[i].name == psycheName) {
			psycheFound = true;
			returnPsyche = entity.psyche[i].level;
			break;
		}
	}
	if (psycheFound == false) {
		return 0;
	} else {
		return returnPsyche;
	}
}

setup.psycheCheck = function (entity) {
	let bimboPsyche = 0;
	let slutPsyche = 0;
	let femininePsyche = 0;
	for (let i = 0; i < entity.psyche.length; i++) {
		if (entity.psyche[i].name == "Bimbo") {
			bimboPsyche = entity.psyche[i].level;
		} else if (entity.psyche[i].name == "Slut") {
			slutPsyche = entity.psyche[i].level;
		} else if (entity.psyche[i].name == "Feminine") {
			femininePsyche = entity.psyche[i].level;
		}
	}
	if (slutPsyche < bimboPsyche) {
		setup.psycheHard(entity, "Slut", bimboPsyche);
	}
	if (femininePsyche < bimboPsyche || femininePsyche < slutPsyche) {
		setup.psycheHard(entity, "Feminine", slutPsyche);
	}
}

//Example: <<= setup.experience($player, "Social", 5, 5, 1)>>
setup.experience = function (entity, skillName, value, random, max, nobreak) {
	let skillFound = false;
	let returnExperience = "";
	let randomValue = 0;
	let incText = "increased";
	if (random != undefined) {
		randomValue = setup.random(random);
	}
	if (max == undefined) {
		var maxValue = 5;
	} else if (max > 5) {
		var maxValue = 5;
	} else {
		var maxValue = max;
	}
	if (value < 0) {
		incText = "decreased";
	}
	for (var i = 0; i < entity.skills.length; i++) {
		if (entity.skills[i].progression < 0) {
			entity.skills[i].progression = 0;
		} else if (entity.skills[i].progression > 100) {
			entity.skills[i].progression = 100;
		}
		if (entity.skills[i].name == skillName) {
			skillFound = true;
			if (maxValue > entity.skills[i].level) {
				let incValue = value + randomValue;
				entity.skills[i].progression += incValue;
				console.log("Increased: " + entity.name + ", " + skillName + " by " + incValue + ".");
				if (entity.skills[i].progression >= 100) {		
					if (entity.skills[i].level < 4) {
						entity.skills[i].progression = 0;
						entity.skills[i].level += 1;
						returnExperience = "Your " + skillName + " has increased to level " + entity.skills[i].level + "!";
						console.log("Level Increase: " + skillName + " on " + entity.name + ".");
					} else {
						returnExperience = "Your " + skillName + " is already at max level!";
						console.log("Max Level (tried to increase, but failed): " + skillName + " on " + entity.name + ".");
					}
				} else {
					returnExperience = "Your " + skillName + " experience has " + incText + " by " + incValue + ", (" + entity.skills[i].progression + ")!";
				}
				break;
			} else {
				returnExperience = "Your " + skillName + " experience will no longer increase from this activity.";
			}
		} 
	}
	if (skillFound == false) {
		let learnedValue = value + randomValue;
		let learnedSkill = {name: skillName,shown: true,progression: learnedValue,level: 0};
		returnExperience = "You´ve discovered the " + skillName + " skill! (" + learnedValue + ")";
		console.log("Added: " + skillName + " to " + entity.name + ".");
		entity.skills.pushUnique(learnedSkill);
	}
	setup.logNote(skillName, returnExperience);
}
//Example: <<= setup.psyche($player, "Lust", 5, 5, 1)>>
setup.psyche = function (entity, psycheName, value, random, max) {
	let psycheFound = false;
	let returnPsyche = "";
	let randomValue = 0;
	let incText = "increased";
	if (random != undefined) {
		randomValue = setup.random(random);
	}
	if (max == undefined) {
		var maxValue = 5;
	} else if (max > 5) {
		var maxValue = 5;
	} else {
		var maxValue = max;
	}
	if (value < 0) {
		incText = "decreased";
	}
	for (let i = 0; i < entity.psyche.length; i++) {
		if (entity.psyche[i].progression < 0) {
			entity.psyche[i].progression = 0;
		} else if (entity.psyche[i].progression > 100) {
			entity.psyche[i].progression = 100;
		}
		if (entity.psyche[i].name == psycheName) {
			psycheFound = true;
			if (maxValue > entity.psyche[i].level) {
				let incValue = value + randomValue;
				entity.psyche[i].progression += incValue;
				console.log("Increased: " + entity.name + ", " + psycheName + " by " + incValue + ".");
				if (entity.psyche[i].progression >= 100) {
					if (psycheName != "Feminine" && psycheName != "Slut" && psycheName != "Bimbo") {		
						if (entity.psyche[i].level < 4) {
							entity.psyche[i].progression = 0;
							entity.psyche[i].level += 1;
							returnPsyche = "Your " + psycheName + " psyche has increased to level " + entity.psyche[i].level + "!";
							console.log("Level Increase: " + psycheName + " on " + entity.name + ".");
						} else {
							returnPsyche = "Your " + psycheName + " psyche is already at max level!";
							console.log("Max Level (tried to increase, but failed): " + psycheName + " on " + entity.name + ".");
						}
					} else {
						returnPsyche = "You need to reflect to increase your " + psycheName + " psyche further!";
						console.log("Max Level (tried to increase, but failed): " + psycheName + " on " + entity.name + ".");
					}
				} else {
					returnPsyche = "Your " + psycheName + " psyche has " + incText + " by " + incValue + ", (" + entity.psyche[i].progression + ")!";
				}
				break;
			} else {
				returnPsyche = "Your " + psycheName + " psyche will no longer increase from this activity.";
			}
		} 
	}
	if (psycheFound == false) {
		let learnedValue = value + randomValue;
		let learnedPsyche = {name: psycheName,shown: true,progression: learnedValue,level: 0};
		returnPsyche = "You\´ve discovered the " + psycheName + " psyche! (" + learnedValue + ")";
		console.log("Added: " + psycheName + " to " + entity.name + ".");
		entity.psyche.pushUnique(learnedPsyche);
	}
	//setup.psycheCheck(entity);
	setup.logNote(psycheName, returnPsyche);
}

//Hard Set
setup.psycheHard = function (entity, hardName, value) {
	//console.log("Hard Change: " + hardName + ".");
	let psycheFound = false;
	let hardPsyche = null;
	for (var i = 0; i < entity.psyche.length; i++) {
		if (entity.psyche[i].name == hardName) {
			psycheFound = true;
			entity.psyche[i].level = value;
			entity.psyche[i].progression = 0;
			if (hardName == "Feminine") {
				hardPsyche = "Your " + hardName + " psyche has changed to " + psycheFeminine[entity.psyche[i].level] + ".";
			} else if (hardName == "Slut") {
				hardPsyche = "Your " + hardName + " psyche has changed to " + psycheSlut[entity.psyche[i].level] + ".";
			} else if (hardName == "Bimbo") {
				hardPsyche = "Your " + hardName + " psyche has changed to " + psycheBimbo[entity.psyche[i].level] + ".";
			} else if (hardName == "Mind") {
				hardPsyche = "Your " + hardName + " psyche has changed to " + psycheMind[entity.psyche[i].level] + ".";
			} else if (hardName == "Lust") {
				hardPsyche = "Your " + hardName + " psyche has changed to " + n_psycheLust[entity.psyche[i].level] + ".";
			} else {
				hardPsyche = "Your " + hardName + " psyche has changed to " + value + ".";
			}
			break;
		} 
	}
	if (psycheFound == false) {
		let learnedValue = value;
		let learnedPsyche = {name: hardName,shown: true,progression: 0,level: learnedValue};
		hardPsyche = "You\´ve discovered the " + hardName + " psyche! (" + learnedValue + ")";
		entity.psyche.pushUnique(learnedPsyche);
	}
	setup.logNote(hardName, hardPsyche);
}
setup.satisfy = function (entity) {
	setup.psycheHard(entity, "Lust", 0);
}

setup.showExperience = function (entity) {
	let returnSkill = "";
	for (var i = 0; i < entity.skills.length; i++) {
		if (entity.skills[i].level < 4) {
			returnSkill = returnSkill + "@@.boldtext;" + entity.skills[i].name + "@@: @@.lbtext;" + skillLevel[entity.skills[i].level] + "@@ - (" + entity.skills[i].progression + "/100) until next level increase.<br>";
		} else {
			returnSkill = returnSkill + "@@.boldtext;" + entity.skills[i].name + "@@: @@.lbtext;" + skillLevel[entity.skills[i].level] + "@@ - (" + entity.skills[i].progression + "/100).<br>";
		}
	}
	return returnSkill;
}

setup.showPsyche = function (entity) {
	let returnPsyche = "";
	for (var i = 0; i < entity.psyche.length; i++) {
		if (entity.psyche[i].name == "Feminine") {
			if (entity.psyche[i].level < 4) {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheFeminine[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100) until next level increase.<br>";
			} else {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheFeminine[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100).<br>";
			}
		} else if (entity.psyche[i].name == "Slut") {
			if (entity.psyche[i].level < 4) {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheSlut[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100) until next level increase.<br>";
			} else {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheSlut[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100).<br>";
			}
		} else if (entity.psyche[i].name == "Bimbo") {
			if (entity.psyche[i].level < 4) {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheBimbo[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100) until more <<CandyFloss>><br>";
			} else {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheBimbo[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100).<br>";
			}
		} else if (entity.psyche[i].name == "Lust") {
			if (entity.psyche[i].level < 4) {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: " + psycheLust[entity.psyche[i].level] + " - (" + entity.psyche[i].progression + "/100) until increase in desire.<br>";
			} else {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: " + psycheLust[entity.psyche[i].level] + " - (" + entity.psyche[i].progression + "/100).<br>";
			}
		} else {
			if (entity.psyche[i].level < 4) {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheMind[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100) until next level increase.<br>";
			} else {
				returnPsyche = returnPsyche + "@@.boldtext;" + entity.psyche[i].name + "@@: @@.lbtext;" + psycheMind[entity.psyche[i].level] + "@@ - (" + entity.psyche[i].progression + "/100).<br>";
			}
		}
	}
	return returnPsyche;
}