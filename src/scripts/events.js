//Event System (Event Girl Only)
//v0.20
//Requires: event-incidents.js -loaded before
//by Sylen

setup.returnSkillValue = function (entity, skillName) {
	let skillFound = false;
	let returnValue = 0;
	for (let i = 0; i < entity.skills.length; i++) {
		if (entity.skills[i].name == skillName) {
			skillFound = true;
			let randomValue = setup.random(100);
			returnValue = entity.skills[i].level * randomValue;
		}
	}
	return returnValue;
}

setup.rollEvents = function (array) {
	for (let i = 0; i < array.length; i++) {
		array[i].roll = setup.random(100);
		console.log("Roll(" + array[i].name + "): " + array[i].roll + ".");
	}
}

setup.returnRoll = function (eventName, array) {
	let roll = 0;
	for (var i = 0; i < array.length; i++) {
		if (eventName == array[i].name) {
			roll = array[i].roll;
			break;
		}
	}
	return roll;
}

setup.loadEventDetails = function (entity) {
	let receptionistDetails = 'eVentia is always in need of more receptionists to receive clients, organize events on the venue and be the face of eVentia as a whole. You will be expected to work from 9:00 AM to 5:00 PM.<br><br>' + 
	'You will be expected to wear the eVentia standard receptionist attire, be competent enough to organize events/conferences on the venue or similar.<br><br>' + 
	'On top of this you will be the face of eVentia and therefore have to always be ready to greet, welcome and direct clients, patrons and customers.<br><br>' + 
	'You will be required to notify company personnel of visitor arrivals if needed.<br><<= setup.roaming($player, $characters, "opinion", "receptionist")>><br>' + 
	'@@.boldtext;Outfit:@@ Provided (May Vary).<br>@@.boldtext;Base Pay:@@ 115 (Bonus may be added).<br>@@.boldtext;Contractor:@@ eVentia.<br>' + 
	'@@.boldtext;Duration:@@ Morning to Evening.<br>@@.boldtext;Service Number:@@ S003452.<br>@@.boldtext;Type:@@ Recurring.<br>';
	let maidDetails = 'eVentia is always in need of more maids to clean up and keep eVentia neat and presentable. This includes all eVentia facilities, client rooms as well as venues, restrooms, baths and so on. You will be expected to work from 9:00 AM to 5:00 PM.<br><br>' + 
	'You will be expected to wear the eVentia standard maid attire. On top of this you will be the face of eVentia whilst cleaning, which includes doing it with a smile.<br><<= setup.roaming($player, "opinion", "maid")>><br>' + 
	'@@.boldtext;Outfit:@@ Provided (May Vary).<br>@@.boldtext;Base Pay:@@ 95 (Bonus may be added).<br>@@.boldtext;Contractor:@@ eVentia.<br>' + 
	'@@.boldtext;Duration:@@ Morning to Evening.<br>@@.boldtext;Service Number:@@ S003451.<br>@@.boldtext;Type:@@ Recurring.<br>';
	let stripperDetails = 'Gloria Girls is looking for a quick erotic dancer and stripper to fill in for some of our girls that had to call in sick.<br><br>' + 
	'You are required to be at least somewhat competent on a stage and willing to show partial nudity.<br><<= setup.roaming($player, $characters, "opinion", "stripper")>><br>' + 
	'@@.boldtext;Outfit:@@ Provided (May Vary).<br>@@.boldtext;Base Pay:@@ 250 (Bonus may be added).<br>@@.boldtext;Contractor:@@ Gloria Girls.<br>' + 
	'@@.boldtext;Duration:@@ Evening to Night.<br>@@.boldtext;Service Number:@@ S007081.<br>@@.boldtext;Type:@@ Recurring.<br>';
	let carshowDetails = 'Hot Stripes is looking for a hot body to complement their hot holo-vehicles. Put on a hot smile for a hot day of hot sales at Hot Stripes!<br><<= setup.roaming($player, $characters, "opinion", "hotstripes")>><br>' + 
	'@@.boldtext;Outfit:@@ Provided (May Vary).<br>@@.boldtext;Base Pay:@@ 800 (Bonus may be added).<br>@@.boldtext;Contractor:@@ Hot Stripes.<br>' + 
	'@@.boldtext;Duration:@@ Evening to Night.<br>@@.boldtext;Service Number:@@ S003452.<br>@@.boldtext;Type:@@ S027182.<br><br>' + 
	'@@.boldtext;Requirements:@@ Applicant must be able to deal with crowds of people and possess proficiency in very high high-heels.';
	let gloryholeDetails = 'Gloria Girls are always looking for more mouths to fill our booths and serve our eager line of pent-up customers!<br><<= setup.roaming($player, $characters, "opinion", "gloryhole")>><br>' + 
	'@@.boldtext;Outfit:@@ Any.<br>@@.boldtext;Base Pay:@@ 500.<br>@@.boldtext;Contractor:@@ Gloria Girls.<br>' + 
	'@@.boldtext;Duration:@@ Evening to Night.<br><br>' + 
	'@@.boldtext;Requirements:@@ Applicant must possess a mouth and two hands.';
	let girlfriendDetails = 'Dynamo Dating is looking for stand-in girls to be user fodder in an ever-growing business venture. Dynamo Dating guarantees a date with a hot young gal near your location' + 
	' and intends to honor that guarantee! You will become that guarantee at Dynamo Dating! All you need to do is to put on a convincing smile, dress like a cute or sexy gal and let the boys have a fun' +
	' time at Dynamo Dating!<br><<= setup.roaming($player, $characters, "opinion", "girlfriend")>><br>' + 
	'@@.boldtext;Outfit:@@ Going-out Style.<br>@@.boldtext;Base Pay:@@ 2000.<br>@@.boldtext;Contractor:@@ Dynamo Dating.<br>' + 
	'@@.boldtext;Duration:@@ Afternoon to Evening.<br><br>' + 
	'@@.boldtext;Requirements:@@ Applicant must bring their own convincing dating clothes.';
	let sluttiaDetails = 'Cum Comix is in a hasty need for another Sluttia stand-in at todays Comics Expo. Become the ultimate Barbarina that wrestles with lusty monsters and creatures of gargantuan sizes ' + 
	' in more places than one! Interact with the fans of this erotic fantasy opera and give in to their hungry needs for lightpics and holodecks.' +
	'<br><<= setup.roaming($player, $characters, "opinion", "sluttia")>><br>' + 
	'@@.boldtext;Outfit:@@ The official Sluttia cosplay set.<br>@@.boldtext;Base Pay:@@ 3000.<br>@@.boldtext;Contractor:@@ Cum Comix.<br>' + 
	'@@.boldtext;Duration:@@ Morning to Night.<br><br>' + 
	'@@.boldtext;Requirements:@@ Applicant must bring their own Sluttia cosplay set.';
	let gangbangDetails = 'Hey, it´s me, Vernon, I got myself another gig for you, lotsa guys and lotsa money to be made. The event will take place in the Gloria Halls. ' + 
	' Wear something nice for the lads eh, they like it that way.' +
	'<br><<= setup.roaming($player, $characters, "opinion", "gangbang")>><br>' + 
	'@@.boldtext;Outfit:@@ Promotion Top and Hotpants.<br>@@.boldtext;Base Pay:@@ 5000.<br>@@.boldtext;Contractor:@@ Vernon Venere.<br>' + 
	'@@.boldtext;Duration:@@ Morning to Night.<br><br>' + 
	'@@.boldtext;Requirements:@@ Promotion Top and Hotpants.';
	let cindanarDetails = 'Cindanar is doing another product display for our sportsgear and need a willing lass to grab the right kind of attention. ' + 
	' You will be provided with some Cindanar sportswear, that will properly show off our merchandise.' + 
	'@@.boldtext;Outfit:@@ Cindanar Sportswear.<br>@@.boldtext;Base Pay:@@ 1000.<br>@@.boldtext;Contractor:@@ Cindanar.<br>' + 
	'@@.boldtext;Duration:@@ Morning to Evening.<br><br>' + 
	'@@.boldtext;Requirements:@@ Cinadanar Sportswear.';
	let stainsDetails = 'Stains is doing another product display for our art gallery and need a willing body to grab the attention of our artisté clientele. ' + 
	' You will be provided with some respectful Stainswear, that will properly show off your canvas body.' + 
	'@@.boldtext;Outfit:@@ Stainswear.<br>@@.boldtext;Base Pay:@@ 2500.<br>@@.boldtext;Contractor:@@ Stains.<br>' + 
	'@@.boldtext;Duration:@@ Morning to Evening.<br><br>' + 
	'@@.boldtext;Requirements:@@ Stainswear.';
	
	
	let eventReceptionist = {
		name: 'Receptionist',
		eventName: 'eVentia Receptionist',
		description: 'Receive clients, organize events on the venue and be the face of eVentia as a whole.',
		contractor: 'eVentia',
		modifiers: ["eventia","standard","pod"],
		details: receptionistDetails,
		rate: 101,
		baseReward: 115,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Social"),
		timeStart: 0,
		timeEnd: 2,
		timeInfo: 'This event must be done during the @@.boldtext;Morning@@.',
		reqInfo: '',
		requirements: [],
		clothingInfo: '',
		clothingReqs: []
		}
	let eventMaid = {
		name: 'Maid',
		eventName: 'eVentia Maid',
		description: 'eVentia is always in need of more maids to clean up and keep eVentia neat and presentable.',
		contractor: 'eVentia',
		modifiers: ["eventia","standard","pod"],
		details: maidDetails,
		rate: 101,
		baseReward: 95,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Cleaning"),
		timeStart: 0,
		timeEnd: 2,
		timeInfo: 'This event must be done during the @@.boldtext;Morning@@.',
		reqInfo: '',
		requirements: [],
		clothingInfo: '',
		clothingReqs: []
		}
	let eventStripper = {
		name: 'Stripper',
		eventName: 'Gloria Girls Stripper',
		description: 'A quick erotic dancer and stripper is needed to fill in for some of our girls that had to call in sick.',
		contractor: 'Gloria Girls',
		modifiers: ["eventia","standard","pod"],
		details: stripperDetails,
		rate: 101,
		baseReward: 250,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Dancing"),
		timeStart: 2,
		timeEnd: 3,
		timeInfo: 'This event must be done during the @@.boldtext;Evening@@.',
		reqInfo: 'You definitely don\'t feel ready for this one.<br>' + '<<= setup.speak($player, "Yeah, I\'m definitely not going to do that.")>>' + '<br>Requires: Mind (max: 3), Slutty (min: 1).',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Slut', type: 'psyche-min', level: 1}],
		clothingInfo: '',
		clothingReqs: []
		}
	let eventCarshow = {
		name: 'Car Show Girl',
		eventName: 'Car Show Girl',
		description: 'A hot body to present the new hot line of Hot Stripes Holo-Vehicles is needed.',
		contractor: 'Hot Stripes',
		modifiers: ["eventia","pod"],
		details: carshowDetails,
		rate: 50,
		baseReward: 800,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Social"),
		timeStart: 2,
		timeEnd: 3,
		timeInfo: 'This event must be done during the @@.boldtext;Evening@@.',
		reqInfo: 'You definitely don\'t feel ready for this one.<br>' + '<<= setup.speak($player, "Yeah, I\'m definitely not going to do that.")>>' + '<br>Requires: Mind (max: 3), Slutty (min: 1).',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Slut', type: 'psyche-min', level: 1}],
		clothingInfo: '',
		clothingReqs: []
		}
	let eventGloryhole = {
		name: 'Gloryhole',
		eventName: 'Gloria Girls Gloryhole',
		description: 'A new lush mouth is always needed to suck cock at the Gloria Girls Gloryhole booths.',
		contractor: 'Gloria Girls',
		modifiers: ["gloryhole","pod"],
		details: gloryholeDetails,
		rate: 100,
		baseReward: 500,
		skillBonus: setup.returnSkillValue(entity, "Blowjob") + setup.returnSkillValue(entity, "Handjob"),
		timeStart: 2,
		timeEnd: 3,
		timeInfo: 'This event must be done during the @@.boldtext;Evening@@.',
		reqInfo: 'You definitely don\'t feel ready for this one.<br>' + '<<= setup.speak($player, "Yeah, I\'m definitely not going to do that.")>>' + '<br>Requires: Mind (max: 3), Slutty (min: 2).',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Slut', type: 'psyche-min', level: 2}],
		clothingInfo: '',
		clothingReqs: []
		}
	let eventGirlfriend = {
		name: 'Girlfriend',
		eventName: 'Girlfriend Experience',
		description: 'Make the world a better place and become a dating stand-in at Dynamo Dating today.',
		contractor: 'Dynamo Dating',
		modifiers: ["eventia","pod"],
		details: girlfriendDetails,
		rate: 50,
		baseReward: 2000,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Social"),
		timeStart: 1,
		timeEnd: 2,
		timeInfo: 'This event must be done during the @@.boldtext;Afternoon@@.',
		reqInfo: 'You don\'t feel ready for this one.<br>' + '<<= setup.speak($player, "I\'m not a fucking girl, no way I\'m dating other dudes.")>>' + '<br>Requires: Mind (max: 2), Feminine (min: 2).',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Feminine', type: 'psyche-min', level: 2}],
		clothingInfo: 'You\'re not wearing the right clothes for that.<br>' + '<<= setup.speak($player, "Yeah I should probably wear something appropiate for that first.")>>' + 
		'<br>Requires: Wearing the required clothes.',
		clothingReqs: [{id: 'going-out', type: 'score-min', level: 2}]
		}
	let eventSluttia = {
		name: 'Sluttia',
		eventName: 'Sluttia Expo',
		description: 'Become Sluttia, the busty barbarina that fights (and sometimes loses to) lusty monsters.',
		contractor: 'Cum Comix',
		modifiers: ["eventia","pod"],
		details: sluttiaDetails,
		rate: 50,
		baseReward: 3000,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Social"),
		timeStart: 0,
		timeEnd: 4,
		timeInfo: 'This event must be done during the @@.boldtext;Morning@@.',
		reqInfo: 'You don\'t feel ready for this one.<br>' + '<<= setup.speak($player, "Fuck. No.")>>' + '<br>Requires: Mind (max: 3), Bimbo (min: 1).',
		requirements: [{id: 'Mind', type: 'psyche-max', level: 3},{id: 'Bimbo', type: 'psyche-min', level: 1}],
		clothingInfo: 'You don´t own the right clothes for that.<br>' + '<<= setup.speak($player, "Gotta go shopping first... a Sluttia Cosplay costume? Hmph, maybe the Event Girl Shop has it?")>>' + 
		'<br>Requires: Owning the Sluttia Outfit.',
		clothingReqs: [{id: 'Sluttia Armor', type: 'owned'},{id: 'Sluttia Loin Cloth', type: 'owned'},{id: 'Barbarian Greaves', type: 'owned'}]
		}
	let eventGangbang = {
		name: 'Gangbang',
		eventName: 'Gloria Gangbang',
		description: 'You are the star girl, you can do this! All you gotta do is hang in there!',
		contractor: 'Vernon Venere',
		modifiers: ["pod"],
		details: gangbangDetails,
		rate: 100,
		baseReward: 5000,
		skillBonus: setup.returnSkillValue(entity, "Sex") + setup.returnSkillValue(entity, "Anal") + setup.returnSkillValue(entity, "Oral"),
		timeStart: 0,
		timeEnd: 4,
		timeInfo: 'This event must be done during the @@.boldtext;Morning@@.',
		reqInfo: 'You don\'t feel ready for this one.<br>' + '<<= setup.speak($player, "I just can´t do it... not yet. Maybe Dr. Linus can help me with some therapy first?")>>' + '<br>Requires:  Slut (min: 3).',
		requirements: [{id: 'Slut', type: 'psyche-min', level: 3}],
		clothingInfo: 'You don´t own the right clothes for that.<br>' + '<<= setup.speak($player, "Gotta go shopping first... a proper outfit to... promote myself? Hmph, maybe the Event Girl Shop has it?")>>' + 
		'<br>Requires: Owning the Promotion Top and Hotpants.',
		clothingReqs: [{id: 'Promotion Top', type: 'owned'},{id: 'Promo Hot Pants', type: 'owned'}]
		}
	let eventCBoothBabe = {
		name: 'Cindanar Booth Babe',
		eventName: 'Cindanar Booth Babe',
		description: 'Cindanar is looking for a hot young woman to be the body of our venue.',
		contractor: 'Cindanar',
		modifiers: ["eventia","pod"],
		details: cindanarDetails,
		rate: 50,
		baseReward: 1000,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Social"),
		timeStart: 0,
		timeEnd: 3,
		timeInfo: 'This event must be done during the @@.boldtext;Morning@@.',
		reqInfo: '',
		requirements: [],
		clothingInfo: '',
		clothingReqs: []
		}
	let eventSBoothBabe = {
		name: 'Stains Booth Babe',
		eventName: 'Stains Booth Babe',
		description: 'Stains is looking for a party gal to loosen things up for our venue.',
		contractor: 'Stains',
		modifiers: ["eventia","pod"],
		details: stainsDetails,
		rate: 50,
		baseReward: 2500,
		skillBonus: setup.returnSkillValue(entity, "High Heels") + setup.returnSkillValue(entity, "Social"),
		timeStart: 0,
		timeEnd: 3,
		timeInfo: 'This event must be done during the @@.boldtext;Morning@@.',
		reqInfo: '',
		requirements: [],
		clothingInfo: '',
		clothingReqs: []
		}
	let events = [eventReceptionist, eventMaid, eventStripper, eventCarshow, eventGloryhole, eventGirlfriend, eventSluttia, eventGangbang, eventCBoothBabe, eventSBoothBabe];
	return events;
}

setup.displayEvents = function (entity, time, type) {
	let events = setup.loadEventDetails(entity);
	let input = "@@#inputtext;@@";
	let eventsReturn = "";
	//let rolls = SugarCube.State.variables.eventStats;
	for (let i = 0; i < events.length; i++) {
		console.log("Loaded Event: " + events[i].name + ".");
		if (events[i].modifiers.includes(type)) {
			let rollEvent = setup.returnRoll(events[i].name, SugarCube.State.variables.eventStats);
			console.log("Loaded Event(Roll:" + rollEvent + "/" + events[i].rate + "): " + events[i].name + ".");
			if (rollEvent < events[i].rate) {
				let requirements = events[i].requirements;
				let check = setup.checkReq(requirements, entity);
				if (check == false) {
					eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
					"<br><span class='lbb'><<button 'Apply'>><<replace '#inputtext'>>" + events[i].reqInfo + "<</replace>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
					"'>><<EventDetails>><</button>></span></div></div>";
				} else {
					let clothingReqs = events[i].clothingReqs;
					let clothCheck = setup.checkReq(clothingReqs, entity);
					if (clothCheck == false) {
						eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
						"<br><span class='lbb'><<button 'Apply'>><<replace '#inputtext'>>" + events[i].clothingInfo + "<</replace>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
						"'>><<EventDetails>><</button>></span></div></div>";
					} else {
						if (time.currentDayTime != events[i].timeStart) {
							eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
							"<br><span class='lbb'><<button 'Apply'>><<replace '#inputtext'>>" + events[i].timeInfo + "<</replace>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
							"'>><<EventDetails>><</button>></span></div></div>";
						} else {
							let timesDone = setup.checkDone(events[i].name, SugarCube.State.variables.eventStats);
							if (timesDone <= 0) {
								//First time doing event
								console.log(events[i].name + ", first time...");
								eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
								"<br><span class='lbb'><<button 'Apply'>><<set $event.stage = 'intro'>><<set $event.current = '" + events[i].name + "'>><<set $event.scene = 0>><<goto 'Event - Start'>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
								"'>><<EventDetails>><</button>></span></div></div>";
							} else {
								//Regular event fire
								eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
								"<br><span class='lbb'><<button 'Apply'>><<set $event.stage = 'main'>><<set $event.current = '" + events[i].name + "'>><<set $event.scene = 0>><<goto 'Event - Start'>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
								"'>><<EventDetails>><</button>></span></div></div>";
							}
						}
					}
				}
			}
		}
	}
	return input + "<br>" + eventsReturn;
}

setup.establishedEvents = function (entity, time) {
	let events = setup.loadEventDetails(entity);
	let input = "@@#inputtext;@@";
	let eventsReturn = "";
	console.log("Started Loading...");
	for (let i = 0; i < events.length; i++) {
		if (events[i].modifiers.includes("pod") && SugarCube.State.variables.event.done.includes(events[i].name)) {
			let rollEvent = setup.returnRoll(events[i].name, SugarCube.State.variables.eventStats);
			console.log("Loaded Event(Roll:" + rollEvent + "/" + events[i].rate + "): " + events[i].name + ".");
			if (rollEvent < events[i].rate) {
				let requirements = events[i].requirements;
				let check = setup.checkReq(requirements, entity);
				if (check == false) {
					eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
					"<br><span class='lbb'><<button 'Apply'>><<replace '#inputtext'>>" + events[i].reqInfo + "<</replace>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
					"'>><<EventDetails>><</button>></span></div></div>";
				} else {
					let clothingReqs = events[i].clothingReqs;
					let clothCheck = setup.checkReq(clothingReqs, entity);
					if (clothCheck == false) {
						eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
						"<br><span class='lbb'><<button 'Apply'>><<replace '#inputtext'>>" + events[i].clothingInfo + "<</replace>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
						"'>><<EventDetails>><</button>></span></div></div>";
					} else {
						if (time.currentDayTime != events[i].timeStart) {
							eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
							"<br><span class='lbb'><<button 'Apply'>><<replace '#inputtext'>>" + events[i].timeInfo + "<</replace>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
							"'>><<EventDetails>><</button>></span></div></div>";
						} else {
							let timesDone = setup.checkDone(events[i].name, SugarCube.State.variables.eventStats);
							if (timesDone <= 0) {
								//First time doing event
								console.log(events[i].name + ", first time...");
								eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
								"<br><span class='lbb'><<button 'Apply'>><<set $event.stage = 'intro'>><<set $event.current = '" + events[i].name + "'>><<set $event.scene = 0>><<goto 'Event - Start'>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
								"'>><<EventDetails>><</button>></span></div></div>";
							} else {
								//Regular event fire
								eventsReturn = eventsReturn + "<div class='default-container'><div>@@.boldtext;" + events[i].name + "@@<br>" + events[i].description + "<br>Base Pay: " + events[i].baseReward + 
								"<br><span class='lbb'><<button 'Apply'>><<set $event.stage = 'main'>><<set $event.current = '" + events[i].name + "'>><<set $event.scene = 0>><<goto 'Event - Start'>><</button>></span><br><span class='lbb'><<button 'More Info'>><<set $event.loadedDetails = '" + events[i].details + 
								"'>><<EventDetails>><</button>></span></div></div>";
							}
						}
					}
				}
			}	
		} else {
			console.log("Not done yet.");
		}
	}
	return input + "<br>" + eventsReturn;
}

setup.getEvents = async _ => {
	console.log('Start')
	setup.establishedEvents(SugarCube.State.variables.player, SugarCube.State.variables.time)
	console.log('End')
}

setup.displayEventDetails = function (eventDetails) {
	return eventDetails;
}

//////Checks if the Event has been done//////
setup.checkDone = function (eventName, doneList) {
	let doneAmount = 0;
	for (let i = 0; i < doneList.length; i++) {
		if (doneList[i].name == eventName) {
			doneAmount = doneList[i].done;
			console.log(doneList[i].name + ", has been done: " + doneList[i].done); 
		}
	}
	return doneAmount;
}
//////Calculates the amount the player has earned after an event//////////
setup.earningsEvent = function (earnEvent, player) {
	let events = setup.loadEventDetails(player);
	let returnEarnings = "";
	var eventFound = false;
	let eventName = earnEvent;
	for (let i = 0; i < events.length; i++) {
		if (events[i].name == earnEvent) {
			let earningsStandard = events[i].baseReward;
			let earningsBonus = player.bonus;
			let earningsRating = player.eRating;
			let earningsSkill = events[i].skillBonus;
			let earnings = earningsStandard + earningsBonus + earningsRating + earningsSkill;
			returnEarnings = returnEarnings + "<br>Base: " + earningsStandard;
			returnEarnings = returnEarnings + "<br>Bonus: " + earningsBonus;
			returnEarnings = returnEarnings + "<br>Skill: " + earningsSkill;
			returnEarnings = returnEarnings + "<br>Rating: " + earningsRating;
			returnEarnings = returnEarnings + "<br>_____________________________<br><br><span class='bold'>Total Earnings: " + earnings + "</span>";
			player.units += earnings;
			setup.setDayTime(events[i].timeEnd);
			eventFound = true;
			break;
		}
	}
	if (eventFound = false) {
		console.log("Earnings Error: No Event was found.");
	}
	setup.eventDone(eventName, 1);
	player.bonus = 0;
	setup.logNote("Earnings", returnEarnings);
}
//////To record the amount of times an event has been done, also used for quest events//////
setup.eventDone = function (eventName, amount) {
	for (let i = 0; i < SugarCube.State.variables.eventStats.length; i++) {
		if (SugarCube.State.variables.eventStats[i].name == eventName) {
			SugarCube.State.variables.eventStats[i].done += amount;
			if (SugarCube.State.variables.event.done.includes(eventName)) {
			} else {
				SugarCube.State.variables.event.done.push(eventName);
			}
			break;
		}
	}
}

setup.eventStart = function (initEvent, stage, page) {
	let events = setup.loadEvents();
	let returnStart = "Error: No start was found.";
	console.log("Event Fire(" + initEvent + ", " + stage + ", " + page + ")...");
	if (stage == "intro") {
		for (var start = 0; start < events.length; start++) {
			if (initEvent == events[start].name) {
				if (page >= events[start].intro.length) {
					console.log("Event: Start completed.");
					returnStart = "<<= setup.eventMain('" + initEvent + "', 'main', $player)>>";
					break;
				} else {
					returnStart = events[start].intro[page].passageText + "<br><span class='lbb'><<button '" + events[start].intro[page].buttonText + "'>><<set $event.scene = " + events[start].intro[page].next + ">><<goto 'Event - Start'>><</button>></span>";
					break;
				}
			}
		}
	} else {
		console.log("Event Intro(" + initEvent + ", " + stage + ", " + page + "): Done.");
		for (var start = 0; start < events.length; start++) {
			if (initEvent == events[start].name) {
				returnStart = events[start].start + "<br><span class='lbb'><<button 'Continue'>><<goto 'Event - Main'>><</button>></span>";
				break;
			}
		}
	}
	return returnStart;
}

setup.eventFinish = function (completeEvent, passage) {
	let events = setup.loadEvents();
	let returnFinish = "Error: No ending was found.";
	for (var finish = 0; finish < events.length; finish++) {
		if (completeEvent == events[finish].name) {
			returnFinish = events[finish].finish + "<br><span class='lbb'><<button 'Continue'>><<goto '" + passage + "'>><</button>></span>";
			break;
		} else {
			console.log("Event Error: Event was not found.");
			returnFinish = "An error has occurred as no ending was found for this event, or no event matched the id. Please report this.<br><br>You may still continue playing however." + 
			"<br><br><<button 'Return to pod'>><<goto 'Pod - Main'>><</button>>";
		}
	}
	return returnFinish;
}

setup.eventMain = function (initEvent, stage, player) {
	console.log("Firing Event(init:" + initEvent + ", stage:" + stage + ")...");
	let eventIncidents = setup.loadEvents();
	let outcome = "@@#outcometext;@@";
	let options = "";
	let returnEvent = "Error: No incident was found.";
	let storyFound = false;
	let punishmentFound = false;
	//Roll for chance at story event
	let storyRoll = 100;
	if (player.modifiers.includes("Unlucky")) {
		storyRoll = setup.random(100);
	}
	console.log("Story Roll: " + storyRoll);
	if (storyRoll <= 25 && stage != "punishment" && stage != "debug") {
		stage = "story";
		console.log("Stage was set to Story.");
	}
	switch(stage) {
		case "punishment": 
		for (let i = 0; i < eventIncidents.length; i++) {
			if (eventIncidents[i].name == "Punishments") {
				setup.shuffle(eventIncidents[i].incidents);
				for (let n = 0; n < eventIncidents[i].incidents.length; n++) {
					console.log("Incident(" + eventIncidents[i].incidents[n].name + "), checking requirements...");
					let incReq = eventIncidents[i].incidents[n].requirements;
					let check = setup.checkReq(incReq, player);
					if (check == true) {
						returnEvent = eventIncidents[i].incidents[n].passageText;
						console.log("Incident(" + eventIncidents[i].incidents[n].name + "): Pass.");
						//SugarCube.State.variables.event.storyCompleted.push(eventIncidents[i].incidents[n].name);
						punishmentFound = true;
						for (let k = 0; k < eventIncidents[i].incidents[n].options.length; k++) {
							if (eventIncidents[i].incidents[n].options[k].requirements.length == 0) {
								//console.log("Option (No check required): " + eventIncidents[i].incidents[n].options[k].buttonText);
								options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[n].options[k].buttonText + "'>><<replace '#outcometext'>>" + eventIncidents[i].incidents[n].options[k].resultText + "<</replace>><</button>></span><br>";
							} else {
								let requirements = eventIncidents[i].incidents[n].options[k].requirements;
								//console.log("----------------------------------------------------");
								//console.log("Option (Checking requirements...): " + eventIncidents[i].incidents[n].options[k].buttonText);
								//console.log("----------------------------------------------------");
								check = setup.checkReq(requirements, player);
								if (check == true) {
									options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[n].options[k].buttonText + "'>><<replace '#outcometext'>>" + eventIncidents[i].incidents[n].options[k].resultText + "<</replace>><</button>></span><br>";
								}
							}
						}
						break;
					} else {
						console.log("Incident(" + eventIncidents[i].incidents[n].name + "): Fail.");
					}
				}
			}
		}
		if (punishmentFound == false) {
			stage = "main";
		} else {
			console.log("BREAK on punishment.");
			break;
		}
		case "debug": 
		console.log("Case: Debug.");
		for (let i = 0; i < eventIncidents.length; i++) {
			if (initEvent == eventIncidents[i].name) {
				let incident = SugarCube.State.variables.event.debugIncident;
				console.log("Debugging Incident: " + incident);
				returnEvent = eventIncidents[i].incidents[incident].passageText;
				for (let k = 0; k < eventIncidents[i].incidents[incident].options.length; k++) {
					if (eventIncidents[i].incidents[incident].options[k].requirements.length == 0) {
						options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[incident].options[k].buttonText + 
						"'>><<replace '#outcometext'>>" + eventIncidents[i].incidents[incident].options[k].resultText + "<</replace>><</button>></span><br>";
					} else {
						let requirements = eventIncidents[i].incidents[incident].options[k].requirements;
						let check = setup.checkReq(requirements, player);
						if (check == true) {
							options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[incident].options[k].buttonText + 
							"'>><<replace '#outcometext'>>" + eventIncidents[i].incidents[incident].options[k].resultText + "<</replace>><</button>></span><br>";
						}
					}
				}
				break;
			}	
		}
		break;
		case "story": 
		for (let i = 0; i < eventIncidents.length; i++) {
			if (eventIncidents[i].name == "Story") {
				setup.shuffle(eventIncidents[i].incidents);
				for (let n = 0; n < eventIncidents[i].incidents.length; n++) {
					if (eventIncidents[i].incidents[n].modifiers.includes(initEvent)) {
						if (SugarCube.State.variables.event.storyCompleted.includes(eventIncidents[i].incidents[n].name)) {
							console.log(eventIncidents[i].incidents[n].name + ": Already Completed.");
						} else {
							console.log("Incident(" + eventIncidents[i].incidents[n].name + "), checking requirements...");
							let incReq = eventIncidents[i].incidents[n].requirements;
							let check = setup.checkReq(incReq, player);
							if (check == true) {
								returnEvent = eventIncidents[i].incidents[n].passageText;
								console.log("Incident(" + eventIncidents[i].incidents[n].name + "): Pass.");
								//SugarCube.State.variables.event.storyCompleted.push(eventIncidents[i].incidents[n].name);
								storyFound = true;
								for (let k = 0; k < eventIncidents[i].incidents[n].options.length; k++) {
									if (eventIncidents[i].incidents[n].options[k].requirements.length == 0) {
										//console.log("Option (No check required): " + eventIncidents[i].incidents[n].options[k].buttonText);
										options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[n].options[k].buttonText + "'>><<replace '#outcometext'>>" + eventIncidents[i].incidents[n].options[k].resultText + "<</replace>><</button>></span><br>";
									} else {
										let requirements = eventIncidents[i].incidents[n].options[k].requirements;
										//console.log("----------------------------------------------------");
										//console.log("Option (Checking requirements...): " + eventIncidents[i].incidents[n].options[k].buttonText);
										//console.log("----------------------------------------------------");
										check = setup.checkReq(requirements, player);
										if (check == true) {
											options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[n].options[k].buttonText + "'>><<replace '#outcometext'>>" + eventIncidents[i].incidents[n].options[k].resultText + "<</replace>><</button>></span><br>";
										}
									}
								}
								break;
							} else {
								console.log("Incident(" + eventIncidents[i].incidents[n].name + "): Fail.");
							}
						}
					}
				}
			}
		}
		if (storyFound == false) {
			console.log("No story found on story roll, setting to main.");
			stage = "main";
		} else {
			break;
		}
		default:
		for (let i = 0; i < eventIncidents.length; i++) {
			if (initEvent == eventIncidents[i].name) {
				setup.shuffle(eventIncidents[i].incidents);
				for (let n = 0; n < eventIncidents[i].incidents.length; n++) {
					console.log("Incident(" + eventIncidents[i].incidents[n].name + "), checking requirements...");
					let incReq = eventIncidents[i].incidents[n].requirements;
					let check = setup.checkReq(incReq, player);
					if (check == true) {
						returnEvent = eventIncidents[i].incidents[n].passageText;
						console.log("Incident(" + eventIncidents[i].incidents[n].name + "): Pass.");
						for (let k = 0; k < eventIncidents[i].incidents[n].options.length; k++) {
							if (eventIncidents[i].incidents[n].options[k].requirements.length == 0) {
								console.log("Option (No check required): " + eventIncidents[i].incidents[n].options[k].buttonText);
								options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[n].options[k].buttonText + "'>><<replace '#outcometext'>>" + 
								eventIncidents[i].incidents[n].options[k].resultText + "<</replace>><</button>></span><br>";
							} else {
								let requirements = eventIncidents[i].incidents[n].options[k].requirements;
								console.log("----------------------------------------------------");
								console.log("Option (Checking requirements...): " + eventIncidents[i].incidents[n].options[k].buttonText);
								console.log("----------------------------------------------------");
								let check = setup.checkReq(requirements, player);
								if (check == true) {
									options = options + "<span class='lbb'><<button '" + eventIncidents[i].incidents[n].options[k].buttonText + "'>><<replace '#outcometext'>>" + 
									eventIncidents[i].incidents[n].options[k].resultText + "<</replace>><</button>></span><br>";
								}
							}
						}
						break;
					} else {
						console.log("Incident(" + eventIncidents[i].incidents[n].name + "): Fail.");
					}
				}
			}
		}
		break;
	}
	return returnEvent + "<span id='outcometext'><br>" + options + "</span>";
}

setup.stripEvent = function (entity, flavorText) {
	let stripperText = "<span class='lbb'><<button 'Swing around the pole'>><<replace '#strippertext-" + entity.clothes.length + "'>>You swing around the pole.<<= setup.stripEvent($player)>><</replace>><</button>></span><br>";
	let snippet = "";
	console.log("Stripping(" + entity.name + ")...");
	if (flavorText == undefined) {
		flavorText = "";
	}
	for (let i = 0; i < entity.clothes.length; i++) {
		switch(entity.clothes[i].type) {
			case "top": 
				snippet = "You strut towards the edge of the stage, swaying your hips and a lusty smile on your lips. You begin to undo your top, winking at the audience." + 
				"<br><br>After untieing it you tease the crowd with a quick flash, turning around giving all sides a small peek. Then finally you take it off and drop it with a light seductive chuckle.<br><br>" + 
				"You strut back towards the pole, leaning against it, popping your chest giving everyone a good long look at your newly exposed tits.<br>";
				stripperText = stripperText + "<span class='lbb'><<button 'Lose the top.'>><<replace '#strippertext-" + entity.clothes.length + "'>><<= setup.unwear($player, 'top')>><<= setup.stripEvent($player, '" + snippet + "')>>" +
				"<<replace '#story-caption'>><<display 'StoryCaption'>><</replace>><</replace>><</button>></span><br>";
				break;
			case "bottom": 
				snippet = "You flick your ass back, arching your hips and sway them side to side, before lifting it slightly flashing your groin." + 
				"<br><br>Walking towards the stage you clutch your pussy and moan, before getting down on your knees and lying on your back. You lift your legs and feet straight into the air and slowly wiggle your skirt off, completely exposing your ass.<br><br>" + 
				"The fabric lightly caresses your loins and thighs as it slowly slides off. As you finally get it past your pumps, you toss it into the crowd.<br>";
				stripperText = stripperText + "<span class='lbb'><<button 'Take off your skirt.'>><<replace '#strippertext-" + entity.clothes.length + "'>><<= setup.unwear($player, 'bottom')>><<= setup.stripEvent($player, '" + snippet + "')>>" +
				"<<replace '#story-caption'>><<display 'StoryCaption'>><</replace>><</replace>><</button>></span><br>";
				break;
			case "feet": 
				snippet = "You bend over with your knees stretched, showing off your ass to everyone. Then you lightly strap off your heels, loosening them, readying them to be taken of." + 
				"<br><br>Bending your back you slowly return to your standing pose, licking your lips and playing with the crowd.<br><br>" + 
				"First flicking your left foot, then your right, your heels are thrown to the edge of the stage.<br>";
				stripperText = stripperText + "<span class='lbb'><<button 'Flick your heels.'>><<replace '#strippertext-" + entity.clothes.length + "'>><<= setup.unwear($player, 'feet')>><<= setup.stripEvent($player, '" + snippet + "')>>" +
				"<<replace '#story-caption'>><<display 'StoryCaption'>><</replace>><</replace>><</button>></span><br>";
				break;
			case "pantie":
				snippet = "You shake your ass for the crowd with a seductive smile and a light chuckle, then rub your pussy through the thin fabric of your g-string. Walking towards the end of the stage you smack your ass playfully and wink at the audience." + 
				"<br><br>You tuck your thumbs underneath the thin string and pull, flashing your pussy to the cheering crowd.<br><br>" + 
				"Putting your legs together you wiggle your ass and let go of the string. The g-string lands on your feet, completely exposing your cunt. You put one foot to the side and flick your other sending the string into the crowd.<br>";
				stripperText = stripperText + "<span class='lbb'><<button 'Drop your panties.'>><<replace '#strippertext-" + entity.clothes.length + "'>><<= setup.unwear($player, 'pantie')>><<= setup.stripEvent($player, '" + snippet + "')>>" +
				"<<replace '#story-caption'>><<display 'StoryCaption'>><</replace>><</replace>><</button>></span><br>";
				break;
			default:
				snippet = "You take off your " + entity.clothes[i].type + " and toss it unto the cheering crowd.<br>";
				stripperText = stripperText + "<span class='lbb'><<button 'Take off your " + entity.clothes[i].type + ".'>><<replace '#strippertext-" + entity.clothes.length + "'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>><<= setup.stripEvent($player, '" + snippet + "')>>" +
				"<<replace '#story-caption'>><<display 'StoryCaption'>><</replace>><</replace>><</button>></span><br>";
				break;
		}
	}
	if (entity.clothes.length == 0) {
		console.log("Stripping done...");
		stripperText = "<span class='lbb'><<button 'Continue'>><<replace '#event-main'>><<= setup.eventFinish('Stripper', 'Pod - Main')>><</replace>><</button>></span>";
	}
	return flavorText + "<br><span id='strippertext-" + entity.clothes.length + "'>" + stripperText + "</span>";
}

setup.eventText = function (snippet, effect) {
	if (effect == "italics") {
		return "<br><span class='italics'>" + snippet + "</span><br>";
	} else {
		return "<br>" + snippet + "<br>";
	}
};





