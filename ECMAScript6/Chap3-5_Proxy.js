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

// isExtensible은 객체에 새로운 속성을 추가 가능 여부를 확인하는 메서드이다.
// Object.isExtensible을 호출한다면 trap이 작동한다.
console.log("=== isExtensible ===");
let handler4 = {
	isExtensible: function (target) {
		console.log("isExtensible trap");
		return Reflect.isExtensible(target);
	}
};
let proxy4 = new Proxy(target, handler4);
let proxy4Result = Object.isExtensible(proxy4);
console.log(proxy4Result);

// preventExtensions는 객체에 새로운 속성을 추가하는 것을 막습니다.
// Object.preventExtensions를 호출하면 trap이 작동한다.
console.log("=== preventExtensions ===");
let proxy5 = new Proxy(target, {
	preventExtensions: function (target) {
		console.log("preventExtensions trap");
		return Reflect.preventExtensions(target);
	}
});
Object.preventExtensions(proxy5);
console.log(Object.isExtensible(proxy5)); // preventExtensions를 사용해 isExtensible을 호출하면 false가 반환된다.

// defineProperty는 설명자가 있는 속성을 추가하는 메서드이다.
// Object.defineProperty를 호출하면 trap이 작동한다.
console.log("=== defineProperty ===");
let obj = {};
let proxy6 = new Proxy(obj, {
	defineProperty: function (target, prop, descriptor) {
		Reflect.defineProperty(target, prop, descriptor);
		console.log("defineProperty trap");
		return true;
	}
});

Object.defineProperty(proxy6, "key", {
	enumerable: false,
	configurable: false,
	writable: false,
	value: "static"
});
console.log(proxy6);

// getOwnPropertyDescriptor는 객체 속성의 descriptor를 읽는 메서드이다.
// Object.getOwnPropertyDescriptor를 호출하면 trap이 작동한다.
console.log("=== getOwnPropertyDescriptor ===");
let obj2 = {};
Object.defineProperty(obj2, "key", {
	configurable: true,
	enumerable: true,
	value: 10
});
let proxy7 = new Proxy(obj2, {
	getOwnPropertyDescriptor: function (target, prop) {
		console.log("getOwnPropertyDescriptor trap");
		return Reflect.getOwnPropertyDescriptor(target, prop);
	}
});
console.log(Object.getOwnPropertyDescriptor(proxy7, "key"));

// has trap은 in 연산자의 동작을 가로첸다.
// in은 객체에 속성의 존재여부를 확인할 수 있다.
console.log("=== has ===");
let obj3 = { a: 100, b: 200 };
let proxy8 = new Proxy(obj3, {
	has: function (target, prop) {
		console.log("has trap");
		let result = Reflect.has(target, prop);
		return result;
	}
});
console.log("a" in proxy8);

// get은 property를 가져올때 가로첸다.
console.log("=== get ===");
let proxy9 = new Proxy(obj3, {
	get: function (target, prop, receiver) {
		console.log("get trap");
		return Reflect.get(target, prop, receiver);
	}
});
console.log(proxy9.a);

// property를 delete 할때 가로첸다.
console.log("=== deleteProperty ===");
let proxy10 = new Proxy(obj3, {
	deleteProperty: function (target, prop) {
		console.log("deleteProperty trap");
		Reflect.deleteProperty(target, prop);
		return true;
	}
});
console.log(delete proxy10.a);
>>>>>>> dd5805a443cfd479c7d0639b30e7e56b54922354
