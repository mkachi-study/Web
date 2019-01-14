var util = require("util");
var eventEmitter = require("events").EventEmitter;

var Calc = function() {
	this.on("stop", function() {
		console.log("Calc에 stop event 전달됨");
	});
};

// Calc에 eventEmitter를 상속함
util.inherits(Calc, eventEmitter);
Calc.prototype.add = function(a, b) {
	return a + b;
};

module.exports = Calc;
module.exports.title = "Calculator";
