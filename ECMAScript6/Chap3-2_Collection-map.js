// Map
let map1 = new Map();

console.log(map1.size);

let f = function () { };
map1.set(f, 100);
console.log(map1.size);

let object = {};
map1.set(object, 200);
console.log(map1.size);

// 채이닝 가능
map1.set("A", 111).set("B", 222);
console.log(map1.size);

console.log("=== get ===");
console.log(map1.get(f));
console.log(map1.get(object));

console.log("=== clear ===");
// clear는 map에 있는 모든 요소를 삭제함
map1.clear();
console.log(map1.size);

console.log("=== same key set ===");
map1.set(1, 100).set(1, 200);
console.log(map1.size);
// 같은 값을 넣을 경우 마지막에 넣은 값으로 바뀜
console.log(map1.get(1));

console.log("=== delete ===");
map1.delete(1); // key값이 일치하면 삭제함
console.log(map1.size);

// entries는 map의 iterator 객체를 반환한다
console.log("=== entries ===");
map1.clear();
map1.set(1, 100).set(2, 200).set(3, 300);
let mapIterator = map1.entries();
// { value : [ 1, 100], done: false }와 같은 형태로 value에 키값과 데이터가 쌍을 이루고 있음
console.log(mapIterator.next());
console.log(mapIterator.next());
console.log(mapIterator.next());
console.log(mapIterator.next());

console.log("=== forEach ===");
map1.forEach(function (value, key) {
    console.log(value, key);
});

console.log("=== has ===");
map1.clear();
map1.set(object, 100);
map1.set("A", 100);

if (map1.has("A")) {
    console.log("A라는 키값을 가지고 있음");
}

console.log("=== keys ===");
let keyIterator = map1.keys();
console.log(keyIterator.next());
console.log(keyIterator.next());
console.log(keyIterator.next());

console.log("=== values ===");
let valueIterator = map1.values();
console.log(valueIterator.next());
console.log(valueIterator.next());
console.log(valueIterator.next());

console.log("=== [@@iterator] ===");
// map1의 iterator를 가져옴
let symbolIterator = map1[Symbol.iterator]();
console.log(symbolIterator.next());
console.log(symbolIterator.next());
console.log(symbolIterator.next());