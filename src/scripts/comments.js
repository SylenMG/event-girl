//Comment Library
//v0.01
//By Sylen

//Intercourse Relations
//blowjob-giving
//blowjob-receiving
//vom: Vagina on Mouth
//mov: Mouth on Vagina
//pov: Penis on Vagina
//vop: Vagina on Penis
//poa: Penis on Ass
//aop: Ass on Penis


setup.loadCommentLib = function (comments) {
	if (comments == "sex"){
		let virgin_sexLib = [
			{
			id: "virgin-blowjob-receiving",
			group: [
				{
				comments: ["Oh fuck! It´s my first blowjob, like ever! Slow down?!"],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","blowjob-giving"],
			requirements: [{id: 'receivedBlowjobs', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-blowjob-giving",
			group: [
				{
				comments: ["Never sucked a cock before, slow down?!"],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","blowjob-receiving"],
			requirements: [{id: 'givenBlowjobs', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-cunnilingus-receiving",
			group: [
				{
				comments: ["Oh shit-shit! Take it slow? Never had it licked before!"],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","cunnilingus-giving"],
			requirements: [{id: 'receivedCunnilingus', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-cunnilingus-giving",
			group: [
				{
				comments: ["Never licked pussy before... Here goes I guess."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","cunnilingus-receiving"],
			requirements: [{id: 'givenCunnilingus', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-penis-sex",
			group: [
				{
				comments: ["Finally gonna feel some pussy around my meat..."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","penis-sex"],
			requirements: [{id: 'givenVaginal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-vaginal-sex",
			group: [
				{
				comments: ["Take it slow, I´ve never had sex before!","Oh fuck, never had a cock in there before!","Well-... Let´s take it slow now. Never rode a cock before...!",
				"Oh fuck-fuck, not so fast! I´ve never been fucked before!"],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","vaginal-sex"],
			requirements: [{id: 'receivedVaginal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-penis-anal",
			group: [
				{
				comments: ["Finally gonna feel some ass around my meat..."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","penis-anal"],
			requirements: [{id: 'givenAnal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-anal-sex",
			group: [
				{
				comments: ["Well-... Let´s take it slow now. Never had a cock in my ass before...","Oh fuck-fuck-! This is so wrong! Take it slow! That´s my ass!"],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","anal-sex"],
			requirements: [{id: 'receivedAnal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-boy-vaginal-sex",
			group: [
				{
				comments: ["Dude! Slow down man! I´ve never had it in the pussy before!","Shit... This can´t be fucking happening, dude... this is so fucking wrong..."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","vaginal-sex"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'receivedVaginal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-boy-anal-sex",
			group: [
				{
				comments: ["Dude! Slow down man! I´ve never had it in the ass before!","Shit... This can´t be fucking happening, dude... this is so fucking wrong..."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","anal-sex"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'receivedAnal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-boy-blowjob-giving",
			group: [
				{
				comments: ["Dude! Slow down man! I have never done this before!","Ugh... Bro, do I really have to?","Oh fuck... If I really have to... I guess it´s okay now since... ugh... whatever."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","blowjob-giving"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'givenBlowjobs', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-boy-penis-sex",
			group: [
				{
				comments: ["Hell yeah, finally gonna get it on and smash some pussy!"],
				portrait: "smile"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","penis-sex"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'givenVaginal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-boy-penis-anal",
			group: [
				{
				comments: ["Hell yeah, finally gonna get it on and smash some ass!"],
				portrait: "smile"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","penis-anal"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'givenAnal', type: 'stat-max', level: 0}]
			},
			{
			id: "virgin-boy-default",
			group: [
				{
				comments: ["It´s my first time, so take it easy?","Not so rough, it´s my first time!","Can we slow into it? I´ve never done this before!",
				"Not so fast! It´s my first time doing this! Slow down!"],
				portrait: "surprised"
				},
				{
				comments: ["Finally I get to try this for the first time!","There´s a first time for anything.","Time to try this, let´s do it.","Mmmmmh, quite something for a first time."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","sensual","player-only","virgin","penis-anal","penis-sex","anal-sex","vaginal-sex","cunnilingus-giving","cunnilingus-receiving","blowjob-giving","blowjob-receiving"],
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
			}
		];
		let default_sexLib = [
			{
			id: "default-intro",
			group: [
				{
				comments: ["Aaaah! Fuck yes!","That´s it."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","vaginal-sex","anal-sex","penis-sex","penis-anal"],
			requirements: []
			},
			{
			id: "default-penis-main",
			group: [
				{
				comments: ["Time to get fucked whore.","Take it you fucking slut!","Ahhh! Fuck! What a fucking sluthole!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","penis-sex","penis-anal"],
			requirements: []
			},
			{
			id: "default-vaginal-anal-intro",
			group: [
				{
				comments: ["Time to take a ride.","Mmmmh! Give it to me!","You going to give it to me or what?"],
				portrait: "smile"
				}
			],
			modifiers: ["intro","vaginal-sex","anal-sex"],
			requirements: []
			},
			{
			id: "default-vaginal-anal-main",
			group: [
				{
				comments: ["Aaaah! Fuck! Give it to me!","Aaaaaaah! Fuck! That´s it! Yes!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","vaginal-sex","anal-sex"],
			requirements: []
			}
		];
		let masculine_sexLib = [
			{
			id: "masculine-intro",
			group: [
				{
				comments: ["Here we go again... I´ll never get used to this... I swear!","This is just so wrong..!","Again... Bro...! Calm down!","I´m not used to this body yet, slow down!"],
				portrait: "surprised"
				},
				{
				comments: ["If I have too...","Whatever... Let me just get to it.","Relax bro... Just let me get a breather here."],
				portrait: "default"
				}
			],
			modifiers: ["player-only","intro","vaginal-sex","anal-sex","blowjob-giving"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
			},
			{
			id: "masculine-main",
			group: [
				{
				comments: ["Oh fuck! Wait! It´s not s-supposed to feel THIS good!","Ugh! Fuck! Why does it feel so fucking good!","Ugh! Dude...","This is it for sure... Damn... This feels way b-bet-"],
				portrait: "surprised"
				}
			],
			modifiers: ["player-only","main","vaginal-sex","anal-sex","blowjob-giving"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
			}
		];
		let oral_sexLib = [
			{
			id: "oral-giving-intro",
			group: [
				{
				comments: ["Mmmmmh what a tasty treat we have here.","Let me take care of that.","Let me taste that.","Mmmh... *licks lips*..."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","blowjob-giving","cunnilingus-giving"],
			requirements: []
			},
			{
			id: "oral-receiving-intro",
			group: [
				{
				comments: ["Oh fuck yeah, use your mouth.","That´s it, lick it.","I wanna feel your lips.","Go on then, lick it.","Taste it, you´ll like it."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","blowjob-receiving","cunnilingus-receiving"],
			requirements: []
			},
			{
			id: "blowjob-giving-intro",
			group: [
				{
				comments: ["You going to fuck my mouth?","Alright, guess I can suck it.","You want my lips around that meatstick?","Oh yeah, let me taste that cock!",
				"Thinking about my lips around your cock?","Mhmmm, that looks tasty alright!","Give it to me- Let me taste that meatstick!"],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","blowjob-giving"],
			requirements: []
			},
			{
			id: "blowjob-receiving-intro",
			group: [
				{
				comments: ["Ahhh... Fuck yes... Suck me.","Take my cock in your mouth, come on whore...","Go on, put your sweet lips around this.","About time someone shut you up with some cock in that mouth!",
				"I´m going to fuck that mouth alright!","Gonna shove my cock so far down your throat you whore!","Open up now, come on slut."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","blowjob-receiving"],
			requirements: []
			},
			{
			id: "blowjob-giving-main",
			group: [
				{
				comments: ["*schlop*...Mmmmh~ tasty...*schlop*...*schlop*","Tasty cock~","Oh~ *schlop*... Mmmmhh...","Mhm! *slurp*...*gulp*",
				"I wonder how far I can take it?","Ooooh~... Tasty.","Mhmmmm~!","Like the feeling of my lips around your cock?","Oh yeah, fuck! That taste so-... Good!","Ooooh~"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","blowjob-giving"],
			requirements: []
			},
			{
			id: "blowjob-receiving-main",
			group: [
				{
				comments: ["Ahhh! Fuck! Suck me you whore!","Yeah, that´s it, lick it.","Take it all the way.","Suck on my lollipop!",
				"Aaaah! Yes, take it- take it all in that slutty mouth!","That mouth is one good fuckhole!","Put out your tongue! Let me fuck it!",
				"That´s it right there, suck it good... Take it as far down as you can... Just try.","Fuck yes, use those lips and that tongue...","Work that mouth, you whore."],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","blowjob-receiving"],
			requirements: []
			},
			{
			id: "cunnilingus-giving-main",
			group: [
				{
				comments: ["*lick* Mmmh, cover me in those pussy juices *lick-lick*","Tasty pussy~","Oh~ *lick*... Mmmmhh...","God damn this pussy is something special."],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","cunnilingus-giving"],
			requirements: []
			},
			{
			id: "cunnilingus-receiving-main",
			group: [
				{
				comments: ["Ahhh! Fuck! Lick that pussy, you whore!","Yeah, that´s it, lick my cunt.","Dig that tongue into my cunt.","Lick my pussy!","Lick me proper you slut, come on. Mmmmmh!","Eat me."],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","cunnilingus-receiving"],
			requirements: []
			},
			{
			id: "oral-giving-outro",
			group: [
				{
				comments: ["Cum for me~!... Give it here.","Come on, cum for me baby!","Come on, cover me with your cum!","Give it to me!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","blowjob-giving","cunnilingus-giving"],
			requirements: []
			},
			{
			id: "oral-receiving-outro",
			group: [
				{
				comments: ["Ooooh, I´m getting close!","It won´t be long now, getting closer!","Oh fuck! I´m gonna coom!","Fuck yes, I\'m cumming soon... Get that pretty mouth of yours ready!",
				"Ahhh! Getting there! OPEN UP!","You're one hungry cock-sucker aren\'t you? Ahhhh!","Ooooh, fuck! Work those lips! It'\s coming!",
				"Ahh! Shit! Get ready for me to paint that face!","Getting close!-OOH! Gonna fill your stomach with my cum you whore!","AAAH! Almost gonna burst! Get those lips ready!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","blowjob-receiving","cunnilingus-receiving"],
			requirements: []
			},
			{
			id: "blowjob-giving-outro",
			group: [
				{
				comments: ["You nearly there?","Warn me before you cum alright?","Mhm-... *slurp*....So good~!","Give it to me! Give me your cum!",
				"Mhm... Ahhh! Cum right into my mouth!","Paint my face with your cum!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","blowjob-giving"],
			requirements: []
			}
		];
		let sex_sexLib = [
			{
			id: "default-sex-intro",
			group: [
				{
				comments: ["Haven´t gotten any sex in quite a while...","Go on then! Fuck my cunt properly!"],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","vaginal-sex","penis-sex"],
			requirements: []
			},
			{
			id: "default-sex-main",
			group: [
				{
				comments: ["Oh fuck, yeah... Right there.","Oh fuck! Yes! Keep going!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","vaginal-sex","penis-sex"],
			requirements: []
			},
			{
			id: "default-sex-outro",
			group: [
				{
				comments: ["Oh fuck! I´m getting close!","Ahhh! Yes, nearly there!","Shit-shit! Yes! So close!","Just a little more!","Uuuuuuh! FUCK! Almost there!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","vaginal-sex","penis-sex"],
			requirements: []
			},
			{
			id: "vaginal-sex-intro",
			group: [
				{
				comments: ["Mmmmh, can´t wait to get you inside my pussy."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","vaginal-sex"],
			requirements: []
			},
			{
			id: "vaginal-sex-main",
			group: [
				{
				comments: ["Oh fuck, yeah... Right there.","Oh fuck! Yes! Keep going!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","vaginal-sex"],
			requirements: []
			},
			{
			id: "vaginal-sex-outro",
			group: [
				{
				comments: ["Oooooh! Shit shit! Fill my pussy!","Oh god! Fill me up!","Shoot that hot load inside of me!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","vaginal-sex"],
			requirements: []
			},
			{
			id: "penis-sex-intro",
			group: [
				{
				comments: ["Haven´t had some pussy in quite a while.","Time to fuck that pussy."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","penis-sex"],
			requirements: []
			},
			{
			id: "penis-sex-main",
			group: [
				{
				comments: ["Oh fuck, yeah... Right there, squeeze that pussy!","Aaaah! Fuck! This is some tight cunt you got bitch!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","penis-sex"],
			requirements: []
			},
			{
			id: "penis-sex-outro",
			group: [
				{
				comments: ["OOOOH! Take it! Let me fill that pussy!","Going to shoot that hot load inside of you!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","penis-sex"],
			requirements: []
			}
		];
		let anal_sexLib = [
			{
			id: "default-anal-intro",
			group: [
				{
				comments: ["Mmmmh, fuck, time for some ass action.","In the bootyhole!"],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","anal-sex","penis-anal"],
			requirements: []
			},
			{
			id: "default-anal-main",
			group: [
				{
				comments: ["Oh fuck, yeah... Right there.","Oh fuck! Yes! Keep going!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","anal-sex","penis-anal"],
			requirements: []
			},
			{
			id: "default-anal-outro",
			group: [
				{
				comments: ["Oh fuck! I´m getting close!","Ahhh! Yes, nearly there!","Shit-shit! Yes! So close!","Just a little more!","Uuuuuuh! FUCK! Almost there!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","anal-sex","penis-anal"],
			requirements: []
			},
			{
			id: "anal-sex-intro",
			group: [
				{
				comments: ["Mmmmh, can´t wait to get you in my behind."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","anal-sex"],
			requirements: []
			},
			{
			id: "anal-sex-main",
			group: [
				{
				comments: ["Oh fuck yeah...! Right there, fill my ass out!","Oh fuck! Yes! Keep going! Fuck my ass!","Go on then! Fuck my ass properly!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","anal-sex"],
			requirements: []
			},
			{
			id: "anal-sex-outro",
			group: [
				{
				comments: [],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","anal-sex"],
			requirements: []
			},
			{
			id: "penis-anal-intro",
			group: [
				{
				comments: ["Mmmmh, can´t wait to fill that behind","Haven´t had some ass in quite a while."],
				portrait: "smile"
				}
			],
			modifiers: ["intro","default","penis-anal"],
			requirements: []
			},
			{
			id: "penis-anal-main",
			group: [
				{
				comments: ["Aaaah! Fuck! This is some tight ass you got bitch!"],
				portrait: "smile"
				}
			],
			modifiers: ["main","default","penis-anal"],
			requirements: []
			},
			{
			id: "penis-anal-outro",
			group: [
				{
				comments: ["Ahhh, fuck! Yes! Going to fill that behind!"],
				portrait: "smile"
				}
			],
			modifiers: ["outro","default","penis-anal"],
			requirements: []
			}
		];
		let climax_sexLib = [
			{
			id: "default-climax",
			group: [
				{
				comments: ["Aaaaaaah! Fuck! That´s it! Yes!","OOOOH! FUCK!","OOOOOOOOOOOOOOH!","AAAAAAAAAAAH! SHIT! SHIT!","FUCK!"],
				portrait: "pleasure"
				}
			],
			modifiers: ["climax","default","vaginal-sex","anal-sex","penis-sex","penis-anal","blowjob-receiving","cunnilingus-receiving"],
			requirements: []
			},
			{
			id: "default-climax",
			group: [
				{
				comments: ["Fuck! That´s it right there, take my cum you slut!","YES! YES! TAKE IT YOU WHORE! AAAAAAAAAH!","DRAIN MY BALLS YOU- AH-OOOOOH!",
				"Aaaaaaah! Fuck! That\'s it! Yes!","Take it! Take it you bitch!"],
				portrait: "pleasure"
				}
			],
			modifiers: ["climax","default","penis-sex","penis-anal","blowjob-receiving"],
			requirements: []
			},
			{
			id: "oral-giving-climax",
			group: [
				{
				comments: ["Yes, cum for me!"],
				portrait: "smile"
				}
			],
			modifiers: ["climax","default","blowjob-giving","cunnilingus-giving"],
			requirements: []
			},
			{
			id: "anal-sex-climax",
			group: [
				{
				comments: ["Oooooh! Shit shit! Fill my ass!"],
				portrait: "pleasure"
				}
			],
			modifiers: ["climax","default","anal-sex"],
			requirements: []
			},
			{
			id: "penis-anal-climax",
			group: [
				{
				comments: ["OOOOH! Take it! Let me fill that behind!"],
				portrait: "pleasure"
				}
			],
			modifiers: ["climax","default","penis-anal"],
			requirements: []
			},
			{
			id: "default-boy-climax",
			group: [
				{
				comments: ["UGH! FUCK! DUDE I´M CUMMING!","Oh fuck man! That´s it bro! AHHHH!","DAMN THAT´S IT MAN!","Why does this feel so wrong, yet so right!","Ugh! Dude... FUCK!"],
				portrait: "pleasure"
				}
			],
			modifiers: ["player-only","climax","default","penis-anal","penis-sex","anal-sex","vaginal-sex","blowjob-receiving"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
			},
			{
			id: "blowjob-giving-boy-climax",
			group: [
				{
				comments: ["Ugh! Really? You came too hard!","Bro, why there! Why did you have to cum there!"],
				portrait: "angry"
				}
			],
			modifiers: ["player-only","climax","default","blowjob-giving"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
			}
		];
		let rough_sexlib = [
			{
			id: "rough-intro",
			group: [
				{
				comments: ["Please, no! Not so fast!","Not so rough! Take it slow!"],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","rough","blowjob-giving","vaginal-sex","anal-sex"],
			requirements: []
			},
			{
			id: "rough-main",
			group: [
				{
				comments: ["Aaaahhh! Nooo! OOOOOOOH!","No more please..."],
				portrait: "surprised"
				}
			],
			modifiers: ["intro","rough","blowjob-giving","vaginal-sex","anal-sex"],
			requirements: []
			}
		];
		setup.shuffle(virgin_sexLib);
		//player_sexLib = masculine_sexLib.concat(default_oral_sexLib);
		let globals_sexLib = default_sexLib.concat(masculine_sexLib,oral_sexLib,sex_sexLib,anal_sexLib,climax_sexLib,rough_sexlib);
		setup.shuffle(globals_sexLib);
		var loadedLibrary = virgin_sexLib.concat(globals_sexLib);
	} else if (comments == "stripper"){
		let stripper_comments = [
			{
			id: "default",
			group: [
				{
				comments: ["Show us your tits girl!","Ah! Yes! The titties! Give it to me!","Pop those babies out!","Move that body slut!","Show us your moves, whore!","This bitch is hot!"],
				portrait: "smile"
				}
			],
			modifiers: ["standard", "cheer", "stripper", "pole"],
			requirements: []
			}
		];
		var loadedLibrary = stripper_comments;
	setup.shuffle(loadedLibrary);
	} else if (comments == "socials"){
		let player_comments = [
			{
			id: "default",
			group: [
				{
				comments: ["Hey there.","Got a minute?"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "talking", "intro", "greeting"],
			requirements: []
			},
			{
			id: "slut",
			group: [
				{
				comments: ["Hey sexy!","Mhmm! Hey there!"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "talking", "intro", "greeting"],
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
			},
			{
			id: "bimbo",
			group: [
				{
				comments: ["You seen any cocks around here?","Mhmmm could really use a cock right about no-... oh hey there!"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "talking", "intro", "greeting"],
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}]
			}
		];
		let brenda_comments = [
			{
			id: "brenda-default",
			group: [
				{
				comments: ["So... what´s up gurl?"],
				portrait: "smile"
				}
			],
			modifiers: ["Brenda", "talking", "intro", "greeting"],
			requirements: []
			},
			{
			id: "brenda-compliment",
			group: [
				{
				comments: ["Hey there gurl! You lookin´ fine!","Ooooh! Looking sexy there! Ya little minx!"],
				portrait: "smile"
				}
			],
			modifiers: ["Brenda", "talking", "intro", "greeting", "compliment"],
			requirements: [{id: 'sexy', type: 'score-min', level: 2}]
			}
		];
		let lily_comments = [
			{
			id: "lily-default",
			group: [
				{
				comments: ["What do you want rookie?","*sigh*... what?"],
				portrait: "smile"
				}
			],
			modifiers: ["Lily", "talking", "intro", "greeting"],
			requirements: []
			},
			{
			id: "lily-compliment",
			group: [
				{
				comments: ["Nice rags rookie.","Hey-now... that´s looking kinda sexy, where did you buy that?"],
				portrait: "smile"
				}
			],
			modifiers: ["Lily", "talking", "intro", "greeting", "compliment"],
			requirements: [{id: 'sexy', type: 'score-min', level: 2}]
			}
		];
		let linus_comments = [
			{
			id: "linus-default",
			group: [
				{
				comments: ["Why hello there! Need something?","Yes? What can I help with?"],
				portrait: "smile"
				}
			],
			modifiers: ["Dr. Linus", "talking", "intro", "greeting"],
			requirements: []
			},
			{
			id: "linus-compliment",
			group: [
				{
				comments: ["Looks like you´ve begun to fit in! That´s good!"],
				portrait: "smile"
				}
			],
			modifiers: ["Dr. Linus", "talking", "intro", "greeting", "compliment"],
			requirements: [{id: 'sexy', type: 'score-min', level: 2}]
			}
		];
		var loadedLibrary = brenda_comments.concat(lily_comments, linus_comments, player_comments);
		setup.shuffle(loadedLibrary);
	} else if (comments == "morning"){
		let player_comments = [
			{
			id: "default",
			group: [
				{
				comments: ["That was nice... nothing beats a good night´s rest!"],
				portrait: "smile"
				},
				{
				comments: ["Mhmmmm... *yawn*... a new day it is...","*yawn*... five more minutes...."],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: []
			},
			{
			id: "default",
			group: [
				{
				comments: ["I wonder what today has in store!","Seize the day!... Or something like that."],
				portrait: "smile"
				},
				{
				comments: ["Hopefully a good day in waiting."],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "second"],
			requirements: []
			},
			{
			id: "bimbo",
			group: [
				{
				comments: ["Mhmmm.... zzZZZzz.. cocks and cummies....*yawn*.....","Big ones.... long ones.. I want them all inside of me...*yawn*","Oh is that for me? zzzZZZzzz-... Give it here...*yawn*"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}]
			},
			{
			id: "bimbo",
			group: [
				{
				comments: ["Maybe we´ll get to suck some juicy cocks this day! Mhm!","The Cock Hunt is on! Today is the day!","Those yummy cocks aren´t going to suck themselves!"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "morning", "second"],
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}]
			},
			{
			id: "slut",
			group: [
				{
				comments: ["Well hello there handsome... zzzZZzzzZZzzz....","Did you bring your friends...? zzzZZZzz... fine by me....","Plenty of me for everyone...*yawn*..zzzZZZzzz... take me..."],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
			},
			{
			id: "slut",
			group: [
				{
				comments: ["Might be time for a new pedicure... Oh!... Or a manicure?","I should update that wardrobe...*sigh*... None of it is skimpy enough...",
				"I could use a new hairstyle, this one is definitely not -in- anymore..."],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "morning", "second"],
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
			},
			{
			id: "feminine",
			group: [
				{
				comments: ["Is it really that time of the month again?..zzzZZZzz....","This bra is too small...*yawn*...zzzZZzzz-...","Wow... he really is so.. zzzZZZzz... much bigger than me..*yawn*"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
			},
			{
			id: "feminine",
			group: [
				{
				comments: ["Am I looking fatter?... Should I diet?"],
				portrait: "smile"
				}
			],
			modifiers: ["player-only", "morning", "second"],
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
			},
			{
			id: "feminine",
			group: [
				{
				comments: ["Another day with creeps to bother me all day... great...","Today I will tell them off... No groping and touching this ass...."],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "second"],
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Slut', type: 'psyche-max', level: 2}]
			},
			{
			id: "masculine",
			group: [
				{
				comments: ["No-no!..zzzZZZzz.... I´m not a woman....","I swear.... zzzZZZzzz... I am definitely a guy....","I guess... It isn´t that bad to have titties... zzzZZZzzz... heheh..."],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 3}]
			},
			{
			id: "masculine",
			group: [
				{
				comments: ["Another day in this body...","God... These things keep getting in the way...","Maybe I should work out? Make up for this girly body... *sigh*... what am I even saying?"],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "second"],
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 3}]
			},
			{
			id: "masculine",
			group: [
				{
				comments: ["So soft... zzzZZZzzz... heheh... I kinda like it.","I am girly guy.... zzzZZZzzz... no wait... I am not...."],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 1},{id: 'Feminine', type: 'psyche-max', level: 2}]
			},
			{
			id: "masculine",
			group: [
				{
				comments: ["I can be a girl... zzzZZZzzz... I can do it..."],
				portrait: "default"
				}
			],
			modifiers: ["player-only", "morning", "first"],
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Feminine', type: 'psyche-max', level: 3}]
			},
		];
		var loadedLibrary = player_comments;
		setup.shuffle(loadedLibrary);
	} else {
		var loadedLibrary = ["Error: No comment comments loaded."];
	}
	//console.log("Loaded Comments: " + comments);
	return loadedLibrary;
}

setup.comPortrait = function (commenter, portrait) {
	if (commenter.modifiers.includes("player")) {
		let pMakeup = commenter.body.face.makeup;
		let pHairstyle = commenter.body.hair.styleName;
		let pHaircolor = commenter.body.hair.color;
		var comPortrait = "images/portraits/player/" + portrait + "/" + pMakeup + "-" + pHairstyle + "-" + pHaircolor + ".png";
	} else {
		var comPortrait = "images/portraits/" + commenter.portraitName + "/" + portrait + ".png";
	}
	return comPortrait;
}

//Sex: commenter(the one making comment), group(comments), stage(intro, ongoing, climax or outro(active/passive)), type (current sex act), modifier(sensual, rough, etc)
//Combat: commenter(the one making comment), group(comments), stage(combat stage(typically standard)), type (attack, defense), modifier(typically racial)
//setup.comment(givingEntity, comments, 'blowjob-giving', sex.modifier, 'virgin')
setup.comment = function (commenter, comments, stage, type, modifier, br) {
	let comFound = false;
	let comName = commenter.name;
	let comText = "ERROR: Comment text not found.";
	let comPortrait = "images/portraits/unknown/default.png";
	SugarCube.State.variables.defSearch = false;
	if (commenter.modifiers.includes("player")) {
		var isPlayer = true;
		if (commenter.gender == "female") {
			comName = commenter.femaleName;
		} else {
			comName = commenter.maleName;
		}
	} else {
		var isPlayer = false;
	}
	//console.log("Player:" + isPlayer);
	//console.log("Searching for comment(commenter: " + commenter.name + ", stage:" + stage + ", type:" + type + ", modifier:" + modifier + ", isPlayer:" + isPlayer + ")...");
	for (let i = 0; i < comments.length; i++) {
		if (comments[i].modifiers.includes(stage) && comments[i].modifiers.includes(type) && comments[i].modifiers.includes(modifier)){
			if (comments[i].modifiers.includes("player-only")) {
				if (isPlayer == true) {
					let requirements = comments[i].requirements;
					let check = setup.checkReq(requirements, commenter);
					if (check == true) {
						comFound = true;
						let groupLength = comments[i].group.length;
						let groupInt = setup.random(groupLength);
						let comLength = comments[i].group[groupInt].comments.length;
						let comInt = setup.random(comLength);
						comText = comments[i].group[groupInt].comments[comInt];
						//console.log("Comment Found: " + comText);
						comPortrait = setup.comPortrait(commenter, comments[i].group[groupInt].portrait);
						break;
					}
				}
			} else {
				let groupLength = comments[i].group.length;
				let groupInt = setup.random(groupLength);
				let comLength = comments[i].group[groupInt].comments.length;
				let comInt = setup.random(comLength);
				comText = comments[i].group[groupInt].comments[comInt];
				//console.log("Comment Found: " + comText);
				comPortrait = setup.comPortrait(commenter, comments[i].group[groupInt].portrait);
				break;
			}
		}
	}
	//If no comment is found, look for default instead
	if (comFound == false) {	
		//console.log("No Comment Found: Default loaded instead.");
		SugarCube.State.variables.defSearch = true;
		for (let i = 0; i < comments.length; i++) {
			if (comments[i].modifiers.includes(stage) && comments[i].modifiers.includes(type) && comments[i].modifiers.includes("default")) {
				let groupLength = comments[i].group.length;
				let groupInt = setup.random(groupLength);
				let comLength = comments[i].group[groupInt].comments.length;
				let comInt = setup.random(comLength);
				comText = comments[i].group[groupInt].comments[comInt];
				//console.log("Comment Found: " + comText);
				comPortrait = setup.comPortrait(commenter, comments[i].group[groupInt].portrait);
				break;
			}
		}							
	}	
	let returnCom = "<div class='speaker-container'><div class='speaker-portrait'><img src='" + comPortrait + "' style='border-radius:0.8em;' width=100% height=100%></div><div class='speaker-text'><div class='speaker-header'>" + comName + "</div><div class='speaker-text'>" + comText + "</div></div></div>";
	if (br == "nobreak" || br == undefined) {
		return returnCom;
	} else {
		return "<br><br>" + returnCom + "<br><br>";
	}
	
}	

setup.stripperCheer = function (commenters, modifier) {
	let comRan = setup.random(3);
	switch(comRan) {
		case 0:
		var commenter = commenters.client1;
		break;
		case 1:
		var commenter = commenters.client2;
		break;
		case 2:
		var commenter = commenters.client6;
		break;
		default:
		var commenter = commenters.client7;
	}
	let comments = 'stripper';
	let type = 'cheer';
	let stage = 'stripper';
	modifier = 'pole';
	let returnCheer = setup.comment(commenter, comments, stage, type, modifier);
	return returnCheer;
}