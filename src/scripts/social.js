//Event Girl - Social Hubs
//v0.01
//Requires:
//by Sylen

setup.talkOptions = function (optionId, talks, entity, player) {
	let doneTalks = SugarCube.State.variables.social.doneTalks;
	let returnOptions = "";
	console.log("Looking for talk options...");
	for (var i = 0; i < talks.length; i++) {
		if (talks[i].id == optionId) {
			if (talks[i].modifiers.includes("end")) {
				console.log("Option Found: " + talks[i].buttonText);
				returnOptions = "<span class='lbb'><<button '" + talks[i].buttonText + "'>><<goto $social.passage>><</button>></span>";	
			} else {
				if (doneTalks.includes(talks[i].id)) {
					console.log("Found(" + talks[i].buttonText + "): is already done.");
				} else {
					console.log("Option Found: " + talks[i].buttonText);
					returnOptions = "<span class='lbb'><<button '" + talks[i].buttonText + "'>><<replace '#SocialTalks'>><<= setup.talk($social.entity, $player, '" + talks[i].id + "')>><</replace>><</button>></span>";
				}
			}
			break;
		}
	}
	return returnOptions;
}

setup.talk = function (entity, player, stage) {
	let talks = setup.loadTalking(entity, player);
	let doneTalks = SugarCube.State.variables.social.doneTalks;
	let returnPassage = "";
	let returnOptions = "";
	for (var i = 0; i < talks.length; i++) {
		if (talks[i].id == stage) {
			if (doneTalks.includes(talks[i].id)) {
				console.log("Found(" + talks[i].buttonText + "): is already done.");
			} else {
				returnPassage = talks[i].passageText;
				if (talks[i].modifiers.includes("non-repeatable")) {
					SugarCube.State.variables.social.doneTalks.push(talks[i].id);
				}
				for (var n = 0; n < talks[i].options.length; n++) {
					returnOptions = returnOptions + setup.talkOptions(talks[i].options[n], talks, entity, player);
				}
			}
		}
	}
	return "<span id = 'SocialTalks'>" + returnPassage + "<br><br>" + returnOptions + "</span>";
}

setup.social = function (loc, passage) {
	let essentials = SugarCube.State.variables.social.essentialsGroup;
	let time = SugarCube.State.variables.time;
	let socials = [];
	let returnInteractions = "";
	let returnSocials = "";
	let Day = time.days[time.currentDay];
	let dayTime = time.dayTime[time.currentDayTime];
	console.log("Loading Socials(Location: " + loc + ", Day: " + Day + ", dayTime: " + dayTime + ")...");
	for (var i = 0; i < essentials.length; i++) {
		if (essentials[i].worldLocation != "unknown") {
			//console.log(essentials[i].name);
			for (var n = 0; n < essentials[i].worldLocation.length; n++) {
				if (essentials[i].worldLocation[n].type != "Default") {
					if (essentials[i].worldLocation[n].time.includes(dayTime) && essentials[i].worldLocation[n].days.includes(Day) && essentials[i].worldLocation[n].place == loc) {
						socials.push(essentials[i].name);
						//console.log(essentials[i].name);
						//entity = essentials[i];
						returnInteractions = returnInteractions + "<span class='lbb'><<button 'Talk to " + essentials[i].name + "'>>" + 
						"<<set $social.entity = $social.essentialsGroup[" + i + "]>><<set $social.talkId = 'start'>><<set $social.passage = '" + passage + "'>><<goto 'Social - Talk'>><</button>></span>";
					}
				}
			}
		}
	}
	if (socials.length <= 0) {
		returnSocials = "No one here at the moment.<br>";
	} else if (socials.length >= 1) {
		returnSocials = "You see ";
		for (let i = 0; i < socials.length; i++) {
			let q = i + 1;
			let z = q + 1;
			if (z < socials.length) {
				returnSocials = returnSocials + socials[i] + ", ";
			} else if (q < socials.length) {
				returnSocials = returnSocials + socials[i] + " ";
			} else {
				if (socials.length <= 1) {
					returnSocials = returnSocials + socials[i] + " here.";
				} else {
					returnSocials = returnSocials + " and " + socials[i] + " here.";
				}
			}
		}
	}
	return returnSocials + "<br><br>" + returnInteractions;
}