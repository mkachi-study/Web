let arr = [1, 2, 3, 4];
let arr2 = [0, arr[0], arr[1], arr[2], 5];
console.log(arr2);

let spreadArr2 = [0, ...arr, 4];
console.log(spreadArr2);

function fuck(p1, p2, p3) {
	console.log(p1 + " " + p2 + " " + p3);
}

// arr의 데이터가 fuck함수의 인자보다 많으면 fuck함수의 인자 갯수에 맞추어서 펼침
fuck(...arr);

// 객체도 펼침
let obj1 = { value3: 0.111, value4: 999 };
let obj2 = { value1: 10, value2: "asdfasdf", ...obj1 };
console.log(obj2);
