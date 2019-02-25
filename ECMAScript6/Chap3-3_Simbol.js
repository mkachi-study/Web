// 객체가 지닌 내장속성과 같은 이름의 속성을 추가하면 내장 속성의 값이 덮어 씌워진다.
// 하지만 심볼은 덮어 씌워지지 않는다.
// 심볼은 객체에 특정한 속성값을 추가하는 것이다.

let symbol = Symbol("Fuck");
console.log(symbol);

console.log(symbol == Symbol("Fuck"));

let arr1 = [1, 2, 3];
console.log(arr1.length);

// arr1의 내장 속성인 length에 값을 덮어 씌웠음
arr1.length = 100;
console.log(arr1.length);

let arr2 = [1, 2, 3];
let symbolLength = Symbol("length");
arr2[symbolLength] = 100;
console.log(arr2.length);
console.log(arr2[symbolLength]);

// 심볼로 추가한 속성은 속성이지만
// 일반적인 속성의 접근 방법으로는 접근 할 수 없다.
let test = [1, 2, 3];
let symbolTest = Symbol("Test");
test[symbolTest] = 999;
console.log(test.Test);

// 심볼로 추가한 속성은 for ... in 반복문 순회에 포함되지 않는다.
console.log("=== 속성값 순회 ===");
let arr3 = [1, 2, 3];
// 새로운 속성값을 추가함
arr3.test = 100;
for (let i in arr3) {
	console.log(i);
}

console.log("=== 심볼 ===");
let arr4 = [1, 2, 3];
let symbol2 = Symbol("Test");
// 심볼로 속성값을 추가함
arr4[symbol2] = 300;
for (let i in arr4) {
	console.log(i);
}
