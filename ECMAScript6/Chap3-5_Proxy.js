function target() { }
target.prototype.a = 10;
target.prototype.b = "Test";

let handler = {
	set: function (target, key, value, receiver) {
		console.log(key, value);
		console.log("set trap");

		// Relfect는 trap과 같은 api를 정적 메서드로 지니고 있다.
		// trap이 동작을 가로첸 후 Relfect가 원래의 동작을 수행하게 해준다.
		return Reflect.set(target, key, value, receiver);
	}
};

let proxy = new Proxy(target, handler);

console.log(target);
console.log("=== data set ===");
target.a = 10;