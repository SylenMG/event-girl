setup.getAdditionals = function (entity, type, modifier) {
    let returnAdd = "";
    let additionals = [
		{
		addText: ["A tingling heat spreads in your stomach as you taste cock for the first time in your life."],
		tags: ["blowjob-giving","virgin"],
		requirements: [{id: 'givenBlowjobs', type: 'stat-max', level: 0}]		
		},
		{
		addText: ["A tingling heat spreads in your stomach as your virgin pussy is broken in by raw cock."],
		tags: ["vaginal-sex","virgin"],
		requirements: [{id: 'receivedVaginal', type: 'stat-max', level: 0}]		
		},
		{
		addText: ["Your stomach curls as you think about the fact that you have been filled with cum for the first time in your life."],
		tags: ["vaginal-creampie","virgin"],
		requirements: [{id: 'receivedVaginalCreampie', type: 'stat-max', level: 0}]		
		},
	];
    if (entity.modifiers.includes("player")) {
        for (let i = 0; i < additionals.length; i++) {
            if (modifier == undefined) {
                if (additionals[i].tags.includes(type)) {
                    returnAdd = additionals[i].addText[Math.floor(Math.random() * additionals[i].addText.length)];
                    break;
                }
            } else {
                if (additionals[i].tags.includes(type) && additionals[i].tags.includes(modifier)) {
                    returnAdd = additionals[i].addText[Math.floor(Math.random() * additionals[i].addText.length)];
                    break;
                }
            }
        }
    }
	return returnAdd;
}