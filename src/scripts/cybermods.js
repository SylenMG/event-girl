//Cybermods
//v0.01
//Requires:
//by Sylen

setup.loadCybermods = function () {
	let returnCybermods = [
		{
		name: "Nyxline Meta-Implant",
		description: "The Nyxline Meta-Implant is a neuromod that modulates and interfaces with other neuromods, serving as the mainframe for everything to work together flawlessly.",
		textDescription: "Your brain has been fitted with the Nyxline Meta-Implant, which modulates and interfaces with other neuromods.",
		details: "Nyxline Meta-Implant<br><br>The Nyxline Meta-Implant is a neuromod that modulates and interfaces with other neuromods, serving as the mainframe for everything to work together flawlessly." + 
		"<br><br>Cost: 2000",
		typeAdd: "none",
		valueAdd: 0,
		cost: 2000
		},
		{
			name: "Cado-Uplink 004",
			description: "The Cado Uplink is a neuromod that enhances general knowledge retention during sleep, clearing the mind.",
			textDescription: "Your brain has been fitted with the Cado-Uplink 004, making learning and knowledge retention during sleep much easier.",
			details: "Cado-Uplink 004<br><br>The Cado Uplink is a neuromod that enhances general knowledge retention during sleep, clearing the mind." + 
			"<br><br>Cost: 240",
			typeAdd: "mind",
			valueAdd: 1,
			cost: 240
		},
		{
			name: "Zyto Eso-Throat Compressors",
			description: "The Zyto Cybernetics Eso-Throat Compressors, is a full-line throat replacement, for optimal blowjob-deepthroat experiences.",
			textDescription: "Your throat has been replaced with the Zyto Eso-Throat Compressor, turning your throat into a tool for sucking cock.",
			details: "Zyto Eso-Throat Compressors<br><br>The Zyto Cybernetics Eso-Throat Compressors, is a full-line throat replacement, for optimal blowjob-deepthroat experiences." + 
			"<br><br>Cost: 2000",
			typeAdd: "blowjob",
			valueAdd: 1,
			cost: 2000
		},
		{
			name: "Electra Cyber-Doll Skin",
			description: "The Cyber-Doll skin-graft manufactured by Electra Entertainment is a translucent skin graft implanted directly under the skin. The skin graft quadruples the pleasure-spectrum sensitivity" +
			"of the skin, whilst also making the skin pleasurable to touch. It accomplishes this by sending arousing aphrodisiac neuro-signals to whom ever touches the skin.",
			textDescription: "Your skin has been grafted with the Electra Cyber-Doll Skin, making it four times more sensitive, whilst also arousing those that touch it.",
			details: "Electra Cyber-Doll Skin<br><br>The Cyber-Doll skin-graft manufactured by Electra Entertainment is a translucent skin graft implanted directly under the skin. The skin graft quadruples the pleasure-spectrum sensitivity" + 
			"of the skin, whilst also making the skin pleasurable to touch. It accomplishes this by sending arousing aphrodisiac neuro-signals to whom ever touches the skin.<br><br>Cost: 5800",
			typeAdd: "sex",
			valueAdd: 1,
			cost: 5800
		},
		{
			name: "Vista Dynamo-Hips",
			description: "The Vista Vitae Dynamo-Hips is a lower back cyber replacement that comes with motion-pleasure support. That allows for steady rocking motion and optimal recreational relief during intercourse." + 
			"The hips stabilize the rest of the body, allowing greater assistance for other tasks to be performed during automated operations.",
			textDescription: "Your hips have been replaced with the Vista Vitae Dynamo-Hips, turning your lower back into the optimal love-machine, ready to ride any cock into blissful release.",
			details: "Vista Vitae Dynamo-Hips<br><br>The Vista Vitae Dynamo-Hips is a lower back cyber replacement that comes with motion-pleasure support. That allows for steady rocking motion and optimal recreational relief during intercourse." + 
			"The hips stabilize the rest of the body, allowing greater assistance for other tasks to be performed during automated operations.<br><br>Cost: 3500",
			typeAdd: "sex",
			valueAdd: 1,
			cost: 3500
		},
		{
			name: "Carpus Rotor-Handlers",
			description: "The famous Carpus Rotor-Handlers outfit’s the wrist with fine-tuned motor-function for optimal automated handjobs." + 
			" It links directly to the Nyxline Meta Implant, making it possible to put both hands on auto-slut mode, for multiple on-duty pleasure-relief operations.",
			textDescription: "Your wrists have been fitted with the Carpus Rotor-Handlers, making automatic handjobs possible.",
			details: "Carpus Rotor-Handlers<br><br>The famous Carpus Rotor-Handlers outfit’s the wrist with fine-tuned motor-function for optimal automated handjobs." + 
			"It links directly to the Nyxline Meta Implant, making it possible to put both hands on auto-slut mode, for multiple on-duty pleasure-relief operations.<br><br>Cost: 2900",
			typeAdd: "handjobs",
			valueAdd: 1,
			cost: 2900
		},
		{
			name: "Cyberdong 3000",
			description: "The Cyberdong series returns with its newest addition to its meaty arsenal. Life-like and massive, a true bitch-breaker." + 
			" With piston-support and intra-elasticity, it can change size on the go and force itself directly into the cervix for maximum pleasure delivery.",
			textDescription: "You have been fitted with the Cyberdong 3000.",
			details: "Cyberdong 3000<br><br>The Cyberdong series returns with its newest addition to its meaty arsenal. Life-like and massive, a true bitch-breaker." + 
			"With piston-support and intra-elasticity, it can change size on the go and force itself directly into the cervix for maximum pleasure delivery.<br><br>Cost: 6000",
			typeAdd: "none",
			valueAdd: 0,
			cost: 6000
		}
	];
	return returnCybermods;
}
setup.displayCyberDetails = function (cyberDetails) {
	return cyberDetails;
}
setup.loadSculpting = function () {
	let returnSculpting = [
	{
		name: "Beauty N-Sculpting",
		description: "Increase your beauty with cutting edge N-sculpting, making your face more symmetrical and auto-fitting to the current neo-standards.",
		typeSculpt: "beauty",
		typeAdd: "beauty",
		valueAdd: 1,
		cost: 1000
	},
	{
		name: "Breasts N-Sculpting",
		description: "Alter the size of your bosom through cutting edge N-Sculpting that directly modifies the size and shape of the breasts to your liking.",
		typeSculpt: "tits",
		typeAdd: "tits-size",
		valueAdd: 1,
		cost: 1000
	},
	{
		name: "Ass N-Sculpting",
		description: "Alter the size of your rear through cutting edge N-Sculpting that directly modifies the size and shape of the booty to your liking.",
		typeSculpt: "ass",
		typeAdd: "ass-size",
		valueAdd: 1,
		cost: 1000
	},
	{
		name: "Cock N-Sculpting",
		description: "Alter the size of your cock through cutting edge N-Sculpting that directly modifies the size and shape of the penis to your liking.",
		typeSculpt: "penis",
		typeAdd: "penis-size",
		valueAdd: 1,
		cost: 1000
	}];
	return returnSculpting;
}