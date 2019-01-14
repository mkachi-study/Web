var fs = require("fs");
var data = fs.readFileSync("./Test.txt", "utf8");
console.log(data);

fs.readFile("./Test.txt", "utf8", function(err, data) {
	console.log("===== 비동기 =====");
	console.log(data);
});

console.log("프로젝트 폴더 안의 test.txt 파일을 읽도록 요청했습니다.");

fs.writeFile("./output.txt", "Hello World!", function(err) {
	if (err) {
		console.log("Error : " + err);
	}
	console.log("output.txt 파일에 데이터 쓰기 완료");
});
