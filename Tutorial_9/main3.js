var fs = require("fs");

var inname = "./output.txt";
var outname = "./output2.txt";

fs.exists(outname, function(exists) {
	if (exists) {
		fs.unlink(outname, function(err) {
			if (err) {
				throw err;
			}
		});
	}
});
