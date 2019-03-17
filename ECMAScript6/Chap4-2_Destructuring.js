let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// 다음과 같이 생략도 가능하다
let [a2, , c2] = [1, 2, 3];
console.log(a2, c2);

let [a3, b3, c3] = [1, , 3];
console.log(a3, b3, c3);

// 기본값 사용 가능
let [da1 = 100, da2 = 200, da3 = 300] = [1, , 3];
console.log(da1, da2, da3);

// d가 Spread로 접혀있을 경우 초기화할 값을 넣고 남은 구문을 전부 d에 배열로 초기화 한다.
let [a4, b4, c4, ...d] = [1, 2, 3, 4, 5];
console.log(a4, b4, c4, d);

// 객체도 가능함
// 객체는 초기화 하는 값의 속성 이름과 같은 것들만 초기화됨
let { a5, b5, c5 } = { a5: 100, b5: 200, c5: 300 };
console.log(a5, b5, c5);

let { a6, b6, c6 } = { a6: 20, c6: 30 };
console.log(a6, b6, c6);

// 객체도 기본값 사용 가능
// 속성을 초기화 하지 않거나 undefined일 경우 기본값이 적용된다
let { a7 = 100, b7 = 200, c7 = 300 } = { a7: 400, c7: undefined };
console.log(a7, b7, c7);
