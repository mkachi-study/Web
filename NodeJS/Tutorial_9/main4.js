/*
var fs = require("fs");
var http = require("http");
var server = http.createServer(function(req, res) {
	var instream = fs.createReadStream("./output.txt");
	instream.pipe(res); // pipe 메소드를 통해서 데이터 통신으로 주고받은 정보를 읽기와 쓰기를 할 수 있다.
});
server.listen(7001, "localhost");
*/
var fs = require("fs");
fs.mkdir("./docs", 0666, function(err) {
	if (err) {
		throw err;
	}
	console.log("새로운 docs폴더를 만들었습니다.");

	fs.rmdir("./docs", function(err) {
		if (err) {
			throw err;
		}
		console.log("docs폴더를 삭제했습니다");
	});
});
