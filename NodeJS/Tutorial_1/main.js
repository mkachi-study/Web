console.log("Test");

var result = 0;
console.time("duration_sum");

for (var i = 1; i <= 1000; ++i) {
	result += i;
}

console.timeEnd("duration_sum");
console.log("1부터 1000까지 더한 결과물 : %d", result);

// __filename과 __dirname 은 전역변수이다.

// js의 이름을 포함한 경로
console.log("현재 실행한 파일의 이름 : %s", __filename);

// js가 있는 디렉토리의 경로
console.log("현재 실행한 파일의 경로 : %s", __dirname);

var person = {
	name: "이름입니다",
	age: 10
};

console.dir(person);
console.log(person);

// argv에는 프로그램 실행 파라미터가 들어간다.
// node main.js로 실행하였을 경우
// node가 설치된 경로 js의 이름을 포함한 경로 즉, __filename가 들어간다.
console.log(process.argv.length);

/*
for (var i = 0; i < process.argv.length; ++i) {
	console.log("%d번째 인자 : " + process.argv[i], i);
}
*/
process.argv.forEach(function(item, index) {
	console.log(index + "번째 인자 : ", item);
});

// console.log(process.env);
// console.log("OS의 환경변수 값 : " + process.env["OS"]);
