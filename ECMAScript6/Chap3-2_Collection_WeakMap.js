// WeakMap은 Key 타입이 참조 타입만 허가
// js 에서 참조 타입은 primitive type 과 null, undefined를 제외한 객체, 배열, 함수이다.
// WeakMap은 iterator가 없다

let key1 = { Test: 1 };
let key2 = [1, 2, 3, 4];
let key3 = function() {
	console.log("Test Function");
};

let weakMap1 = new WeakMap();
weakMap1.set(key1, "Test1");
weakMap1.set(key2, "Test2");
weakMap1.set(key3, "Test3");

console.log(weakMap1.get(key1));
console.log(weakMap1.get(key2));
console.log(weakMap1.get(key3));

weakMap1.delete(key2);
console.log("=== Key2가 있는가 ===");
console.log(weakMap1.has(key2));
