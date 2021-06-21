setup.pinupModel = function (entity, view) {
	if (entity == undefined) {
		entity = SugarCube.State.variables.player;
	}
	if (view == undefined) {
		view = SugarCube.State.variables.pinupView;
	}
	//Makeup
	let makeup = ["","<img src='images/player/female/makeup/light.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>",
	"<img src='images/player/female/makeup/sultry.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>",
	"<img src='images/player/female/makeup/heavy.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>"];
	let show = {
	body: "",
	hair: "",
	makeup: "",
	smear: "",
	panties: "",
	bra: "",
	feet: "",
	stockings: "",
	tops: "",
	bottoms: "",
	facialPiercings: "",
	bodyPiercings: "",
	tattoos: "",
	genitals: ""
	};
	let pcMaleBody = entity.intBody;
	let showMale = "<img class='img-test' src='" + pcMaleBody + "' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
	if (entity.body.torso.bodyType == 0 && view == "front") {
		//console.log("Pinup: Displayed Frontal.");
		///Hair///
		show.hair = "<img src='images/player/female/head/" + entity.body.hair.styleName + "/" + entity.body.hair.color + 
		".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
		///Makeup///
		show.makeup = makeup[entity.body.face.makeup];
		if (entity.body.face.isSmeared == true && entity.body.face.makeup >= 1) {
			show.smear = "<img src='images/player/female/makeup/smear.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
		}
		///Body///
		show.body = "<img src='images/player/female/body/" + tits.pinupRange[entity.body.tits.size] + 
		".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
		///Genitals///
		let genitalsCover = false;
		for (let g = 0; g < entity.clothes.length; g++) {
			if (entity.clothes[g].type == "pantie" || entity.clothes[g].type == "bottom") {
				genitalsCover = true;
			} 
		}
		if (genitalsCover == false) {
			for (let i = 0; i < entity.body.genitals.current.length; i++) {
				if (entity.body.genitals.current[i].type == "penis") {
					show.genitals = show.genitals + "<img src='images/player/genitals/penis-natural/" + penis.pinupRange[entity.body.genitals.current[i].size] + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				}
			}
		}
		///Piercings///
		for (let i = 0; i < entity.piercings.length; i++) {
			if (entity.piercings[i].apply != "none") {
				if (entity.piercings[i].view == "facial") {
					show.facialPiercings = show.facialPiercings + "<img src='images/player/piercings/" + entity.piercings[i].apply + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				} else {
					if (entity.piercings[i].slot == "nipples") {
						show.bodyPiercings = show.bodyPiercings + "<img src='images/player/piercings/barbell-tits-" + tits.pinupRange[entity.body.tits.size] + 
						".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
					} else {
					show.bodyPiercings = show.bodyPiercings + "<img src='images/player/piercings/" + entity.piercings[i].apply + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
					}
				}
			}
		}
		///Clothes///
		show.panties = setup.getPinupClothes(entity, "pantie", "front");
		show.bra = setup.getPinupClothes(entity, "bra", "front");
		show.feet = setup.getPinupClothes(entity, "feet", "front");
		show.stockings = setup.getPinupClothes(entity, "stockings", "front");
		show.tops = setup.getPinupClothes(entity, "top", "front");
		show.bottoms = setup.getPinupClothes(entity, "bottom", "front");
	} else if (entity.body.torso.bodyType == 0 && view == "back") {
		//console.log("Pinup: Displayed Back.");
		///Hair///
		show.hair = "<img src='images/player/female/head/" + entity.body.hair.styleName + "/back/" + entity.body.hair.color + 
		".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
		///Body///
		show.body = "<img src='images/player/female/body/back/" + ass.pinupRange[entity.body.ass.size] + 
		".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
		///Clothes///
		show.panties = setup.getPinupClothes(entity, "pantie", "back");
		show.bra = setup.getPinupClothes(entity, "bra", "back");
		show.feet = setup.getPinupClothes(entity, "feet", "back");
		show.stockings = setup.getPinupClothes(entity, "stockings", "back");
		show.tops = setup.getPinupClothes(entity, "top", "back");
		show.bottoms = setup.getPinupClothes(entity, "bottom", "back");
		//
	}
	///Tattoos///
	for (let i = 0; i < entity.tattoos.length; i++) {
		if (entity.tattoos[i].view == view) {
			show.tattoos = show.tattoos + "<img src='images/player/tattoos/" + view + "/" + entity.tattoos[i].apply + ".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
		}
	}
	///Final View///
	if (view == "front") {
		if (entity.body.torso.bodyType == 1) {
			return showMale;
		} else {
			return show.body + show.tattoos + show.bodyPiercings + show.genitals + show.bra + show.panties + show.stockings + show.feet + show.bottoms + show.tops + show.hair + show.makeup + show.smear + show.facialPiercings;
		}	
	} else {
		return show.hair + show.body + show.tattoos + show.panties + show.bra + show.stockings + show.feet + show.bottoms + show.tops;
	}
}
setup.getPinupClothes = function (entity, type, view) {
	let returnPath = "";
	let found = false;
	for (let i = 0; i < entity.clothes.length; i++) {
		if (entity.clothes[i].type == type) {
			switch (type) {
				case "pantie":
				if (view == "back") {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + "/" + ass.pinupRange[entity.body.ass.size] + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				} else {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + 
					"/panties.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				}
				found = true;
				break;
				case "bra":
				if (view == "front") {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + "/" + tits.pinupRange[entity.body.tits.size] + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				} else {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + 
					"/bra.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				}
				found = true;
				break;
				case "feet":
				returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + 
				"/feet.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				break;
				case "stockings":
				returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + 
				"/stockings.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				found = true;
				break;
				case "top":
				if (view == "front") {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + "/" + tits.pinupRange[entity.body.tits.size] + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				} else {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + 
					"/top.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				}
				found = true;
				break;
				case "bottom":
				if (view == "back") {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + "/" + ass.pinupRange[entity.body.ass.size] + 
					".png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				} else {
					returnPath = "<img src='images/player/clothing/" + entity.clothes[i].appliedName + "/" + view + 
					"/bottom.png' style='position: absolute; margin: auto; left: 0; right: 0; text-align: center; z-index: 1;' width=100% height=100%>";
				}
				found = true;
				break;
				default:
				returnPath = "";
				found = true;
				break;
			}
			if (found == true) {
				break;
			}
		}
		
	}
	//console.log("Path: " + returnPath);
	return returnPath;
}
$('<div id="pczoom-bar"></div>').insertBefore("#story");