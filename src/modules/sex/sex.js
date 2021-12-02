

setup.sex = function (sex) {
	sex.player = SugarCube.State.variables.player;
	let returnSex = "";
	let perspective = setup.checkPerspective(sex);
	let sObject = setup.perspective(perspective);
    let intro = "";
	if (sex.count == 0) {
        intro = sObject.intros[0].passage + "<br><br>";
        for (let i = 0; i < sObject.scenes.length; i++) {
			let req = sObject.scenes[i].requirements;
			let check = setup.checkReq(req, sex.player);
			if (check == true) {
				let nameArr = sObject.scenes[i].name.length;
				let randomName = setup.random(nameArr);
				returnSex = returnSex + "<span class='lbb'><<button '" + sObject.scenes[i].name[randomName] + "'>><<set $sex.count += 1>><<replace '#scene-" + sex.count + "'>>" + sObject.scenes[i].passage + "<br><br><<= setup.sex($sex)>><</replace>><</button>></span>";
			}
		}
	} else if (sex.count < 2) {
		for (let i = 0; i < sObject.scenes.length; i++) {
			let req = sObject.scenes[i].requirements;
			let check = setup.checkReq(req, sex.player);
			if (check == true) {
				let nameArr = sObject.scenes[i].name.length;
				let randomName = setup.random(nameArr);
				returnSex = returnSex + "<span class='lbb'><<button '" + sObject.scenes[i].name[randomName] + "'>><<set $sex.count += 1>><<replace '#scene-" + sex.count + "'>>" + sObject.scenes[i].passage + "<br><br><<= setup.sex($sex)>><</replace>><</button>></span>";
			}
		}
	} else {
		for (let i = 0; i < sObject.climax.length; i++) {
			let req = sObject.scenes[i].requirements;
			let check = setup.checkReq(req, sex.player);
			if (check == true) {
				let nameArr = sObject.climax[i].name.length;
				let randomName = setup.random(nameArr);
				returnSex = returnSex + "<span class='lbb'><<button '" + sObject.climax[i].name[randomName] + "'>><<replace '#scene-" + sex.count + "'>>" + sObject.climax[i].passage + sObject.effects + "<br><br>" + setup.button("Continue.", sex.passage, "<<set $sex.count = 0>>") + "<</replace>><</button>></span>";
			}
		}
	}
    if (sex.count == 0) {
        return intro + "<span id='scene-" + sex.count + "'>" + returnSex + "</span>";
    } else {
        return "<span id='scene-" + sex.count + "'>" + returnSex + "</span>";
    }	
}