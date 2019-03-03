let target = {};
let handler = {
	set: function(target, key, value, receiver) {
		console.log(key, value);
		return Reflect.set(target, key, value, receiver);
	}
};

let proxy = new Proxy(target, handler);
proxy.name = "Test Proxy";

console.log(target);
