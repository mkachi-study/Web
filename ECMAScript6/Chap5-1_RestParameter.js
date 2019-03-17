// 자바스크립트는 함수에 전달되는 인자수가 동일하지 않아도 오류가 나지 않는다.
// 함수호출시 함수 내부에 arguments라는 객체가 생성되고 이 안에 인자값이 순서대로 들어간다.
function Test1(p1) {
	// 2번째 인자가 있을 경우
	if (arguments[1]) {
		return p1 + arguments[1];
	} else {
		return p1;
	}
}
console.log(Test1(100, 200));

// 하지만 위와 같은 방식은 함수의 인자 갯수를 넘는 인자들을 사용하는지 바로 알기 힘들다.
// 그래서 Spread Operator를 다음과 같이 사용한다.
function Test2(p1, ...args) {
	if (args[0]) {
		return p1 + args[0];
	} else {
		return p1;
	}
}
console.log(Test2(100, 200));

// Spread Operator로 값을 받았을 때 인자 값이 없어도
// args는 undefined가 아니다.
// 함수 호출시  데이터가 없는 args 배열이 생성됨
function Test3(...args) {
	console.log(args.length);
}
Test3();

// Default parameter
function Test4(a = 100) {
	console.log(a);
}
Test4();

// 나중에 선언된 default parameter를 다음과 같이 사용가능하다.
function Test5(a, b = 100, c = a + b) {
	console.log(a, b, c);
}
Test5(500);

// 인자가 undefined일시 default paramter가 적용된다.
function Test6(a = 100, b) {
	console.log(a, b);
}
Test6(undefined, 2);
