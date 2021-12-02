//Event Girl Globals
//v0.02
//Requires: therapy.js -loaded after
//by Sylen

setup.displayTime = function (time) {
	//let time = SugarCube.State.variables.time;
	if (time.currentDay < 0) {
		time.currentDay = 0;
	} else if (time.currentDay > 6) {
		time.currentDay = 0;
	}
	if (time.currentDayTime < 0) {
		time.currentDayTime = 0;
	} else if (time.currentDayTime > 3) {
		time.currentDayTime = 0;
		time.currentDay += 1;
	}
	let returnTime = "@@.boldtext;" + time.days[time.currentDay] + "@@<br>" + time.dayTime[time.currentDayTime] + "";
	return returnTime;
}
setup.setDayTime = function (value) {
	SugarCube.State.variables.time.currentDayTime = value;
}
setup.passTime = function () {
	SugarCube.State.variables.time.currentDayTime += 1;
}
setup.passDay = function () {
	SugarCube.State.variables.time.currentDayTime = 4;
}

//Requirements Checker
setup.checkPsyche = function (requirements, req, player) {
	//console.log("Psyche Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	//console.log("Checking player...");
	let foundCheck = false;
	let returnCheck = false;
	for (let i = 0; i < player.psyche.length; i++) {
		if (requirements[req].id == player.psyche[i].name) {
			//console.log("Found.");
			foundCheck = true;
			if (requirements[req].type == "psyche-max") {
				if (requirements[req].level >= player.psyche[i].level) {
					returnCheck = true;
				}
			} else if (requirements[req].type == "psyche-min") {
				if (requirements[req].level <= player.psyche[i].level) {
					returnCheck = true;
				}
			} else if (requirements[req].type == "prog-check") {
				if (requirements[req].level == player.psyche[i].level && player.psyche[i].progression >= 100) {
					returnCheck = true;
				}
			}
			break;
		}
	}
	if (foundCheck == false && requirements[req].type == "psyche-min") {
		//console.log("Requirement not found for min check, failing...");
		returnCheck = false;
	} else if (foundCheck == false && requirements[req].type == "psyche-max") {
		//console.log("Requirement not found for max check, bypassing...");
		returnCheck = true;
	} else if (foundCheck == false && requirements[req].type == "prog-check") {
		//console.log("Requirement not found for max check, bypassing...");
		returnCheck = false;
	}
	//console.log("Requirement Result: " + returnCheck);
	return returnCheck;
}
setup.checkSkills = function (requirements, req, player) {
	//console.log("Skill Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	//console.log("Checking player...");
	let foundCheck = false;
	let returnCheck = false;
	for (let i = 0; i < player.skills.length; i++) {
		if (requirements[req].id == player.skills[i].name) {
			//console.log("Found.");
			foundCheck = true;
			if (requirements[req].type == "skill-max") {
				if (requirements[req].level >= player.skills[i].level) {
					returnCheck = true;
				}
			} else {
				if (requirements[req].level <= player.skills[i].level) {
					returnCheck = true;
				}
			}
			break;
		}
	}
	if (foundCheck == false && requirements[req].type == "skill-min") {
		//console.log("Requirement not found for min check, failing...");
		returnCheck = false;
	} else if (foundCheck == false && requirements[req].type == "skill-max") {
		//console.log("Requirement not found for max check, bypassing...");
		returnCheck = true;
	}
	return returnCheck;
}
setup.checkScores = function (requirements, req, player) {
	//console.log("Scores Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	//console.log("Checking player...");
	let foundCheck = false;
	let returnCheck = false;
	for (let i = 0; i < player.scores.length; i++) {
		if (requirements[req].id == player.scores[i].name) {
			//console.log("Found(" + player.scores[i].name + "):" + player.scores[i].score);
			foundCheck = true;
			if (requirements[req].type == "score-max") {
				if (requirements[req].level >= player.scores[i].score) {
					returnCheck = true;
				}
				break;
			} else {
				if (requirements[req].level <= player.scores[i].score) {
					returnCheck = true;
				}
				break;
			}
		}
	}
	if (foundCheck == false && requirements[req].type == "score-min") {
		//console.log("Requirement not found for min check, failing...");
		returnCheck = false;
	} else if (foundCheck == false && requirements[req].type == "score-max") {
		//console.log("Requirement not found for max check, bypassing...");
		returnCheck = true;
	}
	//console.log("Requirement Result: " + returnCheck);
	return returnCheck;
}
setup.checkStats = function (requirements, req, player) {
	//console.log("Statistics Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	//console.log("Checking player...");
	//console.log("Stat Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	//console.log("Stat Requirement Found... checking player...");
	let foundCheck = false;
	let returnCheck = false;
	for (let i = 0; i < player.statistics.length; i++) {
		if (requirements[req].id == player.statistics[i].name) {
			console.log("Found.");
			foundCheck = true;
			if (requirements[req].type == "stat-max") {
				if (requirements[req].level >= player.statistics[i].count) {
					returnCheck = true;
				}
			} else {
				if (requirements[req].level <= player.statistics[i].count) {
					returnCheck = true;
				}
			}
			break;
		}
	}
	if (foundCheck == false && requirements[req].type == "stat-min") {
		//console.log("Requirement not found for min check, failing...");
		returnCheck = false;
	} else if (foundCheck == false && requirements[req].type == "stat-max") {
		//console.log("Requirement not found for max check, bypassing...");
		returnCheck = true;
	}
	return returnCheck;
}
setup.checkStory = function (requirements, req, player) {
	//console.log("Story Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	//console.log("Checking player...");
	let completedLog = SugarCube.State.variables.story.cEntries;
	let activeLog = SugarCube.State.variables.story.nEntries;
	let failedLog = SugarCube.State.variables.story.fEntries;
	console.log("Story Requirement Found (" + requirements[req].id + "): Level(" + requirements[req].level + "): Type(" + requirements[req].type + ").");
	console.log("Story Requirement Found...");
	let returnCheck = false;
	

	if (requirements[req].type == "story-completed") {
		if (completedLog.includes(requirements[req].id)) {
			returnCheck = true;
		} else {
			returnCheck = false;
		}
	} else if (requirements[req].type == "story-incomplete") {
		if (completedLog.includes(requirements[req].id)) {
			returnCheck = false;
		} else {
			returnCheck = true;
		}
	} else if (requirements[req].type == "story-failed") {
		if (failedLog.includes(requirements[req].id)) {
			returnCheck = true;
		} else {
			returnCheck = false;
		}
	} else if (requirements[req].type == "story-active") {
		if (activeLog.includes(requirements[req].id)) {
			returnCheck = true;
		} else {
			returnCheck = false;
		}
	} else if (requirements[req].type == "story-inactive") {
		if (activeLog.includes(requirements[req].id)) {
			returnCheck = false;
		} else {
			returnCheck = true;
		}
	} else if (requirements[req].type == "story-type") {
		if (player.modifiers.includes("Unlucky") && requirements[req].id == "Story-Unlucky") {
			returnCheck = true;
		} else {
			returnCheck = false;
		}
	} else {
		////story-active
		if (activeLog.includes(requirements[req].id)) {
			returnCheck = true;
		} else {
			returnCheck = false;
		}
	}
	console.log("Check: " + returnCheck);
	return returnCheck;
}
setup.checkClothes = function (requirements, req, player) {
	let owned = SugarCube.State.variables.clothes.owned;
	//console.log("Clothing Requirement Found id(" + requirements[req].id + "), Type(" + requirements[req].type + ").");
	let returnCheck = false;
	if (requirements[req].type == "owned"){
		if (owned.includes(requirements[req].id)) {
			returnCheck = true;
		} else {
			returnCheck = false;
		}
	}
	if (requirements.length == 0) {
		//console.log("No requirements found: Passing.");
		returnCheck = true;
	}
	//console.log("Pass: " + returnCheck);
	return returnCheck;
}
setup.checkCyberware = function (requirements, req, player) {
	let foundCheck = false;
	let returnCheck = false;
	console.log("Cyber Requirement Found id(" + requirements[req].id + "), Type(" + requirements[req].type + ").");
	console.log(player.name)
	for (let i = 0; i < player.cybermods.length; i++) {
		if (requirements[req].id == player.cybermods[i].name) {
			console.log("Found.");
			foundCheck = true;
			if (requirements[req].type == "has-cybermod") {
				returnCheck = true;
			}
			break;
		}
	}
	if (foundCheck == false && requirements[req].type == "no-cybermod") {
		returnCheck = true;
	}
	return returnCheck;
}
setup.checkTime = function (requirements, req, player) {
	let timeCheck = false;
	let cDay = SugarCube.State.variables.time.currentDay;
	let cTime = SugarCube.State.variables.time.currentDayTime;
	console.log("Time Requirement Found id(" + requirements[req].id + "), Type(" + requirements[req].type + ").");
	switch(requirements[req].type) {
		case "day":
			if (requirements[req].level == cDay) {
				timeCheck = true;
			}
			break;
		case "not-day":
			if (requirements[req].level != cDay) {
				timeCheck = true;
			}
			break;
		case "time":
			if (requirements[req].level == cTime) {
				timeCheck = true;
			}
			break;
		case "not-time":
			if (requirements[req].level != cTime) {
				timeCheck = true;
			}
			break;
		default:
			timeCheck = false;
			break;
	}
	console.log("Pass(timeCheck): " + timeCheck);
	return timeCheck;
}
setup.checkReq = function (requirements, player) {
	let returnCheck = true;
	//Max: Maximum amount for check to go through.
	//Min: Minimum amount for check to go through.
	//console.log("Checking requirements(" + player.name + ")...");
	for (let req = 0; req < requirements.length; req++) {
		if (returnCheck == false) {
			break;
		}
		if (requirements[req].type == "psyche-max" || requirements[req].type == "psyche-min" || requirements[req].type == "prog-check") {
			returnCheck = setup.checkPsyche(requirements, req, player);
		} else if (requirements[req].type == "skill-max" || requirements[req].type == "skill-min") {
			returnCheck = setup.checkSkills(requirements, req, player);
		} else if (requirements[req].type == "score-max" || requirements[req].type == "score-min") {
			//console.log("Doing scorecheck...");
			returnCheck = setup.checkScores(requirements, req, player);
			//console.log("Scorecheck: " + returnCheck);
		} else if (requirements[req].type == "stat-max" || requirements[req].type == "stat-min") {
			returnCheck = setup.checkStats(requirements, req, player);
		} else if (requirements[req].type == "owned") {
			returnCheck = setup.checkClothes(requirements, req, player);
		} else if (requirements[req].type == "story-completed" || requirements[req].type == "story-active" || requirements[req].type == "story-incomplete" || requirements[req].type == "story-type") {
			returnCheck = setup.checkStory(requirements, req, player);
		} else if (requirements[req].id == "Time") {
			returnCheck = setup.checkTime(requirements, req, player);
		} else if (requirements[req].type == "has-cybermod" || requirements[req].type == "no-cybermod") {
			console.log("Doing cybercheck...");
			returnCheck = setup.checkCyberware(requirements, req, player);
		}
	}
	if (requirements.length == 0) {
		//console.log("No requirements found: Passing.");
		returnCheck = true;
	}
	//console.log("Pass: " + returnCheck);
	return returnCheck;
}


