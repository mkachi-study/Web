// 1. let과 var

// var는 함수 블록 이외의 블록에서는 변수의 값이 공유된다.
var a = 100;
function f1() {
	var a = 200;
	console.log(a);
}
f1();
console.log(a);

var b = 1;
if (b > 0) {
	var b = 2;
	console.log(b);
}
console.log(b);

// 하지만 let의 경우 블록 단위로 스코프를 맞추고 있다.
let c = 100;
if (c > 0) {
	let c = 200;
	console.log(c);
}
console.log(c);

// var는 같은 스코프내에서 동일한 이름의 변수를 중복으로 선언할 경우 값이 덮어 씌어지게 된다.
function f2() {
	var d = 100;
	console.log(d);
	var d = 300;
	console.log(d);
}
f2();

// let은 같은 이름의 변수를 중복선언 할 수 없다.
function f3() {
	let e = 100;
	// let e = 120; Error
	// var e = 200; var로 선언해도 마찬가지
	console.log(e);
}
f3();

// const는 처음 선언시 값을 지정해주어야 한다.
// 상수는 let과 같은 스코프 규칙을 지녔다.
// const f; Error 초기값을 반드시 지정해주어야함
const f = 10;
// f = 11; 값의 변경 또한 불가능
console.log(f);
