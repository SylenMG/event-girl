//Event Girl - Story
//v0.01
//Requires:
//by Sylen

//Example: <<= setup.story("Event-Girl-01", "start")>>
setup.loadStory = function () {
	//Story Routes
	//Main Route: eVentia Corp Mystery > Solving Timeline
	//Brenda Route: Get to know Brenda > ???
	//Lily Route: Get to know Lily > Lily whoring herself (help or doom her to the free-use blocks)
	//Dr. Linus Route: Get to know Linus > Become the Perfect Superfuck Doll

	let introEntries = [
		{
			id: "Event-Girl-00",
			entryName: "Your first event!",
			entryInfo: "Find the Event Board and sign up for your first event.",
			trigger: false,
			passages: []
		},
		{
			id: "Event-Girl-01",
			entryName: "The Clinic.",
			entryInfo: "Find the Psyche Clinic and learn more about it.",
			trigger: false,
			passages: []
		},
		{
			id: "Event-Girl-02",
			entryName: "That´s naughty!",
			entryInfo: "Find the adult strip and the gloria gloryholes.",
			trigger: false,
			passages: []
		},
		{
			id: "Event-Girl-03",
			entryName: "The Future is Now.",
			entryInfo: "Learn more about eVentia Corp.",
			trigger: false,
			passages: []
		}
	];
	let auctionEntries = [
		{
			id: "Auction-House-00",
			entryName: "If the price is right.",
			entryInfo: "Auction yourself at the auction house.",
			trigger: false,
			passages: []
		}
	];
	let cryoMysteryEntries = [
		{
			id: "Cryo-Mystery-00",
			entryName: "Hypernet Access.",
			entryInfo: "Use the hypernet from the receptionist desk to learn more about your situation.",
			trigger: false,
			passages: []
		},
		{
			id: "Cryo-Mystery-01",
			entryName: "Hypernet Access (Cryola).",
			entryInfo: "Use the hypernet from the receptionist desk to learn more about Cryola.",
			trigger: false,
			passages: []
		},
		{
			id: "Cryo-Mystery-02",
			entryName: "Hypernet Access (Cryolab Accident).",
			entryInfo: "Use the hypernet from the receptionist desk to learn more about the cryolab accident.",
			trigger: false,
			passages: []
		},
		{
			id: "Cryo-Mystery-03",
			entryName: "Hypernet Access (eVentia Corp).",
			entryInfo: "Use the hypernet from the receptionist desk to learn more about eVentia Corp.",
			trigger: false,
			passages: []
		},
		{
			id: "Cryo-Mystery-04",
			entryName: "Hypernet Access (Event Girl).",
			entryInfo: "Use the hypernet from the receptionist desk to learn more about what an Event Girl is.",
			trigger: false,
			passages: []
		},
		{
			id: "Cryo-Mystery-05",
			entryName: "Hypernet Access (Jessica and Jake).",
			entryInfo: "Use the hypernet from the receptionist desk to learn what happened to Jessica and Jake.",
			trigger: false,
			passages: []
		}
	];
	let vernonEntries = [
		{
			id: "Vernon-Venere-00",
			entryName: "A Strange Encounter.",
			entryInfo: "You have encountered Vernon Venere.",
			trigger: false,
			passages: []
		},
		{
			id: "Vernon-Dinner-00",
			entryName: "Dinner Date?",
			entryInfo: "Be in your Pod, on Saturday, Evening.",
			trigger: false,
			passages: []
		},
		{
			id: "Vernon-Gangbang-Event",
			entryName: "Selling Your Soul.",
			entryInfo: "Attend the Gloria Gangbang event.",
			trigger: false,
			passages: []
		}
	];
	let amandaEntries = [
		{
			id: "Amanda-Meeting-00",
			entryName: "The Meeting and The Deal.",
			entryInfo: "You attended the meeting and rejected the deal.",
			trigger: false,
			passages: []
		}
	];
	let linusEntries = [
		{
			id: "Headache-00",
			entryName: "My Head Hurts!",
			entryInfo: "Find Pixies Pharmaceuticals and purchase the blue pills.",
			trigger: false,
			passages: []
		},
		{
			id: "Headache-01",
			entryName: "The Way Inwards.",
			entryInfo: "Try meditating in your pod.",
			trigger: false,
			passages: []
		},
		{
			id: "License-00",
			entryName: "Hooking 101.",
			entryInfo: "Ask Dr. Linus about getting an E-Hooking License.",
			trigger: false,
			passages: []
		},
		{
			id: "License-01",
			entryName: "Hooking 102.",
			entryInfo: "Acquire the license from Dr. Linus.",
			trigger: false,
			passages: []
		},
		{
			id: "Debt-00",
			entryName: "Freedom Awaits.",
			entryInfo: "Talk to Dr. Linus about having paid your debts.",
			trigger: false,
			passages: []
		},
	];
	let entries = introEntries.concat(auctionEntries,cryoMysteryEntries,vernonEntries,amandaEntries,linusEntries);
	return entries;
}
