//Roaming & Interactions
//v0.01
//By Sylen

setup.loadRoaming = function () {
	let roaming_walk = [
		{
		id: "roaming-walk",
		passageText: ["The slightly cold floor sends chills along your thighs as you stroll through the eVentia entertainment center."],
		modifiers: ["repeatable", "roaming", "eventia", "interaction"],
		rate: 100,
		requirements: [{id: 'heel-height', type: 'score-max', level: 0}]
		},
		{
		id: "roaming-strut",
		passageText: ["You´re forced to give your hips a light sway as you strut around the entertainment center.","Your heels click as they connect with the hard and cold center-floor.","The heels forces your back to arch as you strut along."],
		modifiers: ["repeatable", "roaming", "eventia", "interaction"],
		rate: 100,
		requirements: [{id: 'heel-height', type: 'score-min', level: 1}]
		}
	];
	let roaming_thoughts = [
		{
		id: "thoughts-heels",
		passageText: ["You stumble a little as you try your best to walk in heels.<br><<= setup.speak($player, 'How the hell do you walk around in heels all the time?!', 'angry')>><br>" + 
		"Taking a deep breath, you grumble as you wobble further along. The clicking sound as the heels connect with the hard floor being comically out of sync.",
		"Your whole body is dispositioned awkwardly as you struggle to stay balanced in your high heels." + 
		"<br><<= setup.speak($player, 'This is impossible!', 'angry')>><br>You lean against a nearby wall, involuntarily sticking your ass out to any onlookers as you try to maintain your balance.",
		"You suddenly completely lose your balance and stumble face first unto the floor.<br><<= setup.speak($player, 'AHHH! S-someone, UGHHH!', 'surprised')>><br>At least a dozen of onlookers watch " + 
		"as you do your best to play it off cool, fumbling around on the floor as you try to get back on your feet.<br><<= setup.speak($player, 'UGH! I can´t believe this is happening!', 'angry')>><br>" + 
		"You eventually manage to stand once again."],
		modifiers: ["repeatable", "roaming", "eventia"],
		rate: 0,
		requirements: [{id: 'heel-height', type: 'score-min', level: 1},{id: 'High Heels', type: 'skill-max', level: 1}]
		},
		{
		id: "stripper-comment-0",
		passageText: '<<= setup.speak($player, "Yeah, there\'s no way i\'m going to subject myself to this.", "angry")>>',
		modifiers: ["repeatable", "stripper"],
		rate: 0,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		}
	];
	let roaming_story = [
		{
		id: "reveal-comment-0",
		passageText: ['<<= setup.speak($player, "Ugh, is this all they have? Nothing less revealing?", "angry")>>'],
		modifiers: ["story", "roaming", "clothes"],
		rate: 100,
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		id: "maid-comment-0",
		passageText: ['<<= setup.speak($player, "What? So, i\´m supposed to just like... Dress like a maid and do, maid things?")>>'],
		modifiers: ["story", "opinion", "maid"],
		rate: 100,
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		id: "stripper-comment-0",
		passageText: ['<<= setup.speak($player, "Yeah that\´s definitely not happening! I\´m not some kind of whore?!", "angry")>>'],
		modifiers: ["story", "opinion", "stripper"],
		rate: 100,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
		id: "hotstripes-comment-0",
		passageText: ['<<= setup.speak($player, "Ugh! Sounds terrible! I\´m not prancing around at some rally like some kind of meat!", "angry")>>'],
		modifiers: ["story", "opinion", "hotstripes"],
		rate: 100,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
		id: "gloryhole-comment-0",
		passageText: ['<<= setup.speak($player, "That\´s just vulgar! No way!", "angry")>>'],
		modifiers: ["story", "opinion", "gloryhole"],
		rate: 100,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		id: "receptionist-comment-0",
		passageText: ['<<= setup.speak($player, "This doesn\´t sound too bad.")>>'],
		modifiers: ["story", "opinion", "receptionist"],
		rate: 100,
		requirements: []
		},
		{
		id: "shower-comment-0",
		passageText: ['<<= setup.speak($player, "Really? Shared showers?", "angry")>>'],
		modifiers: ["story", "roaming", "baths"],
		rate: 100,
		requirements: []
		},
		{
		id: "eventia-comment-0",
		passageText: ['<<= setup.speak($player, "This place is pretty damn huge, not going to lie.")>>'],
		modifiers: ["story", "roaming", "eventia"],
		rate: 100,
		requirements: []
		},
		{
		id: "heels-comment-0",
		passageText: ['<<= setup.speak($player, "They really only have heels? Unbelivable.", "angry")>>'],
		modifiers: ["story", "roaming", "heels"],
		rate: 100,
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 1}]
		},
		{
		id: "events-comment-0",
		passageText: ['<<= setup.speak($player, "So what...? I just apply here?")>>'],
		modifiers: ["story", "roaming", "events"],
		rate: 100,
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 1}]
		}
	];
	let non_story = roaming_walk.concat(roaming_thoughts);
	setup.shuffle(non_story);
	let roaming = roaming_story.concat(non_story);
	return roaming;
}
setup.loadInteractions = function () {
	///Default Outcomes//
	let defOutcomes = {
		harassment: [
			{
			passages: ["You carefully strut away, trying your best to keep your balance."],
			requirements: [{id: 'heels-height', type: 'score-min', level: 1},{id: 'High Heels', type: 'skills-max', level: 0}]
			},
			{
			passages: ["You continue with whatever you were doing."],
			requirements: []
			}
		],
		professional:[
			{
			passages: ["You skillfully show him the way and he leaves with a satisfied smile.", "You use your social skills to masterfully guide him towards his destination."],
			requirements: [{id: 'social', type: 'score-min', level: 2}]
			},
			{
			passages: ["You just manage to show him where to go.", "You clumsily show him towards his destination."],
			requirements: []
			}
		]
	}
	///Default Responses///
	let styleResponses = [
		{
		id: "response-masculine",
		repVariants: [
			{
			comments: ["Ugh, can you guys not? I´m not some bimbo.","Tsk... typical.","Meatheads..."],
			portrait: "default"
			},
			{
			comments: ["Losers like you talking? Keep trying bro, see what happens?"],
			portrait: "smile"
			},
			{
			comments: ["Can you stop doing that?","Stop staring at me like that!"],
			portrait: "angry"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Feminine', type: 'psyche-min', level: 0},{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		id: "response-default",
		repVariants: [
			{
			comments: ["Ugh, can you guys not? I´m not some bimbo.","Tsk... typical.","Meatheads..."],
			portrait: "default"
			},
			{
			comments: ["Losers like you talking? Keep trying bro, see what happens?"],
			portrait: "smile"
			},
			{
			comments: ["Can you stop doing that?","Stop staring at me like that!"],
			portrait: "angry"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: []
		}
	];
	let profResponses = [
		{
		id: "response-default",
		repVariants: [
			{
			comments: ["Sure, uuuh, let me just check my E-Pal.","Yeah, it´s right over there.","I can show you that, sure."],
			portrait: "default"
			}
		],
		outcomes: defOutcomes.professional,
		requirements: []
		}
	];
	let titsResponses = [
		{
		id: "response-insulted",
		repVariants: [
			{
			comments: ["What?! Are you guys for real?! Back off!","Can you fucking not comment on that?!","Are you for real?!","What the hell?!","Are you trying to pick a fight or what?!"],
			portrait: "angry"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
		id: "response-slutty",
		repVariants: [
			{
			comments: ["Like what you see? Take it in whilst you can, horndogs!","Pfft, forget it you horny boys~!","Not today you don´t.","You like these tatas? Too bad, they´re outta your price range."],
			portrait: "smile"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		}
	];
	let assResponses = [
		{
		id: "response-insulted",
		repVariants: [
			{
			comments: ["What?! Are you guys for real?! Back off!","Can you fucking not comment on that?!","Are you for real?!","What the hell?!","Are you trying to pick a fight or what?!"],
			portrait: "angry"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
		id: "response-slutty",
		repVariants: [
			{
			comments: ["Like what you see? Take it in whilst you can, horndogs!","Pfft, forget it you horny boys~!","Not today you don´t.","You like this ass? Too bad, this moneymaker is outta your price range."],
			portrait: "smile"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		}
	];
	let insultedResponses = [
		{
		id: "response-insulted",
		repVariants: [
			{
			comments: ["What?! Are you guys for real?! Back off!","Can you fucking not comment on that?!","Are you for real?!","What the hell?!","Are you trying to pick a fight or what?!"],
			portrait: "angry"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: []
		}
	];
	let nudeResponses = [
		{
		id: "response-insulted",
		repVariants: [
			{
			comments: ["Stop looking!","Turn around! It´s not on purpose alright?!","Stop! Close your eyes or something?!","Ugh! Can you like, not look?!"],
			portrait: "angry"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
		id: "response-slutty",
		repVariants: [
			{
			comments: ["Just flashing the goods, take it in whilst you can, hornyboy!","What? Tsk.","Just airing the goods, don´t mind me.","Gotta advertise this somewhoe, am I right?"],
			portrait: "smile"
			}
		],
		outcomes: defOutcomes.harassment,
		requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		}
	];
	///Default Interactions///
	let coverageIntros = ["You don\´t get far before you realize that two guys are checking you out by the lobby.","You\´ve barely gotten far before two guys are openly commenting on your appearance."];
	let profIntros = ["You don\´t get far before a man approaches you.","You\´ve barely gotten far before a guy approaches you, trying to grab your attention."];
	let titsIntros = ["You don\´t get far before you realize that two guys are checking you out and pointing at your tits.","You\´ve barely gotten far before two guys are openly commenting on your tits."];
	let assIntros = ["You don\´t get far before you realize that two guys are checking you out and pointing at your ass.","You\´ve barely gotten far before two guys are openly commenting on your behind."];
	let nudeIntros = ["You don\´t get far before you realize that your nude situation is drawing attention.","You\´ve barely gotten far before your exhibitionistic streak is taking the spotlight."];
	let eventgirlIntros = ["You don\´t get far before you catch the attention of another Event Girl.","You\´ve barely gotten far before another Event Girl comments on your appearance."];
	
	let default_interactions = [
		{
		id: "coverage-slutty",
		intGroup: "Adults",
		intVariants: [
			{
			id: "slutty-high",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Holy shit, some sluts they got here.","Check it out, slut street.","Fuck me, I bet she sucks like a pro.","What about her? How much you think she cost eh?"],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Gigaslut reporting in, haha!","Ugh, don´t they have some more... conservative ones? All I see are sluts.","Ooooh fuck, *whistles*","Aww shit man, she asking for it!",
				"We gotta hit the Gloria before I burst man..."],
				portrait: "smile"
				}
			],
			requirements: [{id: 'slutty', type: 'score-min', level: 3}],
			intResponses: styleResponses,
			},
			{
			id: "slutty-default",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Hey, check it out, someone is showing off.","Check out that one, a bit of a slut...","What about her?","Hey bro, check out that slut over there."],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Damn, girls giving a peak of her slutty side.","Nice view.","Hot *whistles*...","I´d take her out alright.","Very nice indeed, you think she works at the strip?","Too standard and slutty for me.","Probably has a high mileage."],
				portrait: "smile"
				}
			],
			requirements: [],
			intResponses: styleResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'slutty', type: 'score-min', level: 2}]
		},
		{
		id: "coverage-sexy",
		intGroup: "Adults",
		intVariants: [
			{
			id: "sexy-high",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Hey sexey! Wanna join me and the boys later? We could use the company.","Oooh lala~ sexy!","Showing off that sexy body! I like it!","*loud wolf whistle* Hey gurl! Whose the lucky guy?!", 
				"Hey, check out the sexy minx over there!"],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["Got something for ya right here gurl! *grabs his crotch*","Million-unit fuck-machine! Come on babe!","Will I be seeing ya in the free-use booths later? Come on gurl!",
				,"Damn, she is sexy... Probably one of the expensive ones.","Damn, that\´s what I call sexy!","I getta get to the adult strip man, I gotta blow this load soon man!", 
				"Holy fuck she\´s asking to get it hard man!"],
				portrait: "smile"
				}
				
			],
			requirements: [{id: 'sexy', type: 'score-min', level: 3}],
			intResponses: styleResponses,
			},
			{
			id: "sexy-default",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Hey gurl, looking good.","Nice! *whistles*","Hey! Chica, sexy gurl! Look over here!"],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["That´s more like it! Damn, getting all pent up.","Looking good! Haha!"],
				portrait: "smile"
				}
			],
			requirements: [],
			intResponses: styleResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'sexy', type: 'score-min', level: 2}]
		},
		{
		id: "coverage-casual",
		intGroup: "Adults",
		intVariants: [
			{
			id: "casual-default",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Pffft, come on gurl, you can do better than that lame-ass outfit.","Dull attire gurl, wear something sexy, come on!","You\´re supposed to be an event girl? I thought they wore sexy clothes."],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Not even trying...","Boring and dull, we should have gone to Dynamo Dolls.","Is that supposed to be a sexy uniform?"],
				portrait: "default"
				}
			],
			requirements: [],
			intResponses: styleResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'casual', type: 'score-min', level: 2}]
		},
		{
		id: "coverage-trashy",
		intGroup: "Adults",
		intVariants: [
			{
			id: "trashy-default",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Check out this meat on legs.","Hey gurl, how many cocks have you serviced today? Haha!","Walking onahole spotted!","Free use right? Can you bend over for me?","Check out the fuckholes!",
				"Check out the trashy one there...","What about her? How much you think she cost eh?","Hey, check out miss tramp."],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["Man what a trashy-ass hoe!","Hey whore, how much? Free, right?","You got a menu on that body?","Hey-hey! Share your cock-count for the evening! Come on!.... Skank.",
				"Looks too trashy, probably one of the free-use ones, not my type.","Holy shit... Just my type... Probably doesn\´t even wash after sucking cock.",
				"That\´s just obscene, extremely trashy, definitely would fuck."],
				portrait: "smile"
				}
			],
			requirements: [],
			intResponses: styleResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'trashy', type: 'score-min', level: 2}]
		},
		{
		id: "coverage-naughty",
		intGroup: "Adults",
		intVariants: [
			{
			id: "naughty-default",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Check out the naugty little minx.","Naughty display we got here.","Me likey-likey, why so naughty, gal!"],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["Naughty girl.","Bad girl.","You think she\´s a good or bad girl?"],
				portrait: "smile"
				}
			],
			requirements: [],
			intResponses: styleResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'naughty', type: 'score-min', level: 2}]
		},
		{
		id: "coverage-goingout",
		intGroup: "Adults",
		intVariants: [
			{
			id: "goingout-default",
			intros: coverageIntros,
			intComments: [
				{
				client: 0,
				comments: ["Hey gurl, where´s the party?","Whose the lucky date, gal?","Where we dining, beautiful?"],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["Come on girly, let us know, we can make it a threesome party.","Damn, you looking fine!"],
				portrait: "smile"
				}
			],
			requirements: [],
			intResponses: styleResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'going-out', type: 'score-min', level: 2}]
		},
		{
		id: "coverage-professional",
		intGroup: "Adults",
		intVariants: [
			{
			id: "professional-default",
			intros: profIntros,
			intComments: [
				{
				client: 0,
				comments: ["Excuse me miss, can you help me find Casual Cazy?","Uhm, hey, do you know the way to the Adult Strip?","Hey, need help finding Gloria Gals, you got the location, hun?" + 
				"I\´m here for an interview, do you know where Office A47 is?","I gotta take a leak, where can a man take a piss around here?","Gotta go real bad, where\´s the restrooms?" + 
				"My damn E-Pal is acting up again, you know where the eVentia Shop is?","I gotta get some meds for my- ugh *cluthes his stomach*... Pixies Pharma, where is it? Please."],
				portrait: "default"
				}
			],
			requirements: [],
			intResponses: profResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: [{id: 'professional', type: 'score-min', level: 2}]
		},
		{
		id: "size-tits",
		intGroup: "Adults",
		intVariants: [
			{
			id: "tits-small",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Check out bee-stings over there.","Hey, take a look at flattie!","Bro, you told me them Event Girls were stacked, what´s this?"],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Hey gurl, you call that tits?! Get an upgrade, you broad!","Damn gurl, get those tatas enhanced already!","Is that even a woman? Haha!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'tits-size', type: 'score-max', level: 1}],
			intResponses: insultedResponses,
			},
			{
			id: "tits-medium",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Check out the tits on that one, that´s not bad?","What about her? Her tits look fine, could be bigger though."],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Yeah, they might be fine, but I want them bigger.","Not big enough.","Not even close bro, they gotta be bigger.","Too small still."],
				portrait: "default"
				}
			],
			requirements: [{id: 'tits-size', type: 'score-min', level: 2},{id: 'tits-size', type: 'score-max', level: 3}],
			intResponses: insultedResponses,
			},
			{
			id: "tits-big",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Oh man, check out tits over here! Awooga!","Oh my god! Her tits are massive! Check them out dude!","Shit! Bro! Check out the melons on that one!"],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["The way they bounce! Heavenly!","Those tits could kill! Holy shit!","Bazonkas!","Bazingas! Haba-haba!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'tits-size', type: 'score-min', level: 4}],
			intResponses: titsResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: []
		},
		{
		id: "size-ass",
		intGroup: "Adults",
		intVariants: [
			{
			id: "ass-small",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Check out the flat ass over there.","Hey, take a look at that, no ass on that one!","Bro, you told me them Event Girls had the perfect ass, what´s this?"],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Hey gurl, you call that a behind?! Get an upgrade, you broad!","Damn gurl, get that ass enhanced already!","Is that even a woman? Haha!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'ass-size', type: 'score-max', level: 1}],
			intResponses: insultedResponses,
			},
			{
			id: "ass-medium",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Check out the ass on that one, that´s not bad?","What about her? Her ass look fine, could be bigger though."],
				portrait: "default"
				},
				{
				client: 1,
				comments: ["Yeah, it might be fine, but I want it bigger.","Not big enough.","Not even close bro, it´s gotta be bigger.","Too small still."],
				portrait: "default"
				}
			],
			requirements: [{id: 'ass-size', type: 'score-min', level: 2},{id: 'ass-size', type: 'score-max', level: 3}],
			intResponses: insultedResponses,
			},
			{
			id: "ass-big",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Oh man, check out the behind over here! Awooga!","Oh my god! Her ass is massive! Check it out dude!","Shit! Bro! Check out the ass on that one!"],
				portrait: "smile"
				},
				{
				client: 1,
				comments: ["The way it bounces! Heavenly!","That ass could kill! Holy shit!","Sit on my face you Goddess!","Suffocate me with that behind, oh God-... oh lord!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'ass-size', type: 'score-min', level: 4}],
			intResponses: assResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: []
		},
		{
		id: "coverage-crotch",
		intGroup: "Adults",
		intVariants: [
			{
			id: "nude",
			intros: nudeIntros,
			intComments: [
				{
				client: 0,
				comments: ["Uuuh, did you get lost? Free-use booths are that way, slut!","Holy shit girl! You\´re giving quite the show there! You some kinda exhibitionist or what?!",
				"Put on some clothes, freak!","You some kinda free-use whore or what?!","Holy shit! This bitch is flashing her cunt!"],
				portrait: "surprised"
				}
			],
			requirements: [{id: 'crotch', type: 'score-max', level: 1}],
			intResponses: nudeResponses,
			},
			{
			id: "partially-nude",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Nice pussy, why not show it off completely?","Might as well be nude, slut!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'crotch', type: 'score-min', level: 2},{id: 'crotch', type: 'score-max', level: 3}],
			intResponses: nudeResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: []
		},
		{
		id: "coverage-tits",
		intGroup: "Adults",
		intVariants: [
			{
			id: "nude",
			intros: nudeIntros,
			intComments: [
				{
				client: 0,
				comments: ["Hey-hey! Your tits are out?!","Holy shit girl! Nice tits! You some kinda exhibitionist or what?!",
				"Cover up those tits, freak!","You some kinda walking boob-machine or what?!","Holy shit! This bitch is flashing her tatas!"],
				portrait: "surprised"
				}
			],
			requirements: [{id: 'tits', type: 'score-max', level: 0}],
			intResponses: nudeResponses,
			},
			{
			id: "partially-nude",
			intros: titsIntros,
			intComments: [
				{
				client: 0,
				comments: ["Nice tits, why not show them off completely?","Might as well be nude, slut!","Hey girl! Nice rag! Make those babies pop right out!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'tits', type: 'score-min', level: 1},{id: 'tits', type: 'score-max', level: 2}],
			intResponses: nudeResponses,
			}
		],
		modifiers: ["repeatable", "roaming", "eventia", "coverage"],
		rate: 100,
		requirements: []
		},
		{
		id: "eventgirl-default",
		intGroup: "Event Girls",
		intVariants: [
			{
			id: "default-insult",
			intros: eventgirlIntros,
			intComments: [
				{
				client: 0,
				comments: ["Oh look, a buy-in girl with no style! Rich! Hahahaha!","Pfft, get with the times gal, no ones gonna pay for that ass in those rags! Ahaha!",
				"You call that style? Base-slut! You don´t belong here! Ahaha!","Wow... lame robes... nobody is gonna want a piece of that ass that is for sure!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'slutty', type: 'score-max', level: 2},{id: 'trashy', type: 'score-max', level: 2},{id: 'sexy', type: 'score-max', level: 2},{id: 'professional', type: 'score-min', level: 2}],
			intResponses: insultedResponses,
			},
			{
			id: "casual-insult",
			intros: eventgirlIntros,
			intComments: [
				{
				client: 0,
				comments: ["Oh look, it´s miss casual with no style! Rich! Hahahaha!","Pfft, get with the times gal, no ones gonna pay for that ass in those cassy rags! Ahaha!",
				"You call that style? You don´t belong here!","Wow... lame robes... nobody is gonna want a piece of that ass that is for sure!","You ain´t fooling anyone in those clothes, what´s your rate, huh? Casual Cazy!"],
				portrait: "smile"
				}
			],
			requirements: [{id: 'slutty', type: 'score-max', level: 2},{id: 'trashy', type: 'score-max', level: 2},{id: 'sexy', type: 'score-max', level: 2},{id: 'casual', type: 'score-min', level: 2}],
			intResponses: insultedResponses,
			},
			{
			id: "slutty-insult",
			intros: eventgirlIntros,
			intComments: [
				{
				client: 0,
				comments: ["Fucking whore.","Tsk... Going to advertise your cheap slut-ass to the whole center?","Tsk... Slut...","That´s just too much, dumb slut! Put on some proper clothes!",
				"Ugh! You´re ain´t stealing any of my clients, that´s for sure!","Girl... You call that clothes? You look like a cheap single-unit whore."],
				portrait: "smile"
				}
			],
			requirements: [{id: 'slutty', type: 'score-min', level: 3}],
			intResponses: insultedResponses,
			},
			{
			id: "trashy-insult",
			intros: eventgirlIntros,
			intComments: [
				{
				client: 0,
				comments: ["Fucking trashy whore.","Tsk... Going to advertise your cheap garbage-ass to the whole center?","Tsk... trashy cumdumpster...","That´s just too much, dumb trashy slut! Put on some proper clothes!",
				"Ugh! You´re ain´t stealing any of my clients, that´s for sure!","Girl... You call that clothes? You look like a trashy cheap single-unit cum-bucket!",
				"Cheap. Trashy-looking. Smells too... Yep, that\´s the kinda whore they warned me about...!","Now- THAT is trashy as hell! Get away from me!"],
				portrait: "angry"
				}
			],
			requirements: [{id: 'trashy', type: 'score-min', level: 3}],
			intResponses: insultedResponses,
			},
			{
			id: "sexy-insult",
			intros: eventgirlIntros,
			intComments: [
				{
				client: 0,
				comments: ["You really think that\´s sexy? Pfft! Slut!","You call that fashion? Sexy? Come on girl!","Where did you buy that?! UGH!","Ugh... stupid sluts, thinking they know anything about fashion..."],
				portrait: "angry"
				}
			],
			requirements: [{id: 'sexy', type: 'score-min', level: 3}],
			intResponses: insultedResponses,
			}
		],
		modifiers: ["repeatable","roaming","eventia","pods","coverage"],
		rate: 100,
		requirements: []
		}
	]
	let interactions = default_interactions;
	setup.shuffle(interactions);
	return interactions;
	/*
	default_harassment_0 = [
		{
		id: "cock-worship-0",
		passageText: '<<set $eventgirlList = setup.loadEventgirls()>><<= setup.speak($eventgirlList[0], "Woah! Holy shit! Is that the Cyberdong 3000?!", "smile")>>',
		modifiers: ["repeatable", "roaming", "pods", "cock-worship", "response"],
		rate: 100,
		requirements: [{id: 'penis-size', type: 'score-min', level: 1}]
		}
	];
	default_reflection_0 = [
		{
		id: "tits-opinion-1",
		passageText: '<<= setup.speak($player, "These fucking meatbags keep getting in the way... Maybe I should make them smaller?")>>',
		modifiers: ["repeatable", "opinion", "pod"],
		rate: 100,
		requirements: [{id: 'tits-size', type: 'score-min', level: 2}]
		},
		{
		id: "roaming-reflection-1",
		passageText: '<<= setup.speak($player, "Why is everyone looking at me like that?... Ugh...")>>',
		modifiers: ["repeatable", "roaming", "eventia"],
		rate: 100,
		requirements: [{id: 'tits', type: 'score-max', level: 0}]
		}
	];
	//non_story = default_repeatable.concat(default_harassment_0,coverage_harassment_0,style_harassment_0,style_harassment_1);
	//setup.shuffle(non_story);
	//roaming = default_story.concat(non_story);
	roaming = coverage_harassment;
	return roaming;*/
}
/*
setup.loadResponsesLib = function () {
	default_responses_0 = [
		{
		passageText: '<<= setup.speak($player, "Back off bro!", "angry")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "What\'s your problem bro?!", "angry")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "Whatever you say dude...", "default")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "Ugh... What do they think I am?!", "angry")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "I\'m not some object to oogle at! CREEP!", "angry")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "Keep it in your pants... YOU DISGUSTING CREEP!", "angry")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "Mhmmm...", "smile")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		passageText: '<<= setup.speak($player, "Like what you see?", "smile")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		passageText: '<<= setup.speak($player, "Oh my... they\'re all staring at me again...", "smile")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		passageText: '<<= setup.speak($player, "Teehee~", "smile")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}]
		},
		{
		passageText: '<<= setup.speak($player, "Oh, they\'re looking at me again? Better give them a show!~", "smile")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}]
		},
		{
		passageText: '<<= setup.speak($player, "*giggles*", "smile")>>',
		type: 'style',
		comment: 'none',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}]
		}
	];
	
	default_harassment_0 = [
		{
		passageText: '<<= setup.speak($player, "Hands to yourself, creep!", "angry")>>',
		type: 'groping',
		comment: 'insult',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<<= setup.speak($player, "Hell yeah baby, want to play with it?", "smile")>>',
		type: 'cock-worship',
		comment: 'cock-worship-comment',
		requirements: []
		}
	];
	
	coverage_harassment_0 = [
		{
		passageText: '<br>Your cheeks flush and you attempt to cover up in embarassment.<br><<= setup.speak($player, "What do you mean?! STOP STARING AT ME PERVERT!", "angry")>>',
		type: 'coverage',
		comment: 'insult',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<br>Your cheeks flush a little in excitement.<br><<= setup.speak($player, "Like what you see, huh?", "smile")>>',
		type: 'coverage',
		comment: 'positive',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		passageText: '<br>Your cheeks flush a little in embarassment.<br><<= setup.speak($player, "Yeah?! Fuck you too bro!", "angry")>>',
		type: 'coverage',
		comment: 'insult',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<br>Your cheeks flush a little in embarassment.<br><<= setup.speak($player, "Yeah?! Well... UGH! SHUT UP!", "angry")>>',
		type: 'coverage',
		comment: 'insult',
		requirements: [{id: 'Feminine', type: 'psyche-min', level: 3},{id: 'Slut', type: 'psyche-max', level: 1}]
		},
		{
		passageText: '<br><br>Your cheeks flush and you attempt to cover up in embarassment.<br><<= setup.speak($player, "STOP STARING AT ME!", "angry")>>',
		type: 'coverage',
		comment: 'insult',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		passageText: '<br>Your cheeks flush a little in excitement.<br><<= setup.speak($player, "So what if I am?", "smile")>>',
		type: 'coverage',
		comment: 'positive',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		}
	];
	
	responses = default_responses_0.concat(default_harassment_0,coverage_harassment_0);
	setup.shuffle(responses);
	return responses;
}

setup.loadClientComLib = function () {
	default_insults_0 = [
		{
		passageText: '<<= setup.speak($clientList[0], "Tsk... Fucking weirdo!", "angry")>>',
		modifiers: ["coverage","insult"],
		requirements: []
		},
		{
		passageText: '<<= setup.speak($clientList[0], "Tsk... Fucking whores man...", "angry")>>',
		modifiers: ["default","insult"],
		requirements: []
		}
	];
	default_positive_0 = [
		{
		passageText: '<<= setup.speak($clientList[0], "That\'s what I\'m talking about, baby!", "smile")>>',
		modifiers: ["default","positive"],
		requirements: []
		},
		{
		passageText: '<<= setup.speak($clientList[0], "Hell yeah girl!", "smile")>>',
		modifiers: ["default","positive"],
		requirements: []
		},
		{
		passageText: '<<= setup.speak($clientList[0], "Hey man, I don\'t mind at all!", "smile")>>',
		modifiers: ["default","positive"],
		requirements: []
		}
	];
	cock_worship_0 = [
		{
		passageText: '<<= setup.speak($eventgirlList[0], "Will you let me?!", "smile")>>' + 
		'<span class="lbb"><<button "Let them play with your Cyberdong">><<set $sex.current = "sex", $sex.gE = $player, $sex.rE = $eventgirlList[0], ' + 
		'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Pod - Main">><<goto "New Sex">><</button>></span>',
		modifiers: ["cock-worship","cock-worship-comment"],
		requirements: []
		}
	];
	
	clientcom = default_positive_0.concat(default_insults_0,cock_worship_0);
	setup.shuffle(clientcom);
	return clientcom;
}
*/
setup.interaction = function (entity, characters, type, modifier) {
	let returnInteraction = "<br>";
	let interArr = setup.loadInteractions();
	for (let i = 0; i < interArr.length; i++) {
		random = setup.random(100);
		if (interArr[i].modifiers.includes(type) && interArr[i].modifiers.includes(modifier)) {
			if (random <= interArr[i].rate) {
				let interReq = interArr[i].requirements;
				let interCheck = setup.checkReq(interReq, entity);
				if (interCheck == true) {
					let clientList = setup.getInteractables(interArr[i].intGroup, characters);
					for (let n = 0; n < interArr[i].intVariants.length; n++) {
						let variantReq = interArr[i].intVariants[n].requirements;
						let variantCheck = setup.checkReq(variantReq, entity);
						if (variantCheck == true) {
							let introsLength = interArr[i].intVariants[n].intros.length;
							let introsRandom = setup.random(introsLength);
							let variantIntro = interArr[i].intVariants[n].intros[introsRandom];
							let variantComments = "";
							for (let a = 0; a < interArr[i].intVariants[n].intComments.length; a++) {
								let clientID = interArr[i].intVariants[n].intComments[a].client;
								let intClient = clientList[clientID];
								let commentLength = interArr[i].intVariants[n].intComments[a].comments.length;
								let commentRandom = setup.random(commentLength);
								let clientComment = interArr[i].intVariants[n].intComments[a].comments[commentRandom];
								let commentPortrait = interArr[i].intVariants[n].intComments[a].portrait;
								variantComments = variantComments + setup.speak(intClient, clientComment, commentPortrait);
							}
							///Responses///
							let variantResponse = "";
							let outcomePassage = "";
							for (let k = 0; k < interArr[i].intVariants[n].intResponses.length; k++) {
								let responseReq = interArr[i].intVariants[n].intResponses[k].requirements;
								let responseCheck = setup.checkReq(responseReq, entity);
								if (responseCheck == true) {
									console.log("Response ID: " + interArr[i].intVariants[n].intResponses[k].id);
									let responseLength = interArr[i].intVariants[n].intResponses[k].repVariants.length;
									let responseRandom = setup.random(responseLength);
									let initResponseLength = interArr[i].intVariants[n].intResponses[k].repVariants[responseRandom].comments.length;
									let initResponseRandom = setup.random(initResponseLength);
									let initResponse = interArr[i].intVariants[n].intResponses[k].repVariants[responseRandom].comments[initResponseRandom];
									let responsePortrait = interArr[i].intVariants[n].intResponses[k].repVariants[responseRandom].portrait;
									variantResponse = setup.speak(entity, initResponse, responsePortrait);
									///Outcomes///
									for (let o = 0; o < interArr[i].intVariants[n].intResponses[k].outcomes.length; o++) {
										let outcomeReq = interArr[i].intVariants[n].intResponses[k].outcomes[o].requirements;
										let outcomeCheck = setup.checkReq(outcomeReq, entity);
										if (outcomeCheck == true) {
											let outcomeLength = interArr[i].intVariants[n].intResponses[k].outcomes[o].passages.length;
											let outcomeRandom = setup.random(outcomeLength);
											outcomePassage = interArr[i].intVariants[n].intResponses[k].outcomes[o].passages[outcomeRandom];
											break;
										}
									}
									break;
								}
								
							}
							returnInteraction = returnInteraction + "<br>" + variantIntro + "<br>" + variantComments + variantResponse + "<br>" + outcomePassage;
							//returnInteraction = returnInteraction + "<br>" + variantIntro + "<br>" + variantComments;
							break;
						}
					}
					break;
				}
			}
		}
	}
	return returnInteraction;
}

setup.roaming = function (entity, characters, type, modifier) {
	let returnRoaming = "<br>";
	let getInteraction = false;
	let roamingStoryArr = SugarCube.State.variables.story.roaming;
	let roamingArr = setup.loadRoaming();
	//let interactionsArr = setup.loadInteractions();
	//responses = setup.loadResponsesLib();
	//comments = setup.loadClientComLib();
	if (modifier == undefined) {
		modifier = "roaming";
	}
	for (let i = 0; i < roamingArr.length; i++) {
		random = setup.random(100);
		if (roamingArr[i].modifiers.includes(type) && roamingArr[i].modifiers.includes(modifier)) {
			if (roamingStoryArr.includes(roamingArr[i].id)) {
				console.log("Roaming(" + roamingArr[i].id + "): Tried to fire, but is already done.");
			} else {
				if (random <= roamingArr[i].rate) {
					let roamingReq = roamingArr[i].requirements;
					let check = setup.checkReq(roamingReq, entity);
					if (check == true) {
						let roamingLength = roamingArr[i].passageText.length;
						let roamingInt = setup.random(roamingLength);
						returnRoaming = returnRoaming + roamingArr[i].passageText[roamingInt]; 
						if (roamingArr[i].modifiers.includes("story")) {
							roamingStoryArr.pushUnique(roamingArr[i].id);
						}
						if (roamingArr[i].modifiers.includes("interaction")) {
							getInteraction = true;
						}
						break;
					}
					
				}
			}
		}
	}
	if (getInteraction == true) {
		returnRoaming = returnRoaming + setup.interaction(entity, characters, type, modifier);
	}
	return returnRoaming;
}



