// for ... of문은 iterator를 지닌 객체를 순회하는 for문이다.
// for...in forEach와 비슷한 역할을 한다.
let str = "forof문";
if (typeof str[Symbol.iterator]() == "object") { // 문자열에 iterator 메서드가 구현되어 있나 검사
    for (let value of str) {
        console.log(value);
    }
}

// for in 문은 배열에 속성이 들어있을 경우 속성 또한 순회하게 된다.
// 그 이유는 객체를 순회하면서 속성명을 문자열로 알려주기 때문
let arr = [1, 2, 3];
arr.add = 100;
for (let value in arr) {
    console.log(value + " " + typeof (value)); // 즉 in으로 순회하면 value는 문자열이다.
}

// 하지만 for of 문은 그렇지 않다.
for (let value of arr) {
    console.log(value + " " + typeof (value));
}