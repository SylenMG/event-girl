setup.button = function (bText, bPassage, bOptions) {
    if (bOptions == undefined) {
        bOptions = "";
    }
    return "<span class='lbb'><<button '" + bText + "'>><<goto '" + bPassage + "'>>" + bOptions + "<</button>></span>";
};

setup.regButton = function (bText, bPassage, bReqs, bTags) {
    let player = SugarCube.State.variables.player;
    let check = setup.checkReq(bReqs, player);
    let rButton = "";
	if (check == true) {
        rButton = "<span class='lbb'><<button '" + bText + "'>><<goto '" + bPassage + "'>><</button>></span>";
    } else {
        //let reqsDisplay = setup.displayReqs(bReqs);
        //console.log(reqsDisplay);
        //rButton = "<span class='gbb'><<button '" + bText + "'>><<= setup.logNote('Requirements', '" + reqsDisplay + "')>><</button>></span>";
        if (bTags.includes("hidden")) {
            console.log(bText + " | " + bPassage + " is marked as hidden.");
        } else {
            rButton = "<span class='gbb'><<button '" + bText + "'>><<goto '" + bPassage + "'>><</button>></span>";
        }
    }
    return rButton;
};
setup.display = function (display) {
    let returnDisplay = "<div class='default-container'><div class='default-text'>@@.boldtext;" + display.name + "@@<br>" + display.description + "<br>" + "@@.boldtext;" + display.priceName + "@@: u" + display.priceValue + "<br><span class='" + display.buttonClass + "'><<button '" + display.buttonName + "'>>" + display.buttonAction + "<</button>></span></div></div>";
    return returnDisplay;
}

setup.displayStoryLog = function (newLog, completedLog) {
	let storyLog = setup.loadStory();
	let returnStoryLog = "@@.bold;Active@@: <<if $story.showActive == true>><<button 'Hide'>><<set $story.showActive = false>><<replace '#storylog'>><<= setup.displayStoryLog($story.nEntries, $story.cEntries)>><</replace>><</button>>" + 
	"<<else>><<button 'Show'>><<set $story.showActive = true>><<replace '#storylog'>><<= setup.displayStoryLog($story.nEntries, $story.cEntries)>><</replace>><</button>><</if>><br><br>";
	if (SugarCube.State.variables.story.showActive == true) {
		for (let i = 0; i < storyLog.length; i++) {
			if (newLog.includes(storyLog[i].id)) {
				returnStoryLog = returnStoryLog + "<div class='log-container'><div class='log-text'>Entry Name: " + storyLog[i].entryName + "<br>Entry Info: " + storyLog[i].entryInfo + "</div></div><br>";
			}
		}
	}
	returnStoryLog = returnStoryLog + "<br>@@.bold;Completed@@: <<if $story.showCompleted == true>><<button 'Hide'>><<set $story.showCompleted = false>><<replace '#storylog'>><<= setup.displayStoryLog($story.nEntries, $story.cEntries)>><</replace>><</button>>" + 
	"<<else>><<button 'Show'>><<set $story.showCompleted = true>><<replace '#storylog'>><<= setup.displayStoryLog($story.nEntries, $story.cEntries)>><</replace>><</button>><</if>><br><br>";
	if (SugarCube.State.variables.story.showCompleted == true) {
		for (let i = 0; i < storyLog.length; i++) {
			if (completedLog.includes(storyLog[i].id)) {
				returnStoryLog = returnStoryLog + "<div class='log-container'><div class='log-text'>Entry Name: " + storyLog[i].entryName + "<br>Entry Info: " + storyLog[i].entryInfo + "</div></div><br>";
			}
		}
	}
	return "<span id='storylog'>" + returnStoryLog + "</span>";
}