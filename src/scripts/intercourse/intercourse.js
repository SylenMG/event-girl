//Intercourse System
//v0.01
//Requires: intercourse-scenes.js -loaded before
//by Sylen

//Given means entity was active partner, if blowjob/cunnilingus means entity was the one sucking. If vaginal/anal means entity was the one fucking vagina/ass.
//Received means entity was passive partner. If vagina/ass means entities vagina/ass orifice was the one being penetrated

setup.newSex = function (sex) {
	let returnSex = "";
	let perspective = setup.checkPerspective(sex);
	switch(perspective) {
		case "blowjob-giving":
		
		break;
		case "blowjob-receiving":

		break;
		default:
		
		break;
	}
	let sObject = {
		scenes: [
			{
			name: ["Suck <<= setup.hisher($sex.rE)>> cock.","Take <<= setup.hisher($sex.rE)>> shaft inside your mouth.","Use your lips on <<= setup.hisher($sex.rE)>> cock."],
			passage: "<<include 'Blowjob - Giving - Suck'>>"
			},
			{
			name: ["Lick the tip of <<= setup.hisher($sex.rE)>> cock."],
			passage: "<<include 'Blowjob - Giving - Lick'>>"
			}
		],
		climax: [
			{
			name: ["Swallow."],
			passage: "<<include 'Blowjob - Giving - Swallow'>>"
			},
			{
			name: ["Facial."],
			passage: "<<include 'Blowjob - Giving - Facial'>>"
			}
		]
	};
	if (count < 2) {
		for (let i = 0; i < sObject.scenes.length; i++) {
			returnSex = returnSex + "<span class='lbb'><<button '" + sObject.scenes[i].name + "'>><<set $sex.count += 1>><<replace '#scene-" + count + "'>>" + sObject.scenes[i].passage + "<br><br><<= setup.newSex($sex.count)>><</replace>><</button>></span>";
		}
	} else {
		for (let i = 0; i < sObject.scenes.length; i++) {
			returnSex = returnSex + "<span class='lbb'><<button '" + sObject.climax[i].name + "'>><<set $sex.count += 1>><<replace '#scene-" + count + "'>>" + sObject.climax[i].passage + "<br><br><</replace>><</button>></span>";
		}
	}
	return "<span id='scene-" + count + "'>" + returnSex + "</span>";
}

setup.countSexStat = function (givingEntity, receivingEntity, givenCount, receivedCount, givenAmount, receivedAmount) {
	if (givenAmount == undefined) {
		givenAmount = 1;
	}
	if (receivedAmount == undefined) {
		receivedAmount = 1;
	}
	if (givingEntity.modifiers.includes("player") && givenCount != "none") {
		//console.log("Count(" + givingEntity.name + "): Increasing " + givenCount + " by +1.");
		for (let n = 0; n < givingEntity.statistics.length; n++) {
			if (givenCount == givingEntity.statistics[n].name) {
				SugarCube.State.variables.player.statistics[n].count += givenAmount;
				//console.log("Increased Count(" + givenCount + "), by " + givenAmount + ".");
				break;
			}
		}
	}
	if (receivingEntity.modifiers.includes("player") && receivedCount != "none") {
		//console.log("Count(" + receivingEntity.name + "): Increasing " + receivedCount + " by +1.");
		for (let n = 0; n < receivingEntity.statistics.length; n++) {
			if (receivedCount == receivingEntity.statistics[n].name) {
				SugarCube.State.variables.player.statistics[n].count += receivedAmount;
				//console.log("Increased Count(" + receivedCount + "), by " + receivedAmount + ".");
				break;
			}
		}
	}
}

setup.sexOptions = function (player, scene, sceneList) {
	let optionsReturn = "";
	let spanId = "";
	//console.log("Checking options...");
	if (scene.stage == "climax") {
		if (scene.tags.includes("blowjob-giving")) {
			setup.experience(player, 'Blowjob', 20, 20, 4, 'nobreak');
		}
		optionsReturn = optionsReturn + "<span class='lbb'><<button 'Continue'>><<goto $sex.passage>><</button>></span>";
	} else {
		for (let i = 0; i < scene.options.length; i++) {	
			for (let n = 0; n < sceneList.length; n++) {
				if (sceneList[n].name == scene.options[i]) {
					//console.log("Option(" + sceneList[n].stage + "): " + sceneList[n].name + "...");
					spanId = sceneList[n].stage;
					let optReq = sceneList[n].requirements;
					let check = setup.checkReq(optReq, player);
					if (check == true) {
						let nextScene = "<<= setup.sex($sex)>>";
						optionsReturn = optionsReturn + "<span class='lbb'><<button '" + sceneList[n].buttonText + "'>><<set $sex.stage = '" + 
						sceneList[n].stage + "'>><<replace '#sex-" + spanId + "'>><br><br>" + nextScene + "<</replace>><</button>></span>";
						//console.log("Button: " + optionsReturn);
					}
					break;
				}
			}
		}
	}
	return "<span id='sex-" + spanId + "'><br><br>" + optionsReturn + "</span>";
}

setup.checkPerspective = function (sex) {
	//returns the perspective in case this is not already defined
	switch(sex.current) {
		case "oral":
		case "blowjob":
		if (sex.givingEntity.modifiers.includes("player") && sex.receivingEntity.modifiers.includes("hasPenis")) {
			var perspective = "blowjob-giving";
			console.log("Blowjob(giving): Pass.");
			break;
		} else if (sex.receivingEntity.modifiers.includes("player") && sex.receivingEntity.modifiers.includes("hasPenis")) {
			var perspective = "blowjob-receiving";
			console.log("Blowjob(receiving): Pass.");
			break;
		} else {
			console.log("Error: neither giving Entity(" + sex.givingEntity.name + ") or receiving Entity(" + sex.receivingEntity.name + ") have flag 'hasPenis'.");
			console.log("Checking for cunnilingus instead...");
			var perspective = "cunniligus";
		}
		case "cunnilingus":
		if (sex.givingEntity.modifiers.includes("player") && sex.receivingEntity.modifiers.includes("hasVagina")) {
			var perspective = "cunnilingus-giving";
			console.log("Cunnilingus(giving): Pass.");
			break;
		} else if (sex.receivingEntity.modifiers.includes("player") && sex.receivingEntity.modifiers.includes("hasVagina")) {
			var perspective = "cunnilingus-receiving";
			console.log("Cunnilingus(receiving): Pass.");
			break;
		}
		case "penis":
		if (sex.givingEntity.modifiers.includes("player") && sex.givingEntity.modifiers.includes("hasPenis")) {
			if (sex.receivingEntity.modifiers.includes("hasVagina")) {
				var perspective = "penis-sex";
				console.log("Penis(sex): Pass.");
				break;
			} else {
				console.log("Error: giving Entity(" + sex.receivingEntity.name + ") did not have flag 'hasVagina'.");
				var perspective = "anal-sex";
				console.log("Penis(anal): Alternate Pass.");
				break;
			}
		} else {
			console.log("Error: giving Entity(" + sex.givingEntity.name + ") did not have flag 'hasPenis'.");
			var perspective = "sex";
			console.log("Ignoring Error and bypassing(checking sex), please report this error and where it occured.");
		}
		case "vaginal":
		if (sex.givingEntity.modifiers.includes("hasPenis")) {
			if (sex.receivingEntity.modifiers.includes("player") && sex.receivingEntity.modifiers.includes("hasVagina")) {
				var perspective = "vaginal-sex";
				console.log("Vaginal(sex): Pass.");
				break;
			} else {
				console.log("Error: receiving Entity(" + sex.receivingEntity.name + ") did not have flag 'hasVagina'.");
				var perspective = "anal-sex";
				console.log("Anal(sex): Alternate Pass.");
				break;
			}
		} else {
			console.log("Error: giving Entity(" + sex.givingEntity.name + ") did not have flag 'hasPenis'.");
			var perspective = "sex";
			console.log("Ignoring Error and bypassing(checking sex), please report this error and where it occured.");
		}
		case "sex":
		if (sex.givingEntity.modifiers.includes("hasPenis")) {
			if (sex.givingEntity.modifiers.includes("player")) {
				if (sex.receivingEntity.modifiers.includes("hasVagina")) {
					var perspective = "penis-sex";
					console.log("Penis(sex): Pass.");
					break;
				} else {
					var perspective = "penis-anal";
					console.log("Penis(anal): Pass.");
					break;
				}
			} else {
				if (sex.receivingEntity.modifiers.includes("hasVagina")) {
					var perspective = "vaginal-sex";
					console.log("Vaginal(sex): Pass.");
					break;
				} else {
					var perspective = "anal-sex";
					console.log("Anal(sex): Pass.");
					break;
				}
			}
		} else if (sex.receivingEntity.modifiers.includes("hasPenis")) {
			if (sex.receivingEntity.modifiers.includes("player")) {
				if (sex.givingEntity.modifiers.includes("hasVagina")) {
					var perspective = "penis-sex";
					console.log("Penis(sex): Pass.");
					break;
				} else {
					var perspective = "penis-anal";
					console.log("Penis(anal): Pass.");
					break;
				}
			} else {
				if (sex.givingEntity.modifiers.includes("hasVagina")) {
					var perspective = "vaginal-sex";
					console.log("Vaginal(sex): Pass.");
					break;
				} else {
					var perspective = "anal-sex";
					console.log("Anal(sex): Pass.");
					break;
				}
			}
		} else {
			console.log("Error: neither giving Entity(" + sex.givingEntity.name + ") or receiving Entity(" + sex.receivingEntity.name + ") have flag 'hasPenis'.");
			console.log("Ignoring Error and assuming vaginal sex...");
			var perspective = "vaginal-sex";
			console.log("Vaginal(sex): False Pass.");
			break;
		}
		case "anal":
		if (sex.givingEntity.modifiers.includes("hasPenis")) {
			if (sex.givingEntity.modifiers.includes("player")) {
				var perspective = "penis-anal";
				console.log("Penis(anal): Pass.");
				break;
			} else {
				var perspective = "anal-sex";
				console.log("Anal(sex): Pass.");
				break;
			}
		} else if (sex.receivingEntity.modifiers.includes("hasPenis")) {
			if (sex.receivingEntity.modifiers.includes("player")) {
				var perspective = "penis-anal";
				console.log("Penis(anal): Pass.");
				break;
			} else {
				var perspective = "anal-sex";
				console.log("Anal(sex): Pass.");
				break;
			}
		} else {
			console.log("Error: neither giving Entity(" + sex.givingEntity.name + ") or receiving Entity(" + sex.receivingEntity.name + ") have flag 'hasPenis'.");
			console.log("Ignoring Error and assuming anal sex...");
			var perspective = "anal-sex";
			console.log("Anal(sex): False Pass.");
			break;
		}
		default:
		var perspective = sex.act;
		console.log("Default(" + sex.act + "): Pass.");
		break;
	}
	return perspective;
}

setup.assignComments = function (sex, perspective) {
	var comments = setup.loadCommentLib("sex");
	switch(perspective) {
		case "blowjob-giving":
		case "blowjob-receiving":
		var comArr = [setup.comment(sex.givingEntity, comments, sex.stage, 'blowjob-giving', sex.modifier), setup.comment(sex.receivingEntity, comments, sex.stage, 'blowjob-receiving', sex.modifier)];
		break;
		case "cunniligus-giving":
		case "cunniligus-receiving":
		var partner = "cunniligus-giving";
		var comArr = [setup.comment(sex.givingEntity, comments, sex.stage, 'cunniligus-giving', sex.modifier), setup.comment(sex.receivingEntity, comments, sex.stage, 'cunniligus-receiving', sex.modifier)];
		break;
		case "vaginal-sex":
		case "penis-sex":
		var comArr = [setup.comment(sex.givingEntity, comments, sex.stage, 'penis-sex', sex.modifier), setup.comment(sex.receivingEntity, comments, sex.stage, 'vaginal-sex', sex.modifier)];
		break;
		case "anal-sex":
		case "penis-anal":
		var comArr = [setup.comment(sex.givingEntity, comments, sex.stage, 'penis-anal', sex.modifier), setup.comment(sex.receivingEntity, comments, sex.stage, 'anal-sex', sex.modifier)];
		break;
	}
	return comArr;
}

setup.tear = function (sex, entity, perspective) {
	if (sex.stage == "climax") {
		if (entity.modifiers.includes("player")) {
			switch(perspective) {
				case "blowjob-giving":
				setup.incBod(entity, "mouth", 1);
				break;
				case "vaginal-sex":
				setup.incBod(entity, "vagina", 1);
				setup.bodyNote(entity, "vagina");
				break;
				case "anal-sex":
				setup.incBod(entity, "asshole", 1);
				setup.bodyNote(entity, "asshole");
				break;
				default:
				break;
			}
		} else {
			//future
		}
	}
}

setup.sex = function (sex) {
	//Determine the perspective of the player.
	//This is defined as in "what" is being used to then do "what".
	//penis-sex means the player is using (his/her) penis to have "sex"
	//penis-anal means the player is using (his/her) penis to have "anal sex"
	//vaginal-sex means the player is using her vagina to have "sex", which is only possible if the other partner has a penis, for an example.
	//blowjob-receiving means the player is receiving a blowjob, which is only possible if the player has a cock.
	console.log("Checking perspective...");
	var perspective = setup.checkPerspective(sex);
	console.log("Sex(givingEntity: " + sex.givingEntity.name + ", receivingEntity: " + sex.receivingEntity.name + "): Perspective(player):" + perspective + ", Modifier:" + sex.modifier + ", Stage:" + sex.stage + ",.");
	//Return only relevant scenes
	var sceneList = setup.loadSexScenes(sex.givingEntity, sex.receivingEntity, perspective);
	var additionals = setup.getAdditionals(perspective);
	var comments = setup.assignComments(sex, perspective);
	setup.shuffle(comments);
	var sceneFound = false;
	var rScene = "";
	var rAdd = "";
	var player = SugarCube.State.variables.player;
	for (let i = 0; i < sceneList.length; i++) {
		if (sceneList[i].stage == sex.stage && sceneList[i].tags.includes(sex.modifier) && sceneList[i].tags.includes(perspective)) {
			console.log("Found scene: " + sceneList[i].name);
			sceneFound = true;
			var sceneObject = sceneList[i];
			rScene = rScene + sceneList[i].introLines[sceneList[i].introEntry] + "<br>@@#image-" + sceneList[i].stage + ";@@<br>";
			rScene = rScene + sceneList[i].mainLines[sceneList[i].mainEntry] + "<br><br>" + comments[0] + "<br><br>" + comments[1] + "<br><br>";
			rScene = rScene + sceneList[i].outroLines[sceneList[i].outroEntry];
			for (let a = 0; a < additionals.length; a++) {
				if (additionals[a].tags.includes(sex.stage) && additionals[a].tags.includes(sex.modifier) && additionals[a].tags.includes(perspective)) {
					var addReq = additionals[a].requirements;
					var check = setup.checkReq(addReq, player);
					if (check == true) {
						rAdd = rAdd + " " + additionals[a].addText;
					}
					break;
				}
			}
			setup.countSexStat(sex.givingEntity, sex.receivingEntity, sceneList[i].givenCount, sceneList[i].receivedCount);
			setup.tear(sex, player, perspective);
			setup.shuffle(sceneList[i].options);
			var rOptions = setup.sexOptions(player, sceneObject, sceneList);
			break;
		}
	}
	//Find Default if no scene is found.
	if (sceneFound == false) {
		var sMod = "default";
		console.log("Could not find a scene, looking for default instead...");
		console.log("Looking for scene (" + sex.stage + ", " + sMod + ", " + perspective + ")...");
		for (i = 0; i < sceneList.length; i++) {
			if (sceneList[i].stage == sex.stage && sceneList[i].tags.includes(sMod) && sceneList[i].tags.includes(perspective)) {
				console.log("Found scene: " + sceneList[i].name);
				var sceneFound = true;
				var sceneObject = sceneList[i];
				var rScene = rScene + sceneList[i].sceneText;
				setup.countSexStat(givingEntity, receivingEntity, sceneList[i].givenCount, sceneList[i].receivedCount);
				setup.tear(sex, player, perspective);
				setup.shuffle(sceneList[i].options);
				var rOptions = setup.sexOptions(player, sceneObject, sceneList);
				break;
			}
		}
	}
	return rScene + rAdd + rOptions;
}