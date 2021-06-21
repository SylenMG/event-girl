//Clothing System
//v1.0
//By Sylen

setup.loadClothes = function () {
	let tops = [
	{
		name: "Evening Dress",
		appliedName: "eveningdress",
		description: "A neat @@.boldtext;casual@@ evening dress.",
		displayImage: "images/player/clothing/eveningdress/portrait.png",
		type: "top",
		cost: 560,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "tits",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["casual-cazy","noskirts","tops","casual","going-out","sexy","nobra"]
	},
	{
		name: "Wet-Look Dress",
		appliedName: "wetlookdress",
		description: "A sexy @@.boldtext;going-out@@ party dress.",
		displayImage: "images/player/clothing/wetlookdress/portrait.png",
		type: "top",
		cost: 750,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "tits",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["drop-suck","going-out","dress","tops","sexy","noskirts","nobra"]
	},
	{
		name: "Bubblegum Dress",
		appliedName: "bubblegumdress",
		description: "A naughty @@.boldtext;going-out@@ party dress.",
		displayImage: "images/player/clothing/bubblegumdress/portrait.png",
		type: "top",
		cost: 850,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "tits",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["drop-suck","going-out","tops","sexy","noskirts","nobra"]
	},
	{
		name: "Aristo Dress",
		appliedName: "aristodress",
		description: "A naughty @@.boldtext;going-out@@ party dress.",
		displayImage: "images/player/clothing/aristodress/portrait.png",
		type: "top",
		cost: 1750,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "tits",
			score: 3
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["drop-suck","going-out","slutty","tops","noskirts","nobra"]
	},
	{
		name: "Violentia Dress",
		appliedName: "violentiadress",
		description: "A gothic @@.boldtext;going-out@@ party dress.",
		displayImage: "images/player/clothing/violentiadress/portrait.png",
		type: "top",
		cost: 1150,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "tits",
			score: 3
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["drop-suck","going-out","slutty","dress","tops","nobra","noskirts"]
	},
	{
		name: "Receptionist Top",
		appliedName: "sluttyofficetop",
		description: "A sexy @@.boldtext;business@@ top.",
		displayImage: "images/player/clothing/sluttyofficetop/portrait.png",
		type: "top",
		cost: 350,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["eventia","professional","slutty","tops"]
	},
	{
		name: "School Girl Top",
		appliedName: "schoolgirltop",
		description: "A sexy @@.boldtext;naughty@@ school girl top.",
		displayImage: "images/player/clothing/schoolgirltop/portrait.png",
		type: "top",
		cost: 250,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["eventia","naughty","slutty","trashy","tops"]
	},
	{
		name: "Wet Look Top",
		appliedName: "wetlooktop",
		description: "A sexy @@.boldtext;going-out@@ wet look top.",
		displayImage: "images/player/clothing/wetlooktop/portrait.png",
		type: "top",
		cost: 450,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["eventia","going-out","slutty","tops","nobra"]
	},
	{
		name: "Long Sleeve Top",
		appliedName: "longsleevetop",
		description: "A long-sleeved @@.boldtext;casual@@ top.",
		displayImage: "images/player/clothing/longsleevetop/portrait.png",
		type: "top",
		cost: 550,
		coverage: [{
			type: "tits",
			score: 3
		}],
		modifiers: ["casual-cazy","casual","tops"]
	},
	{
		name: "French Maid Dress",
		appliedName: "maiddress",
		description: "A sexy @@.boldtext;naughty@@ french maid dress.",
		displayImage: "images/player/clothing/maiddress/portrait.png",
		type: "top",
		cost: 750,
		coverage: [{
			type: "tits",
			score: 3
		}],
		modifiers: ["eventia","naughty","professional","dress","tops","noskirts"]
	},
	{
		name: "eVentia Jacket",
		appliedName: "eventiajacket",
		description: "A standard @@.boldtext;casual@@ eVentia jacket.",
		displayImage: "images/player/clothing/eventiajacket/portrait.png",
		type: "top",
		cost: 750,
		coverage: [{
			type: "tits",
			score: 3
		}],
		modifiers: ["eventia","casual","professional","tops"]
	},
	{
		name: "Pink-Button Top",
		appliedName: "pinkbuttontop",
		description: "A nice @@.boldtext;casual@@ pink-button top.",
		displayImage: "images/player/clothing/pinkbuttontop/portrait.png",
		type: "top",
		cost: 950,
		coverage: [{
			type: "tits",
			score: 3
		}],
		modifiers: ["casual-cazy","casual","sexy","nobra","tops"]
	},
	{
		name: "Slink Top",
		appliedName: "slinktop",
		description: "A slim @@.boldtext;sexy@@ slinky top.",
		displayImage: "images/player/clothing/slinktop/portrait.png",
		type: "top",
		cost: 800,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["casual-cazy","sexy","slutty","tops"]
	},
	{
		name: "White Camisole",
		appliedName: "camisole",
		description: "A white @@.boldtext;casual@@ camisole.",
		displayImage: "images/player/clothing/camisole/portrait.png",
		type: "top",
		cost: 1150,
		coverage: [{
			type: "tits",
			score: 3
		}],
		modifiers: ["casual-cazy","casual","sexy","tops"]
	},
	{
		name: "Sluttia Armor",
		appliedName: "sluttiatop",
		description: "A barbarian @@.boldtext;cosplay@@ piece.",
		displayImage: "images/player/clothing/sluttiatop/portrait.png",
		type: "top",
		cost: 2550,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["eventia","cosplay","slutty","tops","nobra"]
	},
	{
		name: "Mega Slut Top",
		appliedName: "eventialatextop",
		description: "An extremely @@.boldtext;slutty@@ latex top.",
		displayImage: "images/player/clothing/eventialatextop/portrait.png",
		type: "top",
		cost: 2050,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["drop-suck","slutty","trashy","tops","nobra"]
	},
	{
		name: "Promotion Top",
		appliedName: "eventiaclothtop",
		description: "An extremely @@.boldtext;slutty@@ cloth top.",
		displayImage: "images/player/clothing/eventiaclothtop/portrait.png",
		type: "top",
		cost: 1500,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["eventia","slutty","professional","tops","nobra"]
	},
	{
		name: "Domina Top",
		appliedName: "dominatop",
		description: "A latex @@.boldtext;naughty@@ domina top.",
		displayImage: "images/player/clothing/dominatop/portrait.png",
		type: "top",
		cost: 1500,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["drop-suck","sexy","naughty","tops","nobra"]
	},
	{
		name: "Party Girl Tube Top",
		appliedName: "partygirltop",
		description: "A bubbly @@.boldtext;party@@ rainbow tube-top.",
		displayImage: "images/player/clothing/partygirltop/portrait.png",
		type: "top",
		cost: 1200,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["drop-suck","slutty","going-out","tops","nobra"]
	},
	{
		name: "Cindanar Top",
		appliedName: "boothbabetop",
		description: "A @@.boldtext;sexy@@ Cindanar sports top.",
		displayImage: "images/player/clothing/boothbabetop/portrait.png",
		type: "top",
		cost: 1500,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["eventia","slutty","sexy","tops","nobra"]
	},
	{
		name: "Stains Top",
		appliedName: "stainstop",
		description: "A @@.boldtext;slutty@@ Stains micro top.",
		displayImage: "images/player/clothing/stainstop/portrait.png",
		type: "top",
		cost: 8500,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["eventia","slutty","sexy","trashy","naughty","tops","nobra"]
	},
	{
		name: "Red Latex Top",
		appliedName: "redlatextop",
		description: "A red @@.boldtext;sexy@@ latex top.",
		displayImage: "images/player/clothing/redlatextop/portrait.png",
		type: "top",
		cost: 2500,
		coverage: [{
			type: "tits",
			score: 2
		}],
		modifiers: ["drop-suck","slutty","sexy","naughty","tops","nobra"]
	},
	{
		name: "Hyper Top",
		appliedName: "cybersuit",
		description: "An advanced @@.boldtext;casual@@ hypersuit",
		displayImage: "images/player/clothing/cybersuit/portrait.png",
		type: "top",
		cost: 255000,
		coverage: [{
			type: "tits",
			score: 2
		},
		{
			type: "crotch",
			score: 2
		}],
		modifiers: ["eventia","sexy","tops","nobra","nopanties"]
	}
	];
	let bottoms = [
	{
		name: "eVentia Slacks",
		appliedName: "eventiaslacks",
		description: "Some plain @@.boldtext;casual@@ slacks.",
		displayImage: "images/player/clothing/eventiaslacks/portrait.png",
		type: "bottom",
		cost: 560,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["eventia","casual","professional","nostockings","bottoms"]
	},
	{
		name: "Receptionist Skirt",
		appliedName: "sluttyofficeskirt",
		description: "A short sexy @@.boldtext;business@@ skirt.",
		displayImage: "images/player/clothing/sluttyofficeskirt/portrait.png",
		type: "bottom",
		cost: 350,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["eventia","professional","slutty","skirt","bottoms"]
	},
	{
		name: "Rec. Micro Skirt",
		appliedName: "sluttyofficemicroskirt",
		description: "A @@.boldtext;naughty@@ micro skirt.",
		displayImage: "images/player/clothing/sluttyofficemicroskirt/portrait.png",
		type: "bottom",
		cost: 350,
		coverage: [{
			type: "crotch",
			score: 2
		},
		{
			type: "skirt-length",
			score: 1
		}],
		modifiers: ["eventia","professional","trashy","slutty","skirt","bottoms"]
	},
	{
		name: "School Girl Skirt",
		appliedName: "schoolgirlskirt",
		description: "A short @@.boldtext;naughty@@ school girl skirt.",
		displayImage: "images/player/clothing/schoolgirlskirt/portrait.png",
		type: "bottom",
		cost: 350,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["eventia","school","naughty","trashy","slutty","skirt","bottoms"]
	},
	{
		name: "Denim Skirt",
		appliedName: "denimskirt",
		description: "A denim @@.boldtext;casual@@ skirt.",
		displayImage: "images/player/clothing/denimskirt/portrait.png",
		type: "bottom",
		cost: 250,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["casual-cazy","casual","sexy","skirt","bottoms"]
	},
	{
		name: "Wet Look Leggings",
		appliedName: "wetlookleggings",
		description: "A pair @@.boldtext;going-out@@ wet look leggings.",
		displayImage: "images/player/clothing/wetlookleggings/portrait.png",
		type: "bottom",
		cost: 450,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["eventia","going-out","sexy","leggings","nostockings","bottoms"]
	},
	{
		name: "Grey Jeans",
		appliedName: "greyjeans",
		description: "A pair of denim @@.boldtext;casual@@ jeans.",
		displayImage: "images/player/clothing/greyjeans/portrait.png",
		type: "bottom",
		cost: 350,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["casual-cazy","casual","leggings","nostockings","bottoms"]
	},
	{
		name: "White Shorts",
		appliedName: "whiteshorts",
		description: "A white @@.boldtext;sexy@@ short pants.",
		displayImage: "images/player/clothing/whiteshorts/portrait.png",
		type: "bottom",
		cost: 350,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["casual-cazy","sexy","going-out","bottoms"]
	},
	{
		name: "White Pleated Skirt",
		appliedName: "whitepleatedskirt",
		description: "A white @@.boldtext;casual@@ pleated skirt.",
		displayImage: "images/player/clothing/whitepleatedskirt/portrait.png",
		type: "bottom",
		cost: 650,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["casual-cazy","casual","sexy","bottoms"]
	},
	{
		name: "Pink Short Skirt",
		appliedName: "pinkshortskirt",
		description: "A pink @@.boldtext;casual@@ short skirt.",
		displayImage: "images/player/clothing/pinkshortskirt/portrait.png",
		type: "bottom",
		cost: 750,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["casual-cazy","casual","sexy","bottoms"]
	},
	{
		name: "Sluttia Loin Cloth",
		appliedName: "sluttiasling",
		description: "A barbarian @@.boldtext;cosplay@@ loin cloth.",
		displayImage: "images/player/clothing/sluttiasling/portrait.png",
		type: "bottom",
		cost: 1750,
		coverage: [{
			type: "crotch",
			score: 2
		},
		{
			type: "skirt-length",
			score: 1
		}],
		modifiers: ["eventia","cosplay","slutty","bottoms","nopanties"]
	},
	{
		name: "Latex Hot Pants",
		appliedName: "eventialatexhotpants",
		description: "A pair of @@.boldtext;slutty@@ latex hot pants.",
		displayImage: "images/player/clothing/eventialatexhotpants/portrait.png",
		type: "bottom",
		cost: 1350,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["drop-suck","slutty","trashy","bottoms"]
	},
	{
		name: "Promo Hot Pants",
		appliedName: "eventiaclothhotpants",
		description: "A pair of @@.boldtext;slutty@@ cloth hot pants.",
		displayImage: "images/player/clothing/eventiaclothhotpants/portrait.png",
		type: "bottom",
		cost: 1150,
		coverage: [{
			type: "crotch",
			score: 3
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["eventia","slutty","professional","bottoms"]
	},
	{
		name: "Domina Hotpants",
		appliedName: "dominapants",
		description: "A pair of @@.boldtext;naughty@@ latex pants.",
		displayImage: "images/player/clothing/dominapants/portrait.png",
		type: "bottom",
		cost: 1450,
		coverage: [{
			type: "crotch",
			score: 2
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["drop-suck","sexy","naughty","going-out","bottoms"]
	},
	{
		name: "Party Girl Skirt",
		appliedName: "partygirlskirt",
		description: "A bubbly @@.boldtext;party@@ rainbow skirt.",
		displayImage: "images/player/clothing/partygirlskirt/portrait.png",
		type: "bottom",
		cost: 1250,
		coverage: [{
			type: "crotch",
			score: 2
		},
		{
			type: "skirt-length",
			score: 2
		}],
		modifiers: ["drop-suck","slutty","going-out","bottoms"]
	},
	{
		name: "Cindanar Pants",
		appliedName: "boothbabepants",
		description: "A pair of @@.boldtext;sexy@@ Cindanar pants.",
		displayImage: "images/player/clothing/boothbabepants/portrait.png",
		type: "bottom",
		cost: 1100,
		coverage: [{
			type: "crotch",
			score: 2
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["eventia","slutty","sexy","bottoms","nopanties"]
	},
	{
		name: "Stains Micropants",
		appliedName: "stainsbottom",
		description: "A pair of @@.boldtext;slutty@@ Stains micropants.",
		displayImage: "images/player/clothing/stainsbottom/portrait.png",
		type: "bottom",
		cost: 9500,
		coverage: [{
			type: "crotch",
			score: 1
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["eventia","slutty","sexy","naughty","trashy","bottoms","nopanties"]
	},
	{
		name: "Red Leggings",
		appliedName: "redlatexleggings",
		description: "A pair of red @@.boldtext;sexy@@ latex leggings.",
		displayImage: "images/player/clothing/redlatexleggings/portrait.png",
		type: "bottom",
		cost: 1500,
		coverage: [{
			type: "crotch",
			score: 2
		},
		{
			type: "skirt-length",
			score: 3
		}],
		modifiers: ["drop-suck","slutty","sexy","naughty","bottoms","nopanties"]
	}
	];
	let bras = [{
		name: "eVentia Bra",
		appliedName: "eventiabra",
		description: "A standard @@.boldtext;casual@@ bra piece.",
		displayImage: "images/player/clothing/eventiabra/portrait.png",
		type: "bra",
		cost: 220,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["eventia","bra","casual","professional"]
	},
	{
		name: "Pink Bra",
		appliedName: "pinkbra",
		description: "A sexy @@.boldtext;naughty@@ pink bra.",
		displayImage: "images/player/clothing/pinkbra/portrait.png",
		type: "bra",
		cost: 225,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["casual-cazy","bra","naughty","slutty"]
	},
	{
		name: "Red Lace Bra",
		appliedName: "redlacebra",
		description: "A sexy @@.boldtext;naughty@@ red lace bra.",
		displayImage: "images/player/clothing/redlacebra/portrait.png",
		type: "bra",
		cost: 350,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["viz-liz","bra","naughty","slutty","trashy"]
	},
	{
		name: "Black Corset",
		appliedName: "blackcorset",
		description: "A sexy @@.boldtext;naughty@@ black corset.",
		displayImage: "images/player/clothing/blackcorset/portrait.png",
		type: "bra",
		cost: 750,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["viz-liz","corset","bra","naughty","sexy"]
	},
	{
		name: "Black Lace Bra",
		appliedName: "blacklacebra",
		description: "A sexy @@.boldtext;naughty@@ black lace bra.",
		displayImage: "images/player/clothing/blacklacebra/portrait.png",
		type: "bra",
		cost: 350,
		coverage: [{
			type: "tits",
			score: 1
		}],
		modifiers: ["viz-liz","bra","naughty","slutty","trashy"]
	}];
	let panties = [
	{
		name: "Grey Briefs",
		appliedName: "greybriefs",
		description: "A grey pair of @@.boldtext;casual@@ breifs.",
		displayImage: "images/player/clothing/greybriefs/portrait.png",
		type: "pantie",
		cost: 220,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["casual-cazy","panties","casual"]
	},
	{
		name: "eVentia Panties",
		appliedName: "eventiapanties",
		description: "A pair of @@.boldtext;casual@@ eVentia panties.",
		displayImage: "images/player/clothing/eventiapanties/portrait.png",
		type: "pantie",
		cost: 0,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["eventia","panties","casual","professional"]
	},
	{
		name: "Pink Panties",
		appliedName: "pinkpanties",
		description: "A pair of @@.boldtext;naughty@@ pink panties.",
		displayImage: "images/player/clothing/pinkpanties/portrait.png",
		type: "pantie",
		cost: 350,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["casual-cazy","panties","naughty","slutty"]
	},
	{
		name: "Trans. Panties",
		appliedName: "seethroughpanties",
		description: "A pair of @@.boldtext;see-through@@ panties.",
		displayImage: "images/player/clothing/seethroughpanties/portrait.png",
		type: "pantie",
		cost: 425,
		coverage: [],
		modifiers: ["viz-liz","panties","naughty","slutty","trashy"]
	},
	{
		name: "Black Thong",
		appliedName: "blackthong",
		description: "A pair of @@.boldtext;naughty@@ black thong.",
		displayImage: "images/player/clothing/blackthong/portrait.png",
		type: "pantie",
		cost: 325,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["viz-liz","panties","naughty","slutty","trashy"]
	},
	{
		name: "Red G-String",
		appliedName: "redgstring",
		description: "A pair of @@.boldtext;naughty@@ red g-string.",
		displayImage: "images/player/clothing/redgstring/portrait.png",
		type: "pantie",
		cost: 375,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["viz-liz","panties","naughty","slutty","trashy"]
	},
	{
		name: "White Lace Panties",
		appliedName: "whitelacepanties",
		description: "A pair of @@.boldtext;naughty@@ white lace panties.",
		displayImage: "images/player/clothing/whitelacepanties/portrait.png",
		type: "pantie",
		cost: 425,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["casual-cazy","panties","naughty","slutty"]
	},
	{
		name: "Black G-String",
		appliedName: "blackgstring",
		description: "A pair of @@.boldtext;naughty@@ black g-string.",
		displayImage: "images/player/clothing/blackgstring/portrait.png",
		type: "pantie",
		cost: 375,
		coverage: [{
			type: "crotch",
			score: 1
		}],
		modifiers: ["viz-liz","panties","naughty","slutty","trashy"]
	}
	];
	let stockings = [{
		name: "Frilly Stockings",
		appliedName: "maidstockings",
		description: "A pair of @@.boldtext;naughty@@ maid stockings.",
		displayImage: "images/player/clothing/maidstockings/portrait.png",
		type: "stockings",
		cost: 150,
		coverage: [],
		modifiers: ["eventia","slutty","professional","naughty","stockings"]
	},
	{
		name: "Latex Leggings",
		appliedName: "eventialatexleggings",
		description: "A pair of @@.boldtext;slutty@@ latex leggings.",
		displayImage: "images/player/clothing/eventialatexleggings/portrait.png",
		type: "stockings",
		cost: 250,
		coverage: [],
		modifiers: ["drop-suck","slutty","trashy","stockings"]
	},
	{
		name: "Cloth Leggings",
		appliedName: "eventiaclothleggings",
		description: "A pair of @@.boldtext;casual@@ cloth leggings.",
		displayImage: "images/player/clothing/eventiaclothleggings/portrait.png",
		type: "stockings",
		cost: 250,
		coverage: [],
		modifiers: ["eventia","casual","professional","stockings"]
	},
	{
		name: "Party Leggings",
		appliedName: "partygirlstockings",
		description: "A slutty pair of @@.boldtext;party@@ leggings.",
		displayImage: "images/player/clothing/partygirlstockings/portrait.png",
		type: "stockings",
		cost: 350,
		coverage: [],
		modifiers: ["drop-suck","slutty","going-out","stockings"]
	}];
	let feet = [
	{
		name: "Red Stilettos",
		appliedName: "redstilettos",
		description: "A pair of @@.boldtext;going-out@@ red stilettos.",
		displayImage: "images/player/clothing/redstilettos/portrait.png",
		type: "feet",
		cost: 560,
		coverage: [{
			type: "heel-height",
			score: 3
		}],
		modifiers: ["going-out","slutty","mega-heels","heels"]
	},
	{
		name: "Peeptoe Heels",
		appliedName: "peeptoestrapsandals",
		description: "A pair of @@.boldtext;casual@@ strap sandals.",
		displayImage: "images/player/clothing/peeptoestrapsandals/portrait.png",
		type: "feet",
		cost: 560,
		coverage: [{
			type: "heel-height",
			score: 2
		}],
		modifiers: ["casual","mega-heels","heels"]
	},
	{
		name: "Black Pumps",
		appliedName: "blackplatformpumps",
		description: "A pair of @@.boldtext;going-out@@ black pumps.",
		displayImage: "images/player/clothing/blackplatformpumps/portrait.png",
		type: "feet",
		cost: 560,
		coverage: [{
			type: "heel-height",
			score: 3
		}],
		modifiers: ["going-out","slutty","mega-heels","heels"]
	},
	{
		name: "eVentia Heels",
		appliedName: "eventiaheels",
		description: "A pair of @@.boldtext;casual@@ eVentia heels.",
		displayImage: "images/player/clothing/eventiaheels/portrait.png",
		type: "feet",
		cost: 0,
		coverage: [{
			type: "heel-height",
			score: 2
		}],
		modifiers: ["casual","eventia","heels","professional"]
	},
	{
		name: "Pink Pumps",
		appliedName: "pinkpumps",
		description: "A pair of @@.boldtext;going-out@@ pink pumps.",
		displayImage: "images/player/clothing/pinkpumps/portrait.png",
		type: "feet",
		cost: 750,
		coverage: [{
			type: "heel-height",
			score: 3
		}],
		modifiers: ["sexy","slutty","mega-heels","heels"]
	},
	{
		name: "Barbarian Greaves",
		appliedName: "sluttiaheels",
		description: "A pair of @@.boldtext;cosplay@@ barbarian greaves.",
		displayImage: "images/player/clothing/sluttiaheels/portrait.png",
		type: "feet",
		cost: 950,
		coverage: [],
		modifiers: ["cosplay","eventia","heels"]
	},
	{
		name: "Lada Heels",
		appliedName: "ladaheels",
		description: "A pair of @@.boldtext;sexy@@ black heels.",
		displayImage: "images/player/clothing/ladaheels/portrait.png",
		type: "feet",
		cost: 2500,
		coverage: [],
		modifiers: ["cosplay","eventia","heels","naughty","slutty","sexy"]
	},
	{
		name: "Hyper Boots",
		appliedName: "cyberboots",
		description: "A pair of @@.boldtext;casual@@ hyper boots.",
		displayImage: "images/player/clothing/cyberboots/portrait.png",
		type: "feet",
		cost: 4950,
		coverage: [],
		modifiers: ["hyper","eventia","heels","casual"]
	}
	];

	let returnClothes = tops.concat(bottoms,bras,panties,stockings,feet);
	return returnClothes;
}

setup.loadCosmetics = function () {
	let makeup = [
		{
			name: "No Makeup",
			description: "Simple removal of stamp or regular makeup.",
			applied: 0,
			type: "makeup",
			displayImage: "images/portraits/player/makeup-shop/remove.png",
			cost: 0,
			stampCost: 175
		},
		{
			name: "Light Makeup",
			description: "A light minimalistic makeup to clear most imperfections.",
			applied: 1,
			type: "makeup",
			displayImage: "images/portraits/player/makeup-shop/light.png",
			cost: 35,
			stampCost: 355
		},
		{
			name: "Sultry Makeup",
			description: "A sultry makeup to create allure and grab attention.",
			applied: 2,
			type: "makeup",
			displayImage: "images/portraits/player/makeup-shop/sultry.png",
			cost: 55,
			stampCost: 385
		},
		{
			name: "Heavy Makeup",
			description: "A heavy makeup to grab attention and send a message.",
			applied: 3,
			type: "makeup",
			displayImage: "images/portraits/player/makeup-shop/heavy.png",
			cost: 75,
			stampCost: 405
		}
	];
	let nails = [
		{
			name: "No Manicure & Pedicure",
			description: "Simple removal of stamp or regular manicure & pedicure.",
			applied: 0,
			type: "nails",
			displayImage: "images/portraits/player/manipedi-shop/remove.png",
			cost: 0,
			stampCost: 150
		},
		{
			name: "Light Pink",
			description: "A light pink manicure & pedicure. Stamp is permanent.",
			applied: 1,
			type: "nails",
			displayImage: "images/portraits/player/manipedi-shop/lightpink.png",
			cost: 65,
			stampCost: 255
		},
		{
			name: "Deep Black",
			description: "A deep black manicure & pedicure. Stamp is permanent.",
			applied: 2,
			type: "nails",
			displayImage: "images/portraits/player/manipedi-shop/deepblack.png",
			cost: 75,
			stampCost: 285
		},
		{
			name: "Bright Red",
			description: "A bright red manicure & pedicure. Stamp is permanent.",
			applied: 3,
			type: "nails",
			displayImage: "images/portraits/player/manipedi-shop/brightred.png",
			cost: 85,
			stampCost: 305
		}
	];
	let hairstyles = [
		{
			name: "Voss",
			description: "Neck-length and pulled to the side.",
			applied: 2,
			type: "hairstyles",
			appliedName: "voss",
			hairColors: ["black","blonde","darkbrown","lightbrown","auburn"],
			displayImage: "images/portraits/player/stylist-shop/voss/black.png",
			cost: 350
		},
		{
			name: "Perrin",
			description: "Long and braided with bangs.",
			applied: 3,
			type: "hairstyles",
			appliedName: "perrin",
			hairColors: ["black","blonde"],
			displayImage: "images/portraits/player/stylist-shop/perrin/blonde.png",
			cost: 350
		},
		{
			name: "Sloane",
			description: "Tied in two chest-length pigtails.",
			applied: 4,
			type: "hairstyles",
			appliedName: "pigtails",
			hairColors: ["pink"],
			displayImage: "images/portraits/player/stylist-shop/pigtails/pink.png",
			cost: 350
		}
	];
	let returnCosmetics = makeup.concat(nails,hairstyles);
	return returnCosmetics;
}

setup.loadPiercings = function () {
	let piercings = [
	{
		name: "Barbell Tongue Piercing",
		apply: "none",
		description: "A barbell piercing fitted through the tongue. Kinky.",
		textDescription: "Your tongue has been pierced with a barbell piercing.",
		view: "facial",
		slot: "tongue",
		typeAdd: "blowjob",
		valueAdd: 1,
		cost: 450
	},
	{
		name: "Barbell Nipple Piercings",
		apply: "barbell-stud",
		description: "A pair of barbell piercings fitted through the nipples.",
		textDescription: "Your nipples have been pierced with barbell piercings.",
		view: "body",
		slot: "nipples",
		typeAdd: "sex",
		valueAdd: 1,
		cost: 750
	},
	{
		name: "Clitoris Piercing",
		apply: "clitoris-piercing",
		description: "A single piercing fitted through the clitoris.",
		textDescription: "Your clitoris has been pierced with a 'steel'-stud piercing.",
		view: "body",
		slot: "clitoris",
		typeAdd: "sex",
		valueAdd: 1,
		cost: 750
	},
	{
		name: "Labret Piercing",
		apply: "labret-stud",
		description: "A labret 'steel'-stud fitted below the lower lip.",
		textDescription: "Just below your lower lip, you have a labret 'steel'-stud piercing.",
		view: "facial",
		slot: "labret",
		typeAdd: "none",
		valueAdd: 0,
		cost: 150
	},
	{
		name: "Nose Piercing",
		apply: "nose-stud",
		description: "A 'steel'-stud fitted through the left side of the nose.",
		textDescription: "Your nose has been pierced on the left side with a 'steel'-stud piercing.",
		view: "facial",
		slot: "nose",
		typeAdd: "none",
		valueAdd: 0,
		cost: 150
	}
	];
	return piercings;
}

setup.loadTattoos = function () {
	let tattoos = [
	{
		name: "Cyber Doll",
		apply: "cyberdoll",
		description: "A tramp stamp reading 'Cyber Doll'.<br>",
		textDescription: "Your lower back has been tattooed with a tramp stamp reading 'Cyber Doll'.",
		view: "back",
		slot: "lower back",
		typeAdd: "trashy",
		valueAdd: 1,
		cost: 500
	},
	{
		name: "100 Units Whore",
		apply: "advertisement-100",
		description: "A whorish tattoo that advertises your cunt.<br>",
		textDescription: "Your lower stomach reads 'only 100 units', advertising your cunt to just about anyone.",
		view: "front",
		slot: "lower stomach",
		typeAdd: "trashy",
		valueAdd: 1,
		cost: 350
	},
	{
		name: "Mega Slut",
		apply: "mega-slut",
		description: "A slutty tattoo that reads 'Mega-Slut' above your crotch.",
		textDescription: "Your lower stomach reads 'Mega-Slut', advertising to everyone what a massive slut you are.",
		view: "front",
		slot: "lower stomach",
		typeAdd: "slutty",
		valueAdd: 1,
		cost: 350
	},
	{
		name: "Ready For Use",
		apply: "ready-for-use",
		description: "A slutty tattoo that reads 'Ready For Use' on your left collarbone.",
		textDescription: "Your left collarbone reads 'Ready For Use', advertising to everyone that you are in-service.",
		view: "front",
		slot: "left collarbone",
		typeAdd: "slutty",
		valueAdd: 1,
		cost: 350
	}
	];
	return tattoos;
}

setup.loadPresetOutfit = function (outfit) {
	console.log("Loading " + outfit + " outfit...");
	let presetOutfits = [
		{
			name: "starter",
			parts: ["eVentia Jacket","eVentia Slacks","eVentia Bra","eVentia Panties","eVentia Heels"]
		},
		{
			name: "starterGirl",
			parts: ["White Camisole","Pink Bra","Pink Panties","Peeptoe Heels","Grey Jeans"]
		},
		{
			name: "naked",
			parts: []
		},
		{
			name: "receptionist",
			parts: ["Receptionist Top","Receptionist Skirt","Black Thong","Black Pumps"]
		},
		{
			name: "sluttyreceptionist",
			parts: ["Receptionist Top","Rec. Micro Skirt","Black Thong","Black Pumps"]
		},
		{
			name: "maid",
			parts: ["French Maid Dress","Black Lace Bra","Black G-String","Black Pumps","Frilly Stockings"]
		},
		{
			name: "stripper",
			parts: ["School Girl Top","School Girl Skirt","Black G-String","Black Pumps"]
		},
		{
			name: "carshow",
			parts: ["Wet Look Top","Wet Look Leggings","Black Pumps"]
		},
		{
			name: "sluttia",
			parts: ["Sluttia Armor","Sluttia Loin Cloth","Barbarian Greaves"]
		},
		{
			name: "gangbang",
			parts: ["Promotion Top","Promo Hot Pants","Black Pumps"]
		},
		{
			name: "cindanar",
			parts: ["Cindanar Top","Cindanar Pants","Pink Pumps"]
		},
		{
			name: "stains",
			parts: ["Stains Top","Stains Micropants","Black Pumps"]
		},
		{
			name: "lingerie",
			parts: ["Red Lace Bra","Red G-String","Red Stilettos"]
		}
	];
	let loadedOutfit = [];
	for (let i = 0; i < presetOutfits.length; i++) {
		if (presetOutfits[i].name == outfit) {
			loadedOutfit = presetOutfits[i].parts;
		}
	}
	return loadedOutfit;
}

setup.stashOutfit = function (entity) {
	let stashedOutfit = [];
	for (let i = 0; i < entity.clothes.length; i++) {
		stashedOutfit.push(entity.clothes[i].name);
	}
	return stashedOutfit;
}

setup.equipOutfit = function (entity, outfit, stash) {
	let clothes = setup.loadClothes();
	if (outfit != "stashedOutfit") {
		var equipped = setup.loadPresetOutfit(outfit);
		console.log("Loaded: " + equipped);
	} else {
		var equipped = SugarCube.State.variables.clothes.stashedOutfit;
	}
	if (stash != "nostash") {
		SugarCube.State.variables.clothes.stashedOutfit = setup.stashOutfit(entity);
		//console.log("Stashed outfit succesfully.");
	} else {
		console.log("NOTICE: No stashing occured.");
	}
	setup.cleanOutfit(entity);
	for (let i = 0; i < equipped.length; i++) {
		for (let n = 0; n < clothes.length; n++) {
			if (equipped[i] == clothes[n].name) {
				setup.wear(entity, n);
			}
		}
	}
}

setup.cleanOutfit = function (entity) {
	console.log("Cleaning outfit on " + entity.name + "...");
	setup.unwear(entity, "top");
	setup.unwear(entity, "bottom");
	setup.unwear(entity, "bra");
	setup.unwear(entity, "pantie");
	setup.unwear(entity, "stockings");
	setup.unwear(entity, "feet");
	console.log("Done cleaning outfit.");
}

setup.wardrobe = function (entity, itemType, title) {
	let clothesArr = setup.loadClothes();
	//let returnWardrobe = "@@.boldtext;" + title + "@@<br>-------------------------------------";
	let returnWardrobe = "";
	let wardrobe = SugarCube.State.variables.clothes.wardrobeShow;
	let showClothes = false;
	console.log(wardrobe.tops);
	if (title == "Tops" && SugarCube.State.variables.clothes.wardrobeShow.tops == false) {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-tops'><span class='lbb'><<button 'Tops'>><<set $clothes.wardrobeShow.tops = true>>" + 
		"<<replace '#wardrobe-tops'>><span id='wardrobe-tops'><<= setup.wardrobe($player, 'top', 'Tops')>></span><</replace>><</button>></span></span>";
	} else if (title == "Tops" && SugarCube.State.variables.clothes.wardrobeShow.tops == true)  {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-tops'><span class='lbb'><<button 'Tops'>><<set $clothes.wardrobeShow.tops = false>>" + 
		"<<replace '#wardrobe-tops'>><span id='wardrobe-tops'><<= setup.wardrobe($player, 'top', 'Tops')>></span><</replace>><</button>></span></span>";
		showClothes = true;
	}
	if (title == "Bottoms" && SugarCube.State.variables.clothes.wardrobeShow.bottoms == false) {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-bottoms'><span class='lbb'><<button 'Bottoms'>><<set $clothes.wardrobeShow.bottoms = true>>" + 
		"<<replace '#wardrobe-bottoms'>><span id='wardrobe-bottoms'><<= setup.wardrobe($player, 'bottom', 'Bottoms')>></span><</replace>><</button>></span></span>";
	} else if (title == "Bottoms" && SugarCube.State.variables.clothes.wardrobeShow.bottoms == true)  {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-bottoms'><span class='lbb'><<button 'Bottoms'>><<set $clothes.wardrobeShow.bottoms = false>>" + 
		"<<replace '#wardrobe-bottoms'>><span id='wardrobe-bottoms'><<= setup.wardrobe($player, 'bottom', 'Bottoms')>></span><</replace>><</button>></span></span>";
		showClothes = true;
	}
	if (title == "Bras" && SugarCube.State.variables.clothes.wardrobeShow.bras == false) {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-bras'><span class='lbb'><<button 'Bras'>><<set $clothes.wardrobeShow.bras = true>>" + 
		"<<replace '#wardrobe-bras'>><span id='wardrobe-bras'><<= setup.wardrobe($player, 'bra', 'Bras')>></span><</replace>><</button>></span></span>";
	} else if (title == "Bras" && SugarCube.State.variables.clothes.wardrobeShow.bras == true)  {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-bras'><span class='lbb'><<button 'Bras'>><<set $clothes.wardrobeShow.bras = false>>" + 
		"<<replace '#wardrobe-bras'>><span id='wardrobe-bras'><<= setup.wardrobe($player, 'bra', 'Bras')>></span><</replace>><</button>></span></span>";
		showClothes = true;
	}
	if (title == "Panties" && SugarCube.State.variables.clothes.wardrobeShow.panties == false) {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-panties'><span class='lbb'><<button 'Panties'>><<set $clothes.wardrobeShow.panties = true>>" + 
		"<<replace '#wardrobe-panties'>><span id='wardrobe-panties'><<= setup.wardrobe($player, 'pantie', 'Panties')>></span><</replace>><</button>></span></span>";
	} else if (title == "Panties" && SugarCube.State.variables.clothes.wardrobeShow.panties == true)  {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-panties'><span class='lbb'><<button 'Panties'>><<set $clothes.wardrobeShow.panties = false>>" + 
		"<<replace '#wardrobe-panties'>><span id='wardrobe-panties'><<= setup.wardrobe($player, 'pantie', 'Panties')>></span><</replace>><</button>></span></span>";
		showClothes = true;
	}
	if (title == "Stockings" && SugarCube.State.variables.clothes.wardrobeShow.stockings == false) {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-stockings'><span class='lbb'><<button 'Stockings'>><<set $clothes.wardrobeShow.stockings = true>>" + 
		"<<replace '#wardrobe-stockings'>><span id='wardrobe-stockings'><<= setup.wardrobe($player, 'stockings', 'Stockings')>></span><</replace>><</button>></span></span>";
	} else if (title == "Stockings" && SugarCube.State.variables.clothes.wardrobeShow.stockings == true)  {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-stockings'><span class='lbb'><<button 'Stockings'>><<set $clothes.wardrobeShow.stockings = false>>" + 
		"<<replace '#wardrobe-stockings'>><span id='wardrobe-stockings'><<= setup.wardrobe($player, 'stockings', 'Stockings')>></span><</replace>><</button>></span></span>";
		showClothes = true;
	}
	if (title == "Feet" && SugarCube.State.variables.clothes.wardrobeShow.feet == false) {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-feet'><span class='lbb'><<button 'Feet'>><<set $clothes.wardrobeShow.feet = true>>" + 
		"<<replace '#wardrobe-feet'>><span id='wardrobe-feet'><<= setup.wardrobe($player, 'feet', 'Feet')>></span><</replace>><</button>></span></span>";
	} else if (title == "Feet" && SugarCube.State.variables.clothes.wardrobeShow.feet == true)  {
		returnWardrobe = returnWardrobe + "<span id='wardrobe-feet'><span class='lbb'><<button 'Feet'>><<set $clothes.wardrobeShow.feet = false>>" + 
		"<<replace '#wardrobe-feet'>><span id='wardrobe-feet'><<= setup.wardrobe($player, 'feet', 'Feet')>></span><</replace>><</button>></span></span>";
		showClothes = true;
	}
	if (showClothes == true) {
		returnWardrobe = returnWardrobe + "<br><br>";
		for (let i = 0; i < clothesArr.length; i++) {
			if (clothesArr[i].type == itemType) {
				if (SugarCube.State.variables.clothes.owned.includes(clothesArr[i].name)) {
					//console.log(clothesArr[i].name + ": Displayed.");
					returnWardrobe = returnWardrobe + "<div class='wardrobe-container'><div class='default-portrait'><img src='" + clothesArr[i].displayImage + "' style='border-radius:0.8em;' width=100% height=100%>" + 
					"</div><div class='default-text'>@@.boldtext;" + clothesArr[i].name + "@@<br>" + clothesArr[i].description + "<br>" + 
					"<span class='lbb'><<button 'Wear'>><<= setup.wear($player, " + i + ")>>" + 
					"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
					"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</button>></span></div></div>";
				} else {
					//console.log(clothesArr[i].name + ": Not Owned.");
				}
			}
		}
	}
	return returnWardrobe;
}

setup.wear = function (entity, wearableID) {
	let wearables = setup.loadClothes();
	console.log("Wearing: " + wearables[wearableID].name);
	let check = setup.checkWorn(entity, wearables[wearableID].type);
	if (check == true) {
		setup.unwear(entity, wearables[wearableID].type, "noupdate");
	}
	//Clothing Rules///
	if (wearables[wearableID].modifiers.includes("nobra")){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].type == "bra") {
				setup.unwear(entity, "bra", "noupdate");
			}
		}
	}
	if (wearables[wearableID].type == "bra"){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].modifiers.includes("nobra")) {
				setup.unwear(entity, entity.clothes[a].type, "noupdate");
			}
		}
	}
	if (wearables[wearableID].modifiers.includes("nostockings")){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].type == "stockings") {
				setup.unwear(entity, "stockings", "noupdate");
			}
		}
	}
	if (wearables[wearableID].type == "stockings"){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].modifiers.includes("nostockings")) {
				setup.unwear(entity, entity.clothes[a].type, "noupdate");
			}
		}
	}
	if (wearables[wearableID].modifiers.includes("nopanties")){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].type == "pantie") {
				setup.unwear(entity, "pantie", "noupdate");
			}
		}
	}
	if (wearables[wearableID].type == "pantie"){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].modifiers.includes("nopanties")) {
				setup.unwear(entity, entity.clothes[a].type, "noupdate");
			}
		}
	}
	if (wearables[wearableID].modifiers.includes("noskirts")){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].modifiers.includes("skirt")) {
				setup.unwear(entity, entity.clothes[a].type, "noupdate");
			}
		}
	}
	if (wearables[wearableID].modifiers.includes("skirt")){
		for (let a = 0; a < entity.clothes.length; a++) {
			if (entity.clothes[a].modifiers.includes("noskirts")) {
				setup.unwear(entity, entity.clothes[a].type, "noupdate");
			}
		}
	}
	///Push///
	entity.clothes.push(wearables[wearableID]);
	setup.updateClothes(entity);
}

setup.unwear = function (entity, type, update) {
	for (let n = 0; n < entity.clothes.length; n++) {
		if (entity.clothes[n].type == type) {
			console.log("Unwearing " + entity.clothes[n].name + "...");
			if (entity.clothes[n].modifiers.includes("casual")) {
				setup.decScore(entity, "casual", 1);
			}
			if (entity.clothes[n].modifiers.includes("professional")) {
				setup.decScore(entity, "professional", 1);
			}
			if (entity.clothes[n].modifiers.includes("slutty")) {
				setup.decScore(entity, "slutty", 1);
			}
			if (entity.clothes[n].modifiers.includes("sexy")) {
				setup.decScore(entity, "sexy", 1);
			}
			if (entity.clothes[n].modifiers.includes("trashy")) {
				setup.decScore(entity, "trashy", 1);
			}
			if (entity.clothes[n].modifiers.includes("naughty")) {
				setup.decScore(entity, "naughty", 1);
			}
			if (entity.clothes[n].modifiers.includes("going-out")) {
				setup.decScore(entity, "going-out", 1);
			}
			entity.clothes.splice(n, 1);
		}
	}
	if (update == undefined) {
		setup.updateClothes(entity);
	}
}

setup.updateClothes = function (entity) {
	///Check Top & Bottom///
	console.log("Updating Clothing Stats...");
	let wearingTop = setup.checkWorn(entity, "top");
	let wearingBottom = setup.checkWorn(entity, "bottom");
	for (let s = 0; s < entity.scores.length; s++) {
		if (entity.scores[s].type == "style" || entity.scores[s].type == "coverage" || entity.scores[s].type == "heel-height" || entity.scores[s].type == "skirt-length"){
			entity.scores[s].score = 0;
		}
	}
	for (let i = 0; i < entity.clothes.length; i++) {
		let applyStats = true;
		if (wearingTop == true && entity.clothes[i].type == "bra") {
			applyStats = false;
		}
		if (wearingBottom == true && entity.clothes[i].type == "pantie") {
			applyStats = false;
		}
		if (applyStats == true){
			if (entity.clothes[i].modifiers.includes("casual")) {
				setup.incScore(entity, "casual", 1);
			}
			if (entity.clothes[i].modifiers.includes("professional")) {
				setup.incScore(entity, "professional", 1);
			}
			if (entity.clothes[i].modifiers.includes("slutty")) {
				setup.incScore(entity, "slutty", 1);
			}
			if (entity.clothes[i].modifiers.includes("sexy")) {
				setup.incScore(entity, "sexy", 1);
			}
			if (entity.clothes[i].modifiers.includes("trashy")) {
				setup.incScore(entity, "trashy", 1);
			}
			if (entity.clothes[i].modifiers.includes("naughty")) {
				setup.incScore(entity, "naughty", 1);
			}
			if (entity.clothes[i].modifiers.includes("going-out")) {
				setup.incScore(entity, "going-out", 1);
			}
			if (entity.clothes[i].modifiers.includes("going-out")) {
				setup.incScore(entity, "going-out", 1);
			}
			for (let n = 0; n < entity.clothes[i].coverage.length; n++) {
				setup.setScore(entity, entity.clothes[i].coverage[n].type, entity.clothes[i].coverage[n].score);
			}
		}
	}
}

setup.checkWorn = function (entity, type) {
	let check = false;
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == type) {
			check = true;
		}
	}
	return check;
}

setup.wornClothes = function (entity, wardrobePassage) {
	let clothes = setup.loadClothes();
	let returnWorn = "";
	//console.log("-----------entity Wardrobe-----------");
	///Top///
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == "top") {
			returnWorn = returnWorn + "Top: @@.boldtext;" + entity.clothes[i].name + "@@ - <<link 'Take Off'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>>" + 
			"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
			"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</link>><br>";
			console.log("Wearing " + clothes[i].name + " as top.");
			break;
		}
	}
	///Bra///
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == "bra") {
			returnWorn = returnWorn + "Bra: @@.boldtext;" + entity.clothes[i].name + "@@ - <<link 'Take Off'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>>" + 
			"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
			"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</link>><br>";
			//console.log("Wearing " + clothes[i].name + " as bra.");
			break;
		}
	}
	///Bottom///
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == "bottom") {
			returnWorn = returnWorn + "Bottom: @@.boldtext;" + entity.clothes[i].name + "@@ - <<link 'Take Off'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>>" + 
			"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
			"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</link>><br>";
			//console.log("Wearing " + clothes[i].name + " as bottom.");
			break;
		}
	}
	///Pantie///
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == "pantie") {
			returnWorn = returnWorn + "Pantie: @@.boldtext;" + entity.clothes[i].name + "@@ - <<link 'Take Off'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>>" + 
			"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
			"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</link>><br>";
			//console.log("Wearing " + clothes[i].name + " as pantie.");
			break;
		}
	}
	///Stockings///
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == "stockings") {
			returnWorn = returnWorn + "Stockings: @@.boldtext;" + entity.clothes[i].name + "@@ - <<link 'Take Off'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>>" + 
			"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
			"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</link>><br>";
			//console.log("Wearing " + clothes[i].name + " as stockings.");
			break;
		}
	}
	///Heels///
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == "feet") {
			returnWorn = returnWorn + "Feet: @@.boldtext;" + entity.clothes[i].name + "@@ - <<link 'Take Off'>><<= setup.unwear($player, '" + entity.clothes[i].type + "')>>" + 
			"<<replace '#pinup'>><div id='pin-up'><<include 'Player Pin Up'>></div><</replace>>" + 
			"<<replace '#worn-clothes'>><div id='worn-clothes'><<= setup.wornClothes($player)>></div><</replace>><</link>><br>";
			//console.log("Wearing " + clothes[i].name + " on feet.");
			break;
		}
	}
	console.log(entity.clothes);
	return returnWorn + "<br>" + setup.examineDetails(entity);
}

