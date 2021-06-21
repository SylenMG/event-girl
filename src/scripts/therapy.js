//Therapy System
//v0.01
//Requires:  -loaded before
//by Sylen

setup.loadTherapySessions = function () {
	let feminine_sessions = [
		{
			name: "Session.03",
			therapyName: "Feminine Initiation",
			loadName: "FeminineInitiation.qt.02.sub011",
			description: "A psyche study specifically tailored to help and aide male-to-female mental change.",
			reward: 250,
			type: "Feminine",
			level: 0,
			amount: 15,
			hypnoName: "initiation",
			hypnoCount: 2,
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 0}]
		},
		{
			name: "Session.47",
			therapyName: "Feminine Reinforcement",
			loadName: "FeminineReinforcement.qt.03.sub023",
			description: "A psyche study specifically tailored to reinforce feminine behaviour and tendencies.",
			reward: 350,
			type: "Feminine",
			level: 1,
			amount: 30,
			hypnoName: "reinforcement",
			hypnoCount: 2,
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 1},{id: 'Feminine', type: 'psyche-max', level: 1}]
		},
		{
			name: "Session.126",
			therapyName: "Feminine Ideals",
			loadName: "FeminineIdeals.qt.11.sub113",
			description: "A psyche study specifically tailored to implant feminine ideals and life goals.",
			reward: 450,
			type: "Feminine",
			level: 2,
			amount: 55,
			hypnoName: "ideals",
			hypnoCount: 1,
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
			name: "Session.169",
			therapyName: "Feminine Overhaul",
			loadName: "CLASSIFIED.qt.54.sub457",
			description: "A CLASSIFIED specifically tailored to CLASSIFIED the CLASSIFIED CLASSIFIED CLASSIFIED.",
			reward: 550,
			type: "Feminine",
			level: 3,
			amount: 100,
			hypnoName: "overhaul",
			hypnoCount: 3,
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 3},{id: 'Feminine', type: 'psyche-max', level: 3}]
		}
	];
	let bimbo_sessions = [
		{
			name: "Session.01",
			therapyName: "Fashion Sense",
			loadName: "FashionSense.qt.01.sub006",
			description: "Taking a closer look on the influence of fashion and appearance in the male-to-female mind.",
			reward: 850,
			type: "Bimbo",
			level: 0,
			amount: 30,
			hypnoName: "fashion",
			hypnoCount: 2,
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Bimbo', type: 'psyche-max', level: 0}]
		},
		{
			name: "Session.x48",
			therapyName: "Fabulous Instincts",
			loadName: "FabulousInstincts.qt.xx.56.mClass.01",
			description: "It\'s got to be fabulous, or it will not do. Instinctual take-over at the base level.",
			reward: 950,
			type: "Bimbo",
			level: 1,
			amount: 20,
			hypnoName: "fabulous",
			hypnoCount: 2,
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 1},{id: 'Bimbo', type: 'psyche-max', level: 1}]
		},
		{
			name: "Session.ultraBLANKx67",
			therapyName: "Blank Mind",
			loadName: "BlankMind.qt.xx.23.mClass.05",
			description: "A blank mind is a happy mind. CLASSIFIED of base CLASSIFIED that CLASSIFIED the mind.",
			reward: 250,
			type: "Bimbo",
			level: 2,
			amount: 10,
			hypnoName: "blankmind",
			hypnoCount: 4,
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 2},{id: 'Bimbo', type: 'psyche-max', level: 2}]
		},
		{
			name: "Session.pinkParadise",
			therapyName: "Pink Paradise",
			loadName: "PinkParadise.qt.xx.00.mClass.00",
			description: "Why live life when you can go on a CLASSIFIED to a Pink Paradise? Thinking is bad!",
			reward: 50,
			type: "Bimbo",
			level: 0,
			amount: 5,
			hypnoName: "pinkparadise",
			hypnoCount: 7,
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Bimbo', type: 'psyche-max', level: 3}]
		}
	];
	let slut_sessions = [
		{
			name: "Session.04",
			therapyName: "Curious Sexuality",
			loadName: "CureSex.qt.cc.1",
			description: "Instill the curiosity needed to further one\'s sexual courage to do what one wants.",
			reward: 550,
			type: "Slut",
			level: 0,
			amount: 25,
			hypnoName: "curious",
			hypnoCount: 3,
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 1},{id: 'Slut', type: 'psyche-max', level: 0}]
		},
		{
			name: "Session.07",
			therapyName: "Experimental Vigor",
			loadName: "ExpVig.qt.cc.4",
			description: "Procure an experimental trait from the self that will be the catalyst to a sexual demeanor.",
			reward: 650,
			type: "Slut",
			level: 1,
			amount: 20,
			hypnoName: "experimental",
			hypnoCount: 4,
			requirements: [{id: 'Slut', type: 'psyche-min', level: 1},{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
			name: "Session.12",
			therapyName: "Inhibition Reassertment",
			loadName: "InhRea.qt.12.sub187",
			description: "Liberate your erotic self in both mind, body and spirit to unlock your true eVentia potential.",
			reward: 750,
			type: "Slut",
			level: 2,
			amount: 15,
			hypnoName: "inhibition",
			hypnoCount: 3,
			requirements: [{id: 'Slut', type: 'psyche-min', level: 2},{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
			name: "Session.45",
			therapyName: "Slutty Persona",
			loadName: "CLASSIFIED.qt.superslut.CLASSIFIED",
			description: "Imprint a slutty CLASSIFIED that CLASSIFIED one self into their secret dark desires and CLASSIFIED.",
			reward: 50,
			type: "Slut",
			level: 3,
			amount: 5,
			hypnoName: "superslut",
			hypnoCount: 8,
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3},{id: 'Slut', type: 'psyche-max', level: 3}]
		}
	];		
	let sessions = feminine_sessions.concat(slut_sessions,bimbo_sessions);
	return sessions;
}

setup.displayTherapy = function (entity) {
	let sessions = setup.loadTherapySessions();
	let returnSessions = "";
	for (var session = 0; session < sessions.length; session++) {
		console.log("Found Session: " + sessions[session].name);
		let requirements = sessions[session].requirements;
		let check = setup.checkReq(requirements, entity);
		if (check == true) {
			console.log("Unlocked Session: " + sessions[session].name);
			let sessionId = session;
			returnSessions = returnSessions + "<div class='default-container'><div class='default-text'>@@.boldtext;" + sessions[session].therapyName + "@@<br>" + 
			sessions[session].description + "<br>" + "@@.boldtext;Reward@@: u" + sessions[session].reward + "<br><span class='lbb'><<button 'Participate'>><<if $time.currentDayTime <= 2>>" + 
			"<<set $therapy.id = " + sessionId + ">><<goto 'Therapy - Hypno Load'>><<else>><<replace '#TherapyMessage'>>" + 
			"Too late for session.<</replace>><</if>><</button>></span></div></div>";	
		}
	}
	return returnSessions;
};

setup.completeTherapy = function (player, therapy) {
	let sessions = setup.loadTherapySessions();
	if (SugarCube.State.variables.time.currentDayTime <= 2) {
		SugarCube.State.variables.time.currentDayTime += 1;
	}
	let returnCompletion = "<<if $player.psyche.psyche" + sessions[therapy].type + ">= " + sessions[therapy].level + ">><br><br>You have completed this session!<</if>>";
	return returnCompletion;
};

setup.hypno = function (session) {
	let sessions = setup.loadTherapySessions();
	let randomHypno = setup.random(sessions[session].hypnoCount);
	console.log("Loading HypnoImage: " + randomHypno);
	let imageHypno = "images/therapy/" + sessions[session].hypnoName + "/hypno-" + randomHypno + ".gif";
	console.log("Image Location: " + imageHypno);
	let returnHypno = "<div class='hypno-container'><img src='" + imageHypno + "' width='100%' height='100%'></div>";
	return returnHypno + "<<timed 5s>><span class='lbb'><<button 'Complete Session'>><<goto 'Therapy - Payout'>><</button>></span><</timed>>";
}

setup.hypnoLoad = function (session) {
	let sessions = setup.loadTherapySessions();
	console.log("Loading HypnoId: " + session);
	let returnLoad = "@@.initloadtext;Loading " + sessions[session].loadName + "@@";
	return returnLoad;
}

setup.hypnoResult = function (player, session) {
	let sessions = setup.loadTherapySessions();
	setup.addUnits(player, 'Therapy Session', sessions[session].reward);
	setup.psyche(player, 'Mind', 10, 10);
	setup.psyche(player, sessions[session].type, sessions[session].amount, 15);
	let returnResult = setup.completeTherapy(player, session);
	return returnResult;
}


