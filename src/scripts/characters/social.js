//Event Girl - Social Hubs
//v0.01
//Requires:
//by Sylen

setup.loadTalking = function (entity, player) {
	let comments = setup.loadCommentLib('socials');
	let talks = [];
	switch(entity.name) {
		case("Brenda"):
		talks = [
		{
			id: "start",
			passageText: "<<include 'Socials - Brenda - Main'>>",
			buttonText: "",
			modifiers: [],
			options: ["event-girl-ask-00","end-00"],
			requirements: []
		},
		{
			id: "event-girl-ask-00",
			passageText: "<<include 'Socials - Brenda - Ask About Event Girl'>>",
			buttonText: "Ask about becoming an Event Girl.",
			modifiers: ["start", "non-repeatable"],
			options: ["event-girl-ask-01","event-girl-ask-02"],
			requirements: []
		},
		{
			id: "event-girl-ask-01",
			passageText: "<<include 'Socials - Brenda - Event Girl Debt Question'>>",
			buttonText: "Are all Event Girls in debt?",
			modifiers: [],
			options: ["event-girl-ask-02","end-01"],
			requirements: []
		},
		{
			id: "event-girl-ask-02",
			passageText: "<<include 'Socials - Brenda - Event Girl Why Question'>>",
			buttonText: "Why did you become an Event Girl?",
			modifiers: [],
			options: ["event-girl-ask-01","end-01"],
			requirements: []
		},
		{
			id: "end-00",
			passageText: "",
			buttonText: "On second thought.",
			modifiers: ["end"],
			options: [],
			requirements: []
		},
		{
			id: "end-01",
			passageText: "",
			buttonText: "That was all.",
			modifiers: ["end"],
			options: [],
			requirements: []
		}];
		break;
		case("Dr. Linus"):
		console.log("Found: Dr. Linus.");
		talks = [
		{
			id: "start",
			passageText: "<<include 'Socials - Linus - Main'>>",
			buttonText: "",
			modifiers: [],
			options: ["linus-ask-00","linus-ask-01","linus-ask-mind-quest","linus-ask-meditation-quest","linus-debt-complete","end-00"],
			requirements: []
		},
		{
			id: "linus-ask-00",
			passageText: "<<include 'Socials - Linus - Ask About Year'>>",
			buttonText: "Ask what year it is.",
			modifiers: ["start"],
			options: ["linus-ask-00","linus-ask-01","linus-ask-mind-quest","linus-ask-meditation-quest","linus-debt-complete","end-01"],
			requirements: []
		},
		{
			id: "linus-ask-01",
			passageText: "<<include 'Socials - Linus - Event Girl Debt Question'>>",
			buttonText: "Can you explain the whole debt thing again?",
			modifiers: ["start"],
			options: ["linus-ask-00","linus-ask-01","linus-ask-mind-quest","linus-ask-meditation-quest","linus-debt-complete","end-01"],
			requirements: []
		},
		{
			id: "linus-ask-mind-quest",
			passageText: "<<include 'Socials - Linus - Headache Quest Begin'>>",
			buttonText: "I have this insane headache, any idea what it is?",
			modifiers: ["start", "non-repeatable"],
			options: ["linus-ask-00","linus-ask-01","linus-ask-mind-quest","linus-ask-meditation-quest","linus-debt-complete","end-01"],
			requirements: [{id: 'Mind', type: 'psyche-min', level: 1}]
		},
		{
			id: "linus-ask-meditation-quest",
			passageText: "<<include 'Socials - Linus - Headache Quest Complete'>>",
			buttonText: "Alright, I know about Pixie Pharmaceuticals.",
			modifiers: ["start", "non-repeatable"],
			options: ["linus-ask-00","linus-ask-01","linus-ask-mind-quest","linus-ask-meditation-quest","linus-debt-complete","end-01"],
			requirements: [{id: 'Headache-00', type: 'story-completed', level: 1}]
		},
		{
			id: "linus-debt-complete",
			passageText: "<<include 'Socials - Linus - Debt Complete'>>",
			buttonText: "Alright, I have completed my debt, what happens now?",
			modifiers: ["start", "non-repeatable"],
			options: [],
			requirements: [{id: 'Debt-01', type: 'story-active', level: 1}]
		},
		{
			id: "end-00",
			passageText: "",
			buttonText: "On second thought.",
			modifiers: ["end"],
			options: [],
			requirements: []
		},
		{
			id: "end-01",
			passageText: "",
			buttonText: "That was all.",
			modifiers: ["end"],
			options: [],
			requirements: []
		}];
		break;
		case("Lily"):
		console.log("Found: Lily.");
		talks = [
		{
			id: "start",
			passageText: "You approach Lily" + 
			setup.comment(entity, comments, 'talking', 'intro', 'greeting', 'break') + 
			"She asks without even looking at you." + 
			setup.comment(player, comments, 'talking', 'intro', 'greeting', 'break') + 
			"You think about what to say.",
			buttonText: "",
			modifiers: [],
			options: ["end-00"],
			requirements: []
		},
		{
			id: "end-00",
			passageText: "",
			buttonText: "On second thought.",
			modifiers: ["end"],
			options: [],
			requirements: []
		},
		{
			id: "end-01",
			passageText: "",
			buttonText: "That was all.",
			modifiers: ["end"],
			options: [],
			requirements: []
		}];
		break;
		default:
		console.log("Tried to load talking, but failed...");
		break;
	}
	return talks;
}

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