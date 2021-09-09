setup.loadReflectionLib = function () {
	let reflections = [
		{
		id: "refAccident",
		passage: 'Reflect - Accident',
		buttonText: 'Reflect on Accident.',
		preRefs: [],
		preMessage: "",
		requirements: []
		},
		{
		id: "refWomanhood",
		passage: 'Reflect - Womanhood',
		buttonText: 'Reflect on Womanhood.',
		preRefs: [],
		preMessage: "",
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 1}]
		},
		{
		id: "refBody",
		passage: 'Reflect - Body',
		buttonText: 'Reflect on Body.',
		preRefs: [],
		preMessage: "",
		requirements: []
		},
		{
		id: "refExplore",
		passage: 'Reflect - Explore',
		buttonText: 'Explore your Body.',
		preRefs: [],
		preMessage: "",
		requirements: [{id: 'Masturbation', type: 'skill-min', level: 0}]
		},
		{
		id: "refFeminine1",
		passage: 'Reflect - Feminine 1',
		buttonText: 'Reflect on being more feminine.',
		preRefs: [],
		preMessage: "",
		requirements: [{id: 'Feminine', type: 'prog-check', level: 0}]
		},
		{
		id: "refFeminine2",
		passage: 'Reflect - Feminine 2',
		buttonText: 'Reflect on embracing womanhood.',
		preRefs: ["refFeminine1"],
		preMessage: "",
		requirements: [{id: 'Feminine', type: 'prog-check', level: 1},{id: 'Feminine', type: 'psyche-min', level: 1}]
		},
		{
		id: "refFeminine3",
		passage: 'Reflect - Feminine 3',
		buttonText: 'Reflect on being a real woman.',
		preRefs: ["refFeminine2"],
		preMessage: "",
		requirements: [{id: 'Feminine', type: 'prog-check', level: 2},{id: 'Feminine', type: 'psyche-min', level: 2}]
		},
		{
		id: "refFeminine4",
		passage: 'Reflect - Feminine 4',
		buttonText: 'Reflect on your true calling.',
		preRefs: ["refFeminine3"],
		preMessage: "",
		requirements: [{id: 'Feminine', type: 'prog-check', level: 3},{id: 'Feminine', type: 'psyche-min', level: 3}]
		},
		{
		id: "refSlut1",
		passage: 'Reflect - Slut 1',
		buttonText: 'Reflect on being a little bit slutty.',
		preRefs: ["refFeminine1"],
		preMessage: "You need to raise your Feminine psyche first.",
		requirements: [{id: 'Slut', type: 'prog-check', level: 0}]
		},
		{
		id: "refSlut2",
		passage: 'Reflect - Slut 2',
		buttonText: 'Reflect on having sex as a woman.',
		preRefs: ["refFeminine2","refSlut1"],
		preMessage: "You need to raise your Feminine psyche first.",
		requirements: [{id: 'Slut', type: 'prog-check', level: 1},{id: 'Slut', type: 'psyche-min', level: 1}]
		},
		{
		id: "refSlut3",
		passage: 'Reflect - Slut 3',
		buttonText: 'Reflect on sleeping around.',
		preRefs: ["refFeminine3","refSlut2"],
		preMessage: "You need to raise your Feminine psyche first.",
		requirements: [{id: 'Slut', type: 'prog-check', level: 2},{id: 'Slut', type: 'psyche-min', level: 2}]
		},
		{
		id: "refSlut4",
		passage: 'Reflect - Slut 4',
		buttonText: 'Reflect on fucking lots of guys.',
		preRefs: ["refFeminine4","refSlut3"],
		preMessage: "You need to raise your Feminine psyche first.",
		requirements: [{id: 'Slut', type: 'prog-check', level: 3},{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		id: "refBimbo1",
		passage: 'Reflect - Bimbo 1',
		buttonText: 'Reflect on sucking cocks.',
		preRefs: ["refSlut1"],
		preMessage: "You need to raise your Slut psyche first.",
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 0},{id: 'Slut', type: 'psyche-min', level: 1}]
		},
		{
		id: "refBimbo2",
		passage: 'Reflect - Bimbo 2',
		buttonText: 'Reflect on being a total whore.',
		preRefs: ["refSlut2","refBimbo1"],
		preMessage: "You need to raise your Slut psyche first.",
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 1},{id: 'Bimbo', type: 'psyche-min', level: 1}]
		},
		{
		id: "refBimbo3",
		passage: 'Reflect - Bimbo 3',
		buttonText: 'Reflect on being a public cumdumpster.',
		preRefs: ["refSlut3","refBimbo2"],
		preMessage: "You need to raise your Slut psyche first.",
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 2},{id: 'Bimbo', type: 'psyche-min', level: 2}]
		},
		{
		id: "refBimbo4",
		passage: 'Reflect - Bimbo 4',
		buttonText: '*drools*.....',
		preRefs: ["refSlut4","refBimbo3"],
		preMessage: "You need to raise your Slut psyche first.",
		requirements: [{id: 'Bimbo', type: 'prog-check', level: 3},{id: 'Bimbo', type: 'psyche-min', level: 3}]
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
		//Checking if the Player has already reflected that entry before.
		if (entity.reflections.includes(refs[i].id)) {
			//Nothing if they have.
		} else {
			//Checking if the requirements are passed.
			console.log("Checking: " + refs[i].id);
			let requirements = refs[i].requirements;
			let check = setup.checkReq(requirements, entity);
			console.log("Pass: " + check);
			if (check == true) {
				if (refs[i].preRefs.length == 0) {
					//if the reflection has no prerequisite reflection
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
					} else {
						returnRef = returnRef + '<span class="lbb"><<button "' + refs[i].buttonText + '">><<run setup.logNote("Reflection","' + refs[i].preMessage + '")>><</button>></span>';
					}
					console.log("preCheck: " + preCheck);
				}
			}
		}
	} 
	return "<span id='ref'>" + returnRef + "</span>" + "<<= setup.button('Return', 'Pod - Main')>>";
}



