setup.getSexComment = function (entity, stage, act, modifier, isPlayer) {
    let virgin = [
        {
        id: "virgin-blowjob-receiving",
        group: [
            {
            comments: ["Oh fuck! It´s my first blowjob, like ever! Slow down?!"],
            portrait: "surprised"
            }
        ],
        modifiers: ["intro","sensual","player-only","virgin","blowjob-receiving"],
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
        modifiers: ["intro","sensual","player-only","virgin","blowjob-giving"],
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
        id: "virgin-boy-standard",
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
    let standard = [
        {
        id: "standard-intro",
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
        id: "standard-penis-main",
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
        id: "standard-vaginal-anal-intro",
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
        id: "standard-vaginal-anal-main",
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
    let masculine = [
        {
        id: "masculine-intro",
        group: [
            {
            comments: ["Here we go again... I´ll never get used to this... I swear!","This is just so wrong..!","Again... Bro...! Calm down!","I´m not used to this body yet, slow down!"],
            portrait: "surprised"
            },
            {
            comments: ["If I have too...","Whatever... Let me just get to it.","Relax bro... Just let me get a breather here."],
            portrait: "standard"
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
    let oral = [
        {
        id: "oral-giving-intro",
        group: [
            {
            comments: ["Mmmmmh what a tasty treat we have here.","Let me take care of that.","Let me taste that.","Mmmh... *licks lips*..."],
            portrait: "smile"
            }
        ],
        modifiers: ["intro","standard","blowjob-giving","cunnilingus-giving"],
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
        modifiers: ["intro","standard","blowjob-receiving","cunnilingus-receiving"],
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
        modifiers: ["intro","standard","blowjob-giving"],
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
        modifiers: ["intro","standard","blowjob-receiving"],
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
        modifiers: ["main","standard","blowjob-giving"],
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
        modifiers: ["main","standard","blowjob-receiving"],
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
        modifiers: ["main","standard","cunnilingus-giving"],
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
        modifiers: ["main","standard","cunnilingus-receiving"],
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
        modifiers: ["outro","standard","blowjob-giving","cunnilingus-giving"],
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
        modifiers: ["outro","standard","blowjob-receiving","cunnilingus-receiving"],
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
        modifiers: ["outro","standard","blowjob-giving"],
        requirements: []
        }
    ];
    let sex = [
        {
        id: "standard-sex-intro",
        group: [
            {
            comments: ["Haven´t gotten any sex in quite a while...","Go on then! Fuck my cunt properly!"],
            portrait: "smile"
            }
        ],
        modifiers: ["intro","standard","vaginal-sex","penis-sex"],
        requirements: []
        },
        {
        id: "standard-sex-main",
        group: [
            {
            comments: ["Oh fuck, yeah... Right there.","Oh fuck! Yes! Keep going!"],
            portrait: "smile"
            }
        ],
        modifiers: ["main","standard","vaginal-sex","penis-sex"],
        requirements: []
        },
        {
        id: "standard-sex-outro",
        group: [
            {
            comments: ["Oh fuck! I´m getting close!","Ahhh! Yes, nearly there!","Shit-shit! Yes! So close!","Just a little more!","Uuuuuuh! FUCK! Almost there!"],
            portrait: "smile"
            }
        ],
        modifiers: ["outro","standard","vaginal-sex","penis-sex"],
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
        modifiers: ["intro","standard","vaginal-sex"],
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
        modifiers: ["main","standard","vaginal-sex"],
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
        modifiers: ["outro","standard","vaginal-sex"],
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
        modifiers: ["intro","standard","penis-sex"],
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
        modifiers: ["main","standard","penis-sex"],
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
        modifiers: ["outro","standard","penis-sex"],
        requirements: []
        }
    ];
    let anal = [
        {
        id: "standard-anal-intro",
        group: [
            {
            comments: ["Mmmmh, fuck, time for some ass action.","In the bootyhole!"],
            portrait: "smile"
            }
        ],
        modifiers: ["intro","standard","anal-sex","penis-anal"],
        requirements: []
        },
        {
        id: "standard-anal-main",
        group: [
            {
            comments: ["Oh fuck, yeah... Right there.","Oh fuck! Yes! Keep going!"],
            portrait: "smile"
            }
        ],
        modifiers: ["main","standard","anal-sex","penis-anal"],
        requirements: []
        },
        {
        id: "standard-anal-outro",
        group: [
            {
            comments: ["Oh fuck! I´m getting close!","Ahhh! Yes, nearly there!","Shit-shit! Yes! So close!","Just a little more!","Uuuuuuh! FUCK! Almost there!"],
            portrait: "smile"
            }
        ],
        modifiers: ["outro","standard","anal-sex","penis-anal"],
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
        modifiers: ["intro","standard","anal-sex"],
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
        modifiers: ["main","standard","anal-sex"],
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
        modifiers: ["outro","standard","anal-sex"],
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
        modifiers: ["intro","standard","penis-anal"],
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
        modifiers: ["main","standard","penis-anal"],
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
        modifiers: ["outro","standard","penis-anal"],
        requirements: []
        }
    ];
    let climax = [
        {
        id: "standard-climax",
        group: [
            {
            comments: ["Aaaaaaah! Fuck! That´s it! Yes!","OOOOH! FUCK!","OOOOOOOOOOOOOOH!","AAAAAAAAAAAH! SHIT! SHIT!","FUCK!"],
            portrait: "pleasure"
            }
        ],
        modifiers: ["climax","standard","vaginal-sex","anal-sex","penis-sex","penis-anal","blowjob-receiving","cunnilingus-receiving"],
        requirements: []
        },
        {
        id: "standard-climax",
        group: [
            {
            comments: ["Fuck! That´s it right there, take my cum you slut!","YES! YES! TAKE IT YOU WHORE! AAAAAAAAAH!","DRAIN MY BALLS YOU- AH-OOOOOH!",
            "Aaaaaaah! Fuck! That\'s it! Yes!","Take it! Take it you bitch!"],
            portrait: "pleasure"
            }
        ],
        modifiers: ["climax","standard","penis-sex","penis-anal","blowjob-receiving"],
        requirements: []
        },
        {
        id: "oral-giving-climax",
        group: [
            {
            comments: ["Mmmmh, delicious!", "Mmmmmmh."],
            portrait: "smile"
            }
        ],
        modifiers: ["climax","standard","blowjob-giving","cunnilingus-giving"],
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
        modifiers: ["climax","standard","anal-sex"],
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
        modifiers: ["climax","standard","penis-anal"],
        requirements: []
        },
        {
        id: "standard-boy-climax",
        group: [
            {
            comments: ["UGH! FUCK! DUDE I´M CUMMING!","Oh fuck man! That´s it bro! AHHHH!","DAMN THAT´S IT MAN!","Why does this feel so wrong, yet so right!","Ugh! Dude... FUCK!"],
            portrait: "pleasure"
            }
        ],
        modifiers: ["player-only","climax","standard","penis-anal","penis-sex","anal-sex","vaginal-sex","blowjob-receiving"],
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
        modifiers: ["player-only","climax","standard","blowjob-giving"],
        requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
        }
    ];
    let rough = [
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
    let allComments = standard.concat(masculine,oral,sex,anal,climax,rough);
    setup.shuffle(allComments);
    if (modifier == undefined) {
        modifier = "standard";
    }
    if (modifier == "virgin") {
        setup.shuffle(virgin);
        allComments = virgin.concat(allComments);
    }
    let comments = ["Give it to me!", "Oh fuck! YES!", "Mmmmmmmmmh!"];
    let portrait = "pleasure";
    for (let i = 0; i < allComments.length; i++) {
        if (allComments[i].modifiers.includes(stage) && allComments[i].modifiers.includes(act) && allComments[i].modifiers.includes(modifier)) {
            let n = Math.floor(Math.random() * allComments[i].group.length);
            comments = allComments[i].group[n].comments;
            portrait = allComments[i].group[n].portrait;
            break;
        }
    }
	return setup.speak(entity, comments, portrait);
}