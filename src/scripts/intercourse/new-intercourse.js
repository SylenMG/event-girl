setup.newSexLib = function (perspective) {
	switch(perspective) {
		case "blowjob-giving":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Blowjob - Giving - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Suck <<= setup.hisher($sex.rE)>> cock.","Take <<= setup.hisher($sex.rE)>> shaft inside your mouth.","Use your lips on <<= setup.hisher($sex.rE)>> cock."],
					passage: "<<include 'Blowjob - Giving - Suck'>>"
					},
					{
					name: ["Lick the tip of <<= setup.hisher($sex.rE)>> cock."],
					passage: "<<include 'Blowjob - Giving - Lick'>>"
					}
				],
				climax: [
					{
					name: ["Swallow <<= setup.hisher($sex.rE)>> cum.", "Gulp down <<= setup.hisher($sex.rE)>> seed."],
					passage: "<<include 'Blowjob - Giving - Swallow'>>"
					},
					{
					name: ["Take <<= setup.hisher($sex.rE)>> load all over your face.", "Wear <<= setup.hisher($sex.rE)>> cum as make-up."],
					passage: "<<include 'Blowjob - Giving - Facial'>>"
					}
				],
                effects: "<<run setup.experience($player, 'Blowjob', 5, 5)>><<run setup.incStat($player, 'givenBlowjobs', 1)>>"
			};
		break;
		case "blowjob-receiving":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Blowjob - Receiving - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> suck your cock.","Push your shaft inside <<= setup.hisher($sex.gE)>> mouth."],
					passage: "<<include 'Blowjob - Receiving - Suck'>>"
					},
					{
					name: ["Make <<= setup.himher($sex.gE)>> lick the tip of your cock."],
					passage: "<<include 'Blowjob - Receiving - Lick'>>"
					}
				],
				climax: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> swallow your load."],
					passage: "<<include 'Blowjob - Receiving - Swallow'>>"
					},
					{
					name: ["Cum all over <<= setup.hisher($sex.gE)>> face."],
					passage: "<<include 'Blowjob - Receiving - Facial'>>"
					}
				],
                effects: "<<run setup.satsify($player)>><<run setup.incStat($player, 'receivedBlowjobs', 1)>>"
			};
		break;
        case "cunnilingus-giving":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Cunnilingus - Giving - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Finger <<= setup.hisher($sex.rE)>> cunt.","Shove your finger up <<= setup.hisher($sex.rE)>> pussy."],
					passage: "<<include 'Cunnilingus - Giving - Finger'>>"
					},
					{
					name: ["Lick <<= setup.hisher($sex.rE)>> cunt.","Shove your tongue inside <<= setup.hisher($sex.rE)>> pussy.","Explore <<= setup.hisher($sex.rE)>> cunt with your tongue."],
					passage: "<<include 'Cunnilingus - Giving - Lick'>>"
					}
				],
				climax: [
					{
					name: ["Make <<= setup.himher($sex.rE)>> cum."],
					passage: "<<include 'Cunnilingus - Giving - Climax'>>"
					}
				],
                effects: "<<run setup.experience($player, 'Cunnilingus', 5, 5)>><<run setup.incStat($player, 'givenCunnilingus', 1)>>"
			};
		break;
		case "cunnilingus-receiving":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Cunnilingus - Receiving - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> finger your cunt."],
					passage: "<<include 'Cunnilingus - Receiving - Finger'>>"
					},
					{
					name: ["Make <<= setup.himher($sex.gE)>> lick your cunt."],
					passage: "<<include 'Cunnilingus - Receiving - Lick'>>"
					}
				],
				climax: [
					{
					name: ["Cum."],
					passage: "<<include 'Cunnilingus - Receiving - Climax'>>"
					}
				],
                effects: "<<run setup.satsify($player)>><<run setup.incStat($player, 'receivedCunnilingus', 1)>>"
			};
		break;
		case "vaginal-sex":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Vaginal - Sex - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> fuck you slowly.","Take it slow."],
					passage: "<<include 'Vaginal - Sex - Slow'>>"
					},
					{
					name: ["Let <<= setup.himher($sex.gE)>> fuck you hard.","Pick up the pace.","Speed things up.","Harder."],
					passage: "<<include 'Vaginal - Sex - Fast'>>"
					},
					{
					name: ["Take <<= setup.hisher($sex.gE)>> cock doggystyle.","Let <<= setup.himher($sex.gE)>> fuck you doggystyle.","Get on all fours."],
					passage: "<<include 'Vaginal - Sex - Doggy'>>"
					},
					{
					name: ["Wrap your legs around <<= setup.hisher($sex.rE)>> back.","Lie on your back.","Get pressed like a bitch."],
					passage: "<<include 'Vaginal - Sex - Press'>>"
					}
				],
				climax: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> fill you up.", "Take <<= setup.hisher($sex.gE)>> seed inside your cunt.","Get filled."],
					passage: "<<include 'Vaginal - Sex - Creampie'>>"
					},
					{
					name: ["Take <<= setup.hisher($sex.gE)>> load all over your cunt.", "Wear <<= setup.hisher($sex.gE)>> cum on your cunt.","Make <<= setup.himher($sex.gE)>> pull out."],
					passage: "<<include 'Vaginal - Sex - Outside'>>"
					}
				],
                effects: "<<run setup.experience($player, 'Sex', 5, 5)>><<run setup.incStat($player, 'receivedVaginal', 1)>>"
			};
		break;
        case "anal-sex":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Anal - Sex - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> fuck you slowly.","Take it slow."],
					passage: "<<include 'Anal - Sex - Slow'>>"
					},
					{
					name: ["Let <<= setup.himher($sex.gE)>> fuck you hard.","Pick up the pace.","Speed things up.","Harder."],
					passage: "<<include 'Anal - Sex - Fast'>>"
					},
					{
					name: ["Take <<= setup.hisher($sex.gE)>> cock doggystyle.","Let <<= setup.himher($sex.gE)>> fuck you doggystyle.","Get on all fours."],
					passage: "<<include 'Anal - Sex - Doggy'>>"
					},
					{
					name: ["Wrap your legs around <<= setup.hisher($sex.rE)>> back.","Lie on your back.","Get pressed like a bitch."],
					passage: "<<include 'Anal - Sex - Press'>>"
					}
				],
				climax: [
					{
					name: ["Let <<= setup.himher($sex.gE)>> fill your ass up.", "Take <<= setup.hisher($sex.gE)>> seed inside your asshole.","Get filled anally."],
					passage: "<<include 'Anal - Sex - Creampie'>>"
					},
					{
					name: ["Take <<= setup.hisher($sex.gE)>> load all over your ass.", "Wear <<= setup.hisher($sex.gE)>> cum on your ass.","Make <<= setup.himher($sex.gE)>> pull out."],
					passage: "<<include 'Anal - Sex - Outside'>>"
					}
				],
                effects: "<<run setup.experience($player, 'Anal', 5, 5)>><<run setup.incStat($player, 'receivedAnal', 1)>>"
			};
		break;
        case "penis-sex":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Penis - Sex - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Fuck <<= setup.himher($sex.rE)>> slowly.","Take it slow."],
					passage: "<<include 'Penis - Sex - Slow'>>"
					},
					{
					name: ["Fuck <<= setup.himher($sex.rE)>> hard.","Pick up the pace.","Speed things up.","Harder."],
					passage: "<<include 'Penis - Sex - Fast'>>"
					},
					{
					name: ["Take <<= setup.himher($sex.rE)>> doggystyle.","Fuck <<= setup.himher($sex.rE)>> doggystyle."],
					passage: "<<include 'Penis - Sex - Doggy'>>"
					},
					{
					name: ["Press <<= setup.himher($sex.rE)>> down on their back.","Time for mating press.","Press that bitch."],
					passage: "<<include 'Penis - Sex - Press'>>"
					}
				],
				climax: [
					{
					name: ["Cum inside <<= setup.himher($sex.rE)>>.", "Fill up <<= setup.hisher($sex.rE)>> cunt.","Just cum inside."],
					passage: "<<include 'Penis - Sex - Creampie'>>"
					},
					{
					name: ["Pull out.", "Paint <<= setup.hisher($sex.rE)>> cunt, picasso-style.","Go cunt-glazing."],
					passage: "<<include 'Penis - Sex - Outside'>>"
					}
				],
                effects: "<<run setup.experience($player, 'Sex', 5, 5)>><<run setup.incStat($player, 'givenVaginal', 1)>>"
			};
		break;
        case "penis-anal":
			var sObject = {
				intros: [
					{
					name: [],
					passage: "<<include 'Penis - Anal - Intro'>>"
					}
				],
				scenes: [
					{
					name: ["Fuck <<= setup.himher($sex.rE)>> slowly.","Take it slow."],
					passage: "<<include 'Penis - Anal - Slow'>>"
					},
					{
					name: ["Fuck <<= setup.himher($sex.rE)>> hard.","Pick up the pace.","Speed things up.","Harder."],
					passage: "<<include 'Penis - Anal - Fast'>>"
					},
					{
					name: ["Take <<= setup.himher($sex.rE)>> doggystyle.","Fuck <<= setup.himher($sex.rE)>> doggystyle."],
					passage: "<<include 'Penis - Anal - Doggy'>>"
					},
					{
					name: ["Press <<= setup.himher($sex.rE)>> down on their back.","Time for anal mating press.","Press that bitch."],
					passage: "<<include 'Penis - Anal - Press'>>"
					}
				],
				climax: [
					{
					name: ["Cum inside <<= setup.himher($sex.rE)>>.", "Fill up <<= setup.hisher($sex.rE)>> asshole.","Just cum inside."],
					passage: "<<include 'Penis - Anal - Creampie'>>"
					},
					{
					name: ["Pull out.", "Paint <<= setup.hisher($sex.rE)>> ass, picasso-style.","Decorate some ass."],
					passage: "<<include 'Penis - Anal - Outside'>>"
					}
				],
                effects: "<<run setup.experience($player, 'Anal', 5, 5)>><<run setup.incStat($player, 'givenAnal', 1)>>"
			};
		break;
        default:
			console.log("Fail.");
		break;
	}
	console.log("Perspective(" + perspective + "): Found.");
	return sObject;
}

setup.checkSex = function (sex) {
	//returns the perspective in case this is not already defined
    let perspective = sex.current;
	switch(perspective) {
		case "oral":
		case "blowjob":
		if (sex.gE.modifiers.includes("player") && sex.rE.modifiers.includes("hasPenis")) {
			perspective = "blowjob-giving";
			console.log("Blowjob(giving): Pass.");
			break;
		} else if (sex.rE.modifiers.includes("player") && sex.rE.modifiers.includes("hasPenis")) {
			perspective = "blowjob-receiving";
			console.log("Blowjob(receiving): Pass.");
			break;
		} else {
			console.log("Error: neither giving Entity(" + sex.gE.name + ") or receiving Entity(" + sex.rE.name + ") have flag 'hasPenis'.");
			console.log("Checking for cunnilingus instead...");
			perspective = "cunniligus";
		}
		case "cunnilingus":
		if (sex.gE.modifiers.includes("player") && sex.rE.modifiers.includes("hasVagina")) {
			perspective = "cunnilingus-giving";
			console.log("Cunnilingus(giving): Pass.");
			break;
		} else if (sex.rE.modifiers.includes("player") && sex.rE.modifiers.includes("hasVagina")) {
			perspective = "cunnilingus-receiving";
			console.log("Cunnilingus(receiving): Pass.");
			break;
		}
		case "penis":
		if (sex.gE.modifiers.includes("player") && sex.gE.modifiers.includes("hasPenis")) {
			if (sex.rE.modifiers.includes("hasVagina")) {
				perspective = "penis-sex";
				console.log("Penis(sex): Pass.");
				break;
			} else {
				console.log("Error: giving Entity(" + sex.rE.name + ") did not have flag 'hasVagina'.");
				perspective = "anal-sex";
				console.log("Penis(anal): Alternate Pass.");
				break;
			}
		} else {
			console.log("Error: giving Entity(" + sex.gE.name + ") did not have flag 'hasPenis'.");
			perspective = "sex";
			console.log("Ignoring Error and bypassing(checking sex), please report this error and where it occured.");
		}
		case "vaginal":
		if (sex.gE.modifiers.includes("hasPenis")) {
			if (sex.rE.modifiers.includes("player") && sex.rE.modifiers.includes("hasVagina")) {
				perspective = "vaginal-sex";
				console.log("Vaginal(sex): Pass.");
				break;
			} else {
				console.log("Error: receiving Entity(" + sex.rE.name + ") did not have flag 'hasVagina'.");
				perspective = "anal-sex";
				console.log("Anal(sex): Alternate Pass.");
				break;
			}
		} else {
			console.log("Error: giving Entity(" + sex.gE.name + ") did not have flag 'hasPenis'.");
			perspective = "sex";
			console.log("Ignoring Error and bypassing(checking sex), please report this error and where it occured.");
		}
		case "sex":
		if (sex.gE.modifiers.includes("hasPenis")) {
			if (sex.gE.modifiers.includes("player")) {
				if (sex.rE.modifiers.includes("hasVagina")) {
					perspective = "penis-sex";
					console.log("Penis(sex): Pass.");
					break;
				} else {
					perspective = "penis-anal";
					console.log("Penis(anal): Pass.");
					break;
				}
			} else {
				if (sex.rE.modifiers.includes("hasVagina")) {
					perspective = "vaginal-sex";
					console.log("Vaginal(sex): Pass.");
					break;
				} else {
					perspective = "anal-sex";
					console.log("Anal(sex): Pass.");
					break;
				}
			}
		} else if (sex.rE.modifiers.includes("hasPenis")) {
			if (sex.rE.modifiers.includes("player")) {
				if (sex.gE.modifiers.includes("hasVagina")) {
					perspective = "penis-sex";
					console.log("Penis(sex): Pass.");
					break;
				} else {
					perspective = "penis-anal";
					console.log("Penis(anal): Pass.");
					break;
				}
			} else {
				if (sex.gE.modifiers.includes("hasVagina")) {
					perspective = "vaginal-sex";
					console.log("Vaginal(sex): Pass.");
					break;
				} else {
					perspective = "anal-sex";
					console.log("Anal(sex): Pass.");
					break;
				}
			}
		} else {
			console.log("Error: neither giving Entity(" + sex.gE.name + ") or receiving Entity(" + sex.rE.name + ") have flag 'hasPenis'.");
			console.log("Ignoring Error and assuming vaginal sex...");
			perspective = "vaginal-sex";
			console.log("Vaginal(sex): False Pass.");
			break;
		}
		case "anal":
		if (sex.gE.modifiers.includes("hasPenis")) {
			if (sex.gE.modifiers.includes("player")) {
				perspective = "penis-anal";
				console.log("Penis(anal): Pass.");
				break;
			} else {
				perspective = "anal-sex";
				console.log("Anal(sex): Pass.");
				break;
			}
		} else if (sex.rE.modifiers.includes("hasPenis")) {
			if (sex.rE.modifiers.includes("player")) {
				perspective = "penis-anal";
				console.log("Penis(anal): Pass.");
				break;
			} else {
				perspective = "anal-sex";
				console.log("Anal(sex): Pass.");
				break;
			}
		} else {
			console.log("Error: neither giving Entity(" + sex.gE.name + ") or receiving Entity(" + sex.rE.name + ") have flag 'hasPenis'.");
			console.log("Ignoring Error and assuming anal sex...");
			perspective = "anal-sex";
			console.log("Anal(sex): False Pass.");
			break;
		}
		default:
		console.log("Default(" + perspective + "): Pass.");
		break;
	}
    let allowedList = ["blowjob-giving","blowjob-receiving","cunnilingus-giving","cunnilingus-receiving","anal-sex","penis-anal","vaginal-sex","penis-sex"];
    if (allowedList.includes(perspective)) {
        console.log(perspective + " is listed, passing.");
    } else {
        console.log(perspective + " is NOT on list!");
    }
	return perspective;
}

setup.newSex = function (sex) {
	let returnSex = "";
	let perspective = setup.checkSex(sex);
	let sObject = setup.newSexLib(perspective);
    let intro = "";
	if (sex.count == 0) {
        intro = sObject.intros[0].passage + "<br><br>";
        for (let i = 0; i < sObject.scenes.length; i++) {
            let nameArr = sObject.scenes[i].name.length;
            let randomName = setup.random(nameArr);
			returnSex = returnSex + "<span class='lbb'><<button '" + sObject.scenes[i].name[randomName] + "'>><<set $sex.count += 1>><<replace '#scene-" + sex.count + "'>>" + sObject.scenes[i].passage + "<br><br><<= setup.newSex($sex)>><</replace>><</button>></span>";
		}
	} else if (sex.count < 2) {
		for (let i = 0; i < sObject.scenes.length; i++) {
            let nameArr = sObject.scenes[i].name.length;
            let randomName = setup.random(nameArr);
			returnSex = returnSex + "<span class='lbb'><<button '" + sObject.scenes[i].name[randomName] + "'>><<set $sex.count += 1>><<replace '#scene-" + sex.count + "'>>" + sObject.scenes[i].passage + "<br><br><<= setup.newSex($sex)>><</replace>><</button>></span>";
		}
	} else {
		for (let i = 0; i < sObject.climax.length; i++) {
            let nameArr = sObject.climax[i].name.length;
            let randomName = setup.random(nameArr);
			returnSex = returnSex + "<span class='lbb'><<button '" + sObject.climax[i].name[randomName] + "'>><<replace '#scene-" + sex.count + "'>>" + sObject.climax[i].passage + sObject.effects + "<br><br>" + setup.button("Continue.", sex.passage, "<<set $sex.count = 0>>") + "<</replace>><</button>></span>";
		}
	}
    if (sex.count == 0) {
        return intro + "<span id='scene-" + sex.count + "'>" + returnSex + "</span>";
    } else {
        return "<span id='scene-" + sex.count + "'>" + returnSex + "</span>";
    }	
}