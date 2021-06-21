setup.loadReflectionLib = function () {
	let reflections = [
		{
		id: "refAccident",
		passage: 'Reflect - Accident',
		buttonText: 'Reflect on Accident.',
		preRefs: [],
		requirements: []
		},
		{
		id: "refWomanhood",
		passage: 'Reflect - Womanhood',
		buttonText: 'Reflect on Womanhood.',
		preRefs: [],
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 1}]
		},
		{
		id: "refBody",
		passage: 'Reflect - Body',
		buttonText: 'Reflect on Body.',
		preRefs: [],
		requirements: []
		},
		{
		id: "refExplore",
		passage: 'Reflect - Explore',
		buttonText: 'Explore your Body.',
		preRefs: ["refBody"],
		requirements: []
		},
		{
		id: "refFeminine1",
		passage: 'Reflect - Feminine 1',
		buttonText: 'Reflect on being more feminine.',
		preRefs: [],
		requirements: [{id: 'Feminine', type: 'prog-check', level: 0}]
		},
		{
		id: "refFeminine2",
		passage: 'Reflect - Feminine 2',
		buttonText: 'Reflect on embracing womanhood.',
		preRefs: ["refFeminine1"],
		requirements: [{id: 'Feminine', type: 'prog-check', level: 1},{id: 'Feminine', type: 'psyche-min', level: 1}]
		},
		{
		id: "refFeminine3",
		passage: 'Reflect - Feminine 3',
		buttonText: 'Reflect on being a real woman.',
		preRefs: ["refFeminine2"],
		requirements: [{id: 'Feminine', type: 'prog-check', level: 2},{id: 'Feminine', type: 'psyche-min', level: 2}]
		},
		{
		id: "refFeminine4",
		passage: 'Reflect - Feminine 4',
		buttonText: 'Reflect on your true calling.',
		preRefs: ["refFeminine3"],
		requirements: [{id: 'Feminine', type: 'prog-check', level: 3},{id: 'Feminine', type: 'psyche-min', level: 3}]
		},
		{
		id: "refSlut1",
		passage: 'Reflect - Slut 1',
		buttonText: 'Reflect on being a little bit slutty.',
		preRefs: [],
		requirements: [{id: 'Slut', type: 'prog-check', level: 0},{id: 'Feminine', type: 'psyche-min', level: 1}]
		},
		{
		id: "refSlut2",
		passage: 'Reflect - Slut 2',
		buttonText: 'Reflect on having sex as a woman.',
		preRefs: ["refSlut1"],
		requirements: [{id: 'Slut', type: 'prog-check', level: 1},{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Slut', type: 'psyche-min', level: 1}]
		},
		{
		id: "refSlut3",
		passage: 'Reflect - Slut 3',
		buttonText: 'Reflect on sleeping around.',
		preRefs: ["refSlut2"],
		requirements: [{id: 'Slut', type: 'prog-check', level: 2},{id: 'Feminine', type: 'psyche-min', level: 3},{id: 'Slut', type: 'psyche-min', level: 2}]
		},
		{
		id: "refSlut4",
		passage: 'Reflect - Slut 4',
		buttonText: 'Reflect on fucking lots of guys.',
		preRefs: ["refSlut3"],
		requirements: [{id: 'Slut', type: 'prog-check', level: 3},{id: 'Feminine', type: 'psyche-min', level: 4},{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		id: "refBimbo1",
		passage: 'Reflect - Bimbo 1',
		buttonText: 'Reflect on sucking cocks.',
		preRefs: [],
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 0},{id: 'Slut', type: 'psyche-min', level: 1}]
		},
		{
		id: "refBimbo2",
		passage: 'Reflect - Bimbo 2',
		buttonText: 'Reflect on being a total whore.',
		preRefs: ["refBimbo1"],
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 1},{id: 'Bimbo', type: 'psyche-min', level: 1},{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Slut', type: 'psyche-min', level: 2}]
		},
		{
		id: "refBimbo3",
		passage: 'Reflect - Bimbo 3',
		buttonText: 'Reflect on being a public cumdumpster.',
		preRefs: ["refBimbo2"],
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 2},{id: 'Bimbo', type: 'psyche-min', level: 2},{id: 'Feminine', type: 'psyche-min', level: 3},{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		id: "refBimbo4",
		passage: 'Reflect - Bimbo 4',
		buttonText: '*drools*.....',
		preRefs: ["refBimbo3"],
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 3},{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Feminine', type: 'psyche-min', level: 4},{id: 'Slut', type: 'psyche-min', level: 4}]
		}
	];
	return reflections;
}

setup.completeRef = function (entity, id) {
	entity.reflections.push(id);
	console.log("lol");
}

setup.displayReflections = function (entity) {
	let refs = setup.loadReflectionLib();
	let returnRef = "";
	for (let i = 0; i < refs.length; i++) {
		if (entity.reflections.includes(refs[i].id)) {
			//Nothing
		} else {
			console.log("Checking: " + refs[i].id);
			let requirements = refs[i].requirements;
			let check = setup.checkReq(requirements, entity);
			console.log("Pass: " + check);
			if (check == true) {
				if (refs[i].preRefs.length == 0) { 
					returnRef = returnRef + '<span class="lbb"><<button "' + refs[i].buttonText + '">><<goto "' + refs[i].passage + '">><<replace "#ref">><<= setup.displayReflections($player)>><</replace>><</button>></span>';
				} else {
					let preCheck = true;
					for (let n = 0; n < refs[i].preRefs.length; n++) {
						if (entity.reflections.includes(refs[i].preRefs[n])) {
							//Nothing
						} else {
							preCheck = false;
						}
					}
					if (preCheck == true) {
						returnRef = returnRef + '<span class="lbb"><<button "' + refs[i].buttonText + '">><<goto "' + refs[i].passage + '">><<replace "#ref">><<= setup.displayReflections($player)>><</replace>><</button>></span>';
					}
					console.log("preCheck: " + preCheck);
				}
			}
		}
	} 
	return "<span id='ref'>" + returnRef + "</span>" + "<<= setup.button('Return', 'Pod - Main')>>";
}

/*
setup.displayReflections = function (entity, refEntry) {
	let refs = setup.loadReflectionLib();
	let returnRef = "";
	if (refEntry != undefined) {
		for (let i = 0; i < refs.length; i++) {
			if (refEntry == refs[i].id) {
				returnRef = refs[i].passage + "<br><br>";
				break;
			}
		}
	} else {
		if (entity.modifiers.includes("hasReflected")) {
			returnRef = "You lie down on your bed, thinking about everything that has happened so far.<br><br>";
		} else {
			entity.modifiers.push("hasReflected");
			returnRef = "You lie down on your bed, thinking about everything that has happened so far.<br><br>" + 
			"What\'s going on? What\'s going to happen now? What are you going to do now? You\'re not even yourself anymore, you have tits?!<br><br>" + 
			"You look down on your new body. Cupping your tits, you squish and push them in. You moan lightly for a second. It\'s all so... Feminine... Curvy... Sexy... What are you even doing right now?<br><br>" + 
			"You put your hands on your head, trying to process it all.<br><br>";
		}
	}
	for (let i = 0; i < refs.length; i++) {
		if (entity.reflections.includes(refs[i].id)) {
			//Nothing
		} else {
			let requirements = refs[i].requirements;
			let check = setup.checkReq(requirements, entity);
			if (check == true) {
				if (refs[i].preRefs.length == 0) { 
					if (refs[i].choices.length == 0) {

					}
					returnRef = returnRef + '<span class="lbb"><<button "' + refs[i].buttonText + '">><<run setup.completeRef($player, "' + refs[i].id + '")>><<replace "#ref">><<= setup.displayReflections($player, "' + refs[i].id + '")>><</replace>><</button>></span>';
				} else {
					let preCheck = true;
					for (let n = 0; n < refs[i].preRefs.length; n++) {
						if (entity.reflections.includes(refs[i].preRefs[n])) {
							//Nothing
						} else {
							preCheck = false;
						}
					}
					if (preCheck == true) {
						returnRef = returnRef + '<span class="lbb"><<button "' + refs[i].buttonText + '">><<run setup.completeRef($player, "' + refs[i].id + '")>><<replace "#ref">><<= setup.displayReflections($player, "' + refs[i].id + '")>><</replace>><</button>></span>';
					}
				}
			}
		}
	} 
	return "<span id='ref'>" + returnRef + "</span>";
}
*/



