function* gen() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = gen();

// iterator가 next되면 객체에 지정된 index가 움직여 유지된다.
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("=== Iterator ===");
for (let value of iterator) {
    console.log(value);
}

function* gen1(n) {
    yield n * 1;
    yield n * 2;
    yield n * 3;
}

function* gen2(n) {
    yield* gen1(n);
    yield* gen1(n);
    yield* gen1(n);
}

console.log("=== Iterator2 ===");
let iterator2 = gen2(2);
for (let value of iterator2) {
    console.log(value);
}

console.log("=== Iterator3 ===");
let iterator3 = gen();
console.log(iterator3.next());
console.log(iterator3.next());
// console.log(iterator3.throw());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());

console.log("=== Async Iterator ===");

function* generator4() {
    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve(1);
        }, 3000);
    });

    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve(2);
        }, 3000);
    });

    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve(3);
        }, 3000);
    });

    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve(4);
        }, 3000);
    });
}

let iterator4 = generator4();
for (let iter of iterator4) {
    iter.then(function (value) {
        console.log(value);
    });
}