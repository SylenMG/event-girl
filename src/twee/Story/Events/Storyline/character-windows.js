





setup.cWindow = function (player, character) {
    let r = setup.random(3);
	let s = setup.getCharacterStories();
	let talk = "";
	let missionTalk = "<span class='gbb'><<button 'Work for " + character.name + ".'>><</button>></span>";
	console.log("z");
	for (let i = 0; i < s.length; i++) {
		if (s[i].name == character.name) {
			for (let n = 0; n < s[i].progression.length; n++) {
				let requirements = s[i].progression[n].requirements;
				let check = setup.checkReq(requirements, player);
				console.log("Pass: " + check);
				if (check == true) {
					missionTalk = s[i].progression[n].passage;
					break;
				}
			}
			break;
		}
	}
    return "<div class='character-window'><div class='character-pinup'><img src='images/portraits/" + character.portraitName + "/window-" + r + ".png' style='border-radius:0.8em;' width=100% height=100%></div><div class='default-text'>@@.title;" + character.fullName + "@@<br>" + character.examine + "<div class='character-window-button'><br>" +
	missionTalk + "<<= setup.button('Talk to " + character.name + "','')>></div></div></div>";
}

setup.getCharacterStories = function () {
	let s = [
		{
			name: "amanda",
			affection: 0,
			progression: [
				{
					name: "Amanda Meet Up 00",
					buttonName: "Work for Amanda.",
					passage: "Storyline - Amanda Meet Up",
					requirements: [{id: 'Amanda-Meeting-00', type: 'story-incomplete', level: 0}]
				}
			]
		},
		{
			name: "",
			affection: 0,
			progression: []
		}
	];
	return s;
};

/*
"<div class='default-container'><div class='default-portrait'><img src='" + items[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'>@@.boldtext;" + items[i].name + "@@<br>" + items[i].description + "<br>@@.boldtext;Price@@: u" + items[i].cost + "<br>" + 
				"<span class='lbb'><<button 'Purchase'>><<if $player.units >= " + items[i].cost + ">><<set $player.units -= " + items[i].cost + ">><<replace '#units-amount'>>$player.units<</replace>>" + 
				"<<= setup.acquireItem('" + items[i].name + "','items')>>" + 
				"<<= setup.logNote('Purchase', 'You have purchased x1 " + items[i].name + ".')>><<else>><<= setup.logNote('Alert', 'You do not have enough Units for that.')>><</if>><</button>></span></div></div>";*/