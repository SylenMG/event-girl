//Items & Inventory
//v1.0
//By Sylen

setup.loadItems = function () {
	let items = [
	{
		id: 0,
		name: "Red Pill",
		description: "A small red pill.",
		displayImage: "images/items/redpill.png",
		category: ["pharma"], 
		options: [{
				type: "Eat",
				effectId: 0
			}],
		cost: 15
	},
	{
		id: 1,
		name: "Blue Pill",
		description: "A small blue pill.",
		displayImage: "images/items/bluepill.png",
		category: ["pharma"], 
		options: [{
				type: "Eat",
				effectId: 1
			}],
		cost: 25
	},
	{
		id: 2,
		name: "Pink Pill",
		description: "A small pink pill.",
		displayImage: "images/items/pinkpill.png",
		category: ["pharma"], 
		options: [{
				type: "Eat",
				effectId: 2
			}],
		cost: 35
	}
	];
	return items;
}

setup.loadItemEffects = function (entity) {
	let effects = [
	{
		effectId: 0,
		effects: [{effect: "Feminine", type:"psyche", amount: 5, random: 5},{effect: "Mind", type:"psyche", amount: 50, random: 50}]
	},
	{
		effectId: 1,
		effects: [{effect: "Feminine", type:"psyche", amount: -5, random: -5},{effect: "Mind", type:"psyche", amount: 50, random: 50}]
	},
	{
		effectId: 2,
		effects: [{effect: "Bimbo", type:"psyche", amount: 5, random: 5},{effect: "Mind", type:"psyche", amount: 50, random: 50}]
	}
	];
	return effects;
}

setup.inventory = function (entity) {
	let items = setup.loadItems();
	let returnItems = "";
	for (let i = 0; i < entity.inventory.length; i++) {
		for (let n = 0; n < items.length; n++) {
			if (entity.inventory[i].id == items[n].id) {
				returnItems = returnItems + "<div class='item-container'><div class='item-portrait'><img src='" + items[n].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
				"</div><div class='default-text'>@@.boldtext;x" + entity.inventory[i].amount + " " + items[n].name + "@@<br>" + items[n].description + "</div><div style='width:100%; float:left;'>";
				for (let k = 0; k < items[n].options.length; k++) {
					returnItems = returnItems + "<span class='item-lbb'><<button '" + items[n].options[k].type + "'>><<= setup.useItem($player, " + items[n].options[k].effectId + ")>>" + 
					"<<= setup.dropItem($player, " + items[n].id + ")>><<replace '#inv'>><<= setup.inventory($player)>><</replace>><</button>></span>" + 
					"<span class='item-lbb'><<button 'Drop'>><<= setup.dropItem($player, " + items[n].id + ")>><<replace '#inv'>><<= setup.inventory($player)>><</replace>><</button>></span></div></div>";
				}
			} 
		}
	}
	return "<span id='inv'>" + returnItems + "</span>";
}

setup.dropItem = function (entity, itemId) {
	for (let i = 0; i < entity.inventory.length; i++) {
		if (entity.inventory[i].id == itemId) {
			if (entity.inventory[i].amount <= 1) {
				entity.inventory.splice(i, 1);
			} else {
				entity.inventory[i].amount -= 1;
			}
		} 
	}
}

setup.useItem = function (entity, id) {
	let effects = setup.loadItemEffects(entity);
	for (let uI = 0; uI < effects.length; uI++) {
		if (effects[uI].effectId == id) {
			for (let uE = 0; uE < effects[uI].effects.length; uE++) {
				switch(effects[uI].effects[uE].type) {
					case "psyche":
					setup.psyche(entity, effects[uI].effects[uE].effect, effects[uI].effects[uE].amount, effects[uI].effects[uE].random);
					break;
					case "experience":
					setup.experience(entity, effects[uI].effects[uE].effect, effects[uI].effects[uE].amount, effects[uI].effects[uE].random);
					break;
				}
			}
		}
	}
}







