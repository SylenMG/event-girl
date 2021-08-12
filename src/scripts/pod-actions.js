setup.loadPodActions = function (player) {
    let podActions = [
        {
            name: "Reflection",
            buttonName: "Reflect.",
            passage: "Reflection",
            requirements: []
        },
        {
            name: "Masturbation",
            buttonName: "Masturbate.",
            passage: "Masturbation",
            requirements: [{id: 'Masturbation', type: 'skill-min', level: 0},{id: 'Time', type: 'not-time', level: 3}]
        },
        {
            name: "Meditation First Time",
            buttonName: "Try Meditating for the first time.",
            passage: "Meditation First Time",
            requirements: [{id: 'Headache-01', type: 'story-active', level: 0},{id: 'Time', type: 'not-time', level: 3}]
        },
        {
            name: "Meditation",
            buttonName: "Meditate.",
            passage: "Meditation",
            requirements: [{id: 'Headache-01', type: 'story-complete', level: 0},{id: 'Time', type: 'not-time', level: 3}]
        },
        {
            name: "Travel",
            buttonName: "Travel.",
            passage: "",
            requirements: []
        },
        {
            name: "Sleep",
            buttonName: "Sleep.",
            passage: "Sleep",
            requirements: [{id: 'Time', type: 'time', level: 3}]
        },
        {
            name: "Rest",
            buttonName: "Rest.",
            passage: "Rest",
            requirements: [{id: 'Time', type: 'not-time', level: 3}]
        },
        {
            name: "Leave Pod",
            buttonName: "Exit Pod.",
            passage: "eVentia - Pod Hall",
            requirements: []
        }
    ];
    let storyActions = [
        {
            name: "Vernon Dinner",
            buttonName: "Go have dinner with Mr. Venere.",
            passage: "Storyline - Vernon Dinner",
            requirements: [{id: 'Vernon-Dinner-00', type: 'story-active', level: 0},{id: 'Time', type: 'day', level: 5},{id: 'Time', type: 'time', level: 2}]
        },
        {
            name: "Amanda Meet Up",
            buttonName: "An eventia guard stands by your pod.",
            passage: "Storyline - Amanda Meet Up",
            requirements: [{id: 'Amanda-Meeting-00', type: 'story-incomplete', level: 0},{id: 'Vernon-Dinner-00', type: 'story-completed', level: 0},{id: 'Time', type: 'time', level: 0}]
        }
    ];
    let actions = storyActions.concat(podActions);
    return actions;
}

setup.displayPodActions = function (player) {
    SugarCube.State.variables.settings.sPassage = "Pod - Main";
    let actions = setup.loadPodActions(player);
    let returnActions = "";
    let cCheck = setup.coverageCheck(player);
    let pSlut = setup.getPsyche(player, "Slut");
    if (cCheck == false) {
        switch(pSlut){
            case 0:
                returnActions = setup.speak(player, "I need to put on some clothes! There´s no way that i´m leaving like this!", "angry") + "<br>";
            break;
            case 1:
                returnActions = setup.speak(player, "I can´t leave like this... I gotta show some kind of modesty...!", "surprised") + "<br>";
            break;
            case 2:
                returnActions = setup.speak(player, "I should probably at least wear something before leaving...", "smile") + "<br>";
            break;
            default:
                cCheck = true;
            break;
        }
    }
    for (let i = 0; i < actions.length; i++) {
        if (actions[i].name == "Travel") {
            if (cCheck == false) {
                returnActions = returnActions;
            } else {
                returnActions = returnActions + "<span class='lbb'><<button 'Travel.'>><<Map>><</button>></span>";
            }
        } else {
            console.log("Checking: " + actions[i].name);
            let requirements = actions[i].requirements;
            let check = setup.checkReq(requirements, player);
            console.log("Pass: " + check);
            if (check == true) {
                if (actions[i].name == "Rest") {
                    returnActions = returnActions + "<span class='lbb'><<button 'Rest.'>><<goto 'Pod - Main'>><<set $time.currentDayTime += 1>><</button>></span>";
                } else if (actions[i].name == "Leave Pod" && cCheck == false) {
                    returnActions = returnActions;
                } else {
                    returnActions = returnActions + setup.button(actions[i].buttonName, actions[i].passage);
                }
            }
        }
    }
    return returnActions;
}