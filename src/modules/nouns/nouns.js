var pronouns = {
	male: {
		s_heshe: "he",
		b_heshe: "He",
		s_himher: "him",
		b_himher: "Him",
		s_hisher: "his",
		b_hisher: "His",
		s_hishers: "his",
		b_hishers: "His",
		s_himselfherself: "himself",
		b_himselfherself: "Himself"
	},
	female: {
		s_heshe: "she",
		b_heshe: "She",
		s_himher: "her",
		b_himher: "Her",
		s_hisher: "her",
		b_hisher: "Her",
		s_hishers: "hers",
		b_hishers: "Hers",
		s_himselfherself: "herself",
		b_himselfherself: "Herself"
	}
};

setup.pickNoun = function (picker) {
	var nP = Math.floor(Math.random() * picker.nouns.length);
	return picker.nouns[nP];
}

setup.heshe = function (entity, capital) {
	let p = pronouns;
	let r = "Error: No noun found.";
	switch(entity.gender) {
		case "male":
			r = p.male.s_heshe
			if (capital == "B") {
				r = p.male.b_heshe;
			}
			break;
		default:
			r = p.female.s_heshe
			if (capital == "B") {
				r = p.female.b_heshe;
			}
			break;
	}
	return r;
}

setup.himher = function (entity, capital) {
	let p = pronouns;
	let r = "Error: No noun found.";
	switch(entity.gender) {
		case "male":
			r = p.male.s_himher
			if (capital == "B") {
				r = p.male.b_himher;
			}
			break;
		default:
			r = p.female.s_himher
			if (capital == "B") {
				r = p.female.b_himher;
			}
			break;
	}
	return r;
}

setup.hisher = function (entity, capital) {
	let p = pronouns;
	let r = "Error: No noun found.";
	switch(entity.gender) {
		case "male":
			r = p.male.s_hisher
			if (capital == "B") {
				r = p.male.b_hisher;
			}
			break;
		default:
			r = p.female.s_hisher
			if (capital == "B") {
				r = p.female.b_hisher;
			}
			break;
	}
	return r;
}

setup.hishers = function (entity, capital) {
	let p = pronouns;
	let r = "Error: No noun found.";
	switch(entity.gender) {
		case "male":
			r = p.male.s_hishers
			if (capital == "B") {
				r = p.male.b_hishers;
			}
			break;
		default:
			r = p.female.s_hishers
			if (capital == "B") {
				r = p.female.b_hishers;
			}
			break;
	}
	return r;
}

setup.himselfherself = function (entity, capital) {
	let p = pronouns;
	let r = "Error: No noun found.";
	switch(entity.gender) {
		case "male":
			r = p.male.s_himselfherself
			if (capital == "B") {
				r = p.male.b_himselfherself;
			}
			break;
		default:
			r = p.female.s_himselfherself
			if (capital == "B") {
				r = p.female.b_himselfherself;
			}
			break;
	}
	return r;
}