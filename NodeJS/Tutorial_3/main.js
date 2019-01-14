var a = 10;
var str = "끄에에에엑";
var boolean = true;

// 값을 할당하지 않은 변수의 값
var undefinedValue = undefined;

// 존재하지 않음
var nullValue = null;

// 객체
var classInstance = {};

// 함수 선언1
function add1(a, b) {
	return a + b;
}

// 함수 선언2
var addFunc2 = function(a, b) {
	return a + b;
};

// 객체를 선언하는법
var person = {};
person["name"] = "사람";
person["age"] = 99;
person.address = "이건 주소입니다."; // . 연산자를 통해서 추가도 가능하다.
person.printInfo = function() {
	console.log(this.name); // 생성된 인스턴스의 프로퍼티는 this로 접근이 가능하다.
	console.log(this.age);
	console.log(this.address);
};
person.add = add1; // 기존에 선언한 함수도 추가 가능
person.add2 = addFunc2;

person.printInfo();

// json 포맷으로 객체를 선언
var person2 = {
	name: "사람2",
	age: 99,
	address: "끄아아아앙 이건 주소야아아아앙",
	printInfo: function() {
		console.log(this.name);
		console.log(this.age);
		console.log(this.address);
	}
};

person2.printInfo();

// 배열
var users = [
	{
		name: "사람1",
		age: 99
	},
	{
		name: "사람2",
		age: 100
	}
];

console.log("===== 배열 =====");
console.log("배열의 길이 %d", users.length);
console.log("===== 0번 =====");
console.log(users[0].name);
console.log(users[0].age);

console.log("===== 1번 =====");
console.log(users[1].name);
console.log(users[1].age);

users.push(function(a, b) {
	return a + b;
});

console.log("2번째에 넣은 함수 : %d", users[2](10, 20));

var users2 = [
	{
		name: "사람1",
		age: 99
	},
	{
		name: "사람2",
		age: 212312
	},
	{
		name: "사람2",
		age: 31342213
	},
	{
		name: "사람3",
		age: 41234124
	}
];

users2.forEach(function(item, index) {
	console.log("배열 요소 %d, name: %s, age: %d", index, item.name, item.age);
});

// 배열의 끝에 요소를 추가
users2.push({
	name: "사람4",
	age: 11902332408934
});

// 배열의 끝에 있는 요소를 삭제
users2.pop();

// 배열의 가장 첫 부분에 요소를 추가
users2.unshift({
	name: "쉬프트 사람1",
	age: 12313
});

console.log("===== unshift =====");
console.log(users2);

// 배열의 가장 첫 부분의 요소를 삭제
users2.shift();

console.log("===== shift =====");
console.log(users2);

// users2의 1번째 요소를 삭제
// delete로 삭제후 1번째는 undefined로 남아 있는다.
// 특정한 index의 요소를 제거해야 할 경우에는 공간까지 제거해주는 splice를 쓰는 것이 좋다.
delete users2[1];
console.log("===== delete =====");
console.log(users2);

// 1번째부터 1개의 요소를 제거한다.
users2.splice(1, 1);
console.log("===== splice =====");
console.log(users2);

// 0개의 요소를 지정할 경우 1번째에 새로운 요소를 삽입한다.
users2.splice(1, 0, { name: "Splice로 넣음", age: 99999 });
console.log("===== splice 1 0 =====");
console.log(users2);

// 1번째부터 2개의 요소를 제거한다.
// 단 반환 값은 제거된 요소들이 반환된다.
var users3 = users2.splice(1, 2);
console.log("===== splice return =====");

console.log("===== users2 =====");
console.log(users2);

console.log("===== users3 =====");
console.log(users3);
