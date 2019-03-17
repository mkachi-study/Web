// 화살표 함수는 this, arguments, super, new, target과 같은 키 값들이 없다.
// 즉 객체로서 생성이 불가능하다.
// 함수 안에서 생상될 시 그 함수의 this를 공유한다.
let add = (a, b) => {
	console.log(a + b);
};

add(10, 20);

// 인자값이 하나일 경우 괄호 생략 가능
let printData = a => console.log(a);
printData(10);
