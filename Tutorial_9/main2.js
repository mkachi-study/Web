var fs = require("fs");

var infile = fs.createReadStream("./output.txt", { flags: "r" });
var outFile = fs.createWriteStream("./output2.txt", { flags: "w" });

infile.on("data", function(data) {
	console.log("읽어 들인 데이터 %s", data.toString());
	outFile.write(data);
});

infile.on("end", function() {
	console.log("파일 읽기 종료");
	outFile.end(function() {
		console.log("파일 쓰기 종료");
	});
});
