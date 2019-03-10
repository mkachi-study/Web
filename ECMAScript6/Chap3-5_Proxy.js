function sample() { }
sample.prototype.a = 10;
sample.prototype.b = "Test";

let target = new sample();

let handler1 = {
	set: function (target, key, value, receiver) {
		console.log(key, " = ", value);
		console.log("set trap");

		// Relfect는 trap과 같은 api를 정적 메서드로 지니고 있다.
		// trap이 동작을 가로첸 후 Relfect가 원래의 동작을 수행하게 해준다.
		return Reflect.set(target, key, value, receiver);
	}
};

let proxy1 = new Proxy(target, handler1);

console.log(target);
console.log("=== set ===");
proxy1.a = 11; // 프록시로 만들어진 객체로 사용해야한다.

// getPrototypeOf는 프로토타입의 속성을 가져올때 가로챔
console.log("=== getPrototypeOf ===");
let handler2 = {
	getPrototypeOf: function (target) {
		console.log("getPrototypeOf trap");
		return Reflect.getPrototypeOf(target);
	}
};

let proxy2 = new Proxy(target, handler2);
proxy2.a = 10;
proxy2.b = 11;
let proto = proxy2.__proto__; // 프로토 타입 속성을 가져옴
console.log(proto);

// setPrototypeOf는 Object.setPrototypeOf 메서드의 동작을 가로챈다.
// 객체의 프로토타입 설정에 실패할 경우 Reflect.setPrototypeOf는 false를 반환한다.
// 성공시에는 true
console.log("=== setPrototypeOf ===");
let handler3 = {
	setPrototypeOf: function (target, proto) {
		let result = Reflect.setPrototypeOf(target, proto);
		console.log("setPrototypeOf : " + result);
		return result;
	}
};

let proxy3 = new Proxy(target, handler3);

// Object.setPrototypeOf는 객체의 프로토 타입을 설정해주는 메서드이다.
// 위에서 prototype으로 프로퍼티를 만들지 않았어도 Object.setPrototypeOf에서 설정해준다면 생성된다.
let proxy3PrototypeOf = Object.setPrototypeOf(proxy3, { a: 100, b: 100, c: 100 });
console.log(proxy3PrototypeOf.__proto__);