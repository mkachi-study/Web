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
        }, 1000);
    });

    yield new Promise(function (resolve) {
        setTimeout(function () {
            resolve(2);
        }, 1000);
    });
}

let iterator4 = generator4();
for (let iter of iterator4) {
    iter.then(function (value) {
        console.log(value);
    });
}

function* generator5() {
    function getValue(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value);
            }, 1000);
        });
    }

    yield getValue(3);
    yield getValue(4);
}

async function asyncPrint() {
    let iterator5 = generator5();
    for (let iter of iterator5) {
        console.log(await iter);
    }
}
asyncPrint();

function* generator6() {
    async function getValue(value) {
        await setTimeout(function () { }, 10000);
        return value;
    }

    yield getValue(5);
    yield getValue(6);
}

let iterator6 = generator6();
for (let iter of iterator6) {
    iter.then(function (value) {
        console.log(value);
    });
}