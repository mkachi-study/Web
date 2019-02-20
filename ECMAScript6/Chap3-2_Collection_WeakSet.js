// WeakSet의 value는 참조타입만 가능하다.
let key1 = { Test: 1 };
let key2 = [1, 2, 3, 4];
let key3 = function() {
	console.log("Test Function");
};

let weakSet1 = new WeakSet();
weakSet1.add(key1);
weakSet1.add(key2);
weakSet1.add(key3);

console.log(weakSet1.has(key1));
console.log(weakSet1.has(key2));
console.log(weakSet1.has(key3));

console.log("=== key2 삭제 ===");
weakSet1.delete(key2);

console.log(weakSet1.has(key1));
console.log(weakSet1.has(key2));
console.log(weakSet1.has(key3));
