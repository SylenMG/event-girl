Object.defineProperty(window, "v", {
	get: function () {
		return State.variables;
	}
});
Object.defineProperty(window, "t", {
	get: function () {
		return State.temporary;
	}
});
Object.defineProperty(window, "setup", {
	get: function () {
		return setup;
	}
});

$('<div id="notification-bar"></div>').insertAfter("#story");
$('<div id="background-left"></div>').insertBefore("#story");

Config.history.maxStates = 10;
Config.saves.autoload = "prompt";
Config.saves.autosave = ["autosave"];

predisplay["Menu Return"] = function (taskName) {
	if (!tags().contains("noreturn")) {
		State.variables.return = passage();
	}
};
