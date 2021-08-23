//Debug
//v1.0
//By Sylen

var debug = [
	{
		id: "Main",
		shown: 0,
		options: ['[[Refresh|Debug - Menu]]','[[Masturbation][$passage = "Debug - Menu"]]','[[Meditation][$passage = "Debug - Menu"]]','[[Sleep][$passage = "Debug - Menu"]]',
		'[[Advance Day|Debug - Menu][$time.currentDayTime = 4]]','[[Advance Time|Debug - Menu][$time.currentDayTime += 1]]','Get Cash: <<= setup.displayUnits($player)>> - [[Get Units|Debug - Menu][$player.units += 10000]]','Get Debt: $player.debt (Refresh) - [[Get Debt|Debug - Menu][$player.debt += 10000]]','Set Name: <<link "Press Me">><<SetName>><</link>>',
		'Print Scores (to console): <<link "Press Me">><<= setup.printScores($player)>><</link>>',
		'Simulate Fresh Start(The Unlucky Fella): <<link "Press Me">><<set $settings.introMode to false>><<run setup.story("Event-Girl-01", "start")>><<run setup.story("Debt-00", "start")>><</link>> - @@.red;Allows you to gain the starting quests if you entered the debug console straight away.@@',
		'Body Morphing: <<link "Press Me">><<BodyMorph>><</link>><<if $player.body.torso.bodyType == 1>> - @@.red;Playing the game with the male bodytype WILL break the game. Genderbending to female is advised.@@<</if>>',
		'Stash Outfit: <<link "Press Me">><<set $stashedOutfit = setup.stashOutfit($player)>><</link>>','Wear Stashed Outfit: <<link "Press Me">><<= setup.equipOutfit($player, "stashedOutfit", "nostash")>><</link>>',
		'Get All Clothes: <<link "Enter">><<= setup.debugGetClothes()>><</link>>']
	},
	{
		id: "Locations",
		shown: 0,
		options: ['<span class="lbb"><<button "Pod - Main">><<goto "Pod - Main">>"<</button>></span>',
		'<span class="lbb"><<button "Pod - Wardrobe">><<goto "Pod - Wardrobe">>"<</button>></span>',
		'<span class="lbb"><<button "Pod - Reflection">><<goto "Reflection">>"<</button>></span>',
		'<span class="lbb"><<button "eVentia - Lobby & Foyer">><<goto "eVentia - Lobby & Foyer">>"<</button>></span>',
		'<span class="lbb"><<button "eVentia - Commercial Strip">><<goto "eVentia - Commercial Strip">>"<</button>></span>',
		'<span class="lbb"><<button "Gloria Lane - Auction House">><<goto "Gloria Lane - Auction House">>"<</button>></span>',
		'<span class="lbb"><<button "eVentia - Psyche Clinic">><<goto "eVentia - Psyche Clinic">>"<</button>></span>']
	},
	{
		id: "Change Stats & Psyche",
		shown: 0,
		options: ['<<= setup.debugStats($debuggedExperience, $debuggedPsyche)>>']
	},
	{
		id: "Test: Sex System",
		shown: 0,
		options: ['Statistics: <<link "Print to Console">><<= setup.printStatistics($player)>><</link>>',
		'@@.red;Note: If you do not have the required genital, it will break.@@',
		'Oral, giving: [[Go Here|New Sex][$sex.current = "blowjob", $sex.gE = $player, $sex.rE = $npc.adults[0], $sex.stage = "intro", $sex.modifier = "sensual", $sex.passage = "Debug - Menu"]]',
		'Oral, receiving: [[Go Here|New Sex][$sex.current = "blowjob", $sex.gE = $npc.adults[0], $sex.rE = $player, $sex.stage = "intro", $sex.modifier = "sensual", $sex.passage = "Debug - Menu"]]',
		'Sex, vaginal: [[Go Here|New Sex][$sex.current = "sex", $sex.gE = $npc.adults[0], $sex.rE = $player, $sex.stage = "intro", $sex.modifier = "sensual", $sex.passage = "Debug - Menu"]]',
		'Sex, penis (vaginal): [[Go Here|New Sex][$sex.current = "sex", $sex.gE = $player, $sex.rE = $npc.adults[0], $sex.stage = "intro", $sex.modifier = "sensual", $sex.passage = "Debug - Menu"]]',
		'Sex, anal: [[Go Here|New Sex][$sex.current = "anal", $sex.gE = $npc.adults[0], $sex.rE = $player, $sex.stage = "intro", $sex.modifier = "sensual", $sex.passage = "Debug - Menu"]]',
		'Sex, penis (anal): [[Go Here|New Sex][$sex.current = "anal", $sex.gE = $player, $sex.rE = $npc.adults[0], $sex.stage = "intro", $sex.modifier = "sensual", $sex.passage = "Debug - Menu"]]']
	},
	{
		id: "Test: Event System",
		shown: 0,
		options: ['<<= setup.eventDebug($player)>>']
	},
	{
		id: "Test: Story Points",
		shown: 0,
		options: ['Cryo Sleep: [[Go Here|Intro - Cryo Sleep]]','Ending (Uncertain Future): [[Go Here|Ending - Uncertain Future]]','Ending (Accept the Deal): [[Go Here|Ending - Accept the Deal]]','Ending (Dark Bliss): [[Go Here|Ending - Dark Bliss]]','Vernon Dinner: [[Go Here|Storyline - Vernon Dinner]]','Amanda Meeting: [[Go Here|Storyline - Amanda Meet Up]]']
	}
	];

setup.debug = function () {
	let debugReturn = "";
	for (let i = 0; i < debug.length; i++) {
		debugReturn = debugReturn + "<span class='lbb'><<button '" + debug[i].id + "'>><<if '" + debug[i].shown + "' == 0>><<= setup.debugSetShow('" + debug[i].id + "', 1)>>" + 
		"<<else>><<= setup.debugSetShow('" + debug[i].id + "', 0)>><</if>><<replace '#debug-menu'>><<= setup.debug()>><</replace>><</button>></span>";
		if (debug[i].shown == 1) {
			for (let n = 0; n < debug[i].options.length; n++) {
				debugReturn = debugReturn + "<br>" + debug[i].options[n]; 
			}
		}
	}
	return debugReturn;
}



setup.debugStats = function (debuggedExperience, debuggedPsyche) {
	let debuggedStats = "@@.boldtext;Experience@@<br><<= setup.showExperience($player)>><br>@@.boldtext;Psyche@@<br><<= setup.showPsyche($player)>>";
	let returnDebugged = "";
	for (let i = 0; i < debuggedExperience.length; i++) {
		returnDebugged = returnDebugged + debuggedExperience[i] + " - (<<link 'Increase'>><<= setup.experience($player, $debuggedExperience[" + i + "], 15)>><<replace '#debuggedstats'>><<= setup.debugStats($debuggedExperience, $debuggedPsyche)>><</replace>><</link>>/<<link 'Decrease'>><<= setup.experience($player, $debuggedExperience[" + i + "], -15)>><<replace '#debuggedstats'>><<= setup.debugStats($debuggedExperience, $debuggedPsyche)>><</replace>><</link>>)<br>";
	}
	for (let i = 0; i < debuggedPsyche.length; i++) {
		returnDebugged = returnDebugged + debuggedPsyche[i] + " - (<<link 'Increase'>><<= setup.psyche($player, $debuggedPsyche[" + i + "], 15)>><<replace '#debuggedstats'>><<= setup.debugStats($debuggedExperience, $debuggedPsyche)>><</replace>><</link>>/<<link 'Decrease'>><<= setup.psyche($player, $debuggedPsyche[" + i + "], -15)>><<replace '#debuggedstats'>><<= setup.debugStats($debuggedExperience, $debuggedPsyche)>><</replace>><</link>>)<br>";
	}
	return "<span id='debuggedstats'>" + debuggedStats + "<br>" + returnDebugged + "</span>";
}

setup.debugGetClothes = function () {
	let clothes = setup.loadClothes();
	for (let i = 0; i < clothes.length; i++) {
		console.log("Adding " + clothes[i].name + " to the Wardrobe.")
		setup.acquireItem(clothes[i].name, "clothes");
	}
}

setup.eventDebug = function (entity) {
	let events = setup.loadEvents();
	SugarCube.State.variables.stashedOutfit = setup.stashOutfit(entity);
	let returnDebug = "";
	let returnCheck = "@@.red;ERROR@@ (Error in requirements)";
	for (var i = 0; i < events.length; i++) {
		returnDebug = returnDebug + "<br>@@.boldtext;" + events[i].name + "@@ - <<link 'Wear Outfit'>><<= setup.equipOutfit($player, '" + events[i].outfit + "', 'stash')>><<replace '#story-caption'>><<display 'StoryCaption'>><</replace>><</link>><br>";
		for (var n = 0; n < events[i].incidents.length; n++) {
			let incID = n;
			let eventName = events[i].name;
			let requirements = events[i].incidents[n].requirements;
			let check = setup.checkReq(requirements, entity);
			if (check == true) {
				returnCheck = "@@.lightgreen;Pass@@ (Requirements Met)";
			} else {
				returnCheck = "@@.red;Fail@@ (Requirements Not Met)";
			}
			returnDebug = returnDebug + events[i].incidents[n].name + ": [[Test|Event - Main][$event.debugIncident = " + incID + ", $event.current = '" + eventName + "', $event.stage = 'debug']] - " + returnCheck + "<br>";
		}
	}
	//console.log("Printed: " + returnDebug);
	return returnDebug;
};

setup.debugSetShow = function (id, value) {
	//console.log(id + ", " + value);
	for (let i = 0; i < debug.length; i++) {
		if (debug[i].id == id) {
			//console.log(value);
			debug[i].shown = value;
		}
	}
}





