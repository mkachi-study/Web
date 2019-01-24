let str = "가나다";
for (let value of str) { // 문자열을 하나씩 전달함
    console.log(value);
}

let values = [10, 20, 30];
for (let value of values) { // 배열의 원소를 하나씩 전달함
    console.log(value);
}

let arr = [1, 2, 3];

// iterator 객체를 전달받은 후 next 메서드를 호출하여 iterator를 넘긴다.
let iterator1 = arr[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next()); // iterator의 끝은 done: true이다.

// iterator 객체는 다음과 같이 직접 구현하여 사용가능 하다.
let iterator2 = {
    i: 0, // 시작 값은 0
    next: function () {
        return (this.i < 10) ? { value: this.i += 2, done: false } : { value: undefined, done: true }; // 10까지 2씩 증가하는 iterator이다.
    }
};
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// arr2의 iterator를 직접 정의하여 2씩 증가하는 index를 만듬
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2[Symbol.iterator] = function () {
    return {
        i: 0,
        next: function () {
            if (this.i < this.length) {
                let result = this[this.i];
                this.i += 2;
                return { value: result, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
};