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
	let pre = pronouns;
	if (entity.gender == "male"){
		if (capital == "B"){
			return pre.male.b_heshe;
		} else {
			return pre.male.s_heshe;
		}
	} else {
		if (capital == "B"){
			return pre.female.b_heshe;
		} else {
			return pre.female.s_heshe;
		}
	}
}

setup.himher = function (entity, capital) {
	let pre = pronouns;
	if (entity.gender == "male"){
		if (capital == "B"){
			return pre.male.b_himher;
		} else {
			return pre.male.s_himher;
		}
	} else {
		if (capital == "B"){
			return pre.female.b_himher;
		} else {
			return pre.female.s_himher;
		}
	}
}

setup.hisher = function (entity, capital) {
	let pre = pronouns;
	if (entity.gender == "male"){
		if (capital == "B"){
			return pre.male.b_hisher;
		} else {
			return pre.male.s_hisher;
		}
	} else {
		if (capital == "B"){
			return pre.female.b_hisher;
		} else {
			return pre.female.s_hisher;
		}
	}
}

setup.hishers = function (entity, capital) {
	let pre = pronouns;
	if (entity.gender == "male"){
		if (capital == "B"){
			return pre.male.b_hishers;
		} else {
			return pre.male.s_hishers;
		}
	} else {
		if (capital == "B"){
			return pre.female.b_hishers;
		} else {
			return pre.female.s_hishers;
		}
	}
}

setup.himselfherself = function (entity, capital) {
	let pre = pronouns;
	if (entity.gender == "male"){
		if (capital == "B"){
			return pre.male.b_himselfherself;
		} else {
			return pre.male.s_himselfherself;
		}
	} else {
		if (capital == "B"){
			return pre.female.b_himselfherself;
		} else {
			return pre.female.s_himselfherself;
		}
	}
}