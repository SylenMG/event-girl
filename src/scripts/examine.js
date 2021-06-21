setup.examineGenital = function (entity, type) {
	let returnText = "";
	let penisSizeText = ["small", "small", "below average", "slightly above average", "well hung", "gigantic veiny"];
	let vaginaSizeText = ["virgin", "tight", "well-used", "loose", "gaping", "destroyed"];
	for (let i = 0; i < entity.body.genitals.current.length; i++) {
		if (entity.body.genitals.current[i].type == type) {
			if (entity.body.genitals.current[i].type == "penis") {
				returnText = penisSizeText[entity.body.genitals.current[i].size];
			} else if (entity.body.genitals.current[i].type == "vagina") {
				returnText = vaginaSizeText[entity.body.genitals.current[i].size];
			}
		}
	}
	return returnText;
}
setup.examineDetails = function (entity) {
	let returnDetails = "";
	let styleFound = false;
	let styleDetails = [];
	let coverageDetails = "";
	let otherDetails = "";
	if (entity.modifiers.includes("essential")) {
		for (let i = 0; i < entity.cybermods.length; i++) {
			returnDetails = returnDetails + " " + entity.cybermods[i].textDescription;
		}
		for (let i = 0; i < entity.tattoos.length; i++) {
			returnDetails = returnDetails + " " + entity.tattoos[i].textDescription;
		}
		for (let i = 0; i < entity.piercings.length; i++) {
			returnDetails = returnDetails + " " + entity.piercings[i].textDescription;
		}
		for (let i = 0; i < entity.scores.length; i++) {
			if (entity.scores[i].type == "style") {
				console.log("Style Score(" + entity.name + ", " + entity.scores[i].name + "): " + entity.scores[i].score + ".");
				if (entity.scores[i].score >= 1) {
					styleFound = true;
					if (entity.scores[i].score >= 3) {
						var styleDetail = entity.scores[i].textVariants[3];
					} else {
						var styleDetail = entity.scores[i].textVariants[entity.scores[i].score];
					}
					styleDetails.push(styleDetail);
				}
			} else if (entity.scores[i].type == "coverage") {
				console.log("Coverage Score(" + entity.name + ", " + entity.scores[i].name + "): " + entity.scores[i].score + ".");
				if (entity.scores[i].score >= 3) {
					coverageDetails = coverageDetails + " " + entity.scores[i].textVariants[3];
				} else {
					coverageDetails = coverageDetails + " " + entity.scores[i].textVariants[entity.scores[i].score];
				}
			} else if (entity.scores[i].type == "skirt-length") {
				console.log("Skirt Score(" + entity.name + ", " + entity.scores[i].name + "): " + entity.scores[i].score + ".");
				if (entity.scores[i].score >= 1) {
					if (entity.scores[i].score >= 3) {
						otherDetails = otherDetails + " " + entity.scores[i].textVariants[3];
					} else {
						otherDetails = otherDetails + " " + entity.scores[i].textVariants[entity.scores[i].score];
					}
				}
			} else if (entity.scores[i].type == "heel-height") {
				console.log("Heel Score(" + entity.name + ", " + entity.scores[i].name + "): " + entity.scores[i].score + ".");
				if (entity.scores[i].score >= 1) {
					if (entity.scores[i].score >= 3) {
						otherDetails = otherDetails + " " + entity.scores[i].textVariants[3];
					} else {
						otherDetails = otherDetails + " " + entity.scores[i].textVariants[entity.scores[i].score];
					}
				}
			}
		}
		if (styleFound == true ) {
			returnDetails = returnDetails + " Your outfit style is ";
			for (let i = 0; i < styleDetails.length; i++) {
				let q = i + 1;
				let z = q + 1;
				if (z < styleDetails.length) {
					returnDetails = returnDetails + styleDetails[i]+ ", ";
				} else if (q < styleDetails.length) {
					returnDetails = returnDetails + styleDetails[i]+ " ";
				} else {
					if (styleDetails.length <= 1) {
						returnDetails = returnDetails + styleDetails[i] + ".";
					} else {
						returnDetails = returnDetails + " and " + styleDetails[i] + ".";
					}
				}
			}
		}
	} else {
		//Not an essential
	}
	returnDetails = returnDetails + coverageDetails + otherDetails;
	return returnDetails;
}
setup.examine = function (entity) {
	let bodyText = globalBodyText;
	let returnExamine = "";
	if (entity.modifiers.includes("player")) {
		//Declare Values
		let entityBeauty = entity.body.face.beauty;
		let entityEyes = entity.body.face.eyecolor;
		let entityLips = entity.body.face.lips;
		let entityMakeup = entity.body.face.makeup;
		let entityHairStyle = entity.body.hair.style;
		let entityHairColor = entity.body.hair.color;
		let entityBody = entity.body.torso.bodyType;
		let entitySkinType = entity.body.skin.type;
		let entitySkinColor = entity.body.skin.color;
		let entityNails = entity.body.torso.nails;
		let entityTitsSize = entity.body.tits.size;
		//Get the text
		let returnBeauty = "Your " + bodyText.beautyText[entityBeauty];
		let returnEyes = bodyText.eyecolorText[entityEyes];
		let returnLips = bodyText.lipsText[entityLips];
		let returnMakeup = "";
		if (entityMakeup >= 1) {
			returnMakeup = "You\'re " + bodyText.makeupText[entityMakeup];
		}
		let returnHairStyle = "Your " + bodyText.hairstyleText[entityHairStyle];
		let returnHairColor = entityHairColor + " in color.";
		let returnBody = "Your " + bodyText.bodyText[entityBody];;
		let returnSkinType = "Your " + bodyText.skinText[entitySkinType];
		let returnSkinColor = bodyText.skincolorText[entitySkinColor];
		let returnNails = "";
		if (entityNails >= 1) {
			returnNails = "Your " + bodyText.nailsText[entityNails];
		}
		let returnTitsSize = "Your " + bodyText.titsSizeText[entityTitsSize];
		let returnFace = returnBeauty + " " + returnEyes + " " + returnLips + " " + returnMakeup + " " + returnHairStyle + returnHairColor;
		let returnFullBody = returnBody + " " + returnSkinType + " " + returnSkinColor + " " + returnNails + " " + returnTitsSize;
		let returnGenitals = "Your ";
		for (let i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "penis") {
				returnGenitals = returnGenitals + globalBodyText.penisSizeText[entity.body.genitals.current[i].size] + " ";
			} else if (entity.body.genitals.current[i].type == "vagina") {
				returnGenitals = returnGenitals + globalBodyText.vaginaSizeText[entity.body.genitals.current[i].size] + " ";
			}
		}
		//Ass & Asshole
		let entityAss = entity.body.ass.size;
		let entityAsshole = entity.body.ass.asshole;
		let returnAss = "Your " + bodyText.assSizeText[entityAss];
		let returnAsshole = bodyText.assholeSizeText[entityAsshole];
		//Details
		let returnDetails = setup.examineDetails(entity);
		//Return Examine
		returnExamine = returnFace + " " + returnFullBody + " " + returnGenitals + " " + returnAss + " " + returnAsshole + " " + returnDetails;
	} else if (entity.modifiers.includes("essential")) {
		//Declare Values
		let entityBeauty = entity.body.face.beauty;
		let entityEyes = entity.body.face.eyecolor;
		let entityLips = entity.body.face.lips;
		let entityMakeup = entity.body.face.makeup;
		let entityHairStyle = entity.body.hair.style;
		let entityHairColor = entity.body.hair.color;
		let entityBody = entity.body.torso.bodyType;
		let entitySkinType = entity.body.skin.type;
		let entitySkinColor = entity.body.skin.color;
		let entityNails = entity.body.torso.nails;
		let entityTitsSize = entity.body.tits.size;
		//Get the text
		let returnBeauty = setup.hisher(entity, "B") + " " + bodyText.beautyText[entityBeauty];
		let returnEyes = bodyText.eyecolorText[entityEyes];
		let returnLips = bodyText.lipsText[entityLips];
		let returnMakeup = "";
		if (entityMakeup >= 1) {
			returnMakeup = setup.hisher(entity, "B") + " " + bodyText.makeupText[entityMakeup];
		}
		let returnHairStyle = setup.hisher(entity, "B") + " " + bodyText.hairstyleText[entityHairStyle];
		let returnHairColor = entityHairColor + " in color.";
		let returnBody = setup.hisher(entity, "B") + " " + bodyText.bodyText[entityBody];;
		let returnSkinType = setup.hisher(entity, "B") + " " + bodyText.skinText[entitySkinType];
		let returnSkinColor = bodyText.skincolorText[entitySkinColor];
		let returnNails = "";
		if (entityNails >= 1) {
			returnNails = setup.hisher(entity, "B") + " " + bodyText.nailsText[entityNails];
		}
		let returnTitsSize = setup.hisher(entity, "B") + " " + bodyText.titsSizeText[entityTitsSize];
		let returnFace = returnBeauty + " " + returnEyes + " " + returnLips + " " + returnMakeup + " " + returnHairStyle + returnHairColor;
		let returnFullBody = returnBody + " " + returnSkinType + " " + returnSkinColor + " " + returnNails + " " + returnTitsSize;
		let returnGenitals = setup.hisher(entity, "B") + " ";
		for (let i = 0; i < entity.body.genitals.current.length; i++) {
			if (entity.body.genitals.current[i].type == "penis") {
				returnGenitals = returnGenitals + globalBodyText.penisSizeText[entity.body.genitals.current[i].size] + " ";
			} else if (entity.body.genitals.current[i].type == "vagina") {
				returnGenitals = returnGenitals + globalBodyText.vaginaSizeText[entity.body.genitals.current[i].size] + " ";
			}
		}
		//Ass & Asshole
		let entityAss = entity.body.ass.size;
		let entityAsshole = entity.body.ass.asshole;
		let returnAss = setup.hisher(entity, "B") + " " + bodyText.assSizeText[entityAss];
		let returnAsshole = bodyText.assholeSizeText[entityAsshole];
		//Return Examine
		let returnName = "You see " + entity.name + ".";
		returnExamine = returnName + " " + returnFace + " " + returnFullBody + " " + returnGenitals + " " + returnAss + " " + returnAsshole;
	} else {
		returnExamine = "This is a person.";
	}
	return returnExamine;
}
setup.coverageCheck = function (entity) {
	let coveragePass = false;
	let titsPass = false;
	let crotchPass = false;
	let slutFound = false;
	for (let i = 0; i < entity.psyche.length; i++) {
		if (entity.psyche[i].name == "Slut") {
			console.log("Player Psyche(Slut): " + entity.psyche[i].level);
			slutFound = true;
			for (let n = 0; n < entity.scores.length; n++) {
				if (entity.scores[n].name == "tits") {
					console.log("Player Coverage(tits): " + entity.scores[n].score);
					if (entity.scores[n].score >= 3 && entity.psyche[i].level == 0) {
						titsPass = true;
					} else if (entity.scores[n].score >= 2 && entity.psyche[i].level == 1) {
						titsPass = true;
					} else if (entity.scores[n].score >= 1 && entity.psyche[i].level == 2) {
						titsPass = true;
					} else if (entity.scores[n].score <= 0 && entity.psyche[i].level >= 3) {
						titsPass = true;
					}
				}
				if (entity.scores[n].name == "crotch") {
					console.log("Player Coverage(crotch): " + entity.scores[n].score);
					if (entity.scores[n].score >= 3 && entity.psyche[i].level == 0) {
						crotchPass = true;
					} else if (entity.scores[n].score >= 2 && entity.psyche[i].level == 1) {
						crotchPass = true;
					} else if (entity.scores[n].score >= 1 && entity.psyche[i].level == 2) {
						crotchPass = true;
					} else if (entity.scores[n].score <= 0 && entity.psyche[i].level >= 3) {
						crotchPass = true;
					}
				}
			}
		}
	}
	if (slutFound == false) {
		for (let i = 0; i < entity.scores.length; i++) {
			if (entity.scores[i].name == "tits") {
				if (entity.scores[i].score >= 3) {
					titsPass = true;
				}
			}
			if (entity.scores[i].name == "crotch") {
				if (entity.scores[i].score >= 3) {
					crotchPass = true;
				}
			}
		}
	}
	if (titsPass == true && crotchPass == true) {
		coveragePass = true;
	}
	console.log("Coverage: " + coveragePass);
	return coveragePass;
}
