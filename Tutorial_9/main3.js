var fs = require("fs");

var inname = "./output.txt";
var outname = "./output2.txt";

fs.exists(outname, function(exists) {
	if (exists) {
		// unlink 파일 삭제함
		fs.unlink(outname, function(err) {
			if (err) {
				throw err;
			}
		});
	}
	var infile = fs.createReadStream(inname, { flags: "r" });
	var outfile = fs.createWriteStream(outname, { flags: "w" });
	infile.pipe(outfile);
	console.log("파일 복사 [" + inname + "] -> [" + outname + "]");
});
