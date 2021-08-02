setup.speak = function (speaker, message, expression, nobreak) {
	let isArray = Array.isArray(message);
    let speakerName = "Speaker";
    let speakerPortrait = "images/portraits/unknown/default.png";
	if (isArray == true) {
        console.log("isArray: " + isArray);
        let speakInt = 0;
        if (speaker.modifiers.includes("player")) {
            let slutLevel = setup.getPsyche(speaker, "Slut");
            let bimboLevel = setup.getPsyche(speaker, "Bimbo");
            if (bimboLevel >= 2) {
                speakInt = setup.getRandomArbitrary(6, 8);
            } else if (slutLevel >= 2) {
                speakInt = setup.getRandomArbitrary(3, 5);
            } else {
                speakInt = setup.getRandomArbitrary(0, 2);
            }
            var speakerText = message[speakInt];
        } else {
            speakInt = message.length;
            var speakRandom = setup.random(speakInt);
            var speakerText = message[speakRandom];
        }
	} else {
		var speakerText = message;
	}
	if (expression == undefined) {
		expression = "default";
	}
	if (speaker.modifiers.includes("player")) {
		if (speaker.gender == "female") {
			speakerName = speaker.femaleName;
		} else {
			speakerName = speaker.maleName;
		}
		if (speaker.body.torso.bodyType == 0) {
			let pMakeup = speaker.body.face.makeup;
			let pHairstyle = speaker.body.hair.styleName;
			let pHaircolor = speaker.body.hair.color;
			speakerPortrait = "images/portraits/player/" + expression + "/" + pMakeup + "-" + pHairstyle + "-" + pHaircolor + ".png";
		} else {
			speakerPortrait = "images/portraits/player-male/" + expression + ".png";
		}
	} else {
		speakerName = speaker.name;
		speakerPortrait = "images/portraits/" + speaker.portraitName + "/" + expression + ".png";
	}
	let returnSpeak = "<div class='speaker-container'><div class='speaker-portrait'><img src='" + speakerPortrait + "' style='border-radius:0.8em;' width=100% height=100%></div><div class='speaker-text'><div class='speaker-header'>" + speakerName + "</div><div class='speaker-text'>" + speakerText + "</div></div></div>";
	if (nobreak != undefined) {
		return returnSpeak;
	} else {
		return "<br>" + returnSpeak + "<br>";
	}
}

setup.loadActionScene = function (name, player, passage) {
	let mComments = setup.loadCommentLib('morning');	
	let returnScene = "";
	let actionScenes = [
		{
			name: "Meditation",
			scenes: [{
				scene: '<<= setup.eventText("You sit down to clear your mind of all troubles, escaping into a serene mindset.")>>' + 
					'<<run setup.psycheHard($player, "Mind", 0)>><<run setup.psyche($player, "Lust", -15, -15)>>' + 
					'<<= setup.eventText("After some time, having cleansed yourself, you feel more ready than ever.")>>' + 
					'<br><span class="lbb"><<button "Continue">><<goto "' + passage + '">><</button>></span>',
				requirements: []
			}]
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
			scenes: [{
				scene: 'You roll and turn in your bed, as you\'re slowly waking up from your slumber...' + 
					setup.comment(player, mComments, 'morning', 'first', 'player-only', 'break') + 
					'You open your eyes, now fully rested and ready to take on another day. Your mind and thoughts are a bit more clear, but an itch has clearly build over the night as well...' + 
					'You move towards the mirror...' + 
					setup.comment(player, mComments, 'morning', 'second', 'player-only', 'break') + 
					'You get ready for the day ahead, making your final preparations.' + 
					"<<= setup.dailyExpenses($player, $time.currentDay)>><<run setup.rollEvents($eventStats)>><<run setup.psyche($player, 'Mind', -15, -5)>><<run setup.psyche($player, 'Lust', 10, 5)>>" + 
					'<br><br><span class="lbb"><<button "Continue">><<goto "' + passage + '">><</button>></span>',
				requirements: []
			}]
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