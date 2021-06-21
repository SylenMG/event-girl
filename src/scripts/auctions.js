setup.loadAuctions = function () {
	let auctions = [
		{
			name: "Bedding",
			auctionName: "Bedding",
			description: "Subject auctions single-time sexual intercourse (may include anal or oral), as an experience to the highest bidder.",
            startingPrice: 50,
			climbPrice: 250,
            skillMods: ["receivedVaginal"],
            scoreMods: ["beauty"],
			modifiers: ["standard", "vaginal"],
			criteria: [{id: 'receivedVaginal', type: 'stat-min', level: 1}],
			reqInfo: "",
			requirements: []
		},
		{
			name: "Vaginal Virginity",
			auctionName: "Virginity (Vaginal)",
			description: "Subject auctions their (legal) vaginal virginity to the highest bidder.<br>",
           	startingPrice: 350,
			climbPrice: 1500,
            skillMods: [],
            scoreMods: ["beauty"],
			modifiers: ["standard", "vaginal", "virgin"],
			criteria: [{id: 'receivedVaginal', type: 'stat-max', level: 0}],
			reqInfo: "No way I´m just auctioning off my virgnity to the highest bidder! (Requires: Slut Level 1).",
			requirements: [{id: 'Slut', type: 'psyche-min', level: 1}]
		},
		{
			name: "Anal Virginity",
			auctionName: "Virginity (Anal)",
			description: "Subject auctions their (legal) anal virginity to the highest bidder.<br>",
        	startingPrice: 150,
			climbPrice: 1500,
            skillMods: [],
            scoreMods: ["beauty"],
			modifiers: ["standard", "anal", "virgin"],
			criteria: [{id: 'receivedAnal', type: 'stat-max', level: 0}],
			reqInfo: "No way I´m just auctioning off my ass to the highest bidder! (Requires: Slut Level 1).",
			requirements: [{id: 'Slut', type: 'psyche-min', level: 1}]
		},
		{
			name: "Indentured Servitude",
			auctionName: "Indentured Servitude",
			description: "Subject auctions full-time contractually obligated servitude (24hrs) that may involve any kind of work approved by UNC standards.",
            startingPrice: 30,
			climbPrice: 100,
            skillMods: ["Social"],
            scoreMods: ["beauty","social"],
			modifiers: ["standard"],
			criteria: [],
			reqInfo: "Yeah I´m not up for that. (Requires: Feminine Level 1).",
			requirements: [{id: 'Feminine', type: 'psyche-min', level: 1}]
		},
		{
			name: "Body Rental",
			auctionName: "Body Rental",
			description: "Subject auctions neuro-access to their body for 24-hours using a Neuro-Doll Access Point or similar.<br>",
           	startingPrice: 50,
			climbPrice: 1500,
            skillMods: [],
            scoreMods: ["beauty"],
			modifiers: ["standard", "body rental"],
			criteria: [],
			reqInfo: "Ugh, the idea of someone else being in control of my body... hell no. (Requires: Slut Level 3).",
			requirements: [{id: 'Slut', type: 'psyche-min', level: 3}]
		}
	];
	return auctions;
}

setup.bid = function (entity, auctionName) {
	let auctions = setup.loadAuctions();
	let priceMods = 1;
	let finalPrice = 1250;
	let auctionFound = false;
	console.log("Bidding(" + auctionName + ")...");
	for (let i = 0; i < auctions.length; i++) {
		if (auctionName == auctions[i].auctionName) {
			for (let n = 0; n < entity.scores.length; n++) {
				if (auctions[i].scoreMods.includes(entity.scores[n].name)) {
					priceMods += entity.scores[n].score;
				}
			}
			finalPrice = auctions[i].startingPrice + setup.random(auctions[i].climbPrice) * priceMods;
			auctionFound = true;
			break;
		}
	}
	console.log("Price Modifier: " + priceMods);
	if (auctionFound == false) {
		console.log("ERROR: No auction found during bidding.");
	}
	return finalPrice;
}

setup.displayAuctions = function (entity) {
	let auctions = setup.loadAuctions();
	let returnAuctions = "";
	for (let i = 0; i < auctions.length; i++) {
		let aucReqs = auctions[i].requirements;
		let aucCrit = auctions[i].criteria;
		let check = setup.checkReq(aucReqs, entity);
		let critCheck = setup.checkReq(aucCrit, entity);
		if (time.currentDayTime > 2) {
			var dAuction = {
				name: auctions[i].auctionName,
				description: auctions[i].description,
				priceName: "Start Price: ",
				priceValue: auctions[i].startingPrice,
				buttonName: "Sign Up (Closed).",
				buttonClass: "gbb",
				buttonAction: "<<= setup.logNote('Auction House', 'Sign up is closed, try earlier.')>>"
			};
		} else {
			var dAuction = {
				name: auctions[i].auctionName,
				description: auctions[i].description,
				priceName: "Start Price: ",
				priceValue: auctions[i].startingPrice,
				buttonName: "Sign Up",
				buttonClass: "lbb",
				buttonAction: "<<set $auction.current = '" + auctions[i].auctionName + "'>><<set $auction.climbPrice = " + auctions[i].climbPrice + ">><<set $auction.startPrice = " + auctions[i].startingPrice + ">><<= setup.shuffleInteractables()>><<goto 'Event Auction - Sign Up'>>"
			};
		}
		if (critCheck == true) {
			if (check == true) {
				returnAuctions = returnAuctions + setup.display(dAuction);
			} else {
				dAuction.buttonAction = "<<= setup.logNote('Thoughts', '" + auctions[i].reqInfo + "')>>";
				returnAuctions = returnAuctions + setup.display(dAuction);
			}
		}
	}
	return returnAuctions;
}