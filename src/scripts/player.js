var skillLevel = ["Abysmal","Pathetic","Average","Decent","Professional"];
var psycheFeminine = ["Masculine","Curious","Conflicted","Feminine","Hyper-Feminine"];
var psycheSlut = ["Chaste","Modest","Uninhibited","Slutty","Shameless"];
var psycheMind = ["Clear","Foggy","Daze","Blanked-Out","Mind-Broken"];
var psycheBimbo = ["Floozy","Ditzy","Bimbo","Cocks!... And Cummies!","Giggles"];
var psycheLust = ["@@.lbtext;Satisfied@@","@@.lbtext;Content@@","@@.pink;Aroused@@","@@.hotpink;Horny@@","@@.deeppink;Lusting@@"];
var n_psycheLust = ["Satisfied","Content","Aroused","Horny","Lusting"];

var ePal = {
	log: []
};

setup.printELog = function (player) {
	let eCount = 0;
	let ePrint = "";
	if (ePal.log.length >= 20) {
		eCount = ePal.log.length - 20;
	}
	for (var log = eCount; log < ePal.log.length; log++) {
		ePrint = ePrint + "<br>" + ePal.log[log].logName + ": " + ePal.log[log].logAmount;
	}
	ePrint = ePrint + "<br><br>" + "@@.bold;Total@@: @@.lightgreen;" + player.units + "@@<br>@@.bold;Debt@@: @@.red;" + player.debt + "@@";
	return ePrint;
}

setup.loadPlayer = function () {

	let psyche = [{
		name: "Mind",
		shown: true,
		progression: 0,
		level: 0
	},
	{
		name: "Lust",
		shown: true,
		progression: 10,
		level: 1
	}];

	let skills = [{
		name: "Handjob",
		shown: true,
		progression: 55,
		level: 1
	}];
	
	let sexStatistics = [
		{
		name: "receivedGroping",
		count: 0
		},
		{
		name: "receivedHarassment",
		count: 0
		},
		{
		name: "givenSwallow",
		count: 0
		},
		{
		name: "receivedSwallow",
		count: 0
		},
		{
		name: "givenFacial",
		count: 0
		},
		{
		name: "receivedFacial",
		count: 0
		},
		{
		name: "givenVaginalCreampie",
		count: 0
		},
		{
		name: "receivedVaginalCreampie",
		count: 0
		},
		{
		name: "givenAnalCreampie",
		count: 0
		},
		{
		name: "receivedAnalCreampie",
		count: 0
		},
		{
		name: "givenBlowjobs",
		count: 0
		},
		{
		name: "receivedBlowjobs",
		count: 0
		},
		{
		name: "givenCunnilingus",
		count: 0
		},
		{
		name: "receivedCunnilingus",
		count: 0
		},
		{
		name: "givenVaginal",
		count: 0
		},
		{
		name: "receivedVaginal",
		count: 0
		},
		{
		name: "givenAnal",
		count: 0
		},
		{
		name: "receivedAnal",
		count: 0
		}
	];
	
	let backgrounds = {
		type: 0,
		storyTypes: ["After being frozen in a cryopod by accident, you find yourself in the future... what comes now?"]
	}
	
	let scores = [
		{
			name: "handjob",
			type: "skill",
			textVariants: [""],
			score: 0,
			maxScore: 10
		},
		{
			name: "blowjob",
			type: "skill",
			textVariants: [""],
			score: 0,
			maxScore: 10
		},
		{
			name: "sex",
			type: "skill",
			textVariants: [""],
			score: 0,
			maxScore: 10
		},
		{
			name: "anal",
			type: "skill",
			textVariants: [""],
			score: 0,
			maxScore: 10
		},
		{
			name: "mind",
			type: "skill",
			textVariants: [""],
			score: 0,
			maxScore: 10
		},
		{
			name: "tits-size",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 5
		},
		{
			name: "ass-size",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 4
		},
		{
			name: "asshole-size",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 4
		},
		{
			name: "penis-size",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 5
		},
		{
			name: "vagina-size",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 5
		},
		{
			name: "beauty",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 3
		},
		{
			name: "mouth",
			type: "body",
			textVariants: [""],
			score: 0,
			maxScore: 1
		},
		{
			name: "casual",
			type: "style",
			textVariants: ["","slightly casual","overall casual","very casual"],
			score: 0,
		},
		{
			name: "slutty",
			type: "style",
			textVariants: ["","a little bit on the slutty side","slutty","super slutty"],
			score: 0,
		},
		{
			name: "trashy",
			type: "style",
			textVariants: ["","somewhat trashy","trashy","extremely trashy"],
			score: 0,
		},
		{
			name: "naughty",
			type: "style",
			textVariants: ["","a bit naughty","deliciously naughty","seductively naughty"],
			score: 0,
		},
		{
			name: "sexy",
			type: "style",
			textVariants: ["","sort of sexy","sexy","seriously sexy"],
			score: 0,
		},
		{
			name: "going-out",
			type: "style",
			textVariants: ["","for going-out","fashionable","super stylish"],
			score: 0,
		},
		{
			name: "professional",
			type: "style",
			textVariants: ["","a bit professional","professional","very business-like"],
			score: 0,
		},
		{
			name: "crotch",
			type: "coverage",
			textVariants: ["Your crotch is completely @@.pink;exposed@@ ","Your crotch is slightly @@.pink;exposed@@ ","Your crotch is somewhat @@.pink;exposed@@ ","Your crotch is out of sight "],
			score: 0,
		},
		{
			name: "tits",
			type: "coverage",
			textVariants: ["and your tits are completely @@.pink;exposed@@.","and your tits are fairly @@.pink;exposed@@.","and your tits are pushed up in a nice cleavage.","and your tits are hidden in a conservative fashion."],
			score: 0,
		},
		{
			name: "heel-height",
			type: "heel-height",
			textVariants: ["","The heels you´re wearing a sort of tall.","The heels you´re wearing are seductively tall and forces you into a promiscuous strut as you walk.","The heels you´re wearing are stupid tall and forces you to strut with a posing gait, swinging your hips side-to-side."],
			score: 0,
		},
		{
			name: "skirt-length",
			type: "skirt-length",
			textVariants: ["","The whorish skirt-length of your outfit only covers your ass, making bending over near impossible without flashing your crotch.","The slutty skirt-length of your outfit only reaches half-way along your thighs.","The skirt-length of your outfit is relatively fine and covers you nicely."],
			score: 0,
		}
	]

	let inventory = [];

	let player = {
		id: 0,
		name: "Jimmy",
		maleName: "Jimmy",
		femaleName: "Candace",
		stripperName: "Candace",
		portraitName: "player",
		isTransformed: false,
		isFemale: false,
		gender: "male",
		sex: "male",
		modifiers: ["essential","player","hasPenis"],
		reflections: [],
		background: backgrounds,
		statistics: sexStatistics,
		scores: scores,
		body: presetMaleBody,
		intBody: "images/player/male/pc-male-undies.png",
		piercings: [],
		piercingSlots: [],
		cybermods: [{
			name: "Nyxline Meta-Implant",
			description: "The Nyxline Meta-Implant is a neuromod that modulates and interfaces with other neuromods, serving as the mainframe for everything to work together flawlessly.",
			textDescription: "Your brain has been fitted with the Nyxline Meta-Implant, which modulates and interfaces with other neuromods.",
			details: "Nyxline Meta-Implant<br><br>The Nyxline Meta-Implant is a neuromod that modulates and interfaces with other neuromods, serving as the mainframe for everything to work together flawlessly." + 
			"<br><br>Cost: 2000",
			typeAdd: "none",
			valueAdd: 0,
			cost: 2000
		}],
		tattoos: [],
		tattooSlots: [],
		clothes: [],
		inventory: inventory,
		psyche: psyche,
		skills: skills,
		units: 0,
		debt: 0,
		interest: 0.025,
		weeklyRepay: 0,
		weeklyDemand: 1000,
		punishedTimes: 0,
		eRating: 0,
		bonus: 0
	}
	
	return player;
}

/*Scores Start Here*/
setup.printStatistics = function (entity) {
	console.log("Player Sex Stats:");
	for (var i = 0; i < entity.statistics.length; i++) {
		console.log(entity.statistics[i].name + ": " + entity.statistics[i].count);
	}
}
//Increases the score of an entity (player most likely).
setup.incScore = function (entity, type, amount) {
	if (type != "none" || type != undefined) {
		//console.log("Increasing score(" + type + ") for " + entity.name + " by " + amount + ".");
		for (var i = 0; i < entity.scores.length; i++) {
			if (entity.scores[i].name == type) {
				entity.scores[i].score += amount;
				//console.log("Altered score(" + type + ") of " + entity.name + " is now " + entity.scores[i].score + ".");
				break;
			}
		}
	}
}
//Decreases the score of an entity (player most likely).
setup.decScore = function (entity, type, amount) {
	if (type != "none" || type != undefined) {
		//console.log("Decreasing score(" + type + ") for " + entity.name + " by " + amount + ".");
		for (var i = 0; i < entity.scores.length; i++) {
			if (entity.scores[i].name == type) {
				entity.scores[i].score -= amount;
				//console.log("Altered score(" + type + ") of " + entity.name + " is now " + entity.scores[i].score + ".");
				break;
			}
		}
	}
}
//Set the score of an entity (player most likely).
setup.setScore = function (entity, type, amount) {
	if (type != "none" || type != undefined) {
		//console.log("Setting score(" + type + ") for " + entity.name + " to " + amount + ".");
		for (var i = 0; i < entity.scores.length; i++) {
			if (entity.scores[i].name == type) {
				entity.scores[i].score = amount;
				//console.log("Altered score(" + type + ") of " + entity.name + " is now " + entity.scores[i].score + ".");
				break;
			}
		}
	}
}

/////////////////////////
/*Units/Debt Start Here*/
/////////////////////////
setup.displayUnits = function (entity) {
	return "@@.boldtext;Units@@: " + entity.units + "<span id='UnitMessage'></span>"; 
}

setup.logEPal = function (logName, logBase, logRandom, type) {
	let logAmount = setup.random(logRandom);
	logAmount += logBase;
	let logged = {logName: logName, logAmount: logAmount};
	if (type == "Debt") {
		SugarCube.State.variables.player.debt += logAmount;
	} else if (type == "Benefits") {
		SugarCube.State.variables.player.units += logAmount;
	}
	ePal.log.push(logged);
}

setup.dailyExpenses = function (player, day) {
	player.debt += 50;
	setup.logEPal("Daily Expenses", 50, 0);
	setup.logNote("Daily Expenses", "Your debt has increased by 50.");
	let returnWeekly = "";
	console.log("DAY:" + day);
	if (day >= 6) {
		let debtIncrease = player.debt * player.interest;
		let title = "Debt Increase";
		let mainText = "Your debt has increased by the weekly interest of " + player.interest + ".";
		setup.logNote(title, mainText);
		console.log("wRepay: " + player.weeklyRepay + " wDemand: " + player.weeklyDemand);
		if (player.weeklyRepay < player.weeklyDemand) {
			setup.logNote("Weekly Demand", "You have failed to repay the weekly demand.");
			if (player.punishedTimes <= 0) {
				player.punishedTimes += 1;
				returnWeekly = "<<goto 'Debt Punishment - Intro'>>";
			} else {
				player.punishedTimes += 1;
				returnWeekly = "<<goto 'Debt Punishment - Repeat'>>";
			}
		} else {
			setup.logNote("Weekly Demand", "Your weekly repay has been notified and deducted.");
			player.weeklyRepay -= player.weeklyDemand;
		}
	}
	return returnWeekly;
}

setup.addUnits = function (entity, name, amount) {
	entity.units += amount;
	setup.logEPal(name, amount, 0);
	setup.logNote(name, amount + " Units have been added to your account.");
}

setup.displayRating = function (entity) {
	return "@@.boldtext;E-Rating@@: " + entity.eRating + "<span id='RatingMessage'></span>"; 
}

setup.rating = function (entity, value) {
	let returnRating = "";
	if (value < 0) {
		console.log("Decreased Rating: " + entity.name + " by " + value + ".");
		entity.eRating += value;
		returnRating = "Your E-Rating has decreased by " + value + "!";
	} else {
		console.log("Increased Rating: " + entity.name + " by " + value + ".");
		entity.eRating += value;
		returnRating = "Your E-Rating has increased by " + value + "!";
	}
	if (entity.eRating < -100) {
		entity.eRating = -100;
	} else if (entity.eRating > 200) {
		entity.eRating = 200;
	}
	//return returnRating;
	setup.logNote("E-Rating", returnRating);
}

setup.bonus = function (entity, baseValue, skillType) {
	let skillBonus = 0;
	if (skillType != "Hard" || skillType == undefined) {
		skillBonus = setup.returnSkillValue(entity, skillType);
	}
	console.log("Adding Bonus: Base(" + baseValue + ") + Skill(" + skillType + ": " + skillBonus + ").");
	let totalBonus = skillBonus + baseValue;
	console.log("Total Bonus: " + totalBonus + ".");
	entity.bonus = totalBonus;
}

setup.count = function (count, amount) {
	let player = SugarCube.State.variables.player;
	if (amount == undefined) {
		amount = 1;
	}
	console.log("Count(Player): Increasing " + count + " by +" + amount + ".");
	for (let n = 0; n < player.statistics.length; n++) {
		if (count == player.statistics[n].name) {
			player.statistics[n].count += amount;
			console.log("Increased Count(" + count + "), by " + amount + ".");
			break;
		}
	}
}















