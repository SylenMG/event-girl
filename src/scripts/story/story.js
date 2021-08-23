//Event Girl - Story
//v0.01
//Requires:
//by Sylen


/*
setup.loadTriggers = function () {
	let triggers = [
	{
		time: "Evening", 
		day: 5,
		rate: 100,
		location: "Pod - Main", 
		jumpPassage: "Storyline - Vernon Dinner",
		requirements: [{id: 'Vernon-Dinner-00', type: 'story-active', level: 0}]
	},
	{
		time: "Morning", 
		day: "Any",
		rate: 100,
		location: "eVentia - Lobby & Foyer", 
		jumpPassage: "Storyline - Amanda Meet Up",
		requirements: [{id: 'Amanda-Meeting-00', type: 'story-incomplete', level: 0},{id: 'Vernon-Dinner-00', type: 'story-completed', level: 0}]
	}];
	return triggers;
}
	
setup.triggerStory = function (entity, time) {
	let currentPassage = SugarCube.State.passage;
	let triggers = setup.loadTriggers();
	let returnTrigger = "";
	for (let i = 0; i < triggers.length; i++) {
		if (currentPassage == triggers[i].location) {
			if (time.currentDay == triggers[i].day && time.dayTime[time.currentDayTime] == triggers[i].time) {
				let requirements = triggers[i].requirements;
				let check = setup.checkReq(requirements, entity);
				if (check == true) {
					console.log("TRIGGER PASS");
					SugarCube.State.variables.story.endPassage = triggers[i].location;
					returnTrigger = "<<goto '" + triggers[i].jumpPassage + "'>>";
					break;
				}
			} else if (triggers[i].day == "Any") {
				let requirements = triggers[i].requirements;
				let check = setup.checkReq(requirements, entity);
				if (check == true) {
					console.log("TRIGGER PASS");
					SugarCube.State.variables.story.endPassage = triggers[i].location;
					returnTrigger = "<<goto '" + triggers[i].jumpPassage + "'>>";
					break;
				}
			}
		}
	}
	return returnTrigger;
}
*/
setup.completeEntry = function (id) {
	let foundEntry = false;
	let sEntries = setup.loadStory();
	if (SugarCube.State.variables.story.cEntries.includes(id)) {
		foundEntry = true;
		//console.log("FAILED: Completing " + id + ", as story log entry is already completed.");
	} else {
		for (let i = 0; i < SugarCube.State.variables.story.nEntries.length; i++) {
			if (id == SugarCube.State.variables.story.nEntries[i]) {
				foundEntry = true;
				SugarCube.State.variables.story.cEntries.push(id);
				SugarCube.State.variables.story.nEntries.splice(i, 1);
				for (let n = 0; n < sEntries.length; n++) {
					if (id == sEntries[n].id) {
						let title = "E-Pal Log Update";
						let mainText = "Completed: " + sEntries[n].entryName;
						setup.logNote(title, mainText);
						break;
					}
				}
				break;
			}
		}
	}
	if (foundEntry == false) {
		//console.log("FAILED: Completing " + id + ", as story log does not exist.");
	}
}

setup.newEntry = function (id) {
	let foundEntry = false;
	let sEntries = setup.loadStory();
	if (SugarCube.State.variables.story.nEntries.includes(id)) {
		foundEntry = true;
		console.log("FAILED: Starting " + id + ", as story log entry is already on-going.");
	} else if (SugarCube.State.variables.story.cEntries.includes(id)) {
		foundEntry = true;
		console.log("FAILED: Starting " + id + ", as story log entry is already completed.");
	} else {
		for (let i = 0; i < sEntries.length; i++) {
			if (id == sEntries[i].id) {
				foundEntry = true;
				let title = "E-Pal Log Update";
				let mainText = "New Entry: " + sEntries[i].entryName;
				setup.logNote(title, mainText);
				SugarCube.State.variables.story.nEntries.push(id);
				break;
			}
		}
	}
	if (foundEntry == false) {
		console.log("FAILED: Starting " + id + ", as story log does not exist.");
	}
}

setup.story = function (entry, action) {
	let sEntries = setup.loadStory();
	if (action == "complete") {
		for (let i = 0; i < sEntries.length; i++) {
			if (entry == sEntries[i].id) {
				setup.completeEntry(entry);
			}
		}
	} else if (action == "start") {
		for (let i = 0; i < sEntries.length; i++) {
			if (entry == sEntries[i].id) {
				setup.newEntry(entry);
			}
		}
	}
}

setup.createLogEntry = function (html) {
	let div = document.createElement("div");
	let ranID = setup.random(100);
	div.innerHTML = html;
	div.setAttribute('class', 'log-update');
	div.setAttribute('id', ranID);
	const divID = "#" + ranID;
	document.getElementById("notification-bar").appendChild(div);
	//insertBefore("#story").addClass("log-update");
	setTimeout(function(){
		//$(divID).remove();
	}, 4000);
}

setup.bPassage = function (player, passage, endPassage) {
	let branches = setup.loadBranches();
	let returnPassage = "";
	let returnBranching = "";
	for (let i = 0; i < branches.length; i++) {
		if (branches[i].id == passage) {
			returnPassage = branches[i].passageText;
			for (let n = 0; n < branches[i].branches.length; n++) {
				bReq = branches[i].branches[n].requirements;
				check = setup.checkReq(bReq, player);
				if (check == true) {
					if (branches[i].branches[n].modifiers.includes("end")) {
						returnBranching = returnBranching + "<br><span class='lbb'><<button '" + branches[i].branches[n].buttonText + "'>><<set $story.passage = ''>><<goto '" + 
						SugarCube.State.variables.story.endPassage + "'>><</button>></span>";
					} else {
						returnBranching = returnBranching + "<br><span class='lbb'><<button '" + branches[i].branches[n].buttonText + "'>><<set $story.passage = '" + branches[i].branches[n].id + "'>>" + 
						"<<replace '#branch-passage'>><<= setup.bPassage($player, $story.passage, $story.endPassage)>><</replace>><</button>></span>";
					}
				}
			}
		}
	}
	return "<span id='branch-passage'>" + returnPassage + returnBranching + "</span>";
}