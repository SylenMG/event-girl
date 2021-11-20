
setup.speechBubble = function (speaker, message, expression) {
	//Default name and portrait
	let speakerName = "Speaker";
	let speakerPortrait = "images/portraits/unknown/default.png";
	//Check for defined expression portrait
	if (expression == undefined) {
		expression = "default";
	} else if (Array.isArray(expression) == true) {
		expression = expression[setup.random(expression.length)];
	}
	if (speaker.modifiers.includes("player")) {
		if (speaker.gender == "female") {
			speakerName = speaker.femaleName;
		} else {
			speakerName = speaker.maleName;
		}
		//Default to male body portrait or use female portrait?
		if (speaker.body.torso.bodyType == 0) {
			speakerPortrait = "images/portraits/player/" + expression + "/" + speaker.body.face.makeup + "-" + speaker.body.hair.styleName + "-" + speaker.body.hair.color + ".png";
		} else {
			speakerPortrait = "images/portraits/player-male/" + expression + ".png";
		}
	} else {
		speakerName = speaker.name;
		speakerPortrait = "images/portraits/" + speaker.portraitName + "/" + expression + ".png";
	}
	return {
		name: speakerName,
		portrait: speakerPortrait,
		message: message,
		messageInt: 0,
		speechArray: false,
		speechText: "Error: No text found.",
		expressionArray: false,
		expression: expression
	};
}
setup.speak = function (speaker, message, expression, nobreak) {
	let speech = setup.speechBubble(speaker, message, expression);
	speech.speechArray = Array.isArray(speech.message);
	//Check if speech is varied (multiple outcomes) or not
	if (speech.speechArray == true) {
		speech.messageInt = message.length;
        console.log("speechArray: " + speech.speechArray);
        if (speaker.modifiers.includes("player")) {
			if (speech.message.length == 8) {
				let slutLevel = setup.getPsyche(speaker, "Slut");
				let bimboLevel = setup.getPsyche(speaker, "Bimbo");
				if (bimboLevel >= 2) {
					speech.messageInt = setup.getRandomArbitrary(6, 8);
					if (speech.expressionArray == true) {
						speech.speakerPortrait = "images/portraits/player/" + expression[2] + "/" + speaker.body.face.makeup + "-" + speaker.body.hair.styleName + "-" + speaker.body.hair.color + ".png";
					}
				} else if (slutLevel >= 2) {
					speech.messageInt = setup.getRandomArbitrary(3, 5);
					if (speech.expressionArray == true) {
						speech.speakerPortrait = "images/portraits/player/" + expression[1] + "/" + speaker.body.face.makeup + "-" + speaker.body.hair.styleName + "-" + speaker.body.hair.color + ".png";
					}
				} else {
					speech.messageInt = setup.getRandomArbitrary(0, 2);
					if (speech.expressionArray == true) {
						speech.speakerPortrait = "images/portraits/player/" + expression[0] + "/" + speaker.body.face.makeup + "-" + speaker.body.hair.styleName + "-" + speaker.body.hair.color + ".png";
					}
				}
				speech.speechText = speech.message[speech.messageInt];
			} else {
				speech.messageInt = setup.random(speech.messageInt);
				speech.speechText = speech.message[speech.messageInt];
			}
        } else {
            speech.messageInt = setup.random(speech.messageInt);
			speech.speechText = speech.message[speech.messageInt];
        }
	} else {
		speech.speechText = speech.message;
	}
	let returnSpeak = "<div class='speaker-container'><div class='speaker-portrait'><img src='" + speech.portrait + "' style='border-radius:0.8em;' width=100% height=100%></div><div class='speaker-text'><div class='speaker-header'>" + speech.name + "</div><div class='speaker-text'>" + speech.speechText + "</div></div></div>";
	if (nobreak != undefined) {
		return returnSpeak;
	} else {
		return "<br>" + returnSpeak + "<br>";
	}
}

setup.loadActionScene = function (name, player, passage) {
	//let mComments = setup.loadCommentLib('morning');	
	let returnScene = "";
	let actionScenes = [
		{
			name: "Meditation",
			scenes: [
				{
				scene: '<<include "Meditation - Default">>',
				requirements: [{id: 'Headache-01', type: 'story-completed', level: 0}]
				},
				{
				scene: '<<include "Meditation - First Time">>',
				requirements: [{id: 'Headache-01', type: 'story-incomplete', level: 0}]
				}
			]
		},
		{
			name: "Masturbation",
			scenes: [
				{
				scene: 'You get yourself comfortable, feeling your loins moisten at the thought of your own touch. Gently caressing your clit you feel a shock of pleasure shoot through you and a warmth spread through body.' + 
				' You bite your lip as you explore your body, something that still seems slightly alien to you.<br><br>' + 
				setup.displayVisual('You slowly work your ' + setup.pickNoun(vagina, SugarCube.State.variables.player) + ', rubbing and flicking your clit.', 'image-masturbation', player, 'masturbation', 'vaginal') + 
				"<br>@@#image-masturbation;@@<br>" + 
				'Something slowly builds up inside of you as you continue to stimulate your ' + setup.pickNoun(vagina, SugarCube.State.variables.player) + ', making you moan slightly.' + 
				' You bite your lip and cup your own ' + setup.pickNoun(tits, SugarCube.State.variables.player) + ' as you tremble, a sudden heat takes over filling you with overwhelming pleasure as you climax.' + 
				'<<run setup.psycheHard($player, "Lust", 0)>><<run setup.experience($player, "Masturbation", 5, 5)>>' + 
				'<br><br>After some time, having cleaned yourself up, you feel more ready than ever.' + 
				'<br><br><span class="lbb"><<button "Continue">><<goto "' + passage + '">><</button>></span>',
				requirements: [{id: 'penis-size', type: 'score-max', level: 0}]
				},
				{
				scene: 'You get yourself comfortable, feeling your ' + setup.pickNoun(penis, SugarCube.State.variables.player) + ' harden and thicken to your touch. You grab your shaft and slowly begin to stroke it,' + 
				' relishing in the familiar feeling of your own cock in your hands.<br><br>' + 
				setup.displayVisual('You pick up the pace, stroking your ' + setup.pickNoun(penis) + ', milking yourself.', 'image-masturbation', player, 'masturbation', 'penis') + 
				"<br>@@#image-masturbation;@@<br>" + 
				'A pressure slowly builds up at the root of your ' + setup.pickNoun(penis) + ' as you come closer to releasing your load.' + 
				' You bite your lip and cup your own ' + setup.pickNoun(tits, SugarCube.State.variables.player) + ' as you tremble shooting hot thick loads all over the place.' + 
				'<<run setup.psycheHard($player, "Lust", 0)>><<run setup.experience($player, "Masturbation", 5, 5)>><<run setup.experience($player, "Handjob", 5, 5)>>' + 
				'<br><br>After some time, having cleaned yourself up, you feel more ready than ever.' + 
				'<br><br><span class="lbb"><<button "Continue">><<goto "' + passage + '">><</button>></span>',
				requirements: [{id: 'penis-size', type: 'score-min', level: 1}]
				},
			]	
		},
		{
			name: "Morning",
			scenes: [
				{
				scene: '<<include "Morning - Default">>',
				requirements: []
				},
				{
				scene: '<<include "Morning - Amanda Meeting 01">>',
				requirements: [{id: 'Amanda-Meeting-00', type: 'story-completed', level: 0},{id: 'Amanda-Meeting-01', type: 'story-incomplete', level: 0},{id: 'Amanda-Meeting-01', type: 'story-inactive', level: 0}]
				}
			]
		}
	];
	for (let i = 0; i < actionScenes.length; i++) {
		if (actionScenes[i].name == name) {
			setup.shuffle(actionScenes[i].scenes);
			for (let n = 0; n < actionScenes[i].scenes.length; n++) {	
				let actReq = actionScenes[i].scenes[n].requirements;
				let check = setup.checkReq(actReq, player);
				if (check == true) {
					returnScene = actionScenes[i].scenes[n].scene;
				}
			}
		}
	}
	return returnScene;
}

setup.meditation = function (player, passage) {
	let returnScene = setup.loadActionScene("Meditation", player, passage);
	setup.passTime();
	return returnScene;
}

setup.masturbation = function (player, passage) {
	let returnScene = setup.loadActionScene("Masturbation", player, passage);
	setup.passTime();
	return returnScene;
}

setup.morning = function (player, passage) {
	let returnScene = setup.loadActionScene("Morning", player, passage);
	setup.heal(player);
	setup.passDay();
	return returnScene;
}			