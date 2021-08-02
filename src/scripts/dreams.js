setup.loadDreamsLib = function () {
	let default_dreams = [
		{
		name: "Class Room (non-girly)",
		passage: '<<= setup.eventText("You find yourself sitting in the familiar class room. Miss Palmers is as always harshly preaching about gender rights before the class.")>>' + 
		'<<= setup.speak($characters.palmer, "And thus we can conclude that both the male and female sex require equal rights in all areas of society. Any objections?", "angry")>>' + 
		'<<= setup.eventText("You look down on your penis. Wait... You\'re naked? In the middle of class? You look up only to see Miss Palmers stare you down completely.")>>' + 
		'<<= setup.speak($characters.palmer, "Of course, except for $player.maleName, he\'s not even a real man! Just a little sissy-woman!")>>' + 
		'<<= setup.eventText("The class erupts in laughter, pointing fingers at you. You try to cover yourself, only to realize that your cock is gone and you have tits! Holy shit!")>>' + 
		'<<= setup.speak($characters.jake, "Dude! You\'re a fucking girl! And a hot one at that! FUCK!", "bruh")>>' + 
		'<<= setup.speak($characters.malePlayer, "No-no-no! I\'m NOT a woman! I\'m a man! I SWEAR!", "surprised")>>' + 
		'<<= setup.speak($characters.jessica, "Hey! $player.femaleName, we should like, totally go shopping for some clothes! You like-Totally need some, and a makeover!")>>' + 
		'<<= setup.speak($characters.malePlayer, "No! NOT ANOTHER MAKEOVER! NO!", "surprised")>>' + 
		'<<= setup.eventText("You get up and try to run for the exit of the classroom, but for some reason you\'re not getting anywhere.")>>' + 
		'<<run setup.psyche($player, "Feminine", 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		name: "Class Room (girly)",
		passage: '<<= setup.eventText("After a long class you\'re finally able to take a break and get some well needed girl-talk with your BFF.")>>' + 
		'<<= setup.speak($player, "Hey gurl! So-like, we going to the mall after this? I like totally need myself a new pair of heels!", "smile")>>' + 
		'<<= setup.eventText("Jessica looks at you with confusion, like she barely knows you.")>>' + 
		'<<= setup.speak($characters.jessica, "Uuuuh... $player.maleName? Are you alright? Weren\'t you like... Usually a dude and all that? You know... With a fucking cock and shit?")>>' + 
		'<<= setup.speak($player, "Uuuuh totally like don\'t know a thang about what you\'re talking about?", "smile")>>' + 
		'<<= setup.speak($characters.jake, "Holy shit! $player.maleName is a girl! Look everyone!", "bruh")>>' + 
		'<<= setup.eventText("The whole class gathers around you, pointing fingers and laughing at your silly girly clothes and attitude.")>>' + 
		'<<= setup.speak($player, "Wait? I\'m not supposed to be a girl? Oh... Oh no... OH SHIT! I\'m a fucking girl?!", "surprised")>>' + 
		'<<= setup.speak($characters.jessica, "Well... It\'s okay I suppose... Want to be BFF\'s?")>>' + 
		'<<= setup.speak($characters.malePlayer, "NoooOOOoooo!!!", "surprised")>>' + 
		'<<run setup.psyche($player, "Feminine", 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-min', level: 2},{id: 'Feminine', type: 'psyche-max', level: 3}]
		},
		{
		name: "Class Room (slutty)",
		passage: '<<= setup.eventText("There you are, sitting in class filing your nails, making sure they\'re absolutely perfect. The nail polish you had done yesterday is really popping, definitely going to be a massive hit with the boys for sure!")>>' + 
		'<<= setup.speak($characters.jessica, "Heeey...! If it isn\'t my BFF... So like, we going shopping or what? I saw these pink girly pumps, to-o-tally your style GURL!", "smile")>>' + 
		'<<= setup.speak($player, "Hells yeah gurl, I\'m a little dry on cash though, but I have a few clients after school. Gotta shake that moneymaker!", "smile")>>' + 
		'<<= setup.speak($characters.jessica, "You dirty gurl!", "smile")>>' + 
		'<<= setup.eventText("You make sure you have your condoms in your pink bag, definitely not going to catch anything when fucking those filthy jocks for money.")>>' + 
		'<<= setup.speak($characters.jessica, "So like you heard about Palmer and Jake, totally got caught schlicking it after class, what a whore!")>>' + 
		'<<= setup.speak($player, "Always knew Palmer was a big black cock whore, literally written on her forehead.")>>' + 
		'<<= setup.speak($characters.jessica, "Yeah what a fucking whore, l-o-l.", "smile")>>' + 
		'<<= setup.eventText("The door to the classroom suddenly bursts open as Jake proudly waltz in, his 12 inch long monster dong flopping around.")>>' + 
		'<<= setup.speak($characters.jake, "I. AM. THE MONSTER COCK!", "smile")>>' + 
		'<<run setup.psyche($player, "Feminine", 2, 2)>><<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
		},
		{
		name: "Class Room (dress-up, non-slutty)",
		passage: '<<= setup.eventText("There you are, sitting in class minding your own business. Miss Palmer enters.")>>' + 
		'<<= setup.speak($characters.palmer, "Attention! Silence! Class-IS-in-SESSION!", "angry")>>' + 
		'<<= setup.speak($characters.malePlayer, "Oh boy...")>>' + 
		'<<= setup.eventText("The class grows silent as Palmer turns towards the blackboard.")>>' + 
		'<<= setup.speak($characters.palmer, "As you all know! Today is a very special day! Today is \'dress up $player.maleName day!\'")>>' + 
		'<<= setup.speak($characters.malePlayer, "What?! NO!", "surprised")>>' + 
		'<<= setup.speak($characters.jessica, "Yay!", "smile")>>' + 
		'<<= setup.eventText("The entire class erupts in laughter as they bring out the girly and slutty clothes they brought with them from home.")>>' + 
		'<<= setup.speak($characters.jake, "Time to look like a girl! BRO! HAHAHAHA!", "smile")>>' + 
		'<<run setup.psyche($player, "Feminine", 2, 2)>><<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 3}]
		},
		{
		name: "Class Room (dress-up, slutty)",
		passage: '<<= setup.eventText("There you are, sitting in class minding your own business. Miss Palmer enters.")>>' + 
		'<<= setup.speak($characters.palmer, "Attention! Silence! Class-IS-in-SESSION!", "angry")>>' + 
		'<<= setup.speak($characters.malePlayer, "Oh boy...")>>' + 
		'<<= setup.eventText("The class grows silent as Palmer turns towards the blackboard.")>>' + 
		'<<= setup.speak($characters.palmer, "As you all know! Today is a very special day! Today is \'dress up $player.maleName day!\'")>>' + 
		'<<= setup.speak($characters.malePlayer, "Again... ugh! Better turn myself into a slut then! The true me!", "smile")>>' + 
		'<<= setup.speak($characters.jessica, "Yay!", "smile")>>' + 
		'<<= setup.speak($player, "Ta-dah! Gather around now boys!", "smile")>>' + 
		'<<= setup.eventText("The entire class erupts in laughter as they bring out the girly and slutty clothes they brought with them from home.")>>' + 
		'<<= setup.speak($characters.jake, "Hot!", "smile")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2)>><br>',
		requirements: [{id: 'Slutty', type: 'psyche-min', level: 2}]
		},
	];
	let dreams_girly = [
		{
		name: "Titty Growth (non-slutty)",
		passage: '<<= setup.eventText("There you stand in the hollow black void. No longer a man you are left with the only choice that matters... Is it time to go big?")>>' + 
		'<<= setup.speak($characters.secret, "So what say you? Big? Hmmm? Do you really think you have what it takes?")>>' + 
		'<<= setup.speak($player, "What it takes? Where am i? What are you talking about?")>>' + 
		'<<= setup.eventText("You feel your chest begin to expand, your bosom filling with pleasure as they grow!")>>' + 
		'<<= setup.speak($player, "Whoa-woah there! What the hell?!", "surprised")>>' + 
		'<<= setup.speak($characters.secret, "Heh-heh! BIG! Bimbo big!")>>' + 
		'<<= setup.eventText("Your chest continues to expand and becomes almost bimbo-like breasts, globe-like in size. You try to touch them and even push them back in, but nothing works.")>>' + 
		'<<= setup.speak($player, "Stop! This is too big! I\'m not a bimbo!", "surprised")>>' + 
		'<<= setup.speak($characters.secret, "You are! Slutty bimbo! For me! BIGGER!")>>' + 
		'<<= setup.eventText("Your tits become truly terrifyingly huge as they grow well beyond what is within reason, and then....")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 1},{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		name: "Titty Growth (slutty)",
		passage: '<<= setup.eventText("There you stand in that familiar hollow black void. Now a proudly sexually liberated woman... Is it time to go big?")>>' + 
		'<<= setup.speak($characters.secret, "Time to go big!")>>' + 
		'<<= setup.speak($player, "Mmmmh yes! Me like big! BIG! TITTIES! Haha!", "pleasure")>>' + 
		'<<= setup.eventText("You feel your chest begin to expand, your bosom filling with pleasure as they grow! Your nether regions beging to wetten as they gush with pleasure fluids.")>>' + 
		'<<= setup.speak($player, "Aaaaaaaaaaaah! BIGGER!", "pleasure")>>' + 
		'<<= setup.speak($characters.secret, "Heh-heh! BIG! Yes you understand!")>>' + 
		'<<= setup.eventText("Your chest continues to expand and becomes almost bimbo-like breasts, globe-like in size. You rub them for good luck on their lusty journey to become what is true and right.")>>' + 
		'<<= setup.speak($player, "Never stop! More!", "angry")>>' + 
		'<<= setup.speak($characters.secret, "Y-yes... Mistress!")>>' + 
		'<<= setup.eventText("Your tits become truly terrifyingly huge as they grow well beyond what is within reason, and then....")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		}
	];
	let dreams_slutty = [
		{
		name: "Jessica Sex (non-girly)",
		passage: '<<= setup.eventText("You feel the soft bed sheets and the heat rising. You touch her plush bum, giving it a lovely squeeze. You feel her hot breath on your face, her moaning getting the better of you.")>>' + 
		'<<= setup.eventText("Her hands trail along your rock hard abs, slowly reaching your groin.")>>' + 
		'<<= setup.speak($characters.jessica, "Mmmmh, take me $player.maleName... Fuck me hard!")>>' + 
		'<<= setup.speak($characters.malePlayer, "I certainly intend to!", "smile")>>' + 
		'<<= setup.eventText("However, as you feel hand finally reaching your crotch, they begin to look for something, that\'s not there, no... Her fingers slither up through your wet pussy lips, exploring you gently.")>>' + 
		'<<= setup.speak($characters.jessica, "Oh, what a surprise, my man\'s not a man it seems, but a little girly-boy!")>>' + 
		'<<= setup.speak($characters.malePlayer, "Wait! No! I\'m a man I swear, it was right there a moment ago!", "surprised")>>' + 
		'<<= setup.speak($characters.jessica, "It\'s okay, I have a surprise for you too!", "smile")>>' + 
		'<<= setup.eventText("The sheets covering her hips and mound begin to bulge and grow...")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 3}]
		},
		{
		name: "Jessica Sex (girly)",
		passage: '<<= setup.eventText("You feel the soft bed sheets and the heat rising. The lush softness enveloping your raw cock and her lewd juices covering your manhood whilst her pussy clenches around it.")>>' + 
		'<<= setup.speak($characters.jessica, "Oh shit! $player.maleName...! Give it to me!", "smile")>>' + 
		'<<= setup.eventText("You grab her hips and just go at it giving your everything.")>>' + 
		'<<= setup.speak($characters.malePlayer, "Ahhh fuck! You\'re tight.", "smile")>>' + 
		'<<= setup.speak($characters.jessica, "Uuuuuh what do you mean?")>>' + 
		'<<= setup.speak($characters.malePlayer, "I mean you feel amazing around my cock!")>>' + 
		'<<= setup.speak($characters.jessica, "Sweetie it\'s the other way around? I\'m inside you!", "smile")>>' + 
		'<<= setup.eventText("You look down in horror as you realize your cock is gone and instead there is a plush wet vagina. A swelling feeling suddenly expands inside your nether regions as you feel her cock fill you out completely. A pleasure unlike anything you\'ve ever felt before overtakes your whole lower body.")>>' + 
		'<<= setup.speak($characters.jessica, "I\'m gonna fuck the shit out of you now babe!", "smile")>>' + 
		'<<= setup.speak($player, "Oh FUCK! Please! Wait!", "pleasure")>>' + 
		'<<= setup.eventText("Her massive cock burrows deeper inside of you and you black out.")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
		},
		{
		name: "Blowjob Dream (Novice)",
		passage: '<<= setup.eventText("Everything is darkness and there you stand in it.")>>' + 
		'<<= setup.eventText("A floating penis suddenly pops out of nowhere, staring at you menacingly even though it has no eyes.")>>' + 
		'<<= setup.eventText("You lick your lips... Maybe a taste?")>>' + 
		'<<= setup.speak($characters.malePlayer, "No-no! NO! I am NOT a cock-sucker! NO! Only women suck cocks!", "surprised")>>' + 
		'<<= setup.eventText("You try to close your eyes, but it doesn\'t help. Looking down you notice you have changed.")>>' + 
		'<<= setup.speak($player, "W-what? I\'m a woman now?! NO! I\'m a man! Or am i?", "angry")>>' + 
		'<<= setup.eventText("The cock grows two funny legs and begins to tap-dance and an echo begins to sound in the howling void surrounding you.")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 
		'<<= setup.speak($player, "No! No! NO!", "surprised")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 		
		'<<= setup.eventText("Two more cocks pops out of nowhere and begin to dance as well and before you know it, you\'re surrounded by tap-dancing floating cocks.")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 
		'<<= setup.speak($player, "NOOOOOOOOOOOOOO!", "surprised")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Blowjob', type: 'skill-max', level: 1},{id: 'Slut', type: 'psyche-max', level: 3}]
		},
		{
		name: "Blowjob Dream (Skilled)",
		passage: '<<= setup.eventText("Everything is darkness and there you stand in it.")>>' + 
		'<<= setup.eventText("A floating penis suddenly pops out of nowhere, staring at you menacingly even though it has no eyes.")>>' + 
		'<<= setup.eventText("You lick your lips... Maybe a taste?")>>' + 
		'<<= setup.speak($player, "Mmmh.. I suppose it wouldn\'t hurt?", "smile")>>' + 
		'<<= setup.eventText("You invitingly open your mouth to welcome the veiny thick cock and it floats closer, until you taste it\'s salty pre-cum on your tongue.")>>' + 
		'<<= setup.eventText("You feel it slowly glacing your tongue with it\'s juices as it gracefully rocks back and forth.")>>' + 		
		'<<= setup.speak($player, "Mmmh.. Cocks taste good! I- Wait... Am I really a... A cock-sucker?", "surprised")>>' + 
		'<<= setup.eventText("Before you can answer your own question that floating cock rams itself down your throat and fills it with it\'s thick delicious seed. You feel the trembling from it\'s pumping veins in it\'s mouth as it dumps it\'s dreamy load into your gagging mouth.")>>' + 
		'<<= setup.speak($player, "Oh... Too late I suppose...", "smile")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Blowjob', type: 'skill-max', level: 3},{id: 'Blowjob', type: 'skill-min', level: 1}]
		},
		{
		name: "Blowjob Dream (Expert)",
		passage: '<<= setup.eventText("Everything is darkness and there you stand in it.")>>' + 
		'<<= setup.eventText("In the distance you can hear a rumbling rythm coming closer and closer.")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 
		'<<= setup.eventText("As it becomes louder and louder, the void is suddenly filled with floating penises all coming right at you.")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 
		'<<= setup.speak($player, "Oh no-no-no! They want me to suck all these cocks!", "surprised")>>' + 
		'<<= setup.eventText("You feel the cocks graze your cheek and your lips and as soon as you accidentally taste some of the supernaturally tasty man-jizz, something clicks in you.")>>' + 	
		'<<= setup.speak($player, "Mmmmh! I\'m gonna love this! I\'m a cock-sucker!", "smile")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 
		'<<= setup.eventText("Cocks and penises all surround you, waiting their eager turn to assault your slutty mouth. Jizz and cum is shot down your throat one after another as you work the happy line they have all formed.")>>' + 
		'<<= setup.eventText("@@.boldtext;SUCK! SUCK! SUCK! SUCK! SUCK!@@")>>' + 
		'<<= setup.speak($player, "I need more! MORE! I need to suck ALL the cocks!", "pleasure")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><<= setup.experience($player, "Blowjob", 1, 2)>><br>',
		requirements: [{id: 'Blowjob', type: 'skill-min', level: 3}]
		},
		{
		name: "Harassment (streets, non-slutty)",
		passage: '<<= setup.eventText("You\'re standing in the middle of the street, feeling the pressure from the crowd that surrounds you. You\'re wearing a tight short skirt that perfectlt clings to your body and a camisole not even high enough to hide your midriff.")>>' + 
		'<<= setup.eventText("All around you, you feel their eyes eat you, devouring your body like a piece of meat. You can sense their desire, the want and need to touch, caress and rip off your provocative clothes.")>>' + 
		'<<= setup.speak($player, "Geez... I really should wear proper clothes.")>>' + 
		'<<= setup.eventText("You feel a light hand graze your bottom... An accident? Or on purpose?")>>' + 
		'<<= setup.speak($player, "Alright time to move on.")>>' + 
		'<<= setup.eventText("You begin to strut down the street, trying to escape the mob collecting around you, with their hands mockingly grasping in your general direction.")>>' + 
		'<<= setup.eventText("Suddenly you feel different, in fact you feel a slight breeze on your naked body. Your clothes now having vanished you begin to run, trying to escape the hungry crowd of men and woman lusting for your promiscuous body.")>>' + 
		'<<= setup.speak($player, "No-no-no! Stay away!", "surprised")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
		},
		{
		name: "Harassment (metro, non-slutty)",
		passage: '<<= setup.eventText("There you are, taking the metro as you always do, sandwiched between several burly men all trying to fit in the close compartment of the tube.")>>' + 
		'<<= setup.eventText("Their masculine scent rubbing off on you and their strong bodies pushed against you.")>>' + 
		'<<= setup.eventText("Your clothes are almost non-existent today, just a top and way too tight leggings giving easy access to your lush moneymaker. Surely enough, access they get, as you feel a firm hand begin to rub your booty.")>>' + 
		'<<= setup.speak($player, "Hey! Hands off!", "angry")>>' + 
		'<<= setup.eventText("You feel another hand begin to caress and rub your pert tits and before you know it you feel their strong grabs all over your body, manhandling your body from all directions.")>>' + 
		'<<= setup.speak($player, "Oh god! Stop this!", "surprised")>>' + 
		'<<= setup.eventText("Trying to keep your balance you accidentally touch them as well, falling completely into their embrace giving them full access to your lush wet goods.")>>' + 
		'<<= setup.speak($player, "Ooooh fuck!", "pleasure")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 2},{id: 'Slut', type: 'psyche-max', level: 3}]
		},
		{
		name: "Harassment (metro, slutty)",
		passage: '<<= setup.eventText("There you are, taking the metro as you always do, sandwiched between several burly men all trying to fit in the close compartment of the tube.")>>' + 
		'<<= setup.eventText("Their masculine scent rubbing off on you and their strong bodies pushed against you.")>>' + 
		'<<= setup.eventText("Your clothes are almost non-existent today, just a top and way too tight leggings giving easy access to your lush moneymaker. Surely enough, access they get, as you feel a firm hand begin to rub your booty.")>>' + 
		'<<= setup.speak($player, "Mmmmh you looking to play handsome?", "smile")>>' + 
		'<<= setup.eventText("You feel another hand begin to caress and rub your pert tits and before you know it you feel their strong grabs all over your body, manhandling your body from all directions.")>>' + 
		'<<= setup.speak($player, "Oh my, you big boy!", "surprised")>>' + 
		'<<= setup.eventText("Trying to keep your balance you accidentally touch them as well, falling completely into their embrace giving them full access to your lush wet goods.")>>' + 
		'<<= setup.speak($player, "Ooooh fuck!", "pleasure")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		},
		{
		name: "Bodymodding (non-slutty)",
		passage: '<<= setup.eventText("A sharp light blinds you as you feel your body lie on the rough pillows of a doctor\'s chair.")>>' + 
		'<<= setup.eventText("You try to look around, but your head is fastened tightly.")>>' + '<<= setup.speak($characters.malePlayer, "Uuuuh, hello?")>>' + 
		'<<= setup.speak($characters.secret, "sssh... ze operation will commence zoon.")>>' + 
		'<<= setup.speak($characters.malePlayer, "What operation?! What are you talking about?!", "surprised")>>' + 
		'<<= setup.speak($characters.secret, "You shall have ze most beautiful and voluptuous bosom in ze whole world! Big tatas! Haha!")>>' + 
		'<<= setup.eventText("You feel your chest begin to expand as you grow tits, the chair holding you tight and keeping you in place. You try to scream, but cannot.")>>' + 
		'<<= setup.speak($player, "No-no-no! NO!", "surprised")>>' + 
		'<<= setup.eventText("The chair sends shockwaves down your whole body as you feel yourself lock into your new body.")>>' + 
		'<<= setup.speak($player, "Ooooh fuck!", "pleasure")>>' + 
		'<<run setup.psyche($player, "Feminine", 2, 2, 2)>><br>',
		requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
		name: "Bodymodding (slutty)",
		passage: '<<= setup.eventText("A sharp light blinds you as you feel your body lie on the rough pillows of a doctor\'s chair.")>>' + 
		'<<= setup.eventText("You try to look around, but your head is fastened tightly.")>>' + '<<= setup.speak($characters.malePlayer, "Uuuuh, hello?")>>' + 
		'<<= setup.speak($characters.secret, "sssh... ze operation will commence zoon.")>>' + 
		'<<= setup.speak($player, "Uuuh? What?", "default")>>' + 
		'<<= setup.speak($characters.secret, "You shall have ze most beautiful and vol-up-tuous bosom and booty! Ze enhancements will truly make you whole! Big tatas! Haha!")>>' + 
		'<<= setup.eventText("You feel your chest begin to expand as you grow tits, the chair holding you tight and keeping you in place. You moan as you accept your new destiny.")>>' + 
		'<<= setup.speak($player, "Uuuh! Mmmmh! YES! Big titty monster!", "pleasure")>>' + 
		'<<= setup.eventText("The chair sends shockwaves of pink pleasure down your whole body as you feel yourself molded into the perfect fuckdoll.")>>' + 
		'<<= setup.speak($player, "Ooooh fuck!", "pleasure")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2)>><br>',
		requirements: [{id: 'Slutty', type: 'psyche-min', level: 2}]
		}
	];
	let dreams_sex = [
		{
		name: "Sex (no experience)",
		passage: '<<= setup.eventText("The sheets caress your ample bottom as you lie back on the silken bed. The room is lit in a reddish seductive tint, and the air is drunk with a flowery scent.")>>' + 
		'<<= setup.eventText("A firm grip takes your hips, only to release and trail along your thighs. A deep breath pushes on your throat as you moan with want and need. Your loins trembling and a sense of hollow' + 
		' emptiness spreading in your womb.")>>' + 
		'<<= setup.speak($characters.secret, "Are you ready? My lady?")>>' + 
		'<<= setup.speak($player, "Mmmmmh-... yes, take me sir knight.", "smile")>>' + 
		'<<= setup.eventText("You feel his hands dig in between your legs and parting them as if they were the gates to the heavens themselves.")>>' + 
		'<<= setup.speak($characters.secret, "O-holy mother maria!")>>' + 
		'<<= setup.speak($player, "Ah! Sir knight! I can wait no longer!", "pleasure")>>' + 
		'<<= setup.eventText("A pressure builds at your lotus stamen, as the man lays claim to your fertile lands and conquers your virginity.")>>' + 
		'<<= setup.speak($characters.secret, "Aaaah! Take it you succubus!")>>' + 
		'<<= setup.eventText("You feel his cock fill you out completely, plugging you like a-")>>' + 
		'<<= setup.speak($characters.malePlayer, "AAAAAAAAAAAAAAAAAAAAAH!", "surprised")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 2, 2)>><br>',
		requirements: [{id: 'receivedVaginal', type: 'stat-max', level: 1}]
		},
		{
		name: "Sex (experienced)",
		passage: '<<= setup.eventText("The sheets caress your ample bottom as you lie back on the silken bed. The room is lit in a reddish seductive tint, and the air is drunk with a flowery scent.")>>' + 
		'<<= setup.eventText("A firm grip takes your hips, only to release and trail along your thighs. A deep breath pushes on your throat as you moan with want and need. Your loins trembling and a sense of hollow' + 
		' emptiness spreading in your womb.")>>' + 
		'<<= setup.speak($characters.secret, "Are you ready? My lady?")>>' + 
		'<<= setup.speak($player, "Mmmmh-... yes, time to play!", "smile")>>' + 
		'<<= setup.eventText("You plant your hands on his valorous armor and push the knight over, cackling seductively.")>>' + 
		'<<= setup.speak($characters.secret, "O-holy mother maria!")>>' + 
		'<<= setup.speak($player, "Your male seed is mine!", "pleasure")>>' + 
		'<<= setup.eventText("You grab his veiny cock and place it towards the entrance to your wanton cunt, ready to seal his fate.")>>' + 
		'<<= setup.speak($characters.secret, "Ahh! Take it you succubus! Take my seed!")>>' + 
		'<<= setup.eventText("You weigh down unto him, swallowing his cock whole with your cunt and eagerly begin to ride him for all of his worth.")>>' + 
		'<<= setup.speak($player, "Uuuuh! YES!", "pleasure")>>' + 
		'<<run setup.psyche($player, "Slut", 2, 3, 3)>><br>',
		requirements: [{id: 'receivedVaginal', type: 'stat-min', level: 3}]
		}
	];
	let dreams = default_dreams.concat(dreams_girly, dreams_slutty, dreams_sex);
	setup.shuffle(dreams);
	return dreams;
}			

setup.dream = function (entity) {
	let dreams = setup.loadDreamsLib();
	let returnDream = "";
	for (let i = 0; i < dreams.length; i++) {	
		console.log("Dream(" + dreams[i].name + "), checking requirements...");
		let dreamReq = dreams[i].requirements;
		let check = setup.checkReq(dreamReq, entity);
		if (check == true) {
			returnDream = dreams[i].passage;
			console.log("Dream(" + dreams[i].name + "): Pass.");
			break;
		}
	}
	console.log(returnDream);
	return returnDream + "<span class='lbb'><<button 'Wake Up'>><<if $player.body.face.makeup >= 1 and $player.body.face.isStamped is false>><<set $player.body.face.isSmeared to true>><</if>><<goto 'Pod - Report'>><</button>></span>";
};