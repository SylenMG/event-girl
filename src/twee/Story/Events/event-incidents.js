//Event Incidents
//v0.01
//Requires: intercourse.js -loaded after
//by Sylen

setup.loadEvents = function () {
	//////Global Update of Values//////
	let player = SugarCube.State.variables.player;
	//clients = setup.getInteractables("Clients");
	//executives = setup.getInteractables("Executives");
	//adults = setup.getInteractables("Adults");
	//elderly = setup.getInteractables("Elderly");
	//cool = setup.getInteractables("Cool");
	//goth = setup.getInteractables("Goth");
	//eventgirls = setup.getInteractables("Event Girls");
	
	let receptionistIntro = [
		{
			passageText: '<<= setup.eventText("You take note of the service number and walk over to Brenda sitting by the eventia desk.")>>' + 
				'<<= setup.speak($characters.brenda, "Hey there $player.femaleName! Looking to apply somewhere?")>>' + 
				'<<= setup.speak($player, "Yeah, actually... I was looking to apply as a receptionist? You know, like you and all that?")>>' + 
				'<<= setup.speak($characters.brenda, "Oh, that´s great! Can´t wait to work with ya, sister!")>>' +
				'<<= setup.eventText("A chill runs down your spine as she calls you ´sister´.")>>' + 
				'<<= setup.speak($player, "I guess so... Do you need the service number?")>>' + 
				'<<= setup.speak($characters.brenda, "Nah that´s fine, follow me darling. Let´s get ya something to wear.")>>' + 
				'<<= setup.eventText("You follow her, observing her swaying booty from behind. She´s wearing a short black skirt and a business-like vest, not even long enough to cover her mid-riff.")>>' +
				'<<= setup.eventText("Then it hits you... You´re probably going to be wearing the same thing.")>>' + 
				'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		},
		{
			passageText: '<<= setup.eventText("She leads you into the backroom which has selection of various similar outfits in varying sizes.")>>' + 
				'<<= setup.speak($characters.brenda, "Hmph, let me check ya bust and yo ass.")>>' + 
				'<<= setup.eventText("Before you can react, she´s already sampled your goods, weighing them in her palms.")>>' + 
				'<<= setup.speak($player, "Hey! Come on, hands off!", "angry")>>' + 
				'<<= setup.speak($characters.brenda, "It´s alright, we definitely got yo size, girl!", "smile")>>' + 
				'<<= setup.eventText("She takes out a similar outfit, seemingly in your size.")>>' + 
				'<<= setup.speak($characters.brenda, "Go on girl, try it on.")>>' + 
				'<<= setup.speak($player, "Right-right, just give me a second.")>>' + 
				'<<= setup.eventText("You try on the outfit. It tightens around your body, showing of every curve, accentuating your figure.")>>' + 
				'<<= setup.speak($characters.brenda, "Damn girl! Yo look sexy and professional as hell! Let´s get going, clients are probably waiting!")>>' + 
				'<<= setup.eventText("You both exit the backroom.")>><<run setup.equipOutfit($player, "receptionist", "stash")>>',
			buttonText: 'Continue',
			next: '2'
		},
		{
			passageText: '<<= setup.eventText("You feel exposed in your new attire, almost naked. Your ass involuntarily swaying behind you, you almost feel like a glorified pornstar.")>>' + 
				'<<= setup.speak($characters.brenda, "So...! You will be standing here by the desk with me and the others, occasionally tidying up the lobby & foyer. Here´s a manual yo ass probably should read. It contains a lot of common answers that our clients and customers ask about eVentia and the entertainment center as a whole.")>>' + 
				'<<= setup.speak($player, "Okay, I think I got it.")>>' + 
				'<<= setup.speak($characters.brenda, "If you have any other questions, you can always ask me. But if in doubt, just remember that you represent eVentia. At eVentia the needs of the client and customers come first and foremost, always!", "smile")>>' + 
				'<<= setup.speak($player, "Right...")>>' + 
				'<<= setup.eventText("After getting a bit more briefing from Brenda, you start your first day as an eVentia receptionist. Helping clients and customers with all sorts of things like navigation, answering questions, event organisation and so on.")>>',
			buttonText: 'Continue',
			next: '3'
		}
	];
	let maidIntro = [
		{
			passageText: '<<= setup.eventText("You take note of the service number and walk over to Brenda sitting by the eventia desk.")>>' + 
				'<<= setup.speak($characters.brenda, "Hey there $player.femaleName! Looking to apply somewhere?")>>' + 
				'<<= setup.speak($player, "Yeah, just looking to do some cleaning, sounds easy enough you know.")>>' + 
				'<<= setup.speak($characters.brenda, "Oh? Applying for the position of maid I see? Alright, just give me the service number.")>>' +
				'<<= setup.eventText("You pass on the service number, which Brenda promptly types into her computer.")>>' + 
				'<<= setup.speak($player, "I guess so... Do you need the service number?")>>' + 
				'<<= setup.speak($characters.brenda, "Okay then! That´s all done. Follow me, I´ll get yo ass lookin´ like a real maid worthy of eVentia.")>>' + 
				'<<= setup.eventText("You follow her swaying booty, hoping the outfit you´re going to be wearing is not too obscene.")>>' + 
				'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		},
		{
			passageText: '<<= setup.eventText("She leads you into the backroom and down to a closet hidden away in the back.")>>' + 
				'<<= setup.eventText("After rummaging around for a while she drags out a classical french maid dress.")>>' + 
				'<<= setup.speak($characters.brenda, "Ah, think this one should fit ya.")>>' + 
				'<<= setup.eventText("As she holds it folded out in front of you, you freak out a little.")>>' + 
				'<<= setup.speak($player, "Wait-wait. You can´t be serious right? An actual french maid dress? This sends all types of wrong messages!", "surprised")>>' + 
				'<<= setup.speak($characters.brenda, "What do ya mean? French? It´s a completely standard maid dress, silly!")>>' + 
				'<<= setup.eventText("You hesitate for a moment, but eventually break.")>>' + 
				'<<= setup.speak($player, "Right. Whatever, I´ll try it on.")>>' + 
				'<<= setup.eventText("You groan as you put on the dress. The black thong that follows and frilly stockings only making you feel even more exposed than without.")>>' + 
				'<<= setup.eventText("After putting on the dress, you check out yourself in the mirror. The short cut, coupled with the duster really hits it home, making you look like someone took you out from a terrible porn skit.")>><<run setup.equipOutfit($player, "maid", "stash")>>',
			buttonText: 'Continue',
			next: '2'
		},
		{
			passageText: '<<= setup.eventText("Brenda smiles as she checks you out in the maid outfit.")>>' + 
				'<<= setup.speak($characters.brenda, "You look fabulous girl! Anyway. I´ll be assigning you to a floor, which you´ll then be tasked to be cleaning with. Since this is your first time, you will be assisting a more senior maid.")>>' + 
				'<<= setup.speak($player, "Okay, sounds good I guess.")>>' + 
				'<<= setup.eventText("You follow Brenda back out of the backroom. You step back out into public view, as if you were going on a stage. Brenda picks up her transparent desk tablet and calls someone.")>>' + 
				'<<= setup.speak($characters.brenda, "I´ll just be calling Lily, she´s a cutie, and real great with the new ones.", "smile")>>' + 
				'<<= setup.speak($player, "Sure...")>>' + 
				'<<= setup.eventText("After some time you spot a blonde beauty dressed in a matching french maid outfit, strutting with a fierce pace towards the desk.")>>' + 
				'<<= setup.speak($characters.lily, "Really Brenda? You´re dropping another newbie on my ass?! I TOLD YOU! NO MORE NEWBS!", "angry")>>' + 
				'<<= setup.speak($characters.brenda, "Come on gurl, got no one better than yo´ ass.", "smile")>>' + 
				'<<= setup.speak($characters.lily, "Fine! Whatever! YOU! Don´t slack behind. Get moving.")>>' + 
				'<<= setup.speak($characters.brenda, "Better follow her lead gurl.")>>' + 
				'<<= setup.eventText("Brenda waves at you, whilst the blonde maid turns around, leaving the desk. You promptly follow her.")>>',
			buttonText: 'Continue',
			next: '3'
		},
		{
			passageText: '<<= setup.eventText("You stroll through the lobby and reach an elevator. After entering and pressing the designated floor, she huffs.")>>' + 
				'<<= setup.speak($characters.lily, "Alright newbie. Names Lily, got any questions? Ask, but you probably won´t need to. Jobs real simple. Use that maid duster of yours, clean up their rooms for general trash, make their bed and so on. You got it?")>>' + 
				'<<= setup.speak($player, "Yeah, I think I got it.")>>' + 
				'<<= setup.eventText("The elevator makes a ding, and the door opens. You enter a classical hotel corridor, with a completely different feel and atmosphere than the otherwise busy lobby.")>>' + 
				'<<= setup.eventText("The walls are a comfortable deep brown, and the carpet bright red. The cleaning trolley is waiting for the both of you just by the elevetor.")>>' + 
				'<<= setup.speak($characters.lily, "I´ll do the even numbered rooms on this side, you can do the uneven ones. Sound good?")>>' + 
				'<<= setup.eventText("You clench your maid duster and nod.")>>',
			buttonText: 'Continue',
			next: '4'
		}
	];
	let carshowIntro = [
		{
			passageText: '<<= setup.eventText("You note of the service number and walk over to Brenda sitting by the eventia desk.")>>' + 
				'<<= setup.speak($characters.brenda, "Hey there $player.femaleName! Anything exciting you want to apply to?")>>' + 
				'<<= setup.speak($player, "Yes, uhm... This one.")>>' + 
				'<<= setup.speak($characters.brenda, "Show girl huh? We´ll you are quite the show aren´t ya?")>>' +
				'<<= setup.eventText("You pass on the service number, which Brenda promptly types into her computer.")>>' + 
				'<<= setup.speak($characters.brenda, "I trust you know where the outer venue is? Just further down really.")>>' + 
				'<<= setup.eventText("You nod and head towards the open venue.")>>' + 
				'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		},
		{
			passageText: '<<= setup.eventText("Approaching the venue you hear the distant humming sound similar to cars and bikes going off, as if revving up for a race. Although, way more low and more rhythmic beat, still familiar enough for you to recognize it.")>>' + 
				'<<= setup.eventText("You reach the outer venue and spot the many neon-light low riders and bikes as if coming straight out of some sci-fi movie. The door of one of the holo-cars opens horizontally, and a bearded hipster-looking guy comes out, smiling as he approaches you.")>>' + 
				'<<= setup.speak($characters.hotstripesrep, "Ahhh! You must-a be ze new girl! I already like-a what I zee! Haha!", "smile")>>' + 
				'<<= setup.speak($player, "Yes I´m sure you do...")>>' + 
				'<<= setup.speak($characters.hotstripesrep, "You have-a any experience with ziz beastz? Zey hum and roar! No need-a to be afraid! Come wiz me, I´ll show you ze outfit for ze venue. Ze... What her name-a? Brenda? Tell me ze size? Will be good, I promize.", "smile")>>' + 
				'<<= setup.eventText("He leads you towards a shared backroom and pulls out a pair of wet look leather leggigs and top.")>>' + 
				'<<= setup.speak($characters.hotstripesrep, "Zis should properly pronounce your body, bring real attention to ze vehicle. You-a good with ze people? I hopse so! Zey here to zee holo too, not only ze titz, Aha-haha!", "smile")>>' + 
				'<<= setup.speak($player, "I uuuh.... Not really, it´s my first time.")>>' + 
				'<<= setup.speak($characters.hotstripesrep, "Is alright! Just zhake a-lil, but not too much, zey here to buy ze vehicle, not you after all! A-hahahaa!", "smile")>>' + 
				'<<= setup.eventText("You smile nervously as he leaves you to put on the outfit.")>><<run setup.equipOutfit($player, "carshow", "stash")>>',
			buttonText: 'Continue',
			next: '2'
		},
		{
			passageText: '<<= setup.eventText("You take of your clothes and put on the wet look leggins and top, which gives little in the comfort of modesty. Your midriff is completely on display, your bosom constrained and pushed up obscenely, your ass tightened to give perfect view of it´s form.")>>' + 
				'<<= setup.eventText("Beside the make-up table you spot a pair of black pumps which would go neatly with the outfit.")>>' + 
				'<<= setup.speak($player, "Well, let´s get to it I guess...")>>' + 
				'<<= setup.eventText("You head towards the exit and walk out unto the venue.")>>' + 
				'<<= setup.eventText("A few whistles and a cheer can be heard as some guys spot you. You can´t help but smile a little as you move unto the venue towards the holo-cars.")>>',
			buttonText: 'Continue',
			next: '3'
		}
	];
	let stripperIntro = [
		{
			passageText: '<<= setup.eventText("You note of the service number and walk over to Brenda sitting by the eventia desk.")>>' + 
				'<<= setup.speak($characters.brenda, "Hey there $player.femaleName! Anything exciting you want to apply to?")>>' + 
				'<<= setup.speak($player, "I was thinking I would give this a try.")>>' + 
				'<<= setup.speak($characters.brenda, "Really now, gurl! You going ta´ shake dat´ ass on a stage! You got some spirit alright, let me just put it in the system for ya.")>>' +
				'<<= setup.eventText("You pass on the service number, which Brenda promptly types into her computer.")>>' + 
				'<<= setup.speak($characters.brenda, "Gloria Girls should be just right down on the corner by the Adult strip, have fun!")>>' + 
				'<<= setup.eventText("You head towards the adult strip, not really sure what you´ve signed up for.")>>' + 
				'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		},
		{
			passageText: '<<= setup.eventText("As you arrive by the adult strip, you´re taken by an entourage of blinding lights and bright red flashing signs, selling all sorts of adult experiences.")>>' + 
				'<<= setup.eventText("You look towards the corner and rightly so spot the Gloria Girls logo. As you walk towards the entrance, you´re quickly approached by a man in a business suit of sorts.")>>' + 
				'<<= setup.speak($characters.manager, "Ah! You must be $player.femaleName? I´m the manager here, let me just show you inside, we´ve been looking forward to adding a new girl to our family here at Gloria Girls, I´m sure you´ll love it!", "smile")>>' + 
				'<<= setup.speak($player, "Let´s just take it slow at first, right?")>>' + 
				'<<= setup.speak($characters.manager, "Of course! Of course!", "smile")>>' + 
				'<<= setup.eventText("The manager leads you inside and through the sound-proof door. Your ears are immediately filled with sleek low bass electronica and dempened lights, creating a seductive atmosphere.")>>' + 
				'<<= setup.eventText("Walking through the showfloor you see the stage where a girl is currently rocking the stripper pole to several patrons sitting around the floor in their comfortable red chairs.")>>',
			buttonText: 'Continue',
			next: '2'
		},
		{
			passageText: '<<= setup.eventText("You´re taken towards the backroom which is filled with various costumes and several make up tables with mirrors. You almost bump into the various lightly dressed girls trafficking through the backroom and the show floor.")>>' + 
				'<<= setup.speak($characters.manager, "You´ll be doing your first strip tease on the big stage in about an hour or so, so get ready!", "smile")>>' + 
				'<<= setup.speak($player, "Wait just like that?! I´m not completely ready yet!", "surprised")>>' + 
				'<<= setup.speak($characters.manager, "Time to get ready then, see ya in an hour or so!")>>' + 
				'<<= setup.eventText("Your stomach drops as you quickly try to gather your thoughts. Hitting the big stage already? In front of all these horny men with little to no prep at all? How the hell will you manage?!")>>' + 
				'<<= setup.eventText("You start looking around the backroom for a costume of some sort, and end up putting together a naughty school girl outfit. You make sure everything looks great before moving towards the stage from the backroom.")>><<run setup.equipOutfit($player, "stripper", "stash")>>',
			buttonText: 'Continue',
			next: '3'
		}
	];
	let girlfriendIntro = [
		{
			passageText: '<<= setup.eventText("You scout out the location of the Dynamo Dating bar at the Commercial Strip in the entertainment center.' + 
			'The bar has a fancy exterior with a large neon sign advertising it´s services. You enter the bar and are immediately overwhelmed with the pungent and heavily incensed air.' + 
			'You feel a heat spread as you take in the pleasant aroma. The interior of the bar is sleek and simplistic in design, black and white.' + 
			' You approach the bar and greet the bartender.")>>' + 
			'<<= setup.speak($player, "Hello there... I´m here to stand-in for a date?")>>' + 
			'<<= setup.speak($characters.housespeaker, "Welcome to Dynamo Dating! We were expecting your arrivel. Your date is waiting patiently. Let me send you the details.")>>' + 
			'<<= setup.speak($player, "Just like that? Uhm? What do I do exactly?", "smile")>>' + 
			'<<= setup.speak($characters.housespeaker, "You go on a date silly. That´s it. You will be compensated for your time. You are not bound by anything other than the experience of dating.")>>' + 
			'<<= setup.speak($player, "Doesn´t sound bad at all...", "smile")>>' + 
			'<<= setup.eventText("You check your E-Pal and prepare yourself for the worst.")>>' + 
			'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		}
	];
	let sluttiaIntro = [
		{
			passageText: '<<= setup.eventText("You take another look in the mirror after wearing the Sluttia Cosplay. The straps are incredibly tight and cup your tits in thin fabric that make them' + 
			' jiggle and bounce in an obscene fashion when you walk or even turn. The threat of them snapping or slipping is constantly on your mind. However, they pale in comparison to the minuscule amounts' + 
			' skin that the loincloth hides. A simple thin string underneath that barely covers your mound completely and exposes your ass fully. The little armor that there actually is, is only present in' + 
			' in places where they wouldn´t obscure the view of your goods. <br><br>You finally muster the courage to leave your pod and head for the convent.")>>' + 
			'<<= setup.speak($player, "Oh god... will the jiggle ever stop...")>>' + 
			'<<= setup.eventText("You reach the convention floor and enter, heads turning all around you and turn silent. A few whispers here and there. Only the casual convention rabble in the background.")>>' + 
			'<<= setup.speak($player, "This was a terrible idea...")>>' + 
			'<<run setup.story("Event-Girl-00", "complete")>><<run setup.equipOutfit($player, "sluttia", "stash")>>',
			buttonText: 'Continue',
			next: '1'
		},
		{
			passageText: '<<= setup.eventText("You walk towards the convention checkpoint, hoping for some pointers as to where to show up, when you´re immediately greeted by a guy in a radiant business suit")>>' + 
			'<<= setup.speak($characters.executive1, "If it is not Sluttia herself! I see you! Been waiting for you! Your booth is ready!", "smile")>>' + 
			'<<= setup.speak($player, "Right-right, I was wondering where to show myself...")>>' + 
			'<<= setup.speak($characters.executive1, "Come along now, let me show you where. Any other questions? This your first rodeo with horny nerds from all around the world?")>>' + 
			'<<= setup.speak($player, "I´m supposed to just stand there right? And let them take pictures with me and let them purchase light comics?")>>' + 
			'<<= setup.speak($characters.executive1, "You got it! And don´t get surprised if any of them get a little handsy! That´s all part of the show! Hahahaha!", "smile")>>' + 
			'<<= setup.eventText("You force a smile as you reach the booth. A stand with light comics depicting the so-called Sluttia wrestling with some kind of tentacle monster.")>>' + 
			'<<= setup.speak($player, "That´s Sluttia?")>>' + 
			'<<= setup.speak($characters.executive1, "Nope. That´s you! Ahahaha! About to get rowdy with a bunch of tentacles! Ahaha! Got it?- Man, I still got it! And you got this! Right? Good luck!", "smile")>>' + 
			'<<= setup.eventText("A line of guys, and some girls even quickly forms up. All of them eagerly waiting their turn to get a chance at Sluttia... or you that is.")>>' + 
			'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '2'
		}
	];
	let gloryholeIntro = [
		{
			passageText: '<<= setup.eventText("You look over the terms of use of the gloryhole booths, biting your lips. You look over your shoulder and meet the lusting stare of several patrons, all of them waiting for you to make the decision.")>>' + 
				'<<= setup.eventText("The rate looks good, reliable and stable. All you would have to do is merely be present in the booth, and you would get paid even if no one shows up...")>>' + 
				'<<= setup.eventText("Although, if any would indeed show up and stick their cock through that fateful hole... You would have no choice, but to get busy. You wouldn´t even know who they were either, could be anyone, even someone you had gotten to know recently.")>>' + 
				'<<= setup.eventText("You feel a slight heat spread beneath your legs as you finally decide, moving towards the booths...")>>' + 
				'<<= setup.eventText("Looking over your shoulder, you see that at least several of the patrons are already preparing to make a line. You gulp as you lift your E-Pal over one of the booth entrances, your hand shaking lightly. A soft ding follows and the door slides open.")>>' + 
				'<<= setup.eventText("The door quickly slides shut behind you, as you stumble into the booth. The claustrophobic interior heavily graffitied with base slurs and demeaning remarks. You spot a pair of lycra-pillows on the floor, in front of them, the cockhole waiting ominously. You kneel down and get comfortable, waiting...")>>' + 
				'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		}
	];
	let gangbangIntro = [
		{
			passageText: '<<= setup.eventText("Your hips sway lightly as you strut down the entertainment center´s main hall. The gaze of several patrons explore your body as head towards the Gloria Hall.")>>' + 
				'<<= setup.eventText("As you near, you spot Vernon chatting with some of his friends, all of them waiting for you. As you close in on them, your ears are filled with their wolf-whistles.")>>' + 
				'<<= setup.eventText("A gentle tug on your ass pulls you, as their hot hands explore your body, making your loins quiver with need.")>>' + 
				'<<= setup.speak($characters.vernon, "Well then, shall we get this party started?", "smile")>>' + 
				'<<= setup.eventText("A firm grip on your wrist drags you inside. Your loose underboob leaves no defense for their hands, as their rough hands press and squeeze your nipples.")>>' + 
				'<<= setup.eventText("A soft moan escapes you, they got you right where they want you.")>>' + 
				'<<run setup.equipOutfit($player, "gangbang", "stash")>>' + 
				'<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		}
	];
	let cindanarIntro = [
		{
			passageText: '<<= setup.eventText("You admire your naked body in the mirror, currently using the sorry excuse for a changing room that they gave you.")>>' + 
				'<<= setup.eventText("The pink sportswear fights your physique, clinging tightly around your curves, displaying them in an almost obscene way.' + 
				' How this could be sportswear or be the most practical thing that they could come up with, is a mystery to you.")>>' + 
				'<<= setup.eventText("You take one last look in the mirror. The sportsbra does little to contain any jiggle, in fact, you suspect it only enhances it.")>>' + 
				'<<= setup.speak($characters.secret, "Are you ready in there? They are opening the venue soon!")>>' + 
				'<<= setup.eventText("You sigh, letting yourself unto the forces at play, and exit unto the venue.")>>' + 
				'<<run setup.equipOutfit($player, "cindanar", "stash")>>' + '<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		}
	];
	let stainsIntro = [
		{
			passageText: '<<= setup.eventText("You admire your naked body in the mirror, currently using the sorry excuse for a changing room that they gave you.")>>' + 
				'<<= setup.eventText("The micro top practically resting your tits, giving you only the most tenous of coverage. At this point, it would probably have been better to just be naked.' + 
				' The panties that they called, micropants, are obscene, even if they were just panties. Your full ass is on display, and the micro is giving you a small cameltoe.")>>' + 
				'<<= setup.eventText("You take one last look in the mirror. The top could easily be lifted and the panties burst at any moment. You suspect that is the point though, letting out a small sigh.")>>' + 
				'<<= setup.speak($characters.secret, "Are you ready in there? They are opening the venue soon!")>>' + 
				'<<= setup.eventText("You exit unto the venue.")>>' + 
				'<<run setup.equipOutfit($player, "stains", "stash")>>' + '<<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue',
			next: '1'
		}
	];

	

	let maidDirtyRoom1 = {
		name: 'Dirty Room (One Guy, non-slutty)',
		passageText: '<<= setup.eventText("After completing a client room you move on to the next, but notice that it´s still occupied. You knock on the door.")>>' + 
		'<<= setup.speak($player, "Uuuh, here to clean your room.")>>' + 
		'<<= setup.eventText("You hear something shuffle behind the door, and as it´s slowly opens, a towering half-naked figure stands before you. He scratches his chiseled chin as he eyes you up and down. ")>>' + 
		'<<= setup.speak($npc.adults[1], "Ah, they´re sending the cute ones now eh? Come on in then.", "smile")>>' + 
		'<<= setup.eventText("He opens the door just enough for you to slither through.")>>' + 
		'<<= setup.speak($player, "Right.")>>' + 
		'<<= setup.eventText("You grab your duster and move past him, gracing his abs. As you move in, you´re surprised by the room being relatively clean. The man walks over and settles down in his armchair.")>>' + 
		'<<= setup.speak($npc.adults[1], "Go on then, I love to watch you lovelies work.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Slut', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Walk out on him',
			resultText: '<<= setup.speak($player, "Yeah I´m not some sort of entertainment, fuck this!", "angry")>>' + 
			'<<= setup.eventText("You move towards the door and he gets up from the chair cursing at you.")>>' + 
			'<<= setup.speak($npc.adults[1], "Hey wait! Come on now! Do your fucking job!", "angry")>>' + 
			'<<= setup.eventText("You quickly walk out and move on to the next room, ignoring his enforcing pleas.")>>' + 
			'<<run setup.rating($player, -10)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Let him watch as you clean',
			resultText: '<<= setup.eventText("You just smile awkwardly as you get on with the cleaning, using your duster and making sure everything looks all nice and dandy.")>>' + 
			'<<= setup.eventText("You look towards him, and notice him touching himself, which only makes you feel extra exposed in your short-skirted maid outfit. At the least the room is relatively clean, so you quickly finish dusting his room.")>>' + 
			'<<= setup.speak($player, "That´s the last of that, I´ll be going then.", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "A pleasure to have that tight ass prancing around here cleaning up, come again any time missy.", "smile")>>' + 
			'<<= setup.eventText("You cringe inside as he clutches his groin, like you´re some kind of piece of meat he´s lusting for.")>>' + 
			'<<= setup.eventText("You quickly leave his room and move on to the next.")>>' + 
			'<<run setup.psyche($player, "Feminine", 1, 2, 3)>>' + 
			'<<run setup.psyche($player, "Lust", 50, 25)>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Take your time and give a show',
			resultText: '<<= setup.eventText("You do your best impression of a french maid, prancing around dusting the room in an almost comical way.")>>' + 
			'<<= setup.eventText("Every now and then, bowing down flashing a bit of your slim thong.")>>' + 
			'<<= setup.speak($player, "A-ahem, oui-oui, monsieur?", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "Uuuuh? What?")>>' + 
			'<<= setup.speak($player, "Oh... Nevermind! Need a little dusting?")>>' + 
			'<<= setup.eventText("You move over to him a swing your duster around his chair. You feel a strong grasp on your right buttcheek, a soft squeeze that make you wince.")>>' + 
			'<<= setup.speak($player, "O-oh my! Don´t get too handsy now! I think im done dusting now anyway!", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "Sure you little minx!", "smile")>>' + 
			'<<= setup.eventText("You feel the tight grasp leave your ass, only to be followed by a sharp pain as he slaps your bare ass underneath the short maid skirt.")>>' + 
			'<<= setup.speak($player, "OOOOH!", "surprised")>>' + 
			'<<= setup.speak($npc.adults[1], "Come again anytime. Haha! Take a tip whilst you´re at it!", "smile")>>' + 
			'<<= setup.eventText("You quickly leave his room and move on to the next.")>>' + 
			'<<run setup.psyche($player, "Slut", 1, 2, 3)>>' + 
			'<<run setup.psyche($player, "Lust", 100, 50)>>' + 
			'<<run setup.rating($player, 10)>><<run setup.bonus($player, 50, "Cleaning")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		}]
	}
	let maidDirtyRoom2 = {
		name: 'Dirty Room (One Guy, slutty)',
		passageText: '<<= setup.eventText("After completing a client room you move on to the next, but notice that it´s still occupied. You knock on the door.")>>' + 
		'<<= setup.speak($player, "Uuuh, here to clean your room.")>>' + 
		'<<= setup.eventText("You hear something shuffle behind the door, and as it´s slowly opens, a towering half-naked figure stands before you. He scratches his chiseled chin as he eyes you up and down. ")>>' + 
		'<<= setup.speak($npc.adults[1], "Ah, they´re sending the cute ones now eh?", "smile")>>' + 
		'<<= setup.speak($player, "Yep! That would be me!", "smile")>>' + 
		'<<= setup.speak($npc.adults[1], "Come on in then.", "smile")>>' + 
		'<<= setup.eventText("He opens the door just enough for you to slither through.")>>' + 
		'<<= setup.speak($player, "Thank you.")>>' + 
		'<<= setup.eventText("You grab your duster and move past him, gracing his abs. As you move in, you´re surprised by the room being relatively clean. The man walks over and settles down in his armchair.")>>' + 
		'<<= setup.speak($npc.adults[1], "Go on then, I love to watch you lovelies work.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Slut', type: 'psyche-min', level: 2}],
		options: [
		{
			buttonText: 'Let him watch as you clean',
			resultText: '<<= setup.eventText("You just smile awkwardly as you get on with the cleaning, using your duster and making sure everything looks all nice and dandy.")>>' + 
			'<<= setup.eventText("You look towards him, and notice him touching himself, which only makes you feel extra exposed in your short-skirted maid outfit. At the least the room is relatively clean, so you quickly finish dusting his room.")>>' + 
			'<<= setup.speak($player, "That´s the last of that, I´ll be going then.", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "A pleasure to have that tight ass prancing around here cleaning up, come again any time missy.", "smile")>>' + 
			'<<= setup.eventText("You cringe inside as he clutches his groin, like you´re some kind of piece of meat he´s lusting for.")>>' + 
			'<<= setup.eventText("You quickly leave his room and move on to the next.")>>' + 
			'<<run setup.psyche($player, "Feminine", 1, 2, 3)>>' + 
			'<<run setup.psyche($player, "Lust", 50, 25)>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Take your time and give a show',
			resultText: '<<= setup.eventText("You do your best impression of a french maid, prancing around dusting the room in an almost comical way.")>>' + 
			'<<= setup.eventText("Every now and then, bowing down flashing a bit of your slim thong.")>>' + 
			'<<= setup.speak($player, "A-ahem, oui-oui, monsieur?", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "Uuuuh? What?")>>' + 
			'<<= setup.speak($player, "Oh... Nevermind! Need a little dusting?")>>' + 
			'<<= setup.eventText("You move over to him a swing your duster around his chair. You feel a strong grasp on your right buttcheek, a soft squeeze that make you wince.")>>' + 
			'<<= setup.speak($player, "O-oh my! Don´t get too handsy now! I think im done dusting now anyway!", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "Sure you little minx!", "smile")>>' + 
			'<<= setup.eventText("You feel the tight grasp leave your ass, only to be followed by a sharp pain as he slaps your bare ass underneath the short maid skirt.")>>' + 
			'<<= setup.speak($player, "OOOOH!", "surprised")>>' + 
			'<<= setup.speak($npc.adults[1], "Come again anytime. Haha! Take a tip whilst you´re at it!", "smile")>>' + 
			'<<= setup.eventText("You quickly leave his room and move on to the next.")>>' + 
			'<<run setup.psyche($player, "Slut", 1, 2, 3)>>' + 
			'<<run setup.psyche($player, "Lust", 100, 50)>>' + 
			'<<run setup.rating($player, 10)>><<run setup.bonus($player, 50, "Cleaning")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidAfterparty = {
		name: 'After Party (Sleeping)',
		passageText: '<<= setup.eventText("As you move on to the next room you notice that the door is slightly ajar.")>>' + 
		'<<= setup.speak($player, "Guess I´ll just... Let myself in then.")>>' + 
		'<<= setup.eventText("As you slowly move inside the room, you´re almost immediately met with the scene of endless litter, trash, empty bottles and what you can only describe as at least two used condoms lying on the table.")>>' + 
		'<<= setup.eventText("You count three grown men and one woman sleeping all around the room. Two of them in the bed and the other two hugging each other on the floor. The rank stench of over-the-night alcohol, sex and sweat stinks up the room.")>>' + 
		'<<= setup.speak($player, "Looks like someone had a party...", "smile")>>' + 
		'<<= setup.eventText("You think to yourself, whilst thinking about what to do.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Fuck that',
			resultText: '<<= setup.speak($player, "Honestly... Fuck this.")>>' + 
			'<<= setup.eventText("You quickly sneak out without waking anyone up.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Get to work',
			resultText: '<<= setup.eventText("Starting with the empty bottle your stealthily clean up. The rankness of the room slowly subsiding, you smoothly restore the room to pristine condition whilst also skillfully avoiding the living obstacles around you.")>>' + 
			'<<= setup.eventText("The greatest challenge being to stomach the manual removal of two spunk-filled condoms, not questioning the presence of three men with one woman and only two condoms.")>>' + 
			'<<= setup.eventText("Only your imagination to play with on the location of the third... If even existing.")>>' + 
			'<<= setup.eventText("You quickly leave his room and move on to the next.")>>' + 
			'<<= setup.speak($player, "All done, time to make a stealthy retreat.", "smile")>>' + 
			'<<= setup.eventText("Surely the guests will appreciate waking up to a completely clean room.")>>' + 
			'<<run setup.experience($player, "Cleaning", 5, 5)>>' + 
			'<<run setup.psyche($player, "Lust", 10, 25)>>' + 
			'<<run setup.rating($player, 10)>>' + 
			'<<= setup.eventText("You quickly leave the room and move on to the next.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidHallway = {
		name: 'Hallway (Drunk Man)',
		passageText: '<<= setup.eventText("Turning down unto a new hallway you bump into a trail of litter and spilled drink.")>>' + 
		'<<= setup.speak($player, "Seriously...?! Really? In the hallway?!", "angry")>>' + 
		'<<= setup.eventText("You begin to dust, clean and remove the trash, trying to be as subtle as possible and not flash your panties in the short dress as people move about.")>>' + 
		'<<= setup.speak($npc.adults[0], "Mhmgm...hehe-..*hic*.. Check out that behind...", "smile")>>' + 
		'<<= setup.eventText("As you were bending over to pick something up you feel a strong masculine hand slide directly up along your inner thigh and grazing your pantie.")>>' + 
		'<<= setup.eventText("You yelp as a bigger older man push himself towards you, his breath clearly drunk and filled with lust.")>>' + 
		'<<= setup.speak($player, "What the hell do you think you´re doing?!", "angry")>>' + 
		'<<= setup.speak($npc.adults[0], "Oooh-ooh a sweet angel has come for me!", "smile")>>' + 
		'<<= setup.eventText("The man roughly manhandles your naked buttcheeks under your maid dress.")>>' + 
		'<<run setup.count("receivedHarassment")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Give in',
			resultText: '<<= setup.speak($player, "Ahhh shit, come on now...")>>' + 
			'<<= setup.speak($npc.adults[0], "Ahhh yes... Come on you... Hehe!", "smile")>>' + 
			'<<= setup.eventText("The man quickly overwhelms you and goes in for a kiss, but you swiftly dodge only letting him smother your neck instead. Putting your hand on his stomach to ease him off, you lightly grace something...")>>' + 
			'<<= setup.speak($player, "Dude! Really?! You have your fucking cock ou-!")>>' + 
			'<<= setup.speak($npc.adults[0], "Mmmh sweet love! Hahaa-ha!", "smile")>>' + 
			'<<= setup.eventText("Trying to endure his advances you spot Lily in the distance, standing there observing you both in shock. You grimace at her.")>>' + 
			'<<= setup.speak($characters.lily, "Really newbie? You just started and you´re already about to choke on some guy´s cock?", "smile")>>' + 
			'<<= setup.speak($player, "Come on! Get him off me!", "angry")>>' + 
			'<<= setup.speak($characters.lily, "Sure... Whatever.")>>' + 
			'<<= setup.eventText("She moves closer and swiftly places her hand on his neck. You feel the full weight of his body come down on you as he passes out.")>>' + 
			'<<= setup.speak($characters.lily, "Done. Now... If you will excuse me, I have actual real work to continue. See ya around... Cock-sucker.", "smile")>>' + 
			'<<= setup.speak($player, "God damn it!")>>' + 
			'<<run setup.psyche($player, "Lust", 50, 50)>>' + 
			'<<run setup.psyche($player, "Slut", 3, 2, 3)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Fight back',
			resultText: '<<= setup.speak($player, "Fucking! Get off of me!", "angry")>>' + 
			'<<= setup.eventText("You try your best to fight back and manage to trip him over unto the floor.")>>' + 
			'<<= setup.speak($npc.adults[0], "Oooow!", "surprised")>>' + 
			'<<= setup.eventText("After which you realize Lily was watching in the distance.")>>' + 
			'<<= setup.speak($characters.lily, "Not bad newbie... Looks like you´re a real asset on the menu around here.", "smile")>>' + 
			'<<= setup.speak($player, "Really? You could have helped!", "angry")>>' + 
			'<<= setup.eventText("She laughs and struts away.")>>' + 
			'<<= setup.eventText("Looking at the man, whom appears to have completely passed out by now, you decide to continue cleaning up the hallway.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidVoyeur = {
		name: 'Lily Blowjob (Voyeur)',
		passageText: '<<= setup.eventText("You finish one hallway of rooms and are about to move on to the next one when you hear a muffled moan and a familiar voice. A schlicking sound coming from around the end corner of the hallway.")>>' + 
		'<<= setup.eventText("You move slowly to peak around the corner and spot Lily kneeled down against the wall with some guy´s fat cock jammed down her throat.")>>' + 
		'<<= setup.speak($npc.adults[0], "Oooh fuck. Go on, work that tongue you whore.")>>' + 
		'<<= setup.eventText("She mumbles something unintelligable and continues to bob her head back forth.")>>' + 
		'<<= setup.speak($npc.adults[0], "That´s it!", "smile")>>' + 
		'<<= setup.eventText("You´re slightly shocked, since Lily didn´t seem like the type. Not really sure about what to do you...")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Stay and watch',
			resultText: '<<= setup.eventText("She continues to wantonly choke herself on his cock, clearly knowing what she´s doing, it´s definitely not her first time.")>>' + 
			'<<= setup.eventText("He grabs her head forcing her down, but she quickly slaps away his hand and flips him off.")>>' + 
			'<<= setup.speak($npc.adults[0], "Yeah-yeah... Your way and all that. Fuck!", "smile")>>' + 
			'<<= setup.eventText("You quickly get hot and bothered, touching yourself a little absent-mindedly.")>>' + 
			'<<= setup.eventText("He seems to be getting closer as he rocks his hips towards her.")>>' + 
			'<<= setup.speak($npc.adults[0], "Ahhh! Fuck yeah!", "surprised")>>' + 
			'<<= setup.eventText("Taking out his cock he spurts and covers her face in his thick juices.")>>' + 
			'<<= setup.speak($characters.lily, "Ugh! I TOLD YOU! I swallow, don´t cover me! I´m working!", "smile")>>' + 
			'<<= setup.eventText("She gets up and frantically grabs some wet wipes to clean herself.")>>' + 
			'<<= setup.speak($npc.adults[0], "Ah shit, I´m sorry...")>>' + 
			'<<= setup.speak($characters.lily, "Whatever. Just pay up and get lost already.")>>' + 
			'<<= setup.eventText("With the action over you quickly retreat.")>>' + 
			'<<run setup.psyche($player, "Lust", 50, 25)>>' + 
			'<<run setup.psyche($player, "Slut", 3, 2, 4)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Leave and continue your work',
			resultText: '<<= setup.eventText("Even though the scene is really hot you decide that this is none of your business.")>>' + 
			'<<= setup.speak($player, "Lily of all people... Didn´t expect that.", "smile")>>' + 
			'<<= setup.eventText("You think to yourself condescendingly as you continue moving unto the next hall.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidSpanking = {
		name: 'Spanking (non-slutty)',
		passageText: '<<= setup.eventText("After finishing cleaning a particularly dirty and unkempt room you barely get to leave it before being interrupted.")>>' + 
		'<<= setup.speak($npc.adults[0], "What in the hell do you think you´re doing in here?!", "angry")>>' + 
		'<<= setup.speak($player, "Uhm? Just cleaning the-")>>' + 
		'<<= setup.speak($npc.adults[0], "My damned cock is all you get to clean you dirty girl!", "angry")>>' + 
		'<<= setup.eventText("Before you get to react you feel him grabbing your waist and shoving you towards the bed where he flips you over his knee.")>>' + 
		'<<= setup.speak($player, "What the fuck are-?!", "angry")>>' + 
		'<<= setup.eventText("@@.boldtext;SMACK!@@")>>' + 
		'<<= setup.eventText("You feel a stinging flat pain on your right naked buttcheek... And then another!")>>' + 
		'<<= setup.eventText("@@.boldtext;SMACK!@@")>>' + 
		'<<= setup.speak($npc.adults[0], "Be quiet you...! Naughty girl!", "angry")>>' + 
		'<<run setup.count($player, "receivedHarassment")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Resist and fight the spanking',
			resultText: '<<= setup.speak($player, "YOU CAN´T JUST SPANK ME! CRAZY PIECE OF SHIT!", "angry")>>' + 
			'<<= setup.eventText("You wiggle your way out of his hold and shove your hand into his face. He´s temporarily stunned as you make a run for the exit.")>>' + 
			'<<= setup.speak($npc.adults[0], "Where do you think you´re going?! Cleaning my sacred safe space without my approval! YOU WENCH!", "angry")>>' + 
			'<<= setup.eventText("You manage to make a run for it and escape, resuming your maidly duties later till the end of the shift.")>>' + 
			'<<run setup.psyche($player, "Feminine", 3, 2, 1)>>' + 
			'<<run setup.rating($player, -2)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Take it all',
			resultText: '<<= setup.speak($player, "Not so hard!", "surprised")>>' + 
			'<<= setup.eventText("@@.boldtext;SMACK! SMACK! SMACK!@@")>>' + 
			'<<= setup.speak($npc.adults[0], "You´re going to take it you stupid wench!", "angry")>>' + 
			'<<= setup.eventText("@@.boldtext;SMACK! SMACK! SMACK!@@")>>' + 
			'<<= setup.speak($npc.adults[0], "Cleaning my sacred safe space without my approval! YOU WENCH!", "angry")>>' + 
			'<<= setup.eventText("@@.boldtext;SMACK! SMACK! SMACK!@@")>>' + 
			'<<= setup.speak($player, "I´m sorry, I really am! Just let me go!", "surprised")>>' + 
			'<<= setup.eventText("Your cheeks burn bright red and are sore from the ruthless spanking, however he finally lets you go.")>>' + 
			'<<= setup.speak($npc.adults[0], "Go on then, leave, but if I catch that whore-ass in my room again, it´s another spanking!", "smile")>>' + 
			'<<= setup.eventText("You quickly grab your things and stumble out whilst caressing your aching buttcheeks.")>>' + 
			'<<run setup.psyche($player, "Slut", 3, 2, 3)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidPantiePromo = {
		name: 'Pantie Promotion (non-slutty)',
		passageText: '<<= setup.eventText("As you put together your hover trolley for cleaning, the otherwise nice peace and quiet is disturbed as Lily barges into the maidroom.")>>' + 
		'<<= setup.speak($characters.lily, "You...! Are you wearing panties?! Give me your damn panties!", "angry")>>' + 
		'<<= setup.speak($player, "What?! What the fuck is wrong with you!", "angry")>>' + 
		'<<= setup.speak($characters.lily, "They´re having another panty promo, but we only get our bonus if all the maids go along with it! So give it here, NOW!", "angry")>>' + 
		'<<= setup.eventText("You feel her sinister stare as she demandingly extends her hand.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Hand over your panties',
			resultText: '<<= setup.speak($player, "Calm down... Geez... Here, don´t go sniffing them now.")>>' + 
			'<<= setup.eventText("You gently close your legs together and drop the black frilly panties under her leering gaze.")>>' + 
			'<<= setup.speak($characters.lily, "You think I´m some kinda pervert, huh? Just do what I tell you newbie.")>>' + 
			'<<= setup.eventText("You hand over your damp panties which she greedily grabs and adds to her growing collection amongst your peers panties.")>>' + 
			'<<= setup.speak($player, "Sooo-... I´m gonna get those back right?")>>' + 
			'<<= setup.eventText("She grunts as the door slams on her way out, seemingly to collect the rest.")>>' + 
			'<<= setup.speak($player, "Whatever pays I suppose.")>>' + 
			'<<run setup.psyche($player, "Slut", 3, 2, 3)>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<<run setup.rating($player, 10)>><<run setup.bonus($player, 250, "Cleaning")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Refuse to give her your panties',
			resultText: '<<= setup.speak($player, "Yeah that´s not gonna happen.")>>' + 
			'<<= setup.speak($characters.lily, "WHAT?! You´re going to fuck over the rest of us just because you´re some uppity high bitch?!", "angry")>>' + 
			'<<= setup.speak($player, "Fuck you! Who the fuck just asks about panties like that?!", "angry")>>' + 
			'<<= setup.eventText("You see her boil over and for a second clenching her fist in a fit of fury. You expected her to attack you, though, she suddenly seems to calm down a bit.")>>' + 
			'<<= setup.speak($characters.lily, "UGH! Whatever. You´re not better than us! Don´t you think that for a second, newbie!", "disgust")>>' + 
			'<<= setup.eventText("A loud clang is heard as her heel connects with the trash bin on her way out, the door to the maidroom slamming shut.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidCinema = {
		name: 'Cinema Cleanup (non-slutty)',
		passageText: '<<= setup.eventText("You stand outside waiting at the Deep Lip Cinema with your maid trolley as several customers exit and leave.")>>' + 
		'<<= setup.eventText("A few of the male customers send you a slick stare and grin as they leave, eyeing you up and down.")>>' + 
		'<<= setup.eventText("You sigh as you enter and begin your cleanup routine, picking up popcorn, litter and trash left over by the cinema goers.")>>' + 
		'<<= setup.eventText("Reaching over to grab an empty popcorn box you put your hand down on one of the seats, but quickly jank it back as you touch something slimy. You yelp loudly as you realize you just touched a used up condom.")>>' + 
		'<<= setup.speak($player, "Ugh...! Really?!", "angry")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("You put on at least two layers of sanitary gloves as you remove it from the seat, only to realize that it´s not the only one lying around.")>>' + 
			'<<= setup.speak($player, "What kind of cinema is this?!", "angry")>>' + 
			'<<= setup.eventText("Your eyes dart towards your UV-light... But you quickly decide to spare yourself the truth of what revelation that would bring upon you.")>>' + 
			'<<= setup.eventText("You swallow your pride and throw the remaining cum-filled condoms into your trash bag.")>>' + 
			'<<run setup.psyche($player, "Slut", 3, 2, 3)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidDrool = {
		name: 'Mindbroken',
		passageText: '<<= setup.eventText("You power through the fog, catching yourself drooling at times, you try to do your best cleaning as many rooms as possible.")>>' + 
		'<<= setup.eventText("Every now and then, you realize someone is groping you, for how long? Could you even make them stop if you wanted to?")>>' + 
		'<<= setup.eventText("Mmmmmh... What´s even going on?")>>' + 
		'<<= setup.eventText("You feel a rough *SMACK* connect with your cheek.")>>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Ow!',
			resultText: '<<= setup.speak($characters.lily, "Wake up! Newbie! Are you even there?!", "angry")>>' + 
			'<<= setup.speak($player, "Uuuuuuh? Candy? *drools*........")>>' + 
			'<<= setup.speak($characters.lily, "Unbelievable! This is going in your log!", "angry")>>' + 
			'<<= setup.eventText("Saliva stains your maid dress as you stand there, completely gone.")>>' + 
			'<<run setup.psyche($player, "Lust", 10, 25)>>' + 
			'<<run setup.rating($player, -100)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidSex1 = {
		name: 'Maid Sex Offer (non-slutty)',
		passageText: '<<= setup.eventText("You approach the next room that needs the duster and park your trolley just by the door. Your light hands connect with the door twice.")>>' + 
		'<<= setup.speak($player, "Here to clean, anyone home?")>>' + 
		'<<= setup.eventText("A scuffle can be heard coming from inside as someone moves towards the door.")>>' +
		'<<= setup.speak($characters.secret, "About damn time, my balls are aching.")>>' + 
		'<<= setup.eventText("The door is quickly opened and your vision blinded by a pair of crown jewels dangling in the open. With nothing else than an open bathrobe to wear, the man is practically naked.")>>' +
		'<<= setup.speak($npc.adults[0], "Hmph, this some kinda promo? Why are you wearing a french maid costume? Anyway, get in here and suck my balls already.")>>' + 
		'<<= setup.eventText("Quickly pulling yourself to your senses you cry out.")>>' + 
		'<<= setup.speak($player, "Uuuh, sorry! Big misunderstanding! Just here to clean the room!", "surprised")>>' + 
		'<<= setup.speak($npc.adults[0], "Nonsense, now get in here and do your damn job, whore!", "smile")>>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Not a whore',
			resultText: '<<= setup.speak($player, "Hey! I´m not a whore!", "angry")>>' + 
			'<<= setup.speak($npc.adults[0], "What? Really? Don\t make me laugh now!", "smile")>>' + 
			'<<= setup.speak($player, "Fuck you! Clean your own damn room then!")>>' + 
			'<<= setup.eventText("You turn around, grabbing your trolley you begin to leave.")>>' + 
			'<<= setup.speak($npc.adults[0], "God damn whore!", "angry")>>' + 
			'<<run setup.rating($player, -2)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Just here to clean',
			resultText: '<<= setup.speak($player, "Sorry sir, there´s been a misunderstanding of some sort, I really am just here to clean the room.")>>' + 
			'<<= setup.speak($npc.adults[0], "I already told ya! I don´t care! Now suck my damn cock!", "angry")>>' + 
			'<<= setup.speak($player, "I don´t think so. You want me to clean the room or not?")>>' + 
			'<<= setup.speak($npc.adults[0], "If ya ain´t here to clean my cock, then you better turn that prissy ass around and leave, right damn now!", "angry")>>' + 
			'<<= setup.eventText("You turn around, grabbing your trolley you begin to leave.")>>' + 
			'<<= setup.speak($npc.adults[0], "God damn whore!", "angry")>>' +
			'<<= setup.speak($player, "Whatever")>>' + 	
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidSex2 = {
		name: 'Maid Sex Offer (Blowjob, slutty)',
		passageText: '<<= setup.eventText("You approach the next room that needs the duster and park your trolley just by the door. Your light hands connect with the door twice.")>>' + 
		'<<= setup.speak($player, "Here to clean, anyone home?")>>' + 
		'<<= setup.eventText("A scuffle can be heard coming from inside as someone moves towards the door.")>>' +
		'<<= setup.speak($characters.secret, "About damn time, my balls are aching.")>>' + 
		'<<= setup.eventText("The door is quickly opened and your jaw drops at the sight before you. With nothing else than an open bathrobe to wear, the man is practically naked.")>>' +
		'<<= setup.speak($npc.adults[0], "Hmph, this some kinda promo? Why are you wearing a french maid costume? Anyway, get in here and suck my balls already.")>>' + 
		'<<= setup.eventText("Quickly pulling yourself to your senses you cry out.")>>' + 
		'<<= setup.speak($player, "Uuuh, sorry!", "surprised")>>' + 
		'<<= setup.speak($npc.adults[0], "Sure, whatever, get in here and suck me already.", "smile")>>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 2}],
		options: [
		{
			buttonText: 'Follow along',
			resultText: '<<= setup.speak($player, "Right away mister!", "smile")>>' + 
			'<<= setup.eventText("Licking your lips you enter the room.")>>' + 
			'<<= setup.speak($npc.adults[0], "God damn whore!", "angry")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 10, 15)>>' + 
			'<<run setup.rating($player, 25)>><<run setup.bonus($player, 500, "Blowjob")>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "blowjob", $sex.gE = $player, $sex.rE = $npc.adults[0], $sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Receptionist", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Just here to clean',
			resultText: '<<= setup.speak($player, "Sorry sir, there´s been a misunderstanding of some sort, I really am just here to clean the room.")>>' + 
			'<<= setup.speak($npc.adults[0], "I already told ya! I don´t care! Now suck my damn cock!", "angry")>>' + 
			'<<= setup.speak($player, "I don´t think so. You want me to clean the room or not?")>>' + 
			'<<= setup.speak($npc.adults[0], "If ya ain´t here to clean my cock, then you better turn that prissy ass around and leave, right damn now!", "angry")>>' + 
			'<<= setup.eventText("You turn around, grabbing your trolley you begin to leave.")>>' + 
			'<<= setup.speak($npc.adults[0], "God damn whore!", "angry")>>' +
			'<<= setup.speak($player, "Whatever")>>' + 	
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidBimbo = {
		name: 'Bimbo Maid',
		passageText: '<<= setup.eventText("Entering the next room that needs cleaning, you grip your duster and moan lightly. Starting with the living room you flick and swish the duster wherever it´s needed.")>>' + 
		'<<= setup.speak($player, "Mmmmh, here too.")>>' + 
		'<<= setup.eventText("You lightly bend over, legs stretched making your frilly skirt expose everything beneah from behind.")>>' +
		'<<= setup.speak($player, "And here, and here. Oh my and there!")>>' + 
		'<<= setup.eventText("Your womanly juices trail along your inner thigh as your panties fight to contain your wet cunt.")>>' + 
		'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
		'<<= setup.eventText("Entering the bedroom you grab the sheets and quickly change them. Until a lecherous idea catches your mind. Your fingers slowly reaching for your crotch.")>>' + 
		'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
		'<<= setup.speak($player, "Mmmh.. surely no one will catch me having a bit of fun here?", "smile")>>' + 
		'<<= setup.eventText("Rubbing your clit through the soft fabric, you moan like a wanton bimbo whore in heat.")>>',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 2}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.speak($player, "Mmmmh fuck...", "smile")>>' + 
			'<<= setup.eventText("You flick your panties to the side in frustration, rubbing your soaked slit with desperate need. Eventually you almost rip them off, needing full access to properly finger-fuck yourself.")>>' + 
			'<<= setup.speak($player, "Aaaah! Fuck! If only I had a real cock right now!", "pleasure")>>' + 
			'<<= setup.eventText("Putting up the pace your moans turn louder almost ending in wild passionate screams. A ripple of pleasure shoots up through your stomach and down your legs ending in your toes.")>>' + 
			'<<= setup.eventText("The lust taking complete hold of you as you squirt and wetten the sheets meant to replace the old.")>>' + 
			'<<= setup.speak($player, "Ooooh fuck!", "pleasure")>>' + 	
			'<<run setup.psycheHard($player, "Lust", 0)>>' + 
			'<<= setup.eventText("The last waves of pleasure make their way through your body and you quickly regain your senses. Finishing putting on the sheets you completely forget that they´re soaked in your juices.")>>' + 
			'<<= setup.speak($player, "Shit shit shit! Getting behind on schedule!", "surprised")>>' + 	
			'<<= setup.eventText("Moving on to the next room in a hurry, you don´t even notice that there was something else that you forgot.")>>' + 
			'<<run setup.psyche($player, "Bimbo", 1, 4)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	};
	let maidCollectionRoom1 = {
		name: 'Collection Room (non-slutty)',
		passageText: '<<= setup.eventText("You reach the bottom floor and enter the hotel foyer, next on the list... the Collection Room. Approaching the designated location from your E-Pal, you reach a gate-like door, almost medieval in apperance.")>>' + 
		'<<= setup.eventText("You put your hands on the wooded inlaid door and push, almost flicking your heels.")>>' + 
		'<<= setup.speak($player, "God damn it... What the hell is something like this doing here?")>>' + 
		'<<= setup.eventText("As you finally get it open enough to slip through, you pull your trolley into the room. What meets you eye is a massive room, almost church-like in it´s interior appearance with a painted gothic-like ceiling.")>>' +
		'<<= setup.speak($player, "Well this is quite something...", "smile")>>' + 
		'<<= setup.eventText("Around the room are all manners of bizarre statues, idols and paintings. All of them strangely erotic in nature, ranging from phallus-shaped golden figurines to full on painted pornography.")>>' + 
		'<<run setup.psyche($player, "Lust", 5, 5)>>' + 
		'<<= setup.speak($player, "Great... Well, let´s get to it then.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Bimbo', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("You whip out your duster and begin to dust the strange statues and figurines, letting your duster rub up and down along the many sized shafts and cock-shaped furniture.")>>' + 
			'<<= setup.speak($player, "This place is just getting weirder and weirder...")>>' + 
			'<<= setup.eventText("At least an hour later having run your duster along almost any kind of erotic shape in existence, you finally bring out the mop, when something in particular catches your eye.")>>' + 
			'<<= setup.eventText("A metallic-like container with darkened glasses. On it is written ´Property of Dr. Linus´, only sparking your curiousity even more.")>>' + 
			'<<= setup.speak($player, "I wonder what Dr. Linus could be hiding in here... hmph...")>>' + 
			'<<= setup.eventText("You finish mopping the floor and end the day on a high note, having done some extra work.")>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	};
	let maidCollectionRoom2 = {
		name: 'Collection Room (bimbo)',
		passageText: '<<= setup.eventText("You reach the bottom floor and enter the hotel foyer, next on the list... the Collection Room. Approaching the designated location from your E-Pal, you reach a gate-like door, almost medieval in apperance.")>>' + 
		'<<= setup.eventText("You put your hands on the wooded inlaid door and push, almost flicking your heels.")>>' + 
		'<<= setup.speak($player, "Uuuh come on! Pushies a bitzy harder! UGH!")>>' + 
		'<<= setup.eventText("As you finally get it open enough to slip through, you pull your trolley into the room. What meets you eye is a massive room, almost church-like in it´s interior appearance with a painted gothic-like ceiling.")>>' +
		'<<= setup.speak($player, "Ooooh! So Big!", "surprised")>>' + 
		'<<= setup.eventText("Around the room are all manners of bizarre statues, idols and paintings. All of them strangely erotic in nature, ranging from phallus-shaped golden figurines to full on painted pornography. You lick your lips as the thought of sucking every single of them makes you moist.")>>' + 
		'<<run setup.psyche($player, "Lust", 25, 75)>>' + 
		'<<= setup.speak($player, "Mmmmmh... Cocks and Cummies! But now we get to worksies!", "smile")>>',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 2}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("You whip out your duster and strut around dusting the strange statues and figurines, letting your duster slowly rub up and down along the many sized shafts and cock-shaped furniture.")>>' + 
			'<<= setup.speak($player, "Mmmmh so many cocks needing cleansies!", "smile")>>' + 
			'<<= setup.eventText("You fight it at least until you bring out the mop, when something truly catches your eye. A completely realistic looking cock, veiny, balls and all that yummy stuff.")>>' + 
			'<<= setup.eventText("You move closer, drool hitting your tits and a trail of juices being left on the marble floor.")>>' + 
			'<<= setup.speak($player, "Just a little taste?")>>' + 
			'<<= setup.eventText("You place your lips on the tip, licking it slowly... When suddenly the cock bursts and paints your face with cum.")>>' + 
			'<<= setup.speak($player, "Oooooh!", "pleasure")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 75)>>' + 
			'<<= setup.eventText("The cum soaks your clothes and hair as well, making you look like a used up french maid. The musky smell of cum almost overwhelming your muddled mind, you try to get it together.")>>' + 
			'<<= setup.speak($player, "Oh-nono! I gotta finish! I´m supposed to be a good maid!", "surprised")>>' + 
			'<<= setup.eventText("You quickly get back to it bringing out the mop to clean the floor, completely forgetting your cum-blasted state.")>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	};
	let maidBoardRoom = {
		name: 'Board Room (Multi)',
		passageText: '<<= setup.eventText("The elevator door opens and you haul your trolley towards the next room on the list. The hallway is neatly decorated with sculptures of supposedly important figures.' + 
		' All of them stacked nicely against the red and golden wall.")>>' + 
		'<<= setup.eventText("You reach the gold-inlaid double-doors of which you push open with little effort.")>>' + 
		'<<= setup.speak($player, "Well... here we are.")>>' + 
		'<<= setup.eventText("The room already looks neatly cleaned and maintained, only the odd coffee-mug stain and crumbs lying around. Sighing in relief, you get to work anyway. Arming yourself with your ' + 
		'trusty duster and cleaning utensils you begin to scrub and dust.")>>' + 
		'<<= setup.speak($characters.executive1, "Who are you?")>>' + 
		'<<= setup.eventText("You almost drop your duster in shock as you turn around.")>>' + 
		'<<= setup.speak($player, "W-what?! Oh god! S-sorry! The room was supposed to be empty!", "surprised")>>' + 
		'<<= setup.speak($characters.executive1, "Next board meeting will begin in five minutes... But no matter. You continue if you wish. I´m sure the gentlemen won´t mind such a fine piece of ass around.", "smile")>>' + 
		'<<= setup.eventText("He walks towards the end of the table and begins to prepare some kind of presentation.")>>' + 
		'<<run setup.psyche($player, "Lust", 5, 5)>>',
		requirements: [],
		options: [
		{
			buttonText: 'Quickly finish up.',
			resultText: '<<= setup.eventText("You make a quick scan of the whole board room, locating all of the worst spots most needing your attention.")>>' + 
			'<<= setup.speak($player, "This is doable, should not be long.", "smile")>>' + 
			'<<= setup.eventText("You quickly grab the trashcan, making one sweep filling it the little trash lying around and scooping the crumbs into it.")>>' + 
			'<<= setup.eventText("Grabbing your wet cloth you make a speedy wipe of the table, getting the few stains.")>>' + 
			'<<= setup.speak($player, "There we go!")>>' + 
			'<<= setup.speak($characters.executive1, "Oh really? Hmph, didn´t have to be that quick about it doll.", "smile")>>' + 
			'<<= setup.eventText("You grab your things, and just as you head for the door it opens as four-five men in neon business suits enter. Clutching your duster and your things you move through.")>>' + 
			'<<= setup.eventText("At least one of them turned around to check your behind and another whistled as you strutted down the hallway towards the elevator.")>>' + 
			'<<run setup.psyche($player, "Lust", 5, 15)>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	};
	let maidLuxurySuite = {
		name: 'Luxury Suite (Multi)',
		passageText: '<<= setup.eventText("You knock on the door to the single luxury suite at the Gloria Hotels, also known as the obsidian penthouse. Clutching your trolly of which ' + 
		' you had to take all the way up eighty-floors in an elevator blasting the most mundane synthwave trash. You wait to see if the room is vacant or not.")>>' + 
		'<<= setup.speak($player, "Hmph, no answer. Guess the coast is clear.")>>' + 
		'<<= setup.eventText("You swipe your E-Pal giving yourself access. Dragging your trolly with you, you enter the black volcanic-tiled suite. The hallway the size of a regular suite and the bedroom twice the size. ' + 
		' The absolute massive quadro-bed that could easily house eight bodies. You sigh, knowing that even if the room is already relatively clean. It will take at least half an hour to just change the sheets and the army ' + 
		'of pillows. Nevertheless, you begin to tirelessly work.")>>' + 
		'<<= setup.speak($characters.executive1, "Woah!!!", "surprised")>>' + 
		'<<= setup.speak($player, "Oh shit!", "surprised")>>' + 
		'<<= setup.eventText("You turn around, quickly covering your eyes to the naked image that meets your gaze. The man only having a towel to hide his privates.")>>' + 
		'<<= setup.speak($player, "I thought the suite was empty!", "surprised")>>' + 
		'<<= setup.speak($characters.executive1, "W-well...! It clearly was not. No matter. You do what you need to do. Let me just change real quick.")>>' + 
		'<<= setup.eventText("The guy walks towards the wall and slides out a wardrobe. Carelessly dropping his towel and flashing his junk.")>>' + 
		'<<run setup.psyche($player, "Lust", 5, 5)>>',
		requirements: [],
		options: [
		{
			buttonText: 'Try to ignore him changing.',
			resultText: '<<= setup.eventText("You continue changing the sheets, trying your best to ignore the otherwise naked man taking his time to select his underwear for the day.")>>' + 
			'<<= setup.speak($characters.executive1, "Black or blue?", "smile")>>' + 
			'<<= setup.speak($player, "Uuuh? what?")>>' + 
			'<<= setup.speak($characters.executive1, "Underwear. Which color would you rather see before getting fucked by a stud like me?")>>' + 
			'<<= setup.eventText("You turn around to see him once again flashing his junk holding a pair of black and blue neon underwear.")>>' + 
			'<<= setup.speak($player, "U-uhm. Black or whatever. I guess...")>>' + 
			'<<= setup.speak($characters.executive1, "Tsk tsk. Black it is.", "smile")>>' + 
			'<<= setup.eventText("The guy quickly jumps into his neon business suit, grunting a few times.")>>' + 
			'<<= setup.speak($characters.executive1, "Well then! That´s me being off! Keep up the good work doll!", "smile")>>' + 
			'<<= setup.eventText("You yelp as you feel a sudden sharp pain in your left buttcheek followed by a loud slap. You turn around, but he seems to have left in a hurry.")>>' + 
			'<<= setup.speak($player, "Ugh!", "angry")>>' + 
			'<<run setup.psyche($player, "Lust", 5, 15)>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let maidGreatJob = {
		name: 'Great Job (Cleaning)',
		passageText: '<<= setup.eventText("After a long day of cleaning numerous dirty hotel rooms, you drag your trolley towards the maids office. ' + 
		' You almost bump inot Lily as you open the door.")>>' + 
		'<<= setup.speak($player, "Shit! Sorry!")>>' + 
		'<<= setup.speak($characters.lily, "Watch it! Ugh... Newbie.", "surprised")>>' + 
		'<<= setup.eventText("Before she disappears she turns around and calls your name.")>>' + 
		'<<= setup.speak($characters.lily, "Hey! $player.femaleName! I was supposed to tell you that management was surprised at how fast you cleaned those room! Lucky you huh?", "smile")>>' + 
		'<<= setup.speak($player, "Thanks, but- What do you mean?")>>' + 
		'<<= setup.speak($characters.lily, "The bonus not ticked in yet? Should be there any minute now!", "smile")>>' + 
		'<<= setup.eventText("Your E-Pal suddenly vibrates as your bonus registers.")>>' + 
		'<<run setup.bonus($player, 250, "Cleaning")>>' + 
		'<<run setup.rating($player, 50)>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 1}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.speak($player, "Good shit, being some dumb maid ain´t so bad after all, huh?", "smile")>>' + 
			'<<= setup.speak($characters.lily, "True shit, keep it up!", "smile")>>' + 
			'<<= setup.eventText("She turns around and your eyes immediately fixate on her swaying ass as she struts out of sight.")>>' + 
			'<<= setup.speak($player, "Fuck me... If only...")>>' + 
			'<<run setup.psyche($player, "Lust", 5, 95)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.speak($player, "Yes! Jackpot!", "smile")>>' + 
			'<<= setup.speak($characters.lily, "Don´t get too cocky now.")>>' + 
			'<<= setup.eventText("She turns around leaving you to revel over your bonus.")>>' + 
			'<<= setup.speak($player, "Ugh, just jealous someone actually does well.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
		}]
	}
	
	let carshowLineWork = {
		name: 'Line Work',
		passageText: '<<= setup.eventText("You´re given an arbitrary specs-list for one of the holo-cars and assigned a spot. Various spectators and venue visitors flock around to ogle at the various other show girls, holo-cars and holo-bikes.")>>' + 
		'<<= setup.eventText("The one you stand with is red with pink neon lights.")>>' + 
		'<<= setup.speak($player, "A rather nice car really, I would definitely not mind owning a ride like this.")>>' + 
		'<<= setup.eventText("A few of the visitors stop to ask you about the holocar, it´s specs and the brand. You catch at least several men staring directly into your cleavage whilst asking very obvious questions.")>>' + 
		'<<= setup.speak($npc.adults[0], "So... Uuuh it has like four wheels right?", "smile")>>',
		requirements: [],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.speak($player, "Yes... It quite clearly has four wheels... *sigh*")>>' + 
			'<<= setup.speak($npc.adults[0], "Ah yes... Right of course... Four wheels...", "smile")>>' + 
			'<<= setup.eventText("The rest of the day goes by rather uneventful with the Hot Stripes representative looking rather pleased with the number of requests and recommendations your ride received.")>>' + 
			'<<run setup.rating($player, 10)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let carshowPhotoshoot = {
		name: 'Photoshoot',
		passageText: '<<= setup.eventText("You stand by your holo-car doing the line work as the Holo Stripes Representative approaches you with his familiar smile.")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "A-ha! Zere you are! I have-a ze great opportunity for you my dear! A´lil shoot of light, ze photografica, yes? Big bonus in it for you!", "smile")>>' + 
		'<<= setup.speak($player, "The what now?")>>' + 
		'<<= setup.eventText("Two younger men comes up after beginning to set up what appears to be a camera of sorts and a stand.")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "You know, for ze magazine! Your body wiz my car? Fantastic! So many customers I can already tell! What do you say? 2500 unit bonus, we agree? Just place finger here.")>>' + 
		'<<= setup.eventText("He flips out a blue holo-like tablet with a fingerprint consent form.")>>',
		requirements: [],
		options: [
		{
			buttonText: 'Accept the offer',
			resultText: '<<= setup.eventText("You place your finger on the form and it beeps.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Ah-a! Good-good! All you need to do iz strike some sexy poses on ze vehicle? No problemo right?", "smile")>>' + 
			'<<= setup.speak($player, "Sure, I can do that. Like this?", "smile")>>' + 
			'<<= setup.eventText("You lean against the car and push your chest forward. A few bright flashes follow as they take their shots.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Yes-yes! Please continue!", "surprised")>>' + 
			'<<= setup.eventText("Then you rest your left leg on the hood of the car whilst turning your upper body around sending the guys a seductive stare, biting your lip.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<<run setup.experience($player, "Social", 5, 15)>>' + 
			'<<run setup.rating($player, 10)>><<run setup.bonus($player, 150, "Social")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline the offer',
			resultText: '<<= setup.speak($player, "I´m sorry, but I don´t really think this is me? Is it alright if I decline?")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "I-uh-a... Of course, Is well within your right? Right-right... We just find other girl, a shame.")>>' + 
			'<<= setup.eventText("He snaps his fingers as he leaves and the two photographers follows him.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let carshowPhotoGrope = {
		name: 'Photoshoot (Grope)',
		passageText: '<<= setup.eventText("You lie against your holo-car, shielding your eyes from the spotlight that periodically blinds you. A voice suddenly startles you.")>>' + 
		'<<= setup.speak($npc.adults[3], "Hey uuuh, can I get a picture with you and the car?")>>' + 
		'<<= setup.speak($player, "Sure, I guess.")>>' + 
		'<<= setup.eventText("The guy lights up and quickly signals to his friends to take out their camera. He moves towards you as you get off the car to pose for the photo.")>>' + 
		'<<= setup.speak($npc.adults[3], "Don´t forget to smile!", "smile")>>' + 
		'<<= setup.eventText("You feel his hand grab your naked side, holding you in tightly towards him as he faces his friend.")>>' + 
		'<<= setup.speak($player, "Woah, easy there.")>>' + 
		'<<= setup.eventText("Your remark clearly falls on deaf ears as his hand slowly slides further down, firmly grabbing your ass. His hand cubbing cheek tightly, the lycra-like fabric leaving ' + 
		'no defense as he squeezes it. You yelp and twitch as the flash takes the picture.")>>',
		requirements: [],
		options: [
		{
			buttonText: 'Slap him.',
			resultText: '<<= setup.eventText("You quickly wringe yourself from his grip, spin around and gather some momentum before your palm connects with his face.")>>' + 
			'<<= setup.speak($npc.adults[3], "AAAAAH!", "surprised")>>' + 
			'<<= setup.speak($player, "Get your hands off of me! You creep!", "angry")>>' + 
			'<<= setup.eventText("The friends all gasp as the guy covers his face, tears already coming out as he squeals in pain. He quickly backs away only to turn around and leave one last protest.")>>' + 
			'<<= setup.speak($npc.adults[3], "HOW CAN SHE SLAP?!", "surprised")>>' + 
			'<<= setup.eventText("You clench your fish, holding yourself back from chasing after him to finish the job and end him for good.")>>' + 
			'<<run setup.experience($player, "Slapping", 5, 5)>>' + 
			'<<run setup.rating($player, -5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Ignore it.',
			resultText: '<<= setup.speak($player, "Tsk... mhm....")>>' + 
			'<<= setup.eventText("You try your best to fight the urge to moan as his groping crawls dangerously close to your cunt.")>>' + 
			'<<= setup.speak($npc.adults[3], "I think that was that! Thanks!", "smile")>>' + 
			'<<= setup.eventText("He retreats his hand and your lusting daze ends as he and his friends leave you.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let carshowGridGirl = {
		name: 'Grid Girl (Race Starter)',
		passageText: '<<= setup.eventText("As you walk towards your assigned car, you spot the Hot Stripes manager frantically running towards you.")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Z- Zere you are! Our grid girl to ztart ze next race iz nowhere to be found! We need a stand-in, think you can do ziz?")>>' + 
		'<<= setup.speak($player, "Uuuh?")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "All you gotta do iz look pretty- az you are, and blow off ze ztart of ze holo-race! Zmile and all that, zhake ziz a little after ze riders have drifted off!", "smile")>>' + 
		'<<= setup.eventText("You hink about it for a second, before asking.")>>' + 
		'<<= setup.speak($player, "Is that safe?")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Totally! I zwear!")>>',
		requirements: [],
		options: [
		{
			buttonText: 'Accept to be stand-in.',
			resultText: '<<= setup.speak($player, "I guess I´m your bro- err.. girl I mean!")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Good to hear! Good to hear! Now follow me! Ze race iz just about to hit off!")>>' + 
			'<<= setup.eventText("You follow him to the sound of engines revving and cheering, entering a long stretch of linear clean road lined with neon lights.")>>' + 
			'<<= setup.speak($npc.adults[0], "Oh shit! This grid girl is hot!", "surprised")>>' + 
			'<<= setup.speak($player, "Tsk...", "default")>>' + 
			'<<= setup.eventText("You immediately grab the attention of the surrounding crowd as they whistle and comment the tight outline of your ass and tits.")>>' + 
			'<<= setup.speak($npc.adults[3], "God damn it, eVentia always brings the hottest grid whores man.", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "They sure do.", "smile")>>' + 
			'<<= setup.speak($npc.adults[2], "That ass is heavenly!", "smile")>>' + 
			'<<= setup.eventText("You feel naked and a distinct need to cover up as the guys drooling stares lust over your body.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Here take ziz! And get out zere. Just zhake it a little and ztart it off at ze count down. I believe in you girl!", "smile")>>' + 
			'<<= setup.eventText("He holds out a rally flag, which you grab before heading out unto the neon-lighted track. The racecars honk and rev their engines as you move out unto the track. ' + 
			'With the crowd growing louder and more rabid with every sway of your ass. You try your best to look like the typical hot girl, almost fooling yourself once or twice.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Here we go!", "smile")>>' + 
			'<<= setup.eventText("A loud blaring countdown begins to tick down from ten... nine... eight...")>>' + 
			'<<= setup.speak($player, "This is it!", "smile")>>' + 
			'<<= setup.eventText("The engines continue their rev, the air hearting and your heart pounding as your pussy moistens from the tension... three... two... one...")>>' + 
			'<<= setup.speak($player, "Go!", "smile")>>' + 
			'<<= setup.eventText("You drop the flag down and before you know it, they have already blazed past you. The crowd cheering and the manager running towards you.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Good zhit! Only a few more to go!", "smile")>>' + 
			'<<= setup.speak($player, "Of course...")>>' + 
			'<<run setup.rating($player, 25)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
		},
		{
			buttonText: 'Accept to be stand-in.',
			resultText: '<<= setup.speak($player, "I guess I´m your girl!")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Good to hear! Good to hear! Now follow me! Ze race iz just about to hit off!")>>' + 
			'<<= setup.eventText("You follow him to the sound of engines revving and cheering, entering a long stretch of linear clean road lined with neon lights.")>>' + 
			'<<= setup.speak($npc.adults[0], "Oh shit! This grid girl is hot!", "surprised")>>' + 
			'<<= setup.speak($player, "Tsk... horny boys...", "default")>>' + 
			'<<= setup.eventText("You immediately grab the attention of the surrounding crowd as they whistle and comment the tight outline of your ass and tits.")>>' + 
			'<<= setup.speak($npc.adults[3], "God damn it, eVentia always brings the hottest grid whores man.", "smile")>>' + 
			'<<= setup.speak($npc.adults[2], "They sure do.", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "That ass is heavenly!", "smile")>>' + 
			'<<= setup.eventText("You feel naked and a distinct need to cover up as the guys drooling stares lust over your body.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Here take ziz! And get out zere. Just zhake it a little and ztart it off at ze count down. I believe in you girl!", "smile")>>' + 
			'<<= setup.eventText("He holds out a rally flag, which you grab before heading out unto the neon-lighted track. The racecars honk and rev their engines as you move out unto the track. ' + 
			'With the crowd growing louder and more rabid with every sway of your ass. You try your best to look like the typical hot girl, almost fooling yourself once or twice.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Here we go!", "smile")>>' + 
			'<<= setup.eventText("A loud blaring countdown begins to tick down from ten... nine... eight...")>>' + 
			'<<= setup.speak($player, "This is it!", "smile")>>' + 
			'<<= setup.eventText("The engines continue their rev, the air hearting and your heart pounding as your pussy moistens from the tension... three... two... one...")>>' + 
			'<<= setup.speak($player, "Go!", "smile")>>' + 
			'<<= setup.eventText("You drop the flag down and before you know it, they have already blazed past you. The crowd cheering and the manager running towards you.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Good zhit! Only a few more to go!", "smile")>>' + 
			'<<= setup.speak($player, "Of course...")>>' + 
			'<<run setup.rating($player, 25)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 3}]
		},
		{
			buttonText: 'Refuse politely.',
			resultText: '<<= setup.speak($player, "Sorry... That will have to be a no from me.")>>' + 
			'<<= setup.eventText("He looks visibly distraught and beaten.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Damn... Ziz iz gonna cost me zo much... alright zen.")>>' + 
			'<<= setup.eventText("He turns around to continue his hunt for a grid girl.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let carshowGreatJob = {
		name: 'Great Job (bimbo)',
		passageText: '<<= setup.eventText("After a long day of having to do rowdy photoshoots and dealing with horny men more likely here to drool over you than the holo-car. ' + 
		'You sigh and prepare to retreat.")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Oui! Wait up zere girly! You did a nice job today! I gotta give it to ya!")>>' + 
		'<<= setup.speak($player, "Thanks, sir!")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Ze way you shake it baby! Perfect! Make ze boyz go wild! We zold five cars today! Excellent!", "smile")>>' + 
		'<<= setup.eventText("You smile and bounce as the praise fills your bubbly chest with warmth and bubblegum happiness.")>>' + 
		'<<= setup.speak($player, "Teehee~!", "smile")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Oh zat iz what I´m talking about! Shake it baby!", "smile")>>',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 2}],
		options: [
		{
			buttonText: 'Shake it like a true slut!',
			resultText: '<<= setup.speak($player, "Mmmmh yes! Just me being a slut! Teehee~!", "smile")>>' + 
			'<<= setup.eventText("You turn around and let your ass drop, only to flip it back up. You feel a sharp pleasing pain spread in your cheeks as the Hot Stripes Manager´s hand connects with your tight ass.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "You got it baby! Take it you dirty slut!", "smile")>>' + 
			'<<= setup.speak($player, "Oh my! Daddy!", "pleasure")>>' + 
			'<<= setup.eventText("You walk towards the backstage to change in a bliss of horny lust, fulfillment and sense of achievement.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 15)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 100)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Shake it like a filthy whore!',
			resultText: '<<= setup.speak($player, "Mmmmh yes! I´m such a dirty whore!", "smile")>>' + 
			'<<= setup.eventText("You turn around and let your ass drop, only to flip it back up. You feel a sharp pleasing pain spread in your cheeks as the Hot Stripes Manager´s hand connects with your tight ass.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "You got it baby! Take it you filthy whore!", "smile")>>' + 
			'<<= setup.speak($player, "Oh my! Daddy!", "pleasure")>>' + 
			'<<= setup.eventText("You walk towards the backstage to change in a bliss of horny lust, fulfillment and sense of achievement.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 15)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 100)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Shake it for daddy!',
			resultText: '<<= setup.speak($player, "Mmmmh yes daddy!", "smile")>>' + 
			'<<= setup.eventText("You turn around and let your ass drop, only to flip it back up. You feel a sharp pleasing pain spread in your cheeks as the Hot Stripes Manager´s hand connects with your tight ass.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "You got it baby! Shake it for daddy!", "smile")>>' + 
			'<<= setup.speak($player, "Oh my! Daddy!", "pleasure")>>' + 
			'<<= setup.eventText("You walk towards the backstage to change in a bliss of horny lust, fulfillment and sense of achievement.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 15)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 100)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let carshowManagerSex1 = {
		name: 'Manager Sex (non-slutty)',
		passageText: '<<= setup.eventText("After a long day of having to do rowdy photoshoots and dealing with horny men more likely here to drool over you than the holo-car. ' + 
		'You sigh and prepare to retreat.")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Ah! If ziz is not my most favorite gal!")>>' + 
		'<<= setup.speak($player, "Yeah?")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Say, zis has been a looong~ day, and my back iz so-tired. What iz your going rate? I could relax a little.", "smile")>>' + 
		'<<= setup.eventText("You scratch your chin in confusion, but suddenly realize what he´s asking.")>>' + 
		'<<= setup.speak($player, "M-my going rate? Are you for real?")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Oh yes, I can get out ze champagne, and you and me get to relax, what you say? I pay good.", "smile")>>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.speak($player, "Fuck off! I´m not a whore!", "angry")>>' + 
			'<<= setup.eventText("The confusion spreads on his face as you clench your fist in anger.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Uh? But you are ze event girl? No?")>>' + 
			'<<= setup.speak($player, "That doesn´t mean I´m a whore!", "angry")>>' + 
			'<<= setup.eventText("You turn around walk towards the backstage to change in a fit of rage, ignoring his excuses.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Sorry! Madam! Maybe next time?")>>' + 
			'<<run setup.psyche($player, "Lust", 5, 15)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let carshowManagerSex2 = {
		name: 'Manager Sex (slutty)',
		passageText: '<<= setup.eventText("After a long day of having to do rowdy photoshoots and dealing with horny men more likely here to drool over you than the holo-car. ' + 
		'You sigh and prepare to retreat.")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Ah! If ziz is not my most favorite gal!")>>' + 
		'<<= setup.speak($player, "Oh my, it sure is!", "smile")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Say, zis has been a looong~ day, and my back iz so-tired. What iz your going rate? I could relax a little.", "smile")>>' + 
		'<<= setup.eventText("You chuckle and throw your arms up.")>>' + 
		'<<= setup.speak($player, "Oh? My going rate? Let me see, hmmmm....")>>' + 
		'<<= setup.speak($characters.hotstripesrep, "Oh yes, I can get out ze champagne, and you and me get to relax, what you say? I pay good.", "smile")>>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 1}],
		options: [
		{
			buttonText: 'Accept.',
			resultText: '<<= setup.speak($player, "Well, what does 2000 sound like?", "smile")>>' + 
			'<<= setup.eventText("A smile spreads on his face as he closes in to grab your side.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Sounds good to me!", "smile")>>' + 
			'<<= setup.speak($player, "Now about that champagne?", "smile")>>' + 
			'<<= setup.eventText("You follow him towards the backstage and his office.")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "I got zis in here, come along now, you little minx.")>>' + 
			'<<run setup.psyche($player, "Lust", 5, 75)>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "sex", $sex.gE = $characters.hotstripesrep, $sex.rE = $player, ' + 
			'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Receptionist", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline.',
			resultText: '<<= setup.speak($player, "Well, no matter the going rate, not today. I´m... all booked up!", "smile")>>' + 
			'<<= setup.speak($characters.hotstripesrep, "Ah? Well, maybe next time zen?")>>' + 
			'<<= setup.speak($player, "Maybe next time.")>>' + 
			'<<= setup.eventText("You wink at him before turning around walking towards the backstage to change.")>>' + 
			'<<run setup.psyche($player, "Lust", 5, 15)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Car Show Girl", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	
	let girlCoffeeDate1 = {
		name: 'Coffee Date (default)',
		passageText: '<<= setup.eventText("You reach the noted location within the entertainment center. A small coffeeshop with a stylich porch containing five-six dual tables. ' + 
		'You enter the coffeeshop and are almost immediately confronted by a slightly nervous, but forthcoming guy.")>>' + 
		'<<= setup.speak($npc.adults[3], "Uuuh, hi there! Are you $player.femaleName?")>>' + 
		'<<= setup.speak($player, "That´s me! Nice to meet ya! And you?")>>' + 
		'<<= setup.eventText("You get a table out on the porch and order some coffee. An awkward silece almost immediately takes hole, filling you with unease. You´re supposed to make sure he has a good time, after all.")>>' + 
		'<<= setup.speak($player, "So-")>>' + 
		'<<= setup.speak($npc.adults[3], "Hows it like being an Event Girl? Does a good-looking lass like you get a lot of attention?", "smile")>>' + 
		'<<= setup.eventText("You struggle to think up a response.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'It´s great.',
			resultText: '<<= setup.speak($player, "It´s great. I get paid to provide great and fullfilling services for everyone.", "smile")>>' + 
			'<<= setup.eventText("A smile forms on his face.")>>' + 
			'<<= setup.speak($npc.adults[3], "That´s good to hear. Tell me more about it.", "smile")>>' + 
			'<<= setup.speak($player, "Well, I mean, aside from the occasional perverts, then I don´t have a whole lot to complain about.")>>' + 
			'<<= setup.eventText("You both chuckle as your coffee arrives and you take the conversation further.")>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 10)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Girlfriend", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'I hate being a corporate whore.',
			resultText: '<<= setup.speak($player, "To be completely honest... I hate being a corporate whore. Seems like I´m just being used by everyone.")>>' + 
			'<<= setup.eventText("He looks a little worried.")>>' + 
			'<<= setup.speak($npc.adults[3], "Yeah... I know what you mean. All I do is mindlessly tap away like some monkey in a cage.' +
			'With a manager breathing over my shoulder. Only time I get to relax is doing stuff like this.", "smile")>>' + 
			'<<= setup.speak($player, "Well, let´s make sure you enjoy your time then.", "smile")>>' + 
			'<<= setup.speak($npc.adults[3], "Hell yeah.", "smile")>>' + 
			'<<= setup.eventText("You both chuckle as your coffee arrives and you take the conversation further.")>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 10)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Girlfriend", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let girlCoffeeDate2 = {
		name: 'Coffee Date (mindbroken)',
		passageText: '<<= setup.eventText("You stumble towards the noted location within the entertainment center. A small coffeeshop with a stylich porch containing five-six dual tables. ' + 
		'You almost crash into the coffeeshop and are almost immediately confronted by a slightly nervous, but forthcoming guy.")>>' + 
		'<<= setup.speak($npc.adults[3], "Uuuh, hi there! Are you $player.femaleName?")>>' + 
		'<<= setup.speak($player, "Uuuuuh? YAH!", "pleasure")>>' + 
		'<<= setup.eventText("You get a table out on the porch and order some coffee. An awkward silece almost immediately takes hole, filling you with unease. You´re supposed to make sure he has a good time, after all.")>>' + 
		'<<= setup.speak($player, "*drools*")>>' + 
		'<<= setup.speak($npc.adults[3], "So... uuuh... Hows it like being an Event Girl? Does a good-looking lass like you get a lot of attention?... Also you´re drooling...", "smile")>>' + 
		'<<= setup.eventText("You barely even register that he´s talking to you.")>>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 4}],
		options: [
		{
			buttonText: 'cockies? suck?',
			resultText: '<<= setup.speak($player, "You..... uuuuuuh *drools* wan sucky wucky cockies?", "pleasure")>>' + 
			'<<= setup.eventText("A frown forms on his face as he realizes you´re completely gone. He keeps himself under control though.")>>' + 
			'<<= setup.speak($npc.adults[3], "Seriously... All I wanted was someone to talk to and they send me this... Fine. Whatever. I´m gonna get what I paird for.")>>' + 
			'<<= setup.speak($player, "Uuuuh? Dat mean yes?", "pleasure")>>' + 
			'<<= setup.eventText("He grabs you and drags you towards the restroom.")>>' + 
			'<<run setup.rating($player, 1)>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "blowjob", $sex.gE = $player, $sex.rE = $npc.adults[3], ' + 
			'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Girlfriend", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		}]
	}
	let girlSlutCheck = {
		name: 'Coffee Date (Slut Check)',
		passageText: '<<= setup.eventText("You reach the noted location within the entertainment center. A small coffeeshop with a stylish porch containing five-six dual tables. ' + 
		'You enter the coffeeshop and are almost immediately confronted by a slightly nervous, but forthcoming guy. Flicking your hair, your eyes meet as you lick your lips.")>>' + 
		'<<= setup.speak($npc.cool[0], "Uuuh, hi there! Are you $player.femaleName?")>>' + 
		'<<= setup.speak($player, "That´s me alright, you hornyboi... Let´s get things rocking. I gotta slurp down something alright?", "smile")>>' + 
		'<<= setup.eventText("You turn and strut towards the entrance, luring him along. You get a table out on the porch and order some coffee. Your eyes meet again, and you give him a wink, making him blush.")>>' + 
		'<<= setup.speak($player, "What do you say eh? We drink this coffee, and then give it a tumble in there?")>>' + 
		'<<= setup.eventText("You nod your head towards the restroom.")>>' + 
		'<<= setup.speak($npc.cool[0], "Uuuh, actually I was thinking... I just wanted to talk. Maybe get to know each other better?", "smile")>>' + 
		'<<= setup.eventText("You grimace and sigh.")>>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Alright then, hotshot.',
			resultText: '<<= setup.speak($player, "Alright then, hotshot. What do you want to talk about?", "smile")>>' + 
			'<<= setup.eventText("A smile forms on his face.")>>' + 
			'<<= setup.speak($npc.cool[0], "Uhm, well... so how are things going with you? Do you enjoy being an Event Girl?", "smile")>>' + 
			'<<= setup.speak($player, "It´s simple enough alright, gotta suck a few cocks here and there. But I get by. Why do you care though?")>>' + 
			'<<= setup.eventText("His eyes widen and his face turns slightly white.")>>' + 
			'<<= setup.speak($npc.cool[0], "Oh... uh... do you like it? That sort of-")>>' + 
			'<<= setup.speak($player, "Sucking cocks? Eh-... it´s fine I guess.")>>' + 
			'<<= setup.speak($npc.cool[0], "I see...")>>' + 
			'<<= setup.speak($player, "Want me to suck yours?")>>' + 
			'<<= setup.eventText("A sigh escapes him, as he gets up.")>>' + 
			'<<= setup.speak($npc.cool[0], "Sure... Whatever... I´m not sure what I expected.")>>' + 
			'<<= setup.speak($player, "Alrighty then.")>>' + 
			'<<= setup.eventText("You follow him towards the restrooms.")>>' + 
			'<<run setup.rating($player, 2)>>' + 
			'<<run setup.psyche($player, "Lust", 50, 25)>>' + 
			'<<run setup.psyche($player, "Slut", 1, 1, 2)>>' + 
			'<<run setup.bonus($player, 150, "Blowjob")>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "blowjob", $sex.gE = $player, $sex.rE = $npc.cool[0], $sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Girlfriend", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Boring.',
			resultText: '<<= setup.speak($player, "Pffft... BORING!")>>' + 
			'<<= setup.eventText("He looks a little worried.")>>' + 
			'<<= setup.speak($npc.cool[0], "Oh... uuuh. I see. What do you want then?", "smile")>>' + 
			'<<= setup.speak($player, "Come on... All this is unnecessary. Just let me suck your cock and let´s get this over with.", "smile")>>' + 
			'<<= setup.speak($npc.cool[0], "I uuuh... Think I need to go.", "smile")>>' + 
			'<<= setup.eventText("He gets up and practically dash for the exit, leaving you there to your thoughts.")>>' + 
			'<<run setup.rating($player, -5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let girlBimboCheck = {
		name: 'Coffee Date (Bimbo Check)',
		passageText: '<<= setup.eventText("You reach the noted location within the entertainment center. A small coffeeshop with a stylish porch containing five-six dual tables. ' + 
		'You enter the coffeeshop and are almost immediately confronted by a slightly nervous, but forthcoming guy. Staring into the nothingness, only shifting your weight every now and then. The guy tries to catch your attention.")>>' + 
		'<<= setup.speak($npc.cool[0], "Uuuh... Are you there? Are you $player.femaleName?")>>' + 
		'<<= setup.speak($player, "Uuuuhm... So-like... yeah, that´s like, totally me! You like the guy I´m supposed to fuck or what?", "smile")>>' + 
		'<<= setup.speak($npc.cool[0], "No-no, it´s just a date.")>>' + 
		'<<= setup.speak($player, "Okay-like, show the way then!", "smile")>>' + 
		'<<= setup.eventText("You get a table out on the porch and order some coffee. You stare off into the nothingness once again")>>' + 
		'<<= setup.speak($$npc.cool[0], "Blah-blah-blah... something about worklife... blablah!")>>' + 
		'<<= setup.eventText("You nod your head as he unloads an entourage of things you don´t really understand.")>>' + 
		'<<= setup.speak($npc.cool[0], "Blah!", "smile")>>' + 
		'<<= setup.eventText("You tilt your head a little.")>>',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Nod like a good girl.',
			resultText: '<<= setup.eventText("You nod once more and his lips spread out in a wide smile. A small tear falling from his cheek.")>>' + 
			'<<= setup.speak($npc.cool[0], "It makes me so happy to finally talk to someone that gets me!", "smile")>>' + 
			'<<= setup.speak($player, "Uuuh... okay?")>>' + 
			'<<= setup.eventText("Another barrage of stuff escapes him, as you sit there thinking about his size. Maybe he´s got juicy balls or just a long schlong that would fit nicely down your throat? You stool dampens a little as your moist juices seep through. A moan escapes you.")>>' + 
			'<<= setup.speak($npc.cool[0], "-Yeah, and that was like, so bad on my part!", "smile")>>' + 
			'<<= setup.speak($player, "Mmmh... cocks...", "pleasure")>>' + 
			'<<= setup.speak($npc.cool[0], "Yeah. I could definitely do with some chicken as well, we should order that as well!", "smile")>>' + 
			'<<= setup.speak($player, "Yes...")>>' + 
			'<<= setup.eventText("The evening goes by rather pleasantly, as you enjoy a small snack together.")>>' + 
			'<<run setup.rating($player, 20)>>' + 
			'<<run setup.psyche($player, "Lust", 50, 25)>>' + 
			'<<run setup.psyche($player, "Bimbo", 1, 1, 2)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let girlSkimpyCheck = {
		name: 'Coffee Date (skimpy clothes)',
		passageText: '<<= setup.eventText("You reach the noted location within the entertainment center. A small coffeeshop with a stylish porch containing five-six dual tables. The patrons sitting eye you up and down. You only catch a bit of the whispers going around, as they gossip about your skimpy clothes. You enter the coffeeshop and are almost immediately confronted by a gasp coming from someone on your side.")>>' + 
		'<<= setup.speak($npc.cool[0], "Oh god-! err-... You look... lovely!", "surprised")>>' + 
		'<<= setup.speak($player, "Thanks! So, where do we sit?", "smile")>>' + 
		'<<= setup.eventText("You get a table out on the porch and order some coffee. An awkward silece almost immediately takes hole, filling you with unease. You´re supposed to make sure he has a good time, after all.")>>' + 
		'<<= setup.speak($player, "So-")>>' + 
		'<<= setup.speak($npc.cool[0], "Hows it like being an Event Girl? Does a good-looking lass like you get a lot of attention?", "smile")>>' + 
		'<<= setup.eventText("You struggle to think up a response.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'It\´s great.',
			resultText: '<<= setup.speak($player, "It\´s great. I get paid to provide great and fullfilling services for everyone.", "smile")>>' + 
			'<<= setup.eventText("A smile forms on his face.")>>' + 
			'<<= setup.speak($npc.adults[3], "That\´s good to hear. Tell me more about it.", "smile")>>' + 
			'<<= setup.speak($player, "Well, I mean, aside from the occasional perverts, then I don\´t have a whole lot to complain about.")>>' + 
			'<<= setup.eventText("You both chuckle as your coffee arrives and you take the conversation further.")>>' + 
			'<<run setup.bonus($player, 250, "Social")>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Girlfriend", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'I hate being a corporate whore.',
			resultText: '<<= setup.speak($player, "To be completely honest... I hate being a corporate whore. Seems like I\´m just being used by everyone.")>>' + 
			'<<= setup.eventText("He looks a little worried.")>>' + 
			'<<= setup.speak($npc.adults[3], "Yeah... I know what you mean. All I do is mindlessly tap away like some monkey in a cage.' +
			'With a manager breathing over my shoulder. Only time I get to relax is doing stuff like this.", "smile")>>' + 
			'<<= setup.speak($player, "Well, let\´s make sure you enjoy your time then.", "smile")>>' + 
			'<<= setup.speak($npc.adults[3], "Hell yeah.", "smile")>>' + 
			'<<= setup.eventText("You both chuckle as your coffee arrives and you take the conversation further.")>>' + 
			'<<run setup.bonus($player, 250, "Social")>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Girlfriend", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}

	
	let sluttiaCosplayFuck = {
		name: 'Sluttia Cosplay Fuck (default)',
		passageText: '<<= setup.eventText("The line of drooling nerds with long lusty fingers that keep creeping beneath your loin cloth is... finally beginning to become shorter. The end now in sight, you steel yourself. ' + 
		'Almost exactly as a true Barbarina would, facing off against a tentacle hydra that just keeps on giving. Towards the end however, they seem to become increasing more daring. With some of them even requesting ' + 
		'that you take ´crotch grab´ shots with them, leg locking them or just straight up letting them manhandle your tits with the shot. You decline most, but let go on some of them.")>>' + 
		'<<= setup.speak($npc.adults[0], "S-sluttia!... m-mommy...!", "smile")>>' + 
		'<<= setup.speak($player, "Right, let´s get it moving. Come on.")>>' + 
		'<<= setup.speak($npc.adults[0], "Y-yes... hehe-... hehe", "smile")>>' + 
		'<<= setup.eventText("You feel his thin arms grab hold around your tummy as the flash blinds you. As you wringe him off you, you realize that one of the nerds seems to be intentionally waiting until he is last.")>>' + 
		'<<= setup.speak($player, "So... You´re last huh? Come closer and we´ll get your-")>>' + 
		'<<= setup.speak($npc.adults[3], "1000 and you suck my cock.", "smile")>>' + 
		'<<= setup.speak($player, "W-... WHAT?!", "angry")>>' + 
		'<<= setup.speak($npc.adults[3], "Come on miss Sluttia! It´s my dream! 1000! It´s all I have!")>>' + 
		'<<= setup.eventText("You consider his offer.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Alright...',
			resultText: '<<= setup.speak($player, "Alright...", "smile")>>' + 
			'<<= setup.eventText("His face stiffens and his limbs plant themselves rock solid unto the convention floor as he realizes you accepted.")>>' + 
			'<<= setup.speak($npc.adults[3], "Wh-... REALlY?!", "surprised")>>' + 
			'<<= setup.speak($player, "Yeah, come along then. We should be able to find a secluded corner. Up front though. You pay first.")>>' + 
			'<<= setup.eventText("You begin to walk towards a secluded location at the con, and he follows you vigorously.")>>' + 
			'<<= setup.speak($npc.adults[3], "Of course! OH BOY! It´s really happening!", "surprised")>>' + 
			'<<run setup.bonus($player, 100, "Social")>>' + 
			'<<run setup.bonus($player, 1000)>>' + '<br><span class="lbb"><<button "Continue">><<set $sex.current = "blowjob", $sex.gE = $player, $sex.rE = $npc.adults[3], ' + 
			'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Sluttia", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline.',
			resultText: '<<= setup.speak($player, "I don´t fucking care about your dreams. Do you want the pic or not?")>>' + 
			'<<= setup.eventText("He looks defeated for a while, but instantly lightens up again as he grabs hold of you and squeeze up against you for the photo.")>>' + 
			'<<= setup.speak($npc.adults[3], "Mhmmm... so soft.", "smile")>>' + 
			'<<= setup.speak($player, "Tsk...")>>' + 
			'<<= setup.eventText("You roll your eyes.")>>' + 
			'<<run setup.bonus($player, 100, "Social")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let sluttiaGangbang1 = {
		name: 'Sluttia Gangbang (mindbroken)',
		passageText: '<<= setup.eventText("Your mind is nothing, but pink clouds and floating cocks squirt rainbows. ' + 
		'Every now and then, you´re taken out of dreamland as you feel warm hands envelop and grasp various parts of your body. ' + 
		'Almost as if someone is putting you into position, then changing your posture for a little bit.")>>' + 
		'<<= setup.speak($npc.adults[5], "Is... Is she working?")>>' + 
		'<<= setup.speak($player, "*drools*", "pleasure")>>' + 
		'<<= setup.speak($npc.adults[5], "Eh whatever... I got what I wanted.", "smile")>>' + 
		'<<run setup.count("receivedGroping", setup.random(100))>><<run setup.incBod($player, "vagina", 4)>><<run setup.incBod($player, "asshole", 4)>><<run setup.incBod($player, "mouth", 1)>>' + 
		'<<= setup.eventText("You feel something pull out of you, and something new take its place. You don´t really care though.")>>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 4}],
		options: [
		{
			buttonText: 'Moan.',
			resultText: '<<= setup.speak($player, "Mmmmmmhhhhh...", "smile")>>' + 
			'<<= setup.eventText("A warmths spreads across your body as your mind is filled with more pink paradise.")>>' + 
			'<<= setup.speak($npc.adults[0], "God damn it, this is tight as fuck.", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "Hell yeah brother, AAAAH!", "pleasure")>>' + 
			'<<= setup.speak($npc.adults[2], "Is it my turn yet?", "smile")>>' + 
			'<<= setup.eventText("You try to moan again, but gag instead as something huge and veiny is forced down your throat. You close your eyes and return to your pink thoughts of happiness.")>>' + 
			'<<= setup.speak($npc.adults[4], "Fuck she´s taking it!", "surprised")>>' + 
			'<<= setup.speak($npc.adults[3], "Really going all the way there! Never in all of my years!", "surprised")>>' + 
			'<<= setup.speak($npc.adults[2], "AAAAH! TAKE IT YOU SLUTTY BARBARINA!!!!", "pleasure")>>' + 
			'<<run setup.bonus($player, 50, "Blowjob")>>' + 
			'<<run setup.bonus($player, 50, "New Sex")>>' + 
			'<<run setup.bonus($player, 50, "Anal")>>' + 
			'<<run setup.bodyNote($player, "vagina")>><<run setup.bodyNote($player, "asshole")>>' + 
			'<<run setup.count("receivedVaginal", setup.random(100))>><<run setup.count("givenBlowjobs", setup.random(100))>><<run setup.count("receivedAnal", setup.random(100))>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let sluttiaGangbang2 = {
		name: 'Sluttia Gangbang (bimbo)',
		passageText: '<<= setup.eventText("Your mind is nothing, but pink clouds and floating cocks squirt rainbows. ' + 
		'Every now and then, you´re taken out of dreamland as you feel warm hands envelop and grasp various parts of your body. ' + 
		'Almost as if someone is putting you into position, then changing your posture for a little bit.")>>' + 
		'<<= setup.speak($npc.adults[1], "Oh god, she is sucking me dry!", "pleasure")>>' + 
		'<<= setup.speak($player, "Mmmmh boys, come on, I can handle you all!", "pleasure")>>' + 
		'<<= setup.speak($npc.adults[0], "Please! Show mercy!", "surprised")>>' + 
		'<<run setup.count("receivedGroping", setup.random(100))>><<run setup.incBod($player, "vagina", 4)>><<run setup.incBod($player, "asshole", 4)>><<run setup.incBod($player, "mouth", 1)>>' + 
		'<<= setup.eventText("You feel something pull out of you, and something new take its place. You giggle and rock your hips.")>>',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Moan.',
			resultText: '<<= setup.speak($player, "Give it to me! Give me all the cockies!", "smile")>>' + 
			'<<= setup.eventText("A warmths spreads across your body as your mind is filled with more pink paradise.")>>' + 
			'<<= setup.speak($npc.adults[1], "God damn... She got loose, but it still feel so good!", "smile")>>' + 
			'<<= setup.speak($npc.executives[0], "Hell yeah brother, AAAAH!", "pleasure")>>' + 
			'<<= setup.speak($npc.adults[4], "Is it my turn yet?", "smile")>>' + 
			'<<= setup.eventText("You try to moan again, but gag instead as something huge and veiny is forced down your throat. You close your eyes and return to your pink thoughts of happiness.")>>' + 
			'<<= setup.speak($npc.adults[3], "Fuck she´s taking it!", "surprised")>>' + 
			'<<= setup.speak($npc.elderly[0], "Sweet mother marie! Save my soul!", "surprised")>>' + 
			'<<= setup.speak($npc.adults[1], "AAAAH! TAKE IT YOU SLUTTY BARBARINA!!!!", "pleasure")>>' + 
			'<<run setup.bonus($player, 50, "Blowjob")>><<run setup.experience($player, "Blowjob", 50, 50)>>' + 
			'<<run setup.bonus($player, 50, "New Sex")>><<run setup.experience($player, "New Sex", 50, 50)>>' + 
			'<<run setup.bonus($player, 50, "Anal")>><<run setup.experience($player, "Anal", 50, 50)>>' + 
			'<<run setup.bodyNote($player, "vagina")>><<run setup.bodyNote($player, "asshole")>>' + 
			'<<run setup.count("receivedVaginal", setup.random(100))>><<run setup.count("givenBlowjobs", setup.random(100))>><<run setup.count("receivedAnal", setup.random(100))>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let sluttiaGreatjob = {
		name: 'Sluttia Greatjob (Standard)',
		passageText: '<<= setup.eventText("Flicking your hair and flexing your non-existent muscle, you let out a roar that echoes through the convention center. ' + 
		'A blitz one after the other, with a new Sluttia fan everytime reaffirms your barbarian glory.")>>' + 
		'<<= setup.speak($player, "Rarrrrr rooooo!", "angry")>>' + 
		'<<= setup.speak($npc.clients[0], "Oh-haha, Sluttia! Me next!", "surprised")>>' + 
		'<<= setup.eventText("With the line of nerds growing, all of them willingly dropping units for the famed Sluttia. You see no ending to your spoils of war anytime soon.")>>' + 
		'<<= setup.speak($player, "Haha! You next, peasant!", "angry")>>' + 
		'<<= setup.speak($npc.clients[1], "A-ha-ha! Sluttia take me!", "pleasure")>>' + 
		'<<= setup.speak($npc.clients[2], "P-please crush me with your thick thighs!", "pleasure")>>' + 
		'<<= setup.eventText("Taking out and clutching your fist, you point it towards the sky.")>>',
		requirements: [{id: 'Feminine', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.eventText("As the day comes to a close, you return to your manager, who eagerly awaits you rubbing his hands whilst smiling nefariously. ")>>' + 
			'<<= setup.speak($npc.executives[0], "What a great show! Even I believed it myself for a moment there!", "smile")>>' + 
			'<<= setup.speak($player, "So, my Spoils of War?", "smile")>>' + 
			'<<= setup.speak($npc.executives[0], "Ah, yes, your bonus miss Sluttia, as promised.")>>' + 
			'<<= setup.eventText("He flicks his wrist and a soft ding confirms your expectations. ")>>' + 
			'<<run setup.rating($player, 20)>><<run setup.bonus($player, 500, "Social")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let sluttiaBimboCheck = {
		name: 'Sluttia Bimbo Check (Standard)',
		passageText: '<<= setup.eventText("Arching your back and throwing your hair back. You pucker your lips and squeeze your tits at the long line of drooling nerds. ' + 
		'They stand frozen, their eyes glued to your figure and movements.")>>' + 
		'<<= setup.speak($player, "Mmmmh, Sluttia is ready to take aaall~ the pics with you hunks~", "pleasure")>>' + 
		'<<= setup.speak($npc.clients[0], "Ye-yes Sluttia, can I go first?", "surprised")>>' + 
		'<<= setup.speak($player, "Of course you stud~", "smile")>>' + 
		'<<= setup.eventText("You grab hold of him and drag him into you. His head  burrowing into your cleavage and his arms hugging you. The flash captures you smothering the guy, only for you to yoink him away.")>>',
		requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.eventText("After some time, your costume is completely disheveled. The air caresses your tits that have dug themselves free and juices run down along your loins. ' + 
			'A sigh escape you as another guy is feeling brave. His hands clutch your asscheeks, only to travel further towards your wet cunt.")>>' + 
			'<<= setup.speak($player, "Oh~ don’t go exploring now, teehee~", "smile")>>' + 
			'<<= setup.speak($npc.clients[0], "Please, Sluttia!", "smile")>>' + 
			'<<= setup.eventText("His one finger travels slowly inside your pussy, wiggling around exploring wildly. The flash captures your eyes rolling back and your tongue hanging free.")>>' + 
			'<<= setup.speak($player, "Uuuuh… N-next!", "smile")>>' + 
			'<<= setup.eventText("You grab his shirt and plant your feet, only to toss him away. ' + 
			'By the time that you’re done, most of your armor is just hanging on your body, only one strap away from falling off completely.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Bimbo", 2, 3)>>' + 
			'<<run setup.rating($player, 20)>><<run setup.bonus($player, 500, "Social")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let sluttiaMindCheck = {
		name: 'Sluttia Mind Check (Standard)',
		passageText: '<<= setup.eventText("Tightening the straps around your costume, you give yourself one last reassuring look in the mirror. ' + 
		'Your hand only manages to slide over the door pad before a thick fog surrounds you and a pounding pain envelops your head.")>>' + 
		'<<= setup.speak($player, "Ugh…")>>' + 
		'<<= setup.eventText("Opening your eyes, a bright white flash blitzes you. A warm grip takes your hip, only to slide down along your asscheek. ' + 
		'Another bright blitz, followed by something wet landing on your right tit.")>>' + 
		'<<= setup.speak($characters.secret, "She seems- Slut- -ere?")>>' + 
		'<<= setup.speak($characters.secret, "I- kay. -re -ou?")>>' + 
		'<<= setup.speak($characters.secret, "Wa-...*drools*")>>' + 
		'<<= setup.eventText("Another hand takes hold of your wrist and you stumble somewhere.")>>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 4}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.eventText("You open your eyes, lying on soft pillows staring straight up into dim lights.")>>' + 
			'<<= setup.speak($player, "W-where am I?")>>' + 
			'<<= setup.speak($npc.executives[0], "Oh… you´re awake?")>>' + 
			'<<= setup.eventText("You sit up, looking at your manager sitting by a desk, tapping away at the table on his keyboard.")>>' + 
			'<<= setup.speak($player, "What h-happened?")>>' + 
			'<<= setup.speak($npc.executives[0], "I had to pull you out of there… those guys, they we´re getting… rowdy. To put it lightly.")>>' + 
			'<<= setup.speak($player, "Thanks I guess?")>>' + 
			'<<= setup.speak($npc.executives[0], "No problem… Your rating will be taking a hit though... them be the rules. Sorry...")>>' + 
			'<<= setup.speak($player, "I can live with that.")>>' + 
			'<<= setup.eventText("Getting up you thank him a last time before heading towards the changing rooms.")>>' + 
			'<<run setup.rating($player, -10)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let sluttiaOrcSlut = {
		name: 'Sluttia Orc Slut (Standard)',
		passageText: '<<include "Sluttia Incident - Orc Slut">>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 4}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Sluttia Incident - Orc Slut (Continued)">>',
			requirements: []
		}]
	}
	
	let stripperShowfloor = {
		name: 'Showfloor (Schoolgirl)',
		passageText: '<<= setup.eventText("You stand by the entrance to the main stripper stage waiting in your naughty school girl outfit. The tight top presses your tits up in an obscene cleavage and your skirt is so short you probably couldn´t bend over without flashing your g-string.")>>' + 
		'<<= setup.eventText("@@.announcervoice;Alright folks, give a hand to Stardust! What a lovely lass with quite an ass! Stay tuned, for soon we will get to boom-boom with no one else than eVentia´s newest girl on the block!@@")>>' + 
		'<<= setup.eventText("The other girl walks past you, completely naked with her tits strutting on full display like it was nothing. The excitement creeps all the way from your stomach to your throat as your heart beats with adrenaline.")>>' + 
		'<<= setup.eventText("This is it, you´re actually going to go on a stage and strip for a small horde of horny men. You never imagined that the pressure from being a stripper was this intense. You would usually be amongst the crowd, not on the stage after all!")>>' + 
		'<<= setup.eventText("A few minutes pass, with yourself standing a little lost by the entrance, until the announcer can be heard again.")>>' + 
		'<<= setup.eventText("@@.announcervoice;And here we are! Their first time on the stage! You heard it! Fresh meat is on the menu boys! Give it up for $player.stripperName!@@")>>' + 
		'<<= setup.eventText("You take a deep breath and walk out unto the stage.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("As you strut out on the stage the lights blind you and your ears deafened by the welcoming lustfilled applause. You strut towards the stripper-pole at the middle of the stage and circle it.")>>' + 
			'<<= setup.eventText("You wonder what to do as your first move.")>>' + 
			'<<= setup.stripEvent($player)>>',
			requirements: []
		}]
	}
	let stripperPrivateDance = {
		name: 'Private Dance',
		passageText: '<<= setup.eventText("As you walk around the show floor you´re eventually approached by a slightly drunk patron.")>>' + 
		'<<= setup.speak($npc.adults[0], "Hey girl, how much for a private dance eh? I´m loving that tight ass of yours!", "smile")>>' + 
		'<<= setup.eventText("Looking him up and down with a frisky smile you move closer letting him rest his hand on your hip. You respond with your best pornstar expression.")>>' + 
		'<<= setup.speak($player, "1000 units for one sexy private dance.", "smile")>>' + 
		'<<= setup.eventText("You catch him staring at your rack, he looks up and smiles.")>>' + 
		'<<= setup.speak($npc.adults[0], "Hell yeah baby let´s go!", "smile")>>' + 
		'<<= setup.eventText("Leading him towards the private cabins you find a vacant one. He´s wearing grey sweatpants, his erection already poking visibly as he takes his seat.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Quick and Dirty',
			resultText: '<<= setup.eventText("As you grind on his crotch you also move forward and sodomize his face with your bosom, effectivly grinding your whole body against his.")>>' + 
			'<<= setup.speak($npc.adults[0], "You know how to get me hard babe.", "smile")>>' + 
			'<<= setup.eventText("He grabs your ass through the skirt, massaging it tenderly followed by a loud slap. Yelping you moan wantonly as you get off him.")>>' + 
			'<<= setup.eventText("You slip your fingers under your g-string and play a little with yourself. Then you strut back, giving your ass that sexy flick.")>>' + 
			'<<= setup.eventText("Putting two fingers underneath the string you let them drop to the floor. Before turning around you put the palm of your hand over your lotus stamen. You look over your shoulder and send him a light playful wink before turning around.")>>' + 
			'<<= setup.eventText("Spreading your legs in a standing position you pull your hand up along your tummy and reveal your pussy to him.")>>' + 
			'<<= setup.speak($npc.adults[0], "Oh my god! That´s a kitty alright!", "surprised")>>' + 
			'<<= setup.eventText("You mount him completely, resting your naked pussy on his cock, the only thing between the two the thin fabric of his manhood. He grabs your tits and squeezes them, making you moan like a whore in heat.")>>' + 
			'<<= setup.eventText("You lightly grind his cock, feeling it twitch with excitement. The juices from your wet pussy soaking his pants leaving visible marks of your lust.")>>' + 
			'<<= setup.speak($npc.adults[0], "Ahhhh! Fuck! You´re getting me there babe!", "surprised")>>' + 
			'<<= setup.eventText("You increase the intensity and he shifts his attention to your ass, grabbing it as you ride him. Within seconds you feel his cock bump a few times and the pants get wet with jizz.")>>' + 
			'<<= setup.speak($npc.adults[0], "Ooooh! That´s it!", "pleasure")>>' + 
			'<<= setup.eventText("He let´s go and you stand up, looking at his obviously creamed pants, admiring your handywork.")>>' + 
			'<<= setup.eventText("Grabbing your clothes you leave him to figure that one out for himself.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<<run setup.experience($player, "Dancing", 5, 15)>>' + 
			'<<run setup.rating($player, 10)>><<run setup.bonus($player, 500, "Dancing")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Stripper", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let stripperChampagne = {
		name: 'Champagne',
		passageText: '<<include "Stripper Incident - Champagne">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Give them a show.',
			resultText: '<<include "Stripper Incident - Champagne (Give them a show)">>',
			requirements: [{id: 'Bimbo', type: 'psyche-min', level: 2}]
		},
		{
			buttonText: 'Service for units.',
			resultText: '<<include "Stripper Incident - Champagne (Service for units)">>',
			requirements: []
		},
		{
			buttonText: 'Slap him.',
			resultText: '<<include "Stripper Incident - Champagne (Slap him)">>',
			requirements: [{id: 'Slut', type: 'psyche-max', level: 3}]
		},
		{
			buttonText: 'Sit on lap.',
			resultText: '<<include "Stripper Incident - Champagne (Sit on lap)">>',
			requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		}]
	}
	let stripperBlowjob = {
		name: 'Blowjob Offer (One Guy)',
		passageText: '<<= setup.eventText("Strutting around on the show floor, a fairly drunk client walks up to you.")>>' + 
		'<<= setup.speak($npc.elderly[0], "Hey there cutie...Hic! How much for you to suck on my lollypop?", "smile")>>' + 
		'<<= setup.speak($player, "Uuuuh, what?")>>' + 
		'<<= setup.eventText("He makes a sucking motion with his hand and tongue putting pressure on his cheek.")>>' + 
		'<<= setup.speak($npc.elderly[0], "You, giving me the dirty with those lips of yours...Hic!", "smile")>>' + 
		'<<= setup.eventText("You think about the offer.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Accept the offer',
			resultText: '<<= setup.eventText("Moaning lightly as your panties moisten, you give a lush sigh...")>>' + 
			'<<= setup.speak($player, "Alright, I suppose we could figure something out, come along then.")>>' + 
			'<<= setup.eventText("You lead the client towards a private booth, pushing open the door, dragging him in.")>>' + 
			'<<= setup.speak($player, "Drop your pants... Let me see what you got.")>>' + 
			'<<= setup.speak($npc.elderly[0], "Right!")>>' + 
			'<<= setup.eventText("He clumsily pulls down his pants, his cock flopping around as he gets comfortable.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 5, 5)>>' + 
			'<<run setup.rating($player, 20)>><<run setup.bonus($player, 550, "Blowjob")>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "blowjob", $sex.gE = $player, $sex.rE = $npc.elderly[0], ' + 
			'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Stripper", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline the offer',
			resultText: '<<= setup.eventText("Maintaining your composure, you shake your head..")>>' + 
			'<<= setup.speak($player, "Yeah that´s definitely not going to happen...")>>' + 
			'<<= setup.speak($npc.elderly[0], "Oh... Really?...Hic!")>>' + 
			'<<= setup.speak($player, "Yep...")>>' + 
			'<<= setup.speak($npc.elderly[0], "Whatever... Whore!... Hic!", "angry")>>' + 
			'<<= setup.eventText("The drunkard moves along seemingly losing interest in you.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Stripper", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let stripperSex = {
		name: 'Sex Offer (One Guy)',
		passageText: '<<= setup.eventText("Strutting around on the show floor, a fairly drunk client walks up to you.")>>' + 
		'<<= setup.speak($npc.elderly[0], "Hey! *hic*... What´s the pricetag on that honeypot?", "smile")>>' + 
		'<<= setup.speak($player, "Uuuuh, what?")>>' + 
		'<<= setup.eventText("He makes an elaborate rocking motion with his hand and hips.")>>' + 
		'<<= setup.speak($npc.elderly[0], "You, me, doing the dirty you know... *hic* fucking and all that.", "smile")>>' + 
		'<<= setup.eventText("You think about the offer.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Accept the offer',
			resultText: '<<= setup.eventText("Moaning lightly as your panties moisten, you give a lush sigh...")>>' + 
			'<<= setup.speak($player, "Alright, I suppose we could figure something out, come along then.")>>' + 
			'<<= setup.eventText("You lead the client towards a private booth, pushing open the door, dragging him in.")>>' + 
			'<<= setup.speak($player, "Drop your pants... Let me see what you got.")>>' + 
			'<<= setup.speak($npc.elderly[0], "Right!")>>' + 
			'<<= setup.eventText("He clumsily pulls down his pants, his cock flopping around as he gets comfortable.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 10, 15)>>' + 
			'<<run setup.rating($player, 25)>><<run setup.bonus($player, 750, "New Sex")>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "sex", $sex.gE = $npc.elderly[0], $sex.rE = $player, ' + 
			'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Stripper", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline the offer',
			resultText: '<<= setup.eventText("Maintaining your composure, you shake your head..")>>' + 
			'<<= setup.speak($player, "Yeah that´s definitely not going to happen...")>>' + 
			'<<= setup.speak($npc.elderly[0], "Oh... Really?...Hic!")>>' + 
			'<<= setup.speak($player, "Yep...")>>' + 
			'<<= setup.speak($npc.elderly[0], "Whatever... Whore!... Hic!", "angry")>>' + 
			'<<= setup.eventText("The drunkard moves along seemingly losing interest in you.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Stripper", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let stripperAnal = {
		name: 'Anal Offer (One Guy)',
		passageText: '<<= setup.eventText("Strutting around on the show floor, a fairly drunk client walks up to you.")>>' + 
		'<<= setup.speak($npc.elderly[0], "Hey! *hic*... What´s the pricetag on that ass?", "smile")>>' + 
		'<<= setup.speak($player, "Uuuuh, what?")>>' + 
		'<<= setup.eventText("He makes an elaborate rocking motion with his hand and hips.")>>' + 
		'<<= setup.speak($npc.elderly[0], "Me... *hic* shoving my fat cock up yer´ asshole you know.", "smile")>>' + 
		'<<= setup.eventText("You think about the offer.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Accept the offer',
			resultText: '<<= setup.eventText("Moaning lightly as your panties moisten, you give a lush sigh...")>>' + 
			'<<= setup.speak($player, "Alright, I suppose we could figure something out, come along then.")>>' + 
			'<<= setup.eventText("You lead the client towards a private booth, pushing open the door, dragging him in.")>>' + 
			'<<= setup.speak($player, "Drop your pants... Let me see what you got.")>>' + 
			'<<= setup.speak($npc.elderly[0], "Right!")>>' + 
			'<<= setup.eventText("He clumsily pulls down his pants, his cock flopping around as he gets comfortable.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 10, 15)>>' + 
			'<<run setup.rating($player, 30)>><<run setup.bonus($player, 950, "Anal")>>' + 
			'<br><span class="lbb"><<button "Continue">><<set $sex.current = "anal", $sex.gE = $npc.elderly[0], $sex.rE = $player, ' + 
			'$sex.modifier = "sensual", $sex.stage = "intro", $sex.passage = "Event - Finish", $event.current = "Stripper", $event.return = "Pod - Main">><<goto "New Sex">><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline the offer',
			resultText: '<<= setup.eventText("Maintaining your composure, you shake your head..")>>' + 
			'<<= setup.speak($player, "Yeah that´s definitely not going to happen...")>>' + 
			'<<= setup.speak($npc.elderly[0], "Oh... Really?...Hic!")>>' + 
			'<<= setup.speak($player, "Yep...")>>' + 
			'<<= setup.speak($npc.elderly[0], "Whatever... Whore!... Hic!", "angry")>>' + 
			'<<= setup.eventText("The drunkard moves along seemingly losing interest in you.")>>' + 
			'<<run setup.psyche($player, "Lust", 25, 25)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Stripper", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let stripperToplessBig = {
		name: 'Stripper Incident - Topless Serving (Big boobs)',
		passageText: '<<include "Stripper Incident - Topless Serving (Big boobs)">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'tits-size', type: 'score-min', level: 3}],
		options: [
		{
			buttonText: 'Accept the offer.',
			resultText: '<<include "Stripper Incident - Topless Serving (Accept)">>',
			requirements: []
		},
		{
			buttonText: 'Slap him.',
			resultText: '<<include "Stripper Incident - Topless Serving (Slap)">>',
			requirements: [{id: 'Slut', type: 'psyche-max', level: 3}]
		},
		{
			buttonText: 'Ignore them.',
			resultText: '<<include "Stripper Incident - Topless Serving (Ignore)">>',
			requirements: []
		}]
	}
	let stripperToplessSmall = {
		name: 'Stripper Incident - Topless Serving (Small boobs)',
		passageText: '<<include "Stripper Incident - Topless Serving (Small boobs)">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'tits-size', type: 'score-max', level: 2}],
		options: [
		{
			buttonText: 'Slap him.',
			resultText: '<<include "Stripper Incident - Topless Serving (Slap)">>',
			requirements: []
		},
		{
			buttonText: 'Ignore them.',
			resultText: '<<include "Stripper Incident - Topless Serving (Ignore)">>',
			requirements: []
		}]
	}
	let stripperGreatJob = {
		name: 'Stripper Incident - Great Job',
		passageText: '<<include "Stripper Incident - Great Job">>',
		requirements: [{id: 'Dancing', type: 'skill-min', level: 2},{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Stripper Incident - Great Job (Continued)">>',
			requirements: []
		}]
	}
	let stripperMindCheck = {
		name: 'Stripper Incident - Mind Check',
		passageText: '<<include "Stripper Incident - Mind Check">>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Stripper Incident - Mind Check (Continued)">>',
			requirements: []
		}]
	}
	let stripperStealthHandjob = {
		name: 'Stripper Incident - Stealth Handjob',
		passageText: '<<include "Stripper Incident - Stealth Handjob">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Accept the offer.',
			resultText: '<<include "Stripper Incident - Stealth Handjob (Accept)">>',
			requirements: []
		},
		{
			buttonText: 'Blow him instead.',
			resultText: '<<include "Stripper Incident - Stealth Handjob (Blowjob)">>',
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3},{id: 'Blowjob', type: 'skill-min', level: 2}]
		},
		{
			buttonText: 'Insult him.',
			resultText: '<<include "Stripper Incident - Stealth Handjob (Insult)">>',
			requirements: [{id: 'Slut', type: 'psyche-max', level: 3}]
		},
		{
			buttonText: 'Decline the offer.',
			resultText: '<<include "Stripper Incident - Stealth Handjob (Decline)">>',
			requirements: []
		}]
	}

	let gangbangStandard = {
		name: 'Gangbang (Standard)',
		passageText: '<<= setup.eventText("Entering the hall, the smell of tobacco fills your nostrils, the lounge is decorated with golden-inlaid sofas and chairs. A pool table in the middle and a roulette ' + 
		' table in the corner. Not far from the pool table you see a mat, with designated lettering written in sharpie ´The Cum-Zone´. A sigh escapes you.")>>' + 
		'<<= setup.speak($npc.executives[3], "Welcome, miss~.", "smile")>>' + 
		'<<= setup.eventText("A cheer echoes through the lounge, and not long after, several hands press on your curves and ass. A rough hand massages your tits as you stumble towards the mat.")>>' + 
		'<<= setup.speak($player, "F-fuck... Take it easy you guys.")>>' + 
		'<<= setup.speak($npc.executives[0], "Damn dude, they gave you a real fuckmachine body!", "smile")>>' + 
		'<<= setup.speak($npc.executives[1], "How does it feel being a whore? Miss your cock? I got one right here for ya!", "smile")>>' + 
		'<<= setup.speak($npc.executives[2], "Oh god, can´t wait to share this with the lads!", "smile")>>' + 
		'<<= setup.eventText("A chill touches your cunt and ass as your hotpants are dragged down. You almost immediately feel someone shoving their finger up your pussy, exploring you.")>>' + 
		'<<= setup.speak($player, "Oh g-god... come on, take it slow.")>>' + 
		'<<= setup.eventText("Soft moaning escapes you as they circle around, like predators fighting over their latest prey, all of them ready to dig in.")>>' + 
		'<<= setup.speak($npc.executives[0], "Come on, let´s get it going, I need my cock sucked!", "smile")>>' + 
		'<<= setup.eventText("Your knees buckle as a pair of hands apply pressure on your shoulders, making you fall to your knees. The musky scent of cock and pre-cum glaze your nose as a meaty surprise' + 
		' is dragged across your face. With only a little hesitation, you open your mouth, inviting it inside. The salty taste of pre-cum touch your tongue as the first cock slides in, making you gag a little.")>>' + 
		'<<= setup.speak($player, "Mmmmmmh.", "pleasure")>>' + 
		'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
		'<<run setup.count("receivedGroping", setup.random(100))>><<run setup.incBod($player, "vagina", 4)>><<run setup.incBod($player, "asshole", 4)>><<run setup.incBod($player, "mouth", 1)>>' + 
		'<<= setup.speak($npc.executives[4], "That´s it, go on.")>>',
		requirements: [],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("You stroke both cocks in front of you whilst moaning. Trying your best to cope with the relentles pounding filling you out with raw meat.")>>' + 
			'<<= setup.speak($npc.executives[0], "Aaaah shit dude, you´re a fucking natural. Made for this. Take it!", "pleasure")>>' + 
			'<<= setup.speak($npc.executives[1], "Fuck, shit! I-I´m g-gonna-... I´m gonna cummm!!!", "pleasure")>>' + 
			'<<= setup.eventText("The meat in your right hand pulses as soft strings of man-juice cover your face. The constant hollowing and filling of your cunt making you quiver, a warming heat spreads ' + 
			'through your womb again as the pleasure takes hold. You let out another broken moan as your toes curl.")>>' + 
			'<<= setup.speak($player, "Ahhhh! Fuck!", "pleasure")>>' + 
			'<<= setup.eventText("Your grip in your right hand loosens as the veiny stick retreats. A hand pushes you forward, putting you back on all fours, replacing the fullness in your cunt with emptiness.")>>' + 
			'<<= setup.speak($npc.executives[2], "Alright, I´ll take the mouth, you can take the cunt.", "smile")>>' + 
			'<<= setup.speak($npc.executives[4], "Whatever man.")>>' + 
			'<<= setup.eventText("You let out your tongue, tasting the pre-cum greasing your tongue. A hand grabs the back of your head, making you gag as his veiny schlong hits the back of your throat.")>>' + 
			'<<= setup.speak($player, "*gag*...*cough*", "pleasure")>>' + 
			'<<= setup.eventText("The emptiness in your cunt is soon replaced by something stretching you out. Your moan is simply replaced with more gagging and coughing as the cock filling you out retreats' + 
			' only fill you out again. With the pace picking up, your eyes roll into the back of your head as your toes curl once again, and a deep-rooted pleasure making you buckle and moan.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 10, 15)>>' + 
			'<<run setup.bodyNote($player, "vagina")>><<run setup.bodyNote($player, "asshole")>>' + 
			'<<run setup.count("receivedVaginal", setup.random(100))>><<run setup.count("givenBlowjobs", setup.random(100))>><<run setup.count("receivedAnal", setup.random(100))>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Gangbang", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	
	let ehookingOral = {
		name: 'E-Hooking Incident - Oral',
		passageText: '<<include "E-Hooking Oral - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: '2000 units.',
			resultText: '<<include "E-Hooking Blowjob - High Price (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 2}]
		},
		{
			buttonText: '2000 units.',
			resultText: '<<include "E-Hooking Blowjob - High Price (Failure)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 1}]
		},
		{
			buttonText: '1000 units.',
			resultText: '<<include "E-Hooking Blowjob - Medium Price (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 1}]
		},
		{
			buttonText: '1000 units.',
			resultText: '<<include "E-Hooking Blowjob - Medium Price (Failure)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 0}]
		},
		{
			buttonText: '500 units.',
			resultText: '<<include "E-Hooking Blowjob - Low Price (Success)">>',
			requirements: []
		},
		{
			buttonText: 'Decline.',
			resultText: '<<include "E-Hooking Blowjob - Decline">>',
			requirements: []
		}]
	}
	let ehookingSex = {
		name: 'E-Hooking Incident - Sex',
		passageText: '<<include "E-Hooking Sex - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: '2000 units.',
			resultText: '<<include "E-Hooking Sex - High Price (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 2}]
		},
		{
			buttonText: '2000 units.',
			resultText: '<<include "E-Hooking Sex - High Price (Failure)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 1}]
		},
		{
			buttonText: '1000 units.',
			resultText: '<<include "E-Hooking Sex - Medium Price (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 1}]
		},
		{
			buttonText: '1000 units.',
			resultText: '<<include "E-Hooking Sex - Medium Price (Failure)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 0}]
		},
		{
			buttonText: '500 units.',
			resultText: '<<include "E-Hooking Sex - Low Price (Success)">>',
			requirements: []
		},
		{
			buttonText: 'Decline.',
			resultText: '<<include "E-Hooking Sex - Decline">>',
			requirements: []
		}]
	}
	let ehookingAnal = {
		name: 'E-Hooking Incident - Anal',
		passageText: '<<include "E-Hooking Anal - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: '2000 units.',
			resultText: '<<include "E-Hooking Anal - High Price (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 2}]
		},
		{
			buttonText: '2000 units.',
			resultText: '<<include "E-Hooking Anal - High Price (Failure)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 1}]
		},
		{
			buttonText: '1000 units.',
			resultText: '<<include "E-Hooking Anal - Medium Price (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 1}]
		},
		{
			buttonText: '1000 units.',
			resultText: '<<include "E-Hooking Anal - Medium Price (Failure)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 0}]
		},
		{
			buttonText: '500 units.',
			resultText: '<<include "E-Hooking Anal - Low Price (Success)">>',
			requirements: []
		},
		{
			buttonText: 'Decline.',
			resultText: '<<include "E-Hooking Anal - Decline">>',
			requirements: []
		}]
	}
	let ehookingAbusive = {
		name: 'E-Hooking Incident - Abusive Client',
		passageText: '<<include "E-Hooking Abusive Client - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Push him away.',
			resultText: '<<include "E-Hooking Abusive Client - Push Him Away">>',
			requirements: [{id: 'Bimbo', type: 'score-max', level: 3}]
		},
		{
			buttonText: 'Slap him.',
			resultText: '<<include "E-Hooking Abusive Client - Slap Him">>',
			requirements: [{id: 'Bimbo', type: 'score-max', level: 2}]
		},
		{
			buttonText: 'Follow him.',
			resultText: '<<include "E-Hooking Abusive Client - Follow Him">>',
			requirements: []
		}]
	}
	let ehookingRich = {
		name: 'E-Hooking Incident - Rich Client',
		passageText: '<<include "E-Hooking Rich Client - Main">>',
		requirements: [],
		options: [
		{
			buttonText: 'Flash your tits.',
			resultText: '<<include "E-Hooking Rich Client - Flash Tits (Success)">>',
			requirements: [{id: 'tits-size', type: 'score-min', level: 4}]
		},
		{
			buttonText: 'Flash your tits.',
			resultText: '<<include "E-Hooking Rich Client - Flash Tits (Fail)">>',
			requirements: [{id: 'tits-size', type: 'score-max', level: 3}]
		},
		{
			buttonText: 'Fake disinterest.',
			resultText: '<<include "E-Hooking Rich Client - Fake Disinterest (Success)">>',
			requirements: [{id: 'beauty', type: 'score-min', level: 2}]
		},
		{
			buttonText: 'Fake disinterest.',
			resultText: '<<include "E-Hooking Rich Client - Fake Disinterest (Fail)">>',
			requirements: [{id: 'beauty', type: 'score-max', level: 1}]
		},
		{
			buttonText: 'Tell joke.',
			resultText: '<<include "E-Hooking Rich Client - Tell Joke (Success)">>',
			requirements: [{id: 'Cool', type: 'skill-min', level: 1}]
		},
		{
			buttonText: 'Tell joke.',
			resultText: '<<include "E-Hooking Rich Client - Tell Joke (Fail)">>',
			requirements: [{id: 'Cool', type: 'skill-max', level: 0}]
		}]
	}
	let ehookingNoClient = {
		name: 'E-Hooking Incident - No Clients',
		passageText: '<<include "E-Hooking No Clients - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "E-Hooking No Clients - Continue">>',
			requirements: []
		}]
	}
	let ehookingMindCheck = {
		name: 'E-Hooking Incident - Mind Check',
		passageText: '<<include "E-Hooking Mind Check - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "E-Hooking Mind Check - Continue">>',
			requirements: []
		}]
	}
	let ehookingLustCheck = {
		name: 'E-Hooking Incident - Lust Check',
		passageText: '<<include "E-Hooking Lust Check - Main">>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'Lust', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "E-Hooking Lust Check - Continue">>',
			requirements: []
		}]
	}

	let boothbabeGreatJob = {
		name: 'Great Job (Standard)',
		passageText: '<<= setup.eventText("A belated sigh escapes you, as your shoulders crack from your stretching. Lowering your arms you spot at least 2-3 dudes pointing and chatting amongst themselves, ' + 
		'snickering at your display. Ignoring them, you put your weight on your left leg and strike another pose.")>>' + 
		'<<= setup.speak($player, "You there sir! Hey! Need to spice up your daily life?", "smile")>>' + 
		'<<= setup.speak($npc.adults[0], "Well, if a pretty girl like you are asking, haha!", "smile")>>' + 
		'<<= setup.eventText("The man approaches and another assistant joins you, almost immediately taking over, trying to showcase the product that you´re demonstrating.")>>' + 
		'<<= setup.speak($player, "Tsk... sucker.", "smile")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Take it slow.',
			resultText: '<<= setup.eventText("You decide to rest a bit, taking it a little slow, letting the men come to you.")>>' + 
			'<<= setup.speak($npc.adults[1], "So it works like this? Oh!", "smile")>>' + 
			'<<= setup.speak($player, "Mhmph, and then you just push here.")>>' + 
			'<<= setup.eventText("You perk up a little, putting your elbows back making your tits push out. His eyes are practically glued to your chest.")>>' + 
			'<<= setup.speak($npc.adults[1], "Uhu....", "smile")>>' + 
			'<<= setup.speak($player, "So, would you like the bonus with that?")>>' + 
			'<<= setup.speak($npc.adults[1], "I.... I guess.")>>' + 
			'<<= setup.speak($player, "Here you go mister, have a nice day!", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "Y-yea-yes...", "smile")>>' + 
			'<<run setup.psyche($player, "Lust", 15, 15)>>' + '<<run setup.psyche($player, "Mind", -15, -15)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 20)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Put on a show.',
			resultText: '<<= setup.eventText("You decide that it´s time to really shake the money-maker. With a quick spin, you shake your ass towards the venue and point towards your booth. ' + 
			'Smiling at the incoming venue-goes, you quickly attract a crowd.")>>' + 
			'<<= setup.speak($player, "And check it out guys, you get a free discount from this trial, what do you say?!", "smile")>>' + 
			'<<= setup.speak($npc.adults[2], "Uhu, mhm... could you, show me again?", "smile")>>' + 
			'<<= setup.speak($player, "Sure you hunky lad.", "smile")>>' + 
			'<<= setup.eventText("You turn around and put out your ass. The thin fabric of his jeans grazing your naked ass. His bulge grows noticably whilst grinding against booty. ' + 
			'Another guy joins in, and soon after you feel warm hands play with your naked skin.")>>' + 
			'<<= setup.speak($npc.adults[3], "So... uuuh, we like get a discount?", )>>' + 
			'<<= setup.speak($player, "Mmmmmmmmmmmh", "pleasure")>>' + 
			'<<= setup.speak($npc.adults[3], "I-i see...")>>' + 
			'<<= setup.speak($player, "L-let me show you... the product line... haha...", "smile")>>' + 
			'<<= setup.speak($npc.adults[1], "A-alright.", "smile")>>' + 
			'<<run setup.psyche($player, "Lust", 100, 50)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 100)>><<run setup.count("receivedGroping", setup.random(10))>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let boothbabeMindCheck = {
		name: 'Mind Check (Standard)',
		passageText: '<<= setup.eventText("At first the job went smoothly, the venue-goers came and went in reasonable numbers. Then suddenly, a haze clouded your vision and a pain spread across head.' + 
		' You lean against the booth table, almost losing your balance, when a voice behind you tries to grab your attention.")>>' + 
		'<<= setup.speak($npc.adults[0], "Uuuh, missus, you okay?")>>' + 
		'<<= setup.speak($player, "I uuuh... whare am I? *drools*", "pleasure")>>' + 
		'<<= setup.eventText("Your knees weaken as your mind is filled with odd imagery.")>>' + 
		'<<= setup.speak($characters.jake, "Hey bro, come on! Wake up!", "smile")>>' + 
		'<<= setup.speak($player, "J-jake?")>>' + 
		'<<= setup.speak($npc.adults[0], "Whose that? Jake?")>>' + 
		'<<= setup.eventText("Your vision turns dark and a sharp pain stings the back of your head.")>>',
		requirements: [{id: 'Mind', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.eventText("A blaring alarm pounds on your ears, jolting you awake. The drool from your schooldesk trails unto your shirt.")>>' + 
			'<<= setup.speak($characters.palmer, "$player.maleName! Sleeping in class again, are we?!", "angry")>>' + 
			'<<= setup.speak($characters.malePlayer, "S-sorry miss palmer!", "smile")>>' + 
			'<<= setup.eventText("You look around, seeing several of your classmates staring in your direction with varying expressions on their faces.")>>' + 
			'<<= setup.speak($characters.palmer, "Well, that would be it for today, don´t forget that essay for friday!")>>' + 
			'<<= setup.eventText("The class erupts with stools sliding against the floor as everyone get up to leave.")>>' + 
			'<<= setup.speak($characters.jake, "Shiiet bro, pushing it with palmer, sleeping in class again.", "smile")>>' + 
			'<<= setup.speak($characters.malePlayer, "Shut up bro.")>>' + 
			'<<= setup.speak($characters.jessica, "So, $player.maleName, I was thinking, now that you´re a girl, you should have a girl name! Teehee~", "smile")>>' + 
			'<<= setup.speak($characters.jake, "Yeah, that would make sense, you sissy!", "smile")>>' + 
			'<<= setup.speak($player, "I already have a girl name... wait... where am I?!", "surprised")>>' + 
			'<<= setup.eventText("The darkness quickly consumes you again, as you´re janked out of the class room. A sharp bright light blinds you as you open your eyes, only to see your contractor.")>>' + 
			'<<= setup.speak($npc.executives[0], "You alright girl? You passed out. Been out cold for hours.")>>' + 
			'<<= setup.speak($player, "Oh?... shit... sorry.")>>' + 
			'<<= setup.speak($npc.executives[0], "It´s fine... I´ll let it slide. You already did a pretty good job... before you caused a scene that is.")>>' + 
			'<<= setup.speak($player, "Right...")>>' + 
			'<<run setup.psyche($player, "Lust", 100, 50)>>' + 
			'<<run setup.count("receivedGroping", setup.random(2))>><<run setup.count("receivedHarassment", setup.random(3))>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let boothbabeLustCheck = {
		name: 'Lust Check (Standard)',
		passageText: '<<= setup.eventText("You stand there, leaning against the boothtable, trying your best to keep your hands from your already damp cunt. You take a quick peek, ' + 
		' and sure enough, your pants are visibly wet, letting anyone know that you´re to go.")>>' + 
		'<<= setup.speak($npc.adults[0], "So, we getting a discount like this?")>>' + 
		'<<= setup.speak($player, "Mmmmmh...*moans*", "pleasure")>>' + 
		'<<= setup.eventText("You wobble your ass back and forth almost forgetting the kind of audience you have.")>>' + 
		'<<= setup.speak($npc.adults[0], "Uuuuh... you okay?", "smile")>>' + 
		'<<= setup.speak($player, "Y-yeah... just a little hot you know?", "smile")>>' + 
		'<<= setup.speak($npc.adults[0], "Right...")>>' + 
		'<<= setup.eventText("A small amount of drool drops unto your tits, before you do your best to keep your burning loins in check.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'Lust', type: 'psyche-min', level: 2}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.eventText("Your legs are sore by the end of the day, and you can´t wait to get things over.")>>' + 
			'<<= setup.speak($npc.executives[0], "Hey you, Event Girl, get over here for a moment.")>>' + 
			'<<= setup.speak($player, "S-sure...")>>' + 
			'<<= setup.speak($npc.executives[0], "Did you piss yourself?")>>' + 
			'<<= setup.speak($player, "N-no... I just, sweating a lot is all.")>>' + 
			'<<= setup.eventText("Your loins burn even hotter making you jump a little in anticipation. Your tits almost immediately catching his attention with their jiggle.")>>' + 
			'<<= setup.speak($npc.executives[0], "Ahem... well... I uuuh, get a new pair then. I suppose.")>>' + 
			'<<= setup.speak($player, "Mhmmmm.... right on boss...", "pleasure")>>' + 
			'<<run setup.psyche($player, "Lust", 100, 50)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 50)>>' + 
			'<<= setup.eventText("The rest of the day go by rather uneventful. Except for the gossip around your soaked pants.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let boothbabeBimboCheck = {
		name: 'Bimbo Check (Standard)',
		passageText: '<<= setup.eventText("Your bubbly attitude quickly attracts a large audience, with almost every inch of your body on display, a small crowd gathers around your booth.")>>' + 
		'<<= setup.speak($npc.adults[0], "Oh, so it works like that? Uhu... Could you show me again?", "smile")>>' + 
		'<<= setup.speak($player, "Teehee~, sure!", "smile")>>' + 
		'<<= setup.eventText("You set off again, bouncing your legs and shaking your ass. Your tits jiggle wildly making jaws drop left and right.")>>' + 
		'<<= setup.speak($npc.adults[1], "O-oh...! I see it, please, c-could you go on?", "smile")>>' + 
		'<<= setup.speak($npc.adults[2], "Shit! I gotta hit the strip man!", "smile")>>' + 
		'<<= setup.eventText("Your chest jiggles again as a loud giggle escapes you.")>>' + 
		'<<= setup.speak($player, "Mhm! *giggles*, we have the bestest products and the superdest discounties! Pweasies try me-! I mean- Teehee~, you know what I mean!", "smile")>>' + 
		'<<= setup.speak($npc.adults[0], "Y-yes...", "smile")>>' + 
		'<<= setup.eventText("A scramble from behind tells you that another assistant has joined the fray to the growing demand that you have created..")>>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<= setup.eventText("As time goes on, the venue-goers appear to become a little more bold. The touch of atleast several hands caress your hips and ass every now and then. ' + 
			'Your stomach curls as your head is filled with fantasies of what this might lead to.")>>' + 
			'<<= setup.speak($player, "Mhmm! You´re a big boy!", "smile")>>' + 
			'<<= setup.speak($npc.adults[4], "Haha... yes! I am!", "smile")>>' + 
			'<<= setup.speak($player, "Big boys like you need big products! And biggy discounties!", "smile")>>' + 
			'<<= setup.eventText("As you lean over the guy, you feel something hot land in strings across your naked ass. Looking behind you, you see at least two guys with their cocks out jacking it.")>>' + 
			'<<= setup.speak($player, "Oh! Cockies!", "pleasure")>>' + 
			'<<= setup.speak($npc.adults[3], "Oh god!", "pleasure")>>' + 
			'<<= setup.speak($npc.executives[0], "Oui-oui! You can´t be doing that!", "angry")>>' + 
			'<<= setup.speak($player, "Oh?", "smile")>>' + 
			'<<= setup.speak($npc.executives[0], "Get off her! This is not the adult strip.", "angry")>>' + 
			'<<= setup.eventText("The men quickly let go off you and disperse at the prospect of trouble.")>>' + 
			'<<= setup.speak($npc.executives[0], "Tsk... Listen... You´re excellent, probably the best booth babe we´ve ever had, but you gotta keep it a little civil!")>>' + 
			'<<= setup.speak($player, "I did something wrong?")>>' + 
			'<<= setup.speak($npc.executives[0], "Nevermind...")>>' + 
			'<<run setup.psyche($player, "Lust", 100, 50)>>' + 
			'<<run setup.bonus($player, 500, "Social")>>' + 
			'<<run setup.rating($player, 100)>><<run setup.count("receivedGroping", setup.random(20))>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let boothbabeGrope = {
		name: 'Grope (Standard)',
		passageText: '<<= setup.eventText("The bustling sound of the venue fills your ears, as you stand in the middle of it all. You try your ' + 
		'best to attract more venue-goers, dealing out fliers and directing them towards your booth. ' + 
		'Most of them simply just stop to ogle at your cleavage, almost drooling for a little while. Which ' + 
		'makes you instinctively cover some of your more exposed parts of your body.")>>' + 
		'<<= setup.speak($player, "Uuuuh, sir? Are you alright?", "smile")>>' + 
		'<<= setup.speak($npc.clients[1], "Oh… haha, yes-yes… just checking out… the merchandise.", "smile")>>' + 
		'<<= setup.speak($player, "Would you like a demonstration at the booth?")>>' + 
		'<<= setup.eventText("Turning your body and raising your arm, you direct him towards the booth. He stumbles along ' + 
		'with your directions, casting glances at you. Dropping him off with one of the other girls, you ' + 
		'sigh. A jolt shoots up your spine as something grips your behind. Your ass flexes as the hands ' + 
		'massage your booty, making you moan. Before turning around, a loud slap fills the venue hall, ' + 
		'followed by a shooting pain in your rear.")>>' + 
		'<<= setup.speak($player, "Agh! What in the- What do you think you´re doing?", "angry")>>' + 
		'<<= setup.speak($npc.clients[0], "Dang, girl! You got it tight!", "smile")>>' + 
		'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
		'<<= setup.eventText("You clench your fist and grit your teeth.")>>' +
		'<<run setup.count("receivedGroping")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Slap him.',
			resultText: '<<= setup.eventText("You raise your hand at the unsuspecting venue-goer, planting your heels and flexing your rear. A ' + 
			'scream escapes you as your flat hand drops and connects with his cheek. ")>>' + 
			'<<= setup.speak($player, "You stupid! Idiot!", "angry")>>' + 
			'<<= setup.eventText("A deafening silence spreads across the entire venue as the weight of everyone’s glances falls on ' + 
			'your shoulders. You perk up a little, as the man holds a hand to his cheek and his eyes swell with tears.")>>' + 
			'<<= setup.speak($npc.clients[0], "I-...I-... you´re crazy!", "surprised")>>' + 
			'<<= setup.speak($player, "Uuuh, sorry?")>>' + 
			'<<= setup.eventText("The man turns around and stumbles towards the exit, falling to his knees at least three times. ' + 
			'Whispers fill the venue as an uncomfortable atmosphere spreads. You grip your arm, as their ' + 
			'stares almost strip you naked. It almost feels like an eternity before something new has caught everyone’s attention.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Keep it professional.',
			resultText: '<<= setup.eventText("You reposition unto the hard venue-floor, leaning back unto your heels, turning towards him.")>>' + 
			'<<= setup.speak($player, "Hello sir, are you here to try the merchandise?")>>' + 
			'<<= setup.speak($npc.clients[0], "Hell yeah baby, you got some sick assets!", "smile")>>' + 
			'<<= setup.speak($player, "Allow me to escort you to the booths then.")>>' + 
			'<<= setup.eventText("Turning around, you make sure to flick your hip before strutting towards the booths. ' + 
			'The warming touch of his hands grace and grip your hips at least a few times on the way.")>>' + 
			'<<= setup.speak(eventgirls[0], "Hello sir, are you here to sample the goods?")>>' + 
			'<<= setup.speak($npc.clients[0], "Uuuh, what?")>>' + 
			'<<= setup.speak($player, "Yes he is, please take good care of him, have a nice day, sir.")>>' + 
			'<<= setup.speak($npc.clients[0], "B-but? What?")>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<<= setup.eventText("Having dumped off another unsuspecting fool, you spin and strut back towards the venue.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let boothbabeHarass = {
		name: 'Harassment (Standard)',
		passageText: '<<= setup.eventText("You spot a group of guys strolling along the venue-floor. Not being brave enough to take on the ' + 
		'lot of them, you decide to sit this one out. As they get closer, you hear them gossip about ass and ' + 
		'tits. Turning your head, you see them stand in a line towards you, one of them scratching his chin eyeing you up and down.")>>' + 
		'<<= setup.speak($npc.adults[1], "Nice ass girl… you get a lot of attention with that?", "smile")>>' + 
		'<<= setup.speak($npc.adults[0], "What´s your group discount?", "smile")>>' + 
		'<<= setup.speak($npc.adults[2], "I bet you got some mileage on that behind.", "smile")>>' + 
		'<<= setup.eventText("A sigh escapes you as you spin and head towards the booth, trying to ignore them at first.")>>' + 
		'<<= setup.speak($npc.adults[0], "Oui! Don´t just ignore us, slut!", "angry")>>' + 
		'<<= setup.eventText("A strong grip latches unto your wrist, pulling you towards them. Their hot breath landing on ' + 
		'your neck making you wince. You arch your back and plant your heels trying to pull your arm away.")>>' + 
		'<<= setup.speak($npc.adults[1], "Come on doll, let us play.", "smile")>>' + 
		'<<= setup.eventText("They position themselves on all sides, locking your limbs with a tight grip.")>>' + 
		'<<run setup.count("receivedHarassment")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Scream.',
			resultText: '<<= setup.eventText("Your scream echoes throughout the venue, but is quickly deafened as a hand falls over your mouth.")>>' + 
			'<<= setup.speak($npc.adults[2], "God damn it, stop screaming you dumb hoe.", "angry")>>' + 
			'<<= setup.eventText("However, even though the scream was quickly silenced, all eyes were now on you… and them. ' + 
			'Their grips suddenly grew lighter as they saw their newfound attention.")>>' + 
			'<<= setup.speak($npc.adults[0], "Tsk…")>>' + 
			'<<= setup.speak($npc.adults[1], "Whatever man, you just some cheap slag anyway.")>>' + 
			'<<= setup.eventText("You stand there disheveled, as they leave you. Almost tripping on your heels as your legs tremble. ' + 
			'You drag yourself back to the booth, only to realize that you’re straight flashing one of your tits to the whole venue. ' + 
			'With a quick fix to your wardrobe malfunction, you return to the venue-floor.")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Moan.',
			resultText: '<<= setup.eventText("A moan escapes you, which only emboldens their advances.")>>' + 
			'<<= setup.speak($adults[0], "Damn… this bitch is ready to go.")>>' + 
			'<<= setup.eventText("A hand tightly squeezes your left tit, with another holding unto and massaging your rear end. ' + 
			'You arch your back and instinctively spread your legs, revealing your damp wet loins.")>>' + 
			'<<= setup.speak($npc.adults[1], "Fuuck me, we should get her into one of them back rooms.")>>' + 
			'<<= setup.speak($npc.executives[0], "What the hell are you lads doing to one of me girls?!")>>' + 
			'<<= setup.speak($npc.adults[0], "Oh fuck! Let´s bolt!")>>' + 
			'<<= setup.eventText("A roar comes from behind you as their hands are ripped from their tight holds. Your manager furiously charging unto them ' + 
			'with a raised fist they zig zag through the crowded venue. With bated breath, your manager turns around.")>>' + 
			'<<= setup.speak($npc.executives[0], "You alright girl? Damned scoundrels! Thinking they can just walk in here and grab whoever and whatever!", "angry")>>' + 
			'<<= setup.speak($player, "I- uuuuh, thanks I guess.")>>' + 
			'<<= setup.speak($npc.executives[0], "Don´t mention it, now get back out there and cover up those tits.")>>' + 
			'<<= setup.eventText("Looking down your face reddens as your complete wardrobe malfunction is flashing your chest. You quickly grip your top and pull it down with a yelp. ' + 
			'With your manager leaving, you march back out unto the venue continuing to try and attract new venue-goers.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 2, 3)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		}]
	}
	let boothbabeHardSell = {
		name: 'Hard Sell (Standard)',
		passageText: '<<= setup.eventText("The venue grows even more quiet, as the venue-goers head towards the exits. Looking back at your fellow girls, your stomach drops a little. ' + 
		'You definitely have not sold enough merchandise. You breathe in and clutch your fist, scouting around for some easy prey. ' + 
		'You spot a group of guys further down, seemingly taking one last tour around the venue. Arching your back and pushing your chest out, you wave towards them.")>>' + 
		'<<= setup.speak($player, "Hey there boys! Want to have some fun?!", "smile")>>' + 
		'<<= setup.speak($npc.adults[0], "Oh shit- guys, she´s talking to us!", "smile")>>' + 
		'<<= setup.speak($npc.adults[1], "Oh fuck, uuuuh, well…. Haha- sure! We like fun!", "smile")>>' + 
		'<<= setup.speak($player, "Come along then, and take a look at our cheap merchandise!", "smile")>>' + 
		'<<= setup.eventText("The guys slack back a little and whisper internally, casting glances at you.")>>' + 
		'<<= setup.speak($npc.adults[0], "Uuuh, so like, what do we get for coming along eh? You´re just trying to sell us your merchandise! We want a go at that ass.")>>' + 
		'<<= setup.eventText("A wrinkle develops on your forehead as he states the obvious.")>>',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Go the extra mile.',
			resultText: '<<= setup.eventText("A sigh escapes you, realizing you’ll have to go the extra mile here.")>>' + 
			'<<= setup.speak($player, "Well, this is not just any merchandise! You get to touch a little whilst trying it.", "smile")>>' + 
			'<<= setup.eventText("You wink and smile seductively at them, swinging your ass to the side and playing with your tits. ' + 
			'The light in their eyes suddenly flares up as their attention is ensnared by you.")>>' + 
			'<<= setup.speak($npc.adults[0], "Oh shit! Alright! Lead the way lady.")>>' + 
			'<<= setup.speak($player, "Come along then.", "smile")>>' + 
			'<<= setup.eventText("They follow along with their eyes trapped by your swinging hips, strutting towards the booth.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 2, 3)>>' + 
			'<<run setup.rating($player, 10)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Ramp up the sell.',
			resultText: '<<= setup.eventText("Wrinkling your eyebrow you think for a second, before trying again.")>>' + 
			'<<= setup.speak($player, "Well, this merchandise is not just any merchandise.")>>' + 
			'<<= setup.speak($adults[0], "Oh yeah? What´s so special about it?")>>' + 
			'<<= setup.speak($player, "This merchandise makes you hot, and the girls like hot!")>>' + 
			'<<= setup.eventText("The guys look at each other with a glint in their eyes nodding at each other.")>>' + 
			'<<= setup.speak($npc.adults[1], "Oh shit… really?")>>' + 
			'<<= setup.speak($player, "Of course, uuuh, even my boyfriend uses the merchandise!")>>' + 
			'<<= setup.eventText("All nodding in agreement, you wave your hand at them, spin and strut towards the booth.")>>' + 
			'<<run setup.rating($player, 5)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish($event.current, "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		}]
	}
	
	
	let gloryholeBlowjob1 = {
		name: 'Glory Suck (Low Slut)',
		passageText: '<<= setup.eventText("You take a closer look around the stall, littered with obscene graffiti and messages, spelling slurs like ´mouth whore´, ' + 
		'´cum slut booth´ and ´suck here´ with an arrow pointing towards the small cockhole in the wall.")>>' + 
		'<<= setup.eventText("Your stomach drops and you feel slightly on edge. Are you really going to do this? Whoring out your mouth for cash? Like some debased slut with a price tag?")>>' + 
		'<<= setup.speak($player, "Fuck... This is so wrong. I´m not even a real woman.")>>' + 
		'<<= setup.eventText("You cringe at the thought of sucking another man´s cock, even more so over the thought of salty cum being pumped down your throat.")>>' + 
		'<<= setup.speak($player, "I have to do this. Not my fault, their fault. Not the same.")>>' + 
		'<<= setup.eventText("Your heart jumps a beat as you hear someone enter on the other side, followed by a mild grunt. Then the sound of pants being dropped to the floor. ' + 
		'You look down in shame, it´s actually happening.")>>' + 
		'<<= setup.speak($characters.secret, "You gonna suck it or what?")>>' + 
		'<<= setup.eventText("You raise your head, and there it is, staring at you. Another mans penis, fully erect. The glans of the head slightly dripping with pre-cum, ready to be devoured.")>>' + 
		'<<= setup.speak($characters.secret, "Listen, I ain´t gonna wait all day, at least touch it or something. Fucking whore.")>>' + 
		'<<= setup.eventText("You grab his cock, feeling it´s warm mass in your soft girly hands, you begin to stroke him.")>>' + 
		'<<= setup.speak($characters.secret, "That´s it, continue.")>>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("You stroke the strangers cock, feeling it´s rockhard veiny mass in your hand. The head pointing directly at you, you cringe slightly thinking about it´s cum covering your face like some debased whore.")>>' + 
			'<<= setup.speak($characters.secret, "Mmmh, fuck... Pick up the pace slut.")>>' + 
			'<<= setup.eventText("You move your hand a bit faster, clenching your hand to get a proper grip, milking him for all his worth. The thought of masturbating a cock that´s not your own gives you weird tingles all over your body.")>>' + 
			'<<= setup.speak($player, "Did it really have to be this big?")>>' + 
			'<<= setup.eventText("You think to yourself, as you´re pretty sure it´s bigger than yours... Or the one you used to have at the least. Moving your head towards the stranger´s cock you begin to caress it with your tongue, swirling around it playfully.")>>' + 
			'<<= setup.speak($characters.secret, "That´s it, suck it!")>>' + 
			'<<= setup.eventText("You take their cock into your mouth, tasting the pre-cum greasing your tongue. Bobbing your head back and forth like a depraved pornstar on her first shoot. Your mouth drooling with spit you struggle to keep it inside, eventually just giving up.")>>' + 
			'<<= setup.speak($player, "Doesn´t taste that bad I-... Ugh what the fuck am I thinking!", "angry")>>' + 
			'<<= setup.eventText("The stranger grunts and his cocks twitches as you suck him, moving back and forth slightly in frustration. You know exactly what´s coming, but are too occupied by your shameful display to properly react.")>>' + 
			'<<= setup.speak($characters.secret, "AAAAH! SHIT! That´s it!")>>' + 
			'<<= setup.eventText("You feel the sweet salty cum forcibly shoot out of his huge cock hitting the back of your throat. You loudly cough and retch in discomfort as you pull your face back. You feel robes of hot fertile cum land on your cheeks, nose, even getting some in your eye and hair. The guy is emptying buckets worth into your booth.")>>' + 
			'<<= setup.speak($player, "Holy shit! Stop cumming already! How the fuck can you cum so much!", "angry")>>' + 
			'<<= setup.speak($characters.secret, "Uuuugh! FUCK! Just a lil´ upgrade I got last week, amazing!")>>' + 
			'<<= setup.eventText("You sit there in shock as the sound of the stranger zipping his pants up and leaving relieves you a little. However, just as he leaves, you hear someone else enter on the other side... not long after, a new cock is staring at you, waiting it´s turn. You sigh.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 10, 15)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Gloryhole", "eVentia - Gloria Gloryholes")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let gloryholeBlowjob2 = {
		name: 'Glory Suck (High Slut)',
		passageText: '<<= setup.eventText("You take a closer look around the stall and smirk. The walls are littered with obscene graffiti and messages, spelling slurs like ´mouth whore´, ´cum slut booth´ and ´suck here´ with an arrow pointing towards the small cockhole in the wall.")>>' + 
		'<<= setup.eventText("You feel a heat building up in your loins and your mouth fill with saliva, as it prepares for what´s coming.")>>' + 
		'<<= setup.speak($player, "Mhmmm... Let´s get to it.")>>' + 
		'<<= setup.eventText("You moan at the thought of sucking another man´s juicy cock, even more so over the thought of salty cum being pumped down your throat.")>>' + 
		'<<= setup.eventText("Your heart jumps a beat as you hear someone enter on the other side, followed by a mild grunt. Then the sound of pants being dropped to the floor. You look lick your lips in anticipation as you get ready to work it. And there it is, slowly being pushed through the cockhole. You immediately wrap it around your lips, feeling the pre-cum soak them.")>>' + 
		'<<= setup.speak($characters.secret, "Woah easy there! You´re one hungry whore aren´t ya?")>>' + 
		'<<= setup.eventText("You lick the tip of his head, swirling it, letting him know who owns his cock now. You grab his cock, feeling it´s warm mass in your soft girly hands, you begin to stroke him.")>>' + 
		'<<= setup.speak($characters.secret, "Ooooh god!")>>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<= setup.eventText("You guide the cock further into your mouth, tasting the pre-cum greasing your tongue. With drool running from your mouth, you bob your head back and forth like a depraved pornstar.")>>' + 
			'<<= setup.speak($characters.secret, "Aaaah! Shit-shit you´re gonna milk me dry too fast!")>>' + 
			'<<= setup.eventText("You move your hand a bit faster, clenching his cock lightly to get a proper grip, milking him for all his worth. The thought of your yummy reward coming closer gives you bubbly tingles all over your body.")>>' + 
			'<<= setup.eventText("Forcing the strangers cock into your mouth you try your best to take him all the way.")>>' + 
			'<<= setup.speak($characters.secret, "Oooooh fuck! Take it you little bitch!")>>' + 
			'<<= setup.eventText("The feeling of his cock prodding the beginning of your throat makes you lightly gag, but you push harder, trying to force it further down like a hungre whore. With a light plop your throat suddenly stretches as he enters you completely.")>>' + 
			'<<= setup.speak($player, "Holy shit, he´s stretching out my throat so good!", "pleasure")>>' + 
			'<<= setup.eventText("You feel his cock completely filling your throat, pushing your neck to near bursting limit. You eventually let it slide back up to get some fresh air, letting the pre-cum trail along your tongue.")>>' + 
			'<<= setup.speak($characters.secret, "AAAAH! SHIT! That´s it! I´m fucking cumming! Get ready you whore!")>>' + 
			'<<= setup.eventText("You quickly force his cock back into your mouth and feel him twitch hard as he dumps his seed into the back of your throat.")>>' + 
			'<<= setup.speak($player, "*gag*-mgmmmh!", "angry")>>' + 
			'<<= setup.speak($characters.secret, "Take it all you fucking cum dumpster!")>>' + 
			'<<= setup.eventText("The cum trails along your tongue as he slowly slides it out, leaving strings of seed between it and your lips.")>>' + 
			'<<= setup.speak($characters.secret, "Damn! You were something!")>>' + 
			'<<= setup.eventText("You sit there savoring the taste of his jizz, as you can hear the sound of the stranger zipping his pants up and leaving. However, just as he leaves, you hear someone else enter on the other side... not long after, a new cock is being pushed through the gloryhole. You sigh in relief as the hunger returns.")>>' + 
			'<<run setup.psyche($player, "Lust", 75, 75)>>' + 
			'<<run setup.psyche($player, "Slut", 10, 15)>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Gloryhole", "eVentia - Gloria Gloryholes")>><</replace>><</button>></span>',
			requirements: []
		}]
	}

	let punishGloryhole1 = {
		name: 'Glory Suck (non-slutty)',
		passageText: '<<include "Punishment - Gloryhole (non-slutty)">>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<include "Punishment - Gloryhole (Continued)">>',
			requirements: []
		}]
	}
	let punishGloryhole2 = {
		name: 'Glory Suck (slutty)',
		passageText: '<<include "Punishment - Gloryhole (slutty)">>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 3}],
		options: [
		{
			buttonText: 'Continue',
			resultText: '<<include "Punishment - Gloryhole (Continued)">>',
			requirements: []
		}]
	}
	let punishFreeUse1 = {
		name: 'Free Use (non-slutty)',
		passageText: '<<include "Punishment - Free Use (non-slutty)">>',
		requirements: [{id: 'Slut', type: 'psyche-max', level: 2}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Punishment - Free Use (Continued)">>',
			requirements: []
		}]
	}
	let punishFreeUse2 = {
		name: 'Free Use (slutty)',
		passageText: '<<include "Punishment - Free Use (slutty)">>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Punishment - Free Use (Continued)">>',
			requirements: []
		}]
	}
	let punishEXBunny = {
		name: 'EX-Bunny',
		passageText: '<<include "Punishment - EX Bunny">>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Punishment - EX Bunny (Continued)">>',
			requirements: []
		}]
	}
	let punishVizLizMannequin = {
		name: 'Punishment - Viz Liz Mannequin',
		passageText: '<<include "Punishment - Viz Liz Mannequin">>',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}],
		options: [
		{
			buttonText: 'Continue.',
			resultText: '<<include "Punishment - Viz Liz Mannequin (Continued)">>',
			requirements: []
		}]
	}

	
	let storyHypernetAccess1 = {
		name: 'Hypernet Access (First Time)',
		passageText: '<<= setup.eventText("Right after helping a couple of bachelors find the Adult Strip, you once again slouch over the desk in the reception. ' + 
		'The slow movement and absence of any stimulation boring you to no end. Your eyes fall upon a familiar icon on the desk screen.")>>' + 
		'<<= setup.speak($player, "Is that the internet?")>>' + 
		'<<= setup.eventText("You look around your shoulder before taking a closer look, you realize the icon has a name, ´Hypernet´. ")>>' + 
		'<<= setup.speak($player, "Now that is definitely interesting…", "smile")>>' +
		'<<= setup.eventText("You tap the screen and a most familiar browser pops up. A search engine, which looks as if it could easily have originated from your time. ")>>' + 
		'<<= setup.speak($player, "Hypernet my ass… This could be of interest though…", "smile")>>' + 
		'<<= setup.eventText("Before you can even tap the screen, several ads pop up obscuring the view for the search bar.")>>' + 
		'<<= setup.speak($player, "Tsk... Typical.", "angry")>>' + 
		'<<run setup.story("Cryo-Mystery-00", "start")>>' + 
		'<<run setup.story("Cryo-Mystery-01", "start")>>' + 
		'<<run setup.story("Cryo-Mystery-04", "start")>>' + 
		'<<run setup.story("Cryo-Mystery-05", "start")>>' + 
		'<<= setup.eventText("You think about what to search for…")>>',
		modifiers: ["Receptionist"],
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'Cryo-Mystery-00', type: 'story-incomplete', level: 0}],
		options: [
		{
			buttonText: 'Search for "Cryola".',
			resultText: '<<= setup.eventText("Navigating through the entourage of pop-ups and intruding ads, you begin with where it all started and enter ´Cryola´ into the search engine. ' + 
			'You only see obscure links to companies manufacturing crayons or similar products. With several links having been ´Redacted´.")>>' + 
			'<<= setup.eventText("However, one link seems to have been left out, some sort of wikia for obscure conspiracies.")>>' + 
			'<<= setup.speak($player, "Hmph... Interesting...")>>' + 
			'<<= setup.eventText("An article on Cryostasis Technology, that mentions the company by name.")>>' + 
			'<<= setup.eventText("It reads…")>>' + 
			'<<= setup.eventText("The field of Cryostasis came to an abrupt halt in 2023 as one of the leaders in the prospective field came under scrutiny for having botched a planned presentation.", "italics")>>' + 
			'<<= setup.speak($player, "Planned?! What the hell?!")>>' + 
			'<<= setup.eventText("The company and the tech in question soon went bankrupt from the impending lawsuits and investigations. It is presumed that the field of cryostasis was picked up by the government.", "italics")>>' + 
			'<<= setup.speak($player, "The government got involved? Figures…")>>' + 
			'<<= setup.eventText("With the lab and company going dark, not much is known of the following lawsuits, as they were held behind closed doors. The victim\’s family likely settled out of court, or worse...", "italics")>>' + 
			'<<= setup.speak($player, "Tsk… That old hag got something out of that?… Typical!")>>' + 
			'<<= setup.eventText("As you reach the bottom of the page you hear a familiar voice from behind you.")>>' + 
			'<<= setup.speak($characters.brenda, "Hey there gurl! Whatcha lookin\’ at?")>>' +
			'<<= setup.speak($player, "Oh uh… Nothing special…")>>' + 
			'<<= setup.eventText("You quickly shut down the page.")>>' + 
			'<<= setup.speak($characters.brenda, "Hah! Sure thing!")>>' + 
			'<<run setup.story("Cryo-Mystery-01", "complete")>>' + 
			'<<run setup.story("Cryo-Mystery-02", "start")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-01', type: 'story-incomplete', level: 0}]
		},
		{
			buttonText: 'Search for "Cryolab Accident 2023".',
			resultText: '<<= setup.eventText("With some luck and a simple search you come upon a site that archives old articles. With one article in particular catching your eye.")>>' + 
			'<<= setup.eventText("A young man meets a cold end as he´s frozen forever.", "italics")>>' + 
			'<<= setup.speak($player, "Some end indeed...")>>' + 
			'<<= setup.eventText("A young man met his apparent end this morning at the hands of a cryolab firm. You heard that right! Frozen in a tomb, never to wake up again. A tragedy indeed.", "italics")>>' + 
			'<<= setup.speak($player, "If only they knew.")>>' + 
			'<<= setup.eventText("Those that stand to blame are the nefarious Cryola, now also under investigation for a series of other breaches of security and misconduct of safety measures.", "italics")>>' + 
			'<<= setup.speak($player, "Serves them right.")>>' + 
			'<<= setup.eventText("The young man left behind him his grieving aunt, now with great courage taking the cryolab firm into court seeking justice for their misdeeds.", "italics")>>' + 
			'<<= setup.speak($player, "Grieving? Hah! Right!")>>' + 
			'<<= setup.eventText("You scroll further down, coming upon further articles with interesting headlines giving updates.")>>' + 
			'<<= setup.eventText("Lone Aunt turns silent after closed court settlement.", "italics")>>' + 
			'<<= setup.eventText("Aunt whom lost only family member ten years ago in famous cryostasis accident, starts first legal digital brothel amidst concerns of human rights violations.", "italics")>>' + 
			'<<= setup.eventText("UNC takeover…", "italics")>>' + 
			'<<= setup.speak($characters.brenda, "Now that looks interesting!", "smile")>>' +
			'<<= setup.speak($player, "Gah!", "surprised")>>' + 
			'<<= setup.eventText("You quickly shut down the page and turn around.")>>' + 
			'<<= setup.speak($characters.brenda, "Caught ya red-handed there! Haha! Don´t worry, I won´t snitch on your slacking, just keep it on the down-low aight?")>>' + 
			'<<= setup.speak($player, "Right right-... back to work I guess.", "surprised")>>' + 
			'<<run setup.story("Cryo-Mystery-02", "complete")>>' + 
			'<<run setup.story("Cryo-Mystery-03", "start")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-02', type: 'story-active', level: 0}]
		},
		{
			buttonText: 'Search for "Event Girl".',
			resultText: '<<= setup.eventText("A back-thought enters your mind. What if Linus and the others hiding something about this whole Event Girl business? ' + 
			'You enter the keywords and find a wikia page of sorts for the term.")>>' + 
			'<<= setup.speak($player, "This is it. Now what the hell have they condemned me to...")>>' + 
			'<<= setup.eventText("Event Girls are much like prostitutes, professional entertainers, pleasure and service-providers.", "italics")>>' + 
			'<<= setup.speak($player, "*sigh*")>>' + 
			'<<= setup.eventText("Often compared to the former, they sell their body for more than just sex, ranging from simple service jobs, to modelling and full-on prostitution. ", "italics")>>' + 
			'<<= setup.speak($player, "Well... That´s always something I guess.")>>' + 
			'<<= setup.eventText("A more popular form of this has come about as ´boyfriend´ or ´pleasure´-experiences, wherein specific scenarios or events are pre-written and then performed. Therein the term, ´Event´ and ´Girl´.", "italics")>>' + 
			'<<= setup.speak($player, "Anyone could have figured that one out... Right?", "smile")>>' + 
			'<<= setup.eventText("The position of Event Girl was confirmed and legalized for corporate debt repayment in 2179, whilst the more elaborate and depraved ´Public Service´-branch of the practice was not legalized until 2201.", "italics")>>' + 
			'<<= setup.speak($characters.brenda, "Need help with that?", "smile")>>' +
			'<<= setup.speak($player, "Oh go-! Brenda!", "surprised")>>' + 
			'<<= setup.eventText("You quickly cover the screen with your hands, only to shut it down.")>>' + 
			'<<= setup.speak($characters.brenda, "Tsk-tsk. You got a job to manage miss! *snort* Hah! Come on, we got clients to procure.")>>' + 
			'<<= setup.speak($player, "Sure- right. Coming.", "surprised")>>' + 
			'<<run setup.story("Cryo-Mystery-04", "complete")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-04', type: 'story-incomplete', level: 0}]
		},
		{
			buttonText: 'Search for "eVentia Corp".',
			resultText: '<<= setup.eventText("Digging deeper into the mystery that is eVentia Corp, you first land upon what appears to be the companies official hyper-webpage.")>>' + 
			'<<= setup.speak($player, "Well now this is certainly rich.")>>' + 
			'<<= setup.eventText("eVentia Corp, bringing the pleasure to you!", "italics")>>' + 
			'<<= setup.speak($player, "Typical.")>>' + 
			'<<= setup.eventText("The whole landing page reeks of corporate jargon, with elaborate business-like buzzword that are utterly indecipherable.")>>' + 
			'<<= setup.speak($player, "How can anyone read this? Let alone understand it?")>>' + 
			'<<= setup.eventText("Although, the pictures of scandily-clad women in what would be a complete mockery of any office dress code, is more than enough to tell anyone what it’s all about. Unless, of course… Your mind is the only one reaching such a conclusion during this time.")>>' + 
			'<<= setup.eventText("Continuing your search, you come upon a more neutral wikia page.")>>' + 
			'<<= setup.eventText("eVentia Corp is a UNC-backed geo-global tech and entertainment company based in New Washington. Founded in 2056 as then eVentia Entertainment by Amanda Miller.")>>' + 
			'<<= setup.speak($player, "Amanda Miller... hmmm... worth checking out for sure.")>>' + 
			'<<= setup.eventText("The company started as a small-time brothel-ring, being one of the first brothel-rings to take advantage of the legalization of corporate prostitution.")>>' + 
			'<<= setup.speak($characters.brenda, "Doing some digging around there?", "smile")>>' +
			'<<= setup.speak($player, "B-brenda!", "surprised")>>' + 
			'<<= setup.eventText("You freeze, turning slowly after having turned of the screen.")>>' + 
			'<<= setup.speak($characters.brenda, "Well, I gotta say I am truly bored... so whaddaya digging for?")>>' + 
			'<<= setup.speak($player, "Oh-nothing... haha...")>>' + 
			'<<= setup.speak($characters.brenda, "*yawn*... right...")>>' + 
			'<<run setup.story("Cryo-Mystery-03", "complete")>>' + 
			'<<run setup.story("Cryo-Mystery-00", "complete")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-03', type: 'story-active', level: 0}]
		},
		{
			buttonText: 'Search for "Jessica and Jake".',
			resultText: '<<= setup.eventText("You think back to your previous life. If only you could go back. As your curiosity takes hold of you, you search for Jake and Jessica on the search engine, but come up empty-handed.")>>' + 
			'<<= setup.speak($player, "There gotta be something...")>>' + 
			'<<= setup.eventText("At first, you quickly conclude that time has forgotten them or never made a name for themselves to become someone able to be found over the internet… or hypernet that is.")>>' + 
			'<<= setup.eventText("However, your search finally bears fruit, as you come upon an old archive of Facialbook which has an image… of them… married.")>>' + 
			'<<= setup.eventText("You clench your first in anger. There he is, with her. And here you are. And he\’s not even around anymore for you to have any say.")>>' + 
			'<<= setup.eventText("You close down the screen, keeping it all in and burying it away.")>>' + 
			'<<run setup.story("Cryo-Mystery-05", "complete")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-05', type: 'story-incomplete', level: 0}]
		}]
	}
	let storyHypernetAccess2 = {
		name: 'Hypernet Access (Repeatable)',
		passageText: '<<= setup.eventText("Once again you find yourself in the unique situation of having nothing to do. No clients, and more importantly... no prying eyes. ' + 
		'You move behind the desk and quickly bump it out of sleep mode.")>>' + 
		'<<= setup.speak($player, "Nows my chance... Let´s see.")>>' + 
		'<<= setup.eventText("You look around your shoulder before double-tapping the Hypernet Icon. A barrage of familiar ads begin to bombard your screen.")>>' + 
		'<<= setup.speak($player, "God damn it...", "angry")>>' +
		'<<= setup.eventText("You quickly dispose of them and think about what to search for.")>>',
		modifiers: ["Receptionist"],
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'Cryo-Mystery-00', type: 'story-incomplete', level: 0},{id: 'Cryo-Mystery-00', type: 'story-active', level: 0}],
		options: [
		{
			buttonText: 'Search for "Cryola".',
			resultText: '<<= setup.eventText("Navigating through the entourage of pop-ups and intruding ads, you begin with where it all started and enter ´Cryola´ into the search engine. ' + 
			'You only see obscure links to companies manufacturing crayons or similar products. With several links having been ´Redacted´.")>>' + 
			'<<= setup.eventText("However, one link seems to have been left out, some sort of wikia for obscure conspiracies.")>>' + 
			'<<= setup.speak($player, "Hmph... Interesting...")>>' + 
			'<<= setup.eventText("An article on Cryostasis Technology, that mentions the company by name.")>>' + 
			'<<= setup.eventText("It reads…")>>' + 
			'<<= setup.eventText("The field of Cryostasis came to an abrupt halt in 2023 as one of the leaders in the prospective field came under scrutiny for having botched a planned presentation.", "italics")>>' + 
			'<<= setup.speak($player, "Planned?! What the hell?!")>>' + 
			'<<= setup.eventText("The company and the tech in question soon went bankrupt from the impending lawsuits and investigations. It is presumed that the field of cryostasis was picked up by the government.", "italics")>>' + 
			'<<= setup.speak($player, "The government got involved? Figures…")>>' + 
			'<<= setup.eventText("With the lab and company going dark, not much is known of the following lawsuits, as they were held behind closed doors. The victim\’s family likely settled out of court, or worse...", "italics")>>' + 
			'<<= setup.speak($player, "Tsk… That old hag got something out of that?… Typical!")>>' + 
			'<<= setup.eventText("As you reach the bottom of the page you hear a familiar voice from behind you.")>>' + 
			'<<= setup.speak($characters.brenda, "Hey there gurl! Whatcha lookin\’ at?")>>' +
			'<<= setup.speak($player, "Oh uh… Nothing special…")>>' + 
			'<<= setup.eventText("You quickly shut down the page.")>>' + 
			'<<= setup.speak($characters.brenda, "Hah! Sure thing!")>>' + 
			'<<run setup.story("Cryo-Mystery-01", "complete")>>' + 
			'<<run setup.story("Cryo-Mystery-02", "start")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-01', type: 'story-incomplete', level: 0}]
		},
		{
			buttonText: 'Search for "Cryolab Accident 2023".',
			resultText: '<<= setup.eventText("With some luck and a simple search you come upon a site that archives old articles. With one article in particular catching your eye.")>>' + 
			'<<= setup.eventText("A young man meets a cold end as he´s frozen forever.", "italics")>>' + 
			'<<= setup.speak($player, "Some end indeed...")>>' + 
			'<<= setup.eventText("A young man met his apparent end this morning at the hands of a cryolab firm. You heard that right! Frozen in a tomb, never to wake up again. A tragedy indeed.", "italics")>>' + 
			'<<= setup.speak($player, "If only they knew.")>>' + 
			'<<= setup.eventText("Those that stand to blame are the nefarious Cryola, now also under investigation for a series of other breaches of security and misconduct of safety measures.", "italics")>>' + 
			'<<= setup.speak($player, "Serves them right.")>>' + 
			'<<= setup.eventText("The young man left behind him his grieving aunt, now with great courage taking the cryolab firm into court seeking justice for their misdeeds.", "italics")>>' + 
			'<<= setup.speak($player, "Grieving? Hah! Right!")>>' + 
			'<<= setup.eventText("You scroll further down, coming upon further articles with interesting headlines giving updates.")>>' + 
			'<<= setup.eventText("Lone Aunt turns silent after closed court settlement.", "italics")>>' + 
			'<<= setup.eventText("Aunt whom lost only family member ten years ago in famous cryostasis accident, starts first legal digital brothel amidst concerns of human rights violations.", "italics")>>' + 
			'<<= setup.eventText("UNC takeover…", "italics")>>' + 
			'<<= setup.speak($characters.brenda, "Now that looks interesting!", "smile")>>' +
			'<<= setup.speak($player, "Gah!", "surprised")>>' + 
			'<<= setup.eventText("You quickly shut down the page and turn around.")>>' + 
			'<<= setup.speak($characters.brenda, "Caught ya red-handed there! Haha! Don´t worry, I won´t snitch on your slacking, just keep it on the down-low aight?")>>' + 
			'<<= setup.speak($player, "Right right-... back to work I guess.", "surprised")>>' + 
			'<<run setup.story("Cryo-Mystery-02", "complete")>>' + 
			'<<run setup.story("Cryo-Mystery-03", "start")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-02', type: 'story-active', level: 0}]
		},
		{
			buttonText: 'Search for "Event Girl".',
			resultText: '<<= setup.eventText("A back-thought enters your mind. What if Linus and the others hiding something about this whole Event Girl business? ' + 
			'You enter the keywords and find a wikia page of sorts for the term.")>>' + 
			'<<= setup.speak($player, "This is it. Now what the hell have they condemned me to...")>>' + 
			'<<= setup.eventText("Event Girls are much like prostitutes, professional entertainers, pleasure and service-providers.", "italics")>>' + 
			'<<= setup.speak($player, "*sigh*")>>' + 
			'<<= setup.eventText("Often compared to the former, they sell their body for more than just sex, ranging from simple service jobs, to modelling and full-on prostitution. ", "italics")>>' + 
			'<<= setup.speak($player, "Well... That´s always something I guess.")>>' + 
			'<<= setup.eventText("A more popular form of this has come about as ´boyfriend´ or ´pleasure´-experiences, wherein specific scenarios or events are pre-written and then performed. Therein the term, ´Event´ and ´Girl´.", "italics")>>' + 
			'<<= setup.speak($player, "Anyone could have figured that one out... Right?", "smile")>>' + 
			'<<= setup.eventText("The position of Event Girl was confirmed and legalized for corporate debt repayment in 2179, whilst the more elaborate and depraved ´Public Service´-branch of the practice was not legalized until 2201.", "italics")>>' + 
			'<<= setup.speak($characters.brenda, "Need help with that?", "smile")>>' +
			'<<= setup.speak($player, "Oh go-! Brenda!", "surprised")>>' + 
			'<<= setup.eventText("You quickly cover the screen with your hands, only to shut it down.")>>' + 
			'<<= setup.speak($characters.brenda, "Tsk-tsk. You got a job to manage miss! *snort* Hah! Come on, we got clients to procure.")>>' + 
			'<<= setup.speak($player, "Sure- right. Coming.", "surprised")>>' + 
			'<<run setup.story("Cryo-Mystery-04", "complete")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-04', type: 'story-incomplete', level: 0}]
		},
		{
			buttonText: 'Search for "eVentia Corp".',
			resultText: '<<= setup.eventText("Digging deeper into the mystery that is eVentia Corp, you first land upon what appears to be the companies official hyper-webpage.")>>' + 
			'<<= setup.speak($player, "Well now this is certainly rich.")>>' + 
			'<<= setup.eventText("eVentia Corp, bringing the pleasure to you!", "italics")>>' + 
			'<<= setup.speak($player, "Typical.")>>' + 
			'<<= setup.eventText("The whole landing page reeks of corporate jargon, with elaborate business-like buzzword that are utterly indecipherable.")>>' + 
			'<<= setup.speak($player, "How can anyone read this? Let alone understand it?")>>' + 
			'<<= setup.eventText("Although, the pictures of scandily-clad women in what would be a complete mockery of any office dress code, is more than enough to tell anyone what it’s all about. Unless, of course… Your mind is the only one reaching such a conclusion during this time.")>>' + 
			'<<= setup.eventText("Continuing your search, you come upon a more neutral wikia page.")>>' + 
			'<<= setup.eventText("eVentia Corp is a UNC-backed geo-global tech and entertainment company based in New Washington. Founded in 2056 as then eVentia Entertainment by Amanda Miller.")>>' + 
			'<<= setup.speak($player, "Amanda Miller... hmmm... worth checking out for sure.")>>' + 
			'<<= setup.eventText("The company started as a small-time brothel-ring, being one of the first brothel-rings to take advantage of the legalization of corporate prostitution.")>>' + 
			'<<= setup.speak($characters.brenda, "Doing some digging around there?", "smile")>>' +
			'<<= setup.speak($player, "B-brenda!", "surprised")>>' + 
			'<<= setup.eventText("You freeze, turning slowly after having turned of the screen.")>>' + 
			'<<= setup.speak($characters.brenda, "Well, I gotta say I am truly bored... so whaddaya digging for?")>>' + 
			'<<= setup.speak($player, "Oh-nothing... haha...")>>' + 
			'<<= setup.speak($characters.brenda, "*yawn*... right...")>>' + 
			'<<run setup.story("Cryo-Mystery-03", "complete")>>' + 
			'<<run setup.story("Cryo-Mystery-00", "complete")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-03', type: 'story-active', level: 0},{id: 'Cryo-Mystery-05', type: 'story-completed', level: 0}]
		},
		{
			buttonText: 'Search for "Jessica and Jake".',
			resultText: '<<= setup.eventText("You think back to your previous life. If only you could go back. As your curiosity takes hold of you, you search for Jake and Jessica on the search engine, but come up empty-handed.")>>' + 
			'<<= setup.speak($player, "There gotta be something...")>>' + 
			'<<= setup.eventText("At first, you quickly conclude that time has forgotten them or never made a name for themselves to become someone able to be found over the internet… or hypernet that is.")>>' + 
			'<<= setup.eventText("However, your search finally bears fruit, as you come upon an old archive of Facialbook which has an image… of them… married.")>>' + 
			'<<= setup.eventText("You clench your first in anger. There he is, with her. And here you are. And he\’s not even around anymore for you to have any say.")>>' + 
			'<<= setup.eventText("You close down the screen, keeping it all in and burying it away.")>>' + 
			'<<run setup.story("Cryo-Mystery-05", "complete")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Receptionist", "Pod - Main")>><</replace>><</button>></span>',
			requirements: [{id: 'Cryo-Mystery-05', type: 'story-incomplete', level: 0}]
		}]
	}
	let storyMaidVernonEncounter1 = {
		name: 'Vernon Encounter (Intro)',
		passageText: '<<= setup.eventText("The familiar elevator-bing tells you you have reached your designated floor. The door slides open and you push the trolley unto the red-carpeted floor. ' + 
		'A corridor filled with black-marble door welcomes you, with each one leading to a conference room. With a small sigh, you turn around and drag your trolley towards the first door, ' + 
		'pushing your back towards it to open it. You only get the door half-open before a raspy voice hits your ears followed by another, more deep one.")>>' + 
		'<<= setup.speak($characters.vernon, "-All we gotta do is buy them out, they cannot resist our off-, oh! Whose this?")>>' + 
		'<<= setup.speak($player, "Sorry! The room was marked as available, so- ", "surprised")>>' + 
		'<<= setup.speak($characters.vernon, "It´s fine, we were leaving, anyway. No meeting taking place here, just a little friendly conversation.", "smile")>>' + 
		'<<= setup.eventText("The man resting his legs on the table quickly jolts up and heads towards you with the other men. Their gaze lands on every curve and exposed ' + 
		'part of your body at least a few times before slinking beside you, forcing you to breathe in their musty cologne. The last guy stops, squinting his left eye as he scans you.")>>' + 
		'<<= setup.speak($characters.vernon, "You uuuh, wouldn´t be that girl. The one they hauled from that cryo-stasis chamber? That you?")>>' +
		'<<= setup.speak($player, "Depends on whose asking.")>>' + 
		'<<= setup.speak($characters.vernon, "Names Vernon Venere, or simply Mr. Venere. I´m the Vice President of Gloria Gals. I wouldn´t have expected to see you… here, doing… this?")>>' +
		'<<= setup.speak($player, "$player.femaleName, and- Well, I got a debt to cover, right? At least, that´s what I was told?")>>' + 
		'<<= setup.speak($characters.vernon, "A debt?!")>>' +
		'<<= setup.eventText("His racked laughter echos through the hall behind you.")>>' + 
		'<<= setup.speak($characters.vernon, "Did those weasels at eVentia really in debt you?! Now that!… Actually, I must say that I´m not surprised. They probably didn´t tell you much, did they now?", "smile")>>' +
		'<<= setup.speak($player, "Not really, I suppose...")>>' + 
		'<<= setup.speak($characters.vernon, "You know what, what do you say to dinner? With me? You can call it, an Event, I suppose. I´d like to know more about such an artifact as yourself. ' + 
		'You probably do not know the value that you possess.")>>' + 
		'<<= setup.eventText("He scratches his chin whilst waiting for your response.")>>',
		modifiers: ["Maid"],
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'Vernon-Venere-00', type: 'story-incomplete', level: 0}],
		options: [
		{
			buttonText: 'Sure.',
			resultText: '<<= setup.speak($player, "Sure, I suppose I could.")>>' + 
			'<<= setup.eventText("He smiles as his face lights up.")>>' + 
			'<<= setup.speak($characters.vernon, "Great! It´s settled then. I bet you´re busy during the weekdays, so how does this Saturday sound like?", "smile")>>' +
			'<<= setup.speak($player, "Sounds good to me.", "smile")>>' + 
			'<<= setup.speak($characters.vernon, "Well, $player.femaleName, it´s settled then. I´ll pick ya up around the evening.")>>' + 
			'<<= setup.eventText("He slinks past you wobbling down the corridor.")>>' + 
			'<<= setup.speak($characters.vernon, "Oh, and $player.femaleName, do wear something nice? I won´t be taking you to any scav-diner, ahahaha!", "smile")>>' + 
			'<<= setup.eventText("Turning your head unto the conference room, you ponder upon what just happened... with another sigh you slap your heavy-duty gloves on and grab your duster.")>>' + 
			'<<run setup.story("Vernon-Venere-00", "start")>>' + 
			'<<run setup.story("Vernon-Venere-00", "complete")>>' + 
			'<<run setup.story("Vernon-Dinner-00", "start")>>' + 
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		},
		{
			buttonText: 'Decline.',
			resultText: '<<= setup.speak($player, "Sorry... I uuuh-")>>' + 
			'<<= setup.speak($characters.vernon, "No needed to get out the excuses miss, it´s fine. Here, take my card at the least.")>>' +
			'<<= setup.eventText("A sweat trails your forehead as his hand reaches out holding a neon holo-card. Your eyes glaze across the suble off-white coloring. The tasteful thickness of it.' + 
			'It even has a watermark...")>>' + 
			'<<= setup.speak($characters.vernon, "Is something wrong, $player.femaleName? You´re sweating.")>>' + 
			'<<= setup.speak($player, "No-no, I´m fine. I just- long day, you know.")>>' + 
			'<<= setup.speak($characters.vernon, "Well, you hold on to that, and come by Gloria Gals if you need some proper work. Assets like yours shouldn´t be stuck doing petty maid work! Ahahaha!", "smile")>>' + 
			'<<= setup.eventText("He slinks past you wobbling down the corridor.")>>' + 
			'<<run setup.story("Vernon-Venere-00", "start")>>' + 
			'<<run setup.story("Vernon-Venere-00", "complete")>>' +
			'<br><span class="lbb"><<button "Continue">><<replace "#event-main">><<= setup.eventFinish("Maid", "Pod - Main")>><</replace>><</button>></span>',
			requirements: []
		}]
	}
	let storyMaidBugMission = {
		name: 'Maid Bug Mission',
		passageText: '<<include "Storyline - Bugging Rooms">>',
		modifiers: ["Maid"],
		requirements: [{id: 'Mind', type: 'psyche-max', level: 2},{id: 'Amanda-Quest-00', type: 'story-incomplete', level: 0}],
		options: [
		{
			buttonText: 'Make a run for it.',
			resultText: '<<include "Storyline - Bugging Rooms - Make a run for it">>',
			requirements: []
		},
		{
			buttonText: 'Act dumb and slutty.',
			resultText: '<<include "Storyline - Bugging Rooms - Act dumb and slutty">>',
			requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
		},
		{
			buttonText: 'Play it off cool.',
			resultText: '<<include "Storyline - Bugging Rooms - Play it off cool">>',
			requirements: [{id: 'Cool', type: 'psyche-min', level: 1}]
		}]
	}

	let maidIncidents = [maidDirtyRoom1,maidDirtyRoom2,maidAfterparty,maidHallway,maidVoyeur,maidSpanking,maidPantiePromo,maidCinema,maidDrool,maidSex1,maidSex2,maidBimbo,maidCollectionRoom1,maidCollectionRoom2,maidBoardRoom,maidLuxurySuite,maidGreatJob];
	let stripperIncidents = [stripperShowfloor,stripperPrivateDance,stripperBlowjob,stripperSex,stripperAnal,stripperChampagne,stripperToplessBig,stripperToplessSmall,stripperGreatJob,stripperMindCheck,stripperStealthHandjob];
	let carshowIncidents = [carshowLineWork,carshowPhotoshoot,carshowGridGirl,carshowPhotoGrope,carshowManagerSex1,carshowManagerSex2,carshowGreatJob];
	let sluttiaIncidents = [sluttiaGangbang1,sluttiaGangbang2,sluttiaCosplayFuck,sluttiaGreatjob,sluttiaBimboCheck,sluttiaMindCheck,sluttiaOrcSlut];
	let girlfriendIncidents = [girlCoffeeDate1,girlCoffeeDate2,girlBimboCheck,girlSkimpyCheck,girlSlutCheck];
	let gangbangIncidents = [gangbangStandard];
	let ehookingIncidents = [ehookingOral,ehookingSex,ehookingAnal,ehookingAbusive,ehookingRich,ehookingNoClient,ehookingMindCheck,ehookingLustCheck];
	let boothbabeIncidents = [boothbabeGreatJob,boothbabeMindCheck,boothbabeLustCheck,boothbabeBimboCheck,boothbabeGrope,boothbabeHarass,boothbabeHardSell];
	let gloryholeIncidents = [gloryholeBlowjob1,gloryholeBlowjob2];
	let punishmentIncidents = [punishGloryhole1,punishGloryhole2,punishFreeUse1,punishFreeUse2,punishEXBunny,punishVizLizMannequin];
	let storyIncidents = [storyHypernetAccess1,storyHypernetAccess2,storyMaidVernonEncounter1,storyMaidBugMission];
	
	let eventReceptionist = {
		name: "Receptionist",
		outfit: "receptionist",
		start: "<<include 'Receptionist - Start'>>",
		intro: receptionistIntro,
		incidents: [
			{
				name: 'Bimbo Check',
				passageText: '<<include "Receptionist - Bimbo Check">>',
				requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3}],
				options: [
				{
					buttonText: 'Continue',
					resultText: '<<include "Receptionist - Bimbo Check Continue">>',
					requirements: []
				}]
			},
			{
				name: 'Mind Check',
				passageText: '<<include "Receptionist - Mind Check">>',
				requirements: [{id: 'Mind', type: 'psyche-min', level: 3}],
				options: [
				{
					buttonText: 'Ow!',
					resultText: '<<include "Receptionist - Mind Check Continue">>',
					requirements: []
				}]
			},
			{
				name: 'Great Job (Social)',
				passageText: '<<include "Receptionist - Great Job (Social)">>',
				requirements: [{id: 'Mind', type: 'psyche-max', level: 2}],
				options: [
				{
					buttonText: 'Getting a little too close.',
					resultText: '<<include "Receptionist - Great Job (Social) Distance">>',
					requirements: []
				},
				{
					buttonText: 'Damn girl control those honkers.',
					resultText: '<<include "Receptionist - Great Job (Social) No Cock">>',
					requirements: [{id: 'Feminine', type: 'psyche-max', level: 3},{id: 'penis-size', type: 'stat-max', level: 1}]
				},
				{
					buttonText: 'Damn girl control those honkers.',
					resultText: '<<include "Receptionist - Great Job (Social) Have Cock">>',
					requirements: [{id: 'penis-size', type: 'stat-min', level: 1}]
				},
				{
					buttonText: 'Laugh it off.',
					resultText: '<<include "Receptionist - Great Job (Social) Laugh">>',
					requirements: []
				}]
			},
			{
				name: 'Groping',
				passageText: '<<include "Receptionist - Groping">>',
				requirements: [],
				options: [
				{
					buttonText: 'Tell him to fuck off.',
					resultText: '<<include "Receptionist - Groping Fuck Off">>',
					requirements: [{id: 'Feminine', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Endure and lead him towards the hotel.',
					resultText: '<<include "Receptionist - Groping Endure">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Hey! Not a miss here! Back off!',
					resultText: '<<include "Receptionist - Groping Masculine">>',
					requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Suggest you suck him off.',
					resultText: '<<include "Receptionist - Groping Slut">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Oooh my! Need suck now? I sucky!',
					resultText: '<<include "Receptionist - Groping Bimbo">>',
					requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Handle it professionally.',
					resultText: '<<include "Receptionist - Groping Social">>',
					requirements: [{id: 'Social', type: 'skill-min', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Be cool about it.',
					resultText: '<<include "Receptionist - Groping Cool">>',
					requirements: [{id: 'Cool', type: 'psyche-min', level: 1},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: '*drool*.......',
					resultText: '<<include "Receptionist - Groping Mind">>',
					requirements: [{id: 'Mind', type: 'psyche-min', level: 4}]
				}]
			},
			{
				name: 'Harassment',
				passageText: '<<include "Receptionist - Harassment">>',
				requirements: [],
				options: [
				{
					buttonText: 'Scream for help.',
					resultText: '<<include "Receptionist - Harassment Scream">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Stay silent.',
					resultText: '<<include "Receptionist - Harassment Silent">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 1},{id: 'Slut', type: 'psyche-max', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Go with it.',
					resultText: '<<include "Receptionist - Harassment Slut">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Let go.',
					resultText: '<<include "Receptionist - Harassment Bimbo">>',
					requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Uhm?',
					resultText: '<<include "Receptionist - Harassment Mind">>',
					requirements: [{id: 'Mind', type: 'psyche-min', level: 4}]
				},
				{
					buttonText: 'Attack them.',
					resultText: '<<include "Receptionist - Harassment Masculine">>',
					requirements: [{id: 'Feminine', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				}]
			},
			{
				name: 'Blowjob Offer',
				passageText: '<<include "Receptionist - Blowjob">>', 
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Accept the offer',
					resultText: '<<include "Receptionist - Blowjob Accept Offer">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 2}]
				},
				{
					buttonText: 'Decline the offer',
					resultText: '<<include "Receptionist - Blowjob Decline Offer">>',
					requirements: []
				},
				{
					buttonText: 'Freak out',
					resultText: '<<include "Receptionist - Blowjob Freak Out">>',
					requirements: [{id: 'Slut', type: 'psyche-max', level: 2}]
				}]
			},
			{
				name: 'Blowbang Event Scheduling',
				passageText: '<<include "Receptionist - Blowbang Schedule">>',
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Blowbang Schedule Continue">>',
					requirements: []
				}]
			},
			{
				name: 'Standard Event Scheduling',
				passageText: '<<include "Receptionist - Event Schedule">>',
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Event Schedule Continue">>',
					requirements: []
				}]
			},
			{
				name: 'Linus Event Scheduling',
				passageText: '<<include "Receptionist - Linus Schedule">>',
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Linus Schedule Continue">>',
					requirements: []
				}]
			},
			{
				name: 'Upskirt Photo',
				passageText: '<<include "Receptionist - Upskirt">>',
				requirements: [],
				options: [
				{
					buttonText: 'Chase the guy down.',
					resultText: '<<include "Receptionist - Upskirt Chase Failure">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'High Heels', type: 'skill-max', level: 2}]
				},
				{
					buttonText: 'Chase the guy down.',
					resultText: '<<include "Receptionist - Upskirt Success">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'High Heels', type: 'skill-min', level: 3}]
				},
				{
					buttonText: 'Ignore it.',
					resultText: '<<include "Receptionist - Upskirt Chase Ignore">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Lead him on.',
					resultText: '<<include "Receptionist - Upskirt Slutty">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Slut', type: 'psyche-min', level: 2}]
				},
				{
					buttonText: 'Entertain him.',
					resultText: '<<include "Receptionist - Upskirt Bimbo">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Bimbo', type: 'psyche-min', level: 2}]
				},
				{
					buttonText: 'Make them an offer.',
					resultText: '<<include "Receptionist - Upskirt Cool">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Cool', type: 'psyche-min', level: 2}]
				},
				{
					buttonText: 'It all becomes blank.',
					resultText: '<<include "Receptionist - Upskirt Mind">>',
					requirements: [{id: 'Mind', type: 'psyche-min', level: 4}]
				}]
			},
			{
				name: 'Skirt Promo',
				passageText: '<<include "Receptionist - Skirt Promo">>',
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Put on the short skirt.',
					resultText: '<<include "Receptionist - Skirt Promo Accept">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 1}]
				},
				{
					buttonText: 'Have some fun with it.',
					resultText: '<<include "Receptionist - Skirt Promo Cool">>',
					requirements: [{id: 'Cool', type: 'psyche-min', level: 1}]
				},
				{
					buttonText: 'Teehee!',
					resultText: '<<include "Receptionist - Skirt Promo Bimbo">>',
					requirements: [{id: 'Bimbo', type: 'psyche-min', level: 2}]
				},
				{
					buttonText: 'Refuse to put on the skirt.',
					resultText: '<<include "Receptionist - Skirt Promo Decline">>',
					requirements: [{id: 'Slut', type: 'psyche-max', level: 3}]
				}]
			},
			{
				name: 'Comic Convention',
				passageText: '<<include "Receptionist - Comic Convention">>',
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Comic Convention Standard">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Comic Convention Standard">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Comic Convention Standard">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Continue.',
					resultText: '<<include "Receptionist - Comic Convention Mind">>',
					requirements: [{id: 'Mind', type: 'psyche-min', level: 4}]
				}]
			},
			{
				name: 'Guidance',
				passageText: '<<include "Receptionist - Guidance">>', 
				requirements: [{id: 'Mind', type: 'psyche-max', level: 3}],
				options: [
				{
					buttonText: 'Give them directions.',
					resultText: '<<include "Receptionist - Guidance Guide">>',
					requirements: []
				},
				{
					buttonText: 'Have some fun with them.',
					resultText: '<<include "Receptionist - Guidance Misguide">>',
					requirements: []
				},
				{
					buttonText: 'Milk them for ratings.',
					resultText: '<<include "Receptionist - Guidance Cool">>',
					requirements: [{id: 'Cool', type: 'psyche-min', level: 2}]
				}]
			},
			{
				name: 'Pantie Purchase',
				passageText: '<<include "Receptionist - Pantie Purchase">>',
				requirements: [],
				options: [
				{
					buttonText: 'Hell no.',
					resultText: '<<include "Receptionist - Pantie Purchase Decline">>',
					requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Bimbo', type: 'psyche-max', level: 2}]
				},
				{
					buttonText: '100 Units.',
					resultText: '<<include "Receptionist - Pantie Purchase 100 Units">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 3},{id: 'Bimbo', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: '500 Units.',
					resultText: '<<include "Receptionist - Pantie Purchase 500 Units">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 2},{id: 'Bimbo', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: '1000 Units.',
					resultText: '<<include "Receptionist - Pantie Purchase 1000 Units">>',
					requirements: [{id: 'Slut', type: 'psyche-min', level: 1},{id: 'Bimbo', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Give them to him for free.',
					resultText: '<<include "Receptionist - Pantie Purchase Bimbo">>',
					requirements: [{id: 'Bimbo', type: 'psyche-min', level: 3},{id: 'Bimbo', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'Do a sales pitch.',
					resultText: '<<include "Receptionist - Pantie Purchase Cool">>',
					requirements: [{id: 'Cool', type: 'psyche-min', level: 1},{id: 'Bimbo', type: 'psyche-max', level: 2},{id: 'Mind', type: 'psyche-max', level: 3}]
				},
				{
					buttonText: 'UUUUUUUUUUUUUUUUUUUUUUUUH?',
					resultText: '<<include "Receptionist - Pantie Purchase Mind">>',
					requirements: [{id: 'Mind', type: 'psyche-min', level: 4}]
				}]
			},
			{
				name: 'Executive Meeting',
				passageText: '<<include "Receptionist - Executive Meeting">>',
				requirements: [],
				options: [
				{
					buttonText: 'Fuck you bro!',
					resultText: '<<include "Receptionist - Executive Meeting Freak Out">>',
					requirements: [{id: 'Feminine', type: 'psyche-max', level: 2}]
				},
				{
					buttonText: 'Sure, whatever.',
					resultText: '<<include "Receptionist - Executive Meeting Endure">>',
					requirements: []
				}]
			}
		],
		finish: "<<include 'Receptionist - Finish'>>"
	}
	let eventMaid = {
		name: "Maid",
		outfit: "maid",
		start: "<<include 'Maid - Start'>>",
		intro: maidIntro,
		incidents: maidIncidents,
		finish: "<<include 'Maid - Finish'>>"
	}
	let eventStripper = {
		name: "Stripper",
		outfit: "stripper",
		start: "<<include 'Stripper - Start'>>",
		intro: stripperIntro,
		incidents: stripperIncidents,
		finish: "<<include 'Stripper - Finish'>>"
	}
	let eventCarshow = {
		name: "Car Show Girl",
		outfit: "carshow",
		start: "<<include 'Car Show - Start'>>",
		intro: carshowIntro,
		incidents: carshowIncidents,
		finish: "<<include 'Car Show - Finish'>>"
	}
	let eventGloryhole = {
		name: "Gloryhole",
		outfit: "none",
		start: "<<include 'Gloryhole - Start'>>",
		intro: gloryholeIntro,
		incidents: gloryholeIncidents,
		finish: "<<include 'Gloryhole - Finish'>>"
	}
	let eventGirlfriend = {
		name: "Girlfriend",
		outfit: "none",
		start: "<<include 'Girlfriend - Start'>>",
		intro: girlfriendIntro,
		incidents: girlfriendIncidents,
		finish: "<<include 'Girlfriend - Finish'>>"
	}
	let eventSluttia = {
		name: "Sluttia",
		outfit: "none",
		start: "<<include 'Sluttia - Start'>>",
		intro: sluttiaIntro,
		incidents: sluttiaIncidents,
		finish: "<<include 'Sluttia - Finish'>>"
	}
	let eventGangbang = {
		name: "Gangbang",
		outfit: "gangbang",
		start: "<<include 'Gangbang - Start'>>",
		intro: gangbangIntro,
		incidents: gangbangIncidents,
		finish: "<<include 'Gangbang - Finish'>>"
	}
	let eventCindanar = {
		name: "Cindanar Booth Babe",
		outfit: "cindanar",
		start: "<<include 'Cindanar - Start'>>",
		intro: cindanarIntro,
		incidents: boothbabeIncidents,
		finish: "<<include 'Cindanar - Finish'>>"
	}
	let eventStains = {
		name: "Stains Booth Babe",
		outfit: "stains",
		start: "<<include 'Stains - Start'>>",
		intro: stainsIntro,
		incidents: boothbabeIncidents,
		finish: "<<include 'Stains - Finish'>>"
	}
	let eventeHooking = {
		name: "E-Hooking",
		outfit: "none",
		start: "<<include 'E-Hooking - Start'>>",
		intro: [{
			passageText: '<<include "E-Hooking - Start">><<run setup.story("Event-Girl-00", "complete")>>',
			buttonText: 'Continue.',
			next: '1'
		}],
		incidents: ehookingIncidents,
		finish: "<<include 'E-Hooking - Finish'>>"
	}
	let eventStory = {
		name: "Story",
		outfit: "none",
		incidents: storyIncidents
	}
	let eventPunishments = {
		name: "Punishments",
		outfit: "none",
		incidents: punishmentIncidents
	}
	
	let events = [eventReceptionist, eventMaid, eventStripper, eventCarshow, eventSluttia, eventCindanar, eventStains, eventGangbang, eventGirlfriend, eventeHooking, eventGloryhole, eventStory, eventPunishments];
	
	return events;
}

