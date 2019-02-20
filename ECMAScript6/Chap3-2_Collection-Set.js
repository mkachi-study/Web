// set collection
let set = new Set([2, 2, 3, 4, 5, 1, 2, 3]);
console.log(set);
set.add(6);
console.log(set);
set.delete(5);
console.log(set);

// 2라는 원소를 가지고 있으면 true 없으면 false
console.log(set.has(2));

// Set collection의 iterator객체를 반환
let iterator = set.entries();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 일반적인 문자열을 하나만 넣게 될 경우 문자열의 원소들로 분해되어 들어감
let set2 = new Set("asdf");
console.log(set2);

let set3 = new Set(["asdf", "asdfasdf", "asdfasdfdd"]);
console.log(set3);

let keys = set2.keys();
for (let value of keys) {
    console.log(value);
}

let set4 = new Set({ a: 1, b: 1 });
// Key, Value와 같이 값이 쌍으로 이루어진 컨테이너가 아니라면 entries와 같다.
let keys4 = set4.keys(); // values도...
for (let value of keys4) {
    console.log(value);
}

set4.clear();
console.log(set4);