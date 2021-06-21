setup.loadTalking = function (entity, player) {
	let comments = setup.loadCommentLib('socials');
	let talks = [];
	switch(entity.name) {
		case("Brenda"):
		console.log("Found: Brenda.");
		talks = [
		{
			id: "start",
			passageText: "You approach Brenda." + 
			setup.comment(entity, comments, 'talking', 'intro', 'greeting', 'break') + 
			"She cocks her hip as you approach, smiling at you, and clicks her tongue." + 
			setup.comment(player, comments, 'talking', 'intro', 'greeting', 'break') + 
			"You think about what to say.",
			buttonText: "",
			modifiers: [],
			options: ["event-girl-ask-00","end-00"],
			requirements: []
		},
		{
			id: "event-girl-ask-00",
			passageText: setup.speak(player, "So... I was hoping you could tell me some more about becoming an Event Girl?") + 
			setup.speak(entity, "Well what would ya like ta hear darling?") + 
			setup.speak(player, "Well, maybe some tips or tricks... Not really sure..."),
			buttonText: "Ask about becoming an Event Girl.",
			modifiers: ["start", "non-repeatable"],
			options: ["event-girl-ask-01","event-girl-ask-02"],
			requirements: []
		},
		{
			id: "event-girl-ask-01",
			passageText: setup.speak(player, "Are all Event Girls really in debt? Is this some kind of punishment?") + 
			"She lifts an eyebrow and gives you a conniving stare down." + 
			setup.speak(entity, "Well that\'s an oddly specific question, don\'t ya think? Imma guess yo ass in debt then?") + 
			setup.speak(player, "Yep... That is indeed true...") + 
			setup.speak(entity, "Well, not all Event Girls are in debt. But corporate activation employment is indeed very common when some mother fucke-... *ahem*... fails to pay them dues to the big banks. I do believe any service job is on the table for that.") + 
			setup.speak(player, "Hmph, I see."),
			buttonText: "Are all Event Girls in debt?",
			modifiers: [],
			options: ["event-girl-ask-02","end-01"],
			requirements: []
		},
		{
			id: "event-girl-ask-02",
			passageText: setup.speak(player, "Why did you become an Event Girl?") + 
			"She sighs and shuffles her feet a bit." + 
			setup.speak(entity, "Got into a bit of debt- tryin\' ta open my own place, a club that is. Then the war broke out, no lads on the homefront to go out. I did try ta sell the place, but no buyers you see... so, working my debt off like this.") + 
			setup.speak(player, "That sounds kind off rough, how long do you have left?") + 
			setup.speak(entity, "A few years... But it's no biggie, lotsa girls have it way worse...") + 
			setup.speak(player, "How so?") + 
			setup.speak(entity, "Well, there are those that are just defiant or with too high a debt being put on the free use blocks... Not exactly a darling fate.") + 
			setup.speak(player, "Free use blocks?") + 
			setup.speak(entity, "Yeah, you know... They strap you into these pillory machines with your holes bared and any client can just... have a go at it- if ya know what I mean.") +
			"She grins and winks at you." + 
			setup.speak(player, "Oh uuuuuh... right."),
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
			passageText: "You approach Dr. Linus." + 
			setup.comment(entity, comments, 'talking', 'intro', 'greeting', 'break') + 
			"He looks at you pensively, eyeing you up and down." + 
			setup.comment(player, comments, 'talking', 'intro', 'greeting', 'break') + 
			"You think about what to say.",
			buttonText: "",
			modifiers: [],
			options: ["linus-ask-00","linus-ask-01","end-00"],
			requirements: []
		},
		{
			id: "linus-ask-00",
			passageText: setup.speak(player, "What year was it again?") + 
			"He lights up and smiles as he answers." + 
			setup.speak(entity, "The year is still 2206, so, remember to keep a level head!") + 
			"You sigh at the prospects of more futuristic surprises of questionable consent." + 
			setup.speak(player, "Right.") + 
			setup.speak(entity, "Don\'t forget! My clinic here is always open to make yourself more used to the future!", "smile"),
			buttonText: "Ask what year it is.",
			modifiers: ["start"],
			options: ["linus-ask-01","end-01"],
			requirements: []
		},
		{
			id: "linus-ask-01",
			passageText: setup.speak(player, "So... How did the whole debt thing work again?") + 
			"He looks down and sighs." + 
			setup.speak(entity, "As you know, you have indeed accumulated quite the debt. The details of how you gain the units are irrelevant, just pay back what you owe to the company. Or else they might... squeeze it out of you... Which would be less than ideal.") + 
			setup.speak(player, "What do you mean exactly? Squeeze...?") + 
			setup.speak(entity, "I wouldn\'t think too much about it, just don\'t get behind on your weekly payment requirements.") + 
			setup.speak(player, "Hmph, I see."),
			buttonText: "Can you explain the whole debt thing again?",
			modifiers: ["start"],
			options: ["linus-ask-00","end-01"],
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
setup.loadCharacters = function () {
	let brendaLocations = [
	{
		type: "Work",
		time: ["Morning","Afternoon","Evening"],
		days: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
		place: "receptionist desk"
	},
	{
		type: "Default",
		time: ["All"],
		days: ["All"],
		place: "pod 009"
	}];
	let lilyLocations = [
	{
		type: "Bar",
		time: ["Night"],
		days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
		place: "the bar"
	},
	{
		type: "Default",
		time: ["All"],
		days: ["All"],
		place: "pod 012"
	}];
	let linusLocations = [
	{
		type: "Work",
		time: ["Morning","Afternoon","Evening","Night"],
		days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
		place: "psyche clinic"
	},
	{
		type: "Default",
		time: ["All"],
		days: ["All"],
		place: "secret rape lab"
	}];
	
	let characters = {
		jake: {
			name: "Jake",
			portraitName: "jake",
			modifiers: ["hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		malePlayer: {
			name: "Jimmy",
			portraitName: "malePlayer",
			modifiers: [],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		cryolareceptionist: {
			name: "Cryola Receptionist",
			portraitName: "cryolareceptionist",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		palmer: {
			name: "Palmer",
			portraitName: "palmer",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		jessica: {
			name: "Jessica",
			portraitName: "jessica",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 3,
				vagina: 2,
				tits: 3,
				ass: 3,
				asshole: 1
			},
			worldLocation: "unknown"
		},
		cryolaguide: {
			name: "Cryola Guide",
			portraitName: "cryolaguide",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 5,
				vagina: 0,
				tits: 4,
				ass: 3,
				asshole: 2
			},
			worldLocation: "unknown"
		},
		amanda: {
			name: "Amanda",
			portraitName: "amanda",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 4,
				ass: 3,
				asshole: 2
			},
			worldLocation: "unknown"
		},
		sandra: {
			name: "Sandra",
			portraitName: "sandra",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 1,
				tits: 4,
				ass: 3,
				asshole: 2
			},
			worldLocation: "unknown"
		},
		marcus: {
			name: "Marcus",
			portraitName: "marcus",
			modifiers: [],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 2,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		eventiaguard: {
			name: "eVentia Guard",
			portraitName: "guard",
			modifiers: [],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		drlinus: {
			name: "Dr. Linus",
			portraitName: "drlinus",
			modifiers: ["essential"],
			gender: "male",
			bodyRef: {
				penis: 2,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: linusLocations
		},
		brenda: {
			name: "Brenda",
			portraitName: "brenda",
			modifiers: ["essential"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 2,
				ass: 3,
				asshole: 1
			},
			worldLocation: brendaLocations
		},
		lily: {
			name: "Lily",
			portraitName: "lily",
			modifiers: ["essential"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 3,
				tits: 1,
				ass: 3,
				asshole: 2
			},
			worldLocation: lilyLocations
		},
		manager: {
			name: "Michael",
			portraitName: "manager",
			modifiers: [],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		secret: {
			name: "Unknown",
			portraitName: "unknown",
			modifiers: [],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client1: {
			name: "Client",
			portraitName: "client-1",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client2: {
			name: "Client",
			portraitName: "client-2",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 5,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client3: {
			name: "Client",
			portraitName: "client-3",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client4: {
			name: "Client",
			portraitName: "client-4",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 2,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client5: {
			name: "Client",
			portraitName: "client-5",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client6: {
			name: "Client",
			portraitName: "client-6",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client7: {
			name: "Client",
			portraitName: "client-7",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 5,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client8: {
			name: "Client",
			portraitName: "client-8",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 2,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client9: {
			name: "Client",
			portraitName: "client-9",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 1,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client10: {
			name: "Client",
			portraitName: "client-10",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client11: {
			name: "Client",
			portraitName: "client-11",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client12: {
			name: "Client",
			portraitName: "client-12",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client13: {
			name: "Client",
			portraitName: "client-13",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		client14: {
			name: "Client",
			portraitName: "client-14",
			modifiers: ["client","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		eventgirl1: {
			name: "Event Girl",
			portraitName: "eventgirl-1",
			modifiers: ["eventgirl","hasVagina"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 2,
				ass: 3,
				asshole: 1
			},
			worldLocation: "unknown"
		},
		eventgirl2: {
			name: "Event Girl",
			portraitName: "eventgirl-2",
			modifiers: ["eventgirl","hasVagina"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 3,
				ass: 2,
				asshole: 1
			},
			worldLocation: "unknown"
		},
		eventgirl3: {
			name: "Event Girl",
			portraitName: "eventgirl-3",
			modifiers: ["eventgirl","hasVagina"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 2,
				ass: 3,
				asshole: 3
			},
			worldLocation: "unknown"
		},
		eventgirl4: {
			name: "Event Girl",
			portraitName: "eventgirl-4",
			modifiers: ["eventgirl","hasVagina"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 2,
				ass: 3,
				asshole: 3
			},
			worldLocation: "unknown"
		},
		eventgirl5: {
			name: "Event Girl",
			portraitName: "eventgirl-5",
			modifiers: ["eventgirl","hasVagina"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 2,
				ass: 3,
				asshole: 3
			},
			worldLocation: "unknown"
		},
		subject17A: {
			name: "Client",
			portraitName: "subject17A",
			modifiers: [],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 3,
				tits: 4,
				ass: 4,
				asshole: 4
			},
			worldLocation: "unknown"
		},
		hotstripesrep: {
			name: "Hot Stripes Representative",
			portraitName: "hotstripesrep",
			modifiers: ["hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 3,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		housespeaker: {
			name: "House Speaker",
			portraitName: "housespeaker",
			modifiers: ["hasVagina"],
			gender: "female",
			bodyRef: {
				penis: 0,
				vagina: 2,
				tits: 2,
				ass: 3,
				asshole: 1
			},
			worldLocation: "unknown"
		},
		bidder1: {
			name: "Client",
			portraitName: "bidder-1",
			modifiers: [],
			gender: "male",
			bodyRef: {
				penis: 2,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		executive1: {
			name: "Executive",
			portraitName: "executive-1",
			modifiers: ["executive","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		executive2: {
			name: "Executive",
			portraitName: "executive-2",
			modifiers: ["executive","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		executive3: {
			name: "Executive",
			portraitName: "executive-3",
			modifiers: ["executive","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		executive4: {
			name: "Executive",
			portraitName: "executive-4",
			modifiers: ["executive","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		executive5: {
			name: "Executive",
			portraitName: "executive-5",
			modifiers: ["executive","hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 3,
				asshole: 0
			},
			worldLocation: "unknown"
		},
		vernon: {
			name: "Mr. Venere",
			portraitName: "vernonvenere",
			modifiers: ["hasPenis"],
			gender: "male",
			bodyRef: {
				penis: 4,
				vagina: 0,
				tits: 0,
				ass: 2,
				asshole: 0
			},
			worldLocation: "unknown"
		}
	};
	return characters;
};
setup.getInteractables = function (type, characters) {
	console.log("Loading Interactables(" + type + ")...");
	let intList = [];
	switch(type) {
		case "Adults":
		intList = [characters.client1,characters.client2,characters.client4,characters.client5,characters.client6,characters.client7,characters.client8,characters.client10,characters.client11,characters.client12,characters.client13,characters.client14];
		break;
		case "Elderly":
		intList = [characters.client3];
		break;
		case "Cool":
		intList = [characters.client6,characters.client9,characters.client11];
		break;
		case "Goth":
		intList = [characters.client8,characters.client12];
		break;
		case "Executives":
		intList = [characters.executive1,characters.executive2,characters.executive3,characters.executive4,characters.executive5];
		break;
		case "Event Girls":
		intList = [characters.eventgirl1,characters.eventgirl2,characters.eventgirl3];
		break;
		case "Bidders":
		intList = [characters.bidder1,characters.executive1,characters.executive2,characters.executive3,characters.executive4,characters.executive5];
		break;
        case "Essentials":
        intList = [characters.brenda,characters.drlinus,characters.lily];
        break;
		default:
		intList = [characters.client1,characters.client2,characters.client4,characters.client5,characters.client6,characters.client7,characters.client8,characters.client10,characters.client11,characters.client12,characters.client13,characters.client14];
		break;
	}
	setup.shuffle(intList);
	return intList;
}
setup.shuffleInteractables = function () {
	SugarCube.State.variables.npc.clients = setup.shuffle(SugarCube.State.variables.npc.clients);
	SugarCube.State.variables.npc.executives = setup.shuffle(SugarCube.State.variables.npc.executives);
	SugarCube.State.variables.npc.adults = setup.shuffle(SugarCube.State.variables.npc.adults);
	SugarCube.State.variables.npc.elderly = setup.shuffle(SugarCube.State.variables.npc.elderly);
	SugarCube.State.variables.npc.cool = setup.shuffle(SugarCube.State.variables.npc.cool);
	SugarCube.State.variables.npc.goth = setup.shuffle(SugarCube.State.variables.npc.goth);
	SugarCube.State.variables.npc.eventgirls = setup.shuffle(SugarCube.State.variables.npc.eventgirls);
	SugarCube.State.variables.npc.bidders = setup.shuffle(SugarCube.State.variables.npc.bidders);
}
setup.loadEventgirls = function () {
	console.log("Loading Event Girls...");
	let characters = SugarCube.State.variables.characters;
	let eventgirlList = [characters.eventgirl1,characters.eventgirl2,characters.eventgirl3];
	setup.shuffle(eventgirlList);
	return eventgirlList;
}
