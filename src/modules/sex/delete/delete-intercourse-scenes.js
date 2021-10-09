//Intercourse Scenes
//v0.01
//Requires: intercourse.js -loaded after
//by Sylen
/*
setup.flair = function (entity, object) {
	let objectSize = setup.getBodypartSize(entity, object);
	let nounLength = setup.random(object.nouns.length);
	let returnFlair = object.sizeText[objectSize] + " " + object.nouns[nounLength];
	return returnFlair;
}

setup.getAdditionals = function (perspective) {
	let additionals = [
		{
		addText: "A tingling heat spreads in your stomach as you taste cock for the first time in your life.",
		tags: ["blowjob-giving","intro","sensual"],
		requirements: [{id: 'givenBlowjobs', type: 'stat-max', level: 0}]		
		},
		{
		addText: "A tingling heat spreads in your stomach as your virgin pussy is broken in by raw cock.",
		tags: ["vaginal-sex","intro","sensual"],
		requirements: [{id: 'receivedVaginal', type: 'stat-max', level: 0}]		
		},
		{
		addText: "Your stomach curls as you think about the fact that you have been filled with cum for the first time in your life.",
		tags: ["vaginal-sex","climax","sensual"],
		requirements: [{id: 'receivedVaginalCreampie', type: 'stat-max', level: 0}]		
		},
	];
	return additionals;
}

setup.loadSexScenes = function (givingEntity, receivingEntity, perspective) {
	console.log("Loading Sex Scenes(givingEntity: " + givingEntity.name + ", receivingEntity: " + receivingEntity.name + ", Perspective: " + perspective + ")...");
	
	let gFlair = {
		penis: setup.flair(givingEntity, penis),
		vagina: setup.flair(givingEntity, vagina),
		mouth: setup.flair(givingEntity, mouth),
		tits: setup.flair(givingEntity, tits),
		ass: setup.flair(givingEntity, ass),
		asshole: setup.flair(givingEntity, asshole),
	}
	let rFlair = {
		penis: setup.flair(receivingEntity, penis),
		vagina: setup.flair(receivingEntity, vagina),
		mouth: setup.flair(receivingEntity, mouth),
		tits: setup.flair(receivingEntity, tits),
		ass: setup.flair(receivingEntity, ass),
		asshole: setup.flair(receivingEntity, asshole),
	}
	
	if (perspective == "blowjob-giving") {
		var scenes = [
		{
			name: "lick-giving-0",
			buttonText: "",
			introLines: ["You raise your head and " + setup.displayVisual("there it is...", "image-intro", givingEntity, "blowjob", "reveal") + " staring at you. A " + 
			setup.pickNoun(penis) + " waiting to be licked and pleasured by your " + gFlair.mouth + ".", 
			"You raise your head and " + setup.displayVisual("there it is...", "image-intro", givingEntity, "blowjob", "reveal") + " staring at you. A " + 
			setup.pickNoun(penis) + " waiting to be licked and pleasured by your  " + gFlair.mouth + ".",
			"You raise your head and " + setup.displayVisual("there it is...", "image-intro", givingEntity, "blowjob", "reveal") + " staring at you. A " + 
			setup.pickNoun(penis) + " waiting to be licked and pleasured by your  " + gFlair.mouth + "."],
			introEntry: setup.random(2),
			mainLines: ["The glans of the head slightly dripping with pre-cum, aching to be tasted. You absent-mindedly catch yourself licking your lips in anticipation.",
			"The glans of the head slightly dripping with pre-cum, aching to be tasted. You absent-mindedly catch yourself licking your lips in anticipation.",
			"The glans of the head slightly dripping with pre-cum, aching to be tasted. You absent-mindedly catch yourself licking your lips in anticipation."],
			mainEntry: setup.random(2),
			outroLines: ["You stroke your fingers along his shaft, only to grab it lightly, feeling the veins and texture against your palm.",
			"You stroke your fingers along his shaft, only to grab it lightly, feeling the veins and texture against your palm.",
			"You stroke your fingers along his shaft, only to grab it lightly, feeling the veins and texture against your palm."],
			outroEntry: setup.random(2),
			givenCount: "givenBlowjobs",
			receivedCount: "receivedBlowjobs",
			stage: "intro",
			tags: ["blowjob-giving","sensual","default"],
			options: ["lick-giving-1"],
			requirements: []
		},
		{
			name: "lick-giving-1",
			buttonText: "Taste the tip and suck it.",
			introLines: ["The salty pre-cum caress your tongue as you taste the bulbuous head. You tremble slightly as you " + 
			setup.displayVisual("slide your lips up and down", "image-main", givingEntity, "blowjob", "lick") + " " + setup.hisher(receivingEntity) + 
			" shaft. Looking up you meet " + setup.hisher(receivingEntity) + " satisfied gaze as you begin to take things further, stroking the length of " + 
			setup.hisher(receivingEntity) + " hard veiny " + setup.pickNoun(penis) + " with your lips and the tip of your tongue.",
			"The salty pre-cum caress your tongue as you taste the bulbuous head. You tremble slightly as you " + 
			setup.displayVisual("slide your lips up and down", "image-main", givingEntity, "blowjob", "lick") + " " + setup.hisher(receivingEntity) + 
			" shaft. Looking up you meet " + setup.hisher(receivingEntity) + " satisfied gaze as you begin to take things further, stroking the length of " + 
			setup.hisher(receivingEntity) + " hard veiny " + setup.pickNoun(penis) + " with your lips and the tip of your tongue.",
			"The salty pre-cum caress your tongue as you taste the bulbuous head. You tremble slightly as you " + 
			setup.displayVisual("slide your lips up and down", "image-main", givingEntity, "blowjob", "lick") + " " + setup.hisher(receivingEntity) + 
			" shaft. Looking up you meet " + setup.hisher(receivingEntity) + " satisfied gaze as you begin to take things further, stroking the length of " + 
			setup.hisher(receivingEntity) + " hard veiny " + setup.pickNoun(penis) + " with your lips and the tip of your tongue."],
			introEntry: setup.random(2),
			mainLines: ["Grabbing the base of " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " you slowly meet " + 
			setup.hisher(receivingEntity) + " head with your lips and begin to part them. The veiny shaft traveling through your lubricated lips.",
			"Grabbing the base of " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " you slowly meet " + 
			setup.hisher(receivingEntity) + " head with your lips and begin to part them. The veiny shaft traveling through your lubricated lips.",
			"Grabbing the base of " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " you slowly meet " + 
			setup.hisher(receivingEntity) + " head with your lips and begin to part them. The veiny shaft traveling through your lubricated lips."],
			mainEntry: setup.random(2),
			outroLines: ["You only manage to get the half-length along your tongue before you gag a little, which only makes you chuckle. You blush a little and smile as the cock rests on your tongue.",
			"You stroke your fingers along his shaft, only to grab it lightly, feeling the veins and texture against your palm.",
			"You stroke your fingers along his shaft, only to grab it lightly, feeling the veins and texture against your palm."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["blowjob-giving","sensual","default"],
			options: ["suck-giving-0"],
			requirements: []
		},
		{
			name: "suck-giving-0",
			buttonText: "Keep sucking and try to deepthroat.",
			introLines: ["You bob your head back and forth as you try your best to suck " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			", whilst not being overly sloppy with the saliva escaping your mouth. " + 
			setup.displayVisual("You gag a little every now and then as you challenge yourself to take it further into your wanton mouth.", "image-outro", givingEntity, "blowjob", "deepthroat"),
			"You bob your head back and forth as you try your best to suck " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			", whilst not being overly sloppy with the saliva escaping your mouth. " + 
			setup.displayVisual("You gag a little every now and then as you challenge yourself to take it further into your wanton mouth.", "image-outro", givingEntity, "blowjob", "deepthroat"),
			"You bob your head back and forth as you try your best to suck " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			", whilst not being overly sloppy with the saliva escaping your mouth. " + 
			setup.displayVisual("You gag a little every now and then as you challenge yourself to take it further into your wanton mouth.", "image-outro", givingEntity, "blowjob", "deepthroat")],
			introEntry: setup.random(2),
			mainLines: ["Feeling " + setup.hisher(receivingEntity) + " hand grabbing your hair, " + setup.heshe(receivingEntity) + " pushes " + 
			setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " to the beginning of your throat." + 
			" You're given little time to catch your breath as it plops out again." + 
			" " + setup.heshe(receivingEntity, 'B') + " shoves it in again and grinds it against the inside of your cheeks, effectively fucking your mouth with slow passion.",
			"Feeling " + setup.hisher(receivingEntity) + " hand grabbing your hair, " + setup.heshe(receivingEntity) + " pushes " + 
			setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " to the beginning of your throat." + 
			" You're given little time to catch your breath as it plops out again." + 
			" " + setup.heshe(receivingEntity, 'B') + " shoves it in again and grinds it against the inside of your cheeks, effectively fucking your mouth with slow passion.",
			"Feeling " + setup.hisher(receivingEntity) + " hand grabbing your hair, " + setup.heshe(receivingEntity) + " pushes " + 
			setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " to the beginning of your throat." + 
			" You're given little time to catch your breath as it plops out again." + 
			" " + setup.heshe(receivingEntity, 'B') + " shoves it in again and grinds it against the inside of your cheeks, effectively fucking your mouth with slow passion."],
			mainEntry: setup.random(2),
			outroLines: ["You feel " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " twitch and pulse, jumping around in your mouth. " + 
			setup.heshe(receivingEntity, 'B') + "'s coming closer to release, closer to giving you that sweet salty reward for your slutty effort.",
			"You feel " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " twitch and pulse, jumping around in your mouth. " + 
			setup.heshe(receivingEntity, 'B') + "'s coming closer to release, closer to giving you that sweet salty reward for your slutty effort.",
			"You feel " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " twitch and pulse, jumping around in your mouth. " + 
			setup.heshe(receivingEntity, 'B') + "'s coming closer to release, closer to giving you that sweet salty reward for your slutty effort."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["blowjob-giving","sensual","default"],
			options: ["blowjob-giving-climax-facial","blowjob-giving-climax-swallow"],
			requirements: []
		},
		{
			name: "blowjob-giving-climax-facial",
			buttonText: "Take it all over your face.",
			introLines: ["With a loud sloppy sound " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			" plops out of your mouth and " + setup.displayVisual("explodes all over your face", "image-climax", receivingEntity, "climax", "facial") + ", covering it in male juices.",
			"With a loud sloppy sound " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			" plops out of your mouth and " + setup.displayVisual("explodes all over your face", "image-climax", receivingEntity, "climax", "facial") + ", covering it in male juices.",
			"With a loud sloppy sound " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			" plops out of your mouth and " + setup.displayVisual("explodes all over your face", "image-climax", receivingEntity, "climax", "facial") + ", covering it in male juices."],
			introEntry: setup.random(2),
			mainLines: ["Strings of cum land across your nose, lips, some in your mouth and a bit on your forehead.",
			"Strings of cum land across your nose, lips, some in your mouth and a bit on your forehead.",
			"Strings of cum land across your nose, lips, some in your mouth and a bit on your forehead."],
			mainEntry: setup.random(2),
			outroLines: ["You feel " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " slap unto your cum-covered lips as " + 
			setup.heshe(receivingEntity) + " dickslaps your face, drying the last bit of man-juice on your cheek." + 
			"Scooping of globs of jizz you're slightly shocked by the sheer amount you've been covered by.",
			"You feel " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " slap unto your cum-covered lips as " + 
			setup.heshe(receivingEntity) + " dickslaps your face, drying the last bit of man-juice on your cheek." + 
			"Scooping of globs of jizz you're slightly shocked by the sheer amount you've been covered by.",
			"You feel " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + " slap unto your cum-covered lips as " + 
			setup.heshe(receivingEntity) + " dickslaps your face, drying the last bit of man-juice on your cheek." + 
			"Scooping of globs of jizz you're slightly shocked by the sheer amount you've been covered by."],
			outroEntry: setup.random(2),
			givenCount: "receivedFacial",
			receivedCount: "givenFacial",
			stage: "climax",
			tags: ["blowjob-giving","facial","sensual","default"],
			options: [],
			requirements: []
		},
		{
			name: "blowjob-giving-climax-swallow",
			buttonText: "Take it in your mouth.",
			introLines: ["A sudden pressure builds in your mouth and you feel " + setup.hisher(receivingEntity) + " hand grab at the back of your head, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			" down your throat. " + setup.displayVisual("You gag and retch as you´re forced to take the cock", "image-climax", receivingEntity, "climax", "swallow") + " and incoming cum like a wanton whore.",
			"A sudden pressure builds in your mouth and you feel " + setup.hisher(receivingEntity) + " hand grab at the back of your head, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			" down your throat. " + setup.displayVisual("You gag and retch as you´re forced to take the cock", "image-climax", receivingEntity, "climax", "swallow") + " and incoming cum like a wanton whore.",
			"A sudden pressure builds in your mouth and you feel " + setup.hisher(receivingEntity) + " hand grab at the back of your head, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(penis) + 
			" down your throat. " + setup.displayVisual("You gag and retch as you´re forced to take the cock", "image-climax", receivingEntity, "climax", "swallow") + " and incoming cum like a wanton whore."],
			introEntry: setup.random(2),
			mainLines: ["With the cock pulsing against your throat as your stomach is filled with " + setup.hisher(receivingEntity) + " seed.",
			"With the cock pulsing against your throat as your stomach is filled with " + setup.hisher(receivingEntity) + " seed.",
			"With the cock pulsing against your throat as your stomach is filled with " + setup.hisher(receivingEntity) + " seed."],
			mainEntry: setup.random(2),
			outroLines: ["The salty taste of " + setup.hisher(receivingEntity) + " cum trails along your tongue as " + 
			setup.heshe(receivingEntity) + " pulls out, smothering your lips, leaving you moaning for more.",
			"The salty taste of " + setup.hisher(receivingEntity) + " cum trails along your tongue as " + 
			setup.heshe(receivingEntity) + " pulls out, smothering your lips, leaving you moaning for more.",
			"The salty taste of " + setup.hisher(receivingEntity) + " cum trails along your tongue as " + 
			setup.heshe(receivingEntity) + " pulls out, smothering your lips, leaving you moaning for more."],
			outroEntry: setup.random(2),
			givenCount: "receivedSwallow",
			receivedCount: "givenSwallow",
			stage: "climax",
			tags: ["blowjob-giving","swallow","sensual","default"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Blowjob(giving) Scenes.");
	} else if (perspective == "cunnilingus-giving") {
		var scenes = [
		{
			name: "lick-giving-0",
			buttonText: "",
			introLines: ["You move closer to each other until " + setup.displayVisual("your lips meet and your tongue explores ", "image-intro", receivingEntity, "cunnilingus", "kiss") + 
			setup.himher(receivingEntity) + ".", 
			"You move closer to each other until " + setup.displayVisual("your lips meet and your tongue explores ", "image-intro", receivingEntity, "cunnilingus", "kiss") + 
			setup.himher(receivingEntity) + ".",
			"You move closer to each other until " + setup.displayVisual("your lips meet and your tongue explores ", "image-intro", receivingEntity, "cunnilingus", "kiss") + 
			setup.himher(receivingEntity) + "."],
			introEntry: setup.random(2),
			mainLines: ["You caress " + setup.himher(receivingEntity) + " and trail your hand along " + setup.hisher(receivingEntity) + " stomach.",
			"You caress " + setup.himher(receivingEntity) + " and trail your hand along " + setup.hisher(receivingEntity) + " stomach.",
			"You caress " + setup.himher(receivingEntity) + " and trail your hand along " + setup.hisher(receivingEntity) + " stomach."],
			mainEntry: setup.random(2),
			outroLines: ["You begin to kiss " + setup.hisher(receivingEntity) + " neck, moving slowly downwards to " + setup.hisher(receivingEntity) + " chest, then stomach and finally " + 
			setup.hisher(receivingEntity) + " thighs.",
			"You begin to kiss " + setup.hisher(receivingEntity) + " neck, moving slowly downwards to " + setup.hisher(receivingEntity) + " chest, then stomach and finally " + 
			setup.hisher(receivingEntity) + " thighs.",
			"You begin to kiss " + setup.hisher(receivingEntity) + " neck, moving slowly downwards to " + setup.hisher(receivingEntity) + " chest, then stomach and finally " + 
			setup.hisher(receivingEntity) + " thighs."],
			outroEntry: setup.random(2),
			givenCount: "givenCunnilingus",
			receivedCount: "receivedCunnilingus",
			stage: "intro",
			tags: ["cunnilingus-giving","sensual","default"],
			options: ["lick-giving-1"],
			requirements: []
		},
		{
			name: "lick-giving-1",
			buttonText: "Kiss " + setup.hisher(receivingEntity) + " pussy.",
			introLines: ["Your lips meet her " + rFlair.vagina + "," + 
			setup.displayVisual(" kissing it as you trail your fingers along ", "image-main", receivingEntity, "cunnilingus", "pussy-kiss") + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + " and thighs.",
			"Your lips meet her " + rFlair.vagina + "," + 
			setup.displayVisual(" kissing it as you trail your fingers along ", "image-main", receivingEntity, "cunnilingus", "pussy-kiss") + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + " and thighs.",
			"Your lips meet her " + rFlair.vagina + "," + 
			setup.displayVisual(" kissing it as you trail your fingers along ", "image-main", receivingEntity, "cunnilingus", "pussy-kiss") + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + " and thighs."],
			introEntry: setup.random(2),
			mainLines: [setup.hisher(receivingEntity, "B") + " moans fill your ears making your stomach drop and fill with wanton need.",
			setup.hisher(receivingEntity, "B") + " moans fill your ears making your stomach drop and fill with wanton need.",
			setup.hisher(receivingEntity, "B") + " moans fill your ears making your stomach drop and fill with wanton need."],
			mainEntry: setup.random(2),
			outroLines: ["You let your tongue grace " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "-lips, tasting her lush juices.",
			"You let your tongue grace " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "-lips, tasting her lush juices.",
			"You let your tongue grace " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "-lips, tasting her lush juices."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["cunnilingus-giving","sensual","default"],
			options: ["lick-giving-2"],
			requirements: []
		},
		{
			name: "lick-giving-2",
			buttonText: "Let your tongue do the work.",
			introLines: ["You bob your head back and forth licking " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + 
			", whilst not being overly sloppy with the saliva escaping your mouth.", 
			"You bob your head back and forth licking " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + 
			", whilst not being overly sloppy with the saliva escaping your mouth.",
			"You bob your head back and forth licking " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + 
			", whilst not being overly sloppy with the saliva escaping your mouth."],
			introEntry: setup.random(2),
			mainLines: [setup.displayVisual("You let your tongue escape your mouth only to explore ", "image-outro", receivingEntity, "cunnilingus", "pussy-lick") + 
			setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " again.",
			setup.displayVisual("You let your tongue escape your mouth only to explore ", "image-outro", receivingEntity, "cunnilingus", "pussy-lick") + 
			setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " again.",
			setup.displayVisual("You let your tongue escape your mouth only to explore ", "image-outro", receivingEntity, "cunnilingus", "pussy-lick") + 
			setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " again."],
			mainEntry: setup.random(2),
			outroLines: ["You feel " + setup.hisher(receivingEntity) + " body twitch and pulse, forcing you to latch unto " + 
			setup.himher(receivingEntity) + " as " + setup.heshe(receivingEntity) + " is coming closer to release and giving you that sweet reward for your slutty effort.",
			"You feel " + setup.hisher(receivingEntity) + " body twitch and pulse, forcing you to latch unto " + 
			setup.himher(receivingEntity) + " as " + setup.heshe(receivingEntity) + " is coming closer to release and giving you that sweet reward for your slutty effort.",
			"You feel " + setup.hisher(receivingEntity) + " body twitch and pulse, forcing you to latch unto " + 
			setup.himher(receivingEntity) + " as " + setup.heshe(receivingEntity) + " is coming closer to release and giving you that sweet reward for your slutty effort."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["cunnilingus-giving","sensual","default"],
			options: ["cunnilingus-giving-climax"],
			requirements: []
		},
		{
			name: "cunnilingus-giving-climax",
			buttonText: "Let " + setup.himher(receivingEntity) + " cum.",
			introLines: ["With " + setup.hisher(receivingEntity) + " broken moans becoming louder, you don\'t let go and continue to please " + setup.himher(receivingEntity) + ".",
			"With " + setup.hisher(receivingEntity) + " broken moans becoming louder, you don\'t let go and continue to please " + setup.himher(receivingEntity) + ".",
			"With " + setup.hisher(receivingEntity) + " broken moans becoming louder, you don\'t let go and continue to please " + setup.himher(receivingEntity) + "."],
			introEntry: setup.random(2),
			mainLines: [setup.displayVisual("Both of your body curls as " + setup.heshe(receivingEntity) + 
			" trembles and squirts all over you, covering you in " + setup.hisher(receivingEntity) + " lush juices.", "image-climax", receivingEntity, "cunnilingus", "orgasm"),
			setup.displayVisual("Both of your body curls as " + setup.heshe(receivingEntity) + 
			" trembles and squirts all over you, covering you in " + setup.hisher(receivingEntity) + " lush juices.", "image-climax", receivingEntity, "cunnilingus", "orgasm"),
			setup.displayVisual("Both of your body curls as " + setup.heshe(receivingEntity) + 
			" trembles and squirts all over you, covering you in " + setup.hisher(receivingEntity) + " lush juices.", "image-climax", receivingEntity, "cunnilingus", "orgasm")],
			mainEntry: setup.random(2),
			outroLines: ["You both catch your breath.",
			"You both catch your breath.",
			"You both catch your breath."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "climax",
			tags: ["cunnilingus-giving","sensual","default"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Cunnilingus(giving) Scenes.");
	} else if (perspective == "blowjob-receiving") {
		var scenes = [
		{
			name: "lick-receiving-0",
			buttonText: "",
			introLines: ["You feel " + setup.hisher(givingEntity) + " tongue on your " + rFlair.penis + ", " + 
			setup.displayVisual("covering it with spit and drool.", "image-intro", givingEntity, "blowjob", "lick"), 
			"You feel " + setup.hisher(givingEntity) + " tongue on your " + rFlair.penis + ", " + 
			setup.displayVisual("covering it with spit and drool.", "image-intro", givingEntity, "blowjob", "lick"),
			"You feel " + setup.hisher(givingEntity) + " tongue on your " + rFlair.penis + ", " + 
			setup.displayVisual("covering it with spit and drool.", "image-intro", givingEntity, "blowjob", "lick")],
			introEntry: setup.random(2),
			mainLines: ["A tingle creeps up through your stomach as " + setup.heshe(givingEntity) + " tastes the tip.",
			"A tingle creeps up through your stomach as " + setup.heshe(givingEntity) + " tastes the tip.",
			"A tingle creeps up through your stomach as " + setup.heshe(givingEntity) + " tastes the tip."],
			mainEntry: setup.random(2),
			outroLines: ["Your gaze meets " + setup.hishers(givingEntity) + ", as " + setup.heshe(givingEntity) + " sends you a suggestive smirk.",
			"Your gaze meets " + setup.hishers(givingEntity) + ", as " + setup.heshe(givingEntity) + " sends you a suggestive smirk.",
			"Your gaze meets " + setup.hishers(givingEntity) + ", as " + setup.heshe(givingEntity) + " sends you a suggestive smirk."],
			outroEntry: setup.random(2),
			givenCount: "givenBlowjobs",
			receivedCount: "receivedBlowjobs",
			stage: "intro",
			tags: ["blowjob-receiving","sensual","default"],
			options: ["lick-receiving-1"],
			requirements: []
		},
		{
			name: "lick-receiving-1",
			buttonText: "Let them lick and suck your cock.",
			introLines: ["You feel " + setup.hisher(givingEntity) + " " + setup.displayVisual("tongue slide along your", "image-main", givingEntity, "blowjob", "lick") + setup.pickNoun(penis) + ", " + 
			setup.hisher(givingEntity) + " hands cupping your balls. A slight twitch takes you as pre-cum oozes from the tip of your " + setup.pickNoun(penis) + ", looking down your eyes meet as " + 
			setup.heshe(givingEntity) + " gobbles it.",
			"You feel " + setup.hisher(givingEntity) + " " + setup.displayVisual("tongue slide along your", "image-main", givingEntity, "blowjob", "lick") + setup.pickNoun(penis) + ", " + 
			setup.hisher(givingEntity) + " hands cupping your balls. A slight twitch takes you as pre-cum oozes from the tip of your " + setup.pickNoun(penis) + ", looking down your eyes meet as " + 
			setup.heshe(givingEntity) + " gobbles it.",
			"You feel " + setup.hisher(givingEntity) + " " + setup.displayVisual("tongue slide along your", "image-main", givingEntity, "blowjob", "lick") + setup.pickNoun(penis) + ", " + 
			setup.hisher(givingEntity) + " hands cupping your balls. A slight twitch takes you as pre-cum oozes from the tip of your " + setup.pickNoun(penis) + ", looking down your eyes meet as " + 
			setup.heshe(givingEntity) + " gobbles it."],
			introEntry: setup.random(2),
			mainLines: ["A light grasp takes hold of your " + setup.pickNoun(penis) + " as " + setup.heshe(givingEntity) + " milks it, " + setup.hisher(givingEntity) + 
			" lips resting on the tip whilst " + setup.hisher(givingEntity) + " other hand fondles your balls. You feel " + setup.hisher(givingEntity) + 
			" lips part and your " + setup.pickNoun(penis) + " slowly entering " + setup.hisher(givingEntity) + " warm, wet and hungry mouth.",
			"A light grasp takes hold of your " + setup.pickNoun(penis) + " as " + setup.heshe(givingEntity) + " milks it, " + setup.hisher(givingEntity) + 
			" lips resting on the tip whilst " + setup.hisher(givingEntity) + " other hand fondles your balls. You feel " + setup.hisher(givingEntity) + 
			" lips part and your " + setup.pickNoun(penis) + " slowly entering " + setup.hisher(givingEntity) + " warm, wet and hungry mouth.",
			"A light grasp takes hold of your " + setup.pickNoun(penis) + " as " + setup.heshe(givingEntity) + " milks it, " + setup.hisher(givingEntity) + 
			" lips resting on the tip whilst " + setup.hisher(givingEntity) + " other hand fondles your balls. You feel " + setup.hisher(givingEntity) + 
			" lips part and your " + setup.pickNoun(penis) + " slowly entering " + setup.hisher(givingEntity) + " warm, wet and hungry mouth."],
			mainEntry: setup.random(2),
			outroLines: ["Your veins brushing against " + setup.hisher(givingEntity) + " lips and the texture making you flex a little from the pleasure." + 
			"Again your eyes meet as " + setup.heshe(givingEntity) + " winks at you, letting you know that your " + setup.pickNoun(penis) + " is " + setup.hishers(givingEntity) + " to play with.",
			"Your veins brushing against " + setup.hisher(givingEntity) + " lips and the texture making you flex a little from the pleasure." + 
			"Again your eyes meet as " + setup.heshe(givingEntity) + " winks at you, letting you know that your " + setup.pickNoun(penis) + " is " + setup.hishers(givingEntity) + " to play with.",
			"Your veins brushing against " + setup.hisher(givingEntity) + " lips and the texture making you flex a little from the pleasure." + 
			"Again your eyes meet as " + setup.heshe(givingEntity) + " winks at you, letting you know that your " + setup.pickNoun(penis) + " is "+ setup.hishers(givingEntity) + " to play with."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["blowjob-receiving","sensual","default"],
			options: ["suck-receiving-0"],
			requirements: []
		},
		{
			name: "suck-receiving-0",
			buttonText: "Let them keep sucking.",
			introLines: ["You feel " + setup.hisher(givingEntity) + " lips run along your shaft as " + setup.heshe(givingEntity) + 
			" sucks, bobbing " + setup.hisher(givingEntity) + " head back and forth. The gulping sounds of " + setup.hisher(givingEntity) + 
			" sloppy, hungry sucking fills your ears as " + setup.heshe(givingEntity) + " gets to work. You grab " + setup.hisher(givingEntity) + 
			setup.displayVisual(" hair to caress, but also to hold on to as your manhood is greedily milked.", "image-outro", givingEntity, "blowjob", "facefuck"),
			"You feel " + setup.hisher(givingEntity) + " lips run along your shaft as " + setup.heshe(givingEntity) + 
			" sucks, bobbing " + setup.hisher(givingEntity) + " head back and forth. The gulping sounds of " + setup.hisher(givingEntity) + 
			" sloppy, hungry sucking fills your ears as " + setup.heshe(givingEntity) + " gets to work. You grab " + setup.hisher(givingEntity) + 
			setup.displayVisual(" hair to caress, but also to hold on to as your manhood is greedily milked.", "image-outro", givingEntity, "blowjob", "facefuck"),
			"You feel " + setup.hisher(givingEntity) + " lips run along your shaft as " + setup.heshe(givingEntity) + 
			" sucks, bobbing " + setup.hisher(givingEntity) + " head back and forth. The gulping sounds of " + setup.hisher(givingEntity) + 
			" sloppy, hungry sucking fills your ears as " + setup.heshe(givingEntity) + " gets to work. You grab " + setup.hisher(givingEntity) + 
			setup.displayVisual(" hair to caress, but also to hold on to as your manhood is greedily milked.", "image-outro", givingEntity, "blowjob", "facefuck")],
			introEntry: setup.random(2),
			mainLines: ["The feeling of " + setup.hisher(givingEntity) + " cheeks grinding against your cockhead takes you back and pushes you over, as you’re coming closer to release." + 
			"A twitch and a building tension in your balls and the base of your " + setup.pickNoun(penis) + ". " + setup.heshe(givingEntity, "B") + " feels your tension, but does not stop.",
			"The feeling of " + setup.hisher(givingEntity) + " cheeks grinding against your cockhead takes you back and pushes you over, as you’re coming closer to release." + 
			"A twitch and a building tension in your balls and the base of your " + setup.pickNoun(penis) + ". " + setup.heshe(givingEntity, "B") + " feels your tension, but does not stop.",
			"The feeling of " + setup.hisher(givingEntity) + " cheeks grinding against your cockhead takes you back and pushes you over, as you’re coming closer to release." + 
			"A twitch and a building tension in your balls and the base of your " + setup.pickNoun(penis) + ". " + setup.heshe(givingEntity, "B") + " feels your tension, but does not stop."],
			mainEntry: setup.random(2),
			outroLines: ["The lips grazing your " + setup.pickNoun(penis) + " grow tighter and relentlessly rocks back and forth, milking you for all of your worth.",
			"The lips grazing your " + setup.pickNoun(penis) + " grow tighter and relentlessly rocks back and forth, milking you for all of your worth.",
			"The lips grazing your " + setup.pickNoun(penis) + " grow tighter and relentlessly rocks back and forth, milking you for all of your worth."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["blowjob-receiving","sensual","default"],
			options: ["blowjob-receiving-climax-facial","blowjob-receiving-climax-swallow"],
			requirements: []
		},
		{
			name: "blowjob-receiving-climax-facial",
			buttonText: "Cum all over their face.",
			introLines: ["With a loud sloppy sound your " + setup.pickNoun(penis) + " plops out of " + setup.hisher(givingEntity) + 
			setup.displayVisual(" virgin mouth and explodes all over ", "image-climax", receivingEntity, "climax", "facial") + setup.hisher(givingEntity) + " face, covering it in your seed.",
			"With a loud sloppy sound your " + setup.pickNoun(penis) + " plops out of " + setup.hisher(givingEntity) + 
			setup.displayVisual(" virgin mouth and explodes all over ", "image-climax", receivingEntity, "climax", "facial") + setup.hisher(givingEntity) + " face, covering it in your seed.",
			"With a loud sloppy sound your " + setup.pickNoun(penis) + " plops out of " + setup.hisher(givingEntity) + 
			setup.displayVisual(" virgin mouth and explodes all over ", "image-climax", receivingEntity, "climax", "facial") + setup.hisher(givingEntity) + " face, covering it in your seed."],
			introEntry: setup.random(2),
			mainLines: ["Strings of cum land across " + setup.hisher(givingEntity) + " nose, lips, some in " + setup.hisher(givingEntity) + " mouth and a bit on " + setup.hisher(givingEntity) + " forehead.",
			"Strings of cum land across " + setup.hisher(givingEntity) + " nose, lips, some in " + setup.hisher(givingEntity) + " mouth and a bit on " + setup.hisher(givingEntity) + " forehead.",
			"Strings of cum land across " + setup.hisher(givingEntity) + " nose, lips, some in " + setup.hisher(givingEntity) + " mouth and a bit on " + setup.hisher(givingEntity) + " forehead."],
			mainEntry: setup.random(2),
			outroLines: ["You slap your " + setup.pickNoun(penis) + " unto " + setup.hisher(givingEntity) + " cum-covered lips, drying the last bit of jizz on their cheeks." + 
			"You watch them scoop of globs of jizz from " + setup.hisher(givingEntity) + " slightly shocked, cum-covered face.",
			"You slap your " + setup.pickNoun(penis) + " unto " + setup.hisher(givingEntity) + " cum-covered lips, drying the last bit of jizz on their cheeks." + 
			"You watch them scoop of globs of jizz from " + setup.hisher(givingEntity) + " slightly shocked, cum-covered face.",
			"You slap your " + setup.pickNoun(penis) + " unto " + setup.hisher(givingEntity) + " cum-covered lips, drying the last bit of jizz on their cheeks." + 
			"You watch them scoop of globs of jizz from " + setup.hisher(givingEntity) + " slightly shocked, cum-covered face."],
			outroEntry: setup.random(2),
			givenCount: "receivedFacial",
			receivedCount: "givenFacial",
			stage: "climax",
			tags: ["blowjob-receiving","facial","sensual","default"],
			options: [],
			requirements: []
		},
		{
			name: "blowjob-receiving-climax-swallow",
			buttonText: "Cum in their mouth.",
			introLines: ["You feel a pressure build in your " + rFlair.penis + ", only to be released as cum shoots out of your " + setup.pickNoun(penis) + ". Before " + setup.heshe(givingEntity) +  
			" can react " + setup.hisher(givingEntity) + " mouth is filled to the brim with your salty seed." + 
			" Caught by surprise " + setup.heshe(givingEntity) + " gags as " + setup.hisher(givingEntity) + setup.displayVisual(" mouth is defiled by your cum.", "image-climax", receivingEntity, "climax", "swallow"),
			"You feel a pressure build in your " + rFlair.penis + ", only to be released as cum shoots out of your " + setup.pickNoun(penis) + ". Before " + setup.heshe(givingEntity) +  
			" can react " + setup.hisher(givingEntity) + " mouth is filled to the brim with your salty seed." + 
			" Caught by surprise " + setup.heshe(givingEntity) + " gags as " + setup.hisher(givingEntity) + setup.displayVisual(" mouth is defiled by your cum.", "image-climax", receivingEntity, "climax", "swallow"),
			"You feel a pressure build in your " + rFlair.penis + ", only to be released as cum shoots out of your " + setup.pickNoun(penis) + ". Before " + setup.heshe(givingEntity) +  
			" can react " + setup.hisher(givingEntity) + " mouth is filled to the brim with your salty seed." + 
			" Caught by surprise " + setup.heshe(givingEntity) + " gags as " + setup.hisher(givingEntity) + setup.displayVisual(" mouth is defiled by your cum.", "image-climax", receivingEntity, "climax", "swallow")],
			introEntry: setup.random(2),
			mainLines: ["The cum overflows from " + setup.hisher(givingEntity) + " mouth and trails down along " + setup.hisher(givingEntity) + 
			" cheeks and chin, giving " + setup.himher(givingEntity) + " the depraved look of some back-alley fuckhole.",
			"The cum overflows from " + setup.hisher(givingEntity) + " mouth and trails down along " + setup.hisher(givingEntity) + 
			" cheeks and chin, giving " + setup.himher(givingEntity) + " the depraved look of some back-alley fuckhole.",
			"The cum overflows from " + setup.hisher(givingEntity) + " mouth and trails down along " + setup.hisher(givingEntity) + 
			" cheeks and chin, giving " + setup.himher(givingEntity) + " the depraved look of some back-alley fuckhole."],
			mainEntry: setup.random(2),
			outroLines: ["You feel your " + setup.pickNoun(penis) + " slide out and exit " + setup.hisher(givingEntity) + " mouth, the cum leaving a trail along " + 
			setup.hisher(givingEntity) + " tongue, making " + setup.himher(givingEntity) + " spit and gag.",
			"You feel your " + setup.pickNoun(penis) + " slide out and exit " + setup.hisher(givingEntity) + " mouth, the cum leaving a trail along " + 
			setup.hisher(givingEntity) + " tongue, making " + setup.himher(givingEntity) + " spit and gag.",
			"You feel your " + setup.pickNoun(penis) + " slide out and exit " + setup.hisher(givingEntity) + " mouth, the cum leaving a trail along " + 
			setup.hisher(givingEntity) + " tongue, making " + setup.himher(givingEntity) + " spit and gag."],
			outroEntry: setup.random(2),
			givenCount: "receivedSwallow",
			receivedCount: "givenSwallow",
			stage: "climax",
			tags: ["blowjob-receiving","swallow","sensual","default"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Blowjob(receiving) Scenes.");
	} else if (perspective == "cunnilingus-receiving") {
		var scenes = [
		{
			name: "lick-receiving-0",
			buttonText: "",
			introLines: ["You move closer to each other until " + setup.displayVisual("your lips meet and your tongue explores ", "image-intro", receivingEntity, "cunnilingus", "kiss") + 
			setup.himher(givingEntity) + ".", 
			"You move closer to each other until " + setup.displayVisual("your lips meet and your tongue explores ", "image-intro", receivingEntity, "cunnilingus", "kiss") + 
			setup.himher(givingEntity) + ".",
			"You move closer to each other until " + setup.displayVisual("your lips meet and your tongue explores ", "image-intro", receivingEntity, "cunnilingus", "kiss") + 
			setup.himher(givingEntity) + "."],
			introEntry: setup.random(2),
			mainLines: [setup.heshe(givingEntity, "B") + " caress you and trail your " + setup.hisher(givingEntity) + " hand along your stomach.",
			setup.heshe(givingEntity, "B") + " caress you and trail your " + setup.hisher(givingEntity) + " hand along your stomach.",
			setup.heshe(givingEntity, "B") + " caress you and trail your " + setup.hisher(givingEntity) + " hand along your stomach."],
			mainEntry: setup.random(2),
			outroLines: [setup.heshe(givingEntity, "B") + " begins to kiss your neck, moving slowly downwards to your chest, then stomach and finally your thighs.",
			setup.heshe(givingEntity, "B") + " begins to kiss your neck, moving slowly downwards to your chest, then stomach and finally your thighs.",
			setup.heshe(givingEntity, "B") + " begins to kiss your neck, moving slowly downwards to your chest, then stomach and finally your thighs."],
			outroEntry: setup.random(2),
			givenCount: "givenCunnilingus",
			receivedCount: "receivedCunnilingus",
			stage: "intro",
			tags: ["cunnilingus-receiving","sensual","default"],
			options: ["lick-receiving-1"],
			requirements: []
		},
		{
			name: "lick-receiving-1",
			buttonText: "Let " + setup.himher(givingEntity) + " kiss your pussy.",
			introLines: [setup.heshe(givingEntity, "B") + " lips meet your " + rFlair.vagina + "," + 
			setup.displayVisual(" kissing it as " + setup.heshe(givingEntity) + " trails " + setup.hisher(givingEntity) + " fingers along ", "image-main", receivingEntity, "cunnilingus", "pussy-kiss") + 
			"your " + rFlair.ass + " and thighs.",
			setup.heshe(givingEntity, "B") + " lips meet your " + rFlair.vagina + "," + 
			setup.displayVisual(" kissing it as " + setup.heshe(givingEntity) + " trails " + setup.hisher(givingEntity) + " fingers along ", "image-main", receivingEntity, "cunnilingus", "pussy-kiss") + 
			"your " + rFlair.ass + " and thighs.",
			setup.heshe(givingEntity, "B") + " lips meet your " + rFlair.vagina + "," + 
			setup.displayVisual(" kissing it as " + setup.heshe(givingEntity) + " trails " + setup.hisher(givingEntity) + " fingers along ", "image-main", receivingEntity, "cunnilingus", "pussy-kiss") + 
			"your " + rFlair.ass + " and thighs."],
			introEntry: setup.random(2),
			mainLines: ["Your moans grow louder as a heat spreads from your loins, slowly creeping up your body, filling you with wanton need.",
			"Your moans grow louder as a heat spreads from your loins, slowly creeping up your body, filling you with wanton need.",
			"Your moans grow louder as a heat spreads from your loins, slowly creeping up your body, filling you with wanton need."],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(givingEntity, "B") + " tongue graces your " + setup.pickNoun(vagina) + "-lips, tasting your lush juices.",
			setup.hisher(givingEntity, "B") + " tongue graces your " + setup.pickNoun(vagina) + "-lips, tasting your lush juices.",
			setup.hisher(givingEntity, "B") + " tongue graces your " + setup.pickNoun(vagina) + "-lips, tasting your lush juices."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["cunnilingus-giving","sensual","default"],
			options: ["lick-receiving-2"],
			requirements: []
		},
		{
			name: "lick-receiving-2",
			buttonText: "Let " + setup.hisher(givingEntity) + " tongue do the work.",
			introLines: [setup.heshe(givingEntity, "B") + " bobs " + setup.hisher(givingEntity) + " head back and forth licking your " + setup.pickNoun(vagina) + 
			", whilst not being overly sloppy with the saliva escaping " + setup.hisher(givingEntity) + " mouth.", 
			setup.heshe(givingEntity, "B") + " bobs " + setup.hisher(givingEntity) + " head back and forth licking your " + setup.pickNoun(vagina) + 
			", whilst not being overly sloppy with the saliva escaping " + setup.hisher(givingEntity) + " mouth.",
			setup.heshe(givingEntity, "B") + " bobs " + setup.hisher(givingEntity) + " head back and forth licking your " + setup.pickNoun(vagina) + 
			", whilst not being overly sloppy with the saliva escaping " + setup.hisher(givingEntity) + " mouth."],
			introEntry: setup.random(2),
			mainLines: [setup.displayVisual(setup.heshe(givingEntity, "B") + " lets " + setup.hisher(givingEntity) + " tongue escape " + setup.hisher(givingEntity) + 
			" mouth only to explore ", "image-outro", receivingEntity, "cunnilingus", "pussy-lick") + 
			"your " + setup.pickNoun(vagina) + " again.",
			setup.displayVisual(setup.heshe(givingEntity, "B") + " lets " + setup.hisher(givingEntity) + " tongue escape " + setup.hisher(givingEntity) + 
			" mouth only to explore ", "image-outro", receivingEntity, "cunnilingus", "pussy-lick") + 
			"your " + setup.pickNoun(vagina) + " again.",
			setup.displayVisual(setup.heshe(givingEntity, "B") + " lets " + setup.hisher(givingEntity) + " tongue escape " + setup.hisher(givingEntity) + 
			" mouth only to explore ", "image-outro", receivingEntity, "cunnilingus", "pussy-lick") + 
			"your " + setup.pickNoun(vagina) + " again."],
			mainEntry: setup.random(2),
			outroLines: ["Your body twitches and pulses, forcing " + setup.himher(givingEntity) + " to latch unto you as you come closer to release.",
			"Your body twitches and pulses, forcing " + setup.himher(givingEntity) + " to latch unto you as you come closer to release.",
			"Your body twitches and pulses, forcing " + setup.himher(givingEntity) + " to latch unto you as you come closer to release."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["cunnilingus-receiving","sensual","default"],
			options: ["cunnilingus-receiving-climax"],
			requirements: []
		},
		{
			name: "cunnilingus-receiving-climax",
			buttonText: "Let go and cum.",
			introLines: ["With your broken moans becoming louder, " + setup.heshe(givingEntity) + " does not let go and continues to please you.",
			"With your broken moans becoming louder, " + setup.heshe(givingEntity) + " does not let go and continues to please you.",
			"With your broken moans becoming louder, " + setup.heshe(givingEntity) + " does not let go and continues to please you."],
			introEntry: setup.random(2),
			mainLines: [setup.displayVisual("Both of your body curls as you tremble and squirt all over " + setup.himher(givingEntity) + ", covering " + setup.himher(givingEntity) + 
			" in your lush juices.", "image-climax", receivingEntity, "cunnilingus", "orgasm"),
			setup.displayVisual("Both of your body curls as you tremble and squirt all over " + setup.himher(givingEntity) + ", covering " + setup.himher(givingEntity) + 
			" in your lush juices.", "image-climax", receivingEntity, "cunnilingus", "orgasm"),
			setup.displayVisual("Both of your body curls as you tremble and squirt all over " + setup.himher(givingEntity) + ", covering " + setup.himher(givingEntity) + 
			" in your lush juices.", "image-climax", receivingEntity, "cunnilingus", "orgasm")],
			mainEntry: setup.random(2),
			outroLines: ["You both catch your breath.",
			"You both catch your breath.",
			"You both catch your breath."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "climax",
			tags: ["cunnilingus-receiving","sensual","default"],
			options: [],
			requirements: []
		}];
		console.log("Returned: Cunnilingus(receiving) Scenes.");
	} else if (perspective == "penis-sex") {
		var scenes = [
		{
			name: "penis-sex-0",
			buttonText: "",
			introLines: [setup.heshe(receivingEntity, "B") + " lies down and spreads " + setup.hisher(receivingEntity) + 
			" legs timidly with your hands grabbing and guiding " + setup.himher(receivingEntity) + " into position.",
			setup.heshe(receivingEntity, "B") + " lies down and spreads " + setup.hisher(receivingEntity) + 
			" legs timidly with your hands grabbing and guiding " + setup.himher(receivingEntity) + " into position.",
			setup.heshe(receivingEntity, "B") + " lies down and spreads " + setup.hisher(receivingEntity) + 
			" legs timidly with your hands grabbing and guiding " + setup.himher(receivingEntity) + " into position."],
			introEntry: setup.random(2),
			mainLines: ["You lick your lips as you push your " + setup.pickNoun(penis) + " towards " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + 
			". A tingle spreads at the tip of your " + setup.pickNoun(penis) + " as you feel " + setup.hisher(receivingEntity) + " soft pussy lips caress you." + 
			"A warm feeling swallows your " + setup.pickNoun(penis) + " as you enter " + setup.himher(receivingEntity) + ", slowly engulfing your entire shaft as you stretch " + setup.himher(receivingEntity) + 
			setup.displayVisual(" out to better accommodate your member.", "image-intro", givingEntity, "sex", "prodding"),
			"You lick your lips as you push your " + setup.pickNoun(penis) + " towards " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + 
			". A tingle spreads at the tip of your " + setup.pickNoun(penis) + " as you feel " + setup.hisher(receivingEntity) + " soft pussy lips caress you." + 
			"A warm feeling swallows your " + setup.pickNoun(penis) + " as you enter " + setup.himher(receivingEntity) + ", slowly engulfing your entire shaft as you stretch " + setup.himher(receivingEntity) + 
			setup.displayVisual(" out to better accommodate your member.", "image-intro", givingEntity, "sex", "prodding"),
			"You lick your lips as you push your " + setup.pickNoun(penis) + " towards " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + 
			". A tingle spreads at the tip of your " + setup.pickNoun(penis) + " as you feel " + setup.hisher(receivingEntity) + " soft pussy lips caress you." + 
			"A warm feeling swallows your " + setup.pickNoun(penis) + " as you enter " + setup.himher(receivingEntity) + ", slowly engulfing your entire shaft as you stretch " + setup.himher(receivingEntity) + 
			setup.displayVisual(" out to better accommodate your member.", "image-intro", givingEntity, "sex", "prodding")],
			mainEntry: setup.random(2),
			outroLines: ["A soft moan escapes " + setup.himher(receivingEntity) + " as you bottom out inside " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + ".",
			"A soft moan escapes " + setup.himher(receivingEntity) + " as you bottom out inside " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + ".",
			"A soft moan escapes " + setup.himher(receivingEntity) + " as you bottom out inside " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "."],
			outroEntry: setup.random(2),
			givenCount: "givenVaginal",
			receivedCount: "receivedVaginal",
			stage: "intro",
			tags: ["penis-sex","sensual","default"],
			options: ["penis-sex-slow","penis-sex-fast"],
			requirements: []
		},
		{
			name: "penis-sex-slow",
			buttonText: "Force your " + setup.pickNoun(penis) + " inside " + setup.himher(receivingEntity) + " slowly.",
			introLines: ["Your eyes meet as you take things by slowly pulling out, then forcing yourself inside again," + 
			setup.displayVisual(" with slow rhythmic thrusts.", "image-main", receivingEntity, "sex", "slow"),
			"Your eyes meet as you take things by slowly pulling out, then forcing yourself inside again," + 
			setup.displayVisual(" with slow rhythmic thrusts.", "image-main", receivingEntity, "sex", "slow"),
			"Your eyes meet as you take things by slowly pulling out, then forcing yourself inside again," + 
			setup.displayVisual(" with slow rhythmic thrusts.", "image-main", receivingEntity, "sex", "slow")],
			introEntry: setup.random(2),
			mainLines: ["You feel " + setup.hisher(receivingEntity) + " " + rFlair.vagina + 
			" slowly loosening and opening up, taking your " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(receivingEntity) + " " + rFlair.vagina + 
			" slowly loosening and opening up, taking your " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(receivingEntity) + " " + rFlair.vagina + 
			" slowly loosening and opening up, taking your " + setup.pickNoun(penis) + " with more ease.",],
			mainEntry: setup.random(2),
			outroLines: ["The texture of " + setup.hisher(receivingEntity) + setup.pickNoun(vagina) + " grinds against your " + gFlair.penis + 
			", making you grunt in pleasure as it milks you for all your worth.",
			"The texture of " + setup.hisher(receivingEntity) + setup.pickNoun(vagina) + " grinds against your " + gFlair.penis + 
			", making you grunt in pleasure as it milks you for all your worth.",
			"The texture of " + setup.hisher(receivingEntity) + setup.pickNoun(vagina) + " grinds against your " + gFlair.penis + 
			", making you grunt in pleasure as it milks you for all your worth.",],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["penis-sex","sensual","default"],
			options: ["penis-sex-press","penis-sex-doggy"],
			requirements: []
		},
		{
			name: "penis-sex-fast",
			buttonText: "Pick up the pace.",
			introLines: ["You waste no time and immediately pick up the pace, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " to loosen up.",
			"You waste no time and immediately pick up the pace, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " to loosen up.",
			"You waste no time and immediately pick up the pace, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " to loosen up.",],
			introEntry: setup.random(2),
			mainLines: ["You smile at " + setup.himher(receivingEntity) + " as your " + setup.pickNoun(penis) + " fills " + setup.hisher(receivingEntity) + 
			" " + rFlair.vagina + setup.displayVisual(" at a steady rocking pace, slamming your ", "image-main", receivingEntity, "sex", "fast") + 
			" hips against " + setup.hisher(receivingEntity) + " " + rFlair.ass + ".",
			"You smile at " + setup.himher(receivingEntity) + " as your " + setup.pickNoun(penis) + " fills " + setup.hisher(receivingEntity) + 
			" " + rFlair.vagina + setup.displayVisual(" at a steady rocking pace, slamming your ", "image-main", receivingEntity, "sex", "fast") + 
			" hips against " + setup.hisher(receivingEntity) + " " + rFlair.ass + ".",
			"You smile at " + setup.himher(receivingEntity) + " as your " + setup.pickNoun(penis) + " fills " + setup.hisher(receivingEntity) + 
			" " + rFlair.vagina + setup.displayVisual(" at a steady rocking pace, slamming your ", "image-main", receivingEntity, "sex", "fast") + 
			" hips against " + setup.hisher(receivingEntity) + " " + rFlair.ass + "."],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(receivingEntity, "B") + " wanton moaning fills your ears, breaking every now and then as you push " + 
			setup.himher(receivingEntity) + " over the edge, forcing " + setup.himher(receivingEntity) + " to flex from the raw fucking.",
			setup.hisher(receivingEntity, "B") + " wanton moaning fills your ears, breaking every now and then as you push " + 
			setup.himher(receivingEntity) + " over the edge, forcing " + setup.himher(receivingEntity) + " to flex from the raw fucking.",
			setup.hisher(receivingEntity, "B") + " wanton moaning fills your ears, breaking every now and then as you push " + 
			setup.himher(receivingEntity) + " over the edge, forcing " + setup.himher(receivingEntity) + " to flex from the raw fucking.",],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["penis-sex","sensual","default"],
			options: ["penis-sex-press","penis-sex-doggy"],
			requirements: []
		},
		{
			name: "penis-sex-press",
			buttonText: "Press and pound " + setup.himher(receivingEntity) + " harder.",
			introLines: ["You place your hands on " + setup.hisher(receivingEntity) + setup.displayVisual(" soft thighs and push down gently. ", "image-outro", receivingEntity, "sex", "rough") + 
			"Flexing your entire body, you pick up the pace and pound " + setup.himher(receivingEntity) + " with raw fervor.",
			"You place your hands on " + setup.hisher(receivingEntity) + setup.displayVisual(" soft thighs and push down gently. ", "image-outro", receivingEntity, "sex", "rough") + 
			"Flexing your entire body, you pick up the pace and pound " + setup.himher(receivingEntity) + " with raw fervor.",
			"You place your hands on " + setup.hisher(receivingEntity) + setup.displayVisual(" soft thighs and push down gently. ", "image-outro", receivingEntity, "sex", "rough") + 
			"Flexing your entire body, you pick up the pace and pound " + setup.himher(receivingEntity) + " with raw fervor."],
			introEntry: setup.random(2),
			mainLines: [setup.hisher(receivingEntity, "B") + " " + rFlair.vagina + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			setup.hisher(receivingEntity, "B") + " " + rFlair.vagina + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			setup.hisher(receivingEntity, "B") + " " + rFlair.vagina + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["penis-sex","sensual","default"],
			options: ["sex-penis-climax-vaginalcreampie","sex-penis-climax-vaginal-cover"],
			requirements: []
		},
		{
			name: "penis-sex-doggy",
			buttonText: "Turn " + setup.himher(receivingEntity) + " and take " + setup.himher(receivingEntity) + " from behind.",
			introLines: ["You direct " + setup.himher(receivingEntity) + " to turn around and place your hands on " + setup.hisher(receivingEntity) + " hips. " + 
			"Then place your " + setup.pickNoun(penis) + " at " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "-entrance.",
			"You direct " + setup.himher(receivingEntity) + " to turn around and place your hands on " + setup.hisher(receivingEntity) + " hips. " + 
			"Then place your " + setup.pickNoun(penis) + " at " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "-entrance.",
			"You direct " + setup.himher(receivingEntity) + " to turn around and place your hands on " + setup.hisher(receivingEntity) + " hips. " + 
			"Then place your " + setup.pickNoun(penis) + " at " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + "-entrance.",],
			introEntry: setup.random(2),
			mainLines: ["You quickly enter " + setup.himher(receivingEntity) + setup.displayVisual(" and pound her wanton cunt. ", "image-outro", receivingEntity, "sex", "doggy") + 
			setup.hisher(receivingEntity, "B") + " " + rFlair.vagina + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			"You quickly enter " + setup.himher(receivingEntity) + setup.displayVisual(" and pound her wanton cunt. ", "image-outro", receivingEntity, "sex", "doggy") + 
			setup.hisher(receivingEntity, "B") + " " + rFlair.vagina + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			"You quickly enter " + setup.himher(receivingEntity) + setup.displayVisual(" and pound her wanton cunt. ", "image-outro", receivingEntity, "sex", "doggy") + 
			setup.hisher(receivingEntity, "B") + " " + rFlair.vagina + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release."],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["penis-sex","sensual","default"],
			options: ["sex-penis-climax-vaginalcreampie","sex-penis-climax-vaginal-cover"],
			requirements: []
		},
		{
			name: "sex-penis-climax-vaginalcreampie",
			buttonText: "Fill up " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + ".",
			introLines: ["You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + setup.pickNoun(vagina) + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + setup.pickNoun(vagina) + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + setup.pickNoun(vagina) + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams."],
			introEntry: setup.random(2),
			mainLines: ["A pressure builds up in your " + setup.pickNoun(penis) + ", which is quickly released in an explosion of ecstasy" +
			setup.displayVisual(" as you fill " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " with your seed.", "image-climax", receivingEntity, "climax", "vaginal-creampie"),
			"A pressure builds up in your " + setup.pickNoun(penis) + ", which is quickly released in an explosion of ecstasy" +
			setup.displayVisual(" as you fill " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " with your seed.", "image-climax", receivingEntity, "climax", "vaginal-creampie"),
			"A pressure builds up in your " + setup.pickNoun(penis) + ", which is quickly released in an explosion of ecstasy" +
			setup.displayVisual(" as you fill " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " with your seed.", "image-climax", receivingEntity, "climax", "vaginal-creampie")],
			mainEntry: setup.random(2),
			outroLines: ["The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" inner thighs as you fill " + setup.hisher(receivingEntity) + " up completely, giving " + setup.hisher(receivingEntity) + 
			" your last thrusts before you pull out, despite " + setup.hisher(receivingEntity) + " moaning protests. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" inner thighs as you fill " + setup.hisher(receivingEntity) + " up completely, giving " + setup.hisher(receivingEntity) + 
			" your last thrusts before you pull out, despite " + setup.hisher(receivingEntity) + " moaning protests. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" inner thighs as you fill " + setup.hisher(receivingEntity) + " up completely, giving " + setup.hisher(receivingEntity) + 
			" your last thrusts before you pull out, despite " + setup.hisher(receivingEntity) + " moaning protests. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose."],
			outroEntry: setup.random(2),
			givenCount: "givenVaginalCreampie",
			receivedCount: "receivedVaginalCreampie",
			stage: "climax",
			tags: ["penis-sex","vaginal-creampie","default"],
			options: [],
			requirements: []
		},
		{
			name: "sex-penis-climax-vaginal-cover",
			buttonText: "Cover " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + " with your cum.",
			introLines: ["You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.vagina + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.vagina + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.vagina + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams."],
			introEntry: setup.random(2),
			mainLines: ["A pressure builds up in your " + setup.pickNoun(penis) + " and you quickly pull out before exploding in an ecstasy of pleasure. Your seed " +
			setup.displayVisual("lands all over " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + ".", "image-climax", receivingEntity, "climax", "vaginal-cover"),
			"A pressure builds up in your " + setup.pickNoun(penis) + " and you quickly pull out before exploding in an ecstasy of pleasure. Your seed " +
			setup.displayVisual("lands all over " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + ".", "image-climax", receivingEntity, "climax", "vaginal-cover"),
			"A pressure builds up in your " + setup.pickNoun(penis) + " and you quickly pull out before exploding in an ecstasy of pleasure. Your seed " +
			setup.displayVisual("lands all over " + setup.hisher(receivingEntity) + " " + setup.pickNoun(vagina) + ".", "image-climax", receivingEntity, "climax", "vaginal-cover")],
			mainEntry: setup.random(2),
			outroLines: ["The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" thighs as the last spurts lands on " + setup.hisher(receivingEntity) + " pussy lips. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" thighs as the last spurts lands on " + setup.hisher(receivingEntity) + " pussy lips. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" thighs as the last spurts lands on " + setup.hisher(receivingEntity) + " pussy lips. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "climax",
			tags: ["penis-sex","sensual","default","vaginal-cover"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Penis(sex) Scenes.");
	} else if (perspective == "vaginal-sex") {
		var scenes = [
		{
			name: "vaginal-sex-0",
			buttonText: "",
			introLines: ["You lie down and spread your legs timidly, feeling " + setup.hisher(givingEntity) + " hands grab and guide you into position. " + setup.heshe(givingEntity, "B") + 
			" licks " + setup.hisher(givingEntity) + " lips as " + setup.heshe(givingEntity) + " playfully pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " towards your " + rFlair.vagina + ".",
			"You lie down and spread your legs timidly, feeling " + setup.hisher(givingEntity) + " hands grab and guide you into position. " + setup.heshe(givingEntity, "B") + 
			" licks " + setup.hisher(givingEntity) + " lips as " + setup.heshe(givingEntity) + " playfully pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " towards your " + rFlair.vagina + ".",
			"You lie down and spread your legs timidly, feeling " + setup.hisher(givingEntity) + " hands grab and guide you into position. " + setup.heshe(givingEntity, "B") + 
			" licks " + setup.hisher(givingEntity) + " lips as " + setup.heshe(givingEntity) + " playfully pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " towards your " + rFlair.vagina + ".",],
			introEntry: setup.random(2),
			mainLines: ["A pressure builds at the entrance to your " + setup.pickNoun(vagina) + " as " + setup.heshe(givingEntity) + " slowly pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + 
			setup.displayVisual(" inside you, stretching you out to accommodate ", "image-intro", givingEntity, "sex", "prodding") + setup.hisher(givingEntity) + " member.",
			"A pressure builds at the entrance to your " + setup.pickNoun(vagina) + " as " + setup.heshe(givingEntity) + " slowly pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + 
			setup.displayVisual(" inside you, stretching you out to accommodate ", "image-intro", givingEntity, "sex", "prodding") + setup.hisher(givingEntity) + " member.",
			"A pressure builds at the entrance to your " + setup.pickNoun(vagina) + " as " + setup.heshe(givingEntity) + " slowly pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + 
			setup.displayVisual(" inside you, stretching you out to accommodate ", "image-intro", givingEntity, "sex", "prodding") + setup.hisher(givingEntity) + " member."],
			mainEntry: setup.random(2),
			outroLines: ["A soft moan escapes you, mixed with pleasure and pain as " + setup.heshe(givingEntity) + " fills you with " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + ".",
			"A soft moan escapes you, mixed with pleasure and pain as " + setup.heshe(givingEntity) + " fills you with " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + ".",
			"A soft moan escapes you, mixed with pleasure and pain as " + setup.heshe(givingEntity) + " fills you with " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + "."],
			outroEntry: setup.random(2),
			givenCount: "givenVaginal",
			receivedCount: "receivedVaginal",
			stage: "intro",
			tags: ["vaginal-sex","sensual","default"],
			options: ["vaginal-sex-slow","vaginal-sex-fast"],
			requirements: []
		},
		{
			name: "vaginal-sex-slow",
			buttonText: "Let " + setup.himher(givingEntity) + " take you slowly.",
			introLines: ["Your eyes meet as " + setup.heshe(givingEntity) + " takes things further by slowly pulling out, then forcing " + 
			setup.himselfherself(givingEntity) + " inside again, with slow rhythmic thrusts. You feel your " + setup.pickNoun(vagina) +  
			setup.displayVisual(" slowly loosening and opening up.", "image-main", receivingEntity, "sex", "slow"),
			"Your eyes meet as " + setup.heshe(givingEntity) + " takes things further by slowly pulling out, then forcing " + 
			setup.himselfherself(givingEntity) + " inside again, with slow rhythmic thrusts. You feel your " + setup.pickNoun(vagina) +  
			setup.displayVisual(" slowly loosening and opening up.", "image-main", receivingEntity, "sex", "slow"),
			"Your eyes meet as " + setup.heshe(givingEntity) + " takes things further by slowly pulling out, then forcing " + 
			setup.himselfherself(givingEntity) + " inside again, with slow rhythmic thrusts. You feel your " + setup.pickNoun(vagina) +  
			setup.displayVisual(" slowly loosening and opening up.", "image-main", receivingEntity, "sex", "slow")],
			introEntry: setup.random(2),
			mainLines: ["You feel " + setup.hisher(givingEntity) + " " + rFlair.penis + 
			" slowly loosening you up, taking " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(givingEntity) + " " + rFlair.penis + 
			" slowly loosening you up, taking " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(givingEntity) + " " + rFlair.penis + 
			" slowly loosening you up, taking " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " with more ease."],
			mainEntry: setup.random(2),
			outroLines: ["The texture of your " + setup.pickNoun(vagina) + " grinds against " + setup.hisher(givingEntity) + " " + gFlair.penis + 
			", making " + setup.himher(givingEntity) + " grunt in pleasure as you milk " + setup.himher(givingEntity) + " for all " + setup.hisher(givingEntity) + " worth.",
			"The texture of your " + setup.pickNoun(vagina) + " grinds against " + setup.hisher(givingEntity) + " " + gFlair.penis + 
			", making " + setup.himher(givingEntity) + " grunt in pleasure as you milk " + setup.himher(givingEntity) + " for all " + setup.hisher(givingEntity) + " worth.",
			"The texture of your " + setup.pickNoun(vagina) + " grinds against " + setup.hisher(givingEntity) + " " + gFlair.penis + 
			", making " + setup.himher(givingEntity) + " grunt in pleasure as you milk " + setup.himher(givingEntity) + " for all " + setup.hisher(givingEntity) + " worth."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["vaginal-sex","sensual","default"],
			options: ["vaginal-sex-press","vaginal-sex-doggy"],
			requirements: []
		},
		{
			name: "vaginal-sex-fast",
			buttonText: "Let " + setup.himher(givingEntity) + " pick up the pace.",
			introLines: [setup.heshe(givingEntity, "B") + " wastes no time and immediately picks up the pace, forcing your " + setup.pickNoun(vagina) + " to loosen up.",
			setup.heshe(givingEntity, "B") + " wastes no time and immediately picks up the pace, forcing your " + setup.pickNoun(vagina) + " to loosen up.",
			setup.heshe(givingEntity, "B") + " wastes no time and immediately picks up the pace, forcing your " + setup.pickNoun(vagina) + " to loosen up."],
			introEntry: setup.random(2),
			mainLines: [setup.hisher(givingEntity, "B") + " " + gFlair.penis + " fills your " + rFlair.vagina + 
			setup.displayVisual(" at a steady rocking pace, slamming you ", "image-main", receivingEntity, "sex", "fast") +  "as " + setup.hisher(givingEntity) + " hips connect with your " + rFlair.ass + ".",
			setup.hisher(givingEntity, "B") + " " + gFlair.penis + " fills your " + rFlair.vagina + 
			setup.displayVisual(" at a steady rocking pace, slamming you ", "image-main", receivingEntity, "sex", "fast") +  "as " + setup.hisher(givingEntity) + " hips connect with your " + rFlair.ass + ".",
			setup.hisher(givingEntity, "B") + " " + gFlair.penis + " fills your " + rFlair.vagina + 
			setup.displayVisual(" at a steady rocking pace, slamming you ", "image-main", receivingEntity, "sex", "fast") +  "as " + setup.hisher(givingEntity) + " hips connect with your " + rFlair.ass + "."],
			mainEntry: setup.random(2),
			outroLines: ["You moan with each slam, pushing you over the edge, forcing you to flex your entire body in response.",
			"A warming sensation crawls up to your stomach and down your legs, as the pleasure slowly replaces the pain, making you blush as you\'re taken and driven with pleasure.",
			"A warming sensation crawls up to your stomach and down your legs, as the pleasure slowly replaces the pain, making you blush as you\'re taken and driven with pleasure."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["vaginal-sex","sensual","default"],
			options: ["vaginal-sex-press","vaginal-sex-doggy"],
			requirements: []
		},
		{
			name: "vaginal-sex-press",
			buttonText: "Rock your hips against " + setup.himher(givingEntity) + ".",
			introLines: ["You feel " + setup.hisher(givingEntity) + " hands grabbing your legs, pushing you down. " + 
			"The pounding becoming harder making your " + setup.pickNoun(vagina) + setup.displayVisual(" scream with raw fervor.", "image-outro", receivingEntity, "sex", "rough"),
			"You feel " + setup.hisher(givingEntity) + " hands grabbing your legs, pushing you down. " + 
			"The pounding becoming harder making your " + setup.pickNoun(vagina) + setup.displayVisual(" scream with raw fervor.", "image-outro", receivingEntity, "sex", "rough"),
			"You feel " + setup.hisher(givingEntity) + " hands grabbing your legs, pushing you down. " + 
			"The pounding becoming harder making your " + setup.pickNoun(vagina) + setup.displayVisual(" scream with raw fervor.", "image-outro", receivingEntity, "sex", "rough")],
			introEntry: setup.random(2),
			mainLines: ["Your body tries to follow " + setup.hisher(givingEntity) + " movements as " + setup.heshe(givingEntity) + 
			" pushes down like a press. Forcing your body to rock its hips almost instinctively like a hungry whore.",
			"Your body tries to follow " + setup.hisher(givingEntity) + " movements as " + setup.heshe(givingEntity) + 
			" pushes down like a press. Forcing your body to rock its hips almost instinctively like a hungry whore.",
			"Your body tries to follow " + setup.hisher(givingEntity) + " movements as " + setup.heshe(givingEntity) + 
			" pushes down like a press. Forcing your body to rock its hips almost instinctively like a hungry whore.",],
			mainEntry: setup.random(2),
			outroLines: ["Your moaning getting deeper and more wild as a lusting heat spreads all around your body like a furnace.",
			"Your moaning getting deeper and more wild as a lusting heat spreads all around your body like a furnace.",
			"Your moaning getting deeper and more wild as a lusting heat spreads all around your body like a furnace.",],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["vaginal-sex","sensual","default"],
			options: ["sex-vaginal-climax-creampie","sex-vaginal-climax-cover"],
			requirements: []
		},
		{
			name: "vaginal-sex-doggy",
			buttonText: "Let " + setup.himher(givingEntity) + " turn you around and take you from behind.",
			introLines: ["You let " + setup.himher(givingEntity) + " direct you to turn around, feeling " + setup.hisher(givingEntity) + " hands on your hips. " + 
			"A tingle spreads from your " + rFlair.vagina + " as " + setup.hisher(givingEntity) + " " + gFlair.penis + " rests at your " + setup.pickNoun(vagina) + "-entrance.",
			"You let " + setup.himher(givingEntity) + " direct you to turn around, feeling " + setup.hisher(givingEntity) + " hands on your hips. " + 
			"A tingle spreads from your " + rFlair.vagina + " as " + setup.hisher(givingEntity) + " " + gFlair.penis + " rests at your " + setup.pickNoun(vagina) + "-entrance.",
			"You let " + setup.himher(givingEntity) + " direct you to turn around, feeling " + setup.hisher(givingEntity) + " hands on your hips. " + 
			"A tingle spreads from your " + rFlair.vagina + " as " + setup.hisher(givingEntity) + " " + gFlair.penis + " rests at your " + setup.pickNoun(vagina) + "-entrance.",],
			introEntry: setup.random(2),
			mainLines: ["Something parts your lips once again and enters you, filling you out from behind. Your " + setup.pickNoun(vagina) + " swallowing " + setup.hisher(givingEntity) + " entire " + 
			setup.pickNoun(penis) + " as he enters you. " + setup.displayVisual("You push back against him making your cunt instinctively milk " + 
			setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " for that salty reward.", "image-doggy", receivingEntity, "sex", "doggy"),
			"Something parts your lips once again and enters you, filling you out from behind. Your " + setup.pickNoun(vagina) + " swallowing " + setup.hisher(givingEntity) + " entire " + 
			setup.pickNoun(penis) + " as he enters you. " + setup.displayVisual("You push back against him making your cunt instinctively milk " + 
			setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " for that salty reward.", "image-doggy", receivingEntity, "sex", "doggy"),
			"Something parts your lips once again and enters you, filling you out from behind. Your " + setup.pickNoun(vagina) + " swallowing " + setup.hisher(givingEntity) + " entire " + 
			setup.pickNoun(penis) + " as he enters you. " + setup.displayVisual("You push back against him making your cunt instinctively milk " + 
			setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " for that salty reward.", "image-doggy", receivingEntity, "sex", "doggy")],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(givingEntity, "B") + " hips slap against your " + rFlair.ass +", as " + setup.hisher(givingEntity) + " whole body twitches and flexes. " + 
			setup.hisher(givingEntity, "B") + " grunts growing deeper and more savage as " + setup.heshe(givingEntity) + " comes closer to release.",
			setup.hisher(givingEntity, "B") + " hips slap against your " + rFlair.ass +", as " + setup.hisher(givingEntity) + " whole body twitches and flexes. " + 
			setup.hisher(givingEntity, "B") + " grunts growing deeper and more savage as " + setup.heshe(givingEntity) + " comes closer to release.",
			setup.hisher(givingEntity, "B") + " hips slap against your " + rFlair.ass +", as " + setup.hisher(givingEntity) + " whole body twitches and flexes. " + 
			setup.hisher(givingEntity, "B") + " grunts growing deeper and more savage as " + setup.heshe(givingEntity) + " comes closer to release."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["vaginal-sex","sensual","default"],
			options: ["sex-vaginal-climax-creampie","sex-vaginal-climax-cover"],
			requirements: []
		},
		{
			name: "sex-vaginal-climax-creampie",
			buttonText: "Let your " + rFlair.vagina + " be filled with cum.",
			introLines: [setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(vagina) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison.",
			setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(vagina) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison.",
			setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(vagina) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison."],
			introEntry: setup.random(2),
			mainLines: ["A sudden warmth spreads inside your " + rFlair.vagina + " as " + setup.heshe(givingEntity) + " bucks over you with a few thrusts, " + 
			setup.hisher(givingEntity) + setup.displayVisual(" hips connecting with your ass cheeks with a few slaps.", "image-climax", receivingEntity, "climax", "vaginal-creampie"),
			"A sudden warmth spreads inside your " + rFlair.vagina + " as " + setup.heshe(givingEntity) + " bucks over you with a few thrusts, " + 
			setup.hisher(givingEntity) + setup.displayVisual(" hips connecting with your ass cheeks with a few slaps.", "image-climax", receivingEntity, "climax", "vaginal-creampie"),
			"A sudden warmth spreads inside your " + rFlair.vagina + " as " + setup.heshe(givingEntity) + " bucks over you with a few thrusts, " + 
			setup.hisher(givingEntity) + setup.displayVisual(" hips connecting with your ass cheeks with a few slaps.", "image-climax", receivingEntity, "climax", "vaginal-creampie")],
			mainEntry: setup.random(2),
			outroLines: ["The cum overflows from your now used " + setup.pickNoun(vagina) + " and trails down along your inner thigh. " + 
			setup.heshe(givingEntity, "B") + " lifts " + setup.hisher(givingEntity) + " grip around your hips and you feel " + setup.hisher(givingEntity) + " cock exit your cunt, leaving it empty and gaped.",
			"The cum overflows from your now used " + setup.pickNoun(vagina) + " and trails down along your inner thigh. " + 
			setup.heshe(givingEntity, "B") + " lifts " + setup.hisher(givingEntity) + " grip around your hips and you feel " + setup.hisher(givingEntity) + " cock exit your cunt, leaving it empty and gaped.",
			"The cum overflows from your now used " + setup.pickNoun(vagina) + " and trails down along your inner thigh. " + 
			setup.heshe(givingEntity, "B") + " lifts " + setup.hisher(givingEntity) + " grip around your hips and you feel " + setup.hisher(givingEntity) + " cock exit your cunt, leaving it empty and gaped."],
			outroEntry: setup.random(2),
			givenCount: "givenVaginalCreampie",
			receivedCount: "receivedVaginalCreampie",
			stage: "climax",
			tags: ["vaginal-sex","sensual","vaginal-creampie","default"],
			options: [],
			requirements: []
		},
		{
			name: "sex-vaginal-climax-cover",
			buttonText: "Let your " + setup.pickNoun(vagina) + " be covered with cum.",
			introLines: [setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(vagina) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison.",
			setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(vagina) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison.",
			setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(vagina) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison."],
			introEntry: setup.random(2),
			mainLines: ["The pounding suddenly stops, with an emptiness spreading inside, only to be followed by " + 
			setup.displayVisual(" something hot and heavy landing on your sweet " + setup.pickNoun(vagina) + ".", "image-climax", receivingEntity, "climax", "vaginal-cover"),
			"The pounding suddenly stops, with an emptiness spreading inside, only to be followed by " + 
			setup.displayVisual(" something hot and heavy landing on your sweet " + setup.pickNoun(vagina) + ".", "image-climax", receivingEntity, "climax", "vaginal-cover"),
			"The pounding suddenly stops, with an emptiness spreading inside, only to be followed by " + 
			setup.displayVisual(" something hot and heavy landing on your sweet " + setup.pickNoun(vagina) + ".", "image-climax", receivingEntity, "climax", "vaginal-cover")],
			mainEntry: setup.random(2),
			outroLines: ["The cum covers your now used " + setup.pickNoun(vagina) + " and trails down along your pussy lips. Your broken in " + setup.pickNoun(vagina) + " feels a bit banged up and sore.",
			"The cum covers your now used " + setup.pickNoun(vagina) + " and trails down along your pussy lips. Your broken in " + setup.pickNoun(vagina) + " feels a bit banged up and sore.",
			"The cum covers your now used " + setup.pickNoun(vagina) + " and trails down along your pussy lips. Your broken in " + setup.pickNoun(vagina) + " feels a bit banged up and sore."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "climax",
			tags: ["vaginal-sex","sensual","default","vaginal-cover"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Vaginal(sex) Scenes.");
	} else if (perspective == "penis-anal") {
		var scenes = [
		{
			name: "penis-anal-0",
			buttonText: "",
			introLines: [setup.heshe(receivingEntity, "B") + " lies down and spreads " + setup.hisher(receivingEntity) + 
			" legs timidly with your hands grabbing and guiding " + setup.himher(receivingEntity) + " into position.",
			setup.heshe(receivingEntity, "B") + " lies down and spreads " + setup.hisher(receivingEntity) + 
			" legs timidly with your hands grabbing and guiding " + setup.himher(receivingEntity) + " into position.",
			setup.heshe(receivingEntity, "B") + " lies down and spreads " + setup.hisher(receivingEntity) + 
			" legs timidly with your hands grabbing and guiding " + setup.himher(receivingEntity) + " into position."],
			introEntry: setup.random(2),
			mainLines: ["You lick your lips as you push your " + setup.pickNoun(penis) + " towards " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + 
			". A tingle spreads at the tip of your " + setup.pickNoun(penis) + " as you feel " + setup.hisher(receivingEntity) + " ass caress you." + 
			"A warm feeling swallows your " + setup.pickNoun(penis) + " as you enter " + setup.himher(receivingEntity) + ", slowly engulfing your entire shaft as you stretch " + setup.himher(receivingEntity) + 
			setup.displayVisual(" out to better accommodate your member.", "image-intro", givingEntity, "anal", "prodding"),
			"You lick your lips as you push your " + setup.pickNoun(penis) + " towards " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + 
			". A tingle spreads at the tip of your " + setup.pickNoun(penis) + " as you feel " + setup.hisher(receivingEntity) + " ass caress you." + 
			"A warm feeling swallows your " + setup.pickNoun(penis) + " as you enter " + setup.himher(receivingEntity) + ", slowly engulfing your entire shaft as you stretch " + setup.himher(receivingEntity) + 
			setup.displayVisual(" out to better accommodate your member.", "image-intro", givingEntity, "anal", "prodding"),
			"You lick your lips as you push your " + setup.pickNoun(penis) + " towards " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + 
			". A tingle spreads at the tip of your " + setup.pickNoun(penis) + " as you feel " + setup.hisher(receivingEntity) + " ass caress you." + 
			"A warm feeling swallows your " + setup.pickNoun(penis) + " as you enter " + setup.himher(receivingEntity) + ", slowly engulfing your entire shaft as you stretch " + setup.himher(receivingEntity) + 
			setup.displayVisual(" out to better accommodate your member.", "image-intro", givingEntity, "anal", "prodding")],
			mainEntry: setup.random(2),
			outroLines: ["A soft moan escapes " + setup.himher(receivingEntity) + " as you bottom out inside " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + ".",
			"A soft moan escapes " + setup.himher(receivingEntity) + " as you bottom out inside " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + ".",
			"A soft moan escapes " + setup.himher(receivingEntity) + " as you bottom out inside " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + "."],
			outroEntry: setup.random(2),
			givenCount: "givenAnal",
			receivedCount: "receivedAnal",
			stage: "intro",
			tags: ["penis-anal","sensual","default"],
			options: ["penis-anal-slow","penis-anal-fast"],
			requirements: []
		},
		{
			name: "penis-anal-slow",
			buttonText: "Force your " + setup.pickNoun(penis) + " inside " + setup.himher(receivingEntity) + " slowly.",
			introLines: ["Your eyes meet as you take things by slowly pulling out, then forcing yourself inside again," + 
			setup.displayVisual(" with slow rhythmic thrusts.", "image-main", receivingEntity, "anal", "slow"),
			"Your eyes meet as you take things by slowly pulling out, then forcing yourself inside again," + 
			setup.displayVisual(" with slow rhythmic thrusts.", "image-main", receivingEntity, "anal", "slow"),
			"Your eyes meet as you take things by slowly pulling out, then forcing yourself inside again," + 
			setup.displayVisual(" with slow rhythmic thrusts.", "image-main", receivingEntity, "anal", "slow")],
			introEntry: setup.random(2),
			mainLines: ["You feel " + setup.hisher(receivingEntity) + " " + rFlair.asshole + 
			" slowly loosening and opening up, taking your " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(receivingEntity) + " " + rFlair.asshole + 
			" slowly loosening and opening up, taking your " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(receivingEntity) + " " + rFlair.asshole + 
			" slowly loosening and opening up, taking your " + setup.pickNoun(penis) + " with more ease.",],
			mainEntry: setup.random(2),
			outroLines: ["The texture of " + setup.hisher(receivingEntity) + setup.pickNoun(asshole) + " grinds against your " + gFlair.penis + 
			", making you grunt in pleasure as it milks you for all your worth.",
			"The texture of " + setup.hisher(receivingEntity) + setup.pickNoun(asshole) + " grinds against your " + gFlair.penis + 
			", making you grunt in pleasure as it milks you for all your worth.",
			"The texture of " + setup.hisher(receivingEntity) + setup.pickNoun(asshole) + " grinds against your " + gFlair.penis + 
			", making you grunt in pleasure as it milks you for all your worth.",],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["penis-anal","sensual","default"],
			options: ["penis-anal-press","penis-anal-doggy"],
			requirements: []
		},
		{
			name: "penis-anal-fast",
			buttonText: "Pick up the pace.",
			introLines: ["You waste no time and immediately pick up the pace, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + " to loosen up.",
			"You waste no time and immediately pick up the pace, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + " to loosen up.",
			"You waste no time and immediately pick up the pace, forcing " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + " to loosen up.",],
			introEntry: setup.random(2),
			mainLines: ["You smile at " + setup.himher(receivingEntity) + " as your " + setup.pickNoun(penis) + " fills " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + setup.displayVisual(" at a steady rocking pace, slamming your ", "image-main", receivingEntity, "anal", "fast") + 
			" hips against " + setup.hisher(receivingEntity) + " " + rFlair.ass + ".",
			"You smile at " + setup.himher(receivingEntity) + " as your " + setup.pickNoun(penis) + " fills " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + setup.displayVisual(" at a steady rocking pace, slamming your ", "image-main", receivingEntity, "anal", "fast") + 
			" hips against " + setup.hisher(receivingEntity) + " " + rFlair.ass + ".",
			"You smile at " + setup.himher(receivingEntity) + " as your " + setup.pickNoun(penis) + " fills " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + setup.displayVisual(" at a steady rocking pace, slamming your ", "image-main", receivingEntity, "anal", "fast") + 
			" hips against " + setup.hisher(receivingEntity) + " " + rFlair.ass + "."],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(receivingEntity, "B") + " wanton moaning fills your ears, breaking every now and then as you push " + 
			setup.himher(receivingEntity) + " over the edge, forcing " + setup.himher(receivingEntity) + " to flex from the raw fucking.",
			setup.hisher(receivingEntity, "B") + " wanton moaning fills your ears, breaking every now and then as you push " + 
			setup.himher(receivingEntity) + " over the edge, forcing " + setup.himher(receivingEntity) + " to flex from the raw fucking.",
			setup.hisher(receivingEntity, "B") + " wanton moaning fills your ears, breaking every now and then as you push " + 
			setup.himher(receivingEntity) + " over the edge, forcing " + setup.himher(receivingEntity) + " to flex from the raw fucking.",],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["penis-anal","sensual","default"],
			options: ["penis-anal-press","penis-anal-doggy"],
			requirements: []
		},
		{
			name: "penis-anal-press",
			buttonText: "Press and pound " + setup.himher(receivingEntity) + " harder.",
			introLines: ["You place your hands on " + setup.hisher(receivingEntity) + setup.displayVisual(" soft thighs and push down gently. ", "image-outro", receivingEntity, "anal", "rough") + 
			"Flexing your entire body, you pick up the pace and pound " + setup.himher(receivingEntity) + " with raw fervor.",
			"You place your hands on " + setup.hisher(receivingEntity) + setup.displayVisual(" soft thighs and push down gently. ", "image-outro", receivingEntity, "anal", "rough") + 
			"Flexing your entire body, you pick up the pace and pound " + setup.himher(receivingEntity) + " with raw fervor.",
			"You place your hands on " + setup.hisher(receivingEntity) + setup.displayVisual(" soft thighs and push down gently. ", "image-outro", receivingEntity, "anal", "rough") + 
			"Flexing your entire body, you pick up the pace and pound " + setup.himher(receivingEntity) + " with raw fervor."],
			introEntry: setup.random(2),
			mainLines: [setup.hisher(receivingEntity, "B") + " " + rFlair.asshole + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			setup.hisher(receivingEntity, "B") + " " + rFlair.asshole + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			setup.hisher(receivingEntity, "B") + " " + rFlair.asshole + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["penis-anal","sensual","default"],
			options: ["penis-anal-climax-analcreampie","penis-anal-climax-anal-cover"],
			requirements: []
		},
		{
			name: "penis-anal-doggy",
			buttonText: "Turn " + setup.himher(receivingEntity) + " and take " + setup.himher(receivingEntity) + " from behind.",
			introLines: ["You direct " + setup.himher(receivingEntity) + " to turn around and place your hands on " + setup.hisher(receivingEntity) + " hips. " + 
			"Then place your " + setup.pickNoun(penis) + " at " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + "-entrance.",
			"You direct " + setup.himher(receivingEntity) + " to turn around and place your hands on " + setup.hisher(receivingEntity) + " hips. " + 
			"Then place your " + setup.pickNoun(penis) + " at " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + "-entrance.",
			"You direct " + setup.himher(receivingEntity) + " to turn around and place your hands on " + setup.hisher(receivingEntity) + " hips. " + 
			"Then place your " + setup.pickNoun(penis) + " at " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + "-entrance.",],
			introEntry: setup.random(2),
			mainLines: ["You quickly enter " + setup.himher(receivingEntity) + setup.displayVisual(" and pound her wanton cunt. ", "image-outro", receivingEntity, "anal", "doggy") + 
			setup.hisher(receivingEntity, "B") + " " + rFlair.asshole + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			"You quickly enter " + setup.himher(receivingEntity) + setup.displayVisual(" and pound her wanton cunt. ", "image-outro", receivingEntity, "anal", "doggy") + 
			setup.hisher(receivingEntity, "B") + " " + rFlair.asshole + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release.",
			"You quickly enter " + setup.himher(receivingEntity) + setup.displayVisual(" and pound her wanton cunt. ", "image-outro", receivingEntity, "anal", "doggy") + 
			setup.hisher(receivingEntity, "B") + " " + rFlair.asshole + " instinctively clenches and swallows your " + rFlair.penis + " whole, pushing you out, then pulling you back in. Your slap against " + 
			setup.hisher(receivingEntity) + " " + rFlair.ass + ", as your body twitches and tightens up. Your grunts grow deeper and more savage as you come closer to release."],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable.",
			setup.hisher(receivingEntity, "B") + " moans grow deeper and more wild, " + setup.hisher(receivingEntity) + " body twitching and fighting you as the heat grows unbearable."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["penis-anal","sensual","default"],
			options: ["penis-anal-climax-analcreampie","penis-anal-climax-anal-cover"],
			requirements: []
		},
		{
			name: "penis-anal-climax-analcreampie",
			buttonText: "Fill up " + setup.hisher(receivingEntity) + " " + setup.pickNoun(asshole) + ".",
			introLines: ["You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + setup.pickNoun(ass) + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + setup.pickNoun(ass) + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + setup.pickNoun(ass) + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams."],
			introEntry: setup.random(2),
			mainLines: ["A pressure builds up in your " + setup.pickNoun(penis) + ", which is quickly released in an explosion of ecstasy" +
			setup.displayVisual(" as you fill " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + " with your seed.", "image-climax", receivingEntity, "climax", "anal-creampie"),
			"A pressure builds up in your " + setup.pickNoun(penis) + ", which is quickly released in an explosion of ecstasy" +
			setup.displayVisual(" as you fill " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + " with your seed.", "image-climax", receivingEntity, "climax", "anal-creampie"),
			"A pressure builds up in your " + setup.pickNoun(penis) + ", which is quickly released in an explosion of ecstasy" +
			setup.displayVisual(" as you fill " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + " with your seed.", "image-climax", receivingEntity, "climax", "anal-creampie")],
			mainEntry: setup.random(2),
			outroLines: ["The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" inner thighs as you fill " + setup.hisher(receivingEntity) + " up completely, giving " + setup.hisher(receivingEntity) + 
			" your last thrusts before you pull out, despite " + setup.hisher(receivingEntity) + " moaning protests. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" inner thighs as you fill " + setup.hisher(receivingEntity) + " up completely, giving " + setup.hisher(receivingEntity) + 
			" your last thrusts before you pull out, despite " + setup.hisher(receivingEntity) + " moaning protests. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" inner thighs as you fill " + setup.hisher(receivingEntity) + " up completely, giving " + setup.hisher(receivingEntity) + 
			" your last thrusts before you pull out, despite " + setup.hisher(receivingEntity) + " moaning protests. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose."],
			outroEntry: setup.random(2),
			givenCount: "givenAnalCreampie",
			receivedCount: "receivedAnalCreampie",
			stage: "climax",
			tags: ["penis-anal","anal-creampie","default"],
			options: [],
			requirements: []
		},
		{
			name: "penis-anal-climax-anal-cover",
			buttonText: "Cover " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + " with your cum.",
			introLines: ["You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams."],
			introEntry: setup.random(2),
			mainLines: ["A pressure builds up in your " + setup.pickNoun(penis) + " and you quickly pull out before exploding in an ecstasy of pleasure. Your seed " +
			setup.displayVisual("lands all over " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + ".", "image-climax", receivingEntity, "climax", "anal-cover"),
			"A pressure builds up in your " + setup.pickNoun(penis) + " and you quickly pull out before exploding in an ecstasy of pleasure. Your seed " +
			setup.displayVisual("lands all over " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + ".", "image-climax", receivingEntity, "climax", "anal-cover"),
			"A pressure builds up in your " + setup.pickNoun(penis) + " and you quickly pull out before exploding in an ecstasy of pleasure. Your seed " +
			setup.displayVisual("lands all over " + setup.hisher(receivingEntity) + " " + setup.pickNoun(ass) + ".", "image-climax", receivingEntity, "climax", "anal-cover")],
			mainEntry: setup.random(2),
			outroLines: ["The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" thighs as the last spurts lands on " + setup.hisher(receivingEntity) + " ass. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" thighs as the last spurts lands on " + setup.hisher(receivingEntity) + " ass. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose.",
			"The pleasure retreats shortly after, leaving your body weak and spent. The cum trails along " + setup.hisher(receivingEntity) + 
			" thighs as the last spurts lands on " + setup.hisher(receivingEntity) + " ass. Your " + setup.pickNoun(penis) + " quickly softens, having done its purpose."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "climax",
			tags: ["penis-anal","sensual","default","anal-cover"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Penis(anal) Scenes.");
	} else if (perspective == "anal-sex") {
		var scenes = [
		{
			name: "anal-sex-0",
			buttonText: "",
			introLines: ["You lie down and spread your legs timidly, feeling " + setup.hisher(givingEntity) + " hands grab and guide you into position. " + setup.heshe(givingEntity, "B") + 
			" licks " + setup.hisher(givingEntity) + " lips as " + setup.heshe(givingEntity) + " playfully pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " towards your " + rFlair.asshole + ".",
			"You lie down and spread your legs timidly, feeling " + setup.hisher(givingEntity) + " hands grab and guide you into position. " + setup.heshe(givingEntity, "B") + 
			" licks " + setup.hisher(givingEntity) + " lips as " + setup.heshe(givingEntity) + " playfully pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " towards your " + rFlair.asshole + ".",
			"You lie down and spread your legs timidly, feeling " + setup.hisher(givingEntity) + " hands grab and guide you into position. " + setup.heshe(givingEntity, "B") + 
			" licks " + setup.hisher(givingEntity) + " lips as " + setup.heshe(givingEntity) + " playfully pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " towards your " + rFlair.asshole + ".",],
			introEntry: setup.random(2),
			mainLines: ["A pressure builds at the entrance to your " + setup.pickNoun(asshole) + " as " + setup.heshe(givingEntity) + " slowly pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + 
			setup.displayVisual(" inside you, stretching you out to accommodate ", "image-intro", givingEntity, "anal", "prodding") + setup.hisher(givingEntity) + " member.",
			"A pressure builds at the entrance to your " + setup.pickNoun(asshole) + " as " + setup.heshe(givingEntity) + " slowly pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + 
			setup.displayVisual(" inside you, stretching you out to accommodate ", "image-intro", givingEntity, "anal", "prodding") + setup.hisher(givingEntity) + " member.",
			"A pressure builds at the entrance to your " + setup.pickNoun(asshole) + " as " + setup.heshe(givingEntity) + " slowly pushes " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + 
			setup.displayVisual(" inside you, stretching you out to accommodate ", "image-intro", givingEntity, "anal", "prodding") + setup.hisher(givingEntity) + " member."],
			mainEntry: setup.random(2),
			outroLines: ["A soft moan escapes you, mixed with pleasure and pain as " + setup.heshe(givingEntity) + " fills you with " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + ".",
			"A soft moan escapes you, mixed with pleasure and pain as " + setup.heshe(givingEntity) + " fills you with " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + ".",
			"A soft moan escapes you, mixed with pleasure and pain as " + setup.heshe(givingEntity) + " fills you with " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + "."],
			outroEntry: setup.random(2),
			givenCount: "givenAnal",
			receivedCount: "receivedAnal",
			stage: "intro",
			tags: ["anal-sex","sensual","default"],
			options: ["anal-sex-slow","anal-sex-fast"],
			requirements: []
		},
		{
			name: "anal-sex-slow",
			buttonText: "Let " + setup.himher(givingEntity) + " take you slowly.",
			introLines: ["Your eyes meet as " + setup.heshe(givingEntity) + " takes things further by slowly pulling out, then forcing " + 
			setup.himselfherself(givingEntity) + " inside again, with slow rhythmic thrusts. You feel your " + setup.pickNoun(asshole) +  
			setup.displayVisual(" slowly loosening and opening up.", "image-main", receivingEntity, "anal", "slow"),
			"Your eyes meet as " + setup.heshe(givingEntity) + " takes things further by slowly pulling out, then forcing " + 
			setup.himselfherself(givingEntity) + " inside again, with slow rhythmic thrusts. You feel your " + setup.pickNoun(asshole) +  
			setup.displayVisual(" slowly loosening and opening up.", "image-main", receivingEntity, "anal", "slow"),
			"Your eyes meet as " + setup.heshe(givingEntity) + " takes things further by slowly pulling out, then forcing " + 
			setup.himselfherself(givingEntity) + " inside again, with slow rhythmic thrusts. You feel your " + setup.pickNoun(asshole) +  
			setup.displayVisual(" slowly loosening and opening up.", "image-main", receivingEntity, "anal", "slow")],
			introEntry: setup.random(2),
			mainLines: ["You feel " + setup.hisher(givingEntity) + " " + rFlair.penis + 
			" slowly loosening you up, taking " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(givingEntity) + " " + rFlair.penis + 
			" slowly loosening you up, taking " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " with more ease.",
			"You feel " + setup.hisher(givingEntity) + " " + rFlair.penis + 
			" slowly loosening you up, taking " + setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " with more ease."],
			mainEntry: setup.random(2),
			outroLines: ["The texture of your " + setup.pickNoun(asshole) + " grinds against " + setup.hisher(givingEntity) + " " + gFlair.penis + 
			", making " + setup.himher(givingEntity) + " grunt in pleasure as you milk " + setup.himher(givingEntity) + " for all " + setup.hisher(givingEntity) + " worth.",
			"The texture of your " + setup.pickNoun(asshole) + " grinds against " + setup.hisher(givingEntity) + " " + gFlair.penis + 
			", making " + setup.himher(givingEntity) + " grunt in pleasure as you milk " + setup.himher(givingEntity) + " for all " + setup.hisher(givingEntity) + " worth.",
			"The texture of your " + setup.pickNoun(asshole) + " grinds against " + setup.hisher(givingEntity) + " " + gFlair.penis + 
			", making " + setup.himher(givingEntity) + " grunt in pleasure as you milk " + setup.himher(givingEntity) + " for all " + setup.hisher(givingEntity) + " worth."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["anal-sex","sensual","default"],
			options: ["anal-sex-press","anal-sex-doggy"],
			requirements: []
		},
		{
			name: "anal-sex-fast",
			buttonText: "Let " + setup.himher(givingEntity) + " pick up the pace.",
			introLines: [setup.heshe(givingEntity, "B") + " wastes no time and immediately picks up the pace, forcing your " + setup.pickNoun(asshole) + " to loosen up.",
			setup.heshe(givingEntity, "B") + " wastes no time and immediately picks up the pace, forcing your " + setup.pickNoun(asshole) + " to loosen up.",
			setup.heshe(givingEntity, "B") + " wastes no time and immediately picks up the pace, forcing your " + setup.pickNoun(asshole) + " to loosen up."],
			introEntry: setup.random(2),
			mainLines: [setup.hisher(givingEntity, "B") + " " + gFlair.penis + " fills your " + rFlair.asshole + 
			setup.displayVisual(" at a steady rocking pace, slamming you ", "image-main", receivingEntity, "anal", "fast") +  "as " + setup.hisher(givingEntity) + " hips connect with your " + rFlair.ass + ".",
			setup.hisher(givingEntity, "B") + " " + gFlair.penis + " fills your " + rFlair.asshole + 
			setup.displayVisual(" at a steady rocking pace, slamming you ", "image-main", receivingEntity, "anal", "fast") +  "as " + setup.hisher(givingEntity) + " hips connect with your " + rFlair.ass + ".",
			setup.hisher(givingEntity, "B") + " " + gFlair.penis + " fills your " + rFlair.asshole + 
			setup.displayVisual(" at a steady rocking pace, slamming you ", "image-main", receivingEntity, "anal", "fast") +  "as " + setup.hisher(givingEntity) + " hips connect with your " + rFlair.ass + "."],
			mainEntry: setup.random(2),
			outroLines: ["You moan with each slam, pushing you over the edge, forcing you to flex your entire body in response.",
			"A warming sensation crawls up to your stomach and down your legs, as the pleasure slowly replaces the pain, making you blush as you\'re taken and driven with pleasure.",
			"A warming sensation crawls up to your stomach and down your legs, as the pleasure slowly replaces the pain, making you blush as you\'re taken and driven with pleasure."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "main",
			tags: ["anal-sex","sensual","default"],
			options: ["anal-sex-press","anal-sex-doggy"],
			requirements: []
		},
		{
			name: "anal-sex-press",
			buttonText: "Rock your hips against " + setup.himher(givingEntity) + ".",
			introLines: ["You feel " + setup.hisher(givingEntity) + " hands grabbing your legs, pushing you down. " + 
			"The pounding becoming harder making your " + setup.pickNoun(ass) + setup.displayVisual(" scream with raw fervor.", "image-outro", receivingEntity, "anal", "rough"),
			"You feel " + setup.hisher(givingEntity) + " hands grabbing your legs, pushing you down. " + 
			"The pounding becoming harder making your " + setup.pickNoun(ass) + setup.displayVisual(" scream with raw fervor.", "image-outro", receivingEntity, "anal", "rough"),
			"You feel " + setup.hisher(givingEntity) + " hands grabbing your legs, pushing you down. " + 
			"The pounding becoming harder making your " + setup.pickNoun(ass) + setup.displayVisual(" scream with raw fervor.", "image-outro", receivingEntity, "anal", "rough")],
			introEntry: setup.random(2),
			mainLines: ["Your body tries to follow " + setup.hisher(givingEntity) + " movements as " + setup.heshe(givingEntity) + 
			" pushes down like a press. Forcing your body to rock its hips almost instinctively like a hungry whore.",
			"Your body tries to follow " + setup.hisher(givingEntity) + " movements as " + setup.heshe(givingEntity) + 
			" pushes down like a press. Forcing your body to rock its hips almost instinctively like a hungry whore.",
			"Your body tries to follow " + setup.hisher(givingEntity) + " movements as " + setup.heshe(givingEntity) + 
			" pushes down like a press. Forcing your body to rock its hips almost instinctively like a hungry whore.",],
			mainEntry: setup.random(2),
			outroLines: ["Your moaning getting deeper and more wild as a lusting heat spreads all around your body like a furnace.",
			"Your moaning getting deeper and more wild as a lusting heat spreads all around your body like a furnace.",
			"Your moaning getting deeper and more wild as a lusting heat spreads all around your body like a furnace.",],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["anal-sex","sensual","default"],
			options: ["anal-sex-climax-creampie","anal-sex-climax-cover"],
			requirements: []
		},
		{
			name: "anal-sex-doggy",
			buttonText: "Let " + setup.himher(givingEntity) + " turn you around and take you from behind.",
			introLines: ["You let " + setup.himher(givingEntity) + " direct you to turn around, feeling " + setup.hisher(givingEntity) + " hands on your hips. " + 
			"A tingle spreads from your " + rFlair.ass + " as " + setup.hisher(givingEntity) + " " + gFlair.penis + " rests at your " + setup.pickNoun(ass) + "-entrance.",
			"You let " + setup.himher(givingEntity) + " direct you to turn around, feeling " + setup.hisher(givingEntity) + " hands on your hips. " + 
			"A tingle spreads from your " + rFlair.ass + " as " + setup.hisher(givingEntity) + " " + gFlair.penis + " rests at your " + setup.pickNoun(ass) + "-entrance.",
			"You let " + setup.himher(givingEntity) + " direct you to turn around, feeling " + setup.hisher(givingEntity) + " hands on your hips. " + 
			"A tingle spreads from your " + rFlair.ass + " as " + setup.hisher(givingEntity) + " " + gFlair.penis + " rests at your " + setup.pickNoun(ass) + "-entrance.",],
			introEntry: setup.random(2),
			mainLines: ["Something parts your lips once again and enters you, filling you out from behind. Your " + setup.pickNoun(asshole) + " swallowing " + setup.hisher(givingEntity) + " entire " + 
			setup.pickNoun(penis) + " as he enters you. " + setup.displayVisual("You push back against him making your cunt instinctively milk " + 
			setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " for that salty reward.", "image-doggy", receivingEntity, "anal", "doggy"),
			"Something parts your lips once again and enters you, filling you out from behind. Your " + setup.pickNoun(asshole) + " swallowing " + setup.hisher(givingEntity) + " entire " + 
			setup.pickNoun(penis) + " as he enters you. " + setup.displayVisual("You push back against him making your cunt instinctively milk " + 
			setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " for that salty reward.", "image-doggy", receivingEntity, "anal", "doggy"),
			"Something parts your lips once again and enters you, filling you out from behind. Your " + setup.pickNoun(asshole) + " swallowing " + setup.hisher(givingEntity) + " entire " + 
			setup.pickNoun(penis) + " as he enters you. " + setup.displayVisual("You push back against him making your cunt instinctively milk " + 
			setup.hisher(givingEntity) + " " + setup.pickNoun(penis) + " for that salty reward.", "image-doggy", receivingEntity, "anal", "doggy")],
			mainEntry: setup.random(2),
			outroLines: [setup.hisher(givingEntity, "B") + " hips slap against your " + rFlair.ass +", as " + setup.hisher(givingEntity) + " whole body twitches and flexes. " + 
			setup.hisher(givingEntity, "B") + " grunts growing deeper and more savage as " + setup.heshe(givingEntity) + " comes closer to release.",
			setup.hisher(givingEntity, "B") + " hips slap against your " + rFlair.ass +", as " + setup.hisher(givingEntity) + " whole body twitches and flexes. " + 
			setup.hisher(givingEntity, "B") + " grunts growing deeper and more savage as " + setup.heshe(givingEntity) + " comes closer to release.",
			setup.hisher(givingEntity, "B") + " hips slap against your " + rFlair.ass +", as " + setup.hisher(givingEntity) + " whole body twitches and flexes. " + 
			setup.hisher(givingEntity, "B") + " grunts growing deeper and more savage as " + setup.heshe(givingEntity) + " comes closer to release."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "outro",
			tags: ["anal-sex","sensual","default"],
			options: ["anal-sex-climax-creampie","anal-sex-climax-cover"],
			requirements: []
		},
		{
			name: "anal-sex-climax-creampie",
			buttonText: "Let your " + rFlair.ass + " be filled with cum.",
			introLines: [setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(asshole) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison.",
			setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(asshole) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison.",
			setup.heshe(givingEntity, "B") + " grunts loudly, as you feel " + setup.hisher(givingEntity) + 
			" " + setup.pickNoun(penis) + " twitch in pleasure inside your " + setup.pickNoun(asshole) + ". The pounding picking up in pace and the grip on your hips tightening." + 
			"You\'re pushed over as a rush of heat takes over, making you tremble in raw pleasure as the both of you scream in unison."],
			introEntry: setup.random(2),
			mainLines: ["A sudden warmth spreads inside your " + rFlair.asshole + " as " + setup.heshe(givingEntity) + " bucks over you with a few thrusts, " + 
			setup.hisher(givingEntity) + setup.displayVisual(" hips connecting with your ass cheeks with a few slaps.", "image-climax", receivingEntity, "climax", "anal-creampie"),
			"A sudden warmth spreads inside your " + rFlair.asshole + " as " + setup.heshe(givingEntity) + " bucks over you with a few thrusts, " + 
			setup.hisher(givingEntity) + setup.displayVisual(" hips connecting with your ass cheeks with a few slaps.", "image-climax", receivingEntity, "climax", "anal-creampie"),
			"A sudden warmth spreads inside your " + rFlair.asshole + " as " + setup.heshe(givingEntity) + " bucks over you with a few thrusts, " + 
			setup.hisher(givingEntity) + setup.displayVisual(" hips connecting with your ass cheeks with a few slaps.", "image-climax", receivingEntity, "climax", "anal-creampie")],
			mainEntry: setup.random(2),
			outroLines: ["The cum overflows from your now used " + setup.pickNoun(asshole) + " and trails down along your inner thigh. " + 
			setup.heshe(givingEntity, "B") + " lifts " + setup.hisher(givingEntity) + " grip around your hips and you feel " + setup.hisher(givingEntity) + " cock exit your cunt, leaving it empty and gaped.",
			"The cum overflows from your now used " + setup.pickNoun(asshole) + " and trails down along your inner thigh. " + 
			setup.heshe(givingEntity, "B") + " lifts " + setup.hisher(givingEntity) + " grip around your hips and you feel " + setup.hisher(givingEntity) + " cock exit your cunt, leaving it empty and gaped.",
			"The cum overflows from your now used " + setup.pickNoun(asshole) + " and trails down along your inner thigh. " + 
			setup.heshe(givingEntity, "B") + " lifts " + setup.hisher(givingEntity) + " grip around your hips and you feel " + setup.hisher(givingEntity) + " cock exit your cunt, leaving it empty and gaped."],
			outroEntry: setup.random(2),
			givenCount: "givenAnalCreampie",
			receivedCount: "receivedAnalCreampie",
			stage: "climax",
			tags: ["anal-sex","anal-creampie","default"],
			options: [],
			requirements: []
		},
		{
			name: "anal-sex-climax-cover",
			buttonText: "Let your " + setup.pickNoun(ass) + " be covered with cum.",
			introLines: ["You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams.",
			"You grunt loudly as your " + setup.pickNoun(penis) + " twitches in pleasure from the soft, but tight hold of " + setup.hisher(receivingEntity) + 
			" " + rFlair.asshole + ". You pick up the pace and tighten your grip around " + setup.hisher(receivingEntity) + 
			" hips, feeling " + setup.hisher(receivingEntity) + " tremble as " + setup.hisher(receivingEntity) + " moaning turns to screams."],
			introEntry: setup.random(2),
			mainLines: ["The pounding suddenly stops, with an emptiness spreading inside, only to be followed by " + 
			setup.displayVisual(" something hot and heavy landing on your sweet " + setup.pickNoun(ass) + ".", "image-climax", receivingEntity, "climax", "anal-cover"),
			"The pounding suddenly stops, with an emptiness spreading inside, only to be followed by " + 
			setup.displayVisual(" something hot and heavy landing on your sweet " + setup.pickNoun(ass) + ".", "image-climax", receivingEntity, "climax", "anal-cover"),
			"The pounding suddenly stops, with an emptiness spreading inside, only to be followed by " + 
			setup.displayVisual(" something hot and heavy landing on your sweet " + setup.pickNoun(ass) + ".", "image-climax", receivingEntity, "climax", "anal-cover")],
			mainEntry: setup.random(2),
			outroLines: ["The cum covers your now used " + setup.pickNoun(ass) + " and trails down along your thighs. Your broken in " + setup.pickNoun(asshole) + " feels a bit banged up and sore.",
			"The cum covers your now used " + setup.pickNoun(ass) + " and trails down along your thighs. Your broken in " + setup.pickNoun(asshole) + " feels a bit banged up and sore.",
			"The cum covers your now used " + setup.pickNoun(ass) + " and trails down along your thighs. Your broken in " + setup.pickNoun(asshole) + " feels a bit banged up and sore."],
			outroEntry: setup.random(2),
			givenCount: "none",
			receivedCount: "none",
			stage: "climax",
			tags: ["anal-sex","sensual","default","anal-cover"],
			options: [],
			requirements: []
		}
		];
		console.log("Returned: Anal(sex) Scenes.");
	};
	console.log("Sex Scenes Loaded...");
	return scenes;
};

	


*/