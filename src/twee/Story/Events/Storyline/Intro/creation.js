setup.ccBackgrounds = function (current) {
    let choiceBackgrounds = "";
    let ccBackgrounds = [
        {
        id: "unluckyFella",
        name: "The Unlucky Fella",
        genderStart: "<<= setup.genderbend($player, 'male')>><<= setup.updateBodyparts($player)>>",
        description: "The original storyline following the unlucky fella of the past, that is frozen down and ends up in the future. All of this, a complete accident! But why were you frozen down for so long? Why are you suddenly in debt? But most importantly of all; why are you a girl?!"
        },
        {
        id: "damselInDebt",
        name: "Damsel in Debt",
        genderStart: "<<= setup.genderbend($player, 'female')>><<= setup.updateBodyparts($player)>>",
        description: "An alternate storyline that begins in the far future. You´re put into the shoes of an unfortunate woman that have ended up in debt. It is now up to you to repay this debt, through the corporate nightmare of tommorrow. A dystopian and cyberpunkish world awaits, that will offer you many ways to alter yourself into becoming the perfect entertainment provider."
        }
    ];
    for (let i = 0; i < ccBackgrounds.length; i++) {
        choiceBackgrounds = choiceBackgrounds + "<<button '" + ccBackgrounds[i].name + "'>><<set $story.background = " + i + ">>" + ccBackgrounds[i].genderStart + "$update.pinup<<replace '#ccBackground'>><<= setup.ccBackgrounds(" + i + ")>><</replace>><<replace '#startBtn'>><<= setup.getStart($story.background)>><</replace>><</button>> ";
    }
    let returnBackgrounds = choiceBackgrounds + "<br><br>@@.boldtext;" + ccBackgrounds[current].name + "@@<br>" + ccBackgrounds[current].description;
    return "<span id='ccBackground'>" + returnBackgrounds + "</span>" + "";
}

setup.pushToPlayer = function (player, pushed) {
    player.modifiers.push(pushed);
}

setup.setStartValues = function (diff) {
    let values = {
		startUnits: [1150, 1600, 2100, 3000],
		startDebt: [243520,445000,655000,1025000],
		startInterest: [0.05,0.15,0.25,0.50],
		startDemand: [1000,1200,1500,2000]
	};
    let returnValues = "Starting Units: ";
    for (let i = 0; i < values.startUnits.length; i++) {
        if (diff.startUnits == values.startUnits[i]) {
            returnValues = returnValues + " @@.lightblue;" + values.startUnits[i] + "@@";
        } else {
            returnValues = returnValues + " <<click '" + values.startUnits[i] + "'>><<set $story.difficulty.startUnits = " + values.startUnits[i] + ">><<replace '#startValues'>><<= setup.setStartValues($story.difficulty)>><</replace>><</click>>";
        }
        
    }
    returnValues = returnValues + "<br>Base Debt: ";
    for (let i = 0; i < values.startDebt.length; i++) {
        if (diff.startDebt == values.startDebt[i]) {
            returnValues = returnValues + " @@.lightblue;" + values.startDebt[i] + "@@";
        } else {
            returnValues = returnValues + " <<click '" + values.startDebt[i] + "'>><<set $story.difficulty.startDebt = " + values.startDebt[i] + ">><<replace '#startValues'>><<= setup.setStartValues($story.difficulty)>><</replace>><</click>>";
        }
    }
    returnValues = returnValues + "<br>Interest Rate: ";
    for (let i = 0; i < values.startInterest.length; i++) {
        if (diff.startInterest == values.startInterest[i]) {
            returnValues = returnValues + " @@.lightblue;" + values.startInterest[i] + "@@";
        } else {
            returnValues = returnValues + " <<click '" + values.startInterest[i] + "'>><<set $story.difficulty.startInterest = " + values.startInterest[i] + ">><<replace '#startValues'>><<= setup.setStartValues($story.difficulty)>><</replace>><</click>>";
        }
    }
    returnValues = returnValues + "<br>Weekly Demand: ";
    for (let i = 0; i < values.startDemand.length; i++) {
        if (diff.startDemand == values.startDemand[i]) {
            returnValues = returnValues + " @@.lightblue;" + values.startDemand[i] + "@@";
        } else {
            returnValues = returnValues + " <<click '" + values.startDemand[i] + "'>><<set $story.difficulty.startDemand = " + values.startDemand[i] + ">><<replace '#startValues'>><<= setup.setStartValues($story.difficulty)>><</replace>><</click>>";
        }
    }
    return "<span id='startValues'>" + returnValues + "</span>";
}

setup.getStart = function (current) {
    let starts = ["Intro - Waking Up", "Intro - Arriving at eVentia"];
    let additionals = ["<<set $characters.malePlayer.name = $player.maleName>><<set $story.difficulty.realDebt = $story.difficulty.startDebt - 243520>><<run setup.logEPal('Vat Maintenance', 110000, 0, 'Debt')>><<run setup.logEPal('Vitro Test', 2000, 0, 'Debt')>><<run setup.logEPal('Nyxline Meta-Implant', 2000, 0, 'Debt')>><<run setup.logEPal('XXXXXX (E001)', 3800, 0, 'Debt')>><<run setup.logEPal('Biomorphic Neo-Genesis', 125000, 0, 'Debt')>><<run setup.logEPal('Public Registration', 120, 0, 'Debt')>><<run setup.logEPal('E-Package (Standard)', 225, 0, 'Debt')>><<run setup.logEPal('E-Tracker Geo-F Implant', 255, 0, 'Debt')>><<run setup.logEPal('Vat Disposal', 120, 0, 'Debt')>><<run setup.logEPal('XXXXXX (E002)', $story.difficulty.realDebt, 0, 'Debt')>><<run setup.logEPal('E-Benefits', $story.difficulty.startUnits, 0, 'Benefits')>>",
    "<<set $player.units = $story.difficulty.startUnits>><<set $player.debt = $story.difficulty.startDebt>><<set $player.interest = $story.difficulty.startInterest>><<set $player.weeklyDemand = $story.difficulty.startDemand>>"];
    return setup.button("Begin Intro.", starts[current], additionals[current]);
}


